"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    slug: "smallcase",
    company: "Smallcase & Tickertape",
    title: "Building Design as a Strategic Function",
    tags: ["Leadership", "Org Building", "Fintech"],
    color: "#1A3550",
    year: "2024–Present",
  },
  {
    slug: "gojek-plus",
    company: "Gojek",
    title: "One Subscription. Six Products. One Brand.",
    tags: ["Brand", "Product Design", "Scale"],
    color: "#1B3A2C",
    year: "2021–2024",
  },
  {
    slug: "gofood-order-tracking",
    company: "Gojek · GoFood",
    title: "Redesigning the Post-Booking Experience",
    tags: ["Consumer UX", "Mobile"],
    color: "#2E1F1A",
    year: "2021–2022",
  },
  {
    slug: "gofood-text-search",
    company: "Gojek · GoFood",
    title: "Redesigning How 20M Users Find Food",
    tags: ["Search", "Discovery"],
    color: "#1E1A2E",
    year: "2020–2021",
  },
];

export default function Work() {
  return (
    <section id="work" className="px-6 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <span className="text-xs font-body text-muted uppercase tracking-widest">
          Selected Work
        </span>
        <h2 className="font-display font-bold text-4xl lg:text-5xl mt-3 text-fg">
          Four case studies.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {caseStudies.map((cs, i) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <Link href={`/work/${cs.slug}`} className="group block">
              <div
                className="relative overflow-hidden rounded-2xl flex flex-col justify-end p-8"
                style={{ backgroundColor: cs.color, aspectRatio: "4/3" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.06] bg-white transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {cs.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full font-body"
                        style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.65)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-xs font-body mb-2"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {cs.company} · {cs.year}
                  </p>
                  <h3
                    className="font-display font-bold text-2xl leading-tight group-hover:translate-x-1 transition-transform duration-200"
                    style={{ color: "white" }}
                  >
                    {cs.title} →
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
