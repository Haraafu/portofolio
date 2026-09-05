import Image from "next/image";
import { FiArrowDownRight, FiMapPin } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
const education = [
  {
    school: "University of Indonesia",
    shortName: "UI",
    location: "Depok, West Java",
    degree: "Undergraduate in Computer Engineering",
    gpa: "3.71 / 4.00",
    period: "Aug 2023 - Expected Jul 2027",
    image: "/ui.webp",
    highlights: [
      "Strong academic focus in Object-Oriented Programming, Software Engineering, Cyber Security, and Database Systems.",
      "Represented the University of Indonesia in Ruangguru's Clash of Champions event, successfully placing in the Top 30.",
      "Served as a Teaching Assistant for the Computational Thinking course, supervising over 30 students throughout a 16-week academic period.",
      "Acted as a Brand Ambassador and speaker, representing organizations at 15+ events.",
    ],
  },
  {
    school: "Peter the Great St. Petersburg Polytechnic University",
    shortName: "SPbPU",
    location: "St. Petersburg, Russia",
    degree: "Artificial Intelligence Innovator Short Course",
    gpa: null,
    period: "Nov 2025 - Dec 2025",
    image: "/spbpu.webp",
    highlights: [
      "Selected as the only representative from Indonesia as a scholarship recipient for a 2-week Artificial Intelligence short course organized by the Russian Ministry of Education and Science, joining participants from 10+ countries.",
      "Strong understanding of AI applications across startup development, industrial systems, supply chain, and engineering design.",
      "Won 3rd Place in the Engineering Championship by competing in a team-based engineering creativity and collaboration challenge against 200+ participants.",
    ],
  },
];


export default function Education() {
 return <section id="education" className="content-section section-wrap">
 <SectionHeading number="02" label="THE JOURNEY" title="Learning without borders." description="From Jakarta to St. Petersburg. A growing perspective on what technology can do." />
 <div className="education-grid">{education.map((edu, i) => <article className="education-card" key={edu.shortName}>
 <div className="education-photo"><Image src={edu.image} alt={edu.school} fill sizes="(max-width: 760px) 90vw, 550px" /><span className="education-number">0{i + 1} / {edu.shortName}</span>{edu.gpa && <span className="gpa-badge">GPA {edu.gpa}</span>}</div>
 <div className="education-body"><p className="system-label">{edu.period}</p><h3>{edu.school}</h3><p className="education-degree">{edu.degree}</p><p className="location muted"><FiMapPin />{edu.location}</p>
 <details className="education-details"><summary>Highlights & achievements <FiArrowDownRight /></summary><ul className="detail-list">{edu.highlights.map(item => <li key={item}>{item}</li>)}</ul></details></div></article>)}</div></section>;
}
