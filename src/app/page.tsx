import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main style={{ backgroundColor: "#05090f", minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <footer
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        className="py-8 text-center text-slate-600 text-sm"
      >
        <p>© 2025 Parth Purohit · Tampa, FL</p>
      </footer>
    </main>
  );
}
