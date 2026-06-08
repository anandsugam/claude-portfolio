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
              <div className="mt-4 mb-12">
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
                  How to measure customer anxiety?
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
                      icon: "⏱",
                      metric: "Time spent",
                      sub: "on the order tracking screen",
                      detail:
                        "A proxy for anxiety: longer dwell time means more checking and less confidence in the system.",
                    },
                    {
                      icon: "👆",
                      metric: "Screen open rate",
                      sub: "of the order tracking screen",
                      detail:
                        "How often users actively re-opened the screen mid-delivery, a signal of uncertainty.",
                    },
                    {
                      icon: "🎫",
                      metric: "Tickets raised",
                      sub: "for ongoing orders",
                      detail:
                        "Support contacts during the active delivery window, the clearest signal of UX failure.",
                    },
                  ].map((m) => (
                    <div key={m.metric} className="bg-bg rounded-2xl p-6 flex flex-col">
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
