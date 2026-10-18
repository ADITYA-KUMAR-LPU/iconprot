import React, { useState, useEffect } from 'react';
import { Trophy, Code2, Award, BookOpen, Database, Layers, Sparkles } from 'lucide-react';

export default function Achievements({ achievements }) {
  const [counts, setCounts] = useState({
    leetcode: 0,
    projects: 0,
    certs: 0
  });

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = 30;
    const steps = duration / stepTime;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const progress = stepCount / steps;
      setCounts({
        leetcode: Math.min(100, Math.floor(progress * 100)),
        projects: Math.min(5, Math.floor(progress * 5)),
        certs: Math.min(3, Math.floor(progress * 3))
      });

      if (stepCount >= steps) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const iconMap = {
    Code2: Code2,
    Award: Award,
    BookOpen: BookOpen,
    Database: Database,
    Layers: Layers,
  };

  return (
    <section id="achievements" className="py-24 relative bg-[#07111F]">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/4 w-[450px] h-[450px] rounded-full pointer-events-none opacity-15 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #2F80ED 50%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#F59E0B] text-xs font-mono mb-3">
            <Trophy className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>REAL MILESTONES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            HONORS &amp; <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">ACHIEVEMENTS</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            Quantifiable engineering outputs and formal certifications earned through dedicated problem-solving and academic rigor.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {achievements.map((ach) => {
            const IconComp = iconMap[ach.icon] || Trophy;

            // For numerical stats, render animated number
            let displayStat = ach.stat;
            if (ach.id === 'leetcode') {
              displayStat = `${counts.leetcode}+`;
            } else if (ach.id === 'projects-stat') {
              displayStat = `${counts.projects}+`;
            }

            return (
              <div
                key={ach.id}
                className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#2F80ED]/60 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#07111F] border border-[#1C3150] flex items-center justify-center text-[#22D3EE] mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <div className="font-display font-black text-3xl sm:text-4xl text-white mb-1 group-hover:text-[#22D3EE] transition-colors">
                    {displayStat}
                  </div>

                  <h3 className="font-display font-semibold text-sm text-slate-200 mb-2">
                    {ach.label}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#1C3150]/60 flex items-center gap-1.5 text-[10px] font-mono text-[#22D3EE]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22D3EE]" />
                  <span>Resume Verified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
