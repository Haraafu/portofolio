"use client";

import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
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
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I&apos;m a Computer Engineering student at Universitas Indonesia with
              hands-on experience in artificial intelligence, frontend
              development, software engineering, and IoT. Currently an AI Intern
              at Avanade, developing proof-of-concept solutions using Microsoft
              AI technologies, with previous frontend development experience at
              YARSI Hospital.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Strong problem-solving, collaboration, and communication skills
              developed through leadership, teaching assistance, international
              programs, and public speaking. I am detail-oriented, proactive, and
              motivated to build practical technology solutions with real-world
              impact.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I was selected as the only representative from Indonesia for a
              scholarship to study AI at Peter the Great St. Petersburg
              Polytechnic University, joining participants from 10+ countries.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                  <FiUser className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Name</p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    Falah Andhesryo
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                  <FiMapPin className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    East Jakarta, Jakarta
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                  <FiMail className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    falahand@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                  <FiPhone className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="font-medium text-slate-900 dark:text-white">
                    +6285219243377
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      3.71
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">GPA / 4.00</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      15+
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Events Spoken
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
