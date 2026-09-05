import {
  FiArrowUpRight,
  FiCpu,
  FiGithub,
  FiMessageSquare,
  FiRadio,
} from "react-icons/fi";
import SectionHeading from "./SectionHeading";
const projects = [
  {
    title: "NEXT Intelligence",
    role: "AI Engineer",
    description:
      "Developed transformer-based components for sensitive-information classification and text summarization.",
    details:
      "Integrated AI models into LangChain pipelines to support automated data-leak analysis and prioritization.",
    tags: ["Python", "Transformers", "LangChain"],
    color: "blue",
  },
  {
    title: "Mobile Stream Deck",
    role: "IoT Developer",
    description:
      "Built an IoT-based system that allows users to control desktop applications from a smartphone.",
    details:
      "Connected Blynk Cloud, an ESP32 device, and a Python desktop agent to execute commands in real time.",
    tags: ["ESP32", "Python", "Blynk"],
    color: "indigo",
  },
  {
    title: "Automated Job Posting WhatsApp Bot",
    role: "Backend Developer",
    description:
      "Developed a FastAPI backend that automatically formats job-posting information.",
    details:
      "Implemented a webhook-based workflow to deliver formatted postings to WhatsApp without manual processing.",
    tags: ["Python", "FastAPI", "Webhooks"],
    color: "cyan",
  },
];

const projectIcons = [FiCpu, FiRadio, FiMessageSquare];
export default function Projects() {
  return (
    <section id="projects" className="content-section section-wrap">
      <div className="section-title-row">
        <SectionHeading
          number="03"
          label="SELECTED WORK"
          title="Ideas, brought online."
          description="Experiments and practical solutions across AI, connected devices, and automation."
        />
        <a
          className="text-link"
          href="https://github.com/Haraafu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> All repositories <FiArrowUpRight />
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => {
          const Icon = projectIcons[i];
          return (
            <article className="project-card" key={project.title}>
              <div
                className={"project-art project-art-" + i}
                aria-hidden="true"
              >
                <span className="project-code">PROJECT / 00{i + 1}</span>
                <div className="art-grid" />
                <div className="project-art-orbit" />
                <Icon />
                <span className="art-caption">
                  {
                    [
                      "INTELLIGENCE SYSTEM",
                      "CONNECTED HARDWARE",
                      "AUTOMATED WORKFLOW",
                    ][i]
                  }
                </span>
              </div>
              <div className="project-body">
                <p className="system-label">
                  0{i + 1} / {project.role}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>{project.details}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
