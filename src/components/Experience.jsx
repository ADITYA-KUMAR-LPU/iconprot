import React from 'react';
import { Compass, Calendar, Award, CheckCircle2, Terminal } from 'lucide-react';

export default function Experience({ journey }) {
  return (
    <section id="journey" className="py-24 relative bg-[#07111F]">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-15 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #8B5CF6 0%, #2F80ED 60%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#A78BFA] text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5 text-[#A78BFA]" />
            <span>PROGRESSION &amp; MILESTONES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            MY LEARNING <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">JOURNEY</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            Chronological progression of technical training, foundational engineering milestones, algorithmic problem solving, and project development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Guide Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-[#1C3150] -translate-x-1/2" />

          {/* Timeline Milestones */}
          <div className="space-y-12">
            {journey.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Beacon Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#07111F] border-2 border-[#2F80ED] flex items-center justify-center text-[#22D3EE] shadow-md shadow-[#2F80ED]/40 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22D3EE] animate-pulse" />
                  </div>

                  {/* Spacer for Desktop Alignment */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Card Content */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-8 sm:pr-8 ${isEven ? 'sm:pr-8 sm:pl-0' : 'sm:pl-8 sm:pr-0'}`}>
                    <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#2F80ED]/50 transition-all duration-300">
                      
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-[#2F80ED]/20 text-[#22D3EE] border border-[#2F80ED]/30">
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#F59E0B]">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-lg text-white mb-1">
                        {item.title}
                      </h3>
                      <span className="block text-xs font-mono text-slate-400 mb-3">
                        {item.organization}
                      </span>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Milestones Bullets */}
                      <div className="space-y-1.5 pt-3 border-t border-[#1C3150]">
                        {item.milestones.map((ms, mIdx) => (
                          <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0 mt-0.5" />
                            <span>{ms}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
