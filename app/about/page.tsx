"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const career = [
  {
    num: "04",
    years: "2024–Present",
    company: "Smallcase & Tickertape",
    role: "Senior Director of Product Design",
    phases: [
      {
        chapter: "The Seat at the Table",
        period: null,
        body: "Joined as Head of Design with a clear mandate: build product design from a fragmented service into a strategic function with its own infrastructure, voice, and authority to shape what gets built. Promoted to Senior Director in 12 months.",
        highlight: null,
        link: "/work/smallcase",
        linkLabel: "Leadership Case Study →",
        achievements: [
          "Built career ladders, comp bands, and hiring process from scratch",
          "Led design system rebuild — scalable and AI-ready, without adding headcount",
          "Earned design a permanent seat in quarterly strategy planning (core group)",
          "0 culture-driven exits across a remote-first team of 8",
        ],
      },
    ],
  },
  {
    num: "03",
    years: "2018–2024",
    company: "Gojek",
    role: "Product Design Lead",
    phases: [
      {
        chapter: "Leadership Emerges",
        period: "2021–2024 · Product Design Lead",
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
        chapter: "Building at Scale",
        period: "2018–2021 · Interaction Designer → Product Designer → Senior Product Designer",
        body: "Joined Gojek as it was scaling fast across Southeast Asia. Built Asphalt — the design system powering 20+ products. Moved into product design: growth, loyalty, and GoFood's first loyalty brand. First people management experience.",
        highlight: null,
        link: null,
        linkLabel: null,
        achievements: [
          "Core contributor to Asphalt — Gojek's design system (20+ products)",
          "Redesigned GoFood text search for 20M+ monthly users",
          "Led GoFood post-booking experience redesign",
          "First people management experience",
        ],
      },
    ],
  },
  {
    num: "02",
    years: "2016–2018",
    company: "IIT Kanpur",
    role: "Master of Design",
    phases: [
      {
        chapter: "The Deliberate Pivot",
        period: null,
        body: "After gaining industry experience as a UX Designer, a stable role was left behind to pursue a masters degree in design at Indian Institute of Technology, Kanpur and build a deeper foundation in design. The programme expanded expertise in design thinking, research, and human-centred problem solving, while an internship at Microsoft India offered the opportunity to apply these principles within a large-scale technology organisation.",
        highlight: null,
        link: null,
        linkLabel: null,
        achievements: [],
      },
    ],
  },
  {
    num: "01",
    years: "2014–2016",
    company: "MAQ Software",
    role: "UX Designer",
    phases: [
      {
        chapter: "The Foundation",
        period: null,
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
    ],
  },
];

