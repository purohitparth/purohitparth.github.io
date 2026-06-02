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
  {
    icon: Mail,
    label: "Email",
    value: "parthpurohit215@gmail.com",
    href: "mailto:parthpurohit215@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "201-554-9891",
    href: "tel:+12015549891",
    color: "#6366f1",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/purohitparth",
    href: "https://www.linkedin.com/in/purohitparth/",
    color: "#0ea5e9",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tampa, FL 33619, USA",
    href: null,
    color: "#a855f7",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-28" style={{ background: "#05090f" }}>
      <div className="max-w-5xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#00d4ff" }} />
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Let&apos;s Connect
          </h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, #00d4ff, #6366f1)" }} />
        </motion.div>

        {/* CTA headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12"
        >
          <p className="text-lg md:text-xl" style={{ color: "#94a3b8" }}>
            Open to senior engineering roles,{" "}
            <span className="text-white font-medium">AI-driven product teams</span>, and{" "}
            <span className="text-white font-medium">consulting engagements</span>.
          </p>
          <p className="mt-2 text-sm" style={{ color: "#64748b" }}>
            I typically respond within 24 hours.
          </p>
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
                  className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 no-underline"
                  style={{ display: "flex" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${c.color}14`, border: `1px solid ${c.color}28` }}
                  >
                    <c.icon size={18} style={{ color: c.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs mb-0.5 uppercase tracking-wider" style={{ color: "#64748b" }}>{c.label}</p>
                    <p className="text-sm font-medium text-white truncate">{c.value}</p>
                  </div>
                  <ExternalLink size={14} style={{ color: "#64748b" }} />
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
                    <p className="text-xs mb-0.5 uppercase tracking-wider" style={{ color: "#64748b" }}>{c.label}</p>
                    <p className="text-sm font-medium text-white truncate">{c.value}</p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Big CTA button */}
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
              background: "linear-gradient(135deg, #00d4ff 0%, #6366f1 100%)",
              boxShadow: "0 0 40px rgba(0,212,255,0.25)",
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
