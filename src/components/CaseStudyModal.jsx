import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, ArrowUpRight, Award } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';

const CaseStudyModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl transition-all duration-300 animate-fadeIn">
      
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Content Window */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl z-10 p-6 md:p-10 text-white scrollbar-thin">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8 sticky top-0 bg-[#0d0d0d]/90 backdrop-blur-md z-20 -mt-2 pt-2">
          <div>
            <span className="text-[#ff2a2a] text-[11px] font-mono tracking-[2px] uppercase block mb-1">
              Case Study // {project.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold font-syne text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Hero Image Preview */}
        <div className="relative rounded-xl overflow-hidden mb-10 border border-white/10 group">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-80"></div>
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] font-mono bg-black/60 border border-white/10 rounded-full text-white/90 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-[#ff2a2a]/20"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight size={14} />
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 border border-white/10 transition-all duration-300"
                >
                  <GitHubIcon size={15} />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Project Meta Metrics Grid */}
        {project.metrics && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 flex items-center justify-center text-[#ff2a2a] shrink-0">
                  <Award size={18} />
                </div>
                <span className="text-xs md:text-sm font-medium text-white/90 leading-tight">
                  {metric}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Detailed Case Study Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          {/* Left Column: Overview & Challenge */}
          <div className="md:col-span-2 space-y-8">
            
            <div>
              <h3 className="text-xs font-mono text-[#ff2a2a] tracking-widest uppercase mb-3">
                01 // PROJECT OVERVIEW
              </h3>
              <p className="text-white/80 leading-relaxed text-sm md:text-base font-light">
                {caseStudy?.overview || project.description}
              </p>
            </div>

            {caseStudy?.challenge && (
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#ff2a2a]/10 to-transparent border border-[#ff2a2a]/20">
                <h3 className="text-xs font-mono text-[#ff2a2a] tracking-widest uppercase mb-2">
                  02 // THE CHALLENGE
                </h3>
                <p className="text-white/90 text-sm leading-relaxed font-light">
                  {caseStudy.challenge}
                </p>
              </div>
            )}

            {caseStudy?.solution && (
              <div>
                <h3 className="text-xs font-mono text-[#ff2a2a] tracking-widest uppercase mb-3">
                  03 // ARCHITECTURE & SOLUTION
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base font-light">
                  {caseStudy.solution}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Key Deliverables & Metadata */}
          <div className="space-y-6">
            
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">Role</span>
                <span className="text-sm font-semibold text-white">{project.role || "Lead Developer"}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">Year</span>
                <span className="text-sm font-semibold text-white">{project.year || "2026"}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">Category</span>
                <span className="text-sm font-semibold text-[#ff2a2a]">{project.category}</span>
              </div>
            </div>

            {caseStudy?.deliverables && (
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 mb-4 pb-2 border-b border-white/10">
                  Key Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {caseStudy.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-white/80">
                      <CheckCircle2 size={14} className="text-[#ff2a2a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-white/40 font-mono">
            &copy; {project.year} {project.title}
          </span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-[#ff2a2a] transition-all duration-300 cursor-pointer"
          >
            Close Project
          </button>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyModal;
