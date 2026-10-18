import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Sparkles, FolderGit2 } from 'lucide-react';

export default function Projects({ projects }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'datascience', label: 'Data Science & AI' },
    { id: 'algorithms', label: 'Algorithms & Systems' },
    { id: 'embedded', label: 'IoT & Embedded' },
  ];

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.filterCategory === selectedFilter);

  return (
    <section id="projects" className="py-24 relative bg-[#07111F]">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute bottom-1/4 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-20 filter blur-[110px]"
        style={{ background: 'radial-gradient(circle, #2F80ED 0%, #22D3EE 60%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#22D3EE] text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            FEATURED <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">PROJECTS</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            Real software systems, algorithms, and analytical pipelines engineered with rigorous architecture, practical constraints, and measurable problem-solving.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-[#2F80ED] to-[#1A67D2] text-white shadow-lg shadow-[#2F80ED]/30 scale-105'
                  : 'bg-[#0B1B2E] text-slate-400 hover:text-white border border-[#1C3150] hover:border-[#2F80ED]/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

      </div>

      {/* In-Depth Project Detail Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
}
