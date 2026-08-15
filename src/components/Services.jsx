import React, { useState } from 'react';
import { servicesData, processSteps } from '../data/portfolioData';
import { ChevronRight, Check } from 'lucide-react';

const Services = () => {
  const [expandedId, setExpandedId] = useState("01");

  return (
    <section id="services" className="relative py-28 px-6 md:px-16 bg-black text-white overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#ff2a2a]/5 rounded-full blur-[200px] pointer-events-none"></div>

      <div className="max-w-[1800px] mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-white/10 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#ff2a2a]"></span>
              <span className="text-[#ff2a2a] text-xs uppercase font-mono tracking-[3px]">
                WHAT I BRING TO THE TABLE
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight font-syne uppercase">
              SERVICES & <span className="text-[#ff2a2a] italic font-normal">CAPABILITIES</span>
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md font-light">
            From cutting-edge AI/ML solutions to product strategy consulting — I combine technical depth with business acumen to deliver measurable impact.
          </p>
        </div>

        {/* SERVICES EXPANDABLE ACCORDION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {servicesData.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setExpandedId(isExpanded ? null : service.id)}
                className={`group relative rounded-2xl p-8 md:p-10 transition-all duration-500 cursor-pointer border ${
                  isExpanded
                    ? 'bg-[#0e0e0e] border-[#ff2a2a] shadow-xl shadow-[#ff2a2a]/10'
                    : 'bg-[#070707] border-white/10 hover:border-white/25 hover:bg-[#0a0a0a]'
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-3xl font-black font-syne text-[#ff2a2a]">{service.id}</span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 ${
                    isExpanded ? 'rotate-90 bg-[#ff2a2a] text-white border-[#ff2a2a]' : 'text-white/40 group-hover:text-white'
                  }`}>
                    <ChevronRight size={18} />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-syne mb-2 group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-4 font-light">{service.tagline}</p>

                <div className={`grid transition-all duration-500 ease-in-out ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/10' : 'grid-rows-[0fr] opacity-0 overflow-hidden'
                }`}>
                  <div className="overflow-hidden space-y-4">
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed font-light">{service.description}</p>
                    <div className="pt-2">
                      <h4 className="text-[11px] font-mono uppercase tracking-widest text-[#ff2a2a] mb-3">Key Deliverables</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.deliverables.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                            <Check size={14} className="text-[#ff2a2a] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* WORKFLOW PROCESS TIMELINE */}
        <div className="bg-[#080808] border border-white/10 rounded-3xl p-8 md:p-14">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#ff2a2a] text-xs uppercase font-mono tracking-[3px] block mb-3">HOW I APPROACH EVERY CHALLENGE</span>
            <h3 className="text-3xl md:text-4xl font-extrabold font-syne uppercase">
              THE 4-STEP <span className="text-[#ff2a2a] italic font-normal">PROCESS</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#ff2a2a]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-4xl font-black font-syne text-[#ff2a2a]/30 mb-4 block">{step.step}</span>
                  <h4 className="text-base font-bold font-syne tracking-wider uppercase mb-3 text-white">{step.title}</h4>
                  <p className="text-white/60 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>
                <div className="w-full h-[2px] bg-gradient-to-r from-[#ff2a2a] to-transparent mt-6 opacity-30"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
