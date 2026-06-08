export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full"
      style={{ backgroundColor: "#111110", borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="px-6 py-10 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <span className="font-display font-bold text-sm tracking-tight" style={{ color: "white" }}>SA</span>
        <p className="font-body text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
          © {new Date().getFullYear()} Sugam Anand
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/sugamanand"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs transition-colors hover:!text-white"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:sugam.anand@gmail.com"
            className="font-body text-xs transition-colors hover:!text-white"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
