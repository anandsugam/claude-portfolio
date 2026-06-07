"use client";

import { useState, useRef, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfPreview({ src }: { src: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      setWidth(entries[0].contentRect.width);
    });
    observer.observe(containerRef.current);
    setWidth(containerRef.current.offsetWidth);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden" style={{ border: "1px solid var(--color-border)" }}>
      {/* PDF page */}
      <div ref={containerRef} className="w-full">
        {width > 0 && (
          <Document
            file={src}
            loading={null}
            error={null}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page
              pageNumber={page}
              width={width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        )}
      </div>

      {/* Controls */}
      {numPages > 0 && (
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderTop: "1px solid var(--color-border)", backgroundColor: "var(--color-card)" }}
        >
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1}
            className="flex items-center gap-1.5 font-body text-sm px-3 py-1.5 rounded-lg transition-opacity"
            style={{
              color: "var(--color-fg)",
              opacity: page <= 1 ? 0.3 : 1,
              cursor: page <= 1 ? "default" : "pointer",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Prev
          </button>

          <span className="font-body text-sm" style={{ color: "var(--color-muted)" }}>
            {page} / {numPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(numPages, p + 1))}
            disabled={page >= numPages}
            className="flex items-center gap-1.5 font-body text-sm px-3 py-1.5 rounded-lg transition-opacity"
            style={{
              color: "var(--color-fg)",
              opacity: page >= numPages ? 0.3 : 1,
              cursor: page >= numPages ? "default" : "pointer",
            }}
          >
            Next
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
