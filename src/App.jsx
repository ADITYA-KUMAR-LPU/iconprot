import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DataPipeline from './components/DataPipeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProblemSolving from './components/ProblemSolving';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [showGlobalResumeModal, setShowGlobalResumeModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#07111F] text-[#F8FAFC] selection:bg-[#2F80ED]/30 selection:text-[#22D3EE] font-sans">
      {/* Premium Sticky Navigation */}
      <Navbar onOpenResumeModal={() => setShowGlobalResumeModal(true)} />

      {/* Hero Section with Split Layout & Circular Profile System */}
      <Hero 
        personal={portfolioData.personal} 
        onOpenResumeModal={() => setShowGlobalResumeModal(true)} 
      />

      {/* About Section */}
      <About 
        personal={portfolioData.personal} 
        aboutCards={portfolioData.aboutCards} 
      />

      {/* Data Science Identity Section: FROM DATA TO INSIGHTS */}
      <DataPipeline 
        pipelineData={portfolioData.dataPipeline} 
      />

      {/* Technical Toolkit / Skills */}
      <Skills 
        skills={portfolioData.skills} 
      />

      {/* Featured Projects Showcase */}
      <Projects 
        projects={portfolioData.projects} 
      />

      {/* Problem Solving & DSA Architecture */}
      <ProblemSolving 
        dsaStats={portfolioData.dsaStats} 
      />

      {/* Experience / My Learning Journey */}
      <Experience 
        journey={portfolioData.journey} 
      />

      {/* Education & Coursework */}
      <Education 
        education={portfolioData.education} 
      />

      {/* Certifications & Credentials */}
      <Certifications 
        certifications={portfolioData.certifications} 
      />

      {/* Real Achievements & Metrics */}
      <Achievements 
        achievements={portfolioData.achievements} 
      />

      {/* Resume Section CTA */}
      <ResumeSection 
        portfolioData={portfolioData} 
      />

      {/* Contact Section */}
      <Contact 
        personal={portfolioData.personal} 
      />

      {/* Footer */}
      <Footer 
        personal={portfolioData.personal} 
      />

      {/* Global Resume Modal */}
      {showGlobalResumeModal && (
        <ResumeModal
          personal={portfolioData.personal}
          skills={portfolioData.skills}
          education={portfolioData.education}
          certifications={portfolioData.certifications}
          projects={portfolioData.projects}
          onClose={() => setShowGlobalResumeModal(false)}
        />
      )}
    </div>
  );
}
