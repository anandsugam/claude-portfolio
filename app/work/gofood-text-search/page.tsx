"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const HERO_BG = "#1E1A2E";
const ACCENT = "#9B7FFF";
const ACCENT_SOFT = "rgba(155,127,255,0.1)";

// ── Shared micro-components ──────────────────────────────────────────────────

function ChapterLabel({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="font-body text-xs uppercase tracking-widest block mb-4"
      style={{ color: light ? "rgba(255,255,255,0.4)" : "var(--color-muted)" }}
    >
      {children}
    </span>
  );
}

// ── Interactive intent + distribution component ───────────────────────────────

const INTENT_CARDS = [
  { type: "Dish Intent",       segKey: "Dish",     color: "#EF8354", icon: "🍜", desc: "Users search for a specific dish name.",           example: "\"nasi goreng\", \"sushi\", \"gado-gado\"" },
  { type: "Brand Intent",      segKey: "Brand",    color: "#4FC3F7", icon: "🏪", desc: "Users search for a specific multi-outlet brand.",   example: "\"KFC\", \"McDonald's\", \"Fore Coffee\"" },
  { type: "Restaurant Intent", segKey: "Resto",    color: "#66BB6A", icon: "📍", desc: "Users search for a specific restaurant they know.", example: "\"Warung Bu Kris\", \"Sate Senayan\"" },
  { type: "Cuisine Intent",    segKey: "Cuisine",  color: "#2D3142", icon: "🌏", desc: "Users search for a category or cuisine type.",      example: "\"Japanese\", \"healthy\", \"fast food\"" },
];

const CHART_DATA = {
  search: [
    { label: "Dish",    pct: 61, color: "#EF8354", gradient: true },
    { label: "Brand",   pct: 26, color: "#4FC3F7" },
    { label: "Cuisine", pct:  2, color: "#2D3142", calloutTop: true },
    { label: "Resto",   pct:  4, color: "#66BB6A", calloutBottom: true },
    { label: "Others",  pct:  7, color: "#EF5350" },
  ],
  booking: [
    { label: "Dish",    pct: 27, color: "#EF8354", gradient: true },
    { label: "Brand",   pct: 60, color: "#4FC3F7" },
    { label: "Cuisine", pct:  2, color: "#2D3142", calloutTop: true },
    { label: "Resto",   pct:  4, color: "#66BB6A", calloutBottom: true },
    { label: "Others",  pct:  7, color: "#EF5350" },
  ],
};