export default function AboutPage() {
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
              About me
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
              A full-stack design leader — hands-on enough to know what great feels like, fluent
              in technology to shape how it&apos;s built, and grounded in people to build teams
              that last.
            </p>
          </motion.div>
        </section>

        {/* ── About body ── */}
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-5"
            >
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                I started in software engineering before pivoting to design — first at MAQ
                Software working with enterprise clients like Microsoft and Amazon, then through
                a Masters in Product and Interaction Design at IIT Kanpur. That dual background
                never fully separated, and it&apos;s shaped how I work: I think in systems, speak
                the language of engineering, and care deeply about the experience layer.
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                At Gojek, I spent six years building products at Southeast Asian scale — from
                GoFood&apos;s search and order tracking, to Asphalt (the design system), to
                GoFood PLUS and eventually Gojek PLUS: a unified subscription brand across
                six products. I led design for consumer, loyalty, and support AI — and managed
                my first team.
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                Since 2024, I&apos;ve been building the design function at Smallcase and
                Tickertape. That means hiring, systems, process, and culture — not just design.
                Promoted to Senior Director in 12 months. The work I&apos;m most proud of is
                the organisational kind: building the conditions where great design consistently
                happens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-4 lg:col-start-9 space-y-8"
            >
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-3">
                  Currently
                </span>
                <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                  Senior Director of Product Design
                </p>
                <p className="font-body text-muted text-sm">Smallcase & Tickertape · Bengaluru</p>
              </div>
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-3">
                  Education
                </span>
                <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                  M.Des, Product & Interaction Design
                </p>
                <p className="font-body text-muted text-sm mb-3">IIT Kanpur · 2016–2018</p>
                <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                  B.Tech, Computer Science
                </p>
                <p className="font-body text-muted text-sm">Kurukshetra University · 2010–2014</p>
              </div>
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-3">
                  Contact
                </span>
                <a
                  href="mailto:sugam.anand@gmail.com"
                  className="font-body text-sm text-fg border-b border-border pb-0.5 hover:border-fg transition-colors"
                >
                  sugam.anand@gmail.com
                </a>
                <br />
                <a
                  href="https://linkedin.com/in/sugamanand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted hover:text-fg transition-colors mt-2 inline-block"
                >
                  LinkedIn →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Career Timeline ── */}
        <section className="px-6 pt-8 pb-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mb-12"
          >
            <span className="font-body text-xs text-muted uppercase tracking-widest">
              The Journey
            </span>
            <h2
              className="font-display font-bold text-fg leading-tight mt-3"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              A decade of building and leading
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical guide line with fade at both ends */}
            <div
              className="absolute top-2 bottom-2 w-px"
              style={{
                left: "8px",
                background:
                  "linear-gradient(to bottom, transparent, var(--color-border) 6%, var(--color-border) 94%, transparent)",
              }}
            />

            <div className="flex flex-col">
              {career.map((entry, i) => (
                <motion.div
                  key={entry.num}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative pl-12 pb-10 last:pb-0"
                >
                  {/* Timeline node */}
                  <div className="absolute left-0 top-[1.6rem]" style={{ transform: "translateX(1px)" }}>
                    {i === 0 ? (
                      <span className="relative flex w-3.5 h-3.5">
                        <span
                          className="absolute inline-flex h-full w-full rounded-full opacity-40 animate-ping"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        <span
                          className="relative inline-flex rounded-full w-3.5 h-3.5 ring-4 ring-bg"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                      </span>
                    ) : (
                      <span
                        className="block w-3.5 h-3.5 rounded-full border-2 bg-bg ring-4 ring-bg"
                        style={{ borderColor: "var(--color-border)" }}
                      />
                    )}
                  </div>

                  {/* Entry card */}
                  <div className="px-5 py-5 -ml-1">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-8">
                      {/* Left: meta */}
                      <div className="lg:col-span-4">
                        <span
                          className="inline-block font-body text-xs uppercase tracking-widest rounded-full px-2.5 py-1 mb-2.5"
                          style={{
                            color: "var(--color-muted)",
                            backgroundColor: "var(--color-card)",
                          }}
                        >
                          {entry.years}
                        </span>
                        <p className="font-display font-semibold text-fg" style={{ fontSize: "1.0625rem" }}>
                          {entry.company}
                        </p>
                        <p className="font-body text-muted mt-1 leading-snug" style={{ fontSize: "0.8125rem" }}>
                          {entry.role}
                        </p>
                      </div>

                      {/* Right: body — one or more phases */}
                      <div className="lg:col-span-8 space-y-8">
                        {entry.phases.map((phase, pi) => (
                          <div
                            key={phase.chapter}
                            className={pi > 0 ? "pt-8 border-t border-border" : ""}
                          >
                            <div className="mb-3">
                              <p
                                className="font-display font-semibold text-accent uppercase tracking-widest"
                                style={{ fontSize: "0.6875rem" }}
                              >
                                {phase.chapter}
                              </p>
                              {phase.period && (
                                <p
                                  className="font-body text-muted mt-1"
                                  style={{ fontSize: "0.75rem" }}
                                >
                                  {phase.period}
                                </p>
                              )}
                            </div>
                            <p className="font-body text-muted leading-relaxed mb-4" style={{ fontSize: "0.9375rem" }}>
                              {phase.body}
                            </p>

                            {phase.highlight && (
                              <div
                                className="rounded-2xl border border-border px-5 py-4 mb-4"
                                style={{ backgroundColor: "var(--color-bg)" }}
                              >
                                <p className="font-body text-fg italic leading-relaxed" style={{ fontSize: "0.875rem" }}>
                                  {phase.highlight}
                                </p>
                              </div>
                            )}

                            {phase.achievements.length > 0 && (
                              <div className="space-y-2 mb-4">
                                {phase.achievements.map((a) => (
                                  <div key={a} className="flex items-start gap-2.5">
                                    <svg
                                      width="14"
                                      height="14"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      className="shrink-0 mt-0.5"
                                      style={{ color: "var(--color-accent)" }}
                                    >
                                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <p className="font-body text-muted text-sm leading-relaxed">{a}</p>
                                  </div>
                                ))}
                              </div>
                            )}

                            {phase.link && (
                              <Link
                                href={phase.link}
                                className="inline-flex items-center gap-1 font-body text-sm font-medium text-fg"
                              >
                                <span className="border-b border-border pb-0.5">
                                  {phase.linkLabel?.replace(" →", "")}
                                </span>
                                <span>→</span>
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
