import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  Layers, 
  Activity, 
  Cpu, 
  BarChart3, 
  Radio, 
  FileSearch 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCard({ project, onSelect }) {
  // Render custom data/system visual graphics based on project ID
  const renderVisualPreview = () => {
    switch (project.id) {
      case 'medai-route':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#07111F] via-[#0E213A] to-[#07111F] relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-data-grid opacity-30" />
            {/* Dijkstra Graph Nodes Mockup */}
            <div className="relative z-10 flex items-center justify-between w-full max-w-[280px]">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#2F80ED]/20 border-2 border-[#2F80ED] flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg shadow-[#2F80ED]/40">
                  SRC
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-1">Patient</span>
              </div>
              <div className="flex-1 mx-2 relative">
                <div className="h-0.5 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] relative">
                  <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-[#22D3EE] animate-ping" />
                </div>
                <div className="text-center font-mono text-[9px] text-[#22D3EE] mt-1">
                  Dijkstra O((V+E)logV)
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-[#F59E0B]/20 border-2 border-[#F59E0B] flex items-center justify-center text-[10px] font-mono font-bold text-white shadow-lg shadow-[#F59E0B]/40">
                  HOSP
                </div>
                <span className="text-[9px] font-mono text-slate-400 mt-1">Emergency</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[9px] text-slate-500">
              Graph Routing Engine
            </div>
          </div>
        );

      case 'covid19-dashboard':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#07111F] via-[#0B1E38] to-[#07111F] relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-data-grid opacity-30" />
            {/* EDA Bars & Trend Mockup */}
            <div className="relative z-10 w-full max-w-[260px] space-y-2">
              <div className="flex items-end justify-between h-20 gap-2 px-3 pt-2 bg-[#07111F]/70 border border-[#1C3150] rounded-xl">
                <div className="w-4 bg-[#2F80ED] rounded-t" style={{ height: '35%' }} />
                <div className="w-4 bg-[#22D3EE] rounded-t" style={{ height: '65%' }} />
                <div className="w-4 bg-[#8B5CF6] rounded-t" style={{ height: '90%' }} />
                <div className="w-4 bg-[#F59E0B] rounded-t" style={{ height: '50%' }} />
                <div className="w-4 bg-[#2F80ED] rounded-t" style={{ height: '75%' }} />
                <div className="w-4 bg-[#22D3EE] rounded-t" style={{ height: '40%' }} />
              </div>
              <div className="flex justify-between font-mono text-[9px] text-[#22D3EE] px-1">
                <span>Time-Series EDA</span>
                <span className="text-[#F59E0B]">Power BI &bull; Seaborn</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[9px] text-slate-500">
              Epidemiology Analytics
            </div>
          </div>
        );

      case 'virtual-memory-opt':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#07111F] via-[#0E213A] to-[#07111F] relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-data-grid opacity-30" />
            {/* Memory Page Tables Simulation */}
            <div className="relative z-10 w-full max-w-[260px] space-y-2 font-mono">
              <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                <div className="p-1.5 rounded bg-[#2F80ED]/20 border border-[#2F80ED] text-[#67E8F9]">
                  PG 0 (HIT)
                </div>
                <div className="p-1.5 rounded bg-[#F59E0B]/20 border border-[#F59E0B] text-[#FBBF24]">
                  PG 1 (FAULT)
                </div>
                <div className="p-1.5 rounded bg-[#2F80ED]/20 border border-[#2F80ED] text-[#67E8F9]">
                  PG 2 (HIT)
                </div>
                <div className="p-1.5 rounded bg-[#8B5CF6]/20 border border-[#8B5CF6] text-[#A78BFA]">
                  LRU EVICT
                </div>
              </div>
              <div className="p-2 rounded-lg bg-[#07111F]/80 border border-[#1C3150] text-[10px] text-slate-400 flex justify-between">
                <span>Page Hit Ratio: 87.4%</span>
                <span className="text-[#22D3EE]">PFF Monitored</span>
              </div>
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[9px] text-slate-500">
              C++ Systems Benchmark
            </div>
          </div>
        );

      case 'arduino-sensor':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#07111F] via-[#0B1E38] to-[#07111F] relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-data-grid opacity-30" />
            {/* Ultrasonic Radar Sweep Mockup */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative w-20 h-20 rounded-full border border-[#22D3EE]/30 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#22D3EE]/50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#22D3EE] animate-ping" />
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#F59E0B]" />
              </div>
              <div className="font-mono text-[10px] text-[#22D3EE] mt-1">
                Ultrasonic &bull; Microsecond Timing
              </div>
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[9px] text-slate-500">
              Firmware &bull; C/C++
            </div>
          </div>
        );

      case 'resume-ai-analyzer':
        return (
          <div className="w-full h-44 bg-gradient-to-br from-[#07111F] via-[#0E213A] to-[#07111F] relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-data-grid opacity-30" />
            {/* NLP Cosine Similarity Match Gauge */}
            <div className="relative z-10 w-full max-w-[260px] space-y-2">
              <div className="p-3 rounded-xl bg-[#07111F]/80 border border-[#1C3150] space-y-1.5">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-slate-300">TF-IDF Vector Sim</span>
                  <span className="text-[#22D3EE] font-bold">92.4% MATCH</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-[#1C3150] overflow-hidden">
                  <div className="w-[92%] h-full bg-gradient-to-r from-[#2F80ED] to-[#22D3EE]" />
                </div>
                <div className="flex gap-1.5 pt-1">
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#2F80ED]/20 text-[#67E8F9]">
                    Python
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#8B5CF6]/20 text-[#A78BFA]">
                    Scikit-learn
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#F59E0B]/20 text-[#FBBF24]">
                    Streamlit
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-3 font-mono text-[9px] text-slate-500">
              NLP &bull; ATS Optimizer
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-44 bg-[#0B1B2E] flex items-center justify-center">
            <Layers className="w-8 h-8 text-[#2F80ED]" />
          </div>
        );
    }
  };

  return (
    <div
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl overflow-hidden bg-[#0B1B2E] border border-[#1C3150] transition-all duration-300 hover:-translate-y-2 hover:border-[#2F80ED] hover:shadow-[0_15px_30px_-10px_rgba(7,17,31,0.9),0_0_25px_rgba(47,128,237,0.25)] flex flex-col justify-between cursor-pointer"
    >
      {/* Top Visual Preview Area with Image Zoom on Hover */}
      <div className="relative overflow-hidden border-b border-[#1C3150] group-hover:brightness-105 transition-all">
        {renderVisualPreview()}
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-[#07111F]/90 text-[#22D3EE] border border-[#2F80ED]/40 backdrop-blur-md">
            {project.badge}
          </span>
        </div>

        {/* Development Status Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#0B1B2E]/90 text-slate-300 border border-[#1C3150] backdrop-blur-md flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'Completed' ? 'bg-emerald-400' : 'bg-amber-400'}`} />
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-mono text-[#F59E0B]">
              {project.category}
            </span>
          </div>

          <h3 className="font-display font-bold text-xl text-white group-hover:text-[#22D3EE] transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#22D3EE] group-hover:translate-x-1 transition-all" />
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Problem Solved Summary Snippet */}
        <div className="p-2.5 rounded-lg bg-[#07111F]/80 border border-[#1C3150] text-[11px] text-slate-300">
          <span className="text-[#F59E0B] font-mono font-semibold block mb-0.5">Focus:</span>
          <span className="line-clamp-2">{project.problemSolved}</span>
        </div>

        {/* Technology Stack Chips */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[10px] font-mono rounded bg-[#07111F] border border-[#1C3150] text-[#94A3B8] group-hover:border-[#2F80ED]/40 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-[10px] font-mono rounded bg-[#07111F] text-slate-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Card Footer Actions */}
      <div className="px-6 py-3.5 bg-[#07111F]/60 border-t border-[#1C3150] flex items-center justify-between text-xs">
        <span className="font-mono text-[11px] text-[#2F80ED] group-hover:text-[#22D3EE] font-medium flex items-center gap-1">
          Explore Details &amp; Architecture <span>→</span>
        </span>

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-[#1C3150] transition-colors"
            title="View Code on GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        )}
      </div>

    </div>
  );
}
