"use client";

import { useState } from "react";
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

function BeforeAfterToggle() {
  const [view, setView] = useState<"before" | "after">("after");
  return (
    <div className="relative w-full h-full">
      <img
        src="/images/carousel/gofood%20tracking/before.png"
        alt="Original tracking screen"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ opacity: view === "before" ? 1 : 0, transition: "opacity 0.5s ease" }}
      />
      <img
        src="/images/carousel/gofood%20tracking/after.png"
        alt="Redesigned tracking screen"
        className="absolute inset-0 w-full h-full object-contain"
        style={{ opacity: view === "after" ? 1 : 0, transition: "opacity 0.5s ease" }}
      />
      {/* Toggle pill */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 flex rounded-full p-1 z-10"
        style={{
          backgroundColor: "rgba(255,255,255,0.35)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          border: "1px solid rgba(255,255,255,0.6)",
          boxShadow: "0 2px 12px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        {(["before", "after"] as const).map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setView(opt)}
            className="px-4 py-1.5 rounded-full font-body text-xs font-medium transition-all cursor-pointer"
            style={{
              backgroundColor: view === opt ? "rgba(255,255,255,0.85)" : "transparent",
              color: view === opt ? "#111" : "rgba(0,0,0,0.45)",
              boxShadow: view === opt ? "0 1px 4px rgba(0,0,0,0.12)" : "none",
            }}
          >
            {opt.charAt(0).toUpperCase() + opt.slice(1)}
          </button>
        ))}
      </div>
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

type ExpRow = { label: string; text?: string; items?: string[]; accent?: boolean };

type ExpTab = {
  date: string;
  kicker: string;
  title: string;
  imageSrc?: string;
  top: ExpRow[];
  bottom: ExpRow[];
};

