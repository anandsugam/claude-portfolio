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
          "Led design system rebuild: scalable and AI-ready, without adding headcount",
          "Earned design a permanent seat in quarterly strategy planning (core group)",
          "No attrition across a remote-first team of 8 designers",
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
        body: "Led design for GoFood Consumer, Loyalty & Subscription, Care & Support, AI initiatives, and the Central Growth Platform with a team of 10. Experienced Gojek's journey to a public company.",
        highlight: null,
        link: "/work/gojek-plus",
        linkLabel: "Gojek PLUS Case Study →",
        achievements: [
          "Designed and launched Gojek PLUS: subscription across GoFood, GoRide, GoSend + 3 more",
          "Head of Design for GoFood product in the absence of Global Head of Design",
          "Led support AI redesign across driver, merchant, and consumer surfaces",
        ],
      },
      {
        chapter: "Building at Scale",
        period: "2018–2021 · Interaction Designer → Product Designer → Senior Product Designer",
        body: "Joined Gojek as it was scaling fast across Southeast Asia. Built Asphalt, the design system powering 20+ products. Worked across growth, monetisation, loyalty, text search and recommendations & discovery teams. Built GoFood's first loyalty brand.",
        highlight: null,
        link: "https://www.sugam.design/work/gofood-order-tracking",
        linkLabel: "GoFood Order Tracking Case Study →",
        achievements: [
          "Core contributor to Asphalt, Gojek's design system (20+ products)",
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
    company: "Master of Design (M.Des)",
    role: "Indian Institute of Technology, Kanpur",
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
        body: "First design role, straight out of a CS engineering degree. Not just designing, but building UX process from scratch, working with enterprise clients like Microsoft and Amazon, and leading hiring before leaving for my masters. The leadership instinct showed up early.",
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
        <section
          className="relative px-6 pt-40 pb-20 overflow-hidden"
          style={{
            background:
              "radial-gradient(120% 120% at 85% 0%, rgba(239,131,84,0.10), transparent 55%), linear-gradient(180deg, var(--color-card) 0%, var(--color-bg) 100%)",
          }}
        >
          {/* Subtle dot texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage: "radial-gradient(rgba(45,49,66,0.06) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage: "linear-gradient(180deg, #000 0%, transparent 90%)",
              WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 90%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto"
          >
            <span className="font-body text-xs uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
              My journey
            </span>
            <h1
              className="font-display font-bold text-fg leading-tight mt-4"
              style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)" }}
            >
              10+ years of crafting products people love and building teams people want to be part of
            </h1>
            <p
              className="font-body text-muted leading-relaxed mt-6 max-w-2xl"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            >
              From enterprise software to Southeast Asia&apos;s largest super-app and India&apos;s
              fintech ecosystem, shaping products, platforms, and design organisations used by
              millions.
            </p>
            <div className="mt-8">
              <a
                href="/documents/Sugam_Anand_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-fg text-bg font-body font-medium text-sm hover:opacity-80 transition-opacity"
                style={{ borderRadius: "100px" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* ── Career Timeline ── */}
        <section className="px-6 pt-8 pb-24 max-w-5xl mx-auto">
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
                  className="group relative pl-8 pb-10 last:pb-0"
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
                  <div className="py-5 -ml-1">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
                      {/* Left: meta */}
                      <div className="lg:col-span-3">
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

                      {/* Right: body — one or more phases in a single card */}
                      <div
                        className="lg:col-span-9 rounded-2xl px-6 py-5 space-y-6"
                        style={{ border: "1px solid rgba(0,0,0,0.12)", backgroundColor: "#FFFFFF" }}
                      >
                        {entry.phases.map((phase, pi) => (
                          <div
                            key={phase.chapter}
                            className={pi > 0 ? "pt-6" : ""}
                            style={pi > 0 ? { borderTop: "1px solid rgba(0,0,0,0.1)" } : undefined}
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
