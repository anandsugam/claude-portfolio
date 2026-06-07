"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const HERO_BG = "#1A1008";
const ACCENT = "#FF7A3D";
const ACCENT_DIM = "rgba(255,122,61,0.12)";
const ACCENT_BORDER = "rgba(255,122,61,0.25)";

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
      style={{ backgroundColor: ACCENT_DIM, borderColor: ACCENT }}
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: ACCENT }}>
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

function ExperimentBlock({
  number,
  tag,
  title,
  hypothesis,
  experiment,
  impact,
  learning,
}: {
  number: string;
  tag: string;
  title: string;
  hypothesis: string;
  experiment: string[];
  impact: { text: string; positive: boolean };
  learning: string;
}) {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* Header */}
      <div
        className="px-7 py-5 flex items-start justify-between gap-4 flex-wrap"
        style={{
          backgroundColor: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div>
          <span className="font-body text-xs block mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>
            {number}
          </span>
          <h3
            className="font-display font-semibold"
            style={{ color: "white", fontSize: "1.0625rem" }}
          >
            {title}
          </h3>
        </div>
        <span
          className="font-body text-xs px-3 py-1 rounded-full shrink-0"
          style={{ backgroundColor: ACCENT_DIM, color: ACCENT }}
        >
          {tag}
        </span>
      </div>

      {/* Body — 2×2 grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="px-7 py-6"
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <SectionLabel dark>Hypothesis</SectionLabel>
          <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {hypothesis}
          </p>
        </div>

        <div className="px-7 py-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionLabel dark>Experiment</SectionLabel>
          <ul className="space-y-2">
            {experiment.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="w-1 h-1 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                />
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.55)" }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-7 py-6" style={{ borderRight: "1px solid rgba(255,255,255,0.06)" }}>
          <SectionLabel dark>Impact</SectionLabel>
          <p
            className="font-body text-sm leading-relaxed font-medium"
            style={{ color: impact.positive ? ACCENT : "rgba(255,255,255,0.4)" }}
          >
            {impact.text}
          </p>
        </div>

        <div className="px-7 py-6">
          <SectionLabel dark>Learning</SectionLabel>
          <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            {learning}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function GoFoodOrderTrackingPage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══════════════════════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="flex flex-col justify-end px-6 pb-16 pt-36 relative overflow-hidden"
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
                {["Consumer UX", "Mobile", "GoFood", "Order Pooling"].map((t) => (
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
                Gojek · GoFood · June–October 2023
              </p>

              <h1
                className="font-display font-bold leading-[1.0] tracking-tight"
                style={{ color: "white", fontSize: "clamp(1.75rem, 3.5vw, 3rem)" }}
              >
                Redesigning the order tracking experience to{" "}
                <span style={{ color: ACCENT }}>reduce customer anxiety</span>
              </h1>

              <p
                className="font-body leading-relaxed mt-8"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
              >
                In 2023, Gojek needed to improve profitability by reducing rewards and promotion costs while keeping food delivery affordable for Indonesian customers. To support this, order pooling was introduced but faced low customer adoption. As Design Lead for the consumer booking experience, I built and led a team to redesign the order tracking experience, reducing customer anxiety and enabling the scalability of this new logistics model.
              </p>
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
                { label: "Duration", value: "5 months (June–Oct 2023)" },
                { label: "Platform", value: "Mobile (Android + iOS)" },
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
            01 — THE SITUATION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="01" label="The Situation" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <H2>Business shipped a new delivery model without touching the UX.</H2>

                <div className="mt-6 space-y-4">
                  <Paragraph>
                    In 2023, Gojek was under pressure to become profitable. For GoFood, the lever was
                    clear: lower the delivery fee. Order pooling — &ldquo;Mode Hemat&rdquo; — was introduced as
                    the solution. Customers accept a slightly higher ETA; eligible orders get assigned
                    to a single driver; logistics savings get passed on as subsidies.
                  </Paragraph>
                  <Paragraph>
                    The business ran an experiment. Orders started pooling. And the tracking screen
                    that millions of users stared at while waiting for their food stayed exactly as it
                    was — a map-first UI designed for regular, single-order deliveries.
                  </Paragraph>
                  <Paragraph>
                    It didn&apos;t go well.
                  </Paragraph>
                </div>

                <ThesisBlock>
                  A good logistics model had a UX problem. And that UX problem had a measurable,
                  growing cost.
                </ThesisBlock>
              </div>

              {/* Failure metrics */}
              <div className="lg:col-span-5">
                <SectionLabel>What broke</SectionLabel>
                <div className="space-y-4">
                  {[
                    {
                      metric: "2×",
                      label: "Order delay & driver complaint tickets",
                      note: "For pooled orders vs. regular orders on identical routes",
                    },
                    {
                      metric: "~60%",
                      label: "ETA compliance for second deliveries",
                      note: "Down from baseline — eroding the one promise users were relying on",
                    },
                    {
                      metric: "$177k",
                      label: "Potential revenue loss per month",
                      note: "As pooling was scaled back 40% to contain the complaint surge",
                    },
                  ].map((s) => (
                    <div key={s.label} className="bg-card rounded-2xl p-6">
                      <div
                        className="font-display font-bold mb-1"
                        style={{ fontSize: "1.875rem", lineHeight: 1, color: ACCENT }}
                      >
                        {s.metric}
                      </div>
                      <p className="font-body font-medium text-fg text-sm">{s.label}</p>
                      <p className="font-body text-muted text-xs mt-1 leading-relaxed">{s.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mode Hemat context — how pooling worked */}
            <div className="mt-16">
              <SectionLabel>How Mode Hemat worked</SectionLabel>
              <div className="w-full rounded-2xl border border-border overflow-hidden" style={{ background: "#F8F7F4" }}>
                <div className="px-8 py-10">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-4 lg:gap-3">

                    {/* ── Phone helper ── */}
                    {/* SCREEN 1 — Checkout */}
                    <div className="flex flex-col items-center gap-3 shrink-0" style={{ width: "190px" }}>
                      <div className="w-full rounded-[20px] overflow-hidden shadow border border-gray-200 bg-white" style={{ fontSize: "10px" }}>
                        {/* status bar */}
                        <div className="flex justify-between px-3 pt-2 pb-0.5 bg-white text-[8px] text-gray-500">
                          <span className="font-medium">08:08</span><span>▲◆▲</span>
                        </div>
                        {/* nav */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
                          <div className="flex items-center gap-1.5"><span className="text-gray-400 text-xs">←</span><span className="font-semibold text-gray-800" style={{ fontSize: "9.5px" }}>Ayam Geprek, Kemang</span></div>
                          <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "#FFF0E5" }}><span style={{ fontSize: "8px" }}>🛒</span></div>
                        </div>
                        {/* delivery label */}
                        <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100">
                          <span className="font-semibold text-gray-700">Delivery</span>
                          <span className="border border-green-700 text-green-700 rounded px-1.5 py-0.5" style={{ fontSize: "7.5px" }}>Change</span>
                        </div>
                        {/* options */}
                        <div className="px-3 py-2 space-y-1.5">
                          {/* Regular */}
                          <div className="flex items-start gap-2">
                            <div className="w-3 h-3 mt-0.5 rounded-full border border-gray-300 shrink-0" />
                            <div className="flex-1 flex justify-between"><span className="text-gray-700">Regular</span><span className="text-gray-400">Rp11,000<br/><span className="text-[8px]">30 min</span></span></div>
                          </div>
                          {/* Mode Hemat selected */}
                          <div className="flex items-start gap-2 px-2 py-1.5 -mx-1 rounded-lg" style={{ background: "#F0FDF4" }}>
                            <div className="w-3 h-3 mt-0.5 rounded-full border-2 border-green-600 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 rounded-full bg-green-600"/></div>
                            <div className="flex-1">
                              <div className="flex justify-between"><span className="font-semibold" style={{ color: "#15601A" }}>Mode Hemat</span><span className="font-medium text-green-600">Free</span></div>
                              <div><span style={{ color: "#C05300", fontSize: "9px" }}>46 min</span><span className="text-gray-400 ml-1" style={{ fontSize: "8px" }}>· Stays fresh</span></div>
                            </div>
                          </div>
                        </div>
                        {/* address */}
                        <div className="px-3 py-1.5 border-t border-gray-100">
                          <span className="text-gray-400 block" style={{ fontSize: "7.5px" }}>Delivery to</span>
                          <span className="font-medium text-gray-700">Rumah</span>
                        </div>
                        {/* CTA */}
                        <div className="px-3 pb-3 pt-1">
                          <div className="w-full py-1.5 rounded-full text-center text-white font-bold" style={{ background: "#00880A", fontSize: "9px" }}>Order with Mode Hemat</div>
                          <p className="text-center text-green-600 mt-1" style={{ fontSize: "7px" }}>✓ You'll save Rp20,000 on this order</p>
                        </div>
                      </div>
                      <div className="text-center"><p className="font-body text-xs font-semibold text-fg">Checkout</p></div>
                    </div>

                    {/* ── Arrow ── */}
                    <div className="flex lg:flex-col items-center gap-1.5 self-center shrink-0 lg:mt-[-60px]" style={{ minWidth: "80px" }}>
                      <div className="flex items-center lg:flex-col gap-1">
                        <div className="w-12 h-px lg:w-px lg:h-8 bg-gray-300" />
                        <svg className="rotate-0 lg:rotate-90" width="8" height="10" viewBox="0 0 8 10"><path d="M1 1.5l5 3.5-5 3.5" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </div>
                      <div className="text-center" style={{ maxWidth: "80px" }}>
                        <p className="text-gray-500 leading-tight" style={{ fontSize: "9px" }}>Customer accepts higher ETA</p>
                        <p className="text-gray-400 italic" style={{ fontSize: "8px" }}>Order eligible for pooling</p>
                      </div>
                    </div>

                    {/* SCREEN 2 — First delivery (map-first, no pooling indicator) */}
                    <div className="flex flex-col items-center gap-3 shrink-0" style={{ width: "190px" }}>
                      <div className="w-full rounded-[20px] overflow-hidden shadow border border-gray-200 bg-white" style={{ fontSize: "10px" }}>
                        <div className="flex justify-between px-3 pt-2 pb-0.5 text-[8px] text-gray-500"><span className="font-medium">08:08</span><span>▲◆▲</span></div>
                        {/* Green ETA bar */}
                        <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#00880A" }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/><path d="M12 7v5l3 2.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                          <span className="text-white font-medium" style={{ fontSize: "8.5px" }}>On time · Delivery in 15 mins</span>
                          <svg className="ml-auto" width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/><path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                        </div>
                        {/* Map area */}
                        <div className="relative overflow-hidden" style={{ height: "88px", background: "#E8EDCE" }}>
                          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <rect x="55" y="0" width="12" height="88" fill="#D0D5B8" rx="2"/>
                            <rect x="0" y="38" width="190" height="12" fill="#D0D5B8" rx="2"/>
                          </svg>
                          {/* Driver pin */}
                          <div className="absolute flex items-center justify-center w-6 h-6 rounded-full border-2 border-white shadow-md" style={{ top: "28px", left: "44px", background: "#00880A" }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                          </div>
                          {/* Destination */}
                          <div className="absolute w-3 h-3 rounded-full border-2 border-white shadow" style={{ top: "12px", right: "36px", background: "#EF4444" }}/>
                        </div>
                        {/* Info */}
                        <div className="px-3 py-2">
                          <p className="font-bold text-gray-800">Good food is coming</p>
                          <p className="text-gray-400" style={{ fontSize: "9px" }}>Driver is on the way to you</p>
                          <div className="flex items-center justify-between mt-2 pt-1.5 border-t border-gray-100">
                            <div><p className="font-medium text-gray-700">Galih Pambudi</p><p className="text-gray-400" style={{ fontSize: "8.5px" }}>B 1060 JEK</p></div>
                            <div className="flex gap-1.5">
                              <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#00880A" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 2.26h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.16 6.16l1.02-.87a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                              <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#00880A" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-body text-xs font-semibold text-fg">First delivery</p>
                        <p className="font-body text-muted italic" style={{ fontSize: "9.5px" }}>Pooled order</p>
                      </div>
                    </div>

                    {/* SCREEN 3 — Second delivery (pooling banner visible) */}
                    <div className="flex flex-col items-center gap-3 shrink-0" style={{ width: "190px" }}>
                      <div className="w-full rounded-[20px] overflow-hidden shadow border border-gray-200 bg-white" style={{ fontSize: "10px" }}>
                        <div className="flex justify-between px-3 pt-2 pb-0.5 text-[8px] text-gray-500"><span className="font-medium">08:08</span><span>▲◆▲</span></div>
                        {/* Green ETA bar */}
                        <div className="flex items-center gap-2 px-3 py-2" style={{ background: "#00880A" }}>
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.6)" strokeWidth="2"/><path d="M12 7v5l3 2.5" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                          <span className="text-white font-medium" style={{ fontSize: "8.5px" }}>On time · Delivery in 15 mins</span>
                          <svg className="ml-auto" width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/><path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                        </div>
                        {/* Map area — with "First delivery" toast */}
                        <div className="relative overflow-hidden" style={{ height: "88px", background: "#E8EDCE" }}>
                          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <rect x="55" y="0" width="12" height="88" fill="#D0D5B8" rx="2"/>
                            <rect x="0" y="38" width="190" height="12" fill="#D0D5B8" rx="2"/>
                          </svg>
                          {/* Driver pin */}
                          <div className="absolute flex items-center justify-center w-6 h-6 rounded-full border-2 border-white shadow-md" style={{ top: "28px", left: "44px", background: "#00880A" }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                          </div>
                          {/* Second customer pin */}
                          <div className="absolute flex items-center justify-center w-5 h-5 rounded-full border-2 border-white shadow" style={{ top: "14px", left: "110px", background: "#FF7A3D" }}>
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 2 4 5 4 9c0 5.25 8 13 8 13s8-7.75 8-13c0-4-4-7-8-7z"/></svg>
                          </div>
                          {/* "First delivery" chip */}
                          <div className="absolute flex items-center gap-1 px-2 py-1 rounded-lg shadow" style={{ top: "6px", right: "6px", background: "white", fontSize: "7.5px" }}>
                            <span className="font-semibold text-gray-700">First delivery</span>
                            <span className="text-gray-400">×</span>
                          </div>
                        </div>
                        {/* Pooling banner */}
                        <div className="mx-2 mt-1.5 px-2.5 py-2 rounded-xl flex items-start gap-2" style={{ background: "#00880A", fontSize: "8px" }}>
                          <svg className="shrink-0 mt-0.5" width="10" height="10" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/><path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                          <p className="text-white leading-snug">Driver is delivering to another location first. Don&apos;t worry, it&apos;s not far from you. <span className="underline">They ordered from the same resto as you.</span></p>
                        </div>
                        {/* Info */}
                        <div className="px-3 py-2 mt-0.5">
                          <p className="font-bold text-gray-800">Good food is coming</p>
                          <p className="text-gray-400" style={{ fontSize: "9px" }}>Driver is on the way to you</p>
                          <div className="flex items-center justify-between mt-1.5 pt-1.5 border-t border-gray-100">
                            <div><p className="font-medium text-gray-700">Galih Pambudi</p><p className="text-gray-400" style={{ fontSize: "8.5px" }}>B 1060 JEK</p></div>
                            <div className="flex gap-1.5">
                              <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#00880A" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 2.26h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.16 6.16l1.02-.87a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg></div>
                              <div className="w-5 h-5 rounded-full border border-green-600 flex items-center justify-center"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#00880A" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-body text-xs font-semibold text-fg">Second delivery</p>
                        <p className="font-body text-muted italic" style={{ fontSize: "9.5px" }}>Pooled order</p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            02 — THE DIAGNOSIS
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMark num="02" label="The Diagnosis" />

              <H2>Three structural problems in the existing tracking screen.</H2>
              <div className="mt-4 mb-12">
                <Paragraph>
                  The tracking screen wasn&apos;t designed for pooling — but it had deeper structural
                  issues that would have broken any high-ETA, multi-state delivery model. We audited
                  the current experience and found three root causes.
                </Paragraph>
              </div>

              {/* 3 problems */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-14">
                {[
                  {
                    num: "01",
                    title: "Map = center of attention",
                    body: "The design forced users to focus on driver movements on the map — not order states, not ETA. If the driver paused, changed route, or GPS lagged, users read it as 'something went wrong' and raised a ticket. Pooling made this worse: when drivers were unassigned or detouring to a first delivery, anxiety spiked.",
                  },
                  {
                    num: "02",
                    title: "ETA = buried in hierarchy",
                    body: "ETA information sat at the lowest level of visual hierarchy on the screen. With historically poor ETA compliance (now made worse by pooling's longer ETAs), users had learned not to trust the number — and there was no stronger signal to anchor to.",
                  },
                  {
                    num: "03",
                    title: "Linear order lifecycle",
                    body: "The state model assumed a fixed sequence: restaurant confirms → driver assigned → food picked up → delivered. Pooling broke this. Driver assignment and food prep could happen out of order, but the UI had no way to represent it — leaving users with unexplained states that looked like failures.",
                  },
                ].map((p) => (
                  <div key={p.num} className="bg-bg rounded-2xl p-7">
                    <span className="font-body text-xs text-muted block mb-3">{p.num}</span>
                    <h3
                      className="font-display font-semibold text-fg mb-3"
                      style={{ fontSize: "1rem" }}
                    >
                      {p.title}
                    </h3>
                    <p className="font-body text-muted text-sm leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>

              {/* Annotated screen */}
              <div className="mb-14">
                <SectionLabel>Current experience audit</SectionLabel>
                <ImageZone
                  label="Annotated existing tracking screen"
                  sublabel="Three callouts on the live UI: map dominance, ETA visual hierarchy, and the linear state model — showing exactly where the experience broke under the pooling model"
                  aspect="16/9"
                />
              </div>

              {/* HMW */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {[
                  "How might we balance system status transparency with customer anxiety?",
                  "How might we design to change the mental model of customers to adapt the new logistics model?",
                ].map((hmw) => (
                  <div
                    key={hmw}
                    className="rounded-2xl p-8"
                    style={{ backgroundColor: HERO_BG }}
                  >
                    <p
                      className="font-body text-xs uppercase tracking-widest block mb-4"
                      style={{ color: "rgba(255,255,255,0.3)" }}
                    >
                      HMW
                    </p>
                    <p
                      className="font-display font-semibold leading-snug"
                      style={{ color: "white", fontSize: "1.0625rem" }}
                    >
                      {hmw}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            SUCCESS METRICS BAR
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-14 border-b border-border">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-body text-xs text-muted uppercase tracking-widest mb-10">
                How we measured customer anxiety
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: "⏱",
                    metric: "Time spent",
                    sub: "on the order tracking screen",
                    detail:
                      "Proxy for anxiety — longer dwell time means more checking, less confidence in the system.",
                  },
                  {
                    icon: "👆",
                    metric: "Screen open rate",
                    sub: "of the order tracking screen",
                    detail:
                      "How often users actively re-opened the screen mid-delivery — a signal of uncertainty.",
                  },
                  {
                    icon: "🎫",
                    metric: "Tickets raised",
                    sub: "for ongoing orders",
                    detail:
                      "Support contacts during the active delivery window — the clearest signal of UX failure.",
                  },
                ].map((m) => (
                  <div
                    key={m.metric}
                    className="rounded-2xl border border-border p-6 flex flex-col"
                    style={{ backgroundColor: "var(--color-bg)" }}
                  >
                    <span
                      className="flex items-center justify-center rounded-xl text-xl mb-4"
                      style={{ width: 44, height: 44, backgroundColor: "var(--color-card)" }}
                    >
                      {m.icon}
                    </span>
                    <p className="font-display font-semibold text-fg" style={{ fontSize: "1rem" }}>
                      {m.metric}
                    </p>
                    <p className="font-body text-muted text-sm mb-3">{m.sub}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{m.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            03 — THE EXPERIMENTS
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
              <ChapterMarkDark num="03" label="The Experiments" />

              <h2
                className="font-display font-bold leading-tight mb-4"
                style={{ color: "white", fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)" }}
              >
                We didn&apos;t start with the final design.
              </h2>
              <p
                className="font-body leading-relaxed mb-12 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
              >
                Two targeted experiments ran before the full redesign — each with a specific
                hypothesis, a measurable outcome, and a deliberate learning that shaped what came next.
              </p>

              {/* Roadmap strip */}
              <div className="grid grid-cols-3 gap-3 mb-14">
                {[
                  {
                    date: "June",
                    num: "Exp 01",
                    title: "Turn off pooling pins & remove pooling nudges",
                    active: false,
                  },
                  {
                    date: "July",
                    num: "Exp 02",
                    title: "Remove map from order tracking for all delivery orders",
                    active: false,
                  },
                  {
                    date: "October",
                    num: "Final Design",
                    title: "Improve order status & ETA prominence; Revamp info cards",
                    active: true,
                  },
                ].map((step) => (
                  <div
                    key={step.date}
                    className="rounded-xl px-5 py-5"
                    style={{
                      backgroundColor: step.active ? ACCENT_DIM : "rgba(255,255,255,0.04)",
                      border: `1px solid ${step.active ? ACCENT_BORDER : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <p
                      className="font-body text-xs uppercase tracking-widest mb-1"
                      style={{ color: step.active ? ACCENT : "rgba(255,255,255,0.3)" }}
                    >
                      {step.date}
                    </p>
                    <p className="font-body text-xs mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
                      {step.num}
                    </p>
                    <p
                      className="font-body text-sm leading-snug"
                      style={{
                        color: step.active
                          ? "rgba(255,255,255,0.9)"
                          : "rgba(255,255,255,0.5)",
                      }}
                    >
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* Experiment blocks */}
              <div className="space-y-5">
                <ExperimentBlock
                  number="Experiment 01"
                  tag="June · No stat-sig result"
                  title="Are we overcommunicating pooling?"
                  hypothesis="Pooled orders were perceived as more likely to be delayed. Reducing the visual prominence of pooling information — the dual customer pin, the banner nudge — would reduce anxiety and bring focus back to the ETA promise."
                  experiment={[
                    "Remove 2nd customer pooling pin, show only 1 pin on the map",
                    "Remove the banner nudge that explained the pooling model",
                    "Make pooling look less visually distinct from a regular order",
                    "Surface pooling context as part of the order status copy instead",
                  ]}
                  impact={{
                    text: "No statistically significant impact — positive or negative — on any anxiety metric. No changes to driver↔customer chat initiations.",
                    positive: false,
                  }}
                  learning="Over-communicating about pooling doesn't add anxiety. The problem isn't the labels — it's the underlying UI. The map and the state model are the root issue, not the pooling messaging."
                />

                <ExperimentBlock
                  number="Experiment 02"
                  tag="July · All 3 variants stat-sig positive"
                  title="Do we really need the map at all times?"
                  hypothesis="The map itself — not the pooling information — was generating anxiety by forcing users to focus on driver GPS position. Replacing it with state-specific illustrations would reduce anxious checking and tickets."
                  experiment={[
                    "Variant 1: Replace map with illustration by default; user can switch back to map",
                    "Variant 2: Remove map entirely with no option to switch back",
                    "Variant 3: Show illustration only; map revealed once driver picks up the order",
                  ]}
                  impact={{
                    text: "All three variants stat-sig positive. Variant 3 performed best: avg screen time −4.68%, tickets raised −6.89%.",
                    positive: true,
                  }}
                  learning="The map is only useful in the last mile — when the driver is actually heading to the customer. Before that, it adds anxiety without adding information. Variant 3 gave users the map when it became meaningful."
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            04 — THE SOLUTION
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="04" label="The Solution" />
            <H2>ETA-first. Illustration-driven. State-rich.</H2>
            <p
              className="font-body text-muted leading-relaxed mt-4 mb-14 max-w-3xl"
              style={{ fontSize: "1rem" }}
            >
              Four design principles, derived from what the experiments proved. Shipped in October 2023.
            </p>

            {/* 4 principles */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-16">
              {[
                {
                  num: "01",
                  title: "ETA focused",
                  body: "The arrival countdown becomes the dominant UI element — a large, prominent circle with time and on-time status. The map now supports the ETA, not the other way around. Users are anchored to time, not location.",
                },
                {
                  num: "02",
                  title: "Scalable states",
                  body: "New order state model that decouples food preparation, driver assignment, and delivery. Non-sequential pooling logistics are now fully representable — each state has its own distinct visual treatment and copy.",
                },
                {
                  num: "03",
                  title: "Delightful journey",
                  body: "State-specific illustrations replace the map during food preparation and pickup phases. A chef cooking, a driver flying. Contextual, emotionally resonant, animated — signalling progress without GPS dependency.",
                },
                {
                  num: "04",
                  title: "Cleaner UI",
                  body: "The three most common support queries — 'When will I get a driver?', cancellation, order edits — are surfaced as quick actions directly on the tracking screen. Reducing contact rate and friction simultaneously.",
                },
              ].map((p) => (
                <div key={p.num} className="bg-card rounded-2xl p-8">
                  <span className="font-body text-xs text-muted block mb-2">{p.num}</span>
                  <h3
                    className="font-display font-semibold text-fg mb-3"
                    style={{ fontSize: "1rem" }}
                  >
                    {p.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Before / After */}
            <div className="mb-14">
              <SectionLabel>Before → After</SectionLabel>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <p className="font-body text-xs text-muted mb-3 uppercase tracking-wide">Before</p>
                  <ImageZone
                    label="Original tracking screen"
                    sublabel="Map-dominant, ETA buried at the top, binary order states, pooling banner visible, linear lifecycle"
                    aspect="9/16"
                    tall
                  />
                </div>
                <div>
                  <p
                    className="font-body text-xs mb-3 uppercase tracking-wide"
                    style={{ color: ACCENT }}
                  >
                    After
                  </p>
                  <ImageZone
                    label="Redesigned tracking screen"
                    sublabel="ETA countdown leads, state-specific illustration replaces map, simplified driver card, quick-action support surfaced inline"
                    aspect="9/16"
                    tall
                  />
                </div>
              </div>
            </div>

            {/* Key screens */}
            <div className="mb-14">
              <SectionLabel>Key states</SectionLabel>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {[
                  {
                    label: "Chef has started cooking",
                    sublabel:
                      "Illustration phase — map hidden, ETA leads (Arrival in 30 mins · On Time), contextual copy ('Mm— if only you could smell the aroma')",
                  },
                  {
                    label: "Food is coming your way",
                    sublabel:
                      "Driver en route — map now revealed, ETA still leads (Arrival in 8 mins · On Time), driver card with quick-reply pre-fills",
                  },
                  {
                    label: "Frequently raised issues panel",
                    sublabel:
                      "Self-serve support surfaced inline: 'When will I get a driver / I have to cancel / I want to edit my order'",
                  },
                ].map((screen) => (
                  <ImageZone
                    key={screen.label}
                    label={screen.label}
                    sublabel={screen.sublabel}
                    aspect="9/16"
                    tall
                  />
                ))}
              </div>
            </div>

            {/* Driver card detail */}
            <div>
              <SectionLabel>Driver card redesign</SectionLabel>
              <ImageZone
                label="Before → After: Driver info card"
                sublabel="Old: photo, name, plate, health badge, tip CTA, delivery details — all stacked. New: compact card with rating, trips, pre-filled chat quick replies"
                aspect="21/9"
              />
            </div>
          </motion.div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            05 — OUTCOME
        ══════════════════════════════════════════════════════════════════ */}
        <section className="px-6 py-20 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMark num="05" label="Outcome" />
              <H2>The numbers that followed.</H2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10 mb-12">
                {[
                  {
                    value: "−5.8%",
                    label: "CCU late tickets",
                    sub: "Stat-sig reduction in support contacts during the active delivery window",
                    accent: true,
                  },
                  {
                    value: "−3.4%",
                    label: "Screen time spent",
                    sub: "Stat-sig — less anxious checking, more confident waiting",
                    accent: false,
                  },
                  {
                    value: "−2.5%",
                    label: "Screen open rate",
                    sub: "Stat-sig reduction in reactive mid-delivery screen opens",
                    accent: false,
                  },
                ].map((s) => (
                  <div key={s.label} className="bg-bg rounded-2xl p-7 flex flex-col gap-2">
                    <span
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                        lineHeight: 1,
                        color: s.accent ? ACCENT : "var(--color-fg)",
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
              <div className="rounded-2xl p-8 lg:p-10" style={{ backgroundColor: HERO_BG }}>
                <SectionLabel>
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>What this unblocked</span>
                </SectionLabel>
                <p
                  className="font-display font-bold leading-snug"
                  style={{
                    color: "white",
                    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                    maxWidth: "40ch",
                  }}
                >
                  The redesign directly unblocked the full rollout of Mode Hemat. Pooling had been
                  scaled back 40% while the UX was broken — the new experience gave the business
                  confidence to scale it.
                </p>
                <p
                  className="font-body leading-relaxed mt-5 max-w-2xl"
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem" }}
                >
                  [Add: whether pooling fully scaled back up, any broader adoption of the illustration
                  model across other GoFood order types, or team/leadership recognition.]
                </p>
              </div>
            </motion.div>
          </div>
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
              href="/work/gofood-text-search"
              className="font-body text-sm font-medium px-5 py-2.5 hover:opacity-80 transition-opacity"
              style={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
              }}
            >
              Next: GoFood Text Search →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
