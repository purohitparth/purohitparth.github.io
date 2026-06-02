"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const contacts = [
  { icon: Mail,        label: "Email",    value: "parthpurohit215@gmail.com",    href: "mailto:parthpurohit215@gmail.com", color: "#00d4ff" },
  { icon: Phone,       label: "Phone",    value: "201-554-9891",                  href: "tel:+12015549891",                 color: "#6366f1" },
  { icon: LinkedinIcon,label: "LinkedIn", value: "linkedin.com/in/purohitparth",  href: "https://www.linkedin.com/in/purohitparth/", color: "#0ea5e9" },
  { icon: MapPin,      label: "Location", value: "Tampa, FL 33619, USA",          href: null,                               color: "#a855f7" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent-1)" }} />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-1)" }}>
            Let&apos;s Connect
          </h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, var(--accent-1), var(--accent-2))" }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl" style={{ color: "var(--text-2)" }}>
            Open to senior engineering roles,{" "}
            <span className="font-medium" style={{ color: "var(--text-1)" }}>AI-driven product teams</span>, and{" "}
            <span className="font-medium" style={{ color: "var(--text-1)" }}>consulting engagements</span>.
          </p>
          <p className="mt-2 text-sm" style={{ color: "var(--text-3)" }}>I typically respond within 24 hours.</p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {contacts.map((c, i) => (
            <motion.div
              key={c.label}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 2}
              whileHover={c.href ? { scale: 1.02, y: -2 } : {}}
            >
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="glass glass-hover rounded-2xl p-5 flex items-center gap-4"
                  style={{ display: "flex", textDecoration: "none" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.color}14`, border: `1px solid ${c.color}28` }}
                  >
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs mb-0.5 uppercase tracking-wider" style={{ color: "var(--text-3)" }}>{c.label}</p>
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-1)" }}>{c.value}</p>
                  </div>
                  <ExternalLink size={14} style={{ color: "var(--text-3)" }} />
                </a>
              ) : (
                <div className="glass rounded-2xl p-5 flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.color}14`, border: `1px solid ${c.color}28` }}
                  >
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs mb-0.5 uppercase tracking-wider" style={{ color: "var(--text-3)" }}>{c.label}</p>
                    <p className="text-sm font-medium truncate" style={{ color: "var(--text-1)" }}>{c.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex justify-center"
        >
          <motion.a
            href="mailto:parthpurohit215@gmail.com"
            whileHover={{ scale: 1.06, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white text-sm"
            style={{
              background: "linear-gradient(135deg, var(--accent-1) 0%, var(--accent-2) 100%)",
              boxShadow: "0 0 40px rgba(0,212,255,0.2)",
            }}
          >
            <Mail size={16} />
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
