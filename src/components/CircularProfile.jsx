import React from 'react';
import { Terminal, Database, Brain, BarChart2 } from 'lucide-react';
import adityaPhoto from '../assets/profile.jpg';

export default function CircularProfile({ profileImage }) {
  // Phrases requested:
  // DATA SCIENCE ANALYST • B.TECH CSE STUDENT • ASPIRING DATA SCIENTIST • PYTHON • DATA ANALYTICS • MACHINE LEARNING
  const rotatingPhrase = "DATA SCIENCE ANALYST • B.TECH CSE STUDENT • ASPIRING DATA SCIENTIST • PYTHON • DATA ANALYTICS • MACHINE LEARNING • ";

  // Always prioritize the bundled high-resolution photo
  const resolvedPhoto = adityaPhoto || profileImage || "/profile.jpg";

  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[460px] sm:max-w-[480px] aspect-square mx-auto">
      
      {/* Background Ambient Dual Glow: Electric Blue + Warm Amber */}
      <div 
        className="absolute -inset-4 rounded-full opacity-60 filter blur-3xl pointer-events-none transition-all duration-700"
        style={{
          background: 'radial-gradient(circle at 65% 35%, rgba(47, 128, 237, 0.45) 0%, rgba(245, 158, 11, 0.28) 55%, transparent 75%)'
        }}
      />
      <div 
        className="absolute -inset-10 rounded-full opacity-35 filter blur-2xl pointer-events-none animate-pulse-subtle"
        style={{
          background: 'radial-gradient(circle at 30% 70%, rgba(34, 211, 238, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 80%)'
        }}
      />

      {/* Layer 5: Floating Technology Symbols/Badges */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Python Badge - Top Left */}
        <div className="absolute top-[6%] left-[3%] animate-float flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1B2E]/95 border border-[#2F80ED]/50 text-[#22D3EE] text-[11px] font-mono shadow-xl backdrop-blur-md">
          <Terminal className="w-3.5 h-3.5 text-[#2F80ED]" />
          <span>Python</span>
        </div>

        {/* AI/ML Badge - Top Right */}
        <div className="absolute top-[8%] right-[4%] animate-float flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1B2E]/95 border border-[#8B5CF6]/50 text-[#A78BFA] text-[11px] font-mono shadow-xl backdrop-blur-md" style={{ animationDelay: '1.2s' }}>
          <Brain className="w-3.5 h-3.5 text-[#8B5CF6]" />
          <span>AI / ML</span>
        </div>

        {/* SQL Badge - Bottom Left */}
        <div className="absolute bottom-[10%] left-[4%] animate-float flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1B2E]/95 border border-[#22D3EE]/50 text-[#67E8F9] text-[11px] font-mono shadow-xl backdrop-blur-md" style={{ animationDelay: '2.4s' }}>
          <Database className="w-3.5 h-3.5 text-[#22D3EE]" />
          <span>SQL</span>
        </div>

        {/* Analytics Badge - Bottom Right */}
        <div className="absolute bottom-[12%] right-[3%] animate-float flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1B2E]/95 border border-[#F59E0B]/50 text-[#FBBF24] text-[11px] font-mono shadow-xl backdrop-blur-md" style={{ animationDelay: '3.6s' }}>
          <BarChart2 className="w-3.5 h-3.5 text-[#F59E0B]" />
          <span>Analytics</span>
        </div>
      </div>

      {/* Unified SVG System: Photo + Orbit Rings + Rotating Circular Text */}
      <svg
        className="w-full h-full select-none overflow-visible relative z-10"
        viewBox="0 0 500 500"
        aria-label="Aditya Kumar Profile with rotating expertise ring"
      >
        <defs>
          {/* Circular Clip Path for Photo: Radius 144px at Center (250, 250) */}
          <clipPath id="adityaAvatarClip">
            <circle cx="250" cy="250" r="144" />
          </clipPath>

          {/* Border Gradient around Photo */}
          <linearGradient id="avatarBorderGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2F80ED" />
            <stop offset="50%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          {/* Circular Path for Rotating Text: Radius 182px, Center (250, 250) */}
          <path
            id="textCirclePath"
            d="M 250, 250 m -182, 0 a 182, 182 0 1,1 364, 0 a 182, 182 0 1,1 -364, 0"
          />

          {/* Text Ring Gradient */}
          <linearGradient id="textRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22D3EE" />
            <stop offset="40%" stopColor="#5299F7" />
            <stop offset="70%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>

          {/* Glowing Ring Gradient */}
          <linearGradient id="ringGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2F80ED" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Outer Orbit Ring */}
        <circle
          cx="250"
          cy="250"
          r="234"
          fill="none"
          stroke="rgba(47, 128, 237, 0.18)"
          strokeWidth="1.2"
          strokeDasharray="4 8"
        />

        {/* Inner Orbit Ring with Nodes */}
        <circle
          cx="250"
          cy="250"
          r="212"
          fill="none"
          stroke="rgba(34, 211, 238, 0.22)"
          strokeWidth="1.2"
          strokeDasharray="6 10"
        />
        <circle cx="462" cy="250" r="3.5" fill="#22D3EE" className="animate-pulse" />
        <circle cx="38" cy="250" r="3" fill="#F59E0B" className="animate-pulse" />
        <circle cx="250" cy="38" r="3" fill="#5299F7" />

        {/* Layer 3: ROTATING TEXT RING (Smooth 28s rotation around 250, 250) */}
        <g 
          className="animate-circular-text" 
          style={{ transformOrigin: '250px 250px' }}
        >
          <text
            fill="url(#textRingGrad)"
            fontSize="10.8"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="600"
            letterSpacing="3.4px"
          >
            <textPath href="#textCirclePath" startOffset="0%">
              {rotatingPhrase}
            </textPath>
          </text>
        </g>

        {/* Layer 2: Glowing Circular Border Rings */}
        <circle
          cx="250"
          cy="250"
          r="156"
          fill="none"
          stroke="url(#ringGlowGrad)"
          strokeWidth="2.5"
          className="filter drop-shadow-[0_0_10px_rgba(47,128,237,0.6)]"
        />
        <circle
          cx="250"
          cy="250"
          r="150"
          fill="none"
          stroke="rgba(245, 158, 11, 0.35)"
          strokeWidth="1"
          strokeDasharray="3 6"
        />

        {/* Photo Background & Glowing Frame */}
        <circle
          cx="250"
          cy="250"
          r="147"
          fill="#07111F"
          stroke="url(#avatarBorderGrad)"
          strokeWidth="3.5"
          className="filter drop-shadow-[0_10px_25px_rgba(4,11,21,0.9)]"
        />

        {/* Layer 1: STATIONARY HIGH-RES PROFILE PHOTO OF ADITYA KUMAR */}
        {/* Rendered directly inside SVG, perfectly stationary at (250, 250) */}
        <image
          href={resolvedPhoto}
          xlinkHref={resolvedPhoto}
          x="105"
          y="105"
          width="290"
          height="290"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#adityaAvatarClip)"
        />
      </svg>

      {/* Floating Status Badge: "BUILD • LEARN • SOLVE" */}
      <div className="absolute -bottom-3 sm:bottom-0 z-30 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B2E]/95 border border-[#2F80ED]/60 text-slate-200 text-xs font-medium shadow-xl backdrop-blur-md hover:border-[#22D3EE] transition-all">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22D3EE] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22D3EE]" />
        </span>
        <span className="font-mono text-[11px] tracking-wider text-[#22D3EE] font-semibold">
          BUILD • LEARN • SOLVE
        </span>
      </div>

    </div>
  );
}
