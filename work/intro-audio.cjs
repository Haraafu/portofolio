const fs=require('fs');const p='D:/falah/Documents/Projackssss/portofolio/src/components/LinkStart.tsx';let s=fs.readFileSync(p,'utf8');
s=s.replace('LINK_DURATION = 750','LINK_DURATION = 1400').replace('const [sound, setSound] = useState(false);','const [sound, setSound] = useState(true);').replace('const audio = useRef<AudioContext | null>(null);','const linkAudio = useRef<HTMLAudioElement>(null);\n  const checkAudio = useRef<HTMLAudioElement>(null);');
s=s.replace('if (audio.current) { void audio.current.close().catch(() => {}); audio.current = null; }','for (const player of [linkAudio.current, checkAudio.current]) {\n      if (player) { player.pause(); player.currentTime = 0; }\n    }');
const a=s.indexOf('    // Original synthesized tones');const b=s.indexOf('    const later =',a);
s=s.slice(0,a)+`    if (sound && linkAudio.current) {
      linkAudio.current.currentTime = 0;
      void linkAudio.current.play().catch(() => { /* Keep the intro usable if audio is unavailable. */ });
    }
`+s.slice(b);
s=s.replace('later(CHECK_START, () => setPhase("checks"));',`later(CHECK_START, () => {
      setPhase("checks");
      linkAudio.current?.pause();
      if (sound && checkAudio.current) {
        checkAudio.current.currentTime = 0;
        void checkAudio.current.play().catch(() => { /* Visual checks do not depend on audio loading. */ });
      }
    });`);
s=s.replace(/\{phase === "link" && <div className="link-word"[^\n]+/, '{phase === "link" && <span className="sr-only" id="link-title">Connecting</span>}');
s=s.replace('    <div className="intro-top">','    <audio ref={linkAudio} src="/link%20start.ogg" preload="auto" />\n    <audio ref={checkAudio} src="/system%20check.ogg" preload="auto" />\n    <div className="intro-top">');
fs.writeFileSync(p,s);
fs.appendFileSync('D:/falah/Documents/Projackssss/portofolio/src/app/globals.css',`
/* A blank 1.4-second beat lets the supplied Link Start voice lead the intro. */
.phase-link { background-image: none; }
.phase-link .intro-top, .phase-link .intro-bottom { visibility: hidden; }
.phase-link .intro-bottom:focus-within { visibility: visible; }
`);

