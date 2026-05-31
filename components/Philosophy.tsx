"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Great products are orchestrated, not designed by one function alone.",
    body: "Orchestration is the design skill nobody talks about. Business, product, design, brand — same vision, different instruments, one output.",
  },
  {
    num: "02",
    title: "Simplicity is where rigorous thinking meets uncompromising craft.",
    body: "The simplest experiences are the hardest to make. Most designers commit to one end. I won't compromise on either.",
  },
  {
    num: "03",
    title: "Great design requires both user empathy and domain fluency.",
    body: "User research tells you how people experience a domain. Domain knowledge tells you what's actually possible inside it. Know the user. Know the domain.",
  },
  {
    num: "04",
    title: "People are a design problem too.",
    body: "A demotivated team is the same problem type as a product nobody uses. Diagnose honestly, intervene at the right points.",
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
        className="mb-16 text-center"
      >
        <span className="font-body font-medium text-xs text-muted uppercase tracking-widest">
          How I Work
        </span>
        <h2
          className="font-display text-fg mt-3 leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em" }}
        >
          Few beliefs I earned through the work
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
            <span className="font-body font-medium text-xs text-muted block mb-6">{p.num}</span>
            <h3
              className="font-display font-bold text-fg leading-snug mb-4"
              style={{ fontSize: "1.125rem", letterSpacing: "-0.01em" }}
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
