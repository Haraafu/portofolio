"use client";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiBriefcase, FiCode, FiHome, FiLayers, FiMenu, FiMoon, FiPlay, FiSun, FiUser, FiX } from "react-icons/fi";
const links = [{ id: "home", label: "Overview", icon: FiHome }, { id: "about", label: "About", icon: FiUser }, { id: "projects", label: "Projects", icon: FiCode }, { id: "experience", label: "Experience", icon: FiBriefcase }, { id: "skills", label: "Skills", icon: FiLayers }];
export default function Navbar({ dark, onToggleTheme, onReplay }: { dark: boolean; onToggleTheme: () => void; onReplay: () => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-15% 0px -55% 0px", threshold: 0 });
    links.forEach(link => { const section = document.getElementById(link.id); if (section) observer.observe(section); });
    return () => observer.disconnect();
  }, []);
  return <>
    <a className="skip-content" href="#main-content">Skip to content</a>
    <header className="topbar"><a className="wordmark" href="#home"><span className="brand-mark">F<span>/</span>A</span><span>FALAH ANDHESRYO <small>PERSONAL PORTFOLIO</small></span></a>
      <nav className="desktop-nav" aria-label="Main navigation">{links.filter(x => ["home", "projects", "experience"].includes(x.id)).map(link => <a key={link.id} href={"#" + link.id} aria-current={active === link.id ? "location" : undefined}>{link.label}</a>)}</nav>
      <div className="topbar-actions"><button className="icon-button" onClick={onToggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>{dark ? <FiSun /> : <FiMoon />}</button><a className="header-contact" href="#contact">LET’S TALK <FiArrowUpRight /></a><button className="icon-button mobile-menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button></div>
    </header>
    {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" onKeyDown={e => { if (e.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".mobile-menu-toggle")?.focus(); } }}>{[...links, { id: "education", label: "Education", icon: FiLayers }, { id: "contact", label: "Contact", icon: FiUser }].map(link => <a key={link.id} href={"#" + link.id} onClick={() => setOpen(false)}>{link.label}<FiArrowUpRight /></a>)}<button onClick={() => { setOpen(false); onReplay(); }}><FiPlay /> Replay Link Start</button></nav>}
    <aside className="side-rail"><span className="rail-index">{String(links.findIndex(link => link.id === active) + 1).padStart(2, "0")} / 05</span><nav aria-label="Section shortcuts">{links.map(link => <a key={link.id} href={"#" + link.id} className={active === link.id ? "active" : ""} aria-label={link.label} aria-current={active === link.id ? "location" : undefined}><link.icon /><span>{link.label}</span></a>)}</nav><button className="replay-button" onClick={onReplay} aria-label="Replay Link Start"><FiPlay /></button><span className="rail-caption">EXPLORE THE INTERFACE</span></aside>
  </>;
}

