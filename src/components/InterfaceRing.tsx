export default function InterfaceRing({ className = "", filled = false }: { className?: string; filled?: boolean }) {
  return <svg viewBox="0 0 400 400" className={`interface-ring ${className}`} fill="none" aria-hidden="true">
    {filled && <g className="ring-fill">
      <circle cx="200" cy="200" r="181" fill="#5ac4e6" fillOpacity=".88" />
      <circle cx="200" cy="200" r="106" fill="#19abd1" />
      <circle cx="200" cy="200" r="174" stroke="#a48ada" strokeWidth="9" strokeDasharray="190 35 100 40" />
      <circle cx="200" cy="200" r="157" stroke="#afcdb0" strokeWidth="7" strokeDasharray="85 160 130 85" />
      <circle cx="200" cy="200" r="111" stroke="#d9f2f2" strokeWidth="1" />
      {[25, 85, 145, 205, 265, 325].map(angle => <path key={angle}
        transform={`rotate(${angle} 200 200)`} d="M196 59l4-3 4 3v5l-4 3-4-3z"
        fill="#27b8d4" stroke="#e8e1fa" strokeWidth="1" />)}
    </g>}
    <circle cx="200" cy="200" r="192" stroke="currentColor" strokeWidth="1" opacity=".25" />
    <g className="ring-clockwise">
      <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="7" strokeDasharray="180 24 70 16 220 30" opacity=".65" />
      <circle cx="200" cy="200" r="166" stroke="currentColor" strokeWidth="1" strokeDasharray="2 7" />
      <path d="M200 2v15M200 383v15M2 200h15M383 200h15" stroke="currentColor" strokeWidth="3" />
    </g>
    <g className="ring-counter">
      <circle cx="200" cy="200" r="151" stroke="var(--ring-secondary, currentColor)" strokeWidth="18" strokeDasharray="180 20 95 20 130 35" opacity=".3" />
      <circle cx="200" cy="200" r="137" stroke="currentColor" strokeWidth="2" opacity=".65" />
      <circle cx="200" cy="200" r="122" stroke="currentColor" strokeWidth="4" strokeDasharray="200 35 80 30" opacity=".3" />
    </g>
    <circle cx="200" cy="200" r="106" stroke="currentColor" opacity=".5" />
    <path d="M194 76h12M194 324h12M76 194v12M324 194v12" stroke="currentColor" strokeWidth="3" />
  </svg>;
}
