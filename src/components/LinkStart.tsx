"use client";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import {
  FiArrowRight,
  FiMoon,
  FiSun,
  FiVolume2,
  FiVolumeX,
} from "react-icons/fi";
import InterfaceRing from "./InterfaceRing";
// Stage durations are explicit so visuals and audio share the same timeline.
const LINK_DURATION = 1400;
const TUNNEL_DURATION = 2000;
const RINGS_DURATION = 3000;
const CHECK_START = LINK_DURATION + TUNNEL_DURATION;
const WELCOME_AT = CHECK_START + RINGS_DURATION;
const CONFIRM_AT = CHECK_START + 2300;
const SWEEP_AT = CHECK_START + 2450;
// The opening pair grows together; the second has a slower, smaller arrival.
const CHECKS = [
  { label: "Connection", appear: 0, grow: 320, ok: 340, dock: 460 },
  { label: "Sight", appear: 0, grow: 440, ok: 560, dock: 680 },
  { label: "Hearing", appear: 840, grow: 240, ok: 1090, dock: 1180 },
  { label: "Touch", appear: 1290, grow: 240, ok: 1540, dock: 1630 },
  { label: "Balance", appear: 1740, grow: 240, ok: 1990, dock: 2080 },
];

type Phase = "ready" | "link" | "tunnel" | "checks" | "welcome";

function Tunnel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    let width = 0,
      height = 0,
      frame = 0,
      previous = 0;
    const colors = [
      "#00bdcc",
      "#da37c6",
      "#ccd91b",
      "#75827e",
      "#7bcf6a",
      "#9982dc",
    ];
    const random = (seed: number) => {
      const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
      return value - Math.floor(value);
    };
    const particles = Array.from({ length: 240 }, (_, i) => ({
      angle: random(i + 1) * Math.PI * 2,
      radius: 20 + random(i + 401) * 320,
      z: 0.05 + random(i + 801) * 3,
      color: colors[i % colors.length],
    }));
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = (time: number) => {
      const dt = previous ? Math.min((time - previous) / 1000, 0.05) : 0.016;
      previous = time;
      ctx.fillStyle = "#f5f7f3";
      ctx.fillRect(0, 0, width, height);
      for (const p of particles) {
        p.z -= dt * 1.4;
        if (p.z < 0.035) p.z += 3;
        const scale = Math.min(width, height) / 750;
        const x = Math.cos(p.angle) * p.radius * scale,
          y = Math.sin(p.angle) * p.radius * scale;
        ctx.beginPath();
        ctx.moveTo(width / 2 + x / (p.z + 0.45), height / 2 + y / (p.z + 0.45));
        ctx.lineTo(width / 2 + x / p.z, height / 2 + y / p.z);
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = Math.min(1, (3.05 - p.z) * 0.7);
        ctx.lineWidth = Math.min(70, 4 / p.z);
        ctx.lineCap = "round";
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      const glow = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        65,
      );
      glow.addColorStop(0, "#fff");
      glow.addColorStop(1, "#ffffff00");
      ctx.fillStyle = glow;
      ctx.fillRect(width / 2 - 65, height / 2 - 65, 130, 130);
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <canvas ref={canvasRef} className="tunnel-canvas" aria-hidden="true" />
  );
}

