"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const links = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [open, setOpen]             = useState(false);
  const [mounted, setMounted]       = useState(false);
  const [active, setActive]         = useState("");
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      style={{
        padding: scrolled ? "12px 0" : "20px 0",
        background: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-card)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Parth</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href.slice(1);
            return (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: isActive ? "var(--text-1)" : "var(--text-2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-1)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "var(--text-1)" : "var(--text-2)")}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px transition-all duration-300"
                  style={{
                    background: "var(--accent-1)",
                    width: isActive ? "100%" : "0%",
                  }}
                />
              </a>
            );
          })}

          {/* Theme toggle */}
          {mounted && (
            <motion.button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="p-2 rounded-lg transition-colors duration-200"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-card)",
                color: "var(--text-2)",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={15} /> : <Moon size={15} />}
            </motion.button>
          )}

          <a
            href="mailto:parthpurohit215@gmail.com"
            className="text-sm font-medium px-4 py-1.5 rounded-md text-white transition-all duration-200"
            style={{ background: "linear-gradient(135deg, var(--accent-1), var(--accent-2))" }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-1.5 rounded-lg"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border-card)", color: "var(--text-2)" }}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          )}
          <button
            className="flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-0.5 transition-all duration-300 origin-center"
                style={{
                  background: "var(--text-2)",
                  transform:
                    i === 0 && open ? "rotate(45deg) translateY(8px)" :
                    i === 2 && open ? "rotate(-45deg) translateY(-8px)" : "none",
                  opacity: i === 1 && open ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ background: "var(--nav-bg)", backdropFilter: "blur(24px)", overflow: "hidden" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4 border-t" style={{ borderColor: "var(--border-card)" }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--text-2)" }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a href="mailto:parthpurohit215@gmail.com" className="text-sm font-medium" style={{ color: "var(--accent-1)" }}>
                Hire Me →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
