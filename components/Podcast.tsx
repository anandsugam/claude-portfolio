"use client";

import { motion } from "framer-motion";

const VIDEO_ID = "AWGJPbH6mrg";
const VIDEO_URL = `https://youtu.be/${VIDEO_ID}`;
const THUMBNAIL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const SPOTIFY_URL = "https://open.spotify.com/episode/5FGkl834yg7R2Ovhjq5Ajd";

export default function Podcast() {
  return (
    <section
      className="px-6 py-36 relative z-10 overflow-hidden"
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
            style={{ color: "white", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Featured Talks &amp; Podcasts
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <div
            className="flex flex-col lg:flex-row overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
            }}
          >
            {/* Thumbnail */}
            <a
              href={VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 lg:w-2/5 flex items-center"
              style={{ background: "#000", padding: "0 24px" }}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                <img
                  src={THUMBNAIL}
                  alt="Talk thumbnail"
                  className="absolute inset-0 w-full h-full"
                  style={{ objectFit: "cover", borderRadius: "6px" }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors" style={{ borderRadius: "6px" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center"
                    style={{ width: "48px", height: "48px", borderRadius: "50%", background: "white" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5.14v14l11-7-11-7z" fill="#111110" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* Content */}
            <div className="flex flex-col justify-center gap-4 p-8">
              <h3
                className="font-display font-bold leading-snug"
                style={{ color: "white", fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
              >
                In fintech, without domain knowledge, designers can&apos;t curate the right experience
              </h3>
              <p
                className="font-body leading-relaxed"
                style={{ color: "rgba(246,244,240,0.55)", fontSize: "0.875rem" }}
              >
                A conversation on scaling design teams, building fintech products, and solving complex user problems at Smallcase, Tickertape and Gojek.
              </p>

              {/* Platform CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-medium text-sm px-5 py-2.5 hover:opacity-80 transition-opacity"
                  style={{ background: "white", color: "#111110", borderRadius: "100px" }}
                >
                  {/* YouTube icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch on YouTube
                </a>
                <a
                  href={SPOTIFY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body font-medium text-sm px-5 py-2.5 hover:opacity-80 transition-opacity"
                  style={{ background: "#1DB954", color: "#000", borderRadius: "100px" }}
                >
                  {/* Spotify icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.622.622 0 11-.277-1.215c3.809-.87 7.076-.496 9.712 1.115a.622.622 0 01.207.857zm1.223-2.722a.779.779 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.779.779 0 01-.458-1.489c3.632-1.119 8.147-.578 11.238 1.326a.779.779 0 01.257 1.072zm.105-2.835C14.692 8.95 9.375 8.775 6.297 9.71a.935.935 0 11-.543-1.79c3.533-1.072 9.404-.865 13.115 1.338a.935.935 0 01-.955 1.609z" />
                  </svg>
                  Listen on Spotify
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
