"use client";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  FiChevronDown,
  FiMusic,
  FiPause,
  FiPlay,
  FiRepeat,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import { MusicAudio } from "./music-audio";
export type MusicPlayerHandle = { unlock: () => void };
const clock = (seconds: number) =>
  Math.floor(seconds / 60) +
  ":" +
  String(Math.floor(seconds % 60)).padStart(2, "0");

const MusicPlayer = forwardRef<MusicPlayerHandle, { active: boolean }>(
  function MusicPlayer({ active }, ref) {
    const engine = useRef<MusicAudio | null>(null);
    const wanted = useRef(true);
    const reopen = useRef<HTMLButtonElement>(null);
    const hide = useRef<HTMLButtonElement>(null);
    const [hidden, setHidden] = useState(false);
    const [playing, setPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [position, setPosition] = useState(0);
    const [volume, setVolume] = useState(0.35);
    const [muted, setMuted] = useState(false);
    const [error, setError] = useState("");
    const getEngine = useCallback(() => {
      if (!engine.current)
        engine.current = new MusicAudio((isPlaying, length, message = "") => {
          setPlaying(isPlaying);
          setDuration(length);
          setError(message);
        });
      return engine.current;
    }, []);
    useImperativeHandle(ref, () => ({ unlock: () => getEngine().unlock() }), [
      getEngine,
    ]);
    useEffect(() => {
      const player = getEngine();
      if (active && wanted.current) void player.play();
      else player.pause();
    }, [active, getEngine]);
    useEffect(
      () => () => {
        engine.current?.dispose();
        engine.current = null;
      },
      [],
    );
    useEffect(() => {
      if (!active) return;
      const timer = setInterval(
        () => setPosition(engine.current?.position || 0),
        250,
      );
      return () => clearInterval(timer);
    }, [active]);
    function togglePlayback() {
      if (playing) {
        wanted.current = false;
        engine.current?.pause();
      } else {
        wanted.current = true;
        void getEngine().play();
      }
    }
    function collapse(next: boolean) {
      setHidden(next);
      requestAnimationFrame(() =>
        (next ? reopen.current : hide.current)?.focus(),
      );
    }
    if (!active) return null;
    return (
      <aside
        className={"music-widget " + (playing ? "is-playing" : "")}
        aria-label="Background music player"
      >
        {hidden ? (
          <button
            ref={reopen}
            className="music-reopen"
            onClick={() => collapse(false)}
            aria-label="Show music player"
            title="Show music player"
          >
            <FiMusic />
            <span className="music-mini-dot" />
          </button>
        ) : (
          <div className="music-panel">
            <div className="music-topline">
              <span>
                <i /> NOW PLAYING
              </span>
              <button
                ref={hide}
                aria-label="Hide music player"
                onClick={() => collapse(true)}
              >
                <FiChevronDown />
              </button>
            </div>
            <div className="music-track">
              <div className="music-art" aria-hidden="true">
                <FiMusic />
                <div className="music-bars">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              </div>
              <div>
                <strong>Portfolio soundtrack</strong>
                <span>Falah’s world · BGM</span>
              </div>
              <button
                className="music-play"
                onClick={togglePlayback}
                aria-label={
                  playing ? "Pause background music" : "Play background music"
                }
              >
                {playing ? <FiPause /> : <FiPlay />}
              </button>
            </div>
            <label className="sr-only" htmlFor="music-seek">
              Playback position
            </label>
            <input
              id="music-seek"
              className="music-seek"
              type="range"
              min="0"
              max={duration || 1}
              step=".1"
              value={Math.min(position, duration || 1)}
              disabled={!duration}
              onChange={(e) => {
                const value = Number(e.target.value);
                engine.current?.seek(value);
                setPosition(value);
              }}
            />
            <div className="music-controls">
              <span className="music-time">
                {clock(position)} / {clock(duration)}
              </span>
              <span
                className="music-loop"
                title="Continuous loop"
                aria-label="Loop enabled"
              >
                <FiRepeat />
              </span>
              <button
                aria-label={
                  muted ? "Unmute background music" : "Mute background music"
                }
                onClick={() => {
                  setMuted(!muted);
                  engine.current?.setVolume(!muted ? 0 : volume);
                }}
              >
                {muted ? <FiVolumeX /> : <FiVolume2 />}
              </button>
              <label className="sr-only" htmlFor="music-volume">
                Music volume
              </label>
              <input
                id="music-volume"
                type="range"
                min="0"
                max="1"
                step=".01"
                value={muted ? 0 : volume}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setVolume(value);
                  setMuted(false);
                  engine.current?.setVolume(value);
                }}
              />
            </div>
            {error && (
              <p className="music-error" role="status">
                {error}
              </p>
            )}
          </div>
        )}
      </aside>
    );
  },
);
export default MusicPlayer;
