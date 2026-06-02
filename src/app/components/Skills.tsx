"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const categories = [
  {
    label: "Languages",
    color: "#00d4ff",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3 / SCSS", "SQL", "PostgreSQL", "Python", "Java"],
  },
  {
    label: "Frameworks & Libraries",
    color: "#6366f1",
    items: [
      "React 18", "Next.js", "Redux Toolkit", "Angular", "NgRx", "RxJS",
      "Node.js", "Express.js", "LangGraph", "LangChain", "LangFuse",
      "Material UI", "Bootstrap", "Tailwind CSS", "Three.js", "LeafletJS",
      "ArcGIS", "KonvaJS", "Chart.js", "AG Grid", "Spring Boot",
    ],
  },
  {
    label: "Databases",
    color: "#22c55e",
    items: ["PostgreSQL", "MySQL", "Oracle DB", "MongoDB", "SQL Server"],
  },
  {
    label: "Tools & Platforms",
    color: "#a855f7",
    items: [
      "Webpack MFE", "Docker", "AWS", "GitLab CI/CD", "Git / Bitbucket",
      "Figma", "AEM", "Postman", "Swagger", "VS Code", "IntelliJ",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } }),
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-16" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "var(--accent-2)" }} />
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-1)" }}>Tech Stack</h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, var(--accent-2), var(--accent-3))" }} />
        </motion.div>

        <div className="flex flex-col gap-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="h-4 w-1 rounded-full" style={{ background: cat.color }} />
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: cat.color }}>{cat.label}</h3>
                <span className="h-px flex-1 max-w-xs opacity-20" style={{ background: cat.color }} />
              </div>
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={fadeUp}
                    custom={ci * 5 + si}
                    className="text-sm px-3.5 py-1.5 rounded-full font-medium cursor-default transition-all duration-200"
                    style={{
                      background: `${cat.color}0c`,
                      border: `1px solid var(--border-card)`,
                      color: "var(--text-2)",
                    }}
                    whileHover={{
                      scale: 1.07,
                      background: `${cat.color}1a`,
                      borderColor: `${cat.color}60`,
                      color: "var(--text-1)",
                      y: -2,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AWS callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
            style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.25)" }}>
            🏆
          </div>
          <div>
            <p className="font-semibold mb-1" style={{ color: "var(--text-1)" }}>AWS Certified</p>
            <p className="text-sm" style={{ color: "var(--text-3)" }}>
              Solutions Architect – Associate · Developer – Associate · Cloud Practitioner · Cloud Economics Accreditation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
