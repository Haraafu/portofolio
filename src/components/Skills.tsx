"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiLayout,
  FiTool,
  FiUsers,
  FiAward,
  FiGlobe,
} from "react-icons/fi";

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

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
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
              Skills & Achievements
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12">
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <FiCode className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Programming
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI & Data */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <FiCpu className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                AI & Data
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {aiDataSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Web Development */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <FiLayout className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Web Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {webDevSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* IoT & Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <FiTool className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                IoT & Tools
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {iotToolsSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <FiUsers className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Soft Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <FiAward className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Achievements
              </h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0" />
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Committees & Language */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-3 bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                <FiGlobe className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Committees & Language
              </h3>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Duolingo English Test — Score: 125 (Certified Nov 2025)
              </p>
              <div className="w-full bg-slate-200 dark:bg-slate-600 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "78%" }}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {committees.map((c) => (
                <span
                  key={c}
                  className="px-2.5 py-1 text-xs font-medium bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded-full border border-slate-200 dark:border-slate-600"
                >
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
