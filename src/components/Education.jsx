import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#13131C]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191923] border border-white/10 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            Education
          </h2>
          <p className="text-[#A1A1B5] text-base">
            Formal university degree and computer applications foundation
          </p>
        </div>

        {/* Education Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <div className="editorial-card p-8 sm:p-10 bg-[#191923] border border-white/10 relative overflow-hidden group">
            
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A78BFA] via-[#67E8F9] to-[#A78BFA]"></div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-8 border-b border-white/10">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#13131C] border border-white/10 text-[#A78BFA] flex items-center justify-center shrink-0 group-hover:border-[#A78BFA]/40 transition-colors">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <span className="inline-block px-3 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
                    Recent Graduate • Fresher
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-1">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="text-[#A1A1B5] font-medium text-base">
                    {EDUCATION_DATA.institution}
                  </p>
                </div>
              </div>

              {/* Score Highlight Box */}
              <div className="sm:text-right shrink-0">
                <div className="text-xs uppercase tracking-wider text-[#A1A1B5] font-semibold mb-1">
                  Overall Score
                </div>
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#A78BFA] to-[#67E8F9]">
                  {EDUCATION_DATA.percentage}
                </div>
              </div>

            </div>

            {/* Meta Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-[#A1A1B5] text-sm">
                <Calendar size={18} className="text-[#A78BFA]" />
                <span>Academic Years: <strong className="text-[#F8FAFC]">{EDUCATION_DATA.period}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-[#A1A1B5] text-sm">
                <MapPin size={18} className="text-[#67E8F9]" />
                <span>Location: <strong className="text-[#F8FAFC]">{EDUCATION_DATA.location}</strong></span>
              </div>
            </div>

            {/* Foundation Badges */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-xs font-semibold text-[#A1A1B5] uppercase tracking-wider mb-3">
                Computer Applications Foundation:
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Computer Applications",
                  "Database Management",
                  "Web Technologies",
                  "Software Fundamentals",
                  "Applied Computing"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#13131C] border border-white/5 text-xs text-[#F8FAFC]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
