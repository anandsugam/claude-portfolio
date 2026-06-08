"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type PixelImageProps = {
  src: string;
  alt: string;
  /** className for the outer wrapper (sizing / rounding / aspect lives here) */
  className?: string;
  /** inline style for the outer wrapper (aspect-ratio, border-radius, etc.) */
  wrapperStyle?: React.CSSProperties;
  /** className applied to the <img> itself (object-fit, hover transforms, etc.) */
  imgClassName?: string;
  imgStyle?: React.CSSProperties;
  /** Color of the dissolving pixels — usually the surrounding background */
  pixelColor?: string;
  /** Approximate pixel block size in px (smaller = finer grid) */
  pixelSize?: number;
  /** Total time across which pixels finish dissolving */
  stagger?: number;
  /** Fade duration of an individual pixel */
  duration?: number;
  delay?: number;
};

export default function PixelImage({
  src,
  alt,
  className,
  wrapperStyle,
  imgClassName,
  imgStyle,
  pixelColor = "#FFFFFF",
  pixelSize = 30,
  stagger = 0.6,
  duration = 0.22,
  delay = 0,
}: PixelImageProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { once: true, amount: 0.3 });
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const measure = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { cols, rows, pixels } = useMemo(() => {
    const c = Math.max(1, Math.round(size.w / pixelSize));
    const r = Math.max(1, Math.round(size.h / pixelSize));
    // Random dissolve order — each pixel gets a randomized delay within the window
    const list = Array.from({ length: c * r }, () => Math.random() * stagger);
    return { cols: c, rows: r, pixels: list };
  }, [size.w, size.h, pixelSize, stagger]);

  return (
    <div ref={wrapRef} className={className} style={{ position: "relative", overflow: "hidden", ...wrapperStyle }}>
      <img src={src} alt={alt} className={imgClassName} style={imgStyle} />

      {size.w > 0 && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {pixels.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1 }}
              animate={inView ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration, delay: delay + d, ease: "easeOut" }}
              style={{ backgroundColor: pixelColor }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
