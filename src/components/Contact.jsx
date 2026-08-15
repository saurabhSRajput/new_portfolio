import React, { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Phone } from 'lucide-react';
import { getSocialIcon } from './SocialIcons';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'AI/ML Development',
    budget: "Let's Discuss",
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', service: 'AI/ML Development', budget: "Let's Discuss", message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-28 px-6 md:px-16 bg-[#040404] text-white overflow-hidden">
      
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#ff2a2a]/10 rounded-full blur-[220px] pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-20 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-[#ff2a2a]"></span>
            <span className="text-[#ff2a2a] text-xs uppercase font-mono tracking-[3px]">
              GET IN TOUCH // START A COLLABORATION
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight font-syne uppercase leading-none">
            LET'S BUILD SOMETHING <br />
            <span className="text-[#ff2a2a] italic font-normal">IMPACTFUL.</span>
          </h2>
        </div>

        {/* 2-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h3 className="text-xl font-bold font-syne uppercase mb-4 text-white">
                OPEN TO COLLABORATIONS
              </h3>
              <p className="text-white/70 text-base leading-relaxed font-light">
                Whether you're building an AI-powered product, need data science consulting, want to collaborate on a hackathon, or have a startup idea — I'd love to connect and explore how we can create something meaningful together.
              </p>
            </div>

            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10">
              <span className="text-[11px] font-mono uppercase tracking-widest text-white/40 block mb-2">
                UNIVERSITY EMAIL
              </span>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-sm font-bold font-syne text-white hover:text-[#ff2a2a] transition-colors duration-300 truncate"
                >
                  {personalData.email}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-[#ff2a2a] text-white transition-all duration-300 flex items-center gap-2 text-xs font-mono shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <><Check size={14} className="text-emerald-400" /><span>COPIED!</span></>
                  ) : (
                    <><Copy size={14} /><span>COPY</span></>
                  )}
                </button>
              </div>
            </div>

            {/* Location & Phone */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin size={18} className="text-[#ff2a2a]" />
                <span>{personalData.location}</span>
              </div>
              {personalData.phone && (
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <Phone size={18} className="text-[#ff2a2a]" />
                  <a href={`tel:${personalData.phone}`} className="hover:text-[#ff2a2a] transition-colors">
                    {personalData.phone}
                  </a>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm text-emerald-400 font-mono">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0"></span>
                <span>{personalData.status}</span>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 mb-4">
                CONNECT ON SOCIALS
              </h4>
              <div className="flex flex-wrap gap-3">
                {personalData.socials.map((social) => {
                  const Icon = getSocialIcon(social.name);
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#ff2a2a] hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] text-white/80 text-xs font-mono transition-all duration-300 flex items-center gap-2"
                    >
                      <Icon size={14} />
                      <span>{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] rounded-3xl p-8 md:p-12 border border-white/10">
            <h3 className="text-2xl font-extrabold font-syne uppercase mb-6 text-white flex items-center gap-3">
              <Sparkles size={20} className="text-[#ff2a2a]" />
              SEND A MESSAGE
            </h3>

            {submitted && (
              <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-mono flex items-center gap-3">
                <Check size={18} />
                <span>Thank you! Your message has been sent. I'll reply within 24 hours.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">YOUR NAME *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">YOUR EMAIL *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">COLLABORATION TYPE</label>
                  <select
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors cursor-pointer"
                  >
                    <option>AI/ML Development</option>
                    <option>GenAI / LLM Applications</option>
                    <option>Full-Stack Development</option>
                    <option>Product Strategy Consulting</option>
                    <option>Hackathon Collaboration</option>
                    <option>Research Collaboration</option>
                    <option>Internship / Job Opportunity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">ENGAGEMENT SCOPE</label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors cursor-pointer"
                  >
                    <option>{"Let's Discuss"}</option>
                    <option>Short-term Project (1–4 weeks)</option>
                    <option>Mid-term Project (1–3 months)</option>
                    <option>Long-term / Ongoing</option>
                    <option>Full-time Role</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-white/50 mb-2">MESSAGE *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your idea, project, or opportunity..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#ff2a2a] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-[#ff2a2a] hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-[#ff2a2a]/20 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? <span>SENDING...</span> : <><span>SEND MESSAGE</span><Send size={16} /></>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
