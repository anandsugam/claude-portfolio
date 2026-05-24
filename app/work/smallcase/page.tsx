"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ── Design tokens for this case study ──────────────────────────────────────
const PURPLE = "#7C3AED";
const PURPLE_BG = "rgba(124,58,237,0.08)";
const INDIGO = "#4F46E5";
const INDIGO_BG = "rgba(79,70,229,0.08)";
const TEAL = "#0D9488";
const TEAL_BG = "rgba(13,148,136,0.08)";

// ── Small helpers ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span
        className="w-5 h-5 rounded-md flex items-center justify-center shrink-0"
        style={{ background: PURPLE_BG }}
      >
        <span className="w-2 h-2 rounded-full" style={{ background: PURPLE }} />
      </span>
      <span
        className="font-body text-xs font-semibold uppercase tracking-[0.1em]"
        style={{ color: PURPLE }}
      >
        {children}
      </span>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold text-fg leading-tight"
      style={{ fontSize: "clamp(1.875rem, 3.5vw, 3rem)", letterSpacing: "-0.02em" }}
    >
      {children}
    </h2>
  );
}

function BulletItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-border last:border-0">
      <span
        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: PURPLE_BG }}
      >
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: PURPLE }} />
      </span>
      <div>
        <p className="font-body font-semibold text-fg text-sm mb-0.5">{title}</p>
        <p className="font-body text-muted text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function PillarCard({
  color,
  bg,
  title,
  items,
}: {
  color: string;
  bg: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl p-8 flex flex-col" style={{ background: bg }}>
      <p
        className="font-body font-bold text-base mb-6"
        style={{ color }}
      >
        {title}
      </p>
      <div className="flex flex-col gap-0">
        {items.map((item) => {
          const [head, ...rest] = item.split(" — ");
          return (
            <div key={head} className="flex items-start gap-2.5 py-3.5 border-b border-border/50 last:border-0">
              <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: color }} />
              <p className="font-body text-muted text-sm leading-relaxed">
                <span className="font-semibold text-fg">{head}</span>
                {rest.length > 0 && ` — ${rest.join(" — ")}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ImpactPillar({
  color,
  bg,
  title,
  items,
}: {
  color: string;
  bg: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl p-8" style={{ background: bg }}>
      <p className="font-body font-bold text-base mb-6" style={{ color }}>
        {title}
      </p>
      <div className="space-y-0">
        {items.map((item) => {
          const [head, ...rest] = item.split(" — ");
          return (
            <div key={head} className="flex items-start gap-2.5 py-3.5 border-b border-border/50 last:border-0">
              <span className="w-1 h-1 rounded-full mt-2 shrink-0" style={{ background: color }} />
              <p className="font-body text-muted text-sm leading-relaxed">
                <span className="font-semibold text-fg">{head}</span>
                {rest.length > 0 && ` — ${rest.join(" — ")}`}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Quote({ text, source }: { text: string; source: string }) {
  return (
    <div
      className="bg-bg rounded-2xl p-8 flex flex-col justify-between gap-6"
      style={{ borderLeft: `3px solid ${PURPLE}` }}
    >
      <p className="font-display font-medium text-fg leading-relaxed" style={{ fontSize: "1.0625rem" }}>
        &ldquo;{text}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <span className="w-8 h-px" style={{ background: PURPLE, opacity: 0.4 }} />
        <p className="font-body text-muted text-xs">{source}</p>
      </div>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function SmallcasePage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══ 1. HERO ══════════════════════════════════════════════════════ */}
        <section
          className="min-h-[72vh] flex flex-col justify-end px-6 pb-24 pt-36"
          style={{ backgroundColor: "#0D0D0D" }}
        >
          <div className="max-w-5xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
            >
              <div className="flex flex-wrap gap-2 mb-8">
                {["Leadership", "Org Building", "Fintech"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-body"
                    style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.55)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p
                className="font-body mb-4"
                style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8125rem" }}
              >
                smallcase &amp; Tickertape · 2024–Present
              </p>
              <h1
                className="font-display font-bold leading-tight mb-6"
                style={{
                  color: "white",
                  fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
                  letterSpacing: "-0.02em",
                  maxWidth: "14ch",
                }}
              >
                Design went from execution layer to{" "}
                <span style={{ color: "#A78BFA" }}>strategy table.</span>
              </h1>
              <p
                className="font-body"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1.0625rem" }}
              >
                18 months. Senior Director of Design. smallcase + Tickertape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ 2. THE SITUATION ═════════════════════════════════════════════ */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>The Situation</SectionLabel>
            <H2>Design existed. A design function didn&apos;t.</H2>

            <p className="font-body text-muted leading-relaxed mt-6 mb-8 max-w-3xl" style={{ fontSize: "1.0625rem" }}>
              When design leadership arrived at smallcase in December 2024, talented designers were
              scattered across product verticals — with no advocate, no career infrastructure, and
              no shared identity. The mandate was clear: build design into a strategic function,
              not just a better service.
            </p>

            {/* Remote-first callout */}
            <div
              className="rounded-xl px-6 py-5 mb-10 flex items-start gap-4"
              style={{ background: INDIGO_BG, borderLeft: `3px solid ${INDIGO}` }}
            >
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                <span className="font-semibold text-fg">Remote-first org:</span> the full team met
                in person only twice a year — making trust-building and culture change uniquely harder.
              </p>
            </div>

            {/* Two diagnosis panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
              {/* Not present at all */}
              <div
                className="rounded-2xl p-8"
                style={{ background: PURPLE_BG, borderLeft: `3px solid ${PURPLE}` }}
              >
                <p
                  className="font-body font-bold text-xs uppercase tracking-widest mb-6"
                  style={{ color: PURPLE }}
                >
                  Not present at all
                </p>
                <BulletItem
                  title="Design leadership"
                  body="Role vacant for years, no advocate or mentor at leadership level"
                />
                <BulletItem
                  title="Growth infrastructure"
                  body="No career ladders or comp bands, PM framework copy-pasted as a substitute"
                />
                <BulletItem
                  title="Design community"
                  body="No shared practice or identity, designers isolated in separate product verticals"
                />
              </div>

              {/* Present but not working */}
              <div
                className="rounded-2xl p-8"
                style={{ background: INDIGO_BG, borderLeft: `3px solid ${INDIGO}` }}
              >
                <p
                  className="font-body font-bold text-xs uppercase tracking-widest mb-6"
                  style={{ color: INDIGO }}
                >
                  Present, but not working
                </p>
                <BulletItem
                  title="Design's role in product"
                  body="Contributing as executors only, briefs arrived fully formed"
                />
                <BulletItem
                  title="Trust and representation"
                  body="Designers felt unheard and unrepresented by their managers"
                />
                <BulletItem
                  title="Retention and motivation"
                  body="Team intact but fragile, motivation tied to verticals not to craft"
                />
              </div>
            </div>

            {/* Proof callout */}
            <div
              className="rounded-xl px-6 py-5 mb-8"
              style={{ background: PURPLE_BG, borderLeft: `3px solid ${PURPLE}` }}
            >
              <p
                className="font-body italic text-muted leading-relaxed"
                style={{ fontSize: "0.9375rem" }}
              >
                Early proof the diagnosis was right: a designer had already resigned before the
                role was filled, citing these exact gaps — and said he would have stayed had he
                known change was coming.
              </p>
            </div>

            {/* Mandate */}
            <div
              className="rounded-2xl px-10 py-8"
              style={{ background: "#0D0D0D", borderLeft: `3px solid ${PURPLE}` }}
            >
              <p
                className="font-display font-semibold text-white leading-snug"
                style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)", letterSpacing: "-0.01em" }}
              >
                Build design from a fragmented service into a strategic function — one with its own
                infrastructure, voice, and the authority to shape what gets built.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ══ 3. WHAT WAS BUILT ════════════════════════════════════════════ */}
        <section className="px-6 py-24 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>What Was Built</SectionLabel>
              <H2>Foundations were laid so design could lead, not just execute.</H2>
              <p className="font-body text-muted leading-relaxed mt-5 mb-12 max-w-3xl" style={{ fontSize: "1.0625rem" }}>
                High-performing design orgs don&apos;t emerge from talent alone — they need
                infrastructure, trust, and craft systems. All three were built in parallel,
                deliberately, across a remote-first team of 8.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
                <PillarCard
                  color="#6366F1"
                  bg="rgba(99,102,241,0.07)"
                  title="Team infrastructure"
                  items={[
                    "Reporting restructured — All designers moved under design leadership on day one",
                    "Career ladders built — IC and manager tracks with explicit skill expectations at every level",
                    "Compensation framework — Salary bands established, gaps corrected with founder alignment",
                    "Hiring process created — Built from nothing, proved twice within a month, adopted by product management",
                  ]}
                />
                <PillarCard
                  color={TEAL}
                  bg={TEAL_BG}
                  title="Culture, built remotely"
                  items={[
                    "Weekly 1:1s and retros — Non-negotiable rhythms for trust and pulse-checking across screens",
                    "Design jams + Slack channel — Collective identity and shared practice in a remote-first org",
                    "In-person moments used intentionally — Twice-yearly windows for depth, bonding, and brand-building",
                    "Domain ownership model — End-to-end vertical ownership replaced fragmented project assignments",
                  ]}
                />
                <PillarCard
                  color="#059669"
                  bg="rgba(5,150,105,0.07)"
                  title="Craft and systems"
                  items={[
                    "Design system rebuilt — Scalable and AI-ready architecture, without adding headcount",
                    "Friction Log ritual — Team reviews core product flows together to surface quality gaps",
                    "UX Research handbook — Usability testing turned into a repeatable, structured practice",
                    "UX Writing agent on Claude — Handbook converted into an AI agent now in daily use",
                    "Designers in the codebase — GitHub access secured, Figma MCP pilot led to dev seats for engineering",
                  ]}
                />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {[
                  {
                    stat: "0",
                    label: "Culture-driven exits",
                    sub: "No designer left because of the environment built around them",
                  },
                  {
                    stat: "2",
                    label: "Hires via new process",
                    sub: "Both backfills closed within a month using the process built from scratch",
                  },
                  {
                    stat: "8",
                    label: "Team size, then and now",
                    sub: "Stable through significant change in a remote-first environment",
                  },
                ].map((s) => (
                  <div key={s.label} className="bg-bg rounded-2xl p-8">
                    <div
                      className="font-display font-bold mb-2"
                      style={{ fontSize: "4rem", color: PURPLE, lineHeight: 1, letterSpacing: "-0.04em" }}
                    >
                      {s.stat}
                    </div>
                    <p className="font-body font-semibold text-fg text-sm mb-1">{s.label}</p>
                    <p className="font-body text-muted text-xs leading-relaxed">{s.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ 4. IMPACT ════════════════════════════════════════════════════ */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>Impact</SectionLabel>
            <H2>Design moved from execution layer to strategy table.</H2>

            {/* Q3 headline card */}
            <div
              className="rounded-2xl p-10 mt-10 mb-10 grid grid-cols-12 gap-8 items-center"
              style={{ background: "#0D0D0D" }}
            >
              <div className="col-span-12 lg:col-span-3">
                <span
                  className="font-display font-bold"
                  style={{
                    fontSize: "clamp(5rem, 10vw, 8rem)",
                    color: PURPLE,
                    lineHeight: 1,
                    letterSpacing: "-0.04em",
                  }}
                >
                  Q3
                </span>
              </div>
              <div className="col-span-12 lg:col-span-9">
                <h3
                  className="font-display font-bold text-white leading-snug mb-4"
                  style={{ fontSize: "clamp(1.375rem, 2.5vw, 2rem)", letterSpacing: "-0.02em" }}
                >
                  Design earned a seat in the core group after three quarters.
                </h3>
                <p className="font-body leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}>
                  The core group drives quarterly strategy and roadmap planning — heads of product,
                  engineering, business, compliance, and finance. Design had never had a seat here
                  before. After three quarters of visible impact, that changed permanently.
                </p>
              </div>
            </div>

            {/* Three impact pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <ImpactPillar
                color={INDIGO}
                bg={INDIGO_BG}
                title="Product quality"
                items={[
                  "Design reviews transformed — Leadership Figma comments dropped sharply as alignment replaced disagreement",
                  "Design authority delegated — Founder stepped back, product leads now defer final experience calls to designers",
                  "Craft bar raised across the org — Friction Log and UX standards lifted output quality team-wide",
                ]}
              />
              <ImpactPillar
                color={TEAL}
                bg={TEAL_BG}
                title="Strategic influence"
                items={[
                  "Roadmaps shaped from the bottom up — Designer-led ideas began populating product planning",
                  "From execution to problem-shaping — Design started defining what gets built, not just how it looks",
                  "Cross-functional trust earned — Product and engineering treat design as a strategic input, not a downstream step",
                ]}
              />
              <ImpactPillar
                color={PURPLE}
                bg={PURPLE_BG}
                title="Org recognition"
                items={[
                  "Seat in the core group — First ever for design, earned in three quarters",
                  "Permanent structural shift — Not a project win, design's position in decision-making changed permanently",
                  "Hiring process adopted by PM — The design hiring framework became the org-wide standard",
                ]}
              />
            </div>
          </motion.div>
        </section>

        {/* ══ 5. TEAM VOICE ════════════════════════════════════════════════ */}
        <section className="px-6 py-24 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionLabel>Team Voice</SectionLabel>
              <H2>In the team&apos;s own words.</H2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                <Quote
                  text="Design autonomy is slowly coming into power and decisions are being finalised by designers than product folks."
                  source="Designer, smallcase · team retrospective"
                />
                <Quote
                  text="Really love how the design team has come together — from collaborations to team outings. Big thanks to Sugam for making it happen!"
                  source="Designer, smallcase · team retrospective"
                />
                <Quote
                  text="Much better collaboration within the design team — I've gotten so much helpful feedback and different POVs."
                  source="Designer, smallcase · team retrospective"
                />
                <Quote
                  text="More cross-team collaboration and brainstorming has been happening, even outside the design jams."
                  source="Designer, smallcase · team retrospective"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ Nav ══════════════════════════════════════════════════════════ */}
        <section className="px-6 py-16 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-border pt-10">
            <Link
              href="/#work"
              className="font-body text-sm text-muted hover:text-fg transition-colors"
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
