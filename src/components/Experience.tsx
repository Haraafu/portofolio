"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

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

export default function Experience() {
  const renderTimeline = (items: typeof professionalExperiences) => (
    <div className="relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-blue-200 dark:bg-blue-800 hidden md:block" />
      <div className="space-y-8">
        {items.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative md:pl-16"
          >
            <div className="absolute left-4 top-8 w-5 h-5 bg-blue-600 rounded-full border-4 border-blue-100 dark:border-slate-950 hidden md:block" />
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl md:hidden">
                    <FiBriefcase className="text-blue-600 dark:text-blue-400" size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {exp.org}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {exp.role}
                    </p>
                    {exp.location && (
                      <p className="text-xs text-slate-400 dark:text-slate-500">
                        {exp.location}
                      </p>
                    )}
                  </div>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
              </div>

              {exp.description && (
                <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">
                  {exp.description}
                </p>
              )}

              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
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
              Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Professional & Organizational Experience
          </h2>
        </motion.div>

        {/* Professional Experience */}
        <motion.h3
          className="text-xl font-bold text-slate-900 dark:text-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h3>
        {renderTimeline(professionalExperiences)}

        {/* Organizational Experience */}
        <motion.h3
          className="text-xl font-bold text-slate-900 dark:text-white mt-16 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Leadership & Organizational
        </motion.h3>
        {renderTimeline(organizationalExperiences)}
      </div>
    </section>
  );
}
