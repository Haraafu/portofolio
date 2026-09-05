const fs=require('fs');const root='D:/falah/Documents/Projackssss/portofolio/src/components/';
let shell=fs.readFileSync(root+'SystemShell.tsx','utf8').replace('useEffect, useState,','useEffect, useState, useRef,');
shell=shell.replace('import LinkStart from "./LinkStart";','import LinkStart from "./LinkStart";\nimport MusicPlayer, { type MusicPlayerHandle } from "./MusicPlayer";');
shell=shell.replace('const [entered, setEntered] = useState(false);','const [entered, setEntered] = useState(false);\n  const music = useRef<MusicPlayerHandle>(null);');
shell=shell.replace('function enter() {\n    setEntered(true);','function enter() {\n    music.current?.unlock();\n    setEntered(true);');
shell=shell.replace('onToggleTheme={toggleTheme} />}', 'onToggleTheme={toggleTheme} onInteract={() => music.current?.unlock()} />}');
shell=shell.replace('    <noscript>', '    <MusicPlayer ref={music} active={entered} />\n    <noscript>');
fs.writeFileSync(root+'SystemShell.tsx',shell);
let intro=fs.readFileSync(root+'LinkStart.tsx','utf8');
intro=intro.replace('onComplete, dark, onToggleTheme }: { onComplete: () => void; dark: boolean; onToggleTheme: () => void }','onComplete, dark, onToggleTheme, onInteract }: { onComplete: () => void; dark: boolean; onToggleTheme: () => void; onInteract?: () => void }');
intro=intro.replace('    started.current = true;', '    started.current = true;\n    onInteract?.();');
fs.writeFileSync(root+'LinkStart.tsx',intro);
for(const file of ['SectionHeading.tsx','Contact.tsx']) {
 let s=fs.readFileSync(root+file,'utf8');s='import SectionAtmosphere from "./SectionAtmosphere";\n'+s;
 s=file==='SectionHeading.tsx'?s.replace('<div className="section-heading">','<div className="section-heading"><SectionAtmosphere />'):s.replace('<section id="contact" className="contact-section section-wrap">','<section id="contact" className="contact-section section-wrap"><SectionAtmosphere />');
 fs.writeFileSync(root+file,s);
}

