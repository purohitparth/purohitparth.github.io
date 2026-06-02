import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--bg)", minHeight: "100vh" }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <BackToTop />
      <footer
        className="py-8 text-center text-sm"
        style={{ borderTop: "1px solid var(--border-card)", color: "var(--text-3)" }}
      >
        <p>© 2025 Parth Purohit · Tampa, FL</p>
      </footer>
    </main>
  );
}
