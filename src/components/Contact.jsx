import React from 'react';
import { Mail, MapPin, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const contactMethods = [
    {
      title: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      color: "text-[#A78BFA]",
      actionText: "Send Email"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/rniranjana06",
      href: PERSONAL_INFO.linkedin,
      icon: LinkedinIcon,
      color: "text-[#A78BFA]",
      actionText: "Connect on LinkedIn",
      isExternal: true
    },
    {
      title: "GitHub",
      value: "github.com/niranjanadeveloper",
      href: PERSONAL_INFO.github,
      icon: GithubIcon,
      color: "text-[#67E8F9]",
      actionText: "Explore Repositories",
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#A78BFA]/10 via-[#67E8F9]/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131C] border border-white/10 text-[#67E8F9] text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            Let's Connect
          </h2>
          <p className="text-[#A1A1B5] text-base max-w-2xl mx-auto">
            {PERSONAL_INFO.connectDescription}
          </p>
        </div>

        {/* Distinctive Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;

            return (
              <a
                key={idx}
                href={method.href}
                target={method.isExternal ? "_blank" : undefined}
                rel={method.isExternal ? "noopener noreferrer" : undefined}
                className="editorial-card p-6 bg-[#191923] border border-white/10 hover:border-[#A78BFA]/50 group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#13131C] border border-white/10 flex items-center justify-center mb-5 group-hover:border-[#A78BFA]/40 transition-colors">
                    <Icon size={22} className={`${method.color} group-hover:scale-110 transition-transform`} />
                  </div>
                  <span className="text-xs font-mono uppercase text-[#A1A1B5] tracking-wider block mb-1">
                    {method.title}
                  </span>
                  <div className="text-sm font-bold text-[#F8FAFC] break-all group-hover:text-[#A78BFA] transition-colors mb-4">
                    {method.value}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#67E8F9]">
                  <span>{method.actionText}</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Location Banner */}
        <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-[#13131C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#191923] border border-white/10 text-[#67E8F9] flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs text-[#A1A1B5] font-semibold">Location Base</div>
              <div className="text-sm font-bold text-[#F8FAFC]">{PERSONAL_INFO.location}</div>
            </div>
          </div>

          <a
            href={`mailto:${PERSONAL_INFO.email}?subject=Front-End%20Developer%20Opportunity`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#A78BFA] hover:bg-[#A78BFA]/90 text-[#0A0A0F] text-xs font-bold transition-all shadow-md shadow-[#A78BFA]/20"
          >
            <Send size={14} />
            <span>Direct Message</span>
          </a>
        </div>

      </div>
    </section>
  );
}
