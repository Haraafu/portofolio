"use client";
import { useEffect, useRef } from "react";
export default function SectionAtmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      (entries) => {
        element.classList.toggle("is-visible", entries[0].isIntersecting);
      },
      { rootMargin: "80px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="section-atmosphere" aria-hidden="true">
      <div className="atmosphere-grid" />
      <div className="atmosphere-orbit">
        <span />
        <span />
        <span />
      </div>
      <div className="atmosphere-scan" />
      <div className="atmosphere-particles">
        <i />
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
