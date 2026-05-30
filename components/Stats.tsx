"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "10+", label: "Years in design" },
  { value: "3", label: "Companies" },
  { value: "8", label: "Designers led" },
  { value: "20M+", label: "Users impacted" },
  { value: "2", label: "Design systems built" },
];

export default function Stats() {
  return (
    <section className="px-6 py-0 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-b border-border py-8 flex items-center justify-between gap-6 flex-wrap"
      >
        {stats.map((s, i) => (
          <div key={i} className="flex flex-col items-start gap-1">
            <span
              className="font-display font-bold text-fg"
              style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", lineHeight: 1 }}
            >
              {s.value}
            </span>
            <span className="font-body text-xs text-muted tracking-wide uppercase">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
