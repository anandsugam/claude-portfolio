"use client";

import { motion } from "framer-motion";
import MaskReveal from "./MaskReveal";

function PhotoPlaceholder() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "1/1",
        borderRadius: "50%",
      }}
    >
      <img
        src="/images/profile.png"
        alt="Sugam Anand"
        className="absolute inset-0 w-full h-full object-cover scale-125"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="px-6 pt-36 pb-12 lg:pt-52 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT — text content */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Headline */}
            <h1
              className="font-display text-fg leading-[1.05]"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
            >
              <span
                className="block"
                style={{ fontSize: "0.45em", fontWeight: 500, letterSpacing: "-0.01em", opacity: 0.5, marginBottom: "0.3em" }}
              >
                <MaskReveal lines={["I'm Sugam Anand"]} delay={0} stagger={0.045} duration={0.5} />
              </span>
              <MaskReveal lines={["A full-stack design leader"]} delay={0.18} stagger={0.06} duration={0.6} />
            </h1>

            {/* Body */}
            <div
              className="font-body text-muted leading-relaxed mt-6"
              style={{ fontSize: "1.0625rem", maxWidth: "42rem" }}
            >
              <MaskReveal
                lines={[
                  "Hands-on enough to know what great feels like, fluent enough in technology to shape how it's built, and grounded enough in people to build teams that last.",
                ]}
                delay={0.6}
                stagger={0.016}
                duration={0.5}
              />
            </div>

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
                See my work ↓
              </a>
              <a
                href="/about"
                className="px-6 py-3 border border-border bg-bg text-fg font-body font-medium text-sm hover:border-fg transition-colors"
                style={{ borderRadius: "100px" }}
              >
                Know about me →
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
            className="lg:col-span-5 order-first lg:order-none max-w-[260px] lg:max-w-[320px] mx-auto w-full"
          >
            <PhotoPlaceholder />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
