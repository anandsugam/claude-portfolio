"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const HERO_BG = "#0A1F12";
const BRAND_GREEN = "#6EE87A";
const ACCENT_DIM = "rgba(110,232,122,0.12)";
const ACCENT_BORDER = "rgba(110,232,122,0.25)";

// ─── Micro-components ─────────────────────────────────────────────────────────

function ChapterMark({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="font-display font-bold shrink-0"
        style={{ fontSize: "clamp(3rem, 5vw, 4rem)", color: "rgba(17,17,10,0.06)", lineHeight: 1 }}
      >
        {num}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: "var(--color-border)" }} />
      <span className="font-body text-xs text-muted uppercase tracking-widest shrink-0">{label}</span>
    </div>
  );
}

function ChapterMarkDark({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span
        className="font-display font-bold shrink-0"
        style={{ fontSize: "clamp(3rem, 5vw, 4rem)", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}
      >
        {num}
      </span>
      <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
      <span
        className="font-body text-xs uppercase tracking-widest shrink-0"
        style={{ color: "rgba(255,255,255,0.3)" }}
      >
        {label}
      </span>
    </div>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="font-body text-xs uppercase tracking-widest block mb-4"
      style={{ color: dark ? "rgba(255,255,255,0.3)" : "var(--color-muted)" }}
    >
      {children}
    </span>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold text-fg leading-tight"
      style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
    >
      {children}
    </h2>
  );
}

function H2Dark({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold leading-tight"
      style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "white" }}
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
      {children}
    </p>
  );
}

function ThesisBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-10 px-8 py-8 rounded-2xl border-l-4"
      style={{ backgroundColor: ACCENT_DIM, borderColor: BRAND_GREEN }}
    >
      <p
        className="font-display font-bold text-fg leading-snug"
        style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.625rem)" }}
      >
        {children}
      </p>
    </div>
  );
}

