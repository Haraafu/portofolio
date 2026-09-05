import { FiAward, FiCode, FiCpu, FiGlobe, FiLayout, FiTool, FiUsers } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
const programmingSkills = [
  "Python",
  "Java",
  "JavaScript",
  "C",
  "Assembly",
  "Lua",
];

const aiDataSkills = [
  "Transformers",
  "LangChain",
  "Foundry IQ",
  "Copilot Cowork",
  "Gemini API",
  "Ollama",
];

const webDevSkills = [
  "React",
  "React Native",
  "FastAPI",
  "HTML",
  "CSS",
  "MongoDB",
];

const iotToolsSkills = [
  "ESP32",
  "Blynk",
  "Proteus",
  "Git",
  "GitHub",
  "Figma",
  "Unity",
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Collaboration",
  "Time Management",
  "Communication",
  "Leadership",
  "Adaptability",
];

const achievements = [
  "3rd Place — UI x Microsoft Hackathon (2025)",
  "3rd Place — OIM FTUI - PI Category (2024)",
  "Geo Winner — Lenovo Global Technology Innovation Challenge (2021)",
];

const committees = [
  "OPPO Community Indonesia",
  "Career Talk UI",
  "Insight UI",
  "OKK UI",
  "OIM FTUI",
  "PSB DTE",
  "SATIS",
  "ECHA",
  "B3 Perhimak UI",
];


const groups = [{ title: "Programming", icon: FiCode, items: programmingSkills }, { title: "AI & Data", icon: FiCpu, items: aiDataSkills }, { title: "Web Development", icon: FiLayout, items: webDevSkills }, { title: "IoT & Tools", icon: FiTool, items: iotToolsSkills }, { title: "Human Skills", icon: FiUsers, items: softSkills }];
export default function Skills() {
 return <section id="skills" className="content-section section-wrap"><SectionHeading number="05" label="SKILL INVENTORY" title="Equipped to make an impact." description="A toolkit that keeps growing, one challenge at a time." />
 <div className="skills-grid">{groups.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-heading"><group.icon /><span className="system-label">0{i + 1}</span></div><h3>{group.title}</h3><div className="tags">{group.items.map(skill => <span key={skill}>{skill}</span>)}</div></article>)}
 <article className="skill-card achievement-card"><div className="skill-card-heading"><FiAward /><span className="system-label">06</span></div><h3>Achievements</h3><ul className="detail-list">{achievements.map(a => <li key={a}>{a}</li>)}</ul></article></div>
 <div className="community-panel"><div><FiGlobe /><h3>Beyond the technical</h3><p>Duolingo English Test — <strong>125</strong><br /><span className="muted">Certified Nov 2025</span></p></div><div><p className="system-label">COMMUNITIES & COMMITTEES</p><div className="tags">{committees.map(c => <span key={c}>{c}</span>)}</div></div></div></section>;
}
