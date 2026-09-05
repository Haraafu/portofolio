import SectionHeading from "./SectionHeading";
const professionalExperiences = [
  {
    org: "Avanade",
    role: "Artificial Intelligence Intern",
    period: "Jun 2026 - Present",
    location: "Jakarta, Indonesia",
    description: "",
    highlights: [
      "Built a proof-of-concept AI demo using Foundry IQ and Copilot Cowork within Microsoft 365 Copilot.",
      "Tested knowledge-grounded retrieval and task automation capabilities while adhering to project confidentiality requirements.",
    ],
  },
  {
    org: "RS Umum YARSI",
    role: "Information Technology Intern",
    period: "May 2026 - Jun 2026",
    location: "Jakarta, Indonesia",
    description: "",
    highlights: [
      "Developed responsive frontend components for an internal web application using React, JavaScript, HTML, and CSS.",
      "Implemented and refined application interfaces to improve usability, visual consistency, and responsiveness.",
    ],
  },
];

const organizationalExperiences = [
  {
    org: "MPM FTUI",
    role: "Chairman of Electrical Faction",
    period: "Nov 2024 - Nov 2025",
    location: "",
    description:
      "Majelis Permusyawaratan Mahasiswa FTUI is the legislative and judicial body at the faculty level that accommodates all organizations within IKM FTUI.",
    highlights: [
      "Received the highest number of votes in the election for MPM FTUI Electrical Faction Member, with a total of 187 votes.",
      "Supervised 26 student organizations under IKM FTUI and evaluated 78 IKG (Institutional Performance Evaluation) documents every three months for a year.",
      "Supervised 12 divisions within IME FTUI and assessed 64 IME FTUI programs every 3 months for a year.",
      "Successfully increased the Instagram engagement rate of MPM FTUI Electrical Faction by 25% within a year period.",
    ],
  },
  {
    org: "EXERCISE FTUI",
    role: "Staff of Training and Development",
    period: "Feb 2024 - Nov 2024",
    location: "",
    description:
      "Organization within the Faculty of Engineering at UI that develops students' competencies through professional environments and projects.",
    highlights: [
      "Served as PIC for Proteus Training 2024 and successfully recruited 25 participants within 4 days.",
      "Acted as Contact Person for EXERTION 2024 and successfully attracted 20 participants within 7 days.",
    ],
  },
  {
    org: "IME FTUI",
    role: "Staff of Research and Development",
    period: "Feb 2024 - Nov 2024",
    location: "",
    description:
      "Ikatan Mahasiswa Elektro FTUI is a student organization that represents all students of the Department of Electrical Engineering at the Faculty of Engineering, University of Indonesia.",
    highlights: [
      "Acted as the PIC for the Quality Control program, responsible for evaluating internal performance by reviewing 50+ organizational programs and reports.",
    ],
  },
];

function Timeline({ items }: { items: typeof professionalExperiences }) {
  return (
    <div className="timeline">
      {items.map((exp) => (
        <article className="timeline-item" key={exp.org}>
          <div className="timeline-meta">
            <span className="timeline-dot" />
            <p className="system-label">{exp.period}</p>
            {exp.location && <p className="muted">{exp.location}</p>}
          </div>
          <div className="timeline-content">
            <h4>{exp.org}</h4>
            <p className="timeline-role">{exp.role}</p>
            {exp.description && <p className="muted">{exp.description}</p>}
            <ul className="detail-list">
              {exp.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
export default function Experience() {
  return (
    <section id="experience" className="content-section section-wrap">
      <SectionHeading
        number="04"
        label="EXPERIENCE LOG"
        title="Progress through practice."
        description="Building useful technology. Supporting teams. Taking responsibility."
      />
      <h3 className="subsection-title">
        <span>01</span> Professional experience
      </h3>
      <Timeline items={professionalExperiences} />
      <h3 className="subsection-title">
        <span>02</span> Leadership & organizational
      </h3>
      <Timeline items={organizationalExperiences} />
    </section>
  );
}
