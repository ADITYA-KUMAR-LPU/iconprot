import React, { useState } from 'react';
import ResumeModal from './ResumeModal';
import { FileText, Download, Eye, Sparkles, ArrowRight } from 'lucide-react';

export default function ResumeSection({ portfolioData }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-20 relative bg-[#07111F] overflow-hidden">
      
      {/* Background Gradient Mesh */}
      <div 
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(47, 128, 237, 0.25) 0%, rgba(245, 158, 11, 0.15) 45%, transparent 70%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Visual Call To Action Box */}
        <div className="glass-card rounded-3xl p-8 sm:p-14 border border-[#2F80ED]/40 text-center space-y-6 relative overflow-hidden shadow-2xl shadow-[#040B15]">
          
          {/* Subtle Ambient Glow inside */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#22D3EE]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07111F] border border-[#2F80ED]/40 text-xs font-mono text-[#22D3EE]">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>PRIMARY SOURCE OF TRUTH</span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            LET'S BUILD SOMETHING <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">
              MEANINGFUL.
            </span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed">
            Explore my resume to learn more about my skills, projects and technical journey.
          </p>

          {/* Buttons: VIEW RESUME & DOWNLOAD RESUME */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {/* VIEW RESUME */}
            <button
              onClick={() => setShowModal(true)}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#2F80ED] to-[#1A67D2] hover:from-[#5299F7] hover:to-[#2F80ED] shadow-xl shadow-[#2F80ED]/30 hover:shadow-[#2F80ED]/50 hover:-translate-y-0.5 transition-all"
            >
              <Eye className="w-4 h-4 text-[#22D3EE] group-hover:scale-110 transition-transform" />
              <span>VIEW RESUME</span>
            </button>

            {/* DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-display font-semibold text-sm text-slate-200 bg-[#07111F] border border-[#1C3150] hover:border-[#F59E0B] hover:text-white hover:bg-[#0E213A] hover:-translate-y-0.5 transition-all shadow-lg"
              title="Download Aditya Kumar's Resume"
            >
              <Download className="w-4 h-4 text-[#F59E0B]" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-400">
            Aditya Kumar &bull; B.Tech CSE &bull; Lovely Professional University
          </div>

        </div>

      </div>

      {/* Interactive Resume Modal */}
      {showModal && (
        <ResumeModal
          personal={portfolioData.personal}
          skills={portfolioData.skills}
          education={portfolioData.education}
          certifications={portfolioData.certifications}
          projects={portfolioData.projects}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
}
