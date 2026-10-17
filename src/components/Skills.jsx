import React from 'react';
import { Code2, Palette, Cpu, Boxes, Wrench } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

const iconMap = {
  Code2,
  Palette,
  Cpu,
  Boxes,
  Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#13131C]">
      {/* Background radial accent */}
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] h-72 bg-gradient-to-t from-[#A78BFA]/10 via-[#67E8F9]/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191923] border border-white/10 text-[#67E8F9] text-xs font-semibold uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            Technologies I Work With
          </h2>
          <p className="text-[#A1A1B5] text-base">
            Front-end development technologies and tools I use to build modern, responsive web experiences.
          </p>
        </div>

        {/* Categories Grid: 5 Clean Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = iconMap[group.iconName] || Code2;
            const isFullSpan = idx === 4; // Center or fit 5th item gracefully

            return (
              <div
                key={group.category}
                className={`editorial-card p-6 bg-[#191923] flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 ${
                  isFullSpan ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#13131C] border border-white/10 text-[#A78BFA] flex items-center justify-center group-hover:border-[#A78BFA]/40 group-hover:text-[#67E8F9] transition-all">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-[#F8FAFC] tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills Badges List */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#13131C] border border-white/5 text-[#F8FAFC] text-xs font-medium hover:border-[#A78BFA]/30 hover:text-[#A78BFA] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#67E8F9]"></span>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtitle footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A1A1B5]">
                  <span>Applied in projects</span>
                  <span className="font-mono text-[#A78BFA]">{group.skills.length} skills</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on honest learning */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#A1A1B5] max-w-xl mx-auto">
            Organized by hands-on proficiency and active project implementation. No percentage meters or exaggerated seniority claims.
          </p>
        </div>

      </div>
    </section>
  );
}
