"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Brain, Zap, Users } from "lucide-react";

const focuses = [
  {
    icon: Layers,
    title: "UI Architecture",
    desc: "Scalable Micro Frontend systems with Webpack Module Federation and React.",
    color: "#00d4ff",
  },
  {
    icon: Brain,
    title: "Agentic AI",
    desc: "LangChain, LangGraph & LangFuse-powered autonomous agent interfaces.",
    color: "#6366f1",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Code splitting, memoization, lazy loading — sub-second load times.",
    color: "#a855f7",
  },
  {
    icon: Users,
    title: "Team Leadership",
    desc: "Mentoring developers, driving best practices and CI/CD excellence.",
    color: "#ec4899",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28" style={{ background: "#05090f" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="mb-16 text-center"
        >
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#00d4ff" }} />
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Who I Am
          </h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, #00d4ff, #6366f1)" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Left: Story */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            custom={1}
          >
            <p className="text-lg leading-relaxed mb-5" style={{ color: "#94a3b8" }}>
              I&apos;m a{" "}
              <span className="text-white font-medium">Full-Stack Software Engineer</span>{" "}
              with ~6 years of experience and a primary specialization in front-end architecture.
              I build complete systems — from pixel-perfect React &amp; Next.js UIs to Node.js /
              Spring Boot APIs, PostgreSQL schemas, and AWS cloud deployments. Currently leading
              UI architecture for{" "}
              <span className="text-white font-medium">Verizon&apos;s Agentic AI Open Agent Platform</span>{" "}
              at Infinite Computer Solutions.
            </p>
            <p className="text-base leading-relaxed mb-5" style={{ color: "#64748b" }}>
              My work sits at the intersection of modern web architecture and Generative AI — building
              modular micro-frontend systems that surface LLM-driven capabilities to enterprise users,
              backed by performant REST APIs and CI/CD pipelines I own end-to-end.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>
              AWS certified, Docker-fluent, and comfortable across the stack — I care about
              shipping fast, mentoring teams, and engineering quality at every layer.
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["React 18", "Next.js", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL", "LangGraph", "AWS", "Docker"].map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1 rounded-full font-medium"
                  style={{
                    background: "rgba(0,212,255,0.07)",
                    border: "1px solid rgba(0,212,255,0.2)",
                    color: "#00d4ff",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Focus cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focuses.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 2}
                className="glass glass-hover rounded-2xl p-5"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}18`, border: `1px solid ${f.color}30` }}
                >
                  <f.icon size={18} style={{ color: f.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">{f.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748b" }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
