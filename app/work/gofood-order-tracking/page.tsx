"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const HERO_BG = "#2E1F1A";
const ACCENT = "#FF7A3D";

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

export default function GoFoodOrderTrackingPage() {
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
                {["Consumer UX", "Mobile"].map((t) => (
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
                Gojek · GoFood · 2021–2022
              </p>
              <h1
                className="font-display font-bold leading-tight"
                style={{
                  color: "white",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  maxWidth: "18ch",
                }}
              >
                Redesigning the{" "}
                <span style={{ color: ACCENT }}>Post-Booking</span> Experience.
              </h1>
              <p
                className="font-body leading-relaxed mt-6 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}
              >
                The moment after you place a food order is filled with anxiety. We redesigned
                GoFood&apos;s order tracking to turn waiting into confidence.
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
                <SectionHeading>Waiting is a design problem.</SectionHeading>
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                  Post-booking was the most emotionally charged moment in the food delivery
                  journey — and the least designed. Users had placed their order, committed their
                  money, and now had nothing to do but wait and wonder. Is the order confirmed?
                  Has the driver picked it up? How long is actually left?
                </p>
                <p className="font-body text-muted leading-relaxed mt-4" style={{ fontSize: "1rem" }}>
                  Contact rate and cancellation rate in this window were measurably higher than
                  at any other stage. The tracking screen wasn&apos;t calming anxiety — it was
                  generating it.
                </p>
              </div>
              <div>
                <Label>My Role</Label>
                <p className="font-body text-fg font-medium mb-2" style={{ fontSize: "0.9375rem" }}>
                  Senior Product Designer
                </p>
                <p className="font-body text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                  End-to-end design ownership: research, concept, detailed design, and collaboration
                  with engineering through launch.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <Label>Scope</Label>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    GoFood order tracking, post-booking state management, driver ETA communication
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Insight ── */}
        <section className="px-6 py-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>Key Insight</Label>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {[
                  {
                    heading: "Silence creates anxiety.",
                    body: "When users couldn't tell what state their order was in, they assumed the worst. The old tracking screen only updated at state transitions — long gaps where nothing changed read as 'something went wrong.'",
                  },
                  {
                    heading: "Progress ≠ map position.",
                    body: "Users didn't want to know where their driver was on a map — they wanted to know when their food would arrive. ETA accuracy mattered more than location granularity.",
                  },
                  {
                    heading: "Micro-moments build trust.",
                    body: "Small signals of progress — 'your food is being prepared', 'driver is 2 minutes away' — disproportionately reduced contact rate. Frequent small updates beat infrequent big ones.",
                  },
                ].map((item) => (
                  <div key={item.heading} className="bg-bg rounded-2xl p-8">
                    <h3
                      className="font-display font-bold text-fg mb-3"
                      style={{ fontSize: "1rem" }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      className="font-body text-muted leading-relaxed"
                      style={{ fontSize: "0.875rem" }}
                    >
                      {item.body}
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
            <Label>Design Decisions</Label>
            <SectionHeading>What we changed and why it worked.</SectionHeading>
            <div className="space-y-6">
              {[
                {
                  title: "Progressive disclosure of order states",
                  detail: "Replaced a binary 'preparing / on the way' model with a richer 7-state system that gave users meaningful signals at each transition — without overwhelming them with information.",
                },
                {
                  title: "ETA anchoring over location tracking",
                  detail: "Made time-to-arrival the primary information hierarchy on the screen. The map was demoted to a secondary module. Users tested as significantly more satisfied when the countdown was prominent.",
                },
                {
                  title: "Activity-state micro-animations",
                  detail: "Added subtle motion to indicate the order was 'alive' even when the state hadn't changed. A pulsing preparation indicator reduced perceived wait time in user testing by measurable margin.",
                },
                {
                  title: "Contextual help reduction",
                  detail: "Embedded the most common contact-centre queries ('Where is my order?', 'Can I change my address?') as quick actions on the tracking screen, reducing help contacts during this window.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="border border-border rounded-2xl p-8 grid grid-cols-12 gap-6"
                >
                  <span className="col-span-12 lg:col-span-1 font-body text-xs text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-12 lg:col-span-11">
                    <h3
                      className="font-display font-bold text-fg mb-2"
                      style={{ fontSize: "1.0625rem" }}
                    >
                      {item.title}
                    </h3>
                    <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
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
              href="/work/gofood-text-search"
              className="font-body text-sm text-fg border border-border px-5 py-2.5 rounded-full hover:border-fg transition-colors"
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
