"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    slug: "smallcase",
    company: "Smallcase & Tickertape",
    logos: ["/images/smallcase.png", "/images/tickertape.png"],
    image: "/images/teamcover.png",
    role: "Senior Director of Product Design",
    title: "Elevating Product Design from Execution to Strategic Influence",
    description:
      "Led a team of 8 product designers, transforming design into a strategic partner and securing a permanent seat on the core leadership team.",
    tags: ["Leadership", "Org Building", "Fintech"],
    color: "#1A3550",
    year: "2024–Present",
  },
  {
    slug: "gojek-plus",
    company: "Gojek",
    logos: ["/images/gojek.png"],
    image: "/images/gojekpluscover.png",
    role: "Product Design Lead",
    title: "Gojek PLUS: Building a new subscription brand for Gojek",
    description:
      "Led the creation of Gojek PLUS, the company's first subscription brand unifying six products. Took it from concept to a nationwide launch that set record daily purchases.",
    tags: ["Brand", "Product Design", "Scale"],
    color: "#1B3A2C",
    year: "2021–2024",
  },
  {
    slug: "gofood-order-tracking",
    company: "Gojek",
    logos: ["/images/gojek.png"],
    image: "/images/ordertrackingcover.png",
    role: "Product Design Lead",
    title: "Redesigning Order Tracking Experience in GoFood",
    description:
      "Led a multi-phase transformation of GoFood's tracking experience, improving customer confidence, reducing operational costs, and enabling order pooling at scale.",
    tags: ["Consumer UX", "Mobile", "GoFood"],
    color: "#2E1F1A",
    year: "2021–2022",
  },
  {
    slug: "gofood-text-search",
    company: "Gojek · GoFood",
    logos: ["/images/gojek.png"],
    image: "",
    role: "Product Designer",
    title: "Redesigning How 20M Users Find Food",
    description:
      "Rebuilt GoFood's text search from scratch, improving relevance, speed, and navigation patterns for 20M+ monthly active users.",
    tags: ["Search", "Discovery", "Mobile"],
    color: "#1E1A2E",
    year: "2020–2021",
    hidden: true,
  },
];

const visibleCaseStudies = caseStudies.filter((cs) => !cs.hidden);

export default function Work() {
  return (
    <section id="work" className="relative z-10 bg-bg px-6 pt-12 pb-40 scroll-mt-24">
      <div className="max-w-7xl mx-auto w-full">
      {/* Sticky header — stays pinned under the nav until the cards scroll away */}
      <div
        className="sticky top-14 z-30 bg-bg pt-8 pb-8"
        style={{ boxShadow: "0 8px 16px -12px rgba(0,0,0,0.12)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between"
        >
          <div className="w-full">
            <h2 className="font-display text-fg leading-[1.05]" style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.03em" }}>
              Case Studies
            </h2>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-7 w-full">
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
                className="flex flex-col lg:flex-row overflow-hidden border hover:border-fg/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ borderRadius: "24px", borderColor: "rgba(0,0,0,0.11)" }}
              >
                {/* LEFT — text content */}
                <div className="flex flex-col justify-center flex-1 p-8 lg:p-10 bg-bg gap-5">
                  {/* Top: company logo(s) + designation */}
                  <div className="flex items-center flex-wrap gap-2.5">
                    <span className="flex items-center gap-3">
                      {cs.logos.map((logo) => (
                        <img
                          key={logo}
                          src={logo}
                          alt={cs.company}
                          style={{
                            height: logo.includes("tickertape") || logo.includes("smallcase") ? "26px" : "22px",
                            width: "auto",
                            objectFit: "contain",
                          }}
                        />
                      ))}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="font-body text-xs font-medium text-fg">
                      {cs.role}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className="font-display font-bold text-fg leading-snug"
                      style={{ fontSize: "clamp(1.125rem, 1.75vw, 1.375rem)", letterSpacing: "-0.02em" }}
                    >
                      {cs.title}
                    </h3>
                    <p
                      className="font-body text-muted leading-relaxed"
                      style={{ fontSize: "0.9375rem", maxWidth: "calc(64ch - 24px)" }}
                    >
                      {cs.description}
                    </p>
                  </div>

                  {/* Focus area pills */}
                  <div className="flex flex-wrap gap-2">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="font-body text-xs px-3 py-1 text-muted"
                        style={{ backgroundColor: "#F0F0F0", borderRadius: "100px" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RIGHT — color cover */}
                <div
                  className="relative overflow-hidden shrink-0 lg:w-2/5"
                  style={{ backgroundColor: cs.color, minHeight: "240px" }}
                >
                  {cs.image ? (
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    /* Image placeholder */
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        style={{ color: "rgba(255,255,255,0.35)" }}
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                      <span
                        className="font-body uppercase tracking-widest"
                        style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em" }}
                      >
                        1600 × 1000
                      </span>
                    </div>
                  )}
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
