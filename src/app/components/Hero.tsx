"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowDown } from "lucide-react";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const roles = [
  "Senior Front-End Engineer",
  "Full-Stack AI Engineer",
  "Agentic AI Developer",
  "GenAI Application Builder",
  "Micro Frontend Architect",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 55);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span style={{ color: "#00d4ff" }}>
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1.1em",
          background: "#00d4ff",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "blink 1s step-start infinite",
        }}
      />
    </span>
  );
}

const floatingBadges = [
  { label: "React 18 ⚛️",    color: "#00d4ff", delay: 0,    position: { top: "-16px",  right: "-18px"  } },
  { label: "Next.js 🚀",     color: "#6366f1", delay: 0.5,  position: { bottom: "-4px",left: "-24px"   } },
  { label: "AI / LLM 🤖",    color: "#a855f7", delay: 1,    position: { top: "42%",    right: "-32px"  } },
  { label: "Angular 🅰️",     color: "#e11d48", delay: 1.5,  position: { top: "8%",     left: "-28px"   } },
  { label: "Spring Boot 🍃",  color: "#22c55e", delay: 2,    position: { bottom: "22%", right: "-36px"  } },
  { label: "Node.js",        color: "#84cc16", delay: 2.5,  position: { bottom: "32%", left: "-24px"   } },
  { label: "PostgreSQL 🐘",   color: "#38bdf8", delay: 3,    position: { top: "22%",    right: "-36px"  } },
  { label: "TypeScript",     color: "#3b82f6", delay: 3.5,  position: { bottom: "8%",  right: "-28px"  } },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#05090f" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,212,255,0.8) 1px, transparent 1px), linear-gradient(to right, rgba(0,212,255,0.8) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient blobs */}
        <div
          className="animate-blob absolute top-10 left-0 w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="animate-blob-2 absolute top-32 right-0 w-[600px] h-[600px] rounded-full opacity-[0.10]"
          style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="animate-blob-3 absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", filter: "blur(60px)" }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Available tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <span
                className="inline-block w-2 h-2 rounded-full animate-dot"
                style={{ background: "#00d4ff" }}
              />
              <span className="section-badge">Available for opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-bold leading-[1.1] mb-4"
              style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text">Parth</span>
              <br />
              <span className="gradient-text">Purohit</span>
            </motion.h1>

            {/* Typing role */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-medium mb-6"
              style={{ minHeight: "2rem" }}
            >
              <TypingText />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base leading-relaxed mb-5 max-w-lg"
              style={{ color: "#94a3b8" }}
            >
              Full-stack engineer with ~6 years of experience delivering end-to-end enterprise
              applications — from scalable React &amp; Next.js frontends to Node.js / Spring Boot
              APIs and cloud infrastructure on AWS. Deep expertise in Agentic AI orchestration
              with LangChain, LangGraph &amp; LangFuse, Micro Frontend Architecture, and
              production-grade CI/CD on Docker &amp; GitLab.
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-1.5 mb-8 text-sm"
              style={{ color: "#64748b" }}
            >
              <MapPin size={13} style={{ color: "#00d4ff" }} />
              <span>Tampa, FL, USA</span>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ background: "linear-gradient(135deg, #00d4ff, #6366f1)" }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/purohitparth/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white flex items-center gap-2 transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </motion.a>
              <motion.a
                href="mailto:parthpurohit215@gmail.com"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-white flex items-center gap-2 transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,212,255,0.4)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <Mail size={15} />
                Email
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8"
            >
              {[
                { val: "6+",  sub: "Years Exp" },
                { val: "3",   sub: "Companies" },
                { val: "20+", sub: "Technologies" },
              ].map((s) => (
                <div key={s.sub}>
                  <div className="text-2xl font-bold gradient-text">{s.val}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#64748b" }}>{s.sub}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Pulse ring */}
              <div
                className="absolute animate-pulse-ring rounded-full"
                style={{
                  inset: "-6px",
                  background: "linear-gradient(135deg, #00d4ff, #6366f1)",
                  padding: "2px",
                  borderRadius: "50%",
                }}
              >
                <div className="w-full h-full rounded-full" style={{ background: "#05090f" }} />
              </div>

              {/* Photo */}
              <div
                className="relative rounded-full overflow-hidden animate-float"
                style={{
                  width: "clamp(240px, 30vw, 340px)",
                  height: "clamp(240px, 30vw, 340px)",
                  border: "2px solid rgba(0,212,255,0.45)",
                  boxShadow: "0 0 60px rgba(0,212,255,0.2), 0 0 120px rgba(99,102,241,0.12)",
                }}
              >
                <Image
                  src="/parth_dp.jpg"
                  alt="Parth Purohit"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              {floatingBadges.map((b) => (
                <motion.div
                  key={b.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + b.delay, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                  className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap"
                  style={{
                    ...b.position,
                    background: `${b.color}18`,
                    border: `1px solid ${b.color}40`,
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {b.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs" style={{ color: "#64748b" }}>scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <ArrowDown size={14} style={{ color: "#64748b" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
