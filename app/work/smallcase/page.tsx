"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// ── Shared layout helpers ───────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-body text-xs text-muted uppercase tracking-widest block mb-4">
      {children}
    </span>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-display font-bold text-fg leading-tight"
      style={{ fontSize: "clamp(1.875rem, 3.5vw, 2.875rem)" }}
    >
      {children}
    </h2>
  );
}

function BulletRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex items-start gap-3 py-4 border-b border-border last:border-0">
      <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-2" />
      <p className="font-body text-muted text-sm leading-relaxed">
        <span className="font-medium text-fg">{title}</span>
        {" — "}
        {body}
      </p>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function SmallcasePage() {
  return (
    <>
      <Nav />
      <main>

        {/* ══ Hero ══════════════════════════════════════════════════════════ */}
        <section
          className="min-h-[72vh] flex flex-col justify-end px-6 pb-24 pt-36"
          style={{ backgroundColor: "#1A3550" }}
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
                className="font-display font-bold leading-tight"
                style={{
                  color: "white",
                  fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)",
                  maxWidth: "16ch",
                }}
              >
                Design went from execution layer to strategy table.
              </h1>
              <p
                className="font-body mt-6"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "1rem" }}
              >
                18 months. Senior Director of Design. smallcase + Tickertape.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══ The Situation ═════════════════════════════════════════════════ */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Label>The Situation</Label>
            <H2>Design existed. A design function didn&apos;t.</H2>

            <p className="font-body text-muted leading-relaxed mt-6 mb-8 max-w-3xl" style={{ fontSize: "1rem" }}>
              When design leadership arrived at smallcase in December 2024, talented designers were
              scattered across product verticals — with no advocate, no career infrastructure, and
              no shared identity. The mandate was clear: build design into a strategic function,
              not just a better service.
            </p>

            {/* Remote-first note */}
            <div className="bg-card border-l-2 border-accent rounded-xl px-6 py-5 mb-10">
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                <span className="font-medium text-fg">Remote-first org:</span> the full team met
                in person only twice a year — making trust-building and culture change uniquely harder.
              </p>
            </div>

            {/* Two diagnosis panels */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-10">
              <div className="bg-card rounded-2xl p-8">
                <p className="font-body text-xs text-muted uppercase tracking-widest mb-6">
                  Not present at all
                </p>
                <BulletRow
                  title="Design leadership"
                  body="Role vacant for years, no advocate or mentor at leadership level"
                />
                <BulletRow
                  title="Growth infrastructure"
                  body="No career ladders or comp bands, PM framework copy-pasted as a substitute"
                />
                <BulletRow
                  title="Design community"
                  body="No shared practice or identity, designers isolated in separate product verticals"
                />
              </div>

              <div className="bg-card rounded-2xl p-8">
                <p className="font-body text-xs text-muted uppercase tracking-widest mb-6">
                  Present, but not working
                </p>
                <BulletRow
                  title="Design's role in product"
                  body="Contributing as executors only, briefs arrived fully formed"
                />
                <BulletRow
                  title="Trust and representation"
                  body="Designers felt unheard and unrepresented by their managers"
                />
                <BulletRow
                  title="Retention and motivation"
                  body="Team intact but fragile, motivation tied to verticals not to craft"
                />
              </div>
            </div>

            {/* Proof note */}
            <div className="border border-border rounded-xl px-6 py-5 mb-8">
              <p className="font-body text-muted italic leading-relaxed" style={{ fontSize: "0.9375rem" }}>
                Early proof the diagnosis was right: a designer had already resigned before the
                role was filled, citing these exact gaps — and said he would have stayed had he
                known change was coming.
              </p>
            </div>

            {/* Mandate */}
            <div className="bg-fg rounded-2xl px-10 py-9">
              <p
                className="font-display font-semibold text-bg leading-snug"
                style={{ fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
              >
                Build design from a fragmented service into a strategic function — one with its own
                infrastructure, voice, and the authority to shape what gets built.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ══ What Was Built ════════════════════════════════════════════════ */}
        <section className="px-6 py-24 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>What Was Built</Label>
              <H2>Foundations were laid so design could lead, not just execute.</H2>
              <p className="font-body text-muted leading-relaxed mt-5 mb-12 max-w-3xl" style={{ fontSize: "1rem" }}>
                High-performing design orgs don&apos;t emerge from talent alone — they need
                infrastructure, trust, and craft systems. All three were built in parallel,
                deliberately, across a remote-first team of 8.
              </p>

              {/* Three pillars */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
                {[
                  {
                    title: "Team infrastructure",
                    items: [
                      ["Reporting restructured", "All designers moved under design leadership on day one"],
                      ["Career ladders built", "IC and manager tracks with explicit skill expectations at every level"],
                      ["Compensation framework", "Salary bands established, gaps corrected with founder alignment"],
                      ["Hiring process created", "Built from nothing, proved twice within a month, adopted by product management"],
                    ],
                  },
                  {
                    title: "Culture, built remotely",
                    items: [
                      ["Weekly 1:1s and retros", "Non-negotiable rhythms for trust and pulse-checking across screens"],
                      ["Design jams + Slack channel", "Collective identity and shared practice in a remote-first org"],
                      ["In-person moments used intentionally", "Twice-yearly windows for depth, bonding, and brand-building"],
                      ["Domain ownership model", "End-to-end vertical ownership replaced fragmented project assignments"],
                    ],
                  },
                  {
                    title: "Craft and systems",
                    items: [
                      ["Design system rebuilt", "Scalable and AI-ready architecture, without adding headcount"],
                      ["Friction Log ritual", "Team reviews core product flows together to surface quality gaps"],
                      ["UX Research handbook", "Usability testing turned into a repeatable, structured practice"],
                      ["UX Writing agent on Claude", "Handbook converted into an AI agent now in daily use"],
                      ["Designers in the codebase", "GitHub access secured, Figma MCP pilot led to dev seats for engineering"],
                    ],
                  },
                ].map((pillar) => (
                  <div key={pillar.title} className="bg-bg rounded-2xl p-8">
                    <p className="font-body font-medium text-fg text-sm mb-6">{pillar.title}</p>
                    <div>
                      {pillar.items.map(([head, body]) => (
                        <div key={head} className="flex items-start gap-2.5 py-3 border-b border-border last:border-0">
                          <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-1.5" />
                          <p className="font-body text-muted text-sm leading-relaxed">
                            <span className="font-medium text-fg">{head}</span> — {body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {[
                  { stat: "0", label: "Culture-driven exits", sub: "No designer left because of the environment built around them" },
                  { stat: "2", label: "Hires via new process", sub: "Both backfills closed within a month using the process built from scratch" },
                  { stat: "8", label: "Team size, then and now", sub: "Stable through significant change in a remote-first environment" },
                ].map((s) => (
                  <div key={s.label} className="bg-bg rounded-2xl p-8">
                    <div
                      className="font-display font-bold text-accent mb-2"
                      style={{ fontSize: "3.5rem", lineHeight: 1 }}
                    >
                      {s.stat}
                    </div>
                    <p className="font-body font-medium text-fg text-sm mb-1">{s.label}</p>
                    <p className="font-body text-muted text-xs leading-relaxed">{s.sub}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ Impact ════════════════════════════════════════════════════════ */}
        <section className="px-6 py-24 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Label>Impact</Label>
            <H2>Design moved from execution layer to strategy table.</H2>

            {/* Q3 spotlight */}
            <div className="bg-fg rounded-2xl p-10 mt-10 mb-10 grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-2">
                <span
                  className="font-display font-bold text-accent"
                  style={{ fontSize: "clamp(4rem, 8vw, 6rem)", lineHeight: 1 }}
                >
                  Q3
                </span>
              </div>
              <div className="col-span-12 lg:col-span-10">
                <h3
                  className="font-display font-bold text-bg leading-snug mb-3"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
                >
                  Design earned a seat in the core group after three quarters.
                </h3>
                <p className="font-body leading-relaxed" style={{ color: "rgba(246,244,240,0.55)", fontSize: "0.9375rem" }}>
                  The core group drives quarterly strategy and roadmap planning — heads of product,
                  engineering, business, compliance, and finance. Design had never had a seat here
                  before. After three quarters of visible impact, that changed permanently.
                </p>
              </div>
            </div>

            {/* Impact pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {[
                {
                  title: "Product quality",
                  items: [
                    ["Design reviews transformed", "Leadership Figma comments dropped sharply as alignment replaced disagreement"],
                    ["Design authority delegated", "Founder stepped back, product leads now defer final experience calls to designers"],
                    ["Craft bar raised across the org", "Friction Log and UX standards lifted output quality team-wide"],
                  ],
                },
                {
                  title: "Strategic influence",
                  items: [
                    ["Roadmaps shaped from the bottom up", "Designer-led ideas began populating product planning"],
                    ["From execution to problem-shaping", "Design started defining what gets built, not just how it looks"],
                    ["Cross-functional trust earned", "Product and engineering treat design as a strategic input, not a downstream step"],
                  ],
                },
                {
                  title: "Org recognition",
                  items: [
                    ["Seat in the core group", "First ever for design, earned in three quarters"],
                    ["Permanent structural shift", "Not a project win, design's position in decision-making changed permanently"],
                    ["Hiring process adopted by PM", "The design hiring framework became the org-wide standard"],
                  ],
                },
              ].map((pillar) => (
                <div key={pillar.title} className="bg-card rounded-2xl p-8">
                  <p className="font-body font-medium text-fg text-sm mb-6">{pillar.title}</p>
                  <div>
                    {pillar.items.map(([head, body]) => (
                      <div key={head} className="flex items-start gap-2.5 py-3 border-b border-border last:border-0">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0 mt-1.5" />
                        <p className="font-body text-muted text-sm leading-relaxed">
                          <span className="font-medium text-fg">{head}</span> — {body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ══ Team Voice ════════════════════════════════════════════════════ */}
        <section className="px-6 py-24 bg-card">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Label>Team Voice</Label>
              <H2>In the team&apos;s own words.</H2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
                {[
                  "Design autonomy is slowly coming into power and decisions are being finalised by designers than product folks.",
                  "Really love how the design team has come together — from collaborations to team outings. Big thanks to Sugam for making it happen!",
                  "Much better collaboration within the design team — I've gotten so much helpful feedback and different POVs.",
                  "More cross-team collaboration and brainstorming has been happening, even outside the design jams.",
                ].map((quote) => (
                  <div key={quote} className="bg-bg rounded-2xl p-8 border-l-2 border-accent flex flex-col gap-6">
                    <p
                      className="font-display font-medium text-fg leading-relaxed"
                      style={{ fontSize: "1rem" }}
                    >
                      &ldquo;{quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-px bg-border" />
                      <p className="font-body text-muted text-xs">
                        Designer, smallcase · team retrospective
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══ Nav ═══════════════════════════════════════════════════════════ */}
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
