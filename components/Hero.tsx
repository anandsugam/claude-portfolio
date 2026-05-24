"use client";

import { motion } from "framer-motion";

const brands = ["Smallcase", "Tickertape", "Gojek"];

function PhotoPlaceholder() {
  return (
    <div
      className="relative w-full rounded-3xl overflow-hidden"
      style={{ aspectRatio: "4/5", background: "linear-gradient(135deg, #EEECE6 0%, #DDD8CE 40%, #C8C2B8 100%)" }}
    >
      <div
        className="absolute"
        style={{
          top: "10%", left: "5%", width: "55%", height: "55%",
          borderRadius: "40% 60% 60% 40% / 40% 40% 60% 60%",
          background: "rgba(79,70,229,0.08)",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "8%", right: "6%", width: "45%", height: "45%",
          borderRadius: "60% 40% 40% 60% / 60% 60% 40% 40%",
          background: "rgba(79,70,229,0.05)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span
          className="font-display font-bold select-none"
          style={{ fontSize: "clamp(4rem, 10vw, 7rem)", color: "rgba(17,17,16,0.12)", lineHeight: 1 }}
        >
          SA
        </span>
        <span className="font-body text-xs" style={{ color: "rgba(17,17,16,0.3)", letterSpacing: "0.15em" }}>
          ADD PHOTO
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-16">
      <div className="max-w-7xl mx-auto w-full py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="font-body text-sm text-muted">
                Senior Director of Product Design at Smallcase &amp; Tickertape · Bengaluru
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
              className="font-display font-bold text-fg leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Sugam Anand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="font-body text-muted leading-relaxed mt-6"
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)", maxWidth: "34rem" }}
            >
              A full-stack design leader — hands-on enough to know what great
              feels like, fluent in technology to shape how it&apos;s built, and
              grounded in people to build teams that last.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 mt-10"
            >
              <a
                href="/#work"
                className="px-6 py-3 bg-fg text-bg font-body font-medium text-sm rounded-full hover:opacity-75 transition-opacity"
              >
                View Work →
              </a>
              <a
                href="/#story"
                className="px-6 py-3 border border-border text-fg font-body font-medium text-sm rounded-full hover:border-fg transition-colors"
              >
                Read the Story
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-5 mt-16 pt-8 border-t border-border flex-wrap"
            >
              <span className="font-body text-xs text-muted uppercase tracking-widest shrink-0">
                Experience at
              </span>
              {brands.map((b) => (
                <span key={b} className="font-body text-sm text-muted font-medium">
                  {b}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <PhotoPlaceholder />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
