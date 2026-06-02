"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Senior Front End Developer",
    company: "Infinite Computer Solutions",
    location: "Tampa, FL",
    period: "June 2025 – Present",
    color: "#00d4ff",
    tag: "Current",
    highlights: [
      "Lead UI architecture for Verizon's Agentic AI Open Agent Platform — autonomous agent workflows powered by LangChain, LangFuse, and LangGraph.",
      "Design modular, scalable UI systems with Next.js 18, Redux Toolkit, MUI, and Micro Frontend Architecture (Webpack Module Federation).",
      "Develop agentic AI capabilities: agent configuration, prompt lifecycle management, telemetry dashboards, and real-time monitoring.",
      "Implement RBAC and secure access controls for governance across multi-environment AI platforms.",
      "Integrate Chart.js, Kendo Grid, and AG Grid for actionable performance insights.",
      "Drive frontend optimization (code splitting, memoization, lazy loading) and collaborate with Node.js / Spring Boot backend teams.",
      "Partner with UX and AI teams to design data-driven interfaces bridging LLM capabilities with enterprise workflows.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tata Consultancy Services",
    location: "Tampa, FL",
    period: "Mar 2022 – June 2025",
    color: "#6366f1",
    tag: "3 yrs",
    highlights: [
      "Led front-end development for Verizon's enterprise applications, reducing feature delivery time by ~25%.",
      "Improved page load time by ~30% and reduced bundle size using React, Next.js, Redux, Angular, and NgRx.",
      "Engineered geospatial UI solutions with LeafletJS, ArcGIS, and KonvaJS for network visualization.",
      "Integrated REST APIs for real-time data flow, reducing latency by ~20% across MySQL, Oracle, and PostgreSQL.",
      "Managed Docker-based deployments and GitLab CI/CD pipelines, reducing release downtime by ~40%.",
      "Mentored 4+ developers, improving code quality, delivery speed, and adoption of best practices.",
    ],
  },
  {
    role: "Technology Analyst",
    company: "Infosys",
    location: "Providence, RI",
    period: "Aug 2021 – Feb 2022",
    color: "#a855f7",
    tag: "6 mos",
    highlights: [
      "Developed secure, responsive banking applications using Angular 12, NgRx, HTML, CSS, and TypeScript.",
      "Built reusable, modular Angular components and services, reducing development effort by ~20%.",
      "Improved performance via lazy loading, AOT compilation, and optimized state management — cutting initial load time by ~25%.",
      "Integrated RESTful APIs with Java Spring Boot backend systems.",
      "Implemented unit and integration testing with Jasmine and Karma, increasing test coverage and reducing production defects.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Ariha Jewels",
    location: "New York, NY · On-site",
    period: "Sep 2020 – Aug 2021",
    color: "#f59e0b",
    tag: "1 yr",
    highlights: [
      "Built full-stack web application features end-to-end — from React.js UI components and client-side jQuery/HTML/CSS to RESTful APIs with Node.js & Express.js.",
      "Implemented complete CRUD functionality, driving core product features across the customer-facing jewellery platform.",
      "Wrote SQL queries, stored procedures, and database schema modifications using MySQL to support new feature additions.",
      "Developed client-side validation and dynamic presentation logic using jQuery and JavaScript per internal design standards.",
      "Managed source code and releases using Git version control; built and deployed using NetBeans IDE with Ant build tooling.",
      "Followed Waterfall methodology across Requirements, Planning, Design, and Deployment phases.",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-28" style={{ background: "#05090f" }}>
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
            Work History
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Experience
          </h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, #00d4ff, #6366f1)" }} />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "linear-gradient(to bottom, #00d4ff40, #6366f140, #a855f740, #f59e0b40, transparent)" }}
          />

          <div className="flex flex-col gap-8">
            {jobs.map((job, i) => (
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
                  style={{
                    background: `${job.color}22`,
                    border: `2px solid ${job.color}`,
                    boxShadow: `0 0 12px ${job.color}60`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: job.color }} />
                </div>

                {/* Card */}
                <div className="glass glass-hover rounded-2xl overflow-hidden">
                  {/* Card Header — clickable to expand */}
                  <button
                    className="w-full text-left p-6 flex items-start gap-4 cursor-pointer"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    aria-expanded={expanded === i}
                  >
                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: `${job.color}15`, border: `1px solid ${job.color}30` }}
                    >
                      <Briefcase size={16} style={{ color: job.color }} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold text-white">{job.role}</h3>
                        <span
                          className="text-xs px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: `${job.color}18`,
                            color: job.color,
                            border: `1px solid ${job.color}30`,
                          }}
                        >
                          {job.tag}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm" style={{ color: "#94a3b8" }}>
                        <span className="font-semibold" style={{ color: job.color }}>{job.company}</span>
                        <span>·</span>
                        <span>{job.location}</span>
                        <span>·</span>
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: expanded === i ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0 mt-1"
                    >
                      <ChevronDown size={18} style={{ color: "#64748b" }} />
                    </motion.div>
                  </button>

                  {/* Expandable Bullets */}
                  <AnimatePresence initial={false}>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                      >
                        <div
                          className="px-6 pb-6"
                          style={{ borderTop: `1px solid ${job.color}18` }}
                        >
                          <ul className="mt-4 flex flex-col gap-3">
                            {job.highlights.map((h, hi) => (
                              <motion.li
                                key={hi}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: hi * 0.06 }}
                                className="flex items-start gap-3 text-sm leading-relaxed"
                                style={{ color: "#94a3b8" }}
                              >
                                <span
                                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ background: job.color }}
                                />
                                {h}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
