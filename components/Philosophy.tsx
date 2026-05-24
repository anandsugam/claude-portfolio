"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Design is a system, not a deliverable.",
    body: "A screen is evidence. The real work is the thinking behind it — the framing, the constraints, the decisions made before a pixel moves. I build that thinking into teams, not just files.",
  },
  {
    num: "02",
    title: "Technology shapes what's possible to design.",
    body: "I came up through engineering before design. That hasn't left me. Understanding how things are built changes how I think about what to build — and earns a different kind of trust with the teams who build it.",
  },
  {
    num: "03",
    title: "Scale is a design problem.",
    body: "At 20 million users, 'good enough' breaks. Consistency, systems, and infrastructure aren't overhead — they're the product. I've built design systems, org structures, and ways of working that hold up under real pressure.",
  },
  {
    num: "04",
    title: "Leadership is craft, not rank.",
    body: "The best thing I can do for a team is make the work better and the environment clearer. Not by having the answers — by asking better questions, removing ambiguity, and protecting the space where good work can happen.",
  },
];

export default function Philosophy() {
  return (
    <section className="px-6 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="font-body text-xs text-muted uppercase tracking-widest">
          How I Work
        </span>
        <h2
          className="font-display font-bold text-fg leading-tight mt-3"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          A few things I believe.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
        {principles.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className="bg-bg p-10"
          >
            <span className="font-body text-xs text-muted block mb-6">{p.num}</span>
            <h3
              className="font-display font-bold text-fg leading-snug mb-4"
              style={{ fontSize: "1.1875rem" }}
            >
              {p.title}
            </h3>
            <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
