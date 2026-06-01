"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Great products are orchestrated, not designed by one function alone",
    body: "Orchestration is the design skill nobody talks about. Business, product, design, brand — same vision, different instruments, one output.",
  },
  {
    num: "02",
    title: "Simplicity is where rigorous thinking meets uncompromising craft",
    body: "The simplest experiences are the hardest to make. Most designers commit to one end. I won't compromise on either.",
  },
  {
    num: "03",
    title: "Great design requires both user empathy and domain fluency",
    body: "User research tells you how people experience a domain. Domain knowledge tells you what's actually possible inside it. Know the user. Know the domain.",
  },
  {
    num: "04",
    title: "People are a design problem too",
    body: "A demotivated team is the same problem type as a product nobody uses. Diagnose honestly, intervene at the right points.",
  },
];

export default function Philosophy() {
  return (
    <section className="px-6 py-24 bg-card">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="bg-bg rounded-2xl p-7 flex flex-col"
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
