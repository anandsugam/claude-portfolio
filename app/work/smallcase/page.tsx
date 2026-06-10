"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GrowthFramework from "@/components/GrowthFramework";

// ── Section tabs ─────────────────────────────────────────────────────────────
const TABS = [
  { id: "context",        label: "Context" },
  { id: "situation",      label: "Situation" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "culture",        label: "Culture" },
  { id: "craft",          label: "Craft & Systems" },
  { id: "impact",         label: "Impact" },
] as const;

// ── Brand tokens ─────────────────────────────────────────────────────────────
const HERO_BG = "#13314C";
const ACCENT = "#4F93E8";
const ACCENT_SOFT = "rgba(79,147,232,0.12)";

const fade = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

// ── Shared micro-components ───────────────────────────────────────────────────
function Label({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="font-body text-xs uppercase tracking-widest block mb-4"
      style={{ color: dark ? "rgba(255,255,255,0.4)" : "var(--color-muted)" }}
    >
      {children}
    </span>
  );
}

function H2({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <h2
      className="font-display font-bold leading-tight"
      style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: dark ? "white" : "var(--color-fg)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

function DetailRow({ head, body }: { head: string; body: string }) {
  return (
    <div className="flex items-start gap-2.5 py-3 border-b border-border last:border-0">
      <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5" style={{ background: ACCENT }} />
      <p className="font-body text-muted text-sm leading-relaxed">
        <span className="font-medium text-fg">{head}:</span> {body}
      </p>
    </div>
  );
}

function ImageZone({
  label,
  sublabel,
  aspect = "16/9",
}: {
  label: string;
  sublabel?: string;
  aspect?: string;
}) {
  return (
    <div
      className="w-full rounded-2xl flex items-center justify-center border-2 border-dashed"
      style={{ aspectRatio: aspect, borderColor: "var(--color-border)", backgroundColor: "var(--color-card)" }}
    >
      <div className="text-center px-8">
        <div
          className="mx-auto mb-3 flex items-center justify-center rounded-xl"
          style={{ width: 40, height: 40, background: ACCENT_SOFT }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: ACCENT }}>
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-body font-medium text-fg text-sm">{label}</p>
        {sublabel && (
          <p className="font-body text-muted text-xs mt-1 leading-relaxed max-w-sm mx-auto">{sublabel}</p>
        )}
      </div>
    </div>
  );
}

// ── Career ladder data ─────────────────────────────────────────────────────────
const OLD_LADDER = [
  ["L2", "Associate Designer"],
  ["L3", "Designer 1"],
  ["L4", "Designer 2"],
  ["L5", "Senior Designer"],
  ["L6", "Lead Designer"],
  ["L7", "Director"],
  ["L8", "Senior Director"],
];

const NEW_LADDER: [string, string, string | null][] = [
  ["L2", "Associate Product Designer", null],
  ["L3", "Product Designer 1", null],
  ["L4", "Product Designer 2", null],
  ["L5", "Senior Product Designer", null],
  ["L6", "Product Design Lead", "Product Design Manager"],
  ["L7", "Staff Product Designer", "Director"],
  ["L8", "Senior Staff Designer", "Senior Director"],
];

// ── Modal ─────────────────────────────────────────────────────────────────────
function Modal({ open, onClose, title, description, children }: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-0 z-[101] overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-4 lg:p-8">
          <div
            className="relative w-full max-w-4xl rounded-2xl border border-border my-8 flex flex-col"
            style={{ background: "var(--color-bg)", maxHeight: "calc(100vh - 4rem)" }}
          >
            {/* Non-scrolling header */}
            <div className="flex items-start justify-between gap-4 px-8 pt-8 pb-6 lg:px-12 lg:pt-10 shrink-0">
              <div className="flex flex-col gap-2">
                <h3
                  className="font-display font-bold text-fg leading-tight"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", letterSpacing: "-0.02em" }}
                >
                  {title}
                </h3>
                {description && (
                  <p className="font-body text-muted text-sm leading-relaxed">{description}</p>
                )}
              </div>
              <button
                onClick={onClose}
                className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-fg transition-colors border border-border font-body text-sm"
              >
                ✕
              </button>
            </div>
            {/* Scrollable body */}
            <div className="overflow-y-auto flex-1 px-8 pb-8 lg:px-12 lg:pb-12">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function SmallcasePage() {
  const [careerModalOpen, setCareerModalOpen] = useState(false);
  const [growthModalOpen, setGrowthModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("context");
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    TABS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sentinel = document.getElementById("nav-sentinel");
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
          setShowNav(true);
        } else if (entry.isIntersecting) {
          setShowNav(false);
        }
      },
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="hero"
          className="px-6 pt-36 pb-16 lg:pb-20"
          style={{ backgroundColor: HERO_BG }}
        >
          <div className="max-w-5xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Design Leadership", "Org Building", "Fintech", "AI Adoption"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-body"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-body mb-4" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8125rem" }}>
                Case Platforms · smallcase &amp; Tickertape · Dec 2024–Present
              </p>
              <h1
                className="font-display font-bold leading-[1.05] tracking-tight"
                style={{ color: "white", fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
              >
                Transforming product design from an{" "}
                <span style={{ color: ACCENT }}>execution layer</span> to the{" "}
                <span style={{ color: ACCENT }}>strategy table</span>
              </h1>
              <p className="font-body mt-7 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}>
                Joined as Head of Product Design to turn a scattered, service-oriented team into a
                strategic function with its own infrastructure, voice, and authority. Promoted to
                Senior Director within the first year.
              </p>
            </motion.div>

          </div>
        </section>

        {/* ── Sentinel: nav appears after this point ──────────────────── */}
        <div id="nav-sentinel" aria-hidden="true" style={{ height: 1, marginBottom: -1 }} />

        {/* ── Sticky section tabs ─────────────────────────────────────── */}
        <div
          className="sticky top-14 z-40 border-b border-border"
          style={{
            background: "var(--color-bg)",
            backdropFilter: "blur(12px)",
            opacity: showNav ? 1 : 0,
            transform: showNav ? "translateY(0)" : "translateY(-10px)",
            pointerEvents: showNav ? "auto" : "none",
            boxShadow: showNav ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
            transition: "opacity 350ms ease, transform 350ms ease, box-shadow 350ms ease",
          }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveSection(tab.id); document.getElementById(tab.id)?.scrollIntoView({ behavior: "smooth", block: "start" }); }}
                  className="relative shrink-0 font-body text-sm px-4 py-3.5 transition-colors"
                  style={{ color: activeSection === tab.id ? "var(--color-fg)" : "var(--color-muted)" }}
                >
                  {tab.label}
                  {activeSection === tab.id && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: ACCENT }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            CONTEXT — about the organization
        ══════════════════════════════════════════════════════════════════ */}
        <section id="context" className="px-6 pt-24 pb-4 max-w-5xl mx-auto scroll-mt-28">
          <motion.div {...fade}>
            <Label>Context · The organization</Label>
            <H2>One of India&apos;s leading wealth-tech companies</H2>
            <p className="font-body text-muted leading-relaxed mt-6 mb-10" style={{ fontSize: "1.0625rem" }}>
              <a href="https://caseplatforms.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">Case Platforms</a>{" "}is the parent company behind smallcase and Tickertape, two products
              shaping how millions of Indians research, build, and manage their investments. Founded
              in Bangalore in 2015, the company operates at the intersection of investing, technology,
              and financial advice. Backed by investors including Peak XV, Premji Invest, State Street,
              and Amazon, Case Platforms has become a key player in India&apos;s rapidly expanding retail
              investing ecosystem.
            </p>

            {/* ── Products panel ── */}
            <div className="rounded-2xl border border-border overflow-hidden">
              <div
                className="grid grid-cols-1 lg:grid-cols-2 gap-px"
                style={{ background: "var(--color-border)" }}
              >
                {[
                  {
                    id: "smallcase",
                    desc: "The investing platform where people build long-term wealth through expert-managed portfolios and direct market access.",
                    offers: ["Stock Model Portfolios", "Mutual Fund Model Portfolios", "Stocks & ETFs", "Direct mutual funds"],
                    href: "https://www.smallcase.com/",
                    host: "smallcase.com",
                  },
                  {
                    id: "tickertape",
                    desc: "The research and analytics platform where investors screen, analyse, and track markets before they invest.",
                    offers: ["Stock & ETF analysis", "Screeners", "Mutual funds", "US stocks", "Digital gold", "Market Mood Index"],
                    href: "https://www.tickertape.in/",
                    host: "tickertape.in",
                  },
                ].map((p) => (
                  <div key={p.id} className="p-8 bg-bg flex flex-col">
                    {/* Logo lockup */}
                    <div className="flex items-center mb-4">
                      <img
                        src={p.id === "smallcase" ? "/images/smallcase.png" : "/images/tickertape.png"}
                        alt={`${p.id} logo`}
                        style={{ height: "44px", width: "auto" }}
                      />
                    </div>

                    <p className="font-body text-muted text-sm leading-relaxed">{p.desc}</p>

                    <p className="font-body text-xs uppercase tracking-widest text-muted mt-6 mb-3">What it offers</p>
                    <div className="flex flex-wrap gap-2 flex-1 content-start">
                      {p.offers.map((o) => (
                        <span
                          key={o}
                          className="font-body text-xs px-2.5 py-1 rounded-md text-muted"
                          style={{ background: "var(--color-card)" }}
                        >
                          {o}
                        </span>
                      ))}
                    </div>

                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-medium mt-6 inline-flex items-center gap-1.5 hover:opacity-70 transition-opacity"
                      style={{ color: ACCENT }}
                    >
                      {p.host} ↗
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            01 — THE SITUATION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="situation" className="px-6 py-24 max-w-5xl mx-auto scroll-mt-28">
          <motion.div {...fade}>
            <Label>01 — The situation at the start</Label>
            <H2>Design existed. A design function didn&apos;t</H2>
            <p className="font-body text-muted leading-relaxed mt-6 mb-10" style={{ fontSize: "1.0625rem" }}>
              After several years without design leadership, design had become fragmented across product
              teams. While individual designers were succeeding within their verticals, the function
              lacked the leadership, infrastructure, and shared practices needed to scale its impact.
            </p>

            <Label>What 1:1s with every designer revealed</Label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
              {[
                {
                  label: "Not present at all",
                  items: [
                    { head: "Design leadership", body: "The role had been vacant for years. There was no advocate for design, no coaching structure for the team, and no representation of design in leadership conversations." },
                    { head: "Growth infrastructure", body: "Designers had no career framework, competency model, or compensation benchmarks. Growth, performance, and promotions lacked clear expectations and consistency." },
                    { head: "Design community", body: "Designers were embedded within product verticals with little connection to one another. There was no shared craft, collective identity, or mechanism for learning across teams." },
                  ],
                },
                {
                  label: "Present, but not working",
                  items: [
                    { head: "Design's role in product", body: "Design was involved in execution, not direction. Product teams brought fully formed briefs, leaving little opportunity for design to shape strategy, frame problems, or influence outcomes." },
                    { head: "Trust and representation", body: "Designers reported into product teams, where managers often lacked the context to assess design quality, craft growth, or long-term potential. Advocacy for the function was largely absent." },
                    { head: "Motivation and retention", body: "The team was talented and stable, but lacked visibility into future growth. Career progression depended more on individual product teams than on a coherent design practice." },
                  ],
                },
              ].map(({ label, items }) => (
                <div key={label} className="rounded-2xl border border-border overflow-hidden" style={{ background: "var(--color-bg)" }}>
                  {/* Card header */}
                  <div className="px-7 py-4 border-b border-border" style={{ background: "var(--color-card)" }}>
                    <p className="font-body text-xs uppercase tracking-widest text-muted">{label}</p>
                  </div>
                  {/* Items */}
                  <div className="divide-y divide-border">
                    {items.map(({ head, body }) => (
                      <div key={head} className="px-7 py-5">
                        <p className="font-body font-semibold text-fg mb-1.5" style={{ fontSize: "0.875rem" }}>{head}</p>
                        <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.8125rem" }}>{body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            THE MANDATE — pull quote
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20" style={{ backgroundColor: HERO_BG }}>
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <Label dark>The mandate</Label>
              <p
                className="font-display font-semibold leading-snug"
                style={{ color: "white", fontSize: "clamp(1.875rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
              >
                Build product design from a fragmented service into a{" "}
                <span style={{ color: ACCENT }}>strategic function</span>, one with its own
                infrastructure, voice, and the authority to shape what gets built.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            02 — THE APPROACH (merged overview + what was built)
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <motion.div {...fade}>
            <Label>02 — How the problem was split</Label>
            <H2>Three buckets, built in parallel</H2>
            <p className="font-body text-muted leading-relaxed mt-6 mb-12" style={{ fontSize: "1.0625rem" }}>
              High-performing design orgs don&apos;t emerge from talent alone. They need
              infrastructure, trust, and craft systems, none of them sufficient on its own. The work
              was split into three buckets and built across all three at once.
            </p>

            {(() => {
              const BUCKETS = [
                {
                  num: "01", cadence: "Foundational", title: "Team infrastructure",
                  body: "Build the scaffolding designers need to grow, be paid fairly, and trust the system.",
                  focus: "Retention & Growth",
                  items: [
                    { head: "Reporting restructured", body: "All designers moved under design leadership on day one." },
                    { head: "Career ladders built", body: "IC and manager tracks. Explicit skill expectations at every level." },
                    { head: "Compensation framework", body: "Salary bands established. Gaps corrected with founder alignment." },
                    { head: "Hiring process from scratch", body: "Proven twice within a month. Later adopted by product management." },
                  ],
                },
                {
                  num: "02", cadence: "Continuous", title: "Culture, built remotely",
                  body: "Forge a community across a distributed team with rituals that survive the screen and in-person windows used deliberately.",
                  focus: "Identity & Trust",
                  items: [
                    { head: "Weekly 1:1s and retros", body: "Non-negotiable rhythms for trust and pulse-checking across screens." },
                    { head: "Design jams + Slack channel", body: "Collective identity and shared practice in a remote-first org." },
                    { head: "In-person moments, used intentionally", body: "Twice-yearly windows for depth, bonding, and brand-building." },
                    { head: "Domain ownership model", body: "End-to-end vertical ownership replaced fragmented project assignments." },
                  ],
                },
                {
                  num: "03", cadence: "Compounding", title: "Craft & systems",
                  body: "Raise the ceiling on output. Design system, research practice, and an AI-native workflow built for leverage, not headcount.",
                  focus: "Quality & Leverage",
                  items: [
                    { head: "Design system rebuilt", body: "Scalable and AI-ready architecture. No new headcount." },
                    { head: "Friction Log ritual", body: "Team reviews core product flows together to surface quality gaps." },
                    { head: "UX Research handbook", body: "Usability testing turned into a repeatable, structured practice." },
                    { head: "UX Writing agent + designers in code", body: "Handbook converted into an AI agent. GitHub access; Figma MCP pilot won eng dev seats." },
                  ],
                },
              ];
              return (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-0">
                  {/* Row 1 — overviews: grid enforces equal height across all three */}
                  {BUCKETS.map((b) => (
                    <div key={`${b.num}-overview`} className="flex flex-col p-8 rounded-t-2xl border border-b-0 border-border" style={{ background: "var(--color-card)" }}>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-display font-bold" style={{ color: ACCENT, fontSize: "2rem", lineHeight: 1 }}>{b.num}</span>
                        <span className="font-body text-xs uppercase tracking-widest text-muted">{b.cadence}</span>
                      </div>
                      <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.25rem" }}>{b.title}</p>
                      <p className="font-body text-muted text-sm leading-relaxed mb-8">{b.body}</p>
                      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
                        <span className="font-body text-xs uppercase tracking-widest text-muted">Focus</span>
                        <span className="font-body text-xs font-medium text-fg">{b.focus}</span>
                      </div>
                    </div>
                  ))}
                  {/* Row 2 — initiatives: starts at the same level for all three */}
                  {BUCKETS.map((b) => (
                    <div key={`${b.num}-items`} className="flex flex-col rounded-b-2xl border border-t border-border px-8 py-6 gap-4" style={{ background: "var(--color-bg)" }}>
                      {b.items.map((item) => (
                        <div key={item.head} className="pb-4 border-b border-border last:border-0 last:pb-0">
                          <p className="font-display font-semibold text-fg mb-1" style={{ fontSize: "0.875rem" }}>{item.head}</p>
                          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.8125rem" }}>{item.body}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            BUCKET 01 — TEAM INFRASTRUCTURE
        ══════════════════════════════════════════════════════════════════ */}
        <section id="infrastructure" className="px-6 py-24 bg-card scroll-mt-28">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <Label>Bucket 01 · Team infrastructure</Label>
              <H2>Rebuilding trust, retention, and a path to grow</H2>
              <p className="font-body text-muted leading-relaxed mt-6 mb-12" style={{ fontSize: "1.0625rem" }}>
                The team had been on its own for years. Before anything else, they needed to believe
                design leadership could actually get things done for them and see a future worth
                staying for.
              </p>
            </motion.div>

            {/* Career architecture + Growth framework — summary cards */}
            <motion.div {...fade} className="mb-14">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                {/* Career architecture card */}
                <div className="rounded-2xl p-7 bg-bg border border-border flex flex-col">
                  <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.25rem" }}>
                    Career architecture built for designers
                  </p>
                  <p className="font-body text-muted text-sm leading-relaxed flex-1">
                    Replaced the inherited PM ladder with a purpose-built dual-track model, giving
                    designers a real choice between IC and manager growth with design-specific titles
                    at every level.
                  </p>
                  <div className="flex items-center gap-6 mt-6 pt-5 border-t border-border">
                    <div>
                      <p className="font-display font-bold leading-none" style={{ fontSize: "1.5rem", color: ACCENT }}>8</p>
                      <p className="font-body text-xs text-muted mt-0.5">levels</p>
                    </div>
                    <div>
                      <p className="font-display font-bold leading-none" style={{ fontSize: "1.5rem", color: ACCENT }}>2</p>
                      <p className="font-body text-xs text-muted mt-0.5">tracks (IC + Manager)</p>
                    </div>
                    <button
                      onClick={() => setCareerModalOpen(true)}
                      className="ml-auto font-body text-sm font-medium hover:opacity-70 transition-opacity"
                      style={{ color: ACCENT }}
                    >
                      View full ladder →
                    </button>
                  </div>
                </div>

                {/* Growth framework card */}
                <div className="rounded-2xl p-7 bg-bg border border-border flex flex-col">
                  <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.25rem" }}>
                    Growth framework with ten capability areas
                  </p>
                  <p className="font-body text-muted text-sm leading-relaxed flex-1">
                    Each level has explicit expectations across hard and soft skills, giving every
                    designer a clear picture of what growing into their next level actually looks like.
                  </p>
                  <div className="flex items-center gap-6 mt-6 pt-5 border-t border-border">
                    <div>
                      <p className="font-display font-bold leading-none" style={{ fontSize: "1.5rem", color: ACCENT }}>10</p>
                      <p className="font-body text-xs text-muted mt-0.5">capability areas</p>
                    </div>
                    <button
                      onClick={() => setGrowthModalOpen(true)}
                      className="ml-auto font-body text-sm font-medium hover:opacity-70 transition-opacity"
                      style={{ color: ACCENT }}
                    >
                      Explore framework →
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Retention / hiring */}
            <motion.div {...fade}>
              {(() => {
                const PILLARS = [
                  {
                    title: "Retention",
                    items: [
                      ["Comp bands built", "Salary bands established. Gaps corrected with founder alignment."],
                      ["Direct reporting", "Every designer moved under design leadership on day one"],
                      ["Held the team", "No regretted exits, just one departure to pursue music"],
                    ],
                  },
                  {
                    title: "Hiring",
                    items: [
                      ["Evaluation framework", "Built from scratch, later adopted as the benchmark for PM hiring too"],
                      ["Onboarding + KT kits", "New-hire onboarding and exit knowledge-transfer checklists"],
                      ["Two backfills closed", "Replacement hires landed within one to two months"],
                    ],
                  },
                ];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-0">
                    {/* Row 1 — titles */}
                    {PILLARS.map((pillar) => (
                      <div key={`${pillar.title}-header`} className="flex flex-col px-8 py-4 rounded-t-2xl border border-b-0 border-border" style={{ background: "var(--color-card)" }}>
                        <p className="font-display font-bold text-fg" style={{ fontSize: "1.125rem" }}>{pillar.title}</p>
                      </div>
                    ))}
                    {/* Row 2 — items */}
                    {PILLARS.map((pillar) => (
                      <div key={`${pillar.title}-items`} className="flex flex-col rounded-b-2xl border border-t border-border px-8 py-6 gap-4" style={{ background: "var(--color-bg)" }}>
                        {pillar.items.map(([head, body]) => (
                          <div key={head} className="pb-4 border-b border-border last:border-0 last:pb-0">
                            <p className="font-display font-semibold text-fg mb-1" style={{ fontSize: "0.875rem" }}>{head}</p>
                            <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.8125rem" }}>{body}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                );
              })()}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            BUCKET 02 — CULTURE, BUILT REMOTELY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="culture" className="px-6 py-24 max-w-5xl mx-auto scroll-mt-28">
          <motion.div {...fade}>
            <Label>Bucket 02 · Culture, built remotely</Label>
            <H2>Turning eight people in silos into one team</H2>
            <p className="font-body text-muted leading-relaxed mt-6 mb-12" style={{ fontSize: "1.0625rem" }}>
              With the team meeting in person only once every six months, identity and trust
              couldn&apos;t be left to chance. Rhythms were built to survive a screen, and the rare
              in-person windows were used deliberately.
            </p>

            {(() => {
              const GROUPS = [
                {
                  title: "Rhythms and rituals",
                  body: "Internal cadences that made trust and alignment possible across a fully distributed team.",
                  items: [
                    { head: "Direct reporting + 1:1s", body: "Reporting moved to design leadership on day one, with weekly and bi-weekly 1:1s as a non-negotiable rhythm for trust." },
                    { head: "Weekly design jams", body: "Brainstorming and critique sessions that made the team work and feel like one unit, not separate verticals." },
                    { head: "Regular retrospectives", body: "A team-wide retro process to capture sentiment and pulse-check how the interventions were actually landing over time." },
                  ],
                },
                {
                  title: "Connection and community",
                  body: "Bridges built inside the team, across functions, and outward into the design community.",
                  items: [
                    { head: "#design Slack channel", body: "An always-on home for design-led conversation across product and the brand design team it had never connected with." },
                    { head: "Cross-team connection", body: "Opened communication channels with brand design and started meeting other functions far more often." },
                    { head: "Outward brand-building", body: "Took the team to conferences and events to put smallcase design on the Bangalore design community map." },
                  ],
                },
              ];
              return (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-0">
                  {/* Row 1 — overviews */}
                  {GROUPS.map((g) => (
                    <div key={`${g.title}-overview`} className="flex flex-col px-8 py-4 rounded-t-2xl border border-b-0 border-border" style={{ background: "var(--color-card)" }}>
                      <p className="font-display font-bold text-fg" style={{ fontSize: "1.125rem" }}>{g.title}</p>
                    </div>
                  ))}
                  {/* Row 2 — items */}
                  {GROUPS.map((g) => (
                    <div key={`${g.title}-items`} className="flex flex-col rounded-b-2xl border border-t border-border px-8 py-6 gap-4" style={{ background: "var(--color-bg)" }}>
                      {g.items.map((item) => (
                        <div key={item.head} className="pb-4 border-b border-border last:border-0 last:pb-0">
                          <p className="font-display font-semibold text-fg mb-1" style={{ fontSize: "0.875rem" }}>{item.head}</p>
                          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.8125rem" }}>{item.body}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              );
            })()}


            {/* Team photos grid */}
            <motion.div {...fade} className="mt-12">
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  "/team/team-1.png",
                  "/team/team-2.jpg",
                  "/team/team-3.jpg",
                  "/team/team-4.jpg",
                  "/team/team-5.jpg",
                  "/team/team-6.jpg",
                ].map((src, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                    <img
                      src={src}
                      alt={`Team photo ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Team voice */}
            <motion.div {...fade} className="mt-14">
              <Label>In their own words</Label>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  ["The product design team now feels and works like one unit. That's something you've been able to achieve successfully.", "Product Manager"],
                  ["Design autonomy is slowly coming into power, decisions are being finalised by designers, not product folks.", "Product Designer"],
                  ["Really love how the design team has come together, from collaborations to team outings. Big thanks to Sugam for making it happen!", "Product Designer"],
                  ["I've always admired the structure and motivation you brought to the design team. Glad we had time together, so I could learn from you.", "Product Manager"],
                ].map(([quote, attr]) => (
                  <div key={quote} className="rounded-2xl p-7 border border-border flex flex-col gap-3" style={{ background: "var(--color-bg)" }}>
                    {/* Large decorative quote mark */}
                    <span className="font-display font-bold leading-none select-none" style={{ fontSize: "3rem", color: ACCENT, lineHeight: 1 }}>&ldquo;</span>
                    <p className="font-display font-bold text-fg -mt-3" style={{ fontSize: "1.0625rem" }}>
                      {quote}
                    </p>
                    <p className="font-body text-muted text-sm leading-relaxed">{attr}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            PRODUCT — craft + AI
        ══════════════════════════════════════════════════════════════════ */}
        <section id="craft" className="px-6 py-24 bg-card scroll-mt-28">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <Label>Bucket 03 · Craft &amp; systems</Label>
              <H2>Scaling design through systems, not headcount</H2>
              <p className="font-body text-muted leading-relaxed mt-6 mb-12" style={{ fontSize: "1.0625rem" }}>
                With trust and team foundations in place, the focus shifted to increasing leverage. The
                goal wasn't to grow through headcount, but through better systems, stronger ownership,
                higher craft quality, and early adoption of AI.
              </p>
            </motion.div>

            {/* How work flows */}
            <motion.div {...fade} className="mb-14">
              <h3 className="font-display font-bold text-fg mb-6" style={{ fontSize: "1.375rem" }}>
                Creating Clarity and Ownership
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {[
                  {
                    title: "Domain ownership",
                    sub: "Shifted designers from projects to product-domain ownership.",
                    items: [
                      { head: "End-to-end domain ownership", body: "Replaced fragmented project assignments with ownership of product domains, giving designers responsibility across every customer touchpoint where their domain appeared." },
                      { head: "Deeper fintech expertise", body: "Long-term ownership helped designers build stronger domain knowledge, enabling decisions grounded in both customer needs and financial concepts." },
                      { head: "Better product outcomes", body: "Consistent ownership across web, app, and other touchpoints improved continuity, reduced context switching, and led to more informed design decisions." },
                    ],
                  },
                  {
                    title: "Design operations",
                    sub: "Creating clarity, predictability, and quality at scale.",
                    items: [
                      { head: "Cross-functional collaboration", body: "Established a consistent handoff and collaboration model across product design, brand design, and engineering, reducing ambiguity and improving execution quality." },
                      { head: "Planning and visibility", body: "Made priorities, bandwidth, and dependencies visible through shared roadmap planning, enabling better capacity allocation and more predictable delivery." },
                      { head: "Quality and decision-making", body: "Introduced structured design reviews and stronger specification practices, raising quality and improving alignment across product teams." },
                    ],
                  },
                ].map(({ title, sub, items }) => (
                  <div key={title} className="rounded-2xl bg-bg border border-border flex flex-col overflow-hidden">
                    <div className="px-7 py-5 border-b border-border" style={{ background: "var(--color-card)" }}>
                      <p className="font-display font-bold text-fg mb-1" style={{ fontSize: "1.0625rem" }}>{title}</p>
                      <p className="font-body text-muted text-sm leading-relaxed">{sub}</p>
                    </div>
                    <div className="flex flex-col gap-4 px-7 py-6">
                      {items.map((item) => (
                        <div key={item.head} className="pb-4 border-b border-border last:border-0 last:pb-0">
                          <p className="font-display font-semibold text-fg mb-1" style={{ fontSize: "0.875rem" }}>{item.head}</p>
                          <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.8125rem" }}>{item.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Systems that Scale Quality */}
            <motion.div {...fade} className="mb-3">
              <h3 className="font-display font-bold text-fg mb-6" style={{ fontSize: "1.375rem" }}>
                Systems that Scale Quality
              </h3>
            </motion.div>
            <motion.div {...fade} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
              {[
                ["Friction Log", "A recurring ritual where designers audit core user journeys together, creating a shared pipeline of usability improvements, engineering fixes, and AI-driven opportunities."],
                ["Product Design Vision Workshop", "Aligned the team on a shared vision and the capabilities needed to become a best-in-class design organization."],
                ["UX Research handbook", "Established a UX research handbook, repeatable testing practices, and a shared repository of insights, making user research more accessible and systematic across the team."],
                ["Figma source of truth", "Introduced a culture of maintaining production-ready designs and flows in Figma, improving alignment across design, product, and engineering."],
              ].map(([head, body]) => (
                <div key={head} className="rounded-2xl p-7 bg-bg border border-border">
                  <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.0625rem" }}>{head}</p>
                  <p className="font-body text-muted text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </motion.div>

            {/* Building for an AI-Native Future */}
            <motion.div {...fade} className="mb-3">
              <h3 className="font-display font-bold text-fg mb-6" style={{ fontSize: "1.375rem" }}>
                Building for an AI-Native Future
              </h3>
            </motion.div>
            <motion.div {...fade} className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
              {[
                ["Design systems charter", "Restructured foundations, components, and tokens into a scalable system with shared nomenclature and AI-ready architecture."],
                ["AI-powered UX Writing", "Defined the brand's tone of voice, UX writing principles, and AI protocols, then operationalized them through a Claude agent used across design and product teams."],
              ].map(([head, body]) => (
                <div key={head} className="rounded-2xl p-7 bg-bg border border-border">
                  <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.0625rem" }}>{head}</p>
                  <p className="font-body text-muted text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </motion.div>

            {/* AI adoption spotlight */}
            <motion.div {...fade} className="mb-14">
              <div className="rounded-2xl p-8 lg:p-10" style={{ background: HERO_BG }}>
                <Label dark>Spotlight · Pushing AI adoption</Label>
                <h3 className="font-display font-bold leading-snug mb-4" style={{ color: "white", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)" }}>
                  Designers who ship code, and a design system machines can read
                </h3>
                <p className="font-body leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
                  A four-week pilot built the business case for Figma Dev Mode, securing GitHub and
                  Claude access for designers and establishing AI as a roadmap priority with
                  engineering. By making the design system machine-readable through Figma MCP,
                  screenshot-based interpretation was removed entirely.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
                  {[
                    ["100%", "of designers now raise PRs to the codebase"],
                    ["~7.5×", "token efficiency gain from MCP design foundation"],
                    ["80%", "of UI generated by engineering agents in the pilot"],
                    ["80–90%", "implementation accuracy on generated UI"],
                  ].map(([big, small]) => (
                    <div key={small} className="px-5 py-6" style={{ background: HERO_BG }}>
                      <div className="font-display font-bold mb-1.5" style={{ color: ACCENT, fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1 }}>{big}</div>
                      <p className="font-body" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem", lineHeight: 1.4 }}>{small}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            IMPACT
        ══════════════════════════════════════════════════════════════════ */}
        <section id="impact" className="px-6 py-24 max-w-5xl mx-auto scroll-mt-28">
          <motion.div {...fade}>
            <Label>03 — Impact</Label>
            <H2>Design moved from the execution layer to the strategy table</H2>

            {/* Core team spotlight */}
            <div className="rounded-2xl p-10 mt-10 mb-10" style={{ background: HERO_BG }}>
              <h3 className="font-display font-bold leading-snug mb-3" style={{ color: "white", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
                A design seat on the parent company&apos;s core leadership team
              </h3>
              <p className="font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9375rem" }}>
                As the impact on the product design team became visible, a design seat was created
                in the core group of Case Platforms, the key leaders across every company in the
                parent group. Design had never been represented at that level before.
              </p>
            </div>

            {/* Impact stat row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
              {[
                { stat: "Promoted", label: "to Senior Director in year one", sub: "Leadership's vote of confidence in the function being built" },
                { stat: "0", label: "regretted exits", sub: "The whole team retained, just one left to pursue music" },
                { stat: "100%", label: "of designers ship code", sub: "Raising PRs, building internal tools, and fixing bugs directly" },
              ].map((s) => (
                <div key={s.label} className="bg-card rounded-2xl p-8 border border-border">
                  <div className="font-display font-bold mb-2" style={{ color: ACCENT, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1 }}>{s.stat}</div>
                  <p className="font-body font-medium text-fg text-sm mb-1">{s.label}</p>
                  <p className="font-body text-muted text-xs leading-relaxed">{s.sub}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
              The team&apos;s retrospective sentiment transformed. Design autonomy grew, decisions
              moved to designers, and the function that had been working in silos now operated and
              felt like one unit. All of it achieved without additional resources or cost.
            </p>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            NAV
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="px-6 py-16 border-t border-border"
          style={{ backgroundColor: HERO_BG }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/#work"
              className="font-body text-sm font-medium px-5 py-2.5 hover:opacity-80 transition-opacity"
              style={{ color: "white", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px" }}
            >
              ← All Work
            </Link>
            <Link
              href="/work/gojek-plus"
              className="font-body text-sm font-medium px-5 py-2.5 hover:opacity-80 transition-opacity"
              style={{ color: "white", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px" }}
            >
              Next: Gojek PLUS →
            </Link>
          </div>
        </section>

      </main>

      {/* ── Career ladder modal ── */}
      <Modal
        open={careerModalOpen}
        onClose={() => setCareerModalOpen(false)}
        title="Career architecture built for designers"
        description="The borrowed PM ladder was replaced with a dual-track model, giving designers a real choice between growing as an individual contributor or as a manager, with design-specific titles at every level."
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Old */}
          <div className="lg:col-span-4 rounded-2xl p-6 border border-border" style={{ background: "var(--color-card)" }}>
            <p className="font-body text-xs uppercase tracking-widest text-muted mb-5">Before · single track</p>
            <div className="flex flex-col gap-2">
              {OLD_LADDER.map(([lvl, title]) => (
                <div key={lvl} className="flex items-center gap-3 rounded-lg px-3 py-2.5" style={{ background: "var(--color-bg)" }}>
                  <span className="font-body text-xs font-semibold text-muted w-6 shrink-0">{lvl}</span>
                  <span className="font-body text-sm text-muted">{title}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Arrow */}
          <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 12h15M13 6l6 6-6 6" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          {/* New */}
          <div className="lg:col-span-7 rounded-2xl p-6 border-2" style={{ borderColor: ACCENT, background: "var(--color-bg)" }}>
            <div className="flex items-center justify-between mb-5">
              <p className="font-body text-xs uppercase tracking-widest" style={{ color: ACCENT }}>After · dual track</p>
              <div className="flex gap-4">
                <span className="font-body text-xs text-muted">IC path</span>
                <span className="font-body text-xs text-muted">Manager path</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {NEW_LADDER.map(([lvl, ic, mgr]) => (
                <div key={lvl} className="flex items-center gap-3">
                  <span className="font-body text-xs font-semibold text-muted w-6 shrink-0">{lvl}</span>
                  <div className="grid grid-cols-2 gap-2 flex-1">
                    <span className="font-body text-sm text-fg rounded-lg px-3 py-2.5" style={{ background: ACCENT_SOFT }}>{ic}</span>
                    {mgr ? (
                      <span className="font-body text-sm text-fg rounded-lg px-3 py-2.5" style={{ background: "var(--color-card)" }}>{mgr}</span>
                    ) : (
                      <span className="rounded-lg px-3 py-2.5 flex items-center" style={{ background: "var(--color-card)" }}>
                        <span className="font-body text-xs text-muted">–</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <p className="font-body text-xs text-muted mt-2">
                Both tracks converge at VP and above (L9–L12).
              </p>
            </div>
          </div>
        </div>
      </Modal>

      {/* ── Growth framework modal ── */}
      <Modal
        open={growthModalOpen}
        onClose={() => setGrowthModalOpen(false)}
        title="Growth framework with ten capability areas"
        description="Each level has explicit expectations across a mix of hard and soft skills. Select a level to see what growing into it actually looks like across all ten areas."
      >
        <GrowthFramework />
      </Modal>

      <Footer />
    </>
  );
}
