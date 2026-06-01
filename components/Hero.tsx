"use client";

import { motion } from "framer-motion";

function PhotoPlaceholder() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "3/4",
        borderRadius: "32px",
        background: "linear-gradient(160deg, #E8E4DE 0%, #D4CFC8 50%, #C2BBB2 100%)",
      }}
    >
      <div
        className="absolute"
        style={{
          top: "8%", left: "10%", width: "60%", height: "60%",
          borderRadius: "60% 40% 60% 40% / 40% 60% 40% 60%",
          background: "rgba(79,70,229,0.07)",
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: "10%", right: "8%", width: "50%", height: "50%",
          borderRadius: "40% 60% 40% 60% / 60% 40% 60% 40%",
          background: "rgba(79,70,229,0.04)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <span
          className="font-display select-none"
          style={{ fontSize: "clamp(5rem, 12vw, 9rem)", fontWeight: 800, color: "rgba(17,17,16,0.09)", lineHeight: 1 }}
        >
          SA
        </span>
        <span className="font-body text-xs" style={{ color: "rgba(17,17,16,0.25)", letterSpacing: "0.18em" }}>
          ADD PHOTO
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="px-6 pt-20 pb-12 lg:pt-28 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — text content */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="font-display text-fg leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              <span className="block" style={{ fontSize: "0.45em", fontWeight: 500, letterSpacing: "-0.01em", opacity: 0.5, marginBottom: "0.3em" }}>I&apos;m Sugam Anand</span>
              A full-stack<br />design leader.
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="font-body text-muted leading-relaxed mt-6"
              style={{ fontSize: "1.0625rem", maxWidth: "42rem" }}
            >
              Hands-on enough to know what great feels like, fluent enough in technology to shape how it&apos;s built, and grounded enough in people to build teams that last.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.45 }}
              className="flex items-center gap-3 mt-10 flex-wrap"
            >
              <a
                href="/#work"
                className="px-6 py-3 bg-fg text-bg font-body font-medium text-sm hover:opacity-80 transition-opacity"
                style={{ borderRadius: "100px" }}
              >
                See Case Studies ↓
              </a>
              <a
                href="/journey"
                className="px-6 py-3 border border-border text-fg font-body font-medium text-sm hover:border-fg transition-colors"
                style={{ borderRadius: "100px" }}
              >
                View My Journey →
              </a>
            </motion.div>

            {/* Availability status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.55 }}
              className="flex items-center gap-2 mt-10"
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#00C047" }} />
              <span className="font-body text-sm text-muted">
                Open to senior design leadership roles
              </span>
            </motion.div>
          </div>

          {/* RIGHT — portrait photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="lg:col-span-5 order-first lg:order-none"
          >
            <PhotoPlaceholder />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
