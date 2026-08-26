import React, { useState } from 'react';
import { personalData, statsData, experienceData, skillsData, achievementsData, certificationsData } from '../data/portfolioData';
import { Briefcase, Code2, Sparkles, Terminal, Cpu, CheckCircle, Award, GraduationCap, Trophy, Star } from 'lucide-react';
import avatarImg from '../assets/saurabh-avatar.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-16 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#ff2a2a]/5 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#ff2a2a]/4 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-6 sm:pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#ff2a2a]"></span>
              <span className="text-[#ff2a2a] text-xs uppercase font-mono tracking-[3px]">
                PHILOSOPHY & BACKGROUND
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight font-syne uppercase">
              ABOUT <span className="text-[#ff2a2a] italic font-normal">ME</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full w-fit">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
            <span className="text-emerald-400 text-xs font-mono tracking-wider font-semibold uppercase">
              {personalData.status}
            </span>
          </div>
        </div>

        {/* PROFILE + BIO HERO ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Avatar Card */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src={avatarImg}
                alt="Saurabh Raj Singh"
                className="w-full object-cover aspect-[4/5] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Red glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70"></div>
              <div className="absolute inset-0 bg-[#ff2a2a]/0 group-hover:bg-[#ff2a2a]/10 transition-all duration-500"></div>

              {/* Name tag at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-[#ff2a2a] text-xs font-mono uppercase tracking-[3px] mb-1">
                  {personalData.education.university.split('(')[0].trim()}
                </div>
                <h3 className="text-2xl font-black font-syne text-white">
                  {personalData.fullName}
                </h3>
                <p className="text-white/70 text-xs font-mono mt-1">
                  {personalData.title}
                </p>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-3">
              <div className="flex items-center gap-3 text-xs text-white/70 font-mono">
                <Terminal size={14} className="text-[#ff2a2a] shrink-0" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70 font-mono">
                <GraduationCap size={14} className="text-[#ff2a2a] shrink-0" />
                <span>{personalData.education.degree}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-white/70 font-mono">
                <Cpu size={14} className="text-[#ff2a2a] shrink-0" />
                <span>{personalData.education.period}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-emerald-400 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0"></span>
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Bio + Stats */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-light font-outfit leading-snug mb-6">
                "Turning <span className="text-[#ff2a2a] font-semibold underline decoration-[#ff2a2a]/40 decoration-2 underline-offset-8">complex problems</span> into elegant AI-powered solutions — from Himalayan hydrology models to national-winning FinTech platforms."
              </h3>
              <p className="text-white/70 text-base leading-relaxed font-light">
                {personalData.bio}
              </p>
            </div>

            {/* Key Stats Counter Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {statsData.map((stat, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-[#0d0d0d] border border-white/10 hover:border-[#ff2a2a]/40 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="text-2xl md:text-4xl font-black font-syne text-[#ff2a2a] group-hover:scale-105 transition-transform duration-300 origin-left">
                    {stat.value}
                  </div>
                  <div className="mt-3">
                    <div className="text-xs font-semibold text-white tracking-wide uppercase font-outfit mb-1">
                      {stat.label}
                    </div>
                    <div className="text-[10px] text-white/50 font-mono leading-tight">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications Badges */}
            {certificationsData && (
              <div className="flex flex-wrap gap-3 pt-2">
                {certificationsData.map((cert, i) => (
                  <div key={i} className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5">
                    <Award size={14} className="text-[#ff2a2a] shrink-0" />
                    <div>
                      <div className="text-xs font-semibold text-white">{cert.name}</div>
                      <div className="text-[10px] text-white/50 font-mono">{cert.issuer}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ACHIEVEMENTS SHOWCASE */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <Trophy size={22} className="text-[#ff2a2a]" />
            <h3 className="text-2xl font-extrabold font-syne uppercase">
              ACHIEVEMENTS & RECOGNITIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {achievementsData.map((ach, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#ff2a2a]/40 transition-all duration-300 group flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-[#ff2a2a] uppercase bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 rounded-full">
                    {ach.badge}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">{ach.year}</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-[#ff2a2a] transition-colors duration-300 leading-snug">
                  {ach.title}
                </h4>
                <p className="text-[11px] text-white/60 font-mono leading-relaxed">
                  <span className="text-[#ff2a2a]">{ach.venue}</span> — {ach.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* EXPERIENCE TIMELINE & TECH MATRIX */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Experience Timeline (7 cols) */}
          <div className="lg:col-span-7 bg-[#0a0a0a] rounded-2xl p-8 md:p-10 border border-white/10">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
              <h3 className="text-xl font-bold font-syne uppercase flex items-center gap-3">
                <Briefcase size={20} className="text-[#ff2a2a]" />
                EXPERIENCE & LEADERSHIP
              </h3>
              <span className="text-xs font-mono text-white/40">2024 — PRESENT</span>
            </div>

            <div className="space-y-8 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-[1px] before:bg-white/10">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-10 group">
                  <div className="absolute left-[7px] top-1.5 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-[#ff2a2a] group-hover:bg-[#ff2a2a] transition-all duration-300"></div>

                  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-2 gap-2">
                    <h4 className="text-base font-bold text-white group-hover:text-[#ff2a2a] transition-colors duration-300 leading-snug">
                      {exp.role} <span className="text-white/40 font-normal text-sm block sm:inline">@ {exp.company}</span>
                    </h4>
                    <span className="text-xs font-mono text-[#ff2a2a] bg-[#ff2a2a]/10 px-3 py-1 rounded-full w-fit shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm leading-relaxed mb-4 font-light">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                        <CheckCircle size={12} className="text-[#ff2a2a] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Tech Stack Matrix (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold font-syne uppercase mb-6 flex items-center gap-3">
                <Code2 size={20} className="text-[#ff2a2a]" />
                TECHNICAL SKILLS
              </h3>

              <div className="space-y-6">
                {skillsData.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-white/40 pb-1 border-b border-white/5">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#ff2a2a]/50 hover:bg-[#ff2a2a]/10 transition-all duration-300 flex items-center justify-between gap-3"
                        >
                          <span className="text-xs font-medium text-white/90">{skill.name}</span>
                          <span className="text-[9px] font-mono uppercase tracking-wider text-[#ff2a2a] px-1.5 py-0.5 rounded bg-black/50 border border-[#ff2a2a]/30">
                            {skill.level}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
