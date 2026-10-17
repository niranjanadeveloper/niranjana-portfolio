import React from 'react';
import { ArrowRight, FileText, Code, Terminal, Sparkles, Layers, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
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
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#A78BFA]/10 via-[#67E8F9]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#67E8F9]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Matrix/Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131C] border border-white/10 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#67E8F9] animate-pulse"></span>
              <span className="text-xs font-mono font-semibold tracking-wider text-[#A78BFA] uppercase">
                {PERSONAL_INFO.heroLabel}
              </span>
              <span className="text-xs text-[#A1A1B5]">• Fresher / Graduate 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F8FAFC] mb-4">
              {PERSONAL_INFO.heroHeading}
            </h1>

            {/* Supporting Heading */}
            <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#A78BFA] via-[#C4B5FD] to-[#67E8F9] bg-clip-text text-transparent mb-5">
              {PERSONAL_INFO.supportingHeading}
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#A1A1B5] max-w-2xl leading-relaxed mb-8">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#A78BFA] hover:bg-[#A78BFA]/90 text-[#0A0A0F] font-bold shadow-lg shadow-[#A78BFA]/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={18} />
              </a>

              <a
                href={PERSONAL_INFO.resumePath}
                download="Niranjana-Frontend-Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#191923] hover:bg-[#13131C] text-[#F8FAFC] font-semibold border border-white/10 hover:border-[#67E8F9]/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText size={18} className="text-[#67E8F9]" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Additional Links Row: GitHub & LinkedIn */}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10 w-full sm:w-auto">
              <span className="text-xs uppercase font-semibold text-[#A1A1B5] tracking-wider">
                Profiles:
              </span>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#13131C] border border-white/10 text-xs font-medium text-[#F8FAFC] hover:text-[#A78BFA] hover:border-[#A78BFA]/40 transition-colors"
                aria-label="View GitHub profile"
              >
                <GithubIcon size={16} />
                <span>View GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#13131C] border border-white/10 text-xs font-medium text-[#F8FAFC] hover:text-[#67E8F9] hover:border-[#67E8F9]/40 transition-colors"
                aria-label="View LinkedIn profile"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Custom 3D-Themed Floating Developer Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              
              {/* Radial glow aura */}
              <div className="absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#A78BFA]/20 via-[#67E8F9]/10 to-transparent blur-2xl animate-pulse-subtle"></div>

              {/* Central Floating Editor Window */}
              <div className="relative z-10 w-full rounded-2xl editorial-card p-6 shadow-2xl backdrop-blur-xl animate-float-gentle border border-white/10">
                {/* Code Window Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#A1A1B5] font-mono">
                    <Terminal size={13} className="text-[#67E8F9]" />
                    <span>Niranjana.dev</span>
                  </div>
                  <div className="w-4"></div>
                </div>

                {/* Code Content */}
                <div className="font-mono text-xs text-left space-y-1.5 py-1 text-[#F8FAFC]">
                  <div className="text-[#A1A1B5]">// Front-End Developer Profile</div>
                  <div>
                    <span className="text-[#A78BFA]">const</span>{' '}
                    <span className="text-[#67E8F9]">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A1A1B5]">name:</span>{' '}
                    <span className="text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A1A1B5]">role:</span>{' '}
                    <span className="text-[#C4B5FD]">"Front-End Developer"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A1A1B5]">degree:</span>{' '}
                    <span className="text-cyan-200">"{PERSONAL_INFO.degree}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A1A1B5]">coreStack:</span> [
                    <span className="text-[#67E8F9]">"HTML5"</span>,{' '}
                    <span className="text-[#67E8F9]">"CSS3"</span>,{' '}
                    <span className="text-[#67E8F9]">"JavaScript"</span>,{' '}
                    <span className="text-[#A78BFA]">"React.js"</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-[#A1A1B5]">focus:</span>{' '}
                    <span className="text-[#A78BFA]">"Responsive Web Experiences"</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Sub status bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A1A1B5] font-mono">
                  <span className="text-[#67E8F9] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9]"></span>
                    Available for Fresher Roles
                  </span>
                  <span className="text-[#A1A1B5]">React.js + Vite</span>
                </div>
              </div>

              {/* Floating Pill 1: Top-Left HTML / CSS / JS / React badges */}
              <div className="absolute -top-4 -left-4 z-20 px-3.5 py-2.5 rounded-xl bg-[#13131C] border border-[#A78BFA]/40 shadow-xl shadow-black/60 backdrop-blur-md flex items-center gap-2.5 animate-float-reverse">
                <div className="w-8 h-8 rounded-lg bg-[#A78BFA]/15 text-[#A78BFA] flex items-center justify-center">
                  <Code size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-[#A1A1B5] uppercase font-semibold">Specialization</div>
                  <div className="text-xs font-bold text-[#F8FAFC]">React.js • JavaScript</div>
                </div>
              </div>

              {/* Floating Pill 2: Bottom-Right Degree & Location */}
              <div className="absolute -bottom-4 -right-4 z-20 px-3.5 py-2.5 rounded-xl bg-[#13131C] border border-[#67E8F9]/40 shadow-xl shadow-black/60 backdrop-blur-md flex items-center gap-2.5 animate-float-gentle">
                <div className="w-8 h-8 rounded-lg bg-[#67E8F9]/15 text-[#67E8F9] flex items-center justify-center">
                  <Layers size={18} />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-[#A1A1B5] uppercase font-semibold">Education</div>
                  <div className="text-xs font-bold text-[#F8FAFC]">B.Com (CA) • 82%</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
