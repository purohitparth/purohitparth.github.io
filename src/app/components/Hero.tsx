"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MapPin, Mail, ArrowDown } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

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
    } else {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span style={{ color: "var(--accent-1)" }}>
      {displayed}
      <span style={{
        display: "inline-block", width: "2px", height: "1.1em",
        background: "var(--accent-1)", marginLeft: "2px",
        verticalAlign: "text-bottom", animation: "blink 1s step-start infinite",
      }} />
    </span>
  );
}

function AnimatedStat({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1400;
    const start = Date.now();
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * value));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, value]);

  return <span ref={ref}>{count}{suffix}</span>;
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
  const sectionRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 600], [0, -80]);
  const blob2Y = useTransform(scrollY, [0, 600], [0, -50]);
  const blob3Y = useTransform(scrollY, [0, 600], [0, -120]);
  const contentY = useTransform(scrollY, [0, 400], [0, -30]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
      onMouseMove={(e) => {
        const r = sectionRef.current?.getBoundingClientRect();
        if (r) setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseLeave={() => setMouse({ x: -9999, y: -9999 })}
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(var(--grid-color) 1px, transparent 1px), linear-gradient(to right, var(--grid-color) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Parallax blobs */}
        <motion.div style={{ y: blob1Y }} className="absolute top-10 left-0 w-[520px] h-[520px] rounded-full animate-blob">
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)", filter: "blur(70px)", opacity: "var(--blob-op)" }} />
        </motion.div>
        <motion.div style={{ y: blob2Y }} className="absolute top-32 right-0 w-[620px] h-[620px] rounded-full animate-blob-2">
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 70%)", filter: "blur(90px)", opacity: "var(--blob-op)" }} />
        </motion.div>
        <motion.div style={{ y: blob3Y }} className="absolute bottom-0 left-1/3 w-[420px] h-[420px] rounded-full animate-blob-3">
          <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, #a855f7 0%, transparent 70%)", filter: "blur(65px)", opacity: "var(--blob-op)" }} />
        </motion.div>

        {/* Mouse spotlight */}
        <div className="absolute inset-0 transition-opacity duration-300" style={{
          background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(0,212,255,0.06), transparent 70%)`,
        }} />
      </div>

      {/* ── Content ── */}
      <motion.div style={{ y: contentY }} className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-5"
              >
                <span className="inline-block w-2 h-2 rounded-full animate-dot" style={{ background: "var(--accent-1)" }} />
                <span className="section-badge">Available for opportunities</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-bold leading-[1.05] mb-4"
                style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", color: "var(--text-1)" }}
              >
                Hi, I&apos;m{" "}
                <span className="gradient-text">Parth</span>
                <br />
                <span className="gradient-text">Purohit</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="text-xl md:text-2xl font-medium mb-6"
                style={{ minHeight: "2rem" }}
              >
                <TypingText />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="text-base leading-relaxed mb-5 max-w-lg"
                style={{ color: "var(--text-2)" }}
              >
                Full-stack engineer with ~6 years of experience delivering end-to-end enterprise
                applications — from scalable React &amp; Next.js frontends to Node.js / Spring Boot
                APIs and cloud infrastructure on AWS. Deep expertise in Agentic AI orchestration
                with LangChain, LangGraph &amp; LangFuse, Micro Frontend Architecture, and
                production-grade CI/CD on Docker &amp; GitLab.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-1.5 mb-8 text-sm"
                style={{ color: "var(--text-3)" }}
              >
                <MapPin size={13} style={{ color: "var(--accent-1)" }} />
                <span>Tampa, FL, USA</span>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-2.5 rounded-lg text-sm font-semibold text-white relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))", boxShadow: "0 0 20px rgba(0,212,255,0.25)" }}
                >
                  View My Work
                </motion.a>
                {[
                  { href: "https://www.linkedin.com/in/purohitparth/", icon: <LinkedinIcon size={15} />, label: "LinkedIn", external: true },
                  { href: "mailto:parthpurohit215@gmail.com",          icon: <Mail size={15} />,         label: "Email",    external: false },
                  { href: "https://github.com/purohitparth",           icon: <GithubIcon size={15} />,  label: "GitHub",   external: true },
                ].map((b) => (
                  <motion.a
                    key={b.label}
                    href={b.href}
                    target={b.external ? "_blank" : undefined}
                    rel={b.external ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 glass glass-hover"
                    style={{ color: "var(--text-1)" }}
                  >
                    {b.icon}{b.label}
                  </motion.a>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85 }}
                className="flex gap-8"
              >
                {[
                  { val: 6,  suffix: "+", sub: "Years Exp"    },
                  { val: 4,  suffix: "",  sub: "Companies"    },
                  { val: 20, suffix: "+", sub: "Technologies" },
                ].map((s) => (
                  <div key={s.sub}>
                    <div className="text-2xl font-bold gradient-text-static">
                      <AnimatedStat value={s.val} suffix={s.suffix} />
                    </div>
                    <div className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{s.sub}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Profile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Rotating gradient ring */}
                <div className="absolute rounded-full" style={{
                  inset: "-4px",
                  background: "conic-gradient(var(--accent-1), var(--accent-2), var(--accent-3), var(--accent-1))",
                  borderRadius: "50%",
                  animation: "border-spin 6s linear infinite",
                  padding: "3px",
                }}>
                  <div className="w-full h-full rounded-full" style={{ background: "var(--bg)" }} />
                </div>

                {/* Glow */}
                <div className="absolute inset-0 rounded-full" style={{
                  animation: "float-glow 3s ease-in-out infinite",
                  borderRadius: "50%",
                }} />

                {/* Photo */}
                <div
                  className="relative rounded-full overflow-hidden animate-float"
                  style={{
                    width: "clamp(240px, 30vw, 340px)",
                    height: "clamp(240px, 30vw, 340px)",
                  }}
                >
                  <Image src="/parth_dp.jpg" alt="Parth Purohit" fill className="object-cover" priority />
                </div>

                {/* Floating badges */}
                {floatingBadges.map((b) => (
                  <motion.div
                    key={b.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3 + b.delay, repeat: Infinity, ease: "easeInOut", delay: b.delay }}
                    className="absolute px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap"
                    style={{
                      ...b.position,
                      background: `${b.color}22`,
                      border: `1px solid ${b.color}55`,
                      backdropFilter: "blur(12px)",
                      color: "var(--text-1)",
                    }}
                  >
                    {b.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          >
            <span className="text-xs" style={{ color: "var(--text-3)" }}>scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ArrowDown size={14} style={{ color: "var(--text-3)" }} />
            </motion.div>
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
