"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const HERO_BG = "#1A3550";
const ACCENT = "#4F8EF7";

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="font-body text-xs uppercase tracking-widest block mb-4"
      style={{ color: light ? "rgba(255,255,255,0.4)" : undefined }}
    >
      {!light && <span className="text-muted">{children}</span>}
      {light && children}
    </span>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold text-fg leading-tight mb-6"
      style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}
    >
      {children}
    </h2>
  );
}

export default function SmallcasePage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section
          className="min-h-[70vh] flex flex-col justify-end px-6 pb-20 pt-32"
          style={{ backgroundColor: HERO_BG }}
        >
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {["Leadership", "Org Building", "Fintech"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-body"
                    style={{
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p
                className="font-body mb-3"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8125rem" }}
              >
                Smallcase & Tickertape · 2024–Present
              </p>
              <h1
                className="font-display font-bold leading-tight"
                style={{
                  color: "white",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  maxWidth: "18ch",
                }}
              >
                Building Design as a{" "}
                <span style={{ color: ACCENT }}>Strategic Function.</span>
              </h1>
              <p
                className="font-body leading-relaxed mt-6 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}
              >
                How I came into a fragmented design setup and rebuilt it into a function with
                infrastructure, authority, and a seat at the product strategy table — in 12 months.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Context ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Label>The Situation</Label>
                <SectionHeading>Design existed. A design function didn&apos;t.</SectionHeading>
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                  Smallcase and Tickertape had designers. They were talented. But design was being
                  consumed by product — reactive, output-focused, with no shared process, no
                  centralised infrastructure, and no consistent voice in how products got shaped.
                </p>
                <p className="font-body text-muted leading-relaxed mt-4" style={{ fontSize: "1rem" }}>
                  I joined as Head of Design with a mandate: turn this into a strategic function.
                  Not just better execution — a different relationship between design and the business.
                </p>
              </div>
              <div>
                <Label>My Role</Label>
                <p className="font-body text-fg font-medium mb-2" style={{ fontSize: "0.9375rem" }}>
                  Director → Senior Director, Product Design
                </p>
                <p className="font-body text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                  Full ownership of design across Smallcase and Tickertape: team structure,
                  hiring, process, systems, and product design quality.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <Label>Promoted</Label>
                  <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                    Senior Director in 12 months
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── What I built ── */}
        <section className="px-6 py-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>What I Built</Label>
              <SectionHeading>Four pillars of a functioning design org.</SectionHeading>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {[
                  {
                    num: "01",
                    title: "Design System & Infrastructure",
                    body: "Built the first shared design system across Smallcase and Tickertape — component libraries, token architecture, documentation standards, and a contribution model that made it sustainable.",
                  },
                  {
                    num: "02",
                    title: "Team Structure & Hiring",
                    body: "Restructured the team from a pool model to embedded product squads. Defined roles, levelling, and hiring criteria. Grew the team and raised the bar on what good design leadership looks like internally.",
                  },
                  {
                    num: "03",
                    title: "Design Process & Rituals",
                    body: "Established critique culture, design reviews, and a shared design language. Created the conditions where designers could push back, escalate quality issues, and be heard.",
                  },
                  {
                    num: "04",
                    title: "Strategic Voice",
                    body: "Got design into roadmap conversations, not just execution queues. Built relationships with the CPO and CEO. Design now has a perspective on what gets built — not just how it looks when it ships.",
                  },
                ].map((item) => (
                  <div key={item.num} className="bg-bg rounded-2xl p-8">
                    <span className="font-body text-xs text-muted block mb-4">{item.num}</span>
                    <h3
                      className="font-display font-bold text-fg mb-3"
                      style={{ fontSize: "1.0625rem" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body text-muted leading-relaxed"
                      style={{ fontSize: "0.9375rem" }}
                    >
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Reflection ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Label>What This Was Really About</Label>
            <div className="max-w-3xl">
              <blockquote
                className="font-display font-bold text-fg leading-snug mb-8"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)" }}
              >
                &ldquo;The biggest challenge wasn&apos;t design quality. It was earning the trust
                to change how design gets used.&rdquo;
              </blockquote>
              <p className="font-body text-muted leading-relaxed mb-4" style={{ fontSize: "1rem" }}>
                Design leadership at this level is fundamentally an organisational challenge. You
                can hire great people and build great systems, but if the organisation doesn&apos;t
                know how to use design — if it reaches for designers only at the execution stage —
                none of it lands.
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                The promotion to Senior Director after 12 months wasn&apos;t a reflection of
                how much I delivered — it was a signal that the function had earned a different
                kind of credibility. That&apos;s the work I&apos;m most proud of.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Nav ── */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-10">
            <Link
              href="/#work"
              className="font-body text-sm text-muted hover:text-fg transition-colors inline-flex items-center gap-2"
            >
              ← All Work
            </Link>
            <Link
              href="/work/gojek-plus"
              className="font-body text-sm text-fg border border-border px-5 py-2.5 rounded-full hover:border-fg transition-colors"
            >
              Next: Gojek PLUS →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
