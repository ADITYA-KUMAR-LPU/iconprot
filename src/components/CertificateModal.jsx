import React, { useEffect } from 'react';
import { X, Award, CheckCircle2, Calendar, Building2 } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl bg-[#0B1B2E] border border-[#2F80ED]/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#1C3150] pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#2F80ED]/20 border border-[#2F80ED]/40 flex items-center justify-center text-[#22D3EE]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#F59E0B] font-semibold uppercase">
                CREDENTIAL RECORD
              </span>
              <h3 className="font-display font-bold text-lg text-white">
                {cert.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#1C3150] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Details */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-[#07111F] border border-[#1C3150] space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Issuing Organization:</span>
              <span className="text-white font-semibold">{cert.issuer}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Issue Year:</span>
              <span className="text-[#22D3EE] font-semibold">{cert.date}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-400">Recipient:</span>
              <span className="text-[#F59E0B] font-semibold">Aditya Kumar</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-mono text-slate-400 block mb-2 uppercase">
              COMPETENCIES VERIFIED:
            </span>
            <div className="space-y-2">
              {cert.skillsCovered.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#07111F]/60 border border-[#1C3150] text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-[#1C3150] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#2F80ED] hover:bg-[#5299F7] text-white text-xs font-semibold shadow-md shadow-[#2F80ED]/30 transition-all"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
