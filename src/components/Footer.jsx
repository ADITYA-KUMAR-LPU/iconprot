import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer({ personal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040B15] border-t border-[#1C3150] text-slate-400 py-12 relative overflow-hidden">
      
      {/* Subtle Ambient Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-20 rounded-full pointer-events-none opacity-20 filter blur-3xl"
        style={{ background: 'radial-gradient(circle, #2F80ED 0%, #22D3EE 60%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1C3150]/60">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-display font-black text-xl text-white tracking-tight">
              Aditya Kumar
            </span>
            <p className="text-xs font-mono text-[#22D3EE]">
              Built with curiosity, code &amp; data.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#07111F] border border-[#1C3150] text-slate-300 hover:text-white hover:border-[#2F80ED] transition-all"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#07111F] border border-[#1C3150] text-slate-300 hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-xl bg-[#07111F] border border-[#1C3150] text-slate-300 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all"
              aria-label="Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#07111F] border border-[#1C3150] text-slate-400 hover:text-white hover:border-[#2F80ED] transition-all ml-2"
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3 text-center">
          <div>
            &copy; 2026 Aditya Kumar. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>B.Tech CSE</span>
            <span>&bull;</span>
            <span>Lovely Professional University</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
