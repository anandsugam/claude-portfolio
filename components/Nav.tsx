"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-fg text-sm tracking-tight">
          SA
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#story" className="font-body text-sm text-muted hover:text-fg transition-colors">
            Story
          </Link>
          <Link href="/#work" className="font-body text-sm text-muted hover:text-fg transition-colors">
            Work
          </Link>
          <Link href="/about" className="font-body text-sm text-muted hover:text-fg transition-colors">
            About
          </Link>
          <Link
            href="/#contact"
            className="font-body text-sm text-fg border border-border px-4 py-1.5 rounded-full hover:border-fg transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
