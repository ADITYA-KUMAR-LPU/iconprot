import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact({ personal }) {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted]     = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError]             = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    // Guard: warn developer if env vars are missing (will still attempt the call)
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY ||
        SERVICE_ID === 'your_service_id_here') {
      setError(
        'EmailJS is not configured yet. Please fill in your Service ID, Template ID, and Public Key in the .env file.'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    formData.name,
          email:   formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setIsSubmitting(false);
      setError(
        'Unable to send the message. Please try again or contact me directly.'
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07111F]">
      
      {/* Background Ambient Glow */}
      <div 
        className="absolute bottom-10 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none opacity-15 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #2F80ED 0%, #22D3EE 60%, transparent 80%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B1B2E] border border-[#1C3150] text-[#22D3EE] text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#22D3EE]" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            LET'S <span className="bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] bg-clip-text text-transparent">CONNECT</span>
          </h2>
          <p className="mt-4 max-w-xl text-slate-300 text-sm sm:text-base">
            Have an opportunity, project idea, or simply want to connect?
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#2F80ED] via-[#22D3EE] to-[#F59E0B] rounded-full mt-3" />
        </div>

        {/* Contact Layout: Split Left (Info) and Right (Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-[#1C3150]">
              <h3 className="font-display font-bold text-xl text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                I am actively interested in software engineering, data science, and AI internship opportunities. Feel free to reach out directly through email or social profiles.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Channel */}
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-[#07111F] border border-[#1C3150] hover:border-[#2F80ED] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#2F80ED]/15 border border-[#2F80ED]/30 flex items-center justify-center text-[#2F80ED] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] font-mono text-slate-400 block">Direct Email</span>
                    <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#22D3EE] transition-colors truncate block">
                      {personal.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Channel */}
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-[#07111F] border border-[#1C3150] hover:border-[#22D3EE] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/15 border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">LinkedIn Profile</span>
                    <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#22D3EE] transition-colors">
                      aditya-kumar052
                    </span>
                  </div>
                </a>

                {/* GitHub Channel */}
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-[#07111F] border border-[#1C3150] hover:border-[#F59E0B] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F59E0B]/15 border border-[#F59E0B]/30 flex items-center justify-center text-[#F59E0B] shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">GitHub Profile</span>
                    <span className="font-mono text-xs sm:text-sm text-white group-hover:text-[#F59E0B] transition-colors">
                      ADITYA-KUMAR-LPU
                    </span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#07111F] border border-[#1C3150]">
                  <div className="w-10 h-10 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                    <span className="font-mono text-xs sm:text-sm text-white">
                      Lovely Professional University, Punjab, India
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-[#1C3150] relative">
              
              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400 animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">
                    Message Sent! ✓
                  </h4>
                  <p className="max-w-md text-slate-300 text-sm leading-relaxed">
                    Message sent successfully! I'll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#07111F] border border-[#1C3150] text-xs font-mono text-[#22D3EE] hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    Send a Message
                  </h3>

                  {/* Error Banner */}
                  {error && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <p className="text-xs font-mono leading-relaxed">{error}</p>
                    </div>
                  )}


                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300">
                        Your Name <span className="text-[#F59E0B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-[#1C3150] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED] transition-all"
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-slate-300">
                        Email Address <span className="text-[#F59E0B]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-[#1C3150] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED] transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Subject <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-[#1C3150] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED] transition-all"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Message <span className="text-[#F59E0B]">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Aditya, I came across your portfolio and would love to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-[#07111F] border border-[#1C3150] text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2F80ED] focus:ring-1 focus:ring-[#2F80ED] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-display font-bold text-sm text-white bg-gradient-to-r from-[#2F80ED] to-[#1A67D2] hover:from-[#5299F7] hover:to-[#2F80ED] shadow-xl shadow-[#2F80ED]/30 hover:shadow-[#2F80ED]/50 transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] font-mono text-slate-500 text-center">
                    Powered by EmailJS → delivers directly to adityakumar.cse.lpu@gmail.com
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
