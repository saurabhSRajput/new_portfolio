import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const Navbar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const menuRef = useRef(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['WORK', 'ABOUT', 'SERVICES', 'CONTACT'];

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    // Logo fade from left
    tl.fromTo(logoRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'expo.out' }
    )
    // Links slide down
    .fromTo(linksRef.current,
      { y: -15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out' },
      '-=0.8'
    )
    // Hamburger fade from right
    .fromTo(menuRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: 'expo.out' },
      '-=0.8'
    );
  }, []);

  const handleNavClick = (e, linkId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.getElementById(linkId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full h-[80px] z-[100] flex items-center justify-between px-6 md:px-16 bg-black/40 backdrop-blur-md border-b border-white/5"
      >
        {/* LEFT: Logo */}
        <a 
          href="#"
          ref={logoRef}
          className="relative z-10 text-[#ff2a2a] font-black text-xl tracking-[0.2em] cursor-pointer transition-transform duration-500 hover:scale-[1.02] font-syne"
        >
          {personalData.name}&deg;
        </a>

        {/* RIGHT SIDE (Links + Hamburger) */}
        <div className="relative z-10 flex items-center">
          
          {/* CENTER/RIGHT: Navigation Links */}
          <div className="hidden md:flex items-center space-x-10 mr-12">
            {navLinks.map((link, index) => (
              <a
                key={link}
                ref={el => linksRef.current[index] = el}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className="relative text-white text-[12px] font-mono uppercase tracking-[2px] transition-colors duration-300 ease-in-out hover:text-[#ff2a2a] group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#ff2a2a] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* RIGHT: Hamburger Menu Trigger */}
          <button 
            ref={menuRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="group flex flex-col justify-center items-end space-y-[6px] w-8 h-8 cursor-pointer z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Animated Hamburger Lines */}
            <span className={`block h-[1.5px] bg-[#ff2a2a] transition-all duration-300 ease-out ${mobileMenuOpen ? 'w-8 rotate-45 translate-y-[7.5px]' : 'w-8 group-hover:w-5 group-hover:bg-white'}`} />
            <span className={`block h-[1.5px] bg-[#ff2a2a] transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'w-8 group-hover:bg-white'}`} />
            <span className={`block h-[1.5px] bg-[#ff2a2a] transition-all duration-300 ease-out ${mobileMenuOpen ? 'w-8 -rotate-45 -translate-y-[7.5px]' : 'w-5 group-hover:w-8 group-hover:bg-white'}`} />
          </button>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE/EXPANDED DRAWER MENU */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#080808]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col justify-between p-8 md:p-16 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-6'
        }`}
      >
        <div className="pt-24 max-w-4xl">
          <span className="text-[#ff2a2a] text-xs font-mono uppercase tracking-[3px] block mb-8">
            NAVIGATION DIRECTORY
          </span>

          <div className="flex flex-col space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, link.toLowerCase())}
                className="text-4xl md:text-6xl font-black font-syne uppercase text-white hover:text-[#ff2a2a] transition-all duration-300 flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>{link}</span>
                <span className="text-xs font-mono text-white/40 group-hover:text-[#ff2a2a] group-hover:translate-x-2 transition-all">
                  0{idx + 1} //
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Footer info inside menu drawer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <span className="text-[10px] font-mono uppercase text-white/40 block mb-1">Direct Inquiries</span>
            <a href={`mailto:${personalData.email}`} className="text-sm font-syne text-[#ff2a2a] font-bold hover:underline">
              {personalData.email}
            </a>
          </div>

          <div className="flex items-center space-x-6 text-xs font-mono text-white/60">
            {personalData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff2a2a] transition-colors uppercase"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
