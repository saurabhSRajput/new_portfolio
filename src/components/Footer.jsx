import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#020202] text-white py-16 px-6 md:px-16 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-12 mb-12 border-b border-white/10 gap-8">
          <div>
            <div className="text-2xl font-black font-syne tracking-widest text-[#ff2a2a] mb-2">
              {personalData.name}&deg;
            </div>
            <p className="text-xs text-white/50 font-mono tracking-wider">
              {personalData.title}
            </p>
          </div>

          <div className="flex items-center gap-8 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff2a2a]"></span>
              <span>LOCAL TIME: <span className="text-white font-bold">{time || "12:00:00"}</span> (UTC-8)</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff2a2a] hover:border-[#ff2a2a] text-white transition-all duration-300 cursor-pointer"
            >
              <span className="uppercase text-[11px] font-mono tracking-wider">BACK TO TOP</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-white/40 gap-4">
          <div>
            &copy; {new Date().getFullYear()} {personalData.fullName}. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <a href="#work" className="hover:text-[#ff2a2a] transition-colors">WORK</a>
            <a href="#about" className="hover:text-[#ff2a2a] transition-colors">ABOUT</a>
            <a href="#services" className="hover:text-[#ff2a2a] transition-colors">SERVICES</a>
            <a href="#contact" className="hover:text-[#ff2a2a] transition-colors">CONTACT</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
