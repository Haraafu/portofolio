"use client";
import { useEffect, useState, useRef, type ReactNode } from "react";
import Navbar from "./Navbar";
import LinkStart from "./LinkStart";
import MusicPlayer, { type MusicPlayerHandle } from "./MusicPlayer";

export default function SystemShell({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);
  const music = useRef<MusicPlayerHandle>(null);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const timer = setTimeout(
      () => setDark(document.documentElement.dataset.theme === "dark"),
      0,
    );
    return () => clearTimeout(timer);
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("falah-theme", next ? "dark" : "light");
    } catch {
      /* Keep theme functional without storage. */
    }
  }
  useEffect(() => {
    if (!entered) return;
    const frame = requestAnimationFrame(() =>
      document.getElementById("main-content")?.focus({ preventScroll: true }),
    );
    return () => cancelAnimationFrame(frame);
  }, [entered]);
  function enter() {
    music.current?.unlock();
    setEntered(true);
  }
  return (
    <>
      {!entered && (
        <LinkStart
          onComplete={enter}
          dark={dark}
          onToggleTheme={toggleTheme}
          onInteract={() => music.current?.unlock()}
        />
      )}
      <div className={entered ? "portfolio is-entered" : "portfolio"}>
        <Navbar
          dark={dark}
          onToggleTheme={toggleTheme}
          onReplay={() => setEntered(false)}
        />
        {children}
      </div>
      <MusicPlayer ref={music} active={entered} />
      <noscript>
        <style>{`.link-start{display:none!important}.portfolio{visibility:visible!important}`}</style>
        <p className="no-js">
          Enable JavaScript for the interactive introduction.
        </p>
      </noscript>
    </>
  );
}
