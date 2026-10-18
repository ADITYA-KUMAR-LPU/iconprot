import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Navbar({ onOpenResumeModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Data Pipeline', href: '#data-pipeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'DSA', href: '#dsa' },
    { name: 'Journey', href: '#journey' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section scrollspy
      const sections = ['home', 'about', 'data-pipeline', 'skills', 'projects', 'dsa', 'journey', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07111F]/90 backdrop-blur-md border-b border-[#1C3150] shadow-lg shadow-[#040B15]/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Monogram */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2F80ED] rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#2F80ED]/20">
              <div className="w-full h-full bg-[#07111F] rounded-[9px] overflow-hidden flex items-center justify-center">
                <img 
                  src="/profile.jpg" 
                  alt="Aditya Kumar" 
                  className="w-full h-full object-cover object-[center_22%]"
                />
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-display font-bold text-base text-white tracking-tight group-hover:text-[#22D3EE] transition-colors">
                Aditya Kumar
              </span>
              <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                DATA &bull; CODE &bull; CS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#0B1B2E]/60 border border-[#1C3150]/60 rounded-full px-3 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-[#2F80ED] shadow-sm shadow-[#2F80ED]/40'
                      : 'text-slate-300 hover:text-white hover:bg-[#142948]/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/ADITYA-KUMAR-LPU"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-300 hover:text-white hover:border-[#2F80ED] transition-all"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-kumar052"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-300 hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#2F80ED] to-[#1A67D2] hover:from-[#5299F7] hover:to-[#2F80ED] text-white text-xs font-semibold shadow-md shadow-[#2F80ED]/25 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              className="p-2 rounded-lg bg-[#2F80ED] text-white text-xs font-medium"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07111F] border-b border-[#1C3150] px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-[#0B1B2E] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1C3150] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ADITYA-KUMAR-LPU"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-300"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/aditya-kumar052"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-300"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download="Aditya_Kumar_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#2F80ED] text-white text-xs font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
