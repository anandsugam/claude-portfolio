"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border/50 px-6">
      <nav className="max-w-7xl mx-auto h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-fg text-sm tracking-tight"
        >
          Sugam Anand
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/#work"
            className="font-body text-sm text-muted hover:text-fg transition-colors hidden sm:block"
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`font-body text-sm transition-colors hidden sm:block relative group ${
              pathname === "/about" ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            About
            <span
              className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full transition-all duration-200"
              style={{
                backgroundColor: "var(--color-fg)",
                opacity: pathname === "/about" ? 1 : 0,
                transform: pathname === "/about" ? "scaleX(1)" : "scaleX(0)",
              }}
            />
            <span
              className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full transition-all duration-200 group-hover:opacity-30 group-hover:scale-x-100 opacity-0 scale-x-0"
              style={{ backgroundColor: "var(--color-fg)" }}
            />
          </Link>
          <a
            href="https://www.linkedin.com/in/sugamanand"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:[color:#0A66C2]"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
