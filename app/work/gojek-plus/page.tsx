"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const BRAND_GREEN = "#6EE87A";
const HERO_BG = "#0A1F12";

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`px-6 py-20 max-w-5xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-body text-xs uppercase tracking-widest text-muted block mb-4">
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

function StatCard({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="bg-card rounded-2xl p-8 flex flex-col gap-2">
      <span
        className="font-display font-bold text-fg"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}
      >
        {value}
      </span>
      <span className="font-body font-medium text-fg text-sm">{label}</span>
      {sub && (
        <span className="font-body text-muted text-xs leading-snug">{sub}</span>
      )}
    </div>
  );
}

function PhaseTag({ phase, label }: { phase: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-8">
      <span
        className="font-body text-xs font-medium px-3 py-1 rounded-full"
        style={{ background: "rgba(110,232,122,0.12)", color: BRAND_GREEN }}
      >
        {phase}
      </span>
      <span className="font-body text-sm text-muted">{label}</span>
    </div>
  );
}

export default function GojekPlusPage() {
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
                {["Brand", "Product Design", "Scale"].map((t) => (
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
                Gojek · 2021–2024
              </p>
              <h1
                className="font-display font-bold leading-tight"
                style={{
                  color: "white",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  maxWidth: "16ch",
                }}
              >
                One Subscription.{" "}
                <span style={{ color: BRAND_GREEN }}>Six Products.</span>{" "}
                One Brand.
              </h1>
              <p
                className="font-body leading-relaxed mt-6 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}
              >
                How we rebuilt Gojek&apos;s subscription product from a single-vertical pilot into a
                unified brand powering 775k+ daily active users across Southeast Asia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Overview ── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Label>The Brief</Label>
                <SectionHeading>From pilot to platform.</SectionHeading>
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                  GoFood PLUS was Gojek&apos;s first subscription product — food delivery discounts for a
                  monthly fee. It worked. But the business wanted more: a single subscription spanning
                  all six Gojek products (GoFood, GoRide, GoCar, GoMart, GoSend, GoPlay), with a 2.5×
                  subscriber growth target.
                </p>
                <p
                  className="font-body text-muted leading-relaxed mt-4"
                  style={{ fontSize: "1rem" }}
                >
                  That required rebuilding the brand, reimagining the product architecture, and
                  designing 35+ in-app touchpoints — all while keeping the pilot running and a
                  Southeast Asian rollout on the roadmap.
                </p>
              </div>
              <div>
                <Label>My Role</Label>
                <p className="font-body text-fg font-medium mb-2" style={{ fontSize: "0.9375rem" }}>
                  Product Design Lead
                </p>
                <p className="font-body text-muted" style={{ fontSize: "0.875rem", lineHeight: 1.7 }}>
                  End-to-end ownership across strategy, brand identity, product design, and cross-functional alignment. Led a team of 3 designers across 3 phases over 2.5 years.
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  <Label>Timeline</Label>
                  <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                    2021 – 2024
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* ── Impact Numbers ── */}
        <section className="px-6 py-16 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>Impact</Label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard value="775k+" label="Daily Active Users" sub="Post-launch steady state" />
                <StatCard value="72%" label="Conversion Uplift" sub="vs. previous subscription flow" />
                <StatCard value="24.9k" label="Purchases on Launch Day" />
                <StatCard value="150k+" label="Purchases in Week 1" sub="Including renewals" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Phase 1: Pilot ── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PhaseTag phase="Phase 1" label="GoFood PLUS Pilot" />
            <SectionHeading>Proving the model before building the platform.</SectionHeading>
            <p className="font-body text-muted leading-relaxed mb-10" style={{ fontSize: "1rem" }}>
              Before Gojek PLUS existed, there was GoFood PLUS — a subscription benefit tied to the
              food delivery vertical. I joined as it was scaling. The pilot became our proof of
              concept, our constraints playground, and the data source that shaped everything after.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-12">
              <div className="bg-card rounded-2xl p-8">
                <span
                  className="font-display font-bold block mb-2"
                  style={{ fontSize: "2.5rem", color: "#4F46E5", lineHeight: 1 }}
                >
                  3×
                </span>
                <p className="font-body text-fg font-medium text-sm">Subscriber growth</p>
                <p className="font-body text-muted text-xs mt-1">During the pilot phase</p>
              </div>
              <div className="bg-card rounded-2xl p-8">
                <span
                  className="font-display font-bold block mb-2"
                  style={{ fontSize: "2.5rem", color: "#4F46E5", lineHeight: 1 }}
                >
                  2×
                </span>
                <p className="font-body text-fg font-medium text-sm">Gross Transaction Value</p>
                <p className="font-body text-muted text-xs mt-1">For active subscribers</p>
              </div>
              <div className="bg-card rounded-2xl p-8">
                <span
                  className="font-display font-bold block mb-2"
                  style={{ fontSize: "2.5rem", color: "#4F46E5", lineHeight: 1 }}
                >
                  63%
                </span>
                <p className="font-body text-fg font-medium text-sm">90-day retention</p>
                <p className="font-body text-muted text-xs mt-1">Plan completion rate</p>
              </div>
            </div>

            <div className="border border-border rounded-2xl p-8">
              <h3
                className="font-display font-bold text-fg mb-4"
                style={{ fontSize: "1.125rem" }}
              >
                What we learned from 14+ benefit constructs
              </h3>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                The pilot let us test how users perceive, understand, and act on subscription benefits.
                We built and measured 14+ different benefit constructs — discount caps, cashback
                percentages, free items, priority delivery — to understand what drove activation and
                retention. That data became the foundation for Gojek PLUS&apos;s benefit architecture.
              </p>
            </div>
          </motion.div>
        </Section>

        {/* ── Phase 2: Research & Strategy ── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PhaseTag phase="Phase 2" label="Research, Strategy & Brand" />
            <SectionHeading>Understanding what a multi-product subscription really means.</SectionHeading>
            <p className="font-body text-muted leading-relaxed mb-10" style={{ fontSize: "1rem" }}>
              Before designing the expanded product, we needed to understand the gap: who was
              subscribing, who wasn&apos;t, and why. The research phase drove both the product
              architecture and the brand positioning.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-2xl p-8">
                <div
                  className="font-display font-bold mb-2"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  468
                </div>
                <p className="font-body text-fg font-medium text-sm mb-1">
                  Subscribers surveyed
                </p>
                <p className="font-body text-muted text-xs leading-relaxed">
                  Existing GoFood PLUS subscribers — understanding drivers of retention, benefit
                  usage, and perceived value
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8">
                <div
                  className="font-display font-bold mb-2"
                  style={{ fontSize: "2rem", lineHeight: 1 }}
                >
                  822
                </div>
                <p className="font-body text-fg font-medium text-sm mb-1">
                  Non-subscribers surveyed
                </p>
                <p className="font-body text-muted text-xs leading-relaxed">
                  Active Gojek users who hadn&apos;t subscribed — understanding barriers, awareness
                  gaps, and willingness to pay
                </p>
              </div>
            </div>

            <div className="border border-border rounded-2xl p-8 mb-8">
              <h3
                className="font-display font-bold text-fg mb-3"
                style={{ fontSize: "1.125rem" }}
              >
                20+ competitive products analysed
              </h3>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                From Grab to Amazon Prime, we mapped how subscription products across verticals
                communicate value, structure benefits, and build habit. Two things stood out:
                the best subscriptions have a clear &quot;hero benefit&quot; and make the value
                visible in the moment of use — not just at the point of purchase.
              </p>
            </div>

            {/* Design A vs B */}
            <div className="bg-card rounded-2xl p-8">
              <h3
                className="font-display font-bold text-fg mb-3"
                style={{ fontSize: "1.125rem" }}
              >
                Design A vs. Design B — and why B won
              </h3>
              <p className="font-body text-muted leading-relaxed mb-6" style={{ fontSize: "0.9375rem" }}>
                We tested two strategic framings for the subscription product:
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-bg rounded-xl p-6">
                  <p className="font-body font-medium text-fg text-sm mb-2">Design A — Discount-first</p>
                  <p className="font-body text-muted text-xs leading-relaxed">
                    Lead with percentage savings. Show the math. Drive sign-up through
                    loss-aversion (&quot;you&apos;re leaving money on the table&quot;). Familiar
                    pattern. Competitive. Easily commoditised.
                  </p>
                </div>
                <div
                  className="rounded-xl p-6"
                  style={{ background: "rgba(110,232,122,0.08)", border: "1px solid rgba(110,232,122,0.2)" }}
                >
                  <p
                    className="font-body font-medium text-sm mb-2"
                    style={{ color: BRAND_GREEN }}
                  >
                    Design B — Lifestyle-first ✓
                  </p>
                  <p className="font-body text-muted text-xs leading-relaxed">
                    Lead with the identity: &quot;You&apos;re a Gojek power user — PLUS is built
                    for people like you.&quot; Benefits follow from who you are, not what you save.
                    Higher intent, stronger retention signal, brand-building not just offer-building.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>

        {/* ── Brand Identity ── */}
        <section className="px-6 py-20" style={{ backgroundColor: HERO_BG }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Brand Identity</span>
              </Label>
              <h2
                className="font-display font-bold leading-tight mb-6"
                style={{
                  color: "white",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                A brand that felt like{" "}
                <span style={{ color: BRAND_GREEN }}>belonging</span>, not a discount.
              </h2>
              <p
                className="font-body leading-relaxed mb-12 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem" }}
              >
                The Gojek PLUS brand had to work across six product verticals, multiple markets,
                and all marketing surfaces — while feeling distinct from the Gojek masterbrand.
                We landed on a dark-mode identity anchored in deep green and electric lime,
                signalling premium without pretension.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { label: "Primary BG", hex: "#0A1F12", preview: "#0A1F12" },
                  { label: "Brand Green", hex: "#6EE87A", preview: "#6EE87A" },
                  { label: "Deep Forest", hex: "#1B3A2C", preview: "#1B3A2C" },
                  { label: "Off-White", hex: "#F0F0EC", preview: "#F0F0EC" },
                ].map((c) => (
                  <div key={c.label}>
                    <div
                      className="rounded-xl mb-3"
                      style={{ height: 80, backgroundColor: c.preview, border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                    <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>
                      {c.label}
                    </p>
                    <p className="font-body text-xs font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {c.hex}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Phase 3: Launch ── */}
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <PhaseTag phase="Phase 3" label="Product Design & Launch" />
            <SectionHeading>35+ touchpoints. One coherent experience.</SectionHeading>
            <p className="font-body text-muted leading-relaxed mb-10" style={{ fontSize: "1rem" }}>
              The product design challenge wasn&apos;t a single screen — it was ensuring Gojek PLUS
              felt intentional everywhere: discovery, purchase, activation, in-session benefit
              usage, renewal, and lapse recovery. Every moment had to reinforce the brand and
              deliver the promise.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {[
                {
                  title: "Discovery & Purchase",
                  items: [
                    "Subscription landing page with benefit visualisation",
                    "Contextual entry points across all 6 product verticals",
                    "Onboarding flow with benefit activation",
                    "Pricing and plan comparison",
                  ],
                },
                {
                  title: "In-Session Usage",
                  items: [
                    "Real-time benefit counter in active orders",
                    "Savings summary post-transaction",
                    "Benefit eligibility signals pre-checkout",
                    "Cross-product benefit awareness nudges",
                  ],
                },
                {
                  title: "Retention & Renewal",
                  items: [
                    "Renewal reminder flow with savings recap",
                    "Lapse recovery with personalised offer",
                    "Subscriber-only content and early access",
                    "Anniversary and milestone moments",
                  ],
                },
                {
                  title: "Marketing & OOH",
                  items: [
                    "In-app banners and interstitials",
                    "Push notification templates",
                    "Out-of-home campaign assets",
                    "Social media launch campaign",
                  ],
                },
              ].map((group) => (
                <div key={group.title} className="bg-card rounded-2xl p-8">
                  <h3
                    className="font-display font-bold text-fg mb-4"
                    style={{ fontSize: "1rem" }}
                  >
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: BRAND_GREEN }}
                        />
                        <span
                          className="font-body text-muted"
                          style={{ fontSize: "0.875rem", lineHeight: 1.6 }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Launch Results */}
            <div
              className="rounded-2xl p-10"
              style={{ background: HERO_BG }}
            >
              <Label>
                <span style={{ color: "rgba(255,255,255,0.4)" }}>Launch Results</span>
              </Label>
              <h3
                className="font-display font-bold leading-tight mb-8"
                style={{ color: "white", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                The numbers that followed.
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { value: "775k+", label: "Daily active users", color: BRAND_GREEN },
                  { value: "72%", label: "Conversion uplift vs. prior flow", color: BRAND_GREEN },
                  { value: "24.9k", label: "Purchases on day one", color: BRAND_GREEN },
                  { value: "150k+", label: "Purchases in week one", color: BRAND_GREEN },
                ].map((s) => (
                  <div key={s.label}>
                    <div
                      className="font-display font-bold"
                      style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)", color: s.color, lineHeight: 1 }}
                    >
                      {s.value}
                    </div>
                    <p
                      className="font-body mt-2"
                      style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}
                    >
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </Section>

        {/* ── Reflection ── */}
        <section className="px-6 py-20 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>Reflection</Label>
              <div className="max-w-3xl">
                <blockquote
                  className="font-display font-bold text-fg leading-snug mb-8"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.875rem)" }}
                >
                  &ldquo;The hardest part wasn&apos;t the design. It was getting six product teams,
                  brand, marketing, and data to agree on what the subscription actually was.&rdquo;
                </blockquote>
                <p className="font-body text-muted leading-relaxed mb-4" style={{ fontSize: "1rem" }}>
                  Gojek PLUS was the first project where I felt the full weight of design leadership —
                  not just making the right screens, but building the shared language that let the right
                  screens get made. Alignment across verticals, markets, and functions was the real work.
                </p>
                <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                  What I&apos;m most proud of: the brand held. Eighteen months post-launch, Gojek PLUS
                  still looks and feels intentional. That doesn&apos;t happen by accident — it happens
                  because the thinking was right before a single screen was designed.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Back / Next ── */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-10">
            <Link
              href="/#work"
              className="font-body text-sm text-muted hover:text-fg transition-colors inline-flex items-center gap-2"
            >
              ← All Work
            </Link>
            <Link
              href="/work/gofood-order-tracking"
              className="font-body text-sm text-fg border border-border px-5 py-2.5 rounded-full hover:border-fg transition-colors"
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
