import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CaseStudyModal from "./components/CaseStudyModal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#ff2a2a] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Cinematic Scroll scrubbing Hero */}
        <Hero />

        {/* 2. Work Showcase & Case Studies */}
        <Work onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. About, Philosophy, Experience & Skills */}
        <About />

        {/* 4. Services, Deliverables & 4-Step Process */}
        <Services />

        {/* 5. Contact Form, Email Copy & Socials */}
        <Contact />
      </main>

      {/* Footer & Live Clock */}
      <Footer />

      {/* Case Study Modal Popup */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
