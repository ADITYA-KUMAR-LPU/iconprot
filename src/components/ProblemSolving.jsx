import React, { useState } from 'react';
import { 
  Binary, 
  Code2, 
  ExternalLink, 
  Share2, 
  GitPullRequest, 
  Rows, 
  Zap, 
  CheckCircle2, 
  Terminal,
  Trophy
} from 'lucide-react';

export default function ProblemSolving({ dsaStats }) {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineIcons = [
    Rows,
    GitPullRequest,
    Share2,
    Zap
  ];

  return (
    <section id="dsa" className="py-24 relative bg-[#07111F]">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-10 w-[420px] h-[420px] rounded-full pointer-events-none opacity-20 filter blur-[110px]"
        style={{ background: 'radial-gradient(circle, #F59E0B 0%, #2F80ED 50%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#F59E0B] text-xs font-mono mb-3">
            <Binary className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>COMPUTATIONAL RIGOR</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            PROBLEM <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">SOLVING</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            Mastering efficient time-space complexity, recursive state exploration, and high-performance graph traversals through consistent problem-solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* DSA Highlight Banner */}
        <div className="mb-12 glass-card rounded-2xl p-6 sm:p-8 border border-[#1C3150] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F59E0B]/20 to-[#2F80ED]/20 border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B] shrink-0">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  {dsaStats.totalSolved}
                </span>
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#F59E0B]/20 text-[#FBBF24] border border-[#F59E0B]/30 font-semibold">
                  LEETCODE VERIFIED
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                Problems solved spanning Arrays, Trees, Graphs, Dijkstra, and Dynamic Programming.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://leetcode.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#07111F] border border-[#F59E0B]/40 hover:border-[#F59E0B] text-white text-xs font-mono font-medium shadow-md transition-all hover:bg-[#0E213A]"
            >
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F59E0B]" />
            </a>
            <a
              href="https://github.com/ADITYA-KUMAR-LPU"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2F80ED] hover:bg-[#5299F7] text-white text-xs font-mono font-semibold transition-all shadow-md shadow-[#2F80ED]/30"
            >
              <span>DSA Solutions Repo</span>
              <Code2 className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Visual Pipeline: Array → Tree → Graph → Algorithm */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              ALGORITHMIC EVOLUTION ARCHITECTURE
            </span>
            <h3 className="font-display font-bold text-xl text-white mt-1">
              Array <span className="text-[#2F80ED]">→</span> Tree <span className="text-[#22D3EE]">→</span> Graph <span className="text-[#F59E0B]">→</span> Algorithm
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {dsaStats.pipeline.map((item, idx) => {
              const IconComp = pipelineIcons[idx] || Zap;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#0E213A] border-[#22D3EE] shadow-lg shadow-[#22D3EE]/20 -translate-y-1'
                      : 'bg-[#0B1B2E] border-[#1C3150] hover:border-[#2F80ED]/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#07111F] border border-[#1C3150] flex items-center justify-center text-[#22D3EE]">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400">
                      PHASE 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-white mb-1">
                    {item.step}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Topics Breakdown Distribution */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#1C3150]">
          <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center justify-between">
            <span>Verified Topic Breakdown</span>
            <span className="text-xs font-mono text-[#22D3EE]">100+ Completed</span>
          </h3>

          <div className="space-y-4">
            {dsaStats.topics.map((topic, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE]" />
                    <span>{topic.name}</span>
                  </span>
                  <span className="text-[#F59E0B] font-semibold">{topic.count} Solved</span>
                </div>

                {/* Styled Progress Indicator */}
                <div className="w-full h-2 rounded-full bg-[#07111F] border border-[#1C3150] overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full transition-all duration-700"
                    style={{ width: `${topic.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
