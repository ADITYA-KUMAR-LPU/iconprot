import React, { useEffect } from 'react';
import { X, Download, FileText, ExternalLink, Printer, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ personal, skills, education, certifications, projects, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl my-8 bg-[#0B1B2E] border border-[#2F80ED]/50 rounded-2xl shadow-2xl shadow-[#040B15] overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C3150] bg-[#07111F]">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#22D3EE]" />
            <h3 className="font-display font-bold text-lg text-white">
              Aditya Kumar — Professional Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#2F80ED] hover:bg-[#5299F7] text-white text-xs font-semibold shadow-md transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1C3150] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[75vh] overflow-y-auto bg-[#07111F]/90 font-sans text-xs sm:text-sm">
          
          {/* Header Contact Block */}
          <div className="border-b border-[#1C3150] pb-6 text-center space-y-2">
            <h1 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              ADITYA KUMAR
            </h1>
            <p className="font-mono text-[#22D3EE] font-semibold text-xs sm:text-sm">
              {personal.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-slate-300 pt-1">
              <span>{personal.location}</span>
              <span>•</span>
              <a href={`mailto:${personal.email}`} className="text-[#2F80ED] hover:underline">
                {personal.email}
              </a>
              <span>•</span>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-[#22D3EE] hover:underline">
                LinkedIn Profile
              </a>
              <span>•</span>
              <a href={personal.github} target="_blank" rel="noreferrer" className="text-[#F59E0B] hover:underline">
                GitHub Profile
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-base text-white border-b border-[#1C3150] pb-1 uppercase tracking-wider text-[#22D3EE]">
              Education
            </h2>
            {education.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between font-semibold text-white">
                  <span>{edu.degree} — {edu.institution}</span>
                  <span className="font-mono text-xs text-[#F59E0B]">{edu.period}</span>
                </div>
                <p className="text-slate-400 text-xs">{edu.description}</p>
                <div className="pt-1">
                  <span className="text-slate-400 font-mono text-[11px] block">Coursework:</span>
                  <p className="text-slate-300 text-xs font-mono">
                    {edu.coursework.join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-base text-white border-b border-[#1C3150] pb-1 uppercase tracking-wider text-[#22D3EE]">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs">
              <p>
                <strong className="text-white">Programming Languages:</strong>{' '}
                <span className="text-slate-300 font-mono">Python, C, C++, Java, HTML, CSS, JavaScript</span>
              </p>
              <p>
                <strong className="text-white">Data Science &amp; ML:</strong>{' '}
                <span className="text-slate-300 font-mono">NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch</span>
              </p>
              <p>
                <strong className="text-white">Data Visualization:</strong>{' '}
                <span className="text-slate-300 font-mono">Matplotlib, Seaborn, Power BI, Excel</span>
              </p>
              <p>
                <strong className="text-white">Databases:</strong>{' '}
                <span className="text-slate-300 font-mono">DBMS, MySQL, SQLite</span>
              </p>
              <p>
                <strong className="text-white">Developer Tools &amp; OS:</strong>{' '}
                <span className="text-slate-300 font-mono">Git, GitHub, Docker, VS Code, Operating Systems, Linux / Ubuntu</span>
              </p>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="font-display font-bold text-base text-white border-b border-[#1C3150] pb-1 uppercase tracking-wider text-[#22D3EE]">
              Featured Projects
            </h2>
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex flex-wrap items-center justify-between font-semibold text-white">
                  <span>{proj.title} <span className="font-mono text-xs text-slate-400">({proj.badge})</span></span>
                  <span className="font-mono text-xs text-[#22D3EE]">{proj.technologies.join(', ')}</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">{proj.description}</p>
                <ul className="list-disc list-inside text-slate-400 text-xs pl-2 space-y-0.5">
                  {proj.features.slice(0, 2).map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications & Honors */}
          <div className="space-y-3">
            <h2 className="font-display font-bold text-base text-white border-b border-[#1C3150] pb-1 uppercase tracking-wider text-[#22D3EE]">
              Certifications &amp; Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2 rounded bg-[#0B1B2E] border border-[#1C3150]">
                <strong className="text-white block">100+ LeetCode Problems Solved</strong>
                <span className="text-slate-400 font-mono text-[11px]">Arrays, Trees, Graphs, Dijkstra, DP</span>
              </div>
              {certifications.map((cert) => (
                <div key={cert.id} className="p-2 rounded bg-[#0B1B2E] border border-[#1C3150]">
                  <strong className="text-white block">{cert.title}</strong>
                  <span className="text-slate-400 font-mono text-[11px]">{cert.issuer} ({cert.date})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#1C3150] bg-[#07111F] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Aditya Kumar &bull; Lovely Professional University
          </span>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2F80ED] hover:bg-[#5299F7] text-white text-xs font-semibold shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#0B1B2E] border border-[#1C3150] text-xs font-mono text-slate-300 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
