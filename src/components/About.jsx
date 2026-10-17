import React from 'react';
import { GraduationCap, MapPin, Briefcase, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const infoCards = [
    { label: "Degree", value: PERSONAL_INFO.degree, icon: GraduationCap, color: "text-[#A78BFA]" },
    { label: "College", value: PERSONAL_INFO.college, icon: Award, color: "text-[#67E8F9]" },
    { label: "Graduation", value: PERSONAL_INFO.graduation, icon: Sparkles, color: "text-[#A78BFA]" },
    { label: "Percentage", value: PERSONAL_INFO.percentage, icon: Award, color: "text-emerald-400" },
    { label: "Location", value: PERSONAL_INFO.location, icon: MapPin, color: "text-[#67E8F9]" },
    { label: "Career Level", value: PERSONAL_INFO.careerLevel, icon: Briefcase, color: "text-[#A78BFA]" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131C] border border-white/10 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">
            Introduction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            {PERSONAL_INFO.aboutTitle}
          </h2>
          <p className="text-[#A1A1B5] text-base">
            Background and passion for modern front-end web development
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Story Paragraphs */}
          <div className="lg:col-span-7 flex flex-col justify-between editorial-card p-6 sm:p-8 bg-[#191923]">
            <div className="space-y-5 text-[#F8FAFC] leading-relaxed text-base sm:text-lg">
              <p className="font-medium text-[#F8FAFC]/95 text-lg">
                {PERSONAL_INFO.aboutText}
              </p>
              <p className="text-[#A1A1B5] text-sm sm:text-base">
                I specialize in translating UI designs into responsive, interactive code using React.js, JavaScript, HTML5, and modern CSS architectures like Tailwind CSS and Flexbox/Grid.
              </p>
            </div>

            {/* Core Values / Traits for a fresher */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-[#13131C] border border-white/5">
                <div className="text-xs text-[#A1A1B5] mb-1">Focus</div>
                <div className="text-sm font-bold text-[#F8FAFC]">Interactive UIs</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#13131C] border border-white/5">
                <div className="text-xs text-[#A1A1B5] mb-1">Mindset</div>
                <div className="text-sm font-bold text-[#F8FAFC]">Fast Learner</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#13131C] border border-white/5">
                <div className="text-xs text-[#A1A1B5] mb-1">Status</div>
                <div className="text-sm font-bold text-emerald-400">Available to Join</div>
              </div>
            </div>
          </div>

          {/* Elegant Information Layout */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="editorial-card p-5 bg-[#191923] flex flex-col justify-between group hover:border-[#A78BFA]/30 transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1B5]">
                      {card.label}
                    </span>
                    <Icon size={18} className={`${card.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <div className="text-sm sm:text-base font-bold text-[#F8FAFC] leading-snug">
                    {card.value}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
