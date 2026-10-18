import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" className="py-24 relative bg-[#07111F]">
      
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/3 right-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15 filter blur-[100px]"
        style={{ background: 'radial-gradient(circle, #2F80ED 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#22D3EE] text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            EDUCATION &amp; <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">COURSEWORK</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            Undergraduate engineering education at Lovely Professional University combining computational theory with hands-on systems development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Education Timeline / Spotlight Card */}
        <div className="max-w-4xl mx-auto">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-10 border border-[#1C3150] hover:border-[#2F80ED]/50 transition-all relative overflow-hidden"
            >
              {/* Corner Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#2F80ED]/20 text-[#22D3EE] text-xs font-mono font-semibold border border-[#2F80ED]/30">
                  {item.status}
                </span>

                <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#F59E0B]" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#22D3EE]" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Institution and Degree */}
              <div className="space-y-2 mb-6">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  {item.degree}
                </h3>
                <h4 className="font-display font-bold text-lg text-[#22D3EE]">
                  {item.institution}
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              {/* Coursework Modules Grid */}
              <div className="pt-6 border-t border-[#1C3150]">
                <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-slate-400">
                  <BookOpen className="w-4 h-4 text-[#2F80ED]" />
                  <span>KEY UNDERGRADUATE COURSEWORK</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {item.coursework.map((course, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-3 rounded-xl bg-[#07111F]/80 border border-[#1C3150] flex items-center gap-2.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                      <span className="font-mono">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
