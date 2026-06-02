"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

function useTilt() {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x =  ((e.clientY - r.top)  / r.height - 0.5) * 6;
    const y = -((e.clientX - r.left) / r.width  - 0.5) * 6;
    setTilt({ rotateX: x, rotateY: y });
  };
  const onMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 });
  return { tilt, onMouseMove, onMouseLeave };
}

const jobs = [
  {
    role: "Senior Front End Developer",
    company: "Infinite Computer Solutions  ·  Verizon",
    location: "Tampa, FL",
    period: "June 2025 – Present",
    color: "#00d4ff",
    tag: "Current",
    techStack: ["Next.js 18", "React", "Redux Toolkit", "MUI", "Webpack MFE", "LangChain", "LangGraph", "LangFuse", "Node.js", "Spring Boot", "PostgreSQL"],
    highlights: [
      "Spearheading UI architecture for Verizon's Agentic AI Open Agent Platform — a production-grade LLM orchestration system enabling autonomous multi-step agent workflows, serving as the front-end technical lead across a distributed cross-functional org.",
      "Architected a Micro Frontend platform via Webpack Module Federation with React 18, Next.js & Redux Toolkit — enabling 10+ independently deployable micro-apps and eliminating cross-team delivery bottlenecks.",
      "Engineered the full agentic AI product surface from zero: agent configuration UI, prompt lifecycle console, real-time telemetry dashboards, and live monitoring — making raw LLM capabilities accessible as polished enterprise UX.",
      "Drove full-stack API collaboration with Node.js & Java Spring Boot teams — defining REST contracts, aligning PostgreSQL/MySQL/Oracle schemas, and personally owning the entire request lifecycle from React state to database.",
      "Implemented enterprise RBAC, secure token management, and multi-environment access governance — achieving audit readiness for a platform serving thousands of Verizon enterprise users.",
      "Optimised frontend performance via code splitting, tree shaking & lazy loading — measurably improving Lighthouse scores and Time-to-Interactive across all platform modules.",
      "Built engineering culture at scale: established coding standards, PR review norms & CI/CD practices; actively mentored junior engineers on React architecture and test-driven development.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tata Consultancy Services  ·  Verizon",
    location: "Tampa, FL",
    period: "Mar 2022 – June 2025",
    color: "#6366f1",
    tag: "3 yrs",
    techStack: ["React", "Next.js", "Angular", "RxJS", "NgRx", "Redux", "TypeScript", "LeafletJS", "ArcGIS", "Docker", "GitLab CI", "Oracle", "PostgreSQL"],
    highlights: [
      "Led full-stack feature delivery for Verizon's enterprise web platform — owning React/Next.js/Angular UIs, REST API integrations, and Oracle/PostgreSQL/MySQL data flows, cutting feature delivery time by ~25%.",
      "Architected Micro Frontend systems via Webpack Module Federation adopted across 5+ squads — improving page load time by ~30%, reducing bundle size, and unlocking parallel feature development at scale.",
      "Built event-driven Angular applications with RxJS reactive pipelines & NgRx state — powering complex real-time enterprise dashboards with highly responsive async data flows.",
      "Engineered a GIS-powered network visualisation platform using LeafletJS, ArcGIS & KonvaJS — rendering Verizon's live fibre-optic and cell tower topology for real-time field ops, network planning, and fault detection.",
      "Optimised full-stack API performance by redesigning REST contracts, tuning Oracle/PostgreSQL queries & indexes, and applying Redux Toolkit state management — cutting end-to-end latency by ~20%.",
      "Owned Docker containerisation & GitLab CI/CD pipelines end-to-end — cutting release downtime by ~40% and enabling zero-downtime deployments across staging and production environments.",
      "Mentored 4+ engineers through code reviews, architecture sessions & TypeScript strict-mode adoption; raised test coverage and embedded accessibility standards across the team.",
    ],
  },
  {
    role: "Technology Analyst",
    company: "Infosys  ·  Citizens Bank",
    location: "Providence, RI",
    period: "Aug 2021 – Feb 2022",
    color: "#a855f7",
    tag: "6 mos",
    techStack: ["Angular 12", "RxJS", "NgRx", "TypeScript", "Java", "Spring Boot", "Oracle DB", "PostgreSQL", "Jasmine", "Karma"],
    highlights: [
      "Built high-compliance banking applications end-to-end — Angular 12/RxJS/NgRx frontend paired with Java Spring Boot REST APIs, integrating Oracle & PostgreSQL datastores under strict PCI-DSS and enterprise security standards.",
      "Engineered a shared Angular component library with RxJS Subjects/BehaviorSubjects & NgRx store patterns — adopted across 3+ teams, reducing development effort by ~20% and unifying UI consistency.",
      "Built real-time banking data pipelines using RxJS operators (switchMap, combineLatest, debounceTime) connecting Angular UIs to Spring Boot microservices — handling auth flows and async transaction processing on Oracle DB.",
      "Collaborated with Java backend engineers on Spring Boot API design, Oracle/PostgreSQL schema optimisation, and stored procedure tuning for high-throughput transaction workloads.",
      "Drove frontend performance via lazy loading, AOT compilation & OnPush change detection — cutting initial load time by ~25% on high-traffic banking dashboards.",
      "Established Jasmine/Karma unit & integration test coverage across Angular components, services & NgRx effects — measurably reducing production defect rate and release risk.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Ariha Inc.",
    location: "New York, NY · On-site",
    period: "Sep 2020 – Aug 2021",
    color: "#f59e0b",
    tag: "1 yr",
    techStack: ["React.js", "Node.js", "Express.js", "MySQL", "jQuery", "JavaScript", "HTML/CSS", "Git"],
    highlights: [
      "Built the company's customer-facing e-commerce platform from scratch — sole developer with full-stack ownership from React.js UI and jQuery frontend to Node.js/Express.js REST API layer and MySQL database.",
      "Designed and implemented the entire backend: REST API routing, middleware, authentication, and data models; wrote SQL queries, stored procedures & schema migrations for all product, order & user management features.",
      "Engineered responsive UI interactions and robust client-side validation using JavaScript & jQuery — improving data integrity and reducing downstream backend error rates.",
      "Delivered the full SDLC as a solo engineer — requirements, architecture, development, testing, and production deployment via Git version control and Ant build tooling.",
    ],
  },
];

function JobCard({ job, i, expanded, setExpanded, inView }: {
  job: typeof jobs[0];
  i: number;
  expanded: number | null;
  setExpanded: (v: number | null) => void;
  inView: boolean;
}) {
  const { tilt, onMouseMove, onMouseLeave } = useTilt();
  const isOpen = expanded === i;

  return (
    <motion.div
      key={job.company}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className="relative sm:pl-16"
    >
      {/* Dot */}
      <div
        className="absolute left-4 top-6 w-4 h-4 rounded-full hidden sm:flex items-center justify-center"
        style={{ background: `${job.color}22`, border: `2px solid ${job.color}`, boxShadow: `0 0 12px ${job.color}60` }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
      </div>

      {/* Card with 3D tilt */}
      <motion.div
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        className="glass glass-hover rounded-2xl overflow-hidden"
      >
        <button
          className="w-full text-left p-6 flex items-start gap-4 cursor-pointer"
          onClick={() => setExpanded(isOpen ? null : i)}
          aria-expanded={isOpen}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: `${job.color}15`, border: `1px solid ${job.color}30` }}
          >
            <Briefcase size={16} style={{ color: job.color }} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold mb-1" style={{ color: "var(--text-1)" }}>{job.role}</h3>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm" style={{ color: "var(--text-2)" }}>
              <span className="font-semibold" style={{ color: job.color }}>{job.company}</span>
              <span>·</span>
              <span>{job.location}</span>
              <span>·</span>
              <span>{job.period}</span>
            </div>
          </div>

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="shrink-0 mt-1"
          >
            <ChevronDown size={18} style={{ color: "var(--text-3)" }} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-5 pb-5" style={{ borderTop: `1px solid ${job.color}18` }}>
                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-1.5 py-3 mb-1" style={{ borderBottom: `1px solid ${job.color}10` }}>
                  {job.techStack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded-md font-mono tracking-tight"
                      style={{ background: `${job.color}10`, color: job.color, border: `1px solid ${job.color}22` }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bullet rows */}
                <ul className="mt-1.5 flex flex-col gap-0">
                  {job.highlights.map((h, hi) => (
                    <motion.li
                      key={hi}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: hi * 0.055 }}
                      className="flex items-start gap-2.5 text-sm leading-snug px-2 py-1"
                      style={{ color: "var(--text-2)" }}
                    >
                      <span
                        className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: job.color, opacity: 0.7 }}
                      />
                      {h}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-16" style={{ background: "var(--bg)" }}>
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
            Work History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-1)" }}>
            Experience
          </h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, var(--accent-1), var(--accent-2))" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #00d4ff40, #6366f140, #a855f740, #f59e0b40, transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {jobs.map((job, i) => (
              <JobCard
                key={job.company}
                job={job}
                i={i}
                expanded={expanded}
                setExpanded={setExpanded}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
