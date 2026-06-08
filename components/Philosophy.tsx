"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "The best design happens across functions",
    body: "Orchestration is the design skill nobody talks about. Business, product, design, and brand are different instruments playing the same score. Great products emerge when they're aligned.",
  },
  {
    num: "02",
    title: "Simplicity is where thinking meets craft",
    body: "The simplest experiences are often the hardest to create. They require rigorous thinking and exceptional craft. I don't believe in choosing one over the other.",
  },
  {
    num: "03",
    title: "Great design requires both empathy and expertise",
    body: "User empathy reveals how people experience a problem. Domain expertise reveals what's possible within the system. Great design requires both. Know the user. Know the domain.",
  },
  {
    num: "04",
    title: "Great products start with great teams",
    body: "A demotivated team is often the same kind of problem as a product nobody uses. The solution isn't guesswork, it's understanding the root cause and intervening where it matters most.",
  },
];

export default function Philosophy() {
  return (
    <section className="relative z-10 bg-bg px-6 py-36">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2
            className="font-display text-fg mt-3 leading-[1.05]"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Few beliefs earned through my work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-2xl p-7 flex flex-col border"
              style={{ borderColor: "rgba(0,0,0,0.11)" }}
            >
              <p
                className="font-display font-bold text-fg mb-2"
                style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}
              >
                {p.title}
              </p>
              <p className="font-body text-muted leading-relaxed text-sm">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
