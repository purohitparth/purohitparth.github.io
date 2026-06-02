"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const degrees = [
  {
    degree: "Master of Science",
    field: "Computer Science",
    school: "Stevens Institute of Technology",
    location: "Hoboken, NJ, USA",
    year: "May 2021",
    color: "#00d4ff",
    icon: "🎓",
  },
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    school: "Parul University",
    location: "Vadodara, GJ, India",
    year: "May 2019",
    color: "#6366f1",
    icon: "🏫",
  },
];

const certs = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Associate",
    date: "Aug 2022",
    color: "#f59e0b",
  },
  {
    title: "AWS Certified Developer",
    subtitle: "Associate",
    date: "Sep 2022",
    color: "#f59e0b",
  },
  {
    title: "AWS Partner: Cloud Economics Accreditation",
    subtitle: "Amazon Web Services",
    date: "Sep 2022",
    color: "#f59e0b",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    subtitle: "Foundational · Valid Dec 2024 – Dec 2027",
    date: "Dec 2024",
    color: "#f59e0b",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="education" className="py-16" style={{ background: "var(--bg-alt)" }}>
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
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4" style={{ color: "var(--text-1)" }}>
            Education &amp; Certifications
          </h2>
          <div className="h-px w-16 mx-auto" style={{ background: "linear-gradient(to right, var(--accent-2), var(--accent-3))" }} />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Degrees — 3 cols */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} style={{ color: "var(--text-3)" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--text-3)" }}>Degrees</span>
            </div>
            {degrees.map((d, i) => (
              <motion.div
                key={d.school}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
                className="glass glass-hover rounded-2xl p-6 flex gap-5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: `${d.color}12`, border: `1px solid ${d.color}25` }}
                >
                  {d.icon}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold" style={{ color: "var(--text-1)" }}>{d.degree}</h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${d.color}15`, color: d.color, border: `1px solid ${d.color}30` }}
                    >
                      {d.year}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-1" style={{ color: d.color }}>{d.field}</p>
                  <p className="text-sm" style={{ color: "var(--text-2)" }}>{d.school}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{d.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Award size={16} style={{ color: "var(--text-3)" }} />
              <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "var(--text-3)" }}>Certifications</span>
            </div>
            {certs.map((c, i) => (
              <motion.div
                key={c.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 3}
                className="glass glass-hover rounded-2xl p-5"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                  >
                    ☁️
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-tight" style={{ color: "var(--text-1)" }}>{c.title}</p>
                    <p className="text-xs mt-0.5 mb-2" style={{ color: c.color }}>{c.subtitle}</p>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${c.color}12`, color: c.color, border: `1px solid ${c.color}28` }}
                    >
                      {c.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={7}
              className="glass rounded-2xl p-5 text-center"
              style={{ border: "1px solid rgba(245,158,11,0.2)" }}
            >
              <div className="text-3xl mb-2">🏅</div>
              <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>Amazon Web Services</p>
              <p className="text-xs mt-1" style={{ color: "var(--text-3)" }}>4× AWS Certified Professional</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
