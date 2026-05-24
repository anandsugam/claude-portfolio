"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 max-w-7xl mx-auto">
      <div className="border border-border rounded-3xl p-12 lg:p-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-xl"
        >
          <span className="font-body text-xs text-muted uppercase tracking-widest block mb-5">
            Get in Touch
          </span>
          <h2
            className="font-display font-bold text-fg leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Interested in working together?
          </h2>
          <p className="font-body text-muted leading-relaxed mt-5" style={{ fontSize: "1rem" }}>
            I&apos;m open to senior design leadership roles, advisory engagements, and interesting conversations about design, product, and building teams. Reach out — I respond to everything.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-3 shrink-0"
        >
          <a
            href="mailto:sugam.anand@gmail.com"
            className="px-8 py-4 bg-fg text-bg font-body font-medium text-sm rounded-full hover:opacity-75 transition-opacity text-center"
          >
            sugam.anand@gmail.com →
          </a>
          <a
            href="https://linkedin.com/in/sugamanand"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-fg font-body font-medium text-sm rounded-full hover:border-fg transition-colors text-center"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
