import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      for (const section of sectionIds) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass py-3.5 shadow-lg shadow-black/40' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-[#191923] border border-white/10 flex items-center justify-center font-bold text-[#A78BFA] shadow-md group-hover:border-[#A78BFA]/50 group-hover:shadow-[0_0_15px_rgba(167,139,250,0.3)] transition-all duration-200">
              <span className="font-mono text-sm tracking-wider font-extrabold">{PERSONAL_INFO.brand}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[#F8FAFC] group-hover:text-[#A78BFA] transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] text-[#A1A1B5] font-medium tracking-widest uppercase">
                Front-End Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#13131C]/80 px-2 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#A78BFA] text-[#0A0A0F] font-bold shadow-sm shadow-[#A78BFA]/30'
                      : 'text-[#A1A1B5] hover:text-[#F8FAFC] hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-[#191923] hover:bg-[#13131C] text-[#A78BFA] hover:text-white border border-[#A78BFA]/30 hover:border-[#67E8F9]/50 transition-all duration-200"
            >
              <span>Let's Connect</span>
              <ArrowUpRight size={14} className="text-[#67E8F9]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[#191923] border border-white/10 text-[#A1A1B5] hover:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#A78BFA]"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#0A0A0F]/95 border-b border-white/10 backdrop-blur-xl">
          <nav className="flex flex-col space-y-1.5 mt-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#A78BFA]/10 text-[#A78BFA] font-semibold border border-[#A78BFA]/30'
                      : 'text-[#A1A1B5] hover:text-white hover:bg-[#191923]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#A78BFA] text-[#0A0A0F] text-sm font-bold hover:bg-[#A78BFA]/90 transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
