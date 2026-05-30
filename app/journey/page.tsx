"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const education = [
  {
    degree: "M.Des — Product & Interaction Design",
    institution: "IIT Kanpur",
    years: "2016–2018",
    note: "Left a stable job to go deeper. An engineering mind learns to think in systems of experience — not just systems of code. The two have never fully separated, and that tension is where my best work happens.",
  },
  {
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Kurukshetra University",
    years: "2010–2014",
    note: "Studied software engineering before design. Built the foundation for thinking in systems, understanding how things are built, and speaking the language of engineering teams.",
  },
];

const career = [
  {
    num: "05",
    years: "2024–Present",
    company: "Smallcase & Tickertape",
    role: "Director → Senior Director of Product Design",
    chapter: "The Seat at the Table",
    body: "Joined as Head of Design with a clear mandate: build product design from a fragmented service into a strategic function with its own infrastructure, voice, and authority to shape what gets built. Promoted to Senior Director in 12 months.",
    highlight: "Design earned a seat in the core strategy group after three quarters — the first time ever for the function.",
    link: "/work/smallcase",
    linkLabel: "Leadership Case Study →",
    achievements: [
      "Built career ladders, comp bands, and hiring process from scratch",
      "Led design system rebuild — scalable and AI-ready, without adding headcount",
      "Earned design a permanent seat in quarterly strategy planning (core group)",
      "0 culture-driven exits across a remote-first team of 8",
    ],
  },
  {
    num: "04",
    years: "2021–2024",
    company: "Gojek",
    role: "Product Design Lead",
    chapter: "Leadership Emerges",
    body: "Led consumer experience design for GoFood — served as interim head of design for the team. Moved to Gojek central: built Gojek PLUS, a unified subscription brand across 6 products at Southeast Asian scale. Led support AI adoption across driver, merchant, and customer ecosystems.",
    highlight: null,
    link: "/work/gojek-plus",
    linkLabel: "Gojek PLUS Case Study →",
    achievements: [
      "Designed and launched Gojek PLUS — subscription across GoFood, GoRide, GoSend + 3 more",
      "Interim Head of Design for GoFood (team of 6 designers)",
      "Led support AI redesign across driver, merchant, and consumer surfaces",
    ],
  },
  {
    num: "03",
    years: "2018–2021",
    company: "Gojek",
    role: "Interaction → Product → Senior Product Designer",
    chapter: "Building at Scale",
    body: "Joined Gojek as it was scaling fast across Southeast Asia. Built Asphalt — the design system powering 20+ products. Moved into product design: growth, loyalty, and GoFood's first loyalty brand. First people management experience.",
    highlight: null,
    link: "/work/gofood-text-search",
    linkLabel: "GoFood Search Case Study →",
    achievements: [
      "Core contributor to Asphalt — Gojek's design system (20+ products)",
      "Redesigned GoFood text search for 20M+ monthly users",
      "Led GoFood post-booking experience redesign",
      "First people management experience",
    ],
  },
  {
    num: "02",
    years: "2016–2018",
    company: "IIT Kanpur",
    role: "M.Des — Product & Interaction Design",
    chapter: "The Deliberate Pivot",
    body: "Left a stable job to go deeper. An engineering mind learns to think in systems of experience. The tension between engineering and design is still where my best work happens.",
    highlight: null,
    link: null,
    linkLabel: null,
    achievements: [],
  },
  {
    num: "01",
    years: "2014–2016",
    company: "MAQ Software",
    role: "UX Designer",
    chapter: "The Foundation",
    body: "First design role, straight out of a CS engineering degree. Not just designing — building UX process from scratch, working with enterprise clients like Microsoft and Amazon, and leading hiring before leaving for my masters. The leadership instinct showed up early.",
    highlight: null,
    link: null,
    linkLabel: null,
    achievements: [
      "Built UX process from scratch for an enterprise software company",
      "Worked with Microsoft and Amazon enterprise clients",
      "Led design hiring before departing for masters",
    ],
  },
];

