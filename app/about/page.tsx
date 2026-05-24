"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ── */}
        <section className="px-6 pt-32 pb-20 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-body text-xs text-muted uppercase tracking-widest block mb-5">
              About
            </span>
            <h1
              className="font-display font-bold text-fg leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", maxWidth: "16ch" }}
            >
              Senior Director of Product Design.
            </h1>
            <p
              className="font-body text-muted leading-relaxed mt-6 max-w-2xl"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
            >
              A full-stack design leader — hands-on enough to know what great feels like, fluent
              in technology to shape how it&apos;s built, and grounded in people to build teams
              that last.
            </p>
          </motion.div>
        </section>

        {/* ── About body ── */}
        <section className="px-6 py-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-5"
            >
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                I started in software engineering before pivoting to design — first at MAQ
                Software working with enterprise clients like Microsoft and Amazon, then through
                a Masters in Product and Interaction Design at IIT Kanpur. That dual background
                never fully separated, and it&apos;s shaped how I work: I think in systems, speak
                the language of engineering, and care deeply about the experience layer.
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                At Gojek, I spent six years building products at Southeast Asian scale — from
                GoFood&apos;s search and order tracking, to Asphalt (the design system), to
                GoFood PLUS and eventually Gojek PLUS: a unified subscription brand across
                six products. I led design for consumer, loyalty, and support AI — and managed
                my first team.
              </p>
              <p className="font-body text-muted leading-relaxed" style={{ fontSize: "1rem" }}>
                Since 2024, I&apos;ve been building the design function at Smallcase and
                Tickertape. That means hiring, systems, process, and culture — not just design.
                Promoted to Senior Director in 12 months. The work I&apos;m most proud of is
                the organisational kind: building the conditions where great design consistently
                happens.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-4 lg:col-start-9 space-y-8"
            >
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-3">
                  Currently
                </span>
                <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                  Senior Director of Product Design
                </p>
                <p className="font-body text-muted text-sm">Smallcase & Tickertape · Bengaluru</p>
              </div>
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-3">
                  Education
                </span>
                <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                  M.Des, Product & Interaction Design
                </p>
                <p className="font-body text-muted text-sm mb-3">IIT Kanpur · 2016–2018</p>
                <p className="font-body text-fg font-medium" style={{ fontSize: "0.9375rem" }}>
                  B.Tech, Computer Science
                </p>
                <p className="font-body text-muted text-sm">Kurukshetra University · 2010–2014</p>
              </div>
              <div>
                <span className="font-body text-xs text-muted uppercase tracking-widest block mb-3">
                  Contact
                </span>
                <a
                  href="mailto:sugam.anand@gmail.com"
                  className="font-body text-sm text-fg border-b border-border pb-0.5 hover:border-fg transition-colors"
                >
                  sugam.anand@gmail.com
                </a>
                <br />
                <a
                  href="https://linkedin.com/in/sugamanand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted hover:text-fg transition-colors mt-2 inline-block"
                >
                  LinkedIn →
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 py-16 max-w-5xl mx-auto border-t border-border mt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-body text-muted" style={{ fontSize: "0.9375rem" }}>
              Want to see the work?
            </p>
            <Link
              href="/#work"
              className="font-body text-sm text-fg border border-border px-5 py-2.5 rounded-full hover:border-fg transition-colors"
            >
              View Case Studies →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
