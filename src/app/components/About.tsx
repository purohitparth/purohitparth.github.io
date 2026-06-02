"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Brain, Zap, Users, RotateCcw } from "lucide-react";

const focuses = [
  {
    icon: Layers,
    title: "UI Architecture",
    desc: "Scalable Micro Frontend systems with Webpack Module Federation and React.",
    color: "#00d4ff",
    domain: "Telecom",
    backTitle: "Verizon Enterprise Platform",
    backDesc: "Architected 10+ independently deployable micro-apps via Webpack Module Federation across TCS & ICS — cutting feature delivery time by ~25% and standardising UI across multiple squads.",
  },
  {
    icon: Brain,
    title: "Agentic AI",
    desc: "LangChain, LangGraph & LangFuse-powered autonomous agent interfaces.",
    color: "#6366f1",
    domain: "Telecom · AI",
    backTitle: "Verizon AI Open Agent Platform",
    backDesc: "Built Verizon's Agentic AI platform at ICS — autonomous LLM workflows, agent configuration UI, prompt lifecycle, real-time telemetry dashboards, and multi-env RBAC governance.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Code splitting, memoization, lazy loading — sub-second load times.",
    color: "#a855f7",
    domain: "Telecom · Banking",
    backTitle: "Measurable Impact",
    backDesc: "Improved page load ~30% at Verizon, cut API latency ~20% across Oracle & PostgreSQL stacks, and reduced initial load ~25% on Citizens Bank's high-traffic banking dashboards.",
  },
  {
    icon: Users,
    title: "Team Leadership",
    desc: "Mentoring developers, driving best practices and CI/CD excellence.",
    color: "#ec4899",
    domain: "Enterprise",
    backTitle: "TCS Engineering Team",
    backDesc: "Mentored 4+ engineers through code reviews, pair programming & architecture sessions at TCS. Owned GitLab CI/CD pipelines, cutting release downtime by ~40%.",
  },
];

const domains = [
  { label: "Telecom",              icon: "📡", color: "#00d4ff" },
  { label: "Banking & Finance",    icon: "🏦", color: "#6366f1" },
  { label: "Retail / E-commerce",  icon: "🛍️", color: "#f59e0b" },
  { label: "Agentic AI / LLM",     icon: "🤖", color: "#a855f7" },
];

function FlipCard({ f, inView, i }: { f: typeof focuses[0]; inView: boolean; i: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: (i + 2) * 0.1 }}
      style={{ perspective: "1200px", height: "196px" }}
      onClick={() => setFlipped((v) => !v)}
      className="cursor-pointer"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d", position: "relative", height: "100%", width: "100%" }}
      >
        {/* ── Front ── */}
        <div
          className="glass rounded-2xl p-5 absolute inset-0 flex flex-col"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 shrink-0"
            style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
          >
            <f.icon size={18} style={{ color: f.color }} />
          </div>
          <h3 className="font-semibold mb-1 text-sm" style={{ color: "var(--text-1)" }}>{f.title}</h3>
          <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-3)" }}>{f.desc}</p>
          <p className="text-xs mt-2 flex items-center gap-1" style={{ color: f.color, opacity: 0.8 }}>
            <RotateCcw size={10} /> tap for project context
          </p>
        </div>

        {/* ── Back ── */}
        <div
          className="rounded-2xl p-5 absolute inset-0 flex flex-col"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: `${f.color}0e`,
            border: `1px solid ${f.color}30`,
          }}
        >
          <div className="flex items-center justify-between mb-2 shrink-0">
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full"
              style={{ background: `${f.color}18`, color: f.color, border: `1px solid ${f.color}30` }}
            >
              {f.domain}
            </span>
            <RotateCcw size={11} style={{ color: "var(--text-3)" }} />
          </div>
          <h3 className="font-bold text-sm mb-1.5 shrink-0" style={{ color: "var(--text-1)" }}>{f.backTitle}</h3>
          <p className="text-xs leading-relaxed flex-1 overflow-hidden" style={{ color: "var(--text-2)" }}>{f.backDesc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16" style={{ background: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent-1)" }} />
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-1)" }}>Who I Am</h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, var(--accent-1), var(--accent-2))" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-2)" }}>
              I&apos;m a{" "}
              <span className="font-medium" style={{ color: "var(--text-1)" }}>Full-Stack Software Engineer</span>{" "}
              with ~6 years of experience and a primary specialisation in front-end architecture.
              I build complete systems — from pixel-perfect React &amp; Next.js UIs to Node.js /
              Spring Boot APIs, PostgreSQL schemas, and AWS deployments. Currently leading
              UI architecture for{" "}
              <span className="font-medium" style={{ color: "var(--text-1)" }}>Verizon&apos;s Agentic AI Open Agent Platform</span>{" "}
              at Infinite Computer Solutions.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-3)" }}>
              My work spans modern web architecture and Generative AI — building modular micro-frontend
              systems that surface LLM-driven capabilities to enterprise users, backed by performant
              REST APIs and CI/CD pipelines I own end-to-end.
            </p>

            {/* Domains */}
            <div className="mb-5">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>
                Industry Domains
              </p>
              <div className="flex flex-wrap gap-2">
                {domains.map((d) => (
                  <span
                    key={d.label}
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-medium"
                    style={{
                      background: `${d.color}10`,
                      border: `1px solid ${d.color}30`,
                      color: "var(--text-2)",
                    }}
                  >
                    <span>{d.icon}</span>
                    {d.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech tags */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>
                Core Stack
              </p>
              <div className="flex flex-wrap gap-2">
                {["React 18", "Next.js", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL", "LangGraph", "AWS", "Docker"].map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--border-card)",
                      color: "var(--accent-1)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Flip cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focuses.map((f, i) => (
              <FlipCard key={f.title} f={f} inView={inView} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
