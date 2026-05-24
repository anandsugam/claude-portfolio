"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const HERO_BG = "#1E1A2E";
const ACCENT = "#9B7FFF";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">
      {children}
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

export default function GoFoodTextSearchPage() {
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
                {["Search", "Discovery"].map((t) => (
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
                Gojek · GoFood · 2020–2021
              </p>
              <h1
                className="font-display font-bold leading-tight"
                style={{
                  color: "white",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  maxWidth: "18ch",
                }}
              >
                Redesigning How{" "}
                <span style={{ color: ACCENT }}>20M Users</span> Find Food.
              </h1>
              <p
                className="font-body leading-relaxed mt-6 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}
              >
                GoFood&apos;s search was built for restaurants, not intent. We redesigned it for
                how people actually think about food — from &ldquo;I want nasi goreng&rdquo; to
                &ldquo;something quick, nearby, open now.&rdquo;
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
                <Label>The Problem</Label>
                <SectionHeading>Search as a catalogue, not a tool.</SectionHeading>
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                  GoFood had 20 million users searching for food across Southeast Asia. But the
                  search experience was built around restaurant names — a catalogue model. Most
                  users didn&apos;t search for restaurants. They searched for food types, cuisines,
                  and specific dishes. The existing search couldn&apos;t handle that well.
                </p>
                <p className="font-body text-muted leading-relaxed mt-4" style={{ fontSize: "1rem" }}>
                  Zero-result rates were high. Refinement behaviour was low. Users who hit a dead
                  end in search converted at dramatically lower rates than users who browsed. Search
                  was a broken discovery surface.
                </p>
              </div>
              <div>
                <Label>My Role</Label>
                <p className="font-body text-fg font-medium mb-2" style={{ fontSize: "0.9375rem" }}>
                  Product Designer → Senior Product Designer
                </p>
                <p className="font-body text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                  Led design from research through to launch. Worked closely with the search
                  engineering team on relevance model integration.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <Label>Scale</Label>
                  <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                    20M+ users
                  </p>
                  <p className="font-body text-muted text-sm">Southeast Asia</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Research ── */}
        <section className="px-6 py-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>Research Findings</Label>
              <SectionHeading>Three types of search intent — all underserved.</SectionHeading>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {[
                  {
                    type: "Craving-led",
                    examples: "\"nasi goreng\", \"sushi\", \"pizza\"",
                    problem: "Results were restaurant-first, not dish-first. Users had to scan menus mentally to find what they wanted.",
                  },
                  {
                    type: "Context-led",
                    examples: "\"quick lunch\", \"nearby\", \"open now\"",
                    problem: "Contextual filters existed but were buried. Users had to know they existed to use them.",
                  },
                  {
                    type: "Familiar-led",
                    examples: "Returning to a previous order, a favourite restaurant",
                    problem: "No personalisation surface in search. Recent and favourite items weren't surfaced.",
                  },
                ].map((item) => (
                  <div key={item.type} className="bg-bg rounded-2xl p-8">
                    <span
                      className="font-body text-xs font-medium px-3 py-1 rounded-full inline-block mb-4"
                      style={{ background: "rgba(155,127,255,0.1)", color: ACCENT }}
                    >
                      {item.type}
                    </span>
                    <p
                      className="font-body text-muted text-xs italic mb-4"
                      style={{ lineHeight: 1.6 }}
                    >
                      {item.examples}
                    </p>
                    <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.875rem" }}>
                      {item.problem}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Design Decisions ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Label>What We Redesigned</Label>
            <SectionHeading>From a name lookup to a discovery surface.</SectionHeading>
            <div className="space-y-4">
              {[
                {
                  num: "01",
                  title: "Dish-first search results",
                  detail: "Rebuilt the results architecture to surface dishes alongside restaurants. If you search 'gado-gado', you see gado-gado available near you — not just restaurants that might have it on their menu.",
                },
                {
                  num: "02",
                  title: "Intent-aware empty states",
                  detail: "Replaced generic zero-result screens with recovery flows that understood what the user was looking for and offered adjacent options — broadening the search or showing alternatives.",
                },
                {
                  num: "03",
                  title: "Contextual filter surface",
                  detail: "Brought filters into the top of the search flow as quick-select chips. 'Open now', 'Under 20 mins', 'Promo' became one tap rather than a secondary menu. Filter usage increased significantly.",
                },
                {
                  num: "04",
                  title: "Personalised search landing",
                  detail: "Added a pre-search state that showed recent orders, favourite restaurants, and trending items in the user's area. Reduced time-to-first-result-tap measurably for returning users.",
                },
              ].map((item) => (
                <div
                  key={item.num}
                  className="border border-border rounded-2xl p-8 grid grid-cols-12 gap-6"
                >
                  <span className="col-span-12 lg:col-span-1 font-body text-xs text-muted">
                    {item.num}
                  </span>
                  <div className="col-span-12 lg:col-span-11">
                    <h3
                      className="font-display font-bold text-fg mb-2"
                      style={{ fontSize: "1.0625rem" }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body text-muted leading-relaxed"
                      style={{ fontSize: "0.9375rem" }}
                    >
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── Nav ── */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-10">
            <Link
              href="/#work"
              className="font-body text-sm text-muted hover:text-fg transition-colors"
            >
              ← All Work
            </Link>
            <Link
              href="/work/smallcase"
              className="font-body text-sm text-fg border border-border px-5 py-2.5 rounded-full hover:border-fg transition-colors"
            >
              Next: Smallcase Case Study →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
