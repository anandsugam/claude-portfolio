"use client";

import { motion } from "framer-motion";

interface MaskRevealProps {
  /** Lines to reveal; words within each line rise in sequence */
  lines: string[];
  /** Delay before the first word (s) */
  delay?: number;
  /** Delay between words (s) */
  stagger?: number;
  /** Per-word travel duration (s) */
  duration?: number;
  /** Classes applied to each line wrapper */
  lineClassName?: string;
}

/**
 * Word-by-word mask reveal. Each word is clipped by an overflow-hidden
 * wrapper and rises up into place, staggered, so the sentence appears
 * to build itself.
 */
export default function MaskReveal({
  lines,
  delay = 0,
  stagger = 0.045,
  duration = 0.6,
  lineClassName = "",
}: MaskRevealProps) {
  // Total word count so we can ease the cadence across the whole sequence
  const total = lines.reduce((sum, l) => sum + l.split(" ").length, 0);
  const span = Math.max(total - 1, 1) * stagger;
  let word = 0;

  return (
    <span className="block">
      {lines.map((line, li) => {
        const words = line.split(" ");
        return (
          <span key={`${li}`} className={`block ${lineClassName}`}>
            {words.map((w, wi) => {
              const idx = word++;
              // ease-out the cumulative delay so words bunch up and
              // settle smoothly toward the end of the sequence
              const p = total > 1 ? idx / (total - 1) : 0;
              const eased = 1 - Math.pow(1 - p, 2.6);
              const wordDelay = delay + eased * span;
              return (
                <span key={`${w}-${wi}`}>
                  <span
                    className="inline-block overflow-hidden align-bottom"
                    style={{ paddingBottom: "0.14em", marginBottom: "-0.14em" }}
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ y: "115%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration,
                        delay: wordDelay,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {w}
                    </motion.span>
                  </span>
                  {wi < words.length - 1 ? " " : ""}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
