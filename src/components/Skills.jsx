import React, { useState } from 'react';
import { 
  Code, 
  Brain, 
  BarChart2, 
  Database, 
  Globe, 
  Wrench, 
  Binary, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

export default function Skills({ skills }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'programming', label: 'Programming' },
    { id: 'dataScience', label: 'Data Science & ML' },
    { id: 'dataViz', label: 'Data Visualization' },
    { id: 'database', label: 'Databases & Storage' },
    { id: 'webAndSystems', label: 'Web & Systems' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'dsa', label: 'DSA Competencies' },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#07111F]">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/3 w-[450px] h-[450px] rounded-full pointer-events-none opacity-15 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #2F80ED 0%, #8B5CF6 50%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#22D3EE] text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>VERIFIED CAPABILITIES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            TECHNICAL <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">TOOLKIT</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            Technologies, libraries, and core computing disciplines mastered through academic coursework, engineering projects, and algorithmic practice.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat.id
                  ? 'bg-[#2F80ED] text-white shadow-md shadow-[#2F80ED]/30 scale-105'
                  : 'bg-[#0B1B2E] text-slate-400 hover:text-white border border-[#1C3150] hover:border-[#2F80ED]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 1. Programming Languages */}
          {(selectedCategory === 'all' || selectedCategory === 'programming') && (
            <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#2F80ED]/50 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#2F80ED]/15 border border-[#2F80ED]/30 flex items-center justify-center text-[#2F80ED]">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#22D3EE] transition-colors">
                    Programming Languages
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Core Foundations</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {skills.programming.map((lang, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#07111F]/80 border border-[#1C3150] flex flex-col justify-between hover:border-[#2F80ED]/50 transition-colors"
                  >
                    <span className="font-display font-semibold text-white text-sm">
                      {lang.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#22D3EE] mt-1">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Data Science & Machine Learning */}
          {(selectedCategory === 'all' || selectedCategory === 'dataScience') && (
            <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#22D3EE]/50 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE]">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#22D3EE] transition-colors">
                    Data Science &amp; ML
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Modeling &amp; Inference</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.dataScience.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-[#07111F]/80 border border-[#1C3150] flex items-center justify-between w-full hover:border-[#22D3EE]/50 transition-colors"
                  >
                    <span className="font-display font-medium text-white text-sm">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#67E8F9] px-2 py-0.5 rounded bg-[#22D3EE]/10 border border-[#22D3EE]/20">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Data Visualization & Analytics */}
          {(selectedCategory === 'all' || selectedCategory === 'dataViz') && (
            <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#F59E0B]/50 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B]">
                  <BarChart2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#F59E0B] transition-colors">
                    Data Visualization
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Dashboards &amp; Reporting</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.dataViz.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2.5 rounded-xl bg-[#07111F]/80 border border-[#1C3150] flex items-center justify-between hover:border-[#F59E0B]/40 transition-colors"
                  >
                    <span className="font-display font-semibold text-white text-sm">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#FBBF24]">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Databases & Storage */}
          {(selectedCategory === 'all' || selectedCategory === 'database') && (
            <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#8B5CF6]/50 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA]">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#A78BFA] transition-colors">
                    Databases &amp; DBMS
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Relational Architecture</span>
                </div>
              </div>

              <div className="space-y-2.5">
                {skills.database.map((db, idx) => (
                  <div
                    key={idx}
                    className="px-3.5 py-2.5 rounded-xl bg-[#07111F]/80 border border-[#1C3150] flex items-center justify-between hover:border-[#8B5CF6]/40 transition-colors"
                  >
                    <span className="font-display font-semibold text-white text-sm">
                      {db.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#A78BFA]">
                      {db.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Web & Systems Programming */}
          {(selectedCategory === 'all' || selectedCategory === 'webAndSystems') && (
            <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#2F80ED]/50 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#2F80ED]/15 border border-[#2F80ED]/30 flex items-center justify-center text-[#2F80ED]">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#22D3EE] transition-colors">
                    Web &amp; Systems
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">OS Architecture &amp; Web</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.webAndSystems.map((item, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 rounded-xl bg-[#07111F]/80 border border-[#1C3150] flex items-center justify-between w-full hover:border-[#2F80ED]/40 transition-colors"
                  >
                    <span className="font-display font-medium text-white text-sm">
                      {item.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 6. Developer Tools & Environment */}
          {(selectedCategory === 'all' || selectedCategory === 'tools') && (
            <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#22D3EE]/50 transition-all group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE]">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#22D3EE] transition-colors">
                    Developer Tools
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">Workflow &amp; Versioning</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {skills.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#07111F]/80 border border-[#1C3150] flex flex-col justify-between hover:border-[#22D3EE]/40 transition-colors"
                  >
                    <span className="font-display font-semibold text-white text-sm">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      {tool.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. DSA Competencies */}
          {(selectedCategory === 'all' || selectedCategory === 'dsa') && (
            <div className="glass-card rounded-2xl p-6 border border-[#1C3150] hover:border-[#F59E0B]/50 transition-all group md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B]">
                  <Binary className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white group-hover:text-[#F59E0B] transition-colors">
                    Data Structures &amp; Algorithmic Competencies
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    Validated through 100+ LeetCode solutions &amp; coursework
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {skills.dsa.map((concept, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-xl bg-[#07111F] border border-[#1C3150] text-xs font-mono text-slate-300 hover:text-[#22D3EE] hover:border-[#2F80ED]/40 transition-all flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED]" />
                    {concept}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
