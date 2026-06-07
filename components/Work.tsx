"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    slug: "smallcase",
    company: "Smallcase & Tickertape",
    role: "Senior Director of Product Design",
    title: "From Execution Layer to the Strategy Table",
    description:
      "Joined as Head of Design and turned a scattered, service-oriented team into a strategic function — with career infrastructure, an AI-ready craft system, and a seat on the core leadership team.",
    tags: ["Leadership", "Org Building", "Fintech"],
    color: "#1A3550",
    year: "2024–Present",
  },
  {
    slug: "gojek-plus",
    company: "Gojek",
    role: "Product Design Lead",
    title: "One Subscription. Six Products. One Brand.",
    description:
      "Led the design of Gojek PLUS — a unified subscription brand spanning 6 products across Southeast Asia, from 0 to launch.",
    tags: ["Brand", "Product Design", "Scale"],
    color: "#1B3A2C",
    year: "2021–2024",
  },
  {
    slug: "gofood-order-tracking",
    company: "Gojek · GoFood",
    role: "Senior Product Designer",
    title: "Redesigning the Order Tracking Experience to Reduce Customer Anxiety",
    description:
      "Rethought the GoFood post-order journey — from confirmation to delivery — reducing anxiety and support contacts at scale.",
    tags: ["Consumer UX", "Mobile", "GoFood"],
    color: "#2E1F1A",
    year: "2021–2022",
  },
  {
    slug: "gofood-text-search",
    company: "Gojek · GoFood",
    role: "Product Designer",
    title: "Redesigning How 20M Users Find Food",
    description:
      "Rebuilt GoFood's text search from scratch — improving relevance, speed, and navigation patterns for 20M+ monthly active users.",
    tags: ["Search", "Discovery", "Mobile"],
    color: "#1E1A2E",
    year: "2020–2021",
    hidden: true,
  },
];

const visibleCaseStudies = caseStudies.filter((cs) => !cs.hidden);

export default function Work() {
  return (
    <section id="work" className="px-6 pt-12 pb-24">
      <div className="max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-end justify-between mb-12"
      >
        <div className="w-full">
          <h2 className="font-display text-fg mt-3 leading-[1.05]" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
            Selected work
          </h2>
        </div>
      </motion.div>

      <div className="flex flex-col gap-4 w-full">
        {visibleCaseStudies.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/work/${cs.slug}`} className="group block">
              <div
                className="flex flex-col lg:flex-row overflow-hidden border border-border hover:border-fg/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ borderRadius: "24px" }}
              >
                {/* LEFT — text content */}
                <div className="flex flex-col justify-between flex-1 p-8 lg:p-10 bg-bg gap-6">
                  {/* Top: company + year */}
                  <div className="flex items-center justify-between">
                    <span
                      className="font-body text-xs font-medium text-muted uppercase tracking-widest"
                    >
                      {cs.company}
                    </span>
                    <span
                      className="font-body text-xs px-3 py-1 text-muted"
                      style={{ backgroundColor: "#F0F0F0", borderRadius: "100px" }}
                    >
                      {cs.year}
                    </span>
                  </div>

                  {/* Middle: title + description */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className="font-display font-bold text-fg leading-snug group-hover:text-accent transition-colors duration-200"
                      style={{ fontSize: "clamp(1.125rem, 1.75vw, 1.375rem)", letterSpacing: "-0.02em" }}
                    >
                      {cs.title}
                    </h3>
                    <p
                      className="font-body text-muted leading-relaxed"
                      style={{ fontSize: "0.9375rem", maxWidth: "52ch" }}
                    >
                      {cs.description}
                    </p>
                  </div>

                  {/* Bottom: tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="font-body text-xs px-3 py-1 text-muted"
                        style={{ backgroundColor: "#F0F0F0", borderRadius: "100px" }}
                      >
                        {t}
                      </span>
                    ))}
                    <span
                      className="font-body text-xs px-3 py-1 text-fg font-medium"
                      style={{ backgroundColor: "#E8E8E8", borderRadius: "100px" }}
                    >
                      {cs.role}
                    </span>
                  </div>
                </div>

                {/* RIGHT — color cover */}
                <div
                  className="relative overflow-hidden shrink-0 lg:w-2/5"
                  style={{ backgroundColor: cs.color, minHeight: "240px" }}
                >
                  {/* Noise overlay */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "repeat",
                    }}
                  />
                  {/* Ghost number */}
                  <span
                    className="absolute font-display font-bold select-none"
                    style={{
                      fontSize: "clamp(7rem, 10vw, 11rem)",
                      lineHeight: 1,
                      color: "rgba(255,255,255,0.07)",
                      bottom: "-8px",
                      right: "24px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Role label */}
                  <span
                    className="absolute font-body uppercase tracking-widest select-none"
                    style={{
                      fontSize: "0.6rem",
                      color: "rgba(255,255,255,0.3)",
                      bottom: "24px",
                      left: "28px",
                      letterSpacing: "0.14em",
                    }}
                  >
                    {cs.role}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}