function RowCell({ row, divider }: { row: ExpRow; divider?: boolean }) {
  return (
    <div
      className="px-7 py-6"
      style={divider ? { borderRight: "1px solid rgba(255,255,255,0.06)" } : undefined}
    >
      <SectionLabel dark>{row.label}</SectionLabel>
      {row.items ? (
        <ul className="space-y-1">
          {row.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className="w-1 h-1 rounded-full shrink-0 mt-2"
                style={{ backgroundColor: row.accent ? ACCENT : "rgba(255,255,255,0.2)" }}
              />
              <p className={`font-body text-sm leading-relaxed${row.accent ? " font-medium" : ""}`} style={{ color: row.accent ? ACCENT : "rgba(255,255,255,0.55)" }}>
                {item}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p
          className={`font-body text-sm leading-relaxed${row.accent ? " font-medium" : ""}`}
          style={{ color: row.accent ? ACCENT : "rgba(255,255,255,0.55)" }}
        >
          {row.text}
        </p>
      )}
    </div>
  );
}

function ExperimentTabs({ tabs }: { tabs: ExpTab[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const tab = tabs[active];

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
      {/* Tab header — doubles as the experiment timeline, attached to the card */}
      <div className="grid grid-cols-3">
        {tabs.map((t, i) => {
          const on = i === active;
          const hot = !on && hovered === i;
          return (
            <button
              key={t.title}
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="text-left px-6 py-5 transition-colors cursor-pointer"
              style={{
                backgroundColor: on
                  ? "rgba(255,255,255,0.06)"
                  : hot
                    ? "rgba(255,255,255,0.03)"
                    : "transparent",
                borderTop: `2px solid ${on ? ACCENT : hot ? "rgba(255,122,61,0.4)" : "transparent"}`,
                borderRight: i < tabs.length - 1 ? "1px solid rgba(255,255,255,0.08)" : undefined,
                borderBottom: on ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <p className="font-body text-xs mb-2">
                <span className="uppercase tracking-widest" style={{ color: on ? ACCENT : "rgba(255,255,255,0.35)" }}>{t.kicker}</span>
                <span style={{ color: "rgba(255,255,255,0.2)" }}> · </span>
                <span style={{ color: "rgba(255,255,255,0.25)" }}>{t.date}</span>
              </p>
              <span
                className="font-body text-sm leading-snug block"
                style={{ color: on ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)" }}
              >
                {t.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active panel */}
      <div>
        {/* Top rows — merged block above the image */}
        <div style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {tab.top.map((row, i) => (
              <RowCell key={row.label} row={row} divider={i === 0} />
            ))}
          </div>
        </div>

        {/* Full-width image */}
        <div
          className="w-full relative flex items-center justify-center"
          style={{
            ...(tab.imageSrc ? {} : { aspectRatio: "16/7" }),
            backgroundColor: "#ffffff",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {tab.imageSrc ? (
            <img src={tab.imageSrc} alt="" className="w-full h-auto block" style={{ maxHeight: "420px", objectFit: "contain" }} />
          ) : (
            <div className="flex flex-col items-center justify-center gap-2">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: "rgba(255,255,255,0.15)" }}>
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              <span
                className="font-body uppercase tracking-widest"
                style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.2)", letterSpacing: "0.14em" }}
              >
                Image placeholder
              </span>
            </div>
          )}
        </div>

        {/* Bottom rows */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {tab.bottom.map((row, i) => (
            <RowCell key={row.label} row={row} divider={i === 0} />
          ))}
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
                    <div key={s.label} className="rounded-2xl p-6" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
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
              <div className="w-full rounded-2xl overflow-hidden" style={{ background: "#F8F7F4", border: "1px solid rgba(0,0,0,0.08)" }}>
                <img
                  src="/images/carousel/gofood%20tracking/modehemat.png"
                  alt="How Mode Hemat worked"
                  className="w-full h-auto block"
                />
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

              <H2>Pooling exposed structural limitations in the tracking experience</H2>
              <div className="mt-4 mb-12 max-w-2xl">
                <Paragraph>
                  Beyond pooling, the tracking screen had deeper structural issues that would have
                  broken any high-ETA, multi-state delivery model. We audited the current experience
                  and found four root causes.
                </Paragraph>
              </div>

              {/* Annotated screen + stacked problem cards */}
              <div className="mb-14">
                <SectionLabel>Current experience audit</SectionLabel>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
                  {/* Image container with numbered callouts mapping to the cards */}
                  <div className="relative rounded-2xl overflow-hidden bg-bg h-full min-h-[420px]">
                    <img
                      src="/images/carousel/gofood%20tracking/currentexp.png"
                      alt="Annotated existing GoFood tracking screen with four callouts"
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </div>

                  {/* Stacked problem cards */}
                <div className="flex flex-col gap-4">
                  {[
                    {
                      num: "01",
                      title: "Linear order lifecycle",
                      body: "The tracking experience assumed a fixed sequence of events. As logistics evolved to support pooling and new fulfillment models, order preparation and driver assignment could happen in parallel, making the existing state model inadequate.",
                    },
                    {
                      num: "02",
                      title: "Map dominates the experience",
                      body: "The map occupied most of the screen despite providing little value before a driver was assigned or en route. It also increased operational costs through frequent map API calls.",
                    },
                    {
                      num: "03",
                      title: "Excessive focus on driver movement",
                      body: "Customers closely associated driver activity with order progress. Delayed driver assignment, stationary drivers, route changes, or location inaccuracies often created uncertainty and led to unnecessary cancellations and support requests.",
                    },
                    {
                      num: "04",
                      title: "ETA lacks prominence",
                      body: "The promised delivery time had low visual priority and was easy to miss. Combined with historically inconsistent ETA accuracy, this reduced customer trust in the delivery promise.",
                    },
                  ].map((p) => (
                    <div key={p.num} className="bg-bg rounded-2xl p-6 flex gap-4 items-start">
                      <span
                        className="shrink-0 flex items-center justify-center rounded-full font-display font-bold text-white"
                        style={{ width: 30, height: 30, fontSize: "0.8125rem", backgroundColor: ACCENT }}
                      >
                        {p.num.replace(/^0/, "")}
                      </span>
                      <div>
                        <h3
                          className="font-display font-bold text-fg mb-1.5"
                          style={{ fontSize: "1.0625rem", letterSpacing: "-0.02em" }}
                        >
                          {p.title}
                        </h3>
                        <p className="font-body text-muted text-sm leading-relaxed">{p.body}</p>
                      </div>
                    </div>
                  ))}
                  </div>
                </div>
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

              {/* How we measured customer anxiety */}
              <div className="mt-14">
                <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.375rem" }}>
                  Success Metrics
                </h3>
                <div className="mb-8 max-w-3xl">
                  <Paragraph>
                    We identified three behavioral proxies, each representing a distinct way customers
                    respond to uncertainty while waiting for their orders.
                  </Paragraph>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {[
                    {
                      num: "01",
                      metric: "Time spent on tracking screen",
                      detail:
                        "Anxious customers keep the app open and closely monitor their order. Less time spent tracking indicates greater confidence and clarity.",
                    },
                    {
                      num: "02",
                      metric: "Tracking screen open rate",
                      detail:
                        "Repeatedly checking the tracking screen signals uncertainty. A lower open rate suggests higher trust in delivery updates.",
                    },
                    {
                      num: "03",
                      metric: "Late complaint tickets",
                      detail:
                        "Support tickets raised during an active delivery are a strong signal of customer anxiety. Fewer tickets indicate the experience is effectively addressing customer concerns.",
                    },
                  ].map((m) => (
                    <div key={m.metric} className="bg-bg rounded-2xl p-7 flex flex-col">
                      <span
                        className="font-display font-bold block mb-3"
                        style={{ fontSize: "2rem", color: ACCENT, lineHeight: 1 }}
                      >
                        {m.num}
                      </span>
                      <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
                        {m.metric}
                      </p>
                      <p className="font-body text-muted text-sm leading-relaxed">{m.detail}</p>
                    </div>
                  ))}
                </div>
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
                A deliberate, iterative approach
              </h2>
              <p
                className="font-body leading-relaxed mb-12 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
              >
                Two targeted experiments ran before the full redesign, each with a specific
                hypothesis, a measurable outcome, and a deliberate learning that shaped what came
                next.
              </p>

              {/* Experiment timeline — tabs */}
              <ExperimentTabs
                tabs={[
                  {
                    date: "June",
                    kicker: "Experiment 01",
                    title: "Are we overcommunicating pooling?",
                    imageSrc: "/images/carousel/gofood%20tracking/exp1.png",
                    top: [
                      {
                        label: "Hypothesis",
                        text: "Over-communicating pooling reinforced perceptions of delay. Surfacing pooling information contextually rather than persistently would reduce anxiety and keep attention on the ETA promise.",
                      },
                      {
                        label: "Experiment",
                        items: [
                          "Remove 2nd customer pooling pin, show only 1 pin on the map",
                          "Remove the banner nudge that explained the pooling model",
                          "Surface pooling context as part of the order status copy instead",
                        ],
                      },
                    ],
                    bottom: [
                      {
                        label: "Impact",
                        text: "No statistically significant impact, positive or negative, on any anxiety metric. No changes to driver↔customer chat initiations.",
                      },
                      {
                        label: "Learning",
                        text: "Over-communicating about pooling doesn't add anxiety. The problem isn't the labels, it's the underlying UI. The map and the state model are the root issue, not the pooling messaging.",
                      },
                    ],
                  },
                  {
                    date: "July",
                    kicker: "Experiment 02",
                    title: "Do we really need the map at all times?",
                    imageSrc: "/images/carousel/gofood%20tracking/exp2.png",
                    top: [
                      {
                        label: "Hypothesis",
                        text: "The map made driver movement the primary signal of progress, often creating anxiety. Illustrations would refocus attention on status and ETA while helping us assess the map's importance.",
                      },
                      {
                        label: "Experiment",
                        items: [
                          "Variant 1: Show an illustration instead of the map, with a toggle to switch",
                          "Variant 2: Replace the map entirely with an illustration, no toggle",
                          "Variant 3: Show an illustration until pickup, then reveal the map",
                        ],
                      },
                    ],
                    bottom: [
                      {
                        label: "Impact",
                        text: "All three variants stat-sig positive. Variant 3 performed best: avg screen time −4.68%, tickets raised −6.89%.",
                        accent: true,
                      },
                      {
                        label: "Learning",
                        text: "The map is only useful in the last mile, when the driver is actually heading to the customer. Before that, it adds anxiety without adding information. Variant 3 gave users the map when it became meaningful.",
                      },
                    ],
                  },
                  {
                    date: "October",
                    kicker: "Experiment 03",
                    title: "Improve order status & ETA prominence",
                    imageSrc: "/images/carousel/gofood%20tracking/exp3.png",
                    top: [
                      {
                        label: "Approach",
                        text: "The final experiment unified every insight into a single redesign focused on a single-status model to support pooling, ETA visibility, and an illustration-led tracking experience.",
                      },
                      {
                        label: "What shipped",
                        items: [
                          "ETA countdown promoted to the dominant element on the screen",
                          "State-specific illustrations replace the map until the last mile",
                          "Order state model rebuilt to represent non-sequential pooling",
                        ],
                      },
                    ],
                    bottom: [
                      {
                        label: "Impact",
                        text: "All three metrics stat-sig positive. Screen open rate −2.5%, screen time spent −3.4%, CCU Late tickets −5.8%.",
                        accent: true,
                      },
                      {
                        label: "Why it worked",
                        text: "Every change was already de-risked by an experiment, so the combined redesign shipped with confidence instead of guesswork.",
                      },
                    ],
                  },
                ]}
              />
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch mb-16">
              {/* Stacked principle cards */}
              <div className="flex flex-col gap-4">
                {[
                  {
                    num: "01",
                    title: "ETA focused",
                    body: "The arrival countdown becomes the dominant UI element: a large, prominent circle with time and on-time status. The map now supports the ETA, not the other way around. Users are anchored to time, not location.",
                  },
                  {
                    num: "02",
                    title: "Scalable states",
                    body: "New order state model that decouples food preparation, driver assignment, and delivery. Non-sequential pooling logistics are now fully representable, with each state having its own distinct visual treatment and copy.",
                  },
                  {
                    num: "03",
                    title: "Delightful journey",
                    body: "State-specific illustrations replace the map during food preparation and pickup phases. A chef cooking, a driver flying. Contextual, emotionally resonant, and animated to signal progress without GPS dependency.",
                  },
                  {
                    num: "04",
                    title: "Cleaner UI",
                    body: "The three most common support queries ('When will I get a driver?', cancellation, order edits) are surfaced as quick actions directly on the tracking screen. Reducing contact rate and friction simultaneously.",
                  },
                ].map((p) => (
                  <div key={p.num} className="rounded-2xl p-6 flex gap-4 items-start" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
                    <span
                      className="shrink-0 flex items-center justify-center rounded-full font-display font-bold text-white"
                      style={{ width: 30, height: 30, fontSize: "0.8125rem", backgroundColor: ACCENT }}
                    >
                      {p.num.replace(/^0/, "")}
                    </span>
                    <div>
                      <h3
                        className="font-display font-bold text-fg mb-1.5"
                        style={{ fontSize: "1.0625rem", letterSpacing: "-0.02em" }}
                      >
                        {p.title}
                      </h3>
                      <p className="font-body text-muted text-sm leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Before / After toggle image */}
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[420px]" style={{ backgroundColor: "#ffffff", border: "1px solid rgba(0,0,0,0.08)" }}>
                <BeforeAfterToggle />
              </div>
            </div>

            {/* Key screens */}
            <div className="mb-14">
              <SectionLabel>Key states</SectionLabel>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                {[
                  {
                    label: "Chef has started cooking",
                    sublabel: "Illustration phase. Map hidden, ETA leads, contextual copy sets the mood.",
                    src: "/images/GIFs/step1.gif",
                  },
                  {
                    label: "Food is coming your way",
                    sublabel: "Driver en route. Map revealed, ETA still leads, driver card with quick-reply pre-fills.",
                    src: "/images/GIFs/step2.gif",
                  },
                  {
                    label: "Frequently raised issues",
                    sublabel: "Self-serve support surfaced inline: cancel, edit order, driver ETA queries.",
                    src: "/images/GIFs/step3.gif",
                  },
                  {
                    label: "Order picked up",
                    sublabel: "Pooled order state. Single status model shows the right context without confusion.",
                    src: "/images/GIFs/step4.gif",
                  },
                ].map((screen) => (
                  <div
                    key={screen.label}
                    className="w-full rounded-2xl overflow-hidden flex flex-col"
                  >
                    {/* Media area */}
                    <div
                      className="w-full flex items-center justify-center bg-card"
                      style={{ aspectRatio: "9/16" }}
                    >
                      {screen.src ? (
                        <img
                          src={screen.src}
                          alt={screen.label}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center gap-2 px-6 text-center">
                          <div
                            className="flex items-center justify-center rounded-xl"
                            style={{ width: 40, height: 40, backgroundColor: ACCENT_DIM }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: ACCENT }}>
                              <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                              <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <p className="font-body text-muted text-xs">GIF / Lottie</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Driver card detail */}
            <div>
              <SectionLabel>Driver card redesign</SectionLabel>
              <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
                <img src="/images/drivercards.png" alt="Driver card redesign — before and after" className="w-full h-auto block" />
              </div>
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

              {/* After Experiment 2 */}
              <div className="mt-10 mb-10">
                <p className="font-body text-xs uppercase tracking-widest text-muted mb-4">After Experiment 2</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {[
                    {
                      value: "−4.68%",
                      label: "Time spent on tracking screen",
                      sub: "Variant 3 performed best across all three tested variants",
                    },
                    {
                      value: "−6.89%",
                      label: "Late complaint tickets",
                      sub: "Stat-sig reduction in mid-delivery support contacts",
                    },
                    {
                      value: "3/3",
                      label: "All variants outperformed the control",
                      sub: "All three illustration variants outperformed the map baseline",
                    },
                  ].map((s) => (
                    <div key={s.label} className="bg-bg rounded-2xl p-7 flex flex-col gap-2">
                      <span className="font-display font-bold" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1, color: ACCENT }}>
                        {s.value}
                      </span>
                      <span className="font-body font-medium text-fg text-sm">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* After Experiment 3 */}
              <div className="mb-12">
                <p className="font-body text-xs uppercase tracking-widest text-muted mb-4">After Experiment 3</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                  {[
                    {
                      value: "−3.4%",
                      label: "Time spent on tracking screen",
                      sub: "Stat-sig — less anxious checking, more confident waiting",
                    },
                    {
                      value: "−5.8%",
                      label: "Late complaint tickets",
                      sub: "Stat-sig reduction in support contacts during the active delivery window",
                    },
                    {
                      value: "−2.5%",
                      label: "Tracking screen open rate",
                      sub: "Stat-sig reduction in reactive mid-delivery screen opens",
                    },
                  ].map((s) => (
                    <div key={s.label} className="bg-bg rounded-2xl p-7 flex flex-col gap-2">
                      <span className="font-display font-bold" style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", lineHeight: 1, color: ACCENT }}>
                        {s.value}
                      </span>
                      <span className="font-body font-medium text-fg text-sm">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Qualitative block */}
              <div className="rounded-2xl p-8 lg:p-10" style={{ backgroundColor: HERO_BG }}>
                <SectionLabel>
                  <span style={{ color: "rgba(255,255,255,0.35)" }}>The outcome</span>
                </SectionLabel>
                <p
                  className="font-display font-bold leading-snug"
                  style={{
                    color: "white",
                    fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                  }}
                >
                  The redesign unlocked the rollout of the new pooling model, reducing late-delivery tickets and creating a more predictable, delightful tracking experience. The solution later became the blueprint for order tracking across other products like GoMart.
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
              className="font-body text-sm font-medium px-5 py-2.5 hover:opacity-80 transition-opacity"
              style={{ color: "white", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px" }}
            >
              ← All Work
            </Link>
            <Link
              href="/work/smallcase"
              className="font-body text-sm font-medium px-5 py-2.5 hover:opacity-80 transition-opacity"
              style={{
                color: "white",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "100px",
              }}
            >
              Next: Smallcase Leadership →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
