"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiAward, FiMapPin, FiCalendar, FiChevronRight, FiChevronDown } from "react-icons/fi";

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    if (window.innerWidth < 768) {
      setExpandedIndex(null);
    }
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="education"
      className="py-24 bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-blue-600" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Education
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Academic Background
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mb-12">
            Click on a card to explore details
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-col lg:flex-row gap-6 items-stretch">
          {education.map((edu, i) => {
            const isExpanded = expandedIndex === i;

            return (
              <motion.div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex flex-col sm:flex-col md:flex-row rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors bg-white dark:bg-slate-900"
              >
                {/* Image card - always visible */}
                <div
                  className="relative w-full md:w-96 h-48 sm:h-56 md:h-[30rem] shrink-0 cursor-pointer overflow-hidden"
                  onClick={() => {
                    if (isMobile) {
                      const newIndex = expandedIndex === i ? null : i;
                      setExpandedIndex(newIndex);
                      if (newIndex !== null) {
                        setTimeout(() => {
                          cardRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 150);
                      }
                    } else {
                      setExpandedIndex(i);
                    }
                  }}
                >
                  <Image
                    src={edu.image}
                    alt={edu.school}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    loading={i === 0 ? "eager" : "lazy"}
                    className={`object-cover transition-transform duration-700 ${
                      isExpanded ? "scale-110" : "hover:scale-105"
                    }`}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                  {/* Content on image */}
                  <div className="absolute inset-0 flex flex-col justify-between p-5">
                    {/* Top - GPA badge */}
                    <div className="flex justify-end">
                      {edu.gpa && (
                        <span className="text-xs font-bold text-white bg-blue-600/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>

                    {/* Bottom - School info */}
                    <div>
                      <h3 className="text-lg font-bold text-white drop-shadow-lg mb-1">
                        {edu.school}
                      </h3>
                      <p className="text-blue-200 text-sm font-medium mb-3">
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="flex items-center gap-1 text-xs text-white/70">
                          <FiMapPin size={11} />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expand indicator - desktop */}
                  <motion.div
                    className="absolute top-1/2 right-2 -translate-y-1/2 p-1.5 bg-white/20 backdrop-blur-sm rounded-full hidden md:flex"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronRight className="text-white" size={16} />
                  </motion.div>

                  {/* Expand indicator - mobile */}
                  <motion.div
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 p-1.5 bg-white/20 backdrop-blur-sm rounded-full flex md:hidden"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown className="text-white" size={16} />
                  </motion.div>
                </div>

                {/* Expandable detail panel */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={isMobile ? { height: 0, opacity: 0 } : { width: 0, opacity: 0 }}
                      animate={isMobile ? { height: "auto", opacity: 1 } : { width: "auto", opacity: 1 }}
                      exit={isMobile ? { height: 0, opacity: 0 } : { width: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden border-l-0 md:border-l border-t md:border-t-0 border-slate-100 dark:border-slate-800"
                    >
                      <div className="w-full md:w-[420px] md:h-[30rem] p-4 sm:p-5 md:p-6 overflow-y-auto">
                        {/* Period */}
                        <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                          <FiCalendar size={14} />
                          {edu.period}
                        </div>

                        {/* Highlights */}
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                          Key Highlights
                        </p>
                        <ul className="space-y-2.5">
                          {edu.highlights.map((h, j) => (
                            <motion.li
                              key={j}
                            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.1 + j * 0.08 }}
                              className="flex items-start gap-2.5 text-slate-600 dark:text-slate-400"
                            >
                              <FiAward
                                className="text-blue-500 shrink-0 mt-0.5"
                                size={13}
                              />
                              <span className="text-sm leading-relaxed">
                                {h}
                              </span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
