import React, { useState } from 'react';
import CertificateModal from './CertificateModal';
import { Award, Calendar, CheckCircle2, ExternalLink, Sparkles } from 'lucide-react';

export default function Certifications({ certifications }) {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative bg-[#07111F]">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute top-1/2 right-10 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15 filter blur-[100px]"
        style={{ background: 'radial-gradient(circle, #22D3EE 0%, #2F80ED 50%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#22D3EE] text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            CERTIFICATIONS &amp; <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">CREDENTIALS</span>
          </h2>
          <p className="mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
            Formal technical certifications validating proficiency in modern C++, algorithmic problem solving, and relational database systems.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-[#1C3150] hover:border-[#2F80ED]/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-[#2F80ED]/15 text-[#22D3EE] border border-[#2F80ED]/30">
                    {cert.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs font-mono text-[#F59E0B]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-display font-bold text-lg text-white group-hover:text-[#22D3EE] transition-colors mb-1">
                  {cert.title}
                </h3>
                <span className="block text-xs font-mono text-slate-400 mb-4">
                  {cert.issuer}
                </span>

                {/* Skills Covered Pills */}
                <div className="space-y-1.5 pt-3 border-t border-[#1C3150] mb-6">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setActiveCert(cert)}
                className="w-full py-2.5 rounded-xl bg-[#07111F] hover:bg-[#0E213A] border border-[#1C3150] hover:border-[#2F80ED] text-xs font-mono text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#22D3EE]" />
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* Modal */}
      {activeCert && (
        <CertificateModal
          cert={activeCert}
          onClose={() => setActiveCert(null)}
        />
      )}
    </section>
  );
}
