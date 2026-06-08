"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// TODO: Replace with your Google Form action URL and entry IDs
// Form action: https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd46vpeej2JNzGKPxt0QXWQlHJJCN5VSeDrke55-Zal1akkUA/formResponse";
const FIELD_NAME = "entry.402975658";
const FIELD_EMAIL = "entry.1111329244";
const FIELD_MESSAGE = "entry.1205636010";

function ContactModal({ onClose }: { onClose: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const body = new FormData();
      body.append(FIELD_NAME, name);
      body.append(FIELD_EMAIL, email);
      body.append(FIELD_MESSAGE, message);
      await fetch(GOOGLE_FORM_URL, { method: "POST", body, mode: "no-cors" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full font-body text-sm text-fg bg-bg border border-border rounded-xl px-4 py-3 outline-none focus:border-fg/40 transition-colors placeholder:text-muted";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-md bg-bg rounded-3xl p-8 shadow-2xl"
        style={{ border: "1px solid var(--color-border)" }}
        initial={{ opacity: 0, y: 20, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full hover:bg-card transition-colors"
          aria-label="Close"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="flex flex-col items-center text-center gap-4 py-6">
            <div className="w-12 h-12 rounded-full bg-card flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 13l4 4L19 7" stroke="var(--color-fg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="font-display font-bold text-fg text-lg">Message sent</p>
            <p className="font-body text-muted text-sm">Thanks for reaching out. I&apos;ll get back to you soon.</p>
            <button
              onClick={onClose}
              className="mt-2 px-6 py-2.5 bg-fg text-bg font-body font-medium text-sm rounded-full hover:opacity-75 transition-opacity"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display font-bold text-fg text-xl mb-1" style={{ letterSpacing: "-0.02em" }}>
              Get in touch
            </h3>
            <p className="font-body text-muted text-sm mb-6">
              I&apos;ll get back to you as soon as I can.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-medium text-muted">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-medium text-muted">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="rahul@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-body text-xs font-medium text-muted">Your Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={inputClass}
                  style={{ resize: "none" }}
                />
              </div>

              {status === "error" && (
                <p className="font-body text-xs text-red-500">Something went wrong. Please try again.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1 px-6 py-3 bg-fg text-bg font-body font-medium text-sm rounded-full hover:opacity-75 transition-opacity disabled:opacity-50"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          </>
        )}
      </motion.div>
    </div>
  );
}

export default function Contact() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="relative z-10 px-6 py-24"
        style={{ backgroundColor: "#111110" }}
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-8 lg:p-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10"
            style={{ border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <span
                className="font-body font-medium text-xs uppercase tracking-widest block mb-5"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Get in Touch
              </span>
              <h2
                className="font-display leading-[1.05]"
                style={{ color: "white", fontSize: "clamp(1.375rem, 2.5vw, 2rem)", fontWeight: 700, letterSpacing: "-0.03em" }}
              >
                Interested in working together?
              </h2>
              <p
                className="font-body leading-relaxed mt-5"
                style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem" }}
              >
                I&apos;m open to senior design leadership roles, advisory engagements, and interesting conversations about design, product, and building teams.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-col gap-3 shrink-0"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="px-8 py-4 bg-bg text-fg font-body font-medium text-sm rounded-full hover:opacity-80 transition-opacity text-center"
              >
                Contact me →
              </button>
              <a
                href="https://linkedin.com/in/sugamanand"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 font-body font-medium text-sm rounded-full transition-colors text-center"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
