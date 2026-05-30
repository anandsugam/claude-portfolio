"use client";

import { motion } from "framer-motion";

function PhotoPlaceholder() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "3/4",
        borderRadius: "40px",
        background: "linear-gradient(160deg, #E8E4DE 0%, #D4CFC8 50%, #C2BBB2 100%)",
      }}
    >
      {/* Ambient blob */}
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
          className="font-display font-bold select-none"
          style={{ fontSize: "clamp(5rem, 12vw, 9rem)", color: "rgba(17,17,16,0.09)", lineHeight: 1 }}
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
    <section className="px-6 pt-20 pb-12 lg:pt-28 lg:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">

        {/* 3-zone layout: left heading | center photo | right bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">

          {/* LEFT — big heading + status + CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-end pb-0 lg:pb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#00C047" }} />
              <span className="font-body text-sm text-muted">
                Open to senior design leadership roles
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="font-display font-bold text-fg leading-[1.0] tracking-tight"
              style={{ fontSize: "clamp(3.25rem, 6.5vw, 6rem)" }}
            >
              Sugam
              <br />
              Anand.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="font-body text-muted leading-relaxed mt-5"
              style={{ fontSize: "clamp(0.9375rem, 1.25vw, 1.0625rem)", maxWidth: "30rem" }}
            >
              Senior Director of Product Design.
              <br />
              Building teams, systems, and the conditions where great design consistently happens.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="flex items-center gap-3 mt-8 flex-wrap"
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
          </div>

          {/* CENTER — portrait photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.08 }}
            className="lg:col-span-4 order-first lg:order-none"
          >
            <PhotoPlaceholder />
          </motion.div>

          {/* RIGHT — bio + company strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col justify-end pb-0 lg:pb-8 gap-8"
          >
            <p
              className="font-body text-muted leading-relaxed"
              style={{ fontSize: "0.9375rem" }}
            >
              A full-stack design leader — hands-on enough to know what great
              feels like, fluent in technology to shape how it&apos;s built,
              and grounded in people to build teams that last.
            </p>

            <div className="space-y-1">
              <p className="font-body text-xs text-muted uppercase tracking-widest mb-3">
                Experience at
              </p>
              {["Smallcase & Tickertape", "Gojek", "MAQ Software"].map((b) => (
                <p key={b} className="font-body text-sm text-fg font-medium">{b}</p>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
