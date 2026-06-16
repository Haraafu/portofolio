"use client";

import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "falahand@gmail.com",
    href: "mailto:falahand@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "+6285219243377",
    href: "tel:+6285219243377",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "East Jakarta, Jakarta",
    href: null,
  },
];

const socials = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/Haraafu",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/falahandhesryo",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
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
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl">
            I&apos;m always open to new opportunities and collaborations. Feel
            free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/40 rounded-xl">
                  <info.icon
                    className="text-blue-600 dark:text-blue-400"
                    size={20}
                  />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-medium text-slate-900 dark:text-white">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Find me on
              </p>
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 transition-all hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative z-10">
                <FiSend size={32} className="mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-3">
                  Let&apos;s work together
                </h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Whether you have a project idea, want to collaborate, or just
                  want to say hi — my inbox is always open.
                </p>
                <a
                  href="mailto:falahand@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-medium rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <FiMail size={16} />
                  Send me an email
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
