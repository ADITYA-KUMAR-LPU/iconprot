import React, { useState } from 'react';
import { 
  Database, 
  Sparkles, 
  Search, 
  LineChart, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function DataPipeline({ pipelineData }) {
  const [activeStep, setActiveStep] = useState(0);

  const iconMap = {
    Database: Database,
    Sparkles: Sparkles,
    Search: Search,
    LineChart: LineChart,
    Brain: Brain,
    CheckCircle2: CheckCircle2,
  };

  return (
    <section id="data-pipeline" className="py-24 relative bg-[#07111F] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-20 filter blur-[100px]"
        style={{ background: 'radial-gradient(circle, #22D3EE 0%, #2F80ED 50%, transparent 80%)' }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#2F80ED]/30 text-[#22D3EE] text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>DATA SCIENCE WORKFLOW</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            FROM DATA <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">TO INSIGHTS</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            How I transform ambiguous, high-dimensional datasets into reliable predictive models, intuitive visual narratives, and actionable solutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Desktop Pipeline Flow Bar (Horizontal Connected Nodes) */}
        <div className="hidden lg:block mb-12">
          <div className="relative">
            
            {/* Animated Connecting Line with Pulsing Gradient */}
            <div className="absolute top-8 left-[8%] right-[8%] h-1 bg-[#1C3150] -z-0">
              <div 
                className="h-full bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] transition-all duration-500 rounded-full"
                style={{ width: `${(activeStep / (pipelineData.length - 1)) * 100}%` }}
              />
            </div>

            {/* Stages Grid */}
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {pipelineData.map((item, idx) => {
                const IconComponent = iconMap[item.icon] || Database;
                const isActive = activeStep === idx;
                const isPassed = activeStep >= idx;

                return (
                  <button
                    key={item.step}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group focus:outline-none transition-all"
                  >
                    {/* Circle Node */}
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-110 ${
                        isActive
                          ? 'bg-gradient-to-tr from-[#2F80ED] to-[#22D3EE] text-white shadow-lg shadow-[#2F80ED]/40 ring-4 ring-[#2F80ED]/20 scale-105'
                          : isPassed
                          ? 'bg-[#0B1B2E] border-2 border-[#22D3EE] text-[#22D3EE]'
                          : 'bg-[#0B1B2E] border border-[#1C3150] text-slate-400 group-hover:border-[#2F80ED]'
                      }`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Step & Title */}
                    <span className="font-mono text-[11px] text-slate-400 mt-3">
                      STEP {item.step}
                    </span>
                    <span className={`font-display font-bold text-sm tracking-wide transition-colors ${
                      isActive ? 'text-[#22D3EE]' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

        {/* Mobile / Tablet Stage Selector */}
        <div className="lg:hidden flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-8">
          {pipelineData.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Database;
            const isActive = activeStep === idx;

            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-[#2F80ED] border-[#2F80ED] text-white shadow-md shadow-[#2F80ED]/30'
                    : 'bg-[#0B1B2E] border-[#1C3150] text-slate-300'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{item.step}. {item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Spotlight Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-[#1C3150] transition-all relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Stage Title, Description & Methodology */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#2F80ED]/20 text-[#22D3EE] font-semibold border border-[#2F80ED]/30">
                  PHASE {pipelineData[activeStep].step} OF 06
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {pipelineData[activeStep].subtitle}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
                <span>{pipelineData[activeStep].title}</span>
                <span className="text-[#2F80ED] text-xl font-normal">—</span>
                <span className="text-[#22D3EE] text-xl font-medium">{pipelineData[activeStep].subtitle}</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {pipelineData[activeStep].description}
              </p>

              {/* Tools & Frameworks Used in this Phase */}
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">
                  PRIMARY TOOLKIT &amp; TECHNIQUES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {pipelineData[activeStep].tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-[#07111F] border border-[#2F80ED]/30 text-[#67E8F9]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Interactive Navigation / Stage Stepper Controls */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end space-y-4 border-t lg:border-t-0 lg:border-l border-[#1C3150] pt-6 lg:pt-0 lg:pl-8">
              <div className="text-center lg:text-right">
                <span className="text-xs font-mono text-slate-400 block">CURRENT PIPELINE PROGRESS</span>
                <span className="font-display font-black text-4xl text-white">
                  {Math.round(((activeStep + 1) / pipelineData.length) * 100)}%
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#07111F] border border-[#1C3150] text-xs font-mono text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  ← PREVIOUS
                </button>

                <button
                  disabled={activeStep === pipelineData.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(pipelineData.length - 1, prev + 1))}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-[#2F80ED] hover:bg-[#5299F7] text-white text-xs font-mono font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md shadow-[#2F80ED]/20"
                >
                  NEXT PHASE →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
