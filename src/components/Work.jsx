import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

const Work = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'ALL WORK' },
    { id: 'web-apps', label: 'WEB APPS & AI' },
    { id: 'motion', label: '3D & MOTION' },
    { id: 'design', label: 'UI/UX & BRAND' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter(p => p.filter === activeFilter);

  return (
    <section id="work" className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-16 bg-black text-white overflow-hidden">
      
      {/* Background Subtle Red Accent Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#ff2a2a]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#ff2a2a]"></span>
              <span className="text-[#ff2a2a] text-xs uppercase font-mono tracking-[3px]">
                SELECTED ARCHIVE // 2024 — 2026
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight font-syne uppercase">
              FEATURED <span className="text-[#ff2a2a] italic font-normal">WORKS</span>
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 bg-white/[0.03] p-1.5 rounded-full border border-white/10 overflow-x-auto">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-[11px] font-mono tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === option.id
                    ? 'bg-[#ff2a2a] text-white shadow-lg shadow-[#ff2a2a]/30 font-bold'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-14">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-500 hover:border-[#ff2a2a]/50 hover:shadow-2xl hover:shadow-[#ff2a2a]/10 flex flex-col"
            >
              {/* Image Container with Zoom & Overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                {/* Badge Overlay */}
                <div className="absolute top-5 left-5 flex items-center gap-2">
                  <span className="px-3 py-1 text-[10px] font-mono font-semibold tracking-wider text-white uppercase bg-black/60 border border-white/15 backdrop-blur-md rounded-full">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 text-[10px] font-mono font-semibold tracking-wider text-[#ff2a2a] uppercase bg-[#ff2a2a]/15 border border-[#ff2a2a]/40 backdrop-blur-md rounded-full flex items-center gap-1">
                      <Sparkles size={10} />
                      FEATURED
                    </span>
                  )}
                </div>

                {/* Quick Action Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-black/40 backdrop-blur-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-6 py-3 rounded-full bg-[#ff2a2a] text-white text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 shadow-xl shadow-[#ff2a2a]/40 cursor-pointer flex items-center gap-2"
                  >
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-3">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="text-2xl md:text-3xl font-bold font-syne mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300 cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="text-white/70 text-sm leading-relaxed mb-6 line-clamp-2 font-light">
                    {project.subtitle || project.description}
                  </p>
                </div>

                {/* Card Footer: Tech Tags & Links */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[10px] font-mono text-white/60 bg-white/5 rounded border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-1 text-[10px] font-mono text-[#ff2a2a] bg-[#ff2a2a]/10 rounded border border-[#ff2a2a]/20">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#ff2a2a] transition-colors duration-300"
                        title="Live Site"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-[#ff2a2a] transition-colors duration-300"
                        title="GitHub Repository"
                      >
                        <GitHubIcon size={18} />
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;
