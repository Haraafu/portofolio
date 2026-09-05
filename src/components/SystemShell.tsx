"use client";
import { useEffect, useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import LinkStart from "./LinkStart";

export default function SystemShell({ children }: { children: ReactNode }) {
  const [entered, setEntered] = useState(false);
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setDark(document.documentElement.dataset.theme === "dark"), 0);
    return () => clearTimeout(timer);
  }, []);
  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { localStorage.setItem("falah-theme", next ? "dark" : "light"); } catch { /* Keep theme functional without storage. */ }
  }
  useEffect(() => {
    if (!entered) return;
    const frame = requestAnimationFrame(() => document.getElementById("main-content")?.focus({ preventScroll: true }));
    return () => cancelAnimationFrame(frame);
  }, [entered]);
  function enter() {
    setEntered(true);

  }
  return <>
    {!entered && <LinkStart onComplete={enter} dark={dark} onToggleTheme={toggleTheme} />}
    <div className={entered ? "portfolio is-entered" : "portfolio"}>
      <Navbar dark={dark} onToggleTheme={toggleTheme} onReplay={() => setEntered(false)} />
      {children}
    </div>
    <noscript><style>{`.link-start{display:none!important}.portfolio{visibility:visible!important}`}</style><p className="no-js">Enable JavaScript for the interactive introduction.</p></noscript>
  </>;
}


