import React from 'react';
import { 
  GraduationCap, 
  BarChart3, 
  Code2, 
  Binary, 
  Quote, 
  CheckCircle2, 
  MapPin, 
  Sparkles 
} from 'lucide-react';

export default function About({ personal, aboutCards }) {
  const iconMap = {
    GraduationCap: GraduationCap,
    BarChart3: BarChart3,
    Code2: Code2,
    Binary: Binary,
  };

  const accentBorderMap = {
    electric: 'group-hover:border-[#2F80ED]/60 group-hover:shadow-[0_0_20px_rgba(47,128,237,0.2)]',
    cyan: 'group-hover:border-[#22D3EE]/60 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]',
    violet: 'group-hover:border-[#8B5CF6]/60 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]',
    amber: 'group-hover:border-[#F59E0B]/60 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]',
  };

  const accentColorMap = {
    electric: 'text-[#2F80ED] bg-[#2F80ED]/10 border-[#2F80ED]/30',
    cyan: 'text-[#22D3EE] bg-[#22D3EE]/10 border-[#22D3EE]/30',
    violet: 'text-[#A78BFA] bg-[#8B5CF6]/10 border-[#8B5CF6]/30',
    amber: 'text-[#F59E0B] bg-[#F59E0B]/10 border-[#F59E0B]/30',
  };

  return (
    <section id="about" className="py-24 relative bg-[#07111F]">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full pointer-events-none opacity-15 filter blur-3xl"
        style={{ background: 'radial-gradient(circle, #2F80ED 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#22D3EE] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>DISCOVER MY BACKGROUND</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            ABOUT <span className="bg-gradient-to-r from-[#2F80ED] to-[#22D3EE] bg-clip-text text-transparent">ME</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Professional Story & Quote */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <span>Building at the Intersection of</span>
                <span className="text-[#22D3EE]">Data &amp; Code</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Quick Profile Summary Pills */}
              <div className="pt-4 border-t border-[#1C3150] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" />
                  <span><strong>Degree:</strong> B.Tech CSE (Current)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" />
                  <span><strong>University:</strong> LPU, Punjab</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" />
                  <span><strong>Focus:</strong> Data Science &amp; DSA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE]" />
                  <span><strong>Status:</strong> Open to Roles</span>
                </div>
              </div>
            </div>

            {/* Inspirational Quote Card */}
            <div className="relative rounded-2xl p-6 bg-gradient-to-br from-[#0B1B2E] to-[#0E213A] border border-[#1C3150] shadow-lg">
              <Quote className="w-8 h-8 text-[#2F80ED]/30 mb-2" />
              <p className="font-display italic text-base sm:text-lg text-slate-200 leading-snug">
                "{personal.quote}"
              </p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-mono text-[#F59E0B] font-semibold tracking-wider">— ADITYA KUMAR</span>
                <span className="text-slate-500 font-mono">B.Tech CSE</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Interactive Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {aboutCards.map((card, idx) => {
              const IconComponent = iconMap[card.icon] || Code2;
              const accentBorder = accentBorderMap[card.accent] || '';
              const accentColor = accentColorMap[card.accent] || '';

              return (
                <div
                  key={idx}
                  className={`group relative rounded-2xl p-6 bg-[#0B1B2E]/90 border border-[#1C3150] transition-all duration-300 hover:-translate-y-1 ${accentBorder}`}
                >
                  {/* Card Icon */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-4 transition-transform group-hover:scale-110 duration-200 ${accentColor}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Card Title & Subtitle */}
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-[#22D3EE] transition-colors">
                    {card.title}
                  </h4>
                  <span className="inline-block text-xs font-mono text-[#94A3B8] mb-3">
                    {card.subtitle}
                  </span>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Subtle Corner Glow Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-tr-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
