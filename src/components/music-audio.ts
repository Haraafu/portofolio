// Build one continuous loop by blending its tail into its head.
// The source file remains unchanged; all processing happens in memory.
export function blendLoop(
  context: BaseAudioContext,
  input: AudioBuffer,
): AudioBuffer {
  const fade = Math.min(
    Math.round(input.sampleRate * 1.2),
    Math.floor(input.length / 8),
  );
  if (fade < 2) return input;
  const length = input.length - fade;
  const output = context.createBuffer(
    input.numberOfChannels,
    length,
    input.sampleRate,
  );
  for (let channel = 0; channel < input.numberOfChannels; channel++) {
    const source = input.getChannelData(channel);
    const target = output.getChannelData(channel);
    target.set(source.subarray(fade, input.length - fade));
    for (let i = 0; i < fade; i++) {
      const t = i / (fade - 1);
      // Complementary smooth weights avoid a volume spike with correlated audio.
      const weight = t * t * (3 - 2 * t);
      target[length - fade + i] =
        source[input.length - fade + i] * (1 - weight) + source[i] * weight;
    }
  }
  return output;
}

export class MusicAudio {
  private context: AudioContext | null = null;
  private gain: GainNode | null = null;
  private buffer: AudioBuffer | null = null;
  private source: AudioBufferSourceNode | null = null;
  private loading: Promise<void> | null = null;
  private abort = new AbortController();
  private requested = false;
  private disposed = false;
  private startTime = 0;
  private offset = 0;
  private volume = 0.35;
  constructor(
    private notify: (
      playing: boolean,
      duration: number,
      error?: string,
    ) => void,
  ) {}
  private init() {
    if (!this.context) {
      this.context = new AudioContext();
      this.gain = this.context.createGain();
      this.gain.gain.value = this.volume;
      this.gain.connect(this.context.destination);
    }
    return this.context;
  }
  unlock() {
    if (this.disposed) return;
    try {
      const context = this.init();
      void context.resume().catch(() => {});
      void this.load().catch(() => {});
    } catch {
      this.notify(false, 0, "Audio is unavailable in this browser.");
    }
  }
  private load(): Promise<void> {
    if (this.buffer) return Promise.resolve();
    if (this.loading) return this.loading;
    const context = this.init();
    this.loading = (async () => {
      const response = await fetch("/bgm.ogg", { signal: this.abort.signal });
      if (!response.ok) throw new Error("Soundtrack could not load.");
      const decoded = await context.decodeAudioData(
        await response.arrayBuffer(),
      );
      if (this.disposed) return;
      this.buffer = blendLoop(context, decoded);
      this.notify(false, this.buffer.duration);
    })().catch((error) => {
      this.loading = null;
      throw error;
    });
    return this.loading;
  }
  async play() {
    if (this.disposed) return;
    this.requested = true;
    try {
      const context = this.init();
      await context.resume();
      await this.load();
      if (
        !this.requested ||
        this.disposed ||
        !this.buffer ||
        !this.gain ||
        this.source
      )
        return;
      const source = context.createBufferSource();
      source.buffer = this.buffer;
      source.loop = true;
      source.connect(this.gain);
      this.gain.gain.cancelScheduledValues(context.currentTime);
      this.gain.gain.setValueAtTime(0, context.currentTime);
      this.gain.gain.linearRampToValueAtTime(
        this.volume,
        context.currentTime + 0.8,
      );
      this.startTime = context.currentTime;
      source.start(0, this.offset % this.buffer.duration);
      this.source = source;
      this.notify(true, this.buffer.duration);
    } catch {
      if (!this.disposed)
        this.notify(
          false,
          this.buffer?.duration || 0,
          "Tap play to start the soundtrack.",
        );
    }
  }
  get position() {
    const elapsed =
      this.source && this.context
        ? this.context.currentTime - this.startTime
        : 0;
    return this.buffer ? (this.offset + elapsed) % this.buffer.duration : 0;
  }
  pause() {
    this.requested = false;
    this.offset = this.position;
    if (this.source) {
      this.source.stop();
      this.source.disconnect();
      this.source = null;
    }
    if (!this.disposed) this.notify(false, this.buffer?.duration || 0);
  }
  seek(position: number) {
    const playing = Boolean(this.source);
    this.pause();
    this.offset = Math.max(
      0,
      Math.min(position, Math.max(0, (this.buffer?.duration || 0) - 0.01)),
    );
    if (playing) void this.play();
  }
  setVolume(value: number) {
    this.volume = value;
    if (this.gain && this.context)
      this.gain.gain.setTargetAtTime(value, this.context.currentTime, 0.08);
  }
  dispose() {
    this.disposed = true;
    this.abort.abort();
    this.pause();
    void this.context?.close().catch(() => {});
  }
}
