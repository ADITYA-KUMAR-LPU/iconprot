import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Cpu,
  Brain,
  Code2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-3xl my-8 bg-[#0B1B2E] border border-[#2F80ED]/40 rounded-2xl shadow-2xl shadow-[#040B15] overflow-hidden text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#1C3150] bg-[#07111F]/90">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#2F80ED]/20 text-[#22D3EE] border border-[#2F80ED]/30">
              {project.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1C3150] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Title & Tagline */}
          <div>
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
              {project.title}
            </h3>
            <p className="font-mono text-xs text-[#22D3EE] mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-[#07111F] border border-[#1C3150] space-y-1.5">
            <div className="flex items-center gap-2 text-[#F59E0B] text-xs font-mono font-semibold uppercase">
              <AlertCircle className="w-4 h-4" />
              <span>THE PROBLEM</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution & Approach */}
          <div className="p-4 rounded-xl bg-[#07111F] border border-[#1C3150] space-y-1.5">
            <div className="flex items-center gap-2 text-[#22D3EE] text-xs font-mono font-semibold uppercase">
              <Lightbulb className="w-4 h-4" />
              <span>THE SOLUTION &amp; ARCHITECTURAL APPROACH</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
              {project.solution}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-[#1C3150] pt-2">
              <strong>Technical Implementation:</strong> {project.approach}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-white text-xs font-mono font-semibold uppercase">
              <Layers className="w-4 h-4 text-[#2F80ED]" />
              <span>KEY FEATURES &amp; CAPABILITIES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-2.5 rounded-lg bg-[#07111F]/70 border border-[#1C3150]">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-[#07111F] to-[#0E213A] border border-[#2F80ED]/30 space-y-1.5">
            <div className="flex items-center gap-2 text-[#A78BFA] text-xs font-mono font-semibold uppercase">
              <Brain className="w-4 h-4" />
              <span>WHAT I LEARNED &amp; ENGINEERING TAKEAWAY</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.learnings}
            </p>
          </div>

          {/* Technology Stack Chips */}
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2">
              TECHNOLOGIES EMPLOYED:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#07111F] border border-[#2F80ED]/30 text-xs font-mono text-[#22D3EE]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 border-t border-[#1C3150] bg-[#07111F] flex items-center justify-between">
          <span className="text-xs font-mono text-slate-400">
            Status: <span className="text-[#22D3EE] font-semibold">{project.status}</span>
          </span>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2F80ED] hover:bg-[#5299F7] text-white text-xs font-semibold shadow-md shadow-[#2F80ED]/30 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}
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
