import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0F] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mb-1.5">
              <span className="font-extrabold text-white text-base tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[#A1A1B5]">•</span>
              <span className="text-xs text-[#A78BFA] font-medium font-mono">
                Front-End Developer
              </span>
            </div>
            <p className="text-xs text-[#A1A1B5]">
              B.Com (Computer Applications) Graduate • Tirupur, Tamil Nadu
            </p>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#191923] border border-white/10 text-[#A1A1B5] hover:text-[#A78BFA] hover:border-[#A78BFA]/50 flex items-center justify-center transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-[#191923] border border-white/10 text-[#A1A1B5] hover:text-[#67E8F9] hover:border-[#67E8F9]/50 flex items-center justify-center transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-10 h-10 rounded-xl bg-[#191923] border border-white/10 text-[#A1A1B5] hover:text-[#A78BFA] hover:border-[#A78BFA]/50 flex items-center justify-center transition-colors"
              aria-label="Email Niranjana"
            >
              <Mail size={18} />
            </a>

            {/* Back to top button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-[#191923] hover:bg-[#13131C] border border-white/10 text-[#F8FAFC] flex items-center justify-center transition-all duration-200 ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Dynamic Copyright bottom */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#A1A1B5] gap-2">
          <div>
            © {CURRENT_YEAR} {PERSONAL_INFO.name}. Built with React.js & Tailwind CSS.
          </div>
          <div>
            Fresher Front-End Developer Portfolio
          </div>
        </div>

      </div>
    </footer>
  );
}
