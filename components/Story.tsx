"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const chapters = [
  {
    num: "01",
    years: "2014–2016",
    place: "MAQ Software",
    role: "UX Designer",
    title: "The Foundation",
    body: "First design role, straight out of a CS engineering degree. Not just designing — building UX process from scratch, working with enterprise clients like Microsoft and Amazon, and leading hiring before leaving for my masters. The leadership instinct showed up early.",
    link: null,
    linkLabel: null,
  },
  {
    num: "02",
    years: "2016–2018",
    place: "IIT Kanpur",
    role: "M.Des · Product & Interaction Design",
    title: "The Deliberate Pivot",
    body: "Left a stable job to go deeper. An engineering mind learns to think in systems of experience — not just systems of code. The two have never fully separated, and that tension is where my best work happens.",
    link: null,
    linkLabel: null,
  },
  {
    num: "03",
    years: "2018–2021",
    place: "Gojek",
    role: "Interaction → Product → Senior Product Designer",
    title: "Building at Scale",
    body: "Joined Gojek as it was scaling fast across Southeast Asia. Built Asphalt — the design system powering 20+ products. Moved into product design: growth, loyalty, and GoFood's first loyalty brand. First people management experience.",
    link: null,
    linkLabel: null,
  },
  {
    num: "04",
    years: "2021–2024",
    place: "Gojek",
    role: "Product Design Lead",
    title: "Leadership Emerges",
    body: "Led consumer experience design for GoFood — interim head of design for the team. Moved to Gojek central: built Gojek PLUS, a unified subscription brand across 6 products at Southeast Asian scale. Led support AI adoption across driver, merchant, and customer ecosystems.",
    link: "/work/gojek-plus",
    linkLabel: "Gojek PLUS Case Study →",
  },
  {
    num: "05",
    years: "2024–Present",
    place: "Smallcase & Tickertape",
    role: "Director → Senior Director of Product Design",
    title: "The Seat at the Table",
    body: "Joined as Head of Design with a clear mandate: build product design from a fragmented service into a strategic function with its own infrastructure, voice, and authority to shape what gets built. Promoted to Senior Director in 12 months.",
    link: "/work/smallcase",
    linkLabel: "Leadership Case Study →",
  },
];

export default function Story() {
  return (
    <section id="story" className="px-6 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="font-body text-xs text-muted uppercase tracking-widest">
          The Story
        </span>
        <h2
          className="font-display font-bold text-fg leading-tight mt-3"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          A decade in design
        </h2>
        <p className="font-body text-muted leading-relaxed mt-5 max-w-2xl" style={{ fontSize: "1rem" }}>
          From engineering to interaction design, from craft to leadership.
          Each role added a layer — and none of them ever fully left.
        </p>
      </motion.div>

      <div>
        {chapters.map((ch, i) => (
          <motion.div
            key={ch.num}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="border-t border-border py-10 grid grid-cols-12 gap-4 lg:gap-8"
          >
            <div className="col-span-12 lg:col-span-1">
              <span className="font-body text-xs text-muted">{ch.num}</span>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <p className="font-display font-semibold text-fg" style={{ fontSize: "1rem" }}>
                {ch.place}
              </p>
              <p className="font-body text-muted mt-1" style={{ fontSize: "0.8125rem" }}>
                {ch.years} · {ch.role}
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p
                className="font-display font-semibold text-accent uppercase tracking-widest mb-3"
                style={{ fontSize: "0.6875rem" }}
              >
                {ch.title}
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                {ch.body}
              </p>
              {ch.link && (
                <Link
                  href={ch.link}
                  className="inline-flex items-center mt-5 font-body text-sm text-fg border-b border-border pb-0.5 hover:border-fg transition-colors"
                >
                  {ch.linkLabel}
                </Link>
              )}
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border" />
      </div>
    </section>
  );
}