function IntentDistribution() {
  const [mode, setMode] = useState<"search" | "booking">("search");
  const [hoveredSeg, setHoveredSeg] = useState<string | null>(null);
  const segments = CHART_DATA[mode];

  return (
    <>
      {/* Intent cards — color strip on top, hover triggers chart highlight */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
        {INTENT_CARDS.map((card) => (
          <div
            key={card.type}
            className="bg-bg rounded-2xl overflow-hidden cursor-default transition-opacity duration-200"
            style={{
              borderTop: `4px solid ${card.color}`,
              opacity: hoveredSeg && hoveredSeg !== card.segKey ? 0.5 : 1,
            }}
            onMouseEnter={() => setHoveredSeg(card.segKey)}
            onMouseLeave={() => setHoveredSeg(null)}
          >
            <div className="p-7">
              <span className="text-2xl mb-4 block">{card.icon}</span>
              <h3 className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.1875rem" }}>{card.type}</h3>
              <p className="font-body text-muted mb-3" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>{card.desc}</p>
              <p className="font-body italic" style={{ fontSize: "0.8125rem", lineHeight: 1.5, color: "rgba(0,0,0,0.35)" }}>{card.example}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Infographic card + insight tray */}
      <div>
      <div className="bg-bg p-8 lg:p-10" style={{ borderRadius: "16px 16px 0 0", border: "1px solid var(--color-border)" }}>

        {/* Title + toggle pill row */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <p className="font-display font-bold text-fg" style={{ fontSize: "1.25rem" }}>
            Distribution of {mode} count by intent
          </p>
          <div className="flex items-center gap-2 shrink-0">
            {(["search", "booking"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className="font-body text-sm px-5 py-2 rounded-full transition-all duration-200 cursor-pointer"
                style={{
                  background: mode === m ? "#2D3142" : "transparent",
                  color: mode === m ? "white" : "#4F5D75",
                  border: `1px solid ${mode === m ? "#2D3142" : "#BFC0C0"}`,
                }}
              >
                {m === "search" ? "Search count" : "Booking count"}
              </button>
            ))}
          </div>
        </div>

        {/* Single bar */}
        <div>
          {/* Compute center positions for callout labels */}
          {(() => {
            let acc = 0;
            const centers: Record<string, number> = {};
            for (const seg of segments) {
              centers[seg.label] = acc + seg.pct / 2;
              acc += seg.pct;
            }
            const cuisineCenter = centers["Cuisine"] ?? 0;
            const restoCenter   = centers["Resto"]   ?? 0;

            return (
              <div className="relative" style={{ paddingTop: "24px", paddingBottom: "24px" }}>
                {/* Top callout — Cuisine, centered over black segment */}
                <div className="absolute top-0" style={{ left: `${cuisineCenter}%`, transform: "translateX(-50%)" }}>
                  <span className="font-body text-muted" style={{ whiteSpace: "nowrap", fontSize: "0.7rem" }}>Cuisine ┐</span>
                </div>

                {/* Bar */}
                <div className="flex rounded-lg overflow-hidden" style={{ height: "56px" }}>
                  {segments.map((seg) => {
                    const highlighted = !hoveredSeg || hoveredSeg === seg.label;
                    return (
                      <div
                        key={seg.label}
                        className="flex items-center justify-start pl-3 shrink-0 transition-opacity duration-200"
                        style={{
                          width: `${seg.pct}%`,
                          background: seg.gradient ? `linear-gradient(90deg, ${seg.color}, #F4A261)` : seg.color,
                          minWidth: seg.pct < 5 ? "3px" : undefined,
                          padding: seg.pct < 5 ? "0" : undefined,
                          opacity: highlighted ? 1 : 0.2,
                        }}
                      >
                        {seg.pct >= 8 && (
                          <span className="font-body font-medium text-white" style={{ fontSize: "0.8125rem" }}>{seg.label}</span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Bottom callout — Resto, centered over green segment */}
                <div className="absolute bottom-0" style={{ left: `${restoCenter}%`, transform: "translateX(-50%)" }}>
                  <span className="font-body text-muted" style={{ whiteSpace: "nowrap", fontSize: "0.7rem" }}>└ Resto</span>
                </div>
              </div>
            );
          })()}
        </div>

      </div>

      {/* Insight tray — extends from bottom of card */}
      <div
        className="px-8 lg:px-10 py-5 flex items-start gap-4"
        style={{
          background: ACCENT_SOFT,
          borderRadius: "0 0 16px 16px",
          borderLeft: "1px solid var(--color-border)",
          borderRight: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
          borderTop: `2px solid ${ACCENT}`,
        }}
      >
        <span className="font-body text-xs font-semibold uppercase tracking-widest shrink-0 mt-0.5" style={{ color: ACCENT }}>Key insight</span>
        <p className="font-body text-muted" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
          Dish intent dominates search volume — but Brand intent drives a disproportionately higher
          share of bookings. Brand searchers convert better. They know what they want.
        </p>
      </div>
      </div>
    </>
  );
}

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GoFoodTextSearchPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ── 01 Hero ── */}
        <section
          className="min-h-[72vh] flex flex-col justify-end px-6 pb-20 pt-32"
          style={{ backgroundColor: HERO_BG }}
        >
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {["Search", "Discovery", "Mobile", "Gojek · GoFood"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-body"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="font-body mb-3" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}>
                Gojek · GoFood · 2020–2021
              </p>
              <h1
                className="font-display font-bold leading-tight"
                style={{ color: "white", fontSize: "clamp(2.5rem, 6vw, 5rem)", maxWidth: "18ch" }}
              >
                Redesigning How{" "}
                <span style={{ color: ACCENT }}>20M Users</span> Find Food.
              </h1>
              <p
                className="font-body leading-relaxed mt-6 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}
              >
                Every day more than 1.2 million GoFood orders are placed using search. With close to
                half a million merchants on the platform, quickly surfacing relevant results is a
                fundamental product problem — not just a UX one.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── 02 Scale bar ── */}
        <section style={{ backgroundColor: "#13101F" }}>
          <div className="max-w-5xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { stat: "1.2M+", label: "Orders/day via search" },
                { stat: "500K", label: "Merchants on platform" },
                { stat: "20M+", label: "Monthly active users" },
                { stat: "65%+", label: "Bookings start from search" },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="font-display font-bold" style={{ color: ACCENT, fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1 }}>
                    {stat}
                  </p>
                  <p className="font-body text-xs uppercase tracking-widest mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 Role + Problem ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div {...fade}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">The Opportunity</span>
                <h2 className="font-display font-bold text-fg leading-tight mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                  Search to booking conversion was very low. And search was primitive.
                </h2>
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                  More than 65% of all GoFood bookings were made from search — but the search-to-booking
                  conversion was critically low. Search was built as a name lookup: type a restaurant
                  name, get a list. It couldn&apos;t handle dish intent, brand intent, or cuisine exploration.
                </p>
                <p className="font-body text-muted leading-relaxed mt-4" style={{ fontSize: "1rem" }}>
                  As the Senior Product Designer on GoFood, I was tasked with rethinking the search experience
                  from the ground up — grounded in data, validated by users, and designed for how people
                  actually think about food.
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <span className="font-body text-xs text-muted uppercase tracking-widest block mb-2">My Role</span>
                  <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                    Senior Product Designer
                  </p>
                  <p className="font-body text-muted text-sm mt-1" style={{ lineHeight: 1.7 }}>
                    End-to-end ownership: research, definition, design, and handoff. Partnered with
                    the search engineering team on relevance model integration.
                  </p>
                </div>
                <div className="pt-6 border-t border-border">
                  <span className="font-body text-xs text-muted uppercase tracking-widest block mb-2">Market</span>
                  <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>Indonesia, Vietnam & Thailand</p>
                  <p className="font-body text-muted text-sm">Southeast Asia's largest food delivery service</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── 04 Data: 4 Intent Types ── */}
        <section className="px-6 py-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">Research · Quantitative</span>
              <h2 className="font-display font-bold text-fg leading-tight mb-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                What does the data actually say?
              </h2>
              <p className="font-body text-muted leading-relaxed mb-10 max-w-2xl" style={{ fontSize: "1rem" }}>
                I collaborated with the business intelligence team to analyse millions of daily queries. We took
                the top 100 queries and manually tagged them by user intent. Four distinct intent types emerged.
              </p>
              <IntentDistribution />
            </motion.div>
          </div>
        </section>

        {/* ── 05 Repeat Search Analysis ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div {...fade}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">Research · Behaviour Patterns</span>
                <h2 className="font-display font-bold text-fg leading-tight mb-6" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                  Why do users search the same thing twice?
                </h2>
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                  We analysed repeat searches — tracking the original query to the final query in a booking
                  session. Three distinct patterns explained most of the re-typing behaviour.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    label: "Typo or Different Intent",
                    desc: "The final query is completely different from the original, or the original had a typo. The user's first attempt failed to capture what they actually wanted.",
                    color: "#EF8354",
                  },
                  {
                    label: "Identic",
                    desc: "The final search query is exactly the same as the original. Users retry because results didn't satisfy — not because the query was wrong.",
                    color: ACCENT,
                  },
                  {
                    label: "Expanded",
                    desc: "The final query is an expansion of the original. Users add words to narrow down — a signal they need better filters or smarter suggestions upfront.",
                    color: "#4FC3F7",
                  },
                ].map((item) => (
                  <div key={item.label} className="border border-border rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: item.color }} />
                      <div>
                        <h3 className="font-display font-bold text-fg mb-1" style={{ fontSize: "1rem" }}>
                          {item.label}
                        </h3>
                        <p className="font-body text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── 06 User Insights ── */}
        <section className="px-6 py-16" style={{ backgroundColor: HERO_BG }}>
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <span className="font-body text-xs uppercase tracking-widest block mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Research · Qualitative
              </span>
              <h2 className="font-display font-bold leading-tight mb-3" style={{ color: "white", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                7 things users told us in interviews.
              </h2>
              <p className="font-body leading-relaxed mb-10 max-w-2xl" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}>
                In-depth interviews with users in Indonesia and India — a careful mix of age, gender, and order
                frequency. These were the signal insights that shaped our design direction.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {[
                  "Users start with a restaurant first, then look for dishes — not the other way around.",
                  "Users search for dishes but expect a list of restaurants as results.",
                  "Brands are associated with trust, quality, and consistency of taste.",
                  "Search is the primary mode of discovery on GoFood — not browsing.",
                  "Users know what they don't want before they start searching.",
                  "Users decide on a cuisine before they start searching.",
                  "Social media and recommendations from friends heavily influence restaurant selection.",
                ].map((insight, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 rounded-2xl p-5"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="font-body text-xs font-medium shrink-0 mt-0.5" style={{ color: ACCENT }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem" }}>
                      {insight}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 07 Focus Areas ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div {...fade}>
            <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">Define</span>
            <h2 className="font-display font-bold text-fg leading-tight mb-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              Six focus areas that shaped the redesign.
            </h2>
            <p className="font-body text-muted leading-relaxed mb-10 max-w-2xl" style={{ fontSize: "1rem" }}>
              Based on the qualitative and quantitative data, we defined the scope tightly before moving to design.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                { num: "01", title: "Help users make a decision at every step", body: "Not just at the results stage — every moment of the search journey should reduce hesitation." },
                { num: "02", title: "Reduce search-to-selection time", body: "The faster a user finds what they want, the more they trust the app. Speed is a design quality." },
                { num: "03", title: "Reduce number of repeat searches", body: "Repeat searches signal failure. Each re-query is a user telling us the previous result wasn't right." },
                { num: "04", title: "Reduce cognitive load on users", body: "Show less, mean more. Every unnecessary result or option is friction." },
                { num: "05", title: "Focus on restaurant funnelling", body: "Users ultimately order from a restaurant. Design the search to move them confidently toward that decision." },
                { num: "06", title: "Reach search results faster", body: "Pre-search should do work for users — surfacing recent, relevant, and contextual options before they type." },
              ].map((item) => (
                <div key={item.num} className="border border-border rounded-2xl p-7">
                  <span className="font-body text-xs text-muted block mb-4">{item.num}</span>
                  <h3 className="font-display font-bold text-fg mb-3" style={{ fontSize: "1rem", lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p className="font-body text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ── 08 Solutions ── */}
        <section className="px-6 py-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">Solution</span>
              <h2 className="font-display font-bold text-fg leading-tight mb-10" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                From a name lookup to a discovery surface.
              </h2>
              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    title: "Predictive suggestions & intent classification",
                    detail: "Before the user finishes typing, the system predicts their intent — dish, brand, restaurant, or cuisine — and shapes the suggestion list accordingly. Dish intent surfaces dishes. Brand intent surfaces brand hubs.",
                    tag: "Pre-search",
                  },
                  {
                    num: "02",
                    title: "Recent restaurant searches, not just queries",
                    detail: "Previous versions only remembered query strings. We redesigned recents to show restaurant cards — because users return to places, not words. This dramatically reduced time-to-first-tap for returning users.",
                    tag: "Pre-search",
                  },
                  {
                    num: "03",
                    title: "Spell check, auto-correct, and no more empty states",
                    detail: "Zero-result screens were replaced with smart recovery flows. Typos get corrected. When there's no exact match, adjacent results are surfaced automatically — with clear explanation of what was expanded.",
                    tag: "During search",
                  },
                  {
                    num: "04",
                    title: "Restaurant-focused dish results & new brand intent",
                    detail: "Dish searches now show a two-layer result: the dish in context of a restaurant, with the menu item visible. Brand intent results show a dedicated brand hub — logo, all outlets, top dishes — not just a restaurant list.",
                    tag: "Results",
                  },
                  {
                    num: "05",
                    title: "Improved information hierarchy on merchant cards",
                    detail: "Merchant cards were redesigned to lead with the decision-relevant information: cuisine type, delivery time, rating, promo. Less noise, faster scanning, higher click-through to restaurant pages.",
                    tag: "Results",
                  },
                ].map((item) => (
                  <div
                    key={item.num}
                    className="bg-bg border border-border rounded-2xl p-8 grid grid-cols-12 gap-6"
                  >
                    <div className="col-span-12 lg:col-span-1">
                      <span className="font-body text-xs text-muted">{item.num}</span>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                      <h3 className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.0625rem" }}>
                        {item.title}
                      </h3>
                      <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                        {item.detail}
                      </p>
                    </div>
                    <div className="col-span-12 lg:col-span-2 flex lg:justify-end items-start">
                      <span
                        className="font-body text-xs px-3 py-1 rounded-full"
                        style={{ background: ACCENT_SOFT, color: ACCENT }}
                      >
                        {item.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── 09 Experience Journey ── */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div {...fade}>
            <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">Design Approach</span>
            <h2 className="font-display font-bold text-fg leading-tight mb-3" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
              Search is a journey, not a single step.
            </h2>
            <p className="font-body text-muted leading-relaxed mb-10 max-w-2xl" style={{ fontSize: "1rem" }}>
              We broke the experience into four sub-experiences. Each step carries search context forward — so
              the user never loses their intent as they move through the flow.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              {[
                {
                  phase: "Pre-Search",
                  num: "01",
                  desc: "Predictive suggestions, recent restaurant cards, and contextual chips — before the user types a single character.",
                },
                {
                  phase: "During Search",
                  num: "02",
                  desc: "Query understanding and intent classification in real-time. The suggestion list adapts to whether the user is typing a dish, brand, or cuisine.",
                },
                {
                  phase: "Results",
                  num: "03",
                  desc: "Intent-matched result layouts: dish results within restaurant context, brand hubs, redesigned merchant cards with better information hierarchy.",
                },
                {
                  phase: "Within Restaurant",
                  num: "04",
                  desc: "Search context persists into the restaurant menu — users who searched for 'gado-gado' land on the relevant menu section, not the top.",
                },
              ].map((item) => (
                <div key={item.num} className="border border-border rounded-2xl p-7 relative overflow-hidden">
                  <span
                    className="font-display font-bold absolute -top-4 -right-2 pointer-events-none select-none"
                    style={{ fontSize: "5rem", color: "rgba(0,0,0,0.04)", lineHeight: 1 }}
                  >
                    {item.num}
                  </span>
                  <span
                    className="font-body text-xs px-3 py-1 rounded-full inline-block mb-5"
                    style={{ background: ACCENT_SOFT, color: ACCENT }}
                  >
                    {item.phase}
                  </span>
                  <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                    {item.desc}
                  </p>
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
