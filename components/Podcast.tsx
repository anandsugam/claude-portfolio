"use client";

import { motion } from "framer-motion";

const VIDEO_ID = "AWGJPbH6mrg";
const VIDEO_URL = `https://youtu.be/${VIDEO_ID}`;
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

export default function Podcast() {
  return (
    <section
      className="px-6 py-24 relative overflow-hidden"
      style={{ backgroundColor: "#111110" }}
    >
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2
            className="font-display font-bold leading-tight"
            style={{ color: "white", fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Hear me talk about my work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <div
            className="flex flex-col lg:flex-row items-stretch gap-7 p-7 lg:p-8 mx-auto"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              maxWidth: "1016px",
              minHeight: "220px",
            }}
          >
            {/* Thumbnail — explicit 16:9 width, fills card height */}
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group shrink-0 flex items-center justify-center"
              style={{
                borderRadius: "12px",
                width: "512px",
                backgroundImage: `url(${THUMBNAIL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Play button overlay */}
              <div className="absolute inset-0 rounded-xl bg-black/25 group-hover:bg-black/10 transition-colors" />
              <div
                className="relative flex items-center justify-center"
                style={{ width: "52px", height: "52px", borderRadius: "50%", background: "white" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5.14v14l11-7-11-7z" fill="#111110" />
                </svg>
              </div>
            </a>

            {/* Episode info */}
            <div className="flex flex-col justify-center gap-4 shrink-0" style={{ width: "420px" }}>
              <div>
                <p
                  className="font-body text-xs uppercase tracking-widest mb-2"
                  style={{ color: "rgba(246,244,240,0.35)" }}
                >
                  YouTube · Featured Talk
                </p>
                <h3
                  className="font-display font-bold leading-snug mb-2"
                  style={{ color: "white", fontSize: "clamp(1.125rem, 2vw, 1.5rem)" }}
                >
                  In fintech, without domain knowledge, designers can&apos;t curate the right experience
                </h3>
              </div>

              <p
                className="font-body leading-relaxed"
                style={{ color: "rgba(246,244,240,0.6)", fontSize: "0.9375rem" }}
              >
                A conversation about why domain fluency is the design skill nobody talks about — and why user research alone isn&apos;t enough in complex product spaces like fintech.
              </p>

              <a
                href={VIDEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-body font-medium text-sm px-6 py-3 self-start hover:opacity-80 transition-opacity"
                style={{
                  background: "white",
                  color: "#111110",
                  borderRadius: "100px",
                }}
              >
                Watch now →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
