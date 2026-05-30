"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
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
            href="/journey"
            className={`font-body text-sm transition-colors hidden sm:block ${
              pathname === "/journey" ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            Journey
          </Link>
          <Link
            href="/about"
            className={`font-body text-sm transition-colors hidden sm:block ${
              pathname === "/about" ? "text-fg" : "text-muted hover:text-fg"
            }`}
          >
            About
          </Link>
          <a
            href="mailto:sugam.anand@gmail.com"
            className="font-body text-sm text-fg border border-border px-4 py-1.5 hover:border-fg transition-colors"
            style={{ borderRadius: "100px" }}
          >
            Connect →
          </a>
        </div>
      </nav>
    </header>
  );
}