function ImageZone({
  label,
  sublabel,
  aspect = "16/9",
  tall = false,
}: {
  label: string;
  sublabel?: string;
  aspect?: string;
  tall?: boolean;
}) {
  return (
    <div
      className="w-full rounded-2xl flex flex-col items-center justify-center border-2 border-dashed"
      style={{
        aspectRatio: tall ? "9/16" : aspect,
        maxHeight: tall ? "640px" : undefined,
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-card)",
      }}
    >
      <div className="text-center px-8">
        <div
          className="mx-auto mb-3 flex items-center justify-center rounded-xl"
          style={{ width: 40, height: 40, backgroundColor: ACCENT_DIM }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: BRAND_GREEN }}>
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="font-body font-medium text-fg text-sm">{label}</p>
        {sublabel && (
          <p className="font-body text-muted text-xs mt-1 leading-relaxed max-w-xs">{sublabel}</p>
        )}
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function GojekPlusPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="min-h-screen flex flex-col justify-end px-6 pb-20 pt-36 relative overflow-hidden"
          style={{ backgroundColor: HERO_BG }}
        >
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="max-w-5xl mx-auto w-full relative">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {["Subscription Design", "Brand Identity", "Product Design", "Scale"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-body"
                    style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <p className="font-body mb-4" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8125rem" }}>
                Gojek · GoFood · Product Design Lead · 2023–2024
              </p>

              <h1
                className="font-display font-bold leading-[1.0] tracking-tight"
                style={{ color: "white", fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
              >
                Building{" "}
                <span style={{ color: BRAND_GREEN }}>Gojek PLUS</span>
              </h1>

              <p
                className="font-body leading-relaxed mt-8"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
              >
                Southeast Asia&apos;s first super-app-wide subscription brand, designed from a pilot
                experiment to a nationwide launch that set record daily purchases.
              </p>

              {/* Hero stats */}
              <div
                className="grid grid-cols-3 gap-px mt-14 rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                {[
                  { value: "200k+", label: "Daily active subscribers" },
                  { value: "40%", label: "Conversion rate uplift" },
                  { value: "6", label: "Products unified under one brand" },
                ].map((s) => (
                  <div key={s.label} className="px-6 py-8" style={{ background: HERO_BG }}>
                    <div
                      className="font-display font-bold mb-1"
                      style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", color: BRAND_GREEN, lineHeight: 1 }}
                    >
                      {s.value}
                    </div>
                    <p className="font-body text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            CONTEXT BAR
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-10 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                { label: "My Role", value: "Product Design Lead" },
                { label: "Team", value: "GoFood · cross-functional" },
                { label: "Duration", value: "3 months (Feb–May 2024)" },
                { label: "Scope", value: "Strategy · Research · Brand · UX" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-xs text-muted uppercase tracking-widest mb-1.5">{item.label}</p>
                  <p className="font-body font-medium text-fg" style={{ fontSize: "0.9375rem" }}>{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            01 — CONTEXT
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="01" label="Context" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <H2>A super-app losing its power users</H2>

                <div className="mt-6 space-y-4">
                  <Paragraph>
                    Gojek operates six core products across Indonesia. GoFood had its own loyalty
                    subscription, GoFood+, which had become a proven engine for retention and
                    transaction growth.
                  </Paragraph>
                  <Paragraph>
                    By mid-2023, GoFood+ was delivering remarkable results: 3x growth in active
                    subscribers per month and 2x growth in GTV contribution from GoFood+ members
                    versus non-subscribers.
                  </Paragraph>
                  <Paragraph>
                    But Gojek&apos;s other products — GoRide, GoCar, GoTransit, GoMart, GoSend —
                    were losing their most valuable users to competitors. Without predictable
                    discounts, there was no stickiness.
                  </Paragraph>
                </div>

                <ThesisBlock>
                  &ldquo;GoFood+ subscribers generated 3x more transactions than non-subscribers.
                  The goal was to bring that engine to every product.&rdquo;
                </ThesisBlock>
              </div>

              {/* 6 products */}
              <div className="lg:col-span-5">
                <SectionLabel>6 products to unify</SectionLabel>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    { n: "01", name: "GoFood", type: "Food delivery" },
                    { n: "02", name: "GoRide", type: "Motorcycle taxi" },
                    { n: "03", name: "GoCar", type: "Car rides" },
                    { n: "04", name: "GoTransit", type: "Public transit" },
                    { n: "05", name: "GoMart", type: "Grocery delivery" },
                    { n: "06", name: "GoSend", type: "Package delivery" },
                  ].map((p) => (
                    <div
                      key={p.n}
                      className="bg-card rounded-xl p-4 flex items-start gap-4"
                    >
                      <span
                        className="font-display font-bold shrink-0"
                        style={{ fontSize: "1.125rem", color: BRAND_GREEN, lineHeight: 1, marginTop: 2 }}
                      >
                        {p.n}
                      </span>
                      <div>
                        <p className="font-body font-semibold text-fg text-sm">{p.name}</p>
                        <p className="font-body text-muted text-xs mt-0.5">{p.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            02 — THE BRIEF
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMark num="02" label="The Brief" />

              <H2>Scale subscriptions to 10x by end of 2024</H2>

              <div className="mt-6 mb-12 space-y-4 max-w-3xl">
                <Paragraph>
                  The business target was clear: 10x current subscription scale by year-end. That
                  required rebuilding the brand, reimagining the product architecture, and designing
                  20+ in-app touchpoints — all while keeping the pilot running and planning a
                  Southeast Asian rollout.
                </Paragraph>
              </div>

              {/* Power user definition */}
              <div
                className="rounded-2xl p-8 mb-12"
                style={{ backgroundColor: HERO_BG }}
              >
                <p
                  className="font-body text-xs uppercase tracking-widest mb-4"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Power user definition
                </p>
                <p
                  className="font-display font-semibold leading-snug"
                  style={{ color: "white", fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: "40ch" }}
                >
                  &ldquo;Users who completed 30+ orders in a month across any combination of Food,
                  Ride, Car, Transit, Send and Mart.&rdquo;
                </p>
                <p
                  className="font-body mt-5 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem" }}
                >
                  These were Gojek&apos;s most valuable users — and competitors were actively targeting
                  them with predictable discounts and bundled benefits.
                </p>
              </div>

              {/* 3 business targets */}
              <SectionLabel>Business targets</SectionLabel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {[
                  {
                    n: "01",
                    title: "Retain power users",
                    body: "Increase transaction frequency for non-power users to convert them into loyal, multi-service users",
                  },
                  {
                    n: "02",
                    title: "Deliver predictable value",
                    body: "Provide predictable discounts to customers seeking affordability and inspire lasting loyalty to the Gojek platform",
                  },
                  {
                    n: "03",
                    title: "Drive incremental GMV",
                    body: "Drive incremental transaction value and expand the transacting user base across all six products",
                  },
                ].map((t) => (
                  <div key={t.n} className="bg-bg rounded-2xl p-7">
                    <span
                      className="font-display font-bold block mb-3"
                      style={{ fontSize: "2rem", color: BRAND_GREEN, lineHeight: 1 }}
                    >
                      {t.n}
                    </span>
                    <p className="font-body font-semibold text-fg text-sm mb-2">{t.title}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            03 — STRATEGY
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="03" label="Strategy" />

            <H2>A 3-phase approach: test, learn, scale</H2>

            <div className="mt-6 mb-12 max-w-3xl">
              <Paragraph>
                With a fixed launch date and a 3-month runway, the project strategy was designed to
                de-risk each phase. Rather than building everything at once, Phase 1 validated the
                business model before committing to a full redesign.
              </Paragraph>
            </div>

            {/* Roadmap strip */}
            <div className="grid grid-cols-3 gap-3 mb-2">
              {[
                {
                  dates: "Feb – Mar 2024",
                  phase: "Phase 1",
                  title: "Testing the Waters",
                  items: [
                    "Pilot launch with existing infrastructure",
                    "Business construct design",
                    "14+ plan constructs tested",
                    "Entry point discovery improvements",
                  ],
                  active: false,
                },
                {
                  dates: "Mar – Apr 2024",
                  phase: "Phase 2",
                  title: "Redesign + Brand Building",
                  items: [
                    "Post-pilot user research (700+ participants)",
                    "Full UX research programme",
                    "Purchase journey redesign",
                    "New brand identity development",
                  ],
                  active: false,
                },
                {
                  dates: "Apr – May 2024",
                  phase: "Phase 3",
                  title: "Nationwide Launch",
                  items: [
                    "New Gojek PLUS brand system",
                    "Nationwide launch campaign",
                    "20+ in-app touchpoints",
                    "GoFood+ migration to Gojek PLUS",
                  ],
                  active: true,
                },
              ].map((p) => (
                <div
                  key={p.phase}
                  className="rounded-2xl px-7 py-7"
                  style={{
                    backgroundColor: p.active ? ACCENT_DIM : "var(--color-card)",
                    border: `1px solid ${p.active ? ACCENT_BORDER : "var(--color-border)"}`,
                  }}
                >
                  <p
                    className="font-body text-xs uppercase tracking-widest mb-1"
                    style={{ color: p.active ? BRAND_GREEN : "var(--color-muted)" }}
                  >
                    {p.dates}
                  </p>
                  <p className="font-body text-xs mb-2 text-muted">{p.phase}</p>
                  <p className="font-display font-bold text-fg mb-4" style={{ fontSize: "1rem" }}>
                    {p.title}
                  </p>
                  <ul className="space-y-2">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="w-1 h-1 rounded-full shrink-0 mt-2"
                          style={{ backgroundColor: p.active ? BRAND_GREEN : "var(--color-muted)" }}
                        />
                        <span className="font-body text-muted text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            04 — PHASE 1
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMark num="04" label="Phase 1 · Feb – Mar 2024" />

              <H2>Testing the Waters</H2>

              <div className="mt-6 mb-10 max-w-3xl">
                <Paragraph>
                  Before investing in a full redesign, a lightweight experiment was designed to
                  validate whether users would adopt a multi-product subscription at all.
                </Paragraph>
              </div>

              {/* Design decision callout */}
              <div
                className="rounded-2xl p-8 mb-12"
                style={{
                  backgroundColor: "var(--color-bg)",
                  borderTop: "1px solid var(--color-border)",
                  borderRight: "1px solid var(--color-border)",
                  borderBottom: "1px solid var(--color-border)",
                  borderLeft: `4px solid ${BRAND_GREEN}`,
                }}
              >
                <p className="font-body text-xs uppercase tracking-widest mb-3" style={{ color: BRAND_GREEN }}>
                  Design decision
                </p>
                <p className="font-body text-fg leading-relaxed" style={{ fontSize: "1rem" }}>
                  Rather than building new screens from scratch, existing GoFood+ touchpoints were
                  modified to communicate a multi-product subscription. This approach required minimal
                  engineering investment while providing real signal on user intent and adoption.
                </p>
              </div>

              {/* Discovery */}
              <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.25rem" }}>
                Improving discoverability across all 6 products
              </h3>
              <div className="mt-3 mb-8 max-w-3xl">
                <Paragraph>
                  New entry points were added across all 6 product journeys to surface the subscription
                  outside of GoFood — critical because users discovering the plan only through GoFood
                  would naturally assume it was a GoFood-only benefit.
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-14">
                {[
                  {
                    label: "New entry points",
                    sublabel: "Cross-product entry points across 6 verticals",
                    caption: "Entry points surfaced the subscription across all 6 product journeys, not just GoFood",
                  },
                  {
                    label: "Updated branding",
                    sublabel: "GoFood+ touchpoints updated with multi-product messaging",
                    caption: "GoFood+ branding updated to communicate multi-product value while retaining existing subscriber recognition",
                  },
                  {
                    label: "Reframed purchase page",
                    sublabel: "Same page, new content hierarchy",
                    caption: "Minimal structural changes — the existing page reframed with new content hierarchy to sell cross-vertical benefits",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col gap-3">
                    <ImageZone label={item.label} sublabel={item.sublabel} aspect="9/16" />
                    <p className="font-body text-muted text-sm leading-relaxed">{item.caption}</p>
                  </div>
                ))}
              </div>

              {/* 14+ constructs */}
              <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.25rem" }}>
                14+ subscription plan constructs tested at scale
              </h3>
              <div className="mt-3 mb-8 max-w-3xl">
                <Paragraph>
                  With discovery and branding updates live, 14+ different plan constructs were run
                  with a limited rollout, varying across three levers:
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
                {[
                  { letter: "A", title: "Benefit types + value", body: "What discounts and perks unlock, and how much" },
                  { letter: "B", title: "Plan pricing", body: "Trial pricing, renewal pricing, tiered structures" },
                  { letter: "C", title: "Minimum cart value", body: "Threshold to unlock benefits per order" },
                ].map((l) => (
                  <div key={l.letter} className="bg-bg rounded-2xl p-6">
                    <span
                      className="font-display font-bold block mb-3"
                      style={{ fontSize: "2rem", color: BRAND_GREEN, lineHeight: 1 }}
                    >
                      {l.letter}
                    </span>
                    <p className="font-body font-semibold text-fg text-sm mb-1">{l.title}</p>
                    <p className="font-body text-muted text-xs leading-relaxed">{l.body}</p>
                  </div>
                ))}
              </div>

              {/* Winning plan structure */}
              <SectionLabel>Winning plan structure</SectionLabel>
              <div className="rounded-2xl overflow-hidden border border-border mb-12">
                <div className="grid grid-cols-3 gap-px" style={{ background: "var(--color-border)" }}>
                  {[
                    { duration: "7 days", tier: "Entry" },
                    { duration: "14 days", tier: "Mid" },
                    { duration: "30 days", tier: "Best value" },
                  ].map((p) => (
                    <div key={p.duration} className="px-8 py-7 text-center bg-card">
                      <p className="font-display font-bold text-fg mb-1" style={{ fontSize: "1.375rem" }}>{p.duration}</p>
                      <span
                        className="font-body text-xs px-2.5 py-1 rounded-full"
                        style={{ background: ACCENT_DIM, color: BRAND_GREEN }}
                      >
                        {p.tier}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learnings */}
              <SectionLabel>What Phase 1 taught us</SectionLabel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  {
                    n: "01",
                    title: "Multi-service subscriptions outperform single-product",
                    body: "The pilot showed higher adoption and completed orders per user versus GoFood+ alone, validating the core hypothesis.",
                  },
                  {
                    n: "02",
                    title: "Lower price unlocks a new user segment",
                    body: "Lower-priced plans attracted non-power users, signalling a larger addressable market beyond the core subscriber base.",
                  },
                  {
                    n: "03",
                    title: "3-tier plan structure performs best",
                    body: "A 7/14/30-day split drove the best results, giving users a clear value ladder and reducing decision paralysis.",
                  },
                  {
                    n: "04",
                    title: "Business model validated before full investment",
                    body: "By reusing existing GoFood+ touchpoints, real signal was gathered to proceed with confidence — without significant engineering cost.",
                  },
                ].map((l) => (
                  <div key={l.n} className="bg-bg rounded-2xl p-7">
                    <span
                      className="font-display font-bold block mb-3"
                      style={{ fontSize: "1.5rem", color: BRAND_GREEN, lineHeight: 1 }}
                    >
                      {l.n}
                    </span>
                    <p className="font-body font-semibold text-fg mb-2" style={{ fontSize: "0.9375rem" }}>{l.title}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{l.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            05 — PHASE 2
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="05" label="Phase 2 · Mar – Apr 2024" />

            <H2>Redesigning the Experience</H2>

            <div className="mt-6 mb-12 max-w-3xl">
              <Paragraph>
                With the business model validated, a multi-track design effort ran in parallel: deep
                user research, purchase journey redesign, and a new loyalty brand — all at once.
              </Paragraph>
            </div>

            {/* Research stats */}
            <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.25rem" }}>
              Post-pilot research: understanding who we were serving
            </h3>
            <div className="mt-3 mb-8 max-w-3xl">
              <Paragraph>
                A structured research programme was commissioned — surveys distributed to over 350
                subscribers and 350 non-subscribers to understand who adopted the pilot plan, and why.
                The findings shaped every design decision in Phase 2.
              </Paragraph>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { pct: "60%", label: "Of new subscribers were power users" },
                { pct: "70%", label: "Of power user subscribers were GoFood users" },
                { pct: "67%", label: "Of new subscribers had GoFood+ before" },
                { pct: "80%", label: "Felt the new plan was an upgrade on GoFood+" },
              ].map((s) => (
                <div key={s.label} className="bg-card rounded-2xl p-7">
                  <div
                    className="font-display font-bold mb-2"
                    style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", color: BRAND_GREEN, lineHeight: 1 }}
                  >
                    {s.pct}
                  </div>
                  <p className="font-body text-muted text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Critical finding */}
            <div
              className="rounded-2xl p-8 mb-12"
              style={{ backgroundColor: HERO_BG }}
            >
              <p
                className="font-body text-xs uppercase tracking-widest mb-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Critical finding
              </p>
              <p
                className="font-display font-semibold leading-snug"
                style={{ color: "white", fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: "42ch" }}
              >
                Non-subscribers skewed heavily toward transport-only users who had never tried the
                subscription programme — revealing a clear growth opportunity in product cross-sell.
              </p>
            </div>

            {/* 7 questions + 5 content clusters */}
            <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.25rem" }}>
              Building the information architecture from user mental models
            </h3>
            <div className="mt-3 mb-8 max-w-3xl">
              <Paragraph>
                Working with the UX research team, the key questions users had when evaluating a
                subscription were mapped and structured. These became the backbone of the purchase
                page redesign. 20+ subscription products across different industries were also
                studied for UX patterns and design benchmarks.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-14">
              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="px-8 py-5 border-b border-border bg-card">
                  <p className="font-body text-xs uppercase tracking-widest text-muted">
                    User mental model — 7 key questions
                  </p>
                </div>
                <div className="divide-y divide-border bg-bg">
                  {[
                    "What is this about?",
                    "What are the benefits?",
                    "Which product is this for?",
                    "Is it worth the price?",
                    "How long is this for?",
                    "Can I cancel after purchase?",
                    "Are there any restrictions?",
                  ].map((q, i) => (
                    <div key={q} className="flex items-center gap-4 px-8 py-4">
                      <span
                        className="font-display font-bold shrink-0"
                        style={{ fontSize: "0.875rem", color: BRAND_GREEN, width: 24 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-body text-fg text-sm">{q}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border">
                <div className="px-8 py-5 border-b border-border bg-card">
                  <p className="font-body text-xs uppercase tracking-widest text-muted">
                    Purchase page architecture — 5 content clusters
                  </p>
                </div>
                <div className="divide-y divide-border bg-bg">
                  {[
                    "Brand + Intro",
                    "Benefits",
                    "Package Selection",
                    "T&Cs, FAQ + Social Proof",
                    "Trial Pricing + Renewal Info",
                  ].map((c, i) => (
                    <div key={c} className="flex items-center gap-4 px-8 py-5">
                      <span
                        className="font-display font-bold shrink-0"
                        style={{ fontSize: "0.875rem", color: BRAND_GREEN, width: 24 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-body text-fg text-sm font-medium">{c}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Usability testing */}
            <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.25rem" }}>
              Usability testing: two design explorations
            </h3>
            <div className="mt-3 mb-8 max-w-3xl">
              <Paragraph>
                Usability testing was run with both existing GoFood+ subscribers and non-subscribers,
                evaluating two design directions against the user mental model framework.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden border border-border">
                <div
                  className="px-6 py-4 border-b border-border bg-card flex items-center justify-between"
                >
                  <p className="font-display font-bold text-fg" style={{ fontSize: "1rem" }}>Design A</p>
                  <span
                    className="font-body text-xs px-2.5 py-1 rounded-full text-muted"
                    style={{ background: "var(--color-border)" }}
                  >
                    Rejected
                  </span>
                </div>
                <div className="p-6 bg-bg">
                  <ImageZone
                    label="Design A screens"
                    sublabel="Two-step flow: benefit view separate from plan selection"
                    aspect="4/3"
                  />
                  <div className="mt-5 flex flex-col gap-2.5">
                    {[
                      "Required back-and-forth to compare benefits and plans",
                      "Package options not visible on first scan",
                      "Difficult to compare differences between subscription tiers",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="text-muted text-xs mt-0.5 shrink-0">–</span>
                        <span className="font-body text-muted text-xs leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: ACCENT_BORDER }}
              >
                <div
                  className="px-6 py-4 border-b flex items-center justify-between"
                  style={{ backgroundColor: ACCENT_DIM, borderColor: "rgba(110,232,122,0.2)" }}
                >
                  <p className="font-display font-bold text-fg" style={{ fontSize: "1rem" }}>Design B</p>
                  <span
                    className="font-body text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{ background: BRAND_GREEN, color: "#0A1F12" }}
                  >
                    Preferred
                  </span>
                </div>
                <div className="p-6 bg-bg">
                  <ImageZone
                    label="Design B screens"
                    sublabel="One-step flow: benefits and plan selection on a single screen"
                    aspect="4/3"
                  />
                  <div className="mt-5 flex flex-col gap-2.5">
                    {[
                      "Users immediately noticed all plan options and compared price and duration at a glance",
                      "Duration labelling refined: \"14 days\" perceived as 2 weeks, \"30 days\" as 1 month",
                      "Benefit usage indicators needed stronger visual weight — addressed in final design",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span style={{ color: BRAND_GREEN }} className="text-xs mt-0.5 shrink-0">+</span>
                        <span className="font-body text-muted text-xs leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            06 — PHASE 3 (dark)
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="px-6 py-20 relative overflow-hidden"
          style={{ backgroundColor: HERO_BG }}
        >
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="max-w-5xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMarkDark num="06" label="Phase 3 · Apr – May 2024" />

              <H2Dark>Brand, Launch + Scale</H2Dark>

              <p
                className="font-body leading-relaxed mt-6 mb-12 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
              >
                Phase 3 combined the creation of an entirely new brand identity with a nationwide
                launch, requiring close coordination across product, marketing, brand, and on-ground
                operations teams.
              </p>

              {/* Brand identity */}
              <h3
                className="font-display font-semibold mb-4"
                style={{ color: "white", fontSize: "1.25rem" }}
              >
                Creating the Gojek PLUS brand identity
              </h3>
              <p
                className="font-body leading-relaxed mb-10 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
              >
                After extensive creative explorations and alignment with brand marketing and creative
                design teams, three principles guided the final naming and identity decision.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                {[
                  {
                    letter: "A",
                    title: "Retain Gojek green",
                    body: "The brand needed to feel connected to Gojek — users should immediately recognise it as a Gojek product, not a third-party service.",
                  },
                  {
                    letter: "B",
                    title: "Add distinct identity",
                    body: "Gojek PLUS needed its own visual language — enough to stand apart and signal exclusivity and premium value.",
                  },
                  {
                    letter: "C",
                    title: "Retain PLUS equity",
                    body: "After testing naming options, PLUS was retained — existing GoFood+ subscribers already associated PLUS with subscription value.",
                  },
                ].map((p) => (
                  <div
                    key={p.letter}
                    className="rounded-2xl p-7"
                    style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                  >
                    <span
                      className="font-display font-bold block mb-3"
                      style={{ fontSize: "2rem", color: BRAND_GREEN, lineHeight: 1 }}
                    >
                      {p.letter}
                    </span>
                    <p className="font-display font-bold mb-2" style={{ color: "white", fontSize: "1rem" }}>
                      {p.title}
                    </p>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>

              <ImageZone
                label="Brand exploration + final Gojek PLUS identity"
                sublabel="Naming explorations, logo system, colour palette, and visual language applied across in-app and marketing surfaces"
                aspect="16/7"
              />

              {/* Brand deliverable */}
              <div
                className="rounded-2xl p-8 mt-8 mb-12"
                style={{
                  border: `1px solid ${ACCENT_BORDER}`,
                  backgroundColor: ACCENT_DIM,
                }}
              >
                <p
                  className="font-body text-xs uppercase tracking-widest mb-3"
                  style={{ color: BRAND_GREEN }}
                >
                  Brand deliverable
                </p>
                <p className="font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}>
                  A full brand book was created and shared with marketing, on-ground, and creative
                  teams, ensuring consistent application across print, digital, and in-app touchpoints.
                  Brand system applied across: App UI, marketing materials, OOH, and digital campaigns.
                </p>
              </div>

              {/* 20+ touchpoints */}
              <h3
                className="font-display font-semibold mb-6"
                style={{ color: "white", fontSize: "1.25rem" }}
              >
                20+ touchpoints for the full subscription journey
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-12">
                {[
                  { area: "Discovery", detail: "Entry points across all 6 product home screens" },
                  { area: "Purchase", detail: "Redesigned subscription page with 3-tier plan selector" },
                  { area: "Benefit redemption", detail: "In-cart and post-order benefit activation flows" },
                  { area: "Resubscription", detail: "Renewal reminders and win-back flows" },
                  { area: "Cross-sell", detail: "Surfaces promoting unused benefits across products" },
                ].map((t) => (
                  <div
                    key={t.area}
                    className="flex items-start gap-4 px-6 py-4 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{ backgroundColor: BRAND_GREEN }}
                    />
                    <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                      <span className="font-medium" style={{ color: "white" }}>{t.area} — </span>
                      {t.detail}
                    </p>
                  </div>
                ))}
              </div>

              <ImageZone
                label="Final shipped UI"
                sublabel="Purchase page, active plan view, and post-subscription confirmation screen"
                aspect="16/7"
              />

              {/* Cross-functional */}
              <div className="mt-12">
                <h3
                  className="font-display font-semibold mb-4"
                  style={{ color: "white", fontSize: "1.25rem" }}
                >
                  Cross-functional leadership
                </h3>
                <p
                  className="font-body leading-relaxed mb-8 max-w-2xl"
                  style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
                >
                  Launching Gojek PLUS required orchestrating across eight distinct teams simultaneously.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Product Management",
                    "UX Research",
                    "Brand Design",
                    "Creative Design",
                    "Marketing",
                    "On-Ground Ops",
                    "Engineering",
                    "Data + Analytics",
                  ].map((team) => (
                    <span
                      key={team}
                      className="font-body text-sm px-4 py-2 rounded-full"
                      style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.7)" }}
                    >
                      {team}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            07 — OUTCOME
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMark num="07" label="Outcome · After week 1" />

              <H2>The numbers that followed</H2>

              <div className="mt-6 mb-12 max-w-3xl">
                <Paragraph>
                  Within the first week of nationwide launch, every key metric exceeded targets. The
                  redesigned purchase page, new brand, and expanded distribution combined to set
                  records that hadn&apos;t been touched in Gojek&apos;s subscription history.
                </Paragraph>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
                {[
                  { value: "200k+", label: "Daily Active Subscribers", sub: "Sustained post-launch, not just a spike", accent: true },
                  { value: "40%", label: "Conversion Rate Uplift", sub: "New purchase page vs. old purchase page", accent: false },
                  { value: "10.5k", label: "New Purchases on Launch Day", sub: "Previous record was 7.5k", accent: false },
                  { value: "30k", label: "Net new subscribers per day", sub: "Up from 5k/day pre-launch", accent: false },
                ].map((s) => (
                  <div key={s.label} className="bg-bg rounded-2xl p-7 flex flex-col gap-2">
                    <span
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                        lineHeight: 1,
                        color: s.accent ? BRAND_GREEN : "var(--color-fg)",
                      }}
                    >
                      {s.value}
                    </span>
                    <span className="font-body font-medium text-fg text-sm">{s.label}</span>
                    <span className="font-body text-muted text-xs leading-snug">{s.sub}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {[
                  { value: "6x", label: "Daily subscriber growth rate", sub: "vs. pre-launch baseline", accent: false },
                  { value: "8.3%", label: "New users among purchasers", sub: "Week 1 — never subscribed before", accent: false },
                  { value: "10%", label: "Reactivated users", sub: "Lapsed subscribers returned in week 1", accent: false },
                ].map((s) => (
                  <div key={s.label} className="bg-bg rounded-2xl p-7 flex flex-col gap-2">
                    <span
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                        lineHeight: 1,
                        color: "var(--color-fg)",
                      }}
                    >
                      {s.value}
                    </span>
                    <span className="font-body font-medium text-fg text-sm">{s.label}</span>
                    <span className="font-body text-muted text-xs leading-snug">{s.sub}</span>
                  </div>
                ))}
              </div>

              {/* Qualitative block */}
              <div className="rounded-2xl p-8 lg:p-10 mt-10" style={{ backgroundColor: HERO_BG }}>
                <SectionLabel>
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>What this signalled</span>
                </SectionLabel>
                <p
                  className="font-display font-bold leading-snug"
                  style={{
                    color: "white",
                    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                    maxWidth: "40ch",
                  }}
                >
                  The 200k+ daily active subscribers metric reflects sustained engagement, not
                  launch-day traffic — a strong signal that the product and brand redesign delivered
                  lasting value, not just novelty.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            08 — REFLECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="08" label="Reflection" />

            <H2>What design leadership really meant on this project</H2>

            <div className="mt-6 mb-12 max-w-3xl">
              <Paragraph>
                Gojek PLUS was the largest, most complex project on this portfolio. It required
                operating simultaneously as strategist, researcher, brand designer, and UX lead —
                while keeping eight cross-functional teams aligned toward a single, ambitious goal.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
              {[
                {
                  title: "Start with the riskiest assumption",
                  body: "The decision to run Phase 1 as a low-effort experiment rather than jumping into a full redesign was the most important leadership call. It provided real data — not assumptions — to design the right product.",
                },
                {
                  title: "Design the strategy, not just the screens",
                  body: "The role extended far beyond UI. The 3-phase project strategy was defined, the research programme was commissioned and directed, and the brand framework was created. The screens were the output, not the work.",
                },
                {
                  title: "Research creates shared conviction",
                  body: "Surveying 700+ users gave the team a shared language with product, marketing, and engineering. When stakeholders asked why the page looked a certain way — the answer was always grounded in user evidence.",
                },
                {
                  title: "Brand coherence is a product decision",
                  body: "Creating the Gojek PLUS brand was a strategic choice that enabled a consistent experience across 20+ touchpoints, 8 teams, and both digital and physical channels.",
                },
              ].map((r) => (
                <div
                  key={r.title}
                  className="bg-card rounded-2xl p-8"
                  style={{ borderLeft: `3px solid ${BRAND_GREEN}` }}
                >
                  <p className="font-display font-bold text-fg mb-3" style={{ fontSize: "1.0625rem" }}>
                    {r.title}
                  </p>
                  <p className="font-body text-muted text-sm leading-relaxed">{r.body}</p>
                </div>
              ))}
            </div>

            {/* Closing quote */}
            <div className="rounded-2xl p-10" style={{ backgroundColor: HERO_BG }}>
              <p
                className="font-display font-bold leading-snug mb-10"
                style={{ color: "white", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
              >
                &ldquo;From a GoFood-only loyalty programme to a Gojek-wide subscription brand — built,
                validated, and launched in 3 months.&rdquo;
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Role", value: "Product Design Lead, GoFood · Gojek" },
                  { label: "Timeline", value: "February – May 2024" },
                  { label: "Market", value: "Indonesia (nationwide)" },
                  { label: "Scope", value: "Strategy, Research, Brand, UX, UI" },
                ].map((d) => (
                  <div key={d.label}>
                    <p
                      className="font-body text-xs uppercase tracking-widest mb-1"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    >
                      {d.label}
                    </p>
                    <p
                      className="font-body text-sm font-medium"
                      style={{ color: "rgba(255,255,255,0.75)" }}
                    >
                      {d.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            NAV — Back / Next
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="px-6 py-16 border-t border-border"
          style={{ backgroundColor: HERO_BG }}
        >
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <Link
              href="/#work"
              className="font-body text-sm hover:opacity-70 transition-opacity"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              ← All Work
            </Link>
            <Link
              href="/work/gofood-order-tracking"
              className="font-body text-sm font-medium px-5 py-2.5 hover:opacity-80 transition-opacity"
              style={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
              }}
            >
              Next: GoFood Order Tracking →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
