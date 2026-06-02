"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

const jobs = [
  {
    role: "Senior Front End Developer",
    company: "Infinite Computer Solutions  ·  Verizon",
    location: "Tampa, FL",
    period: "June 2025 – Present",
    color: "#00d4ff",
    tag: "Current",
    highlights: [
      "Serving as Front End Lead architecting Verizon's enterprise Agentic AI Open Agent Platform — a production LLM orchestration system enabling autonomous, multi-step agent workflows via LangChain, LangGraph, and LangFuse.",
      "Architect and own the full UI layer: Next.js 18, React, Redux Toolkit, MUI, and Webpack Module Federation (Micro Frontend Architecture) — enabling 10+ independently deployable micro-apps across teams.",
      "Engineer agentic AI product surfaces end-to-end: agent builder UI, prompt lifecycle management, real-time telemetry dashboards, and live monitoring — bridging LLM capabilities with enterprise-grade UX.",
      "Collaborate full-stack with Node.js and Java Spring Boot backend teams to design and optimize REST API contracts, reduce payload latency, and align on data schemas across PostgreSQL, MySQL, and Oracle — owning the full request lifecycle from UI to database.",
      "Drive frontend performance engineering (code splitting, tree shaking, memoization, lazy loading) — measurably improving Time-to-Interactive and Lighthouse scores across platform modules.",
      "Implement RBAC, secure token handling, and multi-environment access governance across the AI platform, ensuring enterprise compliance and audit readiness.",
      "Lead cross-functional collaboration with UX, AI research, and platform engineering teams; mentor junior engineers and establish frontend coding standards, PR review culture, and CI/CD best practices.",
    ],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Tata Consultancy Services  ·  Verizon",
    location: "Tampa, FL",
    period: "Mar 2022 – June 2025",
    color: "#6366f1",
    tag: "3 yrs",
    highlights: [
      "Delivered full-stack features across Verizon's enterprise web platform — owning React / Next.js / Angular frontends, RESTful API integrations, and backend data flows across Oracle, PostgreSQL, and MySQL, reducing feature delivery time by ~25%.",
      "Architected reusable component libraries and Micro Frontend modules (Webpack Module Federation) adopted across multiple squads, improving page load time by ~30% and shrinking bundle size significantly.",
      "Built large-scale Angular applications with RxJS reactive data streams, NgRx state management, and lazy-loaded feature modules — enabling highly responsive, event-driven enterprise dashboards.",
      "Led GIS-driven network visualization platform using LeafletJS, ArcGIS, and KonvaJS — rendering Verizon's live fiber optic and cell tower topology on interactive maps, enabling real-time network planning, fault detection, and field operations decision-making at scale.",
      "Designed and consumed REST APIs backed by Oracle and PostgreSQL databases — writing complex queries, optimizing indexes, and collaborating with backend engineers to reduce API response latency by ~20%.",
      "Owned Docker containerization and GitLab CI/CD pipelines for frontend and backend services — reducing release downtime by ~40% and enabling zero-downtime deployments across staging and production environments.",
      "Mentored 4+ engineers through code reviews, pair programming, and architecture walkthroughs; drove adoption of TypeScript strict mode, accessibility standards, and testing best practices.",
    ],
  },
  {
    role: "Full Stack Technology Analyst",
    company: "Infosys  ·  Citizens Bank",
    location: "Providence, RI",
    period: "Aug 2021 – Feb 2022",
    color: "#a855f7",
    tag: "6 mos",
    highlights: [
      "Built secure, high-compliance banking web applications end-to-end using Angular 12, RxJS, NgRx, and TypeScript on the frontend and Java Spring Boot REST APIs on the backend — integrating with Oracle and PostgreSQL databases to meet strict enterprise security and regulatory standards.",
      "Designed and developed a reusable Angular component library with shared services, RxJS Subjects / BehaviorSubjects, and NgRx store patterns — reducing cross-team development effort by ~20% and ensuring UI consistency across banking modules.",
      "Leveraged RxJS operators (switchMap, combineLatest, debounceTime) to build responsive, real-time data flows between Angular components and Spring Boot microservices, handling auth flows and async banking transaction pipelines backed by Oracle DB.",
      "Collaborated with Java backend engineers on Spring Boot API design — contributing to SQL schema design, stored procedure optimization, and data model alignment across Oracle and PostgreSQL datastores.",
      "Drove significant frontend performance gains via lazy loading, AOT compilation, and OnPush change detection — reducing initial load time by ~25% for high-traffic banking dashboards.",
      "Established unit and integration test coverage using Jasmine and Karma across Angular components, services, and NgRx effects, reducing production defect rate and improving release confidence.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Ariha Inc.",
    location: "New York, NY · On-site",
    period: "Sep 2020 – Aug 2021",
    color: "#f59e0b",
    tag: "1 yr",
    highlights: [
      "Built the company's customer-facing e-commerce platform from the ground up — full-stack ownership from React.js UI and responsive HTML/CSS/jQuery frontend to Node.js & Express.js RESTful API layer.",
      "Designed and implemented complete CRUD operations across product catalog, orders, and user management — writing SQL queries, stored procedures, and MySQL schema migrations for all new features.",
      "Developed robust client-side form validation, dynamic UI interactions, and presentation logic using JavaScript and jQuery, improving data integrity and reducing backend error rates.",
      "Established backend API architecture with Node.js/Express.js, defining route structure, middleware, and data models consumed by both the web frontend and internal tooling.",
      "Managed the full software delivery lifecycle using Git version control and Ant build tooling — sole developer responsible for requirements, design, development, and deployment.",
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