export default function JourneyPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section className="px-6 pt-32 pb-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs text-muted uppercase tracking-widest block mb-5">
              My Story
            </span>
            <h1
              className="font-display font-bold text-fg leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 5rem)", maxWidth: "18ch" }}
            >
              From engineering to design leadership.
            </h1>
            <p
              className="font-body text-muted leading-relaxed mt-6 max-w-2xl"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            >
              A decade of building, learning, and leading — from writing code
              to building the teams and systems that produce great design at scale.
            </p>
          </motion.div>
        </section>

        {/* ── Career Timeline ── */}
        <section className="px-6 pb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12"
          >
            <span className="font-body text-xs text-muted uppercase tracking-widest">
              Experience
            </span>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute top-0 bottom-0 border-l border-border"
              style={{ left: "0px" }}
            />

            <div className="flex flex-col gap-0">
              {career.map((entry, i) => (
                <motion.div
                  key={entry.num}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="relative pl-10 pb-14"
                >
                  {/* Timeline node */}
                  <div
                    className="absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-border bg-bg"
                    style={{ transform: "translateX(-50%)" }}
                  />

                  {/* Entry content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                    {/* Left: meta */}
                    <div className="lg:col-span-4">
                      <p
                        className="font-body text-xs text-muted uppercase tracking-widest mb-1"
                        style={{ color: "rgba(74,74,70,0.6)" }}
                      >
                        {entry.years}
                      </p>
                      <p className="font-display font-semibold text-fg" style={{ fontSize: "1rem" }}>
                        {entry.company}
                      </p>
                      <p className="font-body text-muted mt-0.5" style={{ fontSize: "0.8125rem" }}>
                        {entry.role}
                      </p>
                    </div>

                    {/* Right: body */}
                    <div className="lg:col-span-8">
                      <p
                        className="font-display font-semibold text-accent uppercase tracking-widest mb-3"
                        style={{ fontSize: "0.6875rem" }}
                      >
                        {entry.chapter}
                      </p>
                      <p className="font-body text-muted leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
                        {entry.body}
                      </p>

                      {entry.highlight && (
                        <div className="bg-card border-l-2 border-accent rounded-r-xl px-5 py-4 mb-4">
                          <p className="font-body text-muted italic leading-relaxed" style={{ fontSize: "0.875rem" }}>
                            {entry.highlight}
                          </p>
                        </div>
                      )}

                      {entry.achievements.length > 0 && (
                        <div className="space-y-2 mb-4">
                          {entry.achievements.map((a) => (
                            <div key={a} className="flex items-start gap-2.5">
                              <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
                              <p className="font-body text-muted text-sm leading-relaxed">{a}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {entry.link && (
                        <Link
                          href={entry.link}
                          className="inline-flex items-center font-body text-sm text-fg border-b border-border pb-0.5 hover:border-fg transition-colors"
                        >
                          {entry.linkLabel}
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section className="px-6 py-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="mb-10"
            >
              <span className="font-body text-xs text-muted uppercase tracking-widest">
                Education
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {education.map((ed, i) => (
                <motion.div
                  key={ed.institution}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="bg-bg rounded-2xl p-8"
                >
                  <p className="font-body text-xs text-muted uppercase tracking-widest mb-4">{ed.years}</p>
                  <p className="font-display font-semibold text-fg mb-1" style={{ fontSize: "1rem" }}>
                    {ed.degree}
                  </p>
                  <p className="font-body text-muted text-sm mb-4">{ed.institution}</p>
                  <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.875rem" }}>
                    {ed.note}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-body text-muted" style={{ fontSize: "0.9375rem" }}>
              Want to see the work behind the journey?
            </p>
            <Link
              href="/#work"
              className="font-body text-sm text-fg border border-border px-5 py-2.5 hover:border-fg transition-colors"
              style={{ borderRadius: "100px" }}
            >
              View Case Studies →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
