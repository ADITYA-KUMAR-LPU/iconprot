import React from 'react';
import CircularProfile from './CircularProfile';
import { 
  ArrowDown, 
  ArrowRight, 
  Download, 
  Mail, 
  ExternalLink,
  Sparkles,
  Code2
} from 'lucide-react';
import DataBackground from './DataBackground';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ personal, onOpenResumeModal }) {
// Background logic moved to DataBackground component

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#07111F]"
    >
      {/* Interactive Data Background */}
      <DataBackground />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-data-grid pointer-events-none opacity-40 z-0" />

      {/* Subtle Amber/Orange Ambient Glow on Left Side (contrasting photo's warm tones) */}
      <div 
        className="absolute -top-10 left-[5%] w-[380px] h-[380px] rounded-full pointer-events-none opacity-20 filter blur-[90px]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #FF8A3D 50%, transparent 80%)' }}
      />

      {/* Electric Blue / Cyan Ambient Glow behind Right Column */}
      <div 
        className="absolute top-1/4 right-[5%] w-[480px] h-[480px] rounded-full pointer-events-none opacity-25 filter blur-[110px]"
        style={{ background: 'radial-gradient(circle, #2F80ED 0%, #22D3EE 60%, transparent 85%)' }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Split Hero Layout: Desktop (1024px+) 2-column, Tablet/Mobile Centered or Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Text and Introduction */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            
            {/* Small Label & Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0B1B2E]/90 border border-[#2F80ED]/30 text-xs font-mono tracking-wider shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]"></span>
              </span>
              <span className="text-slate-300 font-semibold tracking-widest uppercase text-[11px]">HELLO, I'M</span>
              <span className="text-slate-500">|</span>
              <span className="text-[#22D3EE] font-medium text-[11px]">LPU B.Tech CSE</span>
            </div>

            {/* Large Heading: ADITYA KUMAR with Prominent ADITYA */}
            <h1 className="font-display font-extrabold tracking-tight text-white leading-none">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white font-black drop-shadow-sm">
                ADITYA
              </span>
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent mt-1">
                KUMAR
              </span>
            </h1>

            {/* Role Title */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-lg sm:text-xl font-medium text-slate-300">
              <span className="text-[#22D3EE] font-semibold">B.Tech CSE Student</span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="text-slate-200">Aspiring Data Scientist</span>
            </div>

            {/* Personal Brand Hashtags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              {personal.hashtags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs font-mono font-medium rounded-md bg-[#0B1B2E] border border-[#1C3150] text-[#94A3B8] hover:text-[#22D3EE] hover:border-[#2F80ED]/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Core Message */}
            <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              "{personal.tagline}"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              {/* Primary: VIEW MY WORK */}
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#2F80ED] to-[#1A67D2] hover:from-[#5299F7] hover:to-[#2F80ED] shadow-lg shadow-[#2F80ED]/25 hover:shadow-[#2F80ED]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: DOWNLOAD RESUME */}
              <a
                href={personal.resumePdf}
                download="Aditya_Kumar_Resume.pdf"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-[#0B1B2E] border border-[#1C3150] hover:border-[#2F80ED] hover:text-white hover:bg-[#0E213A] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                title="Download Aditya Kumar's Resume"
              >
                <Download className="w-4 h-4 text-[#22D3EE]" />
                <span>DOWNLOAD RESUME</span>
              </a>

              {/* Tertiary: Let's Connect */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-[#22D3EE] py-2 px-3 transition-colors group"
              >
                <span>Let's Connect</span>
                <span className="text-[#2F80ED] group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Social Icons & University Info */}
            <div className="pt-6 border-t border-[#1C3150]/80 w-full flex flex-wrap items-center justify-center lg:justify-start gap-5">
              <div className="flex items-center gap-2.5">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-400 hover:text-white hover:border-[#2F80ED] transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-400 hover:text-[#22D3EE] hover:border-[#22D3EE] transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="p-2.5 rounded-lg bg-[#0B1B2E] border border-[#1C3150] text-slate-400 hover:text-[#F59E0B] hover:border-[#F59E0B] transition-all"
                  aria-label="Send Email"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-[#1C3150] hidden sm:block" />

              <div className="text-xs text-slate-400 font-sans">
                <span className="font-semibold text-slate-200">Lovely Professional University</span>
                <span className="block text-[11px] text-slate-400">B.Tech CSE • Punjab, India</span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Large Circular Profile System */}
          <div className="lg:col-span-5 flex justify-center items-center w-full">
            <CircularProfile profileImage={personal.profileImage} />
          </div>

        </div>

        {/* SCROLL INDICATOR */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-center">
          <a
            href="#about"
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-[#22D3EE] transition-colors"
            aria-label="Scroll to explore about section"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase">SCROLL TO EXPLORE</span>
            <div className="w-7 h-10 rounded-full border border-[#1C3150] flex items-start justify-center p-1.5 group-hover:border-[#22D3EE] transition-colors">
              <div className="w-1.5 h-2.5 rounded-full bg-[#22D3EE] animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
