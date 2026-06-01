export default function Footer() {
  return (
    <footer className="w-full border-t border-border">
      <div className="px-6 py-10 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="font-display font-bold text-fg text-sm tracking-tight">SA</span>
        <p className="font-body text-xs text-muted">
          © {new Date().getFullYear()} Sugam Anand
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/sugamanand"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-muted hover:text-fg transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sugam.anand@gmail.com"
            className="font-body text-xs text-muted hover:text-fg transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
