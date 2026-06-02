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
      "React 18", "Next.js", "Redux Toolkit", "Angular", "NgRx",
      "Node.js", "Express.js", "LangGraph", "LangChain", "LangFuse",
      "Material UI", "Bootstrap", "Tailwind CSS", "Three.js", "LeafletJS",
      "ArcGIS", "KonvaJS", "Chart.js", "AG Grid", "Spring Boot",
    ],
  },
  {
    label: "Tools & Platforms",
    color: "#a855f7",
    items: [
      "Webpack MFE", "Docker", "AWS", "GitLab CI/CD", "Git / Bitbucket",
      "Figma", "AEM", "Postman", "Swagger", "MySQL", "VS Code", "IntelliJ",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06 },
  }),
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="skills"
      className="py-28"
      style={{ background: "linear-gradient(180deg, #05090f 0%, #080d18 50%, #05090f 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="section-badge">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#6366f1" }} />
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Tech Stack
          </h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, #6366f1, #a855f7)" }} />
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
            >
              {/* Category heading */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="h-4 w-1 rounded-full"
                  style={{ background: cat.color }}
                />
                <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: cat.color }}>
                  {cat.label}
                </h3>
                <span
                  className="h-px flex-1 max-w-xs opacity-20"
                  style={{ background: cat.color }}
                />
              </div>

              {/* Badges */}
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
                      border: `1px solid ${cat.color}28`,
                      color: "#c8d4e0",
                    }}
                    whileHover={{
                      scale: 1.07,
                      background: `${cat.color}1a`,
                      borderColor: `${cat.color}60`,
                      color: "#fff",
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

        {/* Certifications callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 glass rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6"
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-xl"
            style={{ background: "rgba(255,165,0,0.1)", border: "1px solid rgba(255,165,0,0.25)" }}
          >
            🏆
          </div>
          <div>
            <p className="text-white font-semibold mb-1">AWS Certified</p>
            <p className="text-sm" style={{ color: "#64748b" }}>
              AWS Solutions Architect – Associate (Aug 2022) &nbsp;·&nbsp; AWS Developer – Associate (Sep 2022)
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
