"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

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

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
            A selection of projects I&apos;ve built spanning AI, IoT, and automation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                  <HiOutlineSparkles
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.role && (
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {project.role}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 text-sm mb-3 leading-relaxed">
                {project.description}
              </p>
              <p className="text-slate-500 dark:text-slate-500 text-sm mb-5 leading-relaxed">
                {project.details}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/Haraafu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
          >
            <FiGithub size={16} />
            View more on GitHub
            <FiExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
