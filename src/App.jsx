import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC] selection:bg-[#A78BFA] selection:text-[#0A0A0F] flex flex-col font-sans">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections: Home, About, Skills, Projects, Education, Contact */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
