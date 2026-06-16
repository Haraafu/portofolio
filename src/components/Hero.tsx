"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const roles = [
  "AI Intern @ Avanade",
  "Software Engineer",
  "Full-Stack Developer",
  "AI Engineer",
];

const floatingOrbs = [
  { size: 6, x: "10%", y: "20%", delay: 0, duration: 6 },
  { size: 4, x: "85%", y: "15%", delay: 1, duration: 8 },
  { size: 8, x: "70%", y: "70%", delay: 2, duration: 7 },
  { size: 5, x: "20%", y: "80%", delay: 0.5, duration: 9 },
  { size: 3, x: "50%", y: "10%", delay: 1.5, duration: 5 },
  { size: 7, x: "90%", y: "50%", delay: 3, duration: 6 },
  { size: 4, x: "35%", y: "90%", delay: 2.5, duration: 8 },
  { size: 5, x: "5%", y: "55%", delay: 0.8, duration: 7 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "waiting">("typing");

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (phase === "typing") {
      if (displayText.length < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 70);
        return () => clearTimeout(timeout);
      } else {
        setPhase("pausing");
      }
    }

    if (phase === "pausing") {
      const timeout = setTimeout(() => setPhase("deleting"), 2000);
      return () => clearTimeout(timeout);
    }

    if (phase === "deleting") {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setPhase("waiting");
      }
    }

    if (phase === "waiting") {
      const timeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setPhase("typing");
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [displayText, phase, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/40 to-slate-900" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-blue-500/20 blur-sm"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-[90rem] mx-auto px-5 sm:px-6 lg:px-12 xl:px-20 flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-20 pt-20 lg:pt-0">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              Available for opportunities
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Hi, I&apos;m </span>
            <span className="relative">
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                Falah
              </span>
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            className="h-10 sm:h-12 mb-6 sm:mb-8 flex items-center justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-400">
              {"< "}
            </span>
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              {displayText}
            </span>
            <motion.span
              className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-blue-400 ml-0.5"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              |
            </motion.span>
            <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-medium text-slate-400">
              {" />"}
            </span>
          </motion.div>

          <motion.p
            className="text-sm sm:text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Computer Engineering student at the{" "}
            <span className="text-blue-400 font-medium">
              University of Indonesia
            </span>
            {" "}and AI Intern at{" "}
            <span className="text-blue-400 font-medium">Avanade</span>.
          </motion.p>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="group relative px-5 py-3 sm:px-7 sm:py-3.5 text-sm font-medium text-white rounded-xl overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transition-all group-hover:from-blue-500 group-hover:to-cyan-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_30px_rgba(59,130,246,0.5)]" />
              <span className="relative">Get in Touch</span>
            </a>
            <a
              href="#projects"
              className="px-5 py-3 sm:px-7 sm:py-3.5 text-sm font-medium text-slate-300 rounded-xl border border-slate-700 hover:border-blue-500/50 hover:text-blue-300 hover:bg-blue-500/5 transition-all hover:scale-105 backdrop-blur-sm"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {[
              { href: "https://github.com/Haraafu", icon: FiGithub, label: "GitHub" },
              { href: "https://linkedin.com/in/falahandhesryo", icon: FiLinkedin, label: "LinkedIn" },
              { href: "mailto:falahand@gmail.com", icon: FiMail, label: "Email" },
            ].map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.label !== "Email" ? "_blank" : undefined}
                rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                className="group p-3 sm:p-3.5 text-slate-500 hover:text-blue-400 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all backdrop-blur-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Hero Image - Tall Rectangle */}
        <motion.div
          className="relative w-52 h-64 sm:w-72 sm:h-80 md:w-80 md:h-[22rem] lg:w-[28rem] lg:h-[34rem] xl:w-[32rem] xl:h-[38rem] shrink-0"
          initial={{ opacity: 0, x: 60, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {/* Main image */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl">
            <Image
              src="/experience.webp"
              alt="Falah Andhesryo"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
          </div>

          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-400 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-blue-400 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-400 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-cyan-400 rounded-br-lg" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FiArrowDown className="text-slate-600" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