export default function LinkStart({
  onComplete,
  dark,
  onToggleTheme,
  onInteract,
}: {
  onComplete: () => void;
  dark: boolean;
  onToggleTheme: () => void;
  onInteract?: () => void;
}) {
  const [phase, setPhase] = useState<Phase>("ready");
  const [sound, setSound] = useState(true);
  const [check, setCheck] = useState(0);
  const [visibleChecks, setVisibleChecks] = useState(0);
  const [dockedChecks, setDockedChecks] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [sweeping, setSweeping] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const startButton = useRef<HTMLButtonElement>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const linkAudio = useRef<HTMLAudioElement>(null);
  const checkAudio = useRef<HTMLAudioElement>(null);
  const started = useRef(false);
  const completeRef = useRef(onComplete);
  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);
  const clear = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    for (const player of [linkAudio.current, checkAudio.current]) {
      if (player) {
        player.pause();
        player.currentTime = 0;
      }
    }
  }, []);
  const finish = useCallback(() => {
    clear();
    completeRef.current();
  }, [clear]);
  useEffect(() => {
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const portfolio = document.querySelector<HTMLElement>(".portfolio");
    if (portfolio) portfolio.inert = true;
    startButton.current?.focus();
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => {
      if (media.matches && started.current) finish();
    };
    media.addEventListener("change", change);
    return () => {
      clear();
      if (portfolio) portfolio.inert = false;
      document.body.style.overflow = old;
      media.removeEventListener("change", change);
    };
  }, [clear, finish]);
  function start() {
    if (started.current) return;
    started.current = true;
    onInteract?.();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }
    setPhase("link");
    dialog.current?.focus();
    if (sound && linkAudio.current) {
      linkAudio.current.currentTime = 0;
      void linkAudio.current.play().catch(() => {
        /* Keep the intro usable if audio is unavailable. */
      });
    }
    const later = (ms: number, fn: () => void) =>
      timers.current.push(setTimeout(fn, ms));
    later(LINK_DURATION, () => setPhase("tunnel"));
    later(CHECK_START, () => {
      setPhase("checks");
      linkAudio.current?.pause();
      if (sound && checkAudio.current) {
        checkAudio.current.currentTime = 0;
        void checkAudio.current.play().catch(() => {
          /* Visual checks do not depend on audio loading. */
        });
      }
    });
    CHECKS.forEach((item, i) => {
      later(CHECK_START + item.appear, () => setVisibleChecks(i + 1));
      later(CHECK_START + item.ok, () => setCheck(i + 1));
      later(CHECK_START + item.dock, () => setDockedChecks(i + 1));
    });
    later(CONFIRM_AT, () => setConfirmed(true));
    later(SWEEP_AT, () => setSweeping(true));
    later(WELCOME_AT, () => setPhase("welcome"));
    later(WELCOME_AT + 900, finish);
  }
  return (
    <div
      ref={dialog}
      className={`link-start phase-${phase}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="link-title"
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key === "Escape") finish();
        if (event.key === "Tab") {
          const items = Array.from(
            dialog.current?.querySelectorAll<HTMLButtonElement>(
              "button:not(:disabled)",
            ) ?? [],
          );
          const first = items[0],
            last = items[items.length - 1];
          if (
            event.shiftKey &&
            (document.activeElement === first ||
              document.activeElement === dialog.current)
          ) {
            event.preventDefault();
            last?.focus();
          } else if (
            !event.shiftKey &&
            (document.activeElement === last ||
              document.activeElement === dialog.current)
          ) {
            event.preventDefault();
            first?.focus();
          }
        }
      }}
    >
      <audio ref={linkAudio} src="/link%20start.ogg" preload="auto" />
      <audio ref={checkAudio} src="/system%20check.ogg" preload="auto" />
      <div className="intro-top">
        <div className="wordmark">
          <span className="brand-mark">
            F<span>/</span>A
          </span>
          <span>
            FALAH ANDHESRYO <small>PERSONAL PORTFOLIO</small>
          </span>
        </div>
        <span className="system-label">IMMERSIVE EXPERIENCE / 01</span>
      </div>
      {phase === "tunnel" && <Tunnel />}
      <div className="intro-center">
        {phase === "ready" && (
          <div className="ready-content">
            <h1 id="link-title">
              Ready to <em>dive in?</em>
            </h1>
            <button
              ref={startButton}
              className="button button-primary link-button"
              onClick={start}
            >
              START
            </button>
          </div>
        )}
        {phase === "link" && (
          <span className="sr-only" id="link-title">
            Connecting
          </span>
        )}
        {phase === "tunnel" && (
          <span className="sr-only" id="link-title">
            Traveling through the connection tunnel
          </span>
        )}
        {phase === "checks" && (
          <div
            className={`checks-content ${confirmed ? "checks-confirmed" : ""} ${sweeping ? "checks-sweeping" : ""}`}
          >
            <p className="eyebrow" id="link-title">
              ESTABLISHING CONNECTION
            </p>
            <div className="check-rings">
              {CHECKS.slice(0, visibleChecks).map((item, i) => (
                <div
                  className={`check-unit ${check > i ? "checked" : ""} ${dockedChecks > i ? "is-docked" : ""}`}
                  style={
                    {
                      "--check-index": i,
                      "--grow-duration": item.grow + "ms",
                    } as CSSProperties
                  }
                  key={item.label}
                >
                  <div className="check-orbit">
                    <InterfaceRing filled />
                    <span>{check > i ? "OK" : item.label}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="check-progress">
              <div className="connection-track">
                <span style={{ width: `${check * 20}%` }} />
              </div>
              <p className="system-label">
                {dockedChecks === CHECKS.length
                  ? "ALL SYSTEMS READY"
                  : "SYNCHRONIZING INTERFACE"}
              </p>
            </div>
          </div>
        )}
        {phase === "welcome" && (
          <div className="welcome-content">
            <span className="welcome-check">✓</span>
            <p className="eyebrow">CONNECTION COMPLETE</p>
            <h2 id="link-title">
              Welcome to <em>my world.</em>
            </h2>
          </div>
        )}
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        {phase === "ready"
          ? "Ready to start"
          : phase === "checks"
            ? "Checking systems"
            : phase === "welcome"
              ? "Connection complete. Opening portfolio."
              : "Connecting"}
      </p>
      <div className="intro-bottom">
        <div className="intro-settings">
          <button
            className="icon-button"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={onToggleTheme}
          >
            {dark ? <FiSun /> : <FiMoon />}
          </button>
          <button
            className="sound-button"
            disabled={phase !== "ready"}
            aria-pressed={sound}
            onClick={() => setSound(!sound)}
          >
            {sound ? <FiVolume2 /> : <FiVolumeX />} SOUND {sound ? "ON" : "OFF"}
          </button>
        </div>
        <button className="skip-button" onClick={finish}>
          Skip intro <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
