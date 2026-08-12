"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";
const PdfPreview = dynamic(() => import("./PdfPreview"), { ssr: false });

// ─── Section tabs ─────────────────────────────────────────────────────────────
const TABS = [
  { id: "context",    label: "Context" },
  { id: "brief",      label: "Objective" },
  { id: "strategy",   label: "Strategy" },
  { id: "phase-1",    label: "Phase 1" },
  { id: "phase-2",    label: "Phase 2" },
  { id: "phase-3",    label: "Phase 3" },
  { id: "outcome",    label: "Outcome" },
  { id: "reflection", label: "Reflection" },
] as const;

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const HERO_BG = "#0A1F12";
const BRAND_GREEN = "#6EE87A";
const ACCENT_DIM = "rgba(110,232,122,0.12)";
const ACCENT_BORDER = "rgba(110,232,122,0.55)";
const CARD_BORDER = "#e8e8e8";

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
      style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

function H2Dark({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold leading-tight"
      style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)", color: "white", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1.0625rem" }}>
      {children}
    </p>
  );
}

function ThesisBlock({ children, logo }: { children: React.ReactNode; logo?: string }) {
  return (
    <div
      className="my-10 rounded-2xl p-8"
      style={{ backgroundColor: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}` }}
    >
      {logo && (
        <img
          src={logo}
          alt=""
          style={{ height: 32, width: "auto", objectFit: "contain", marginBottom: 14 }}
        />
      )}
      <p
        className="font-display font-semibold text-fg leading-snug"
        style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: "40ch" }}
      >
        {children}
      </p>
    </div>
  );
}

const CAROUSEL_INTERVAL = 4000;

function PhaseCarousel({
  slides,
}: {
  slides: { label: string; sublabel?: string; caption: string; image?: string }[];
}) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [progressKey, setProgressKey] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = (i: number) => {
    if (i === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setVisible(i);
      setFading(false);
      setProgressKey((k) => k + 1);
    }, 300);
  };

  const prev = () => goTo((current - 1 + slides.length) % slides.length);
  const next = () => goTo((current + 1) % slides.length);

  // Auto-advance — pauses while hovered
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      goTo((current + 1) % slides.length);
    }, CAROUSEL_INTERVAL);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, slides.length, paused]);

  const slide = slides[visible];

  return (
    <div
      className="mb-14 rounded-2xl overflow-hidden"
      style={{ backgroundColor: "#fff" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setProgressKey((k) => k + 1); setPaused(false); }}
    >
      {/* Image with fade */}
      <div className="w-full relative" style={{ height: 560 }}>
        {slide.image ? (
          <img
            key={current}
            src={slide.image}
            alt={slide.label}
            className="w-full h-full object-cover absolute inset-0"
            style={{ opacity: fading ? 0 : 1, transition: "opacity 300ms ease" }}
          />
        ) : (
          <div
            key={current}
            className="w-full h-full flex flex-col items-center justify-center absolute inset-0"
            style={{ backgroundColor: "#f5f5f5", opacity: fading ? 0 : 1, transition: "opacity 300ms ease" }}
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
              <p className="font-body font-medium text-fg text-sm">{slide.label}</p>
              {slide.sublabel && (
                <p className="font-body text-muted text-xs mt-1 leading-relaxed max-w-xs">{slide.sublabel}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: "var(--color-border)" }} />

      {/* Bottom bar: caption + prev/next */}
      <div className="flex items-center justify-between gap-6 px-6 py-5" style={{ backgroundColor: "#fff" }}>
        {/* Dots above caption */}
        <div className="min-w-0">
          <div className="flex items-center gap-1.5 mb-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="rounded-full overflow-hidden relative"
                style={{
                  width: i === current ? 28 : 6,
                  height: 6,
                  backgroundColor: i === current ? "var(--color-border)" : "var(--color-border)",
                  transition: "width 300ms ease",
                  flexShrink: 0,
                }}
              >
                {i === current && (
                  <span
                    key={progressKey}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      backgroundColor: BRAND_GREEN,
                      width: "100%",
                      transformOrigin: "left",
                      transform: "scaleX(0)",
                      animation: `pill-fill ${CAROUSEL_INTERVAL}ms linear forwards`,
                      animationPlayState: paused ? "paused" : "running",
                    }}
                  />
                )}
              </button>
            ))}
          </div>
          <p
            className="font-body font-semibold text-fg"
            style={{ fontSize: "0.9375rem", opacity: fading ? 0 : 1, transition: "opacity 300ms ease" }}
          >
            {slide.label}
          </p>
          <p
            className="font-body text-muted text-sm leading-relaxed mt-0.5"
            style={{ opacity: fading ? 0 : 1, transition: "opacity 300ms ease" }}
          >
            {slide.caption}
          </p>
        </div>

        {/* Prev / Next */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center transition-colors hover:border-fg"
            style={{ color: "var(--color-muted)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8.5 2.5L4 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center transition-colors hover:border-fg"
            style={{ color: "var(--color-muted)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 2.5L10 7l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pill-fill {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}

function ImageZone({
  label,
  sublabel,
  aspect = "16/9",
  tall = false,
  figmaEmbed,
}: {
  label: string;
  sublabel?: string;
  aspect?: string;
  tall?: boolean;
  figmaEmbed?: string;
}) {
  if (figmaEmbed) {
    return (
      <div
        className="w-full rounded-2xl overflow-hidden"
        style={{
          aspectRatio: tall ? "9/16" : aspect,
          maxHeight: tall ? "640px" : undefined,
        }}
      >
        <iframe
          src={figmaEmbed}
          className="w-full h-full border-0"
          allowFullScreen
        />
      </div>
    );
  }

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
                className="font-display font-bold leading-[1.05] tracking-tight"
                style={{ color: "white", fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}
              >
                Building{" "}
                <span style={{ color: BRAND_GREEN }}>Gojek PLUS</span>
              </h1>

              <p
                className="font-body leading-relaxed mt-7"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
              >
                From a GoFood-only loyalty programme to a Gojek-wide subscription brand. Built, validated, and launched in 3 months.
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
              className="grid grid-cols-2 gap-8 lg:grid-cols-[1fr_1fr_1fr_2fr]"
            >
              {[
                { label: "Role", value: "Product Design Lead" },
                { label: "Timeline", value: "February – May 2024" },
                { label: "Team", value: "1 UX Writer, 1 Researcher" },
                { label: "Scope", value: "Product Design, Research, Brand, UX Strategy" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="font-body text-xs text-muted uppercase tracking-widest mb-1.5">{item.label}</p>
                  <p className="font-body font-medium text-fg" style={{ fontSize: "0.9375rem" }}>{item.value}</p>
                </div>
              ))}
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
                      style={{ backgroundColor: BRAND_GREEN }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            01 — CONTEXT
        ══════════════════════════════════════════════════════════════════ */}
        <section id="context" className="px-6 py-20 scroll-mt-28">
          <div className="max-w-5xl mx-auto">
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
                    But Gojek&apos;s other products (GoRide, GoCar, GoTransit, GoMart, GoSend)
                    were losing their most valuable users to competitors. Without predictable
                    discounts, there was no stickiness.
                  </Paragraph>
                </div>

                <ThesisBlock logo="/images/gojek/gofood+.png">
                  Leadership&apos;s ask: replicate what GoFood+ did, but at the Gojek level, spanning all six products.
                </ThesisBlock>
              </div>

              {/* 6 products */}
              <div className="lg:col-span-5">
                <SectionLabel>6 products to unify</SectionLabel>
                <div className="grid grid-cols-1 gap-3 w-[calc(100%-24px)]">
                  {[
                    { logo: "gofood",    name: "GoFood",    type: "Food delivery" },
                    { logo: "goride",    name: "GoRide",    type: "Motorcycle taxi" },
                    { logo: "gocar",     name: "GoCar",     type: "Car rides" },
                    { logo: "gotransit", name: "GoTransit", type: "Public transit" },
                    { logo: "gomart",    name: "GoMart",    type: "Grocery delivery" },
                    { logo: "gosend",    name: "GoSend",    type: "Package delivery" },
                  ].map((p) => (
                    <div
                      key={p.logo}
                      className="rounded-xl px-3 py-4 flex items-center gap-3"
                      style={{ border: `1px solid ${CARD_BORDER}` }}
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={`/images/gojek/${p.logo}.png`}
                          alt={p.name}
                          style={{ width: 40, height: 40, objectFit: "contain" }}
                        />
                      </div>
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
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            02 — THE BRIEF
        ══════════════════════════════════════════════════════════════════ */}
        <section id="brief" className="px-6 py-20 bg-card scroll-mt-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMark num="02" label="Objective" />

              <H2>Scale subscriptions to 2.5x by end of 2024</H2>

              {/* 3 business targets */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-6 mb-12">
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
                    <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}>{t.title}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>

              {/* Power user definition */}
              <div
                className="rounded-2xl p-8"
                style={{ backgroundColor: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}` }}
              >
                <p
                  className="font-body text-xs uppercase tracking-widest mb-4"
                  style={{ color: "var(--color-muted)" }}
                >
                  Power user definition
                </p>
                <p
                  className="font-display font-semibold leading-snug text-fg"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: "40ch" }}
                >
                  &ldquo;Users who completed 30+ orders in a month across any combination of Food,
                  Ride, Car, Transit, Send and Mart.&rdquo;
                </p>
                <p
                  className="font-body text-muted mt-5 leading-relaxed"
                  style={{ fontSize: "0.9375rem" }}
                >
                  These were Gojek&apos;s most valuable users. Competitors were actively targeting
                  them with predictable discounts and bundled benefits.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            03 — STRATEGY
        ══════════════════════════════════════════════════════════════════ */}
        <section id="strategy" className="px-6 py-20 scroll-mt-28">
          <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="03" label="Strategy" />

            <H2>A 3-phase approach: test, learn, scale</H2>

            <div className="mt-6 mb-12">
              <Paragraph>
                With a fixed launch date and a 3-month runway, the project strategy was designed to
                de-risk each phase. Rather than building everything at once, Phase 1 validated the
                business model before committing to a full redesign.
              </Paragraph>
            </div>

            {/* Timeline */}
            {(() => {
              const phases = [
                {
                  dates: "Feb – Mar 2024",
                  phase: "Phase 1",
                  title: "Validate Demand",
                  description: "Rapid experimentation, leveraging existing infrastructure and touchpoints",
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
                  title: "Brand & Experience Design",
                  description: "Deep research, purchase journey redesign, and new brand identity, running in parallel",
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
                  description: "Ship the redesigned experience, launch the new brand, migrate all GoFood+ users",
                  items: [
                    "New Gojek PLUS brand system",
                    "Nationwide launch campaign",
                    "20+ in-app touchpoints",
                    "GoFood+ migration to Gojek PLUS",
                  ],
                  active: true,
                },
              ];
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 mb-2">
                  {phases.map((p, i) => (
                    <div
                      key={p.phase}
                      className="rounded-2xl border overflow-hidden flex flex-col"
                      style={{ borderColor: p.active ? ACCENT_BORDER : "var(--color-border)" }}
                    >
                      {/* Card header */}
                      <div
                        className="px-7 pt-7 pb-0 flex flex-col"
                        style={{ backgroundColor: p.active ? ACCENT_DIM : "var(--color-card)" }}
                      >
                        {/* Number + phase label row */}
                        <div className="flex items-center justify-between mb-5">
                          <span
                            className="font-display font-bold"
                            style={{ fontSize: "2rem", color: BRAND_GREEN, lineHeight: 1 }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-body text-xs uppercase tracking-widest text-muted">
                            {p.phase}
                          </span>
                        </div>

                        {/* Title */}
                        <p
                          className="font-display font-bold text-fg mb-2"
                          style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}
                        >
                          {p.title}
                        </p>

                        {/* Description */}
                        <p className="font-body text-muted leading-relaxed mb-2" style={{ fontSize: "0.8125rem" }}>
                          {p.description}
                        </p>

                        <div className="flex-1 min-h-2" />

                        {/* Footer row */}
                        <div
                          className="flex items-center justify-between pt-4 pb-5 mt-auto border-t"
                          style={{ borderColor: p.active ? ACCENT_BORDER : "var(--color-border)" }}
                        >
                          <span className="font-body text-xs uppercase tracking-widest text-muted">Timeline</span>
                          <span
                            className="font-body text-xs font-medium"
                            style={{ color: "var(--color-fg)" }}
                          >
                            {p.dates}
                          </span>
                        </div>
                      </div>

                      {/* Card body — bullets */}
                      <div
                        className="px-7 py-5 border-t flex flex-col"
                        style={{
                          backgroundColor: "var(--color-bg)",
                          borderColor: p.active ? ACCENT_BORDER : "var(--color-border)",
                        }}
                      >
                        {p.items.map((item) => (
                          <div key={item} className="py-3 border-b border-border last:border-0 first:pt-0 last:pb-0">
                            <p
                              className="font-body text-muted leading-relaxed"
                              style={{ fontSize: "0.8125rem" }}
                            >
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            04 — PHASE 1
        ══════════════════════════════════════════════════════════════════ */}
        <section id="phase-1" className="px-6 py-20 bg-card scroll-mt-28">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ChapterMark num="04" label="Phase 1 · Feb – Mar 2024" />

              <H2>Phase 1: Pilot to Learn</H2>

              <div className="mt-6 mb-10 space-y-4">
                <Paragraph>
                  Before investing in a new brand, product architecture, and dozens of new touch points,
                  the first challenge was validating whether customers would actually find value in a
                  multi-service membership. The goal was to answer key business questions fast, not
                  build a perfect experience.
                </Paragraph>

              </div>


              {/* Discovery */}
              <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.375rem" }}>
                Designing for learning
              </h3>
              <div className="mt-3 mb-8 max-w-3xl">
                <Paragraph>
                  The goal was to answer key business questions fast, not build a perfect experience.
                  Adaptations were limited to three areas: updating subscription messaging to reflect
                  ecosystem-wide benefits, introducing discovery surfaces across Gojek products, and
                  reusing the purchase flow as-is.
                </Paragraph>
              </div>

              <PhaseCarousel
                slides={[
                  {
                    label: "Reframed purchase page",
                    sublabel: "Same page, new content hierarchy",
                    caption: "The existing purchase page reframed with a new content hierarchy to sell cross-vertical benefits without engineering overhead.",
                    image: "/images/carousel/img1.png",
                  },
                  {
                    label: "New entry points",
                    sublabel: "Cross-product entry points across 6 verticals",
                    caption: "Entry points surfaced the subscription across all 6 product journeys, not just GoFood.",
                    image: "/images/carousel/img2.png",
                  },
                  {
                    label: "Updated branding",
                    sublabel: "GoFood+ touchpoints updated with multi-product messaging",
                    caption: "GoFood+ branding updated to communicate multi-product value while retaining existing subscriber recognition and familiarity.",
                  },
                ]}
              />

              {/* 14+ constructs */}
              <h3 className="font-display font-semibold text-fg mb-3 max-w-3xl" style={{ fontSize: "1.375rem" }}>
                With discovery and branding updates live, 14+ subscription plan constructs were
                experimented with a limited rollout, varying across three levers
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10 mt-6">
                {[
                  { n: "01", title: "Benefit types + value", body: "What discounts and perks unlock, and how much" },
                  { n: "02", title: "Plan pricing + types", body: "Trial pricing, renewal pricing, tiered structures" },
                  { n: "03", title: "Minimum cart value", body: "Threshold to unlock benefits per order" },
                ].map((l) => (
                  <div key={l.n} className="bg-bg rounded-2xl p-7">
                    <span className="font-display font-bold block mb-3" style={{ fontSize: "2rem", color: BRAND_GREEN, lineHeight: 1 }}>{l.n}</span>
                    <p className="font-display font-bold text-fg mb-2" style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}>{l.title}</p>
                    <p className="font-body text-muted text-sm leading-relaxed">{l.body}</p>
                  </div>
                ))}
              </div>

              {/* Winning plan construct */}
              {(() => {
                const plans = [
                  { duration: "90 days", tier: "Best value", actual: "Rp44,900", price: "Rp18,900" },
                  { duration: "30 days", tier: "Mid",        actual: "Rp29,900", price: "Rp14,900" },
                  { duration: "14 days", tier: "Entry",      actual: "Rp18,900", price: "Rp8,900"  },
                ];
                const services = [
                  { icon: "/images/gojek/gofood.png",    label: "GoFood",    values: ["Up to 12k off", "Up to 12k off", "Up to 12k off"], vch: ["900 vouchers", "300 vouchers", "140 vouchers"] },
                  { icon: "/images/gojek/goride.png",    label: "GoRide",    values: ["Up to 8k off",  "Up to 8k off",  "Up to 8k off" ], vch: ["360 vouchers", "120 vouchers", "60 vouchers"  ] },
                  { icon: "/images/gojek/gocar.png",     label: "GoCar",     values: ["Up to 8k off",  "Up to 8k off",  "Up to 8k off" ], vch: ["360 vouchers", "120 vouchers", "60 vouchers"  ] },
                  { icon: "/images/gojek/gotransit.png", label: "GoTransit", values: ["Up to 15k off", "Up to 15k off", "Up to 15k off"], vch: ["360 vouchers", "120 vouchers", "60 vouchers"  ] },
                  { icon: "/images/gojek/gosend.png",    label: "GoSend",    values: ["Up to 4k off",  "Up to 4k off",  "Up to 4k off" ], vch: ["180 vouchers", "60 vouchers",  "30 vouchers"  ] },
                  { icon: "/images/gojek/gomart.png",    label: "GoMart",    values: ["Up to 8k off",  "Up to 8k off",  "Up to 8k off" ], vch: ["60 vouchers",  "20 vouchers",  "10 vouchers"  ] },
                ];
                const col = "1fr";
                const border = `1px solid ${CARD_BORDER}`;
                return (
                  <div className="mb-12 -mx-6 px-6 overflow-x-auto lg:mx-0 lg:px-0 lg:overflow-visible" style={{ scrollbarWidth: "none" }}>
                  <div className="rounded-2xl overflow-hidden" style={{ display: "grid", gridTemplateColumns: `1.4fr ${col} ${col} ${col}`, minWidth: 620, backgroundColor: "#fff", border }}>
                    {/* Header row */}
                    <div className="px-6 py-6 flex flex-col justify-end" style={{ borderBottom: border, backgroundColor: "#fff" }}>
                      <p className="font-display font-bold text-fg" style={{ fontSize: "1.5rem", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>Winning construct</p>
                      <span className="font-body text-xs px-2.5 py-1 rounded-full self-start" style={{ background: "transparent", color: "var(--color-muted)", fontWeight: 500, border }}>3 tier subscription plan</span>
                    </div>
                    {plans.map((p, i) => (
                      <div key={p.duration} className="px-6 py-6 flex flex-col justify-end" style={{ backgroundColor: "#fff", borderBottom: border, borderLeft: border }}>
                        <p className="font-display font-bold text-fg" style={{ fontSize: "1.5rem", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8 }}>{p.duration}</p>
                        <span className="font-body text-xs px-2.5 py-1 rounded-full self-start" style={{ background: "transparent", color: "var(--color-muted)", fontWeight: 500, border }}>{p.tier}</span>
                      </div>
                    ))}

                    {/* Service rows */}
                    {services.map((s) => (
                      <>
                        <div key={s.label + "-label"} className="px-6 py-4 flex items-center gap-3" style={{ borderBottom: border, backgroundColor: "#fff" }}>
                          <img src={s.icon} alt={s.label} className="rounded-lg shrink-0" style={{ width: 40, height: 40, objectFit: "cover" }} />
                          <p className="font-body text-fg" style={{ fontWeight: 500, fontSize: "0.9375rem" }}>{s.label}</p>
                        </div>
                        {s.values.map((v, i) => (
                          <div key={i} className="px-6 py-4 flex flex-col justify-center" style={{ backgroundColor: "#fff", borderBottom: border, borderLeft: border }}>
                            <p className="font-body font-semibold text-fg" style={{ fontSize: "0.875rem" }}>{v}</p>
                            {s.vch[i] && <p className="font-body text-xs mt-0.5" style={{ color: "var(--color-muted)", fontWeight: 400 }}>{s.vch[i]}</p>}
                          </div>
                        ))}
                      </>
                    ))}

                    {/* Price row */}
                    <div className="px-6 py-5 flex items-center" style={{ backgroundColor: "#fff" }}>
                      <p className="font-body text-xs uppercase tracking-widest font-medium" style={{ color: "var(--color-muted)" }}>Subscription price</p>
                    </div>
                    {plans.map((p, i) => (
                      <div key={p.duration + "-price"} className="px-6 py-5 flex flex-col justify-center" style={{ backgroundColor: "#fff", borderLeft: border }}>
                        <p className="font-body text-xs line-through mb-1" style={{ color: "var(--color-muted)" }}>{p.actual}</p>
                        <p className="font-display font-bold text-fg" style={{ fontSize: "1.25rem", letterSpacing: "-0.02em" }}>{p.price}</p>
                      </div>
                    ))}
                  </div>
                  </div>
                );
              })()}

              {/* Learnings */}
              <h3 className="font-display font-semibold text-fg mb-6" style={{ fontSize: "1.375rem" }}>What the pilot revealed</h3>
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
                    title: "Users preferred longer-term plans",
                    body: "A clear value ladder concentrated demand toward the 90-day plan (63%), followed by the 14-day (28%) and 30-day (9%) plans.",
                  },
                  {
                    n: "04",
                    title: "Business model validated before full investment",
                    body: "By reusing existing GoFood+ touchpoints, real signal was gathered to proceed with confidence without significant engineering cost.",
                  },
                ].map((l) => (
                  <div key={l.n} className="bg-bg rounded-2xl p-7">
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
        <section id="phase-2" className="px-6 py-20 scroll-mt-28">
          <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ChapterMark num="05" label="Phase 2 · Mar – Apr 2024" />

            <H2>Phase 2: Redesigning the Experience</H2>

            <div className="mt-6 mb-12 max-w-3xl">
              <Paragraph>
                With the business model validated, a multi-track design effort ran in parallel: deep
                user research, purchase journey redesign, and a new loyalty brand, all running at once.
              </Paragraph>
            </div>

            {/* Research stats */}
            <h3 className="font-display font-semibold text-fg mb-3" style={{ fontSize: "1.375rem" }}>
              Post-pilot research: understanding who we were serving
            </h3>
            <div className="mt-3 mb-8 max-w-3xl">
              <Paragraph>
                To guide the next phase, a post-pilot research study was conducted through in-app
                surveys with 468 subscribers and 822 non-subscribers. The findings identified key
                adoption drivers and informed the Phase 2 strategy and design direction.
              </Paragraph>
            </div>

            {/* Bento grid: 5-col explicit grid — stats cols 1–3, insights cols 4–5 */}
            <div className="grid grid-cols-2 gap-4 mb-8 lg:[grid-template-columns:repeat(5,1fr)]">
              {/* Row 1 stat cards — cols 1–3 */}
              {[
                { pct: "60%", label: "of new subscribers were power users", row: 1, col: 1 },
                { pct: "70%", label: "of power user subscribers were GoFood users", row: 1, col: 2 },
                { pct: "67%", label: "of subscribers had purchased GoFood+ subscription before", row: 1, col: 3 },
                { pct: "80%", label: "Felt the new plan was an upgrade on GoFood+", row: 2, col: 1 },
                { pct: "79%", label: "of existing GoFood Plus subscribers aware the new plan has extended benefits", row: 2, col: 2 },
                { pct: "66%", label: "of users felt the current offering was an upgrade from the previous GoFood+ plan", row: 2, col: 3 },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-7 lg:[grid-column:var(--gc)] lg:[grid-row:var(--gr)]"
                  style={{ backgroundColor: "#fff", border: `1px solid ${CARD_BORDER}`, ["--gc" as string]: String(s.col), ["--gr" as string]: String(s.row) }}
                >
                  <div className="font-display font-bold mb-2 text-fg" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", lineHeight: 1 }}>
                    {s.pct}
                  </div>
                  <p className="font-body text-muted text-xs leading-snug">{s.label}</p>
                </div>
              ))}

              {/* Insight cards — cols 4–5, one per row */}
              <div
                className="rounded-2xl p-7 flex flex-col justify-center col-span-2 lg:[grid-column:4/span_2] lg:[grid-row:1]"
                style={{ backgroundColor: "#fff", border: `1px solid ${CARD_BORDER}` }}
              >
                <p className="font-body text-xs uppercase tracking-widest text-muted mb-3">Usage</p>
                <p className="font-body text-sm text-fg leading-relaxed">The new subscription increased transaction frequency and basket size across users&apos; existing product usage.</p>
              </div>
              <div
                className="rounded-2xl p-7 flex flex-col justify-center col-span-2 lg:[grid-column:4/span_2] lg:[grid-row:2]"
                style={{ backgroundColor: "#fff", border: `1px solid ${CARD_BORDER}` }}
              >
                <p className="font-body text-xs uppercase tracking-widest text-muted mb-3">Opportunity</p>
                <p className="font-body text-sm text-fg leading-relaxed">Non-subscribers were largely transport-only users who had never tried the subscription programme, highlighting a clear cross-sell opportunity.</p>
              </div>
            </div>


            {/* Questions → Clusters mapping */}
            <h3 className="font-display font-semibold text-fg mt-12 mb-3" style={{ fontSize: "1.375rem" }}>
              IA built from users' mental models
            </h3>
            <div className="mt-3 mb-8 max-w-3xl">
              <Paragraph>
                Working with the UX research team, we mapped the key questions users had when
                evaluating a subscription. These directly informed the content structure of the
                purchase page redesign.
              </Paragraph>
            </div>

            {/* Mapping visualisation — SVG bezier diagram */}
            <div className="rounded-2xl p-8 mb-0 overflow-x-auto" style={{ backgroundColor: "var(--color-bg)", border: `1px solid ${CARD_BORDER}`, scrollbarWidth: "none" }}>
              <div style={{ minWidth: 540 }}>
              {/* Column headers */}
              <div className="flex items-center mb-4 max-w-2xl mx-auto w-full">
                <div className="flex-1">
                  <p className="font-body text-xs uppercase tracking-widest text-muted">User questions</p>
                </div>
                <div style={{ width: 160 }} />
                <div className="flex-1">
                  <p className="font-body text-xs uppercase tracking-widest text-muted">Purchase page section</p>
                </div>
              </div>
              <div className="max-w-2xl mx-auto w-full" style={{ borderTop: `1px solid ${CARD_BORDER}`, marginBottom: 32 }} />

              {/* Groups */}
              <div className="flex flex-col gap-10 max-w-2xl mx-auto w-full">
                {(
                  [
                    {
                      color: "#4DB87A",
                      bg: "rgba(77,184,122,0.08)",
                      questions: ["What is this about?", "What are the benefits?"],
                      clusters: ["Brand + Intro", "Benefits"],
                    },
                    {
                      color: "#8B6FD4",
                      bg: "rgba(139,111,212,0.08)",
                      questions: ["Which product is this for?", "Is it worth the price?", "How long is this for?"],
                      clusters: ["Package Selection", "Trial Pricing + Renewal Info"],
                    },
                    {
                      color: "#6B7FD4",
                      bg: "rgba(107,127,212,0.08)",
                      questions: ["Can I cancel after purchase?", "Are there any restrictions?"],
                      clusters: ["T&Cs, FAQ + Social Proof"],
                    },
                  ] as { color: string; bg: string; questions: string[]; clusters: string[] }[]
                ).map((group, gi) => {
                  const PILL_H = 36;
                  const PILL_GAP = 10;
                  const SVG_W = 160;
                  const qTotalH = group.questions.length * PILL_H + (group.questions.length - 1) * PILL_GAP;
                  const cTotalH = group.clusters.length * PILL_H + (group.clusters.length - 1) * PILL_GAP;
                  const innerH = Math.max(qTotalH, cTotalH);
                  const svgH = innerH + 24;
                  const qStartY = (svgH - qTotalH) / 2;
                  const cStartY = (svgH - cTotalH) / 2;
                  const qYs = group.questions.map((_, i) => qStartY + i * (PILL_H + PILL_GAP) + PILL_H / 2);
                  const cYs = group.clusters.map((_, i) => cStartY + i * (PILL_H + PILL_GAP) + PILL_H / 2);
                  const cx = SVG_W / 2;
                  const cy = svgH / 2;
                  const groupDelay = gi * 0.15;

                  return (
                    <div key={gi} className="flex items-stretch">
                      {/* Question pills */}
                      <div
                        className="flex-1 flex flex-col justify-center"
                        style={{ gap: PILL_GAP, height: svgH }}
                      >
                        {group.questions.map((q) => (
                          <div
                            key={q}
                            className="flex items-center gap-2 px-4 font-body text-sm font-medium"
                            style={{
                              height: PILL_H,
                              borderRadius: 100,
                              backgroundColor: group.bg,
                              color: group.color,
                              border: `1px solid ${group.color}50`,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: group.color }}
                            />
                            {q}
                          </div>
                        ))}
                      </div>

                      {/* SVG bezier connector — animated */}
                      <svg width={SVG_W} height={svgH} style={{ flexShrink: 0, overflow: "visible" }}>
                        {/* Question lines → center */}
                        {qYs.map((y, i) => (
                          <motion.path
                            key={`q${i}`}
                            d={`M 0,${y} C ${SVG_W * 0.38},${y} ${SVG_W * 0.38},${cy} ${cx},${cy}`}
                            fill="none"
                            stroke={group.color}
                            strokeWidth="1.5"
                            strokeOpacity="0.55"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: groupDelay + i * 0.08 }}
                          />
                        ))}
                        {/* Center → cluster lines */}
                        {cYs.map((y, i) => (
                          <motion.path
                            key={`c${i}`}
                            d={`M ${cx},${cy} C ${SVG_W * 0.62},${cy} ${SVG_W * 0.62},${y} ${SVG_W},${y}`}
                            fill="none"
                            stroke={group.color}
                            strokeWidth="1.5"
                            strokeOpacity="0.55"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: "easeInOut", delay: groupDelay + 0.55 + i * 0.08 }}
                          />
                        ))}
                        {/* Central dot — appears when lines meet */}
                        <motion.circle
                          cx={cx} cy={cy} r="4" fill={group.color}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.25, delay: groupDelay + 0.5 }}
                          style={{ transformOrigin: `${cx}px ${cy}px` }}
                        />
                      </svg>

                      {/* Cluster pills */}
                      <div
                        className="flex-1 flex flex-col justify-center"
                        style={{ gap: PILL_GAP, height: svgH }}
                      >
                        {group.clusters.map((c) => (
                          <div
                            key={c}
                            className="flex items-center px-4 font-body text-sm font-medium"
                            style={{
                              height: PILL_H,
                              borderRadius: 10,
                              color: group.color,
                              border: `1px solid ${group.color}50`,
                              backgroundColor: group.bg,
                            }}
                          >
                            {c}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>
            </div>

            {/* Usability testing */}
            <h3 className="font-display font-semibold text-fg mt-12 mb-3" style={{ fontSize: "1.375rem" }}>
              Usability testing: two design explorations
            </h3>
            <div className="mt-3 max-w-3xl">
              <Paragraph>
                Usability testing was run with both existing GoFood+ subscribers and non-subscribers,
                evaluating two design directions against the user mental model framework.
              </Paragraph>
            </div>
            <div className="mb-6 mt-6 rounded-2xl overflow-hidden" style={{ backgroundColor: "var(--color-bg)", border: `1px solid ${CARD_BORDER}` }}>
              <img src="/images/designOptions.png" alt="Design options" className="w-full" />
            </div>
            <div className="mb-8">
              <img src="/images/testing.png" alt="Usability testing" className="w-full rounded-2xl" />
            </div>

            <h3 className="font-display font-semibold text-fg mt-12 mb-3" style={{ fontSize: "1.375rem" }}>
              Final shipped screens
            </h3>
            <div className="mt-3 max-w-3xl">
              <Paragraph>
                The final design unified benefits discovery and plan selection into a single view, making it easier for users to compare options and commit, reflecting the mental model surfaced in research.
              </Paragraph>
            </div>
            <div className="mb-8 mt-6">
              <img src="/images/finalscreen.png" alt="Final shipped screens" className="w-full rounded-2xl border" style={{ borderColor: "rgba(0,0,0,0.1)" }} />
            </div>

          </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            06 — PHASE 3 (dark)
        ══════════════════════════════════════════════════════════════════ */}
        <section
          id="phase-3"
          className="px-6 py-20 relative overflow-hidden scroll-mt-28"
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
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.0625rem" }}
              >
                Phase 3 combined the creation of an entirely new brand identity with a nationwide
                launch, requiring close coordination across product, marketing, brand, and on-ground
                operations teams.
              </p>

              {/* Brand identity */}
              <h3
                className="font-display font-semibold mb-4"
                style={{ color: "white", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)" }}
              >
                Creating the Gojek PLUS brand identity
              </h3>
              <p
                className="font-body leading-relaxed mb-10 max-w-2xl"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.0625rem" }}
              >
                After extensive creative explorations and alignment with brand marketing and creative
                design teams, three principles guided the final naming and identity decision.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 mb-10 items-stretch">
                {/* Cards column */}
                <div className="flex flex-col justify-between gap-4">
                  {[
                    {
                      letter: "A",
                      title: "Retain Gojek green",
                      body: "Maintain a strong connection to Gojek, ensuring instant recognition and trust.",
                    },
                    {
                      letter: "B",
                      title: "Add distinct identity",
                      body: "Design a language that feels exclusive but still part of the Gojek ecosystem.",
                    },
                    {
                      letter: "C",
                      title: "Retain PLUS equity",
                      body: "Keep the PLUS name, leveraging existing subscriber familiarity and perceived value.",
                    },
                  ].map((p) => (
                    <div
                      key={p.letter}
                      className="rounded-2xl p-6"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                      <p className="font-display font-bold mb-1" style={{ color: "white", fontSize: "0.9375rem" }}>
                        {p.title}
                      </p>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>

                {/* PDF */}
                <PdfPreview src="/documents/Gojek%20PLUS_Brand%20Guidelines_2024.pdf" />
              </div>

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
                <p className="font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem" }}>
                  A full brand book was created and shared with marketing, on-ground, and creative
                  teams, ensuring consistent application across print, digital, and in-app touchpoints.
                  Brand system applied across: App UI, marketing materials, OOH, and digital campaigns.
                </p>
              </div>

              {/* 20+ touchpoints */}
              <h3
                className="font-display font-semibold mb-6"
                style={{ color: "white", fontSize: "clamp(1.375rem, 2.5vw, 1.875rem)" }}
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
                      <span className="font-medium" style={{ color: "white" }}>{t.area}: </span>
                      {t.detail}
                    </p>
                  </div>
                ))}
              </div>

              <img src="/images/touchpoints.png" alt="Final shipped UI touchpoints" className="w-full rounded-2xl" />

              {/* Cross-functional */}
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            07 — OUTCOME
        ══════════════════════════════════════════════════════════════════ */}
        <section id="outcome" className="px-6 py-20 bg-card scroll-mt-28">
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
                  { value: "24.9k", label: "New Purchases on Launch Day", sub: "Previous record was 7.5k", accent: false },
                  { value: "11K", label: "Net new subscribers per day", sub: "Up from 2k/day pre-launch", accent: false },
                ].map((s) => (
                  <div key={s.label} className="bg-bg rounded-2xl p-7 flex flex-col gap-2">
                    <span
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
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
                  { value: "8.3%", label: "New users among purchasers", sub: "Week 1, never subscribed before", accent: false },
                  { value: "10%", label: "Reactivated users", sub: "Lapsed subscribers returned in week 1", accent: false },
                ].map((s) => (
                  <div key={s.label} className="bg-bg rounded-2xl p-7 flex flex-col gap-2">
                    <span
                      className="font-display font-bold"
                      style={{
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
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

              {/* Launch image */}
              <div className="w-full rounded-2xl overflow-hidden mt-10">
                <img
                  src="/images/launch.png"
                  alt="Gojek PLUS launch"
                  className="w-full h-auto block"
                />
              </div>

              {/* Qualitative block */}
              <div className="rounded-2xl p-8 lg:p-10 mt-4" style={{ backgroundColor: HERO_BG }}>
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
                  launch-day traffic. A strong signal that the product and brand redesign delivered
                  lasting value, not just novelty.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            08 — REFLECTION
        ══════════════════════════════════════════════════════════════════ */}
        <section id="reflection" className="px-6 py-20 scroll-mt-28">
          <div className="max-w-5xl mx-auto">
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
                operating simultaneously as strategist, researcher, brand designer, and UX lead,
                while keeping eight cross-functional teams aligned toward a single, ambitious goal.
              </Paragraph>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-12">
              {[
                {
                  title: "Start with the riskiest assumption",
                  body: "The decision to run Phase 1 as a low-effort experiment rather than jumping into a full redesign was the most important leadership call. It provided real data, not assumptions, to design the right product.",
                },
                {
                  title: "Design the strategy, not just the screens",
                  body: "The role extended far beyond UI. The 3-phase project strategy was defined, the research programme was commissioned and directed, and the brand framework was created. The screens were the output, not the work.",
                },
                {
                  title: "Research creates shared conviction",
                  body: "Surveying 700+ users gave the team a shared language with product, marketing, and engineering. When stakeholders asked why the page looked a certain way, the answer was always grounded in user evidence.",
                },
                {
                  title: "Brand coherence is a product decision",
                  body: "Creating the Gojek PLUS brand was a strategic choice that enabled a consistent experience across 20+ touchpoints, 8 teams, and both digital and physical channels.",
                },
              ].map((r) => (
                <div
                  key={r.title}
                  className="rounded-2xl p-8 flex flex-col"
                  style={{ backgroundColor: "var(--color-bg)", border: "1px solid rgba(0,0,0,0.15)" }}
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
                className="font-display font-bold leading-snug"
                style={{ color: "white", fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
              >
                &ldquo;From a GoFood-only loyalty programme to a Gojek-wide subscription brand. Built,
                validated, and launched in 3 months.&rdquo;
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
