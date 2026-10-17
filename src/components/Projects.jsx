import React from 'react';
import {
  CloudSun,
  Music,
  Share2,
  UtensilsCrossed,
  CheckSquare,
  ClipboardList,
  Sparkles,
  ExternalLink,
  Search,
  Wind,
  Droplets,
  Heart,
  ShoppingCart,
  Play,
  Check,
  Code
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS_DATA } from '../data/portfolioData';

// Custom CSS Previews tailored to each project's real UI
function WeatherPreview() {
  return (
    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden font-sans">
      <div className="flex items-center justify-between z-10">
        <div>
          <span className="text-[10px] font-mono text-[#67E8F9] uppercase tracking-wider">Cloudify Dashboard</span>
          <div className="text-sm font-bold text-white flex items-center gap-1.5">
            <span>Tirupur, IN</span>
            <span className="text-[10px] font-normal text-slate-400">28°C Sunny</span>
          </div>
        </div>
        <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[#67E8F9] flex items-center justify-center">
          <CloudSun size={20} />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 my-1 z-10">
        <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 text-center">
          <Droplets size={12} className="text-[#67E8F9] mx-auto mb-0.5" />
          <div className="text-[9px] text-slate-400">Humidity</div>
          <div className="text-[11px] font-bold text-white">65%</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 text-center">
          <Wind size={12} className="text-[#A78BFA] mx-auto mb-0.5" />
          <div className="text-[9px] text-slate-400">Wind</div>
          <div className="text-[11px] font-bold text-white">12 km/h</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 text-center">
          <div className="text-[#67E8F9] text-xs font-bold mx-auto mb-0.5">5D</div>
          <div className="text-[9px] text-slate-400">Forecast</div>
          <div className="text-[11px] font-bold text-white">Available</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5 z-10">
        <span>OpenWeatherMap API</span>
        <span className="text-[#67E8F9]">°C / °F Switchable</span>
      </div>
    </div>
  );
}

function MusicPreview() {
  return (
    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#121212] to-[#181818] p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden font-sans">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Music size={16} />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Chill Vibes Playlist</div>
            <div className="text-[10px] text-slate-400">50 songs • React Router</div>
          </div>
        </div>
        <div className="w-7 h-7 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg shadow-emerald-500/30">
          <Play size={12} className="ml-0.5 fill-black" />
        </div>
      </div>

      <div className="space-y-1.5 my-1 z-10">
        <div className="flex items-center justify-between px-2.5 py-1 rounded bg-white/5 text-[11px]">
          <span className="text-white font-medium truncate max-w-[140px]">01 Die With A Smile</span>
          <span className="text-slate-400 text-[10px]">4:12</span>
        </div>
        <div className="flex items-center justify-between px-2.5 py-1 rounded bg-white/5 text-[11px]">
          <span className="text-white font-medium truncate max-w-[140px]">02 Perfect</span>
          <span className="text-slate-400 text-[10px]">4:23</span>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5 z-10">
        <span>Sidebar: Home • Search • Library</span>
        <span className="text-emerald-400">Interactive Player UI</span>
      </div>
    </div>
  );
}

function SocialPreview() {
  return (
    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#181824] to-[#12121c] p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden font-sans">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <Share2 size={15} className="text-[#A78BFA]" />
          <span className="text-xs font-bold text-white">Feed & Stories</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-[#A78BFA] border border-purple-500/20">
          React Components
        </span>
      </div>

      {/* Stories simulation */}
      <div className="flex items-center gap-2 my-1 z-10 overflow-hidden">
        {['Your Story', 'Alex', 'Sarah', 'Dev'].map((story, i) => (
          <div key={i} className="flex flex-col items-center shrink-0">
            <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
              <div className="w-full h-full rounded-full bg-[#181824] flex items-center justify-center text-[10px] font-bold text-white">
                {story[0]}
              </div>
            </div>
            <span className="text-[8px] text-slate-400 mt-0.5 truncate w-10 text-center">{story}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5 z-10">
        <span>Posts, Likes & Suggestions Layout</span>
        <span className="text-[#67E8F9]">Bootstrap + CSS</span>
      </div>
    </div>
  );
}

function FoodPreview() {
  return (
    <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#241715] to-[#181010] p-4 flex flex-col justify-between border border-white/5 relative overflow-hidden font-sans">
      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-1.5">
          <span className="text-base">🌶️</span>
          <span className="text-xs font-bold text-white">Foodholics</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[10px] text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
            <Heart size={10} /> Wishlist
          </span>
          <span className="inline-flex items-center gap-1 text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
            <ShoppingCart size={10} /> Cart
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 my-1 z-10">
        <div className="p-2 rounded-lg bg-black/40 border border-white/5">
          <div className="text-[10px] font-bold text-white">Madras Mixture</div>
          <div className="text-[9px] text-amber-400 font-semibold">₹120</div>
          <div className="text-[8px] text-slate-400 mt-0.5">Traditional Snack</div>
        </div>
        <div className="p-2 rounded-lg bg-black/40 border border-white/5">
          <div className="text-[10px] font-bold text-white">Indian Sweet</div>
          <div className="text-[9px] text-amber-400 font-semibold">₹180</div>
          <div className="text-[8px] text-slate-400 mt-0.5">Authentic Flavor</div>
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-white/5 z-10">
        <span>Vanilla JS DOM Counter Logic</span>
        <span className="text-amber-400">HTML5 / CSS3 / JS</span>
      </div>
    </div>
  );
}

function TodoPreview() {
  return (
    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[#141d24] to-[#0f1418] p-4 flex flex-col justify-between border border-white/5 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <CheckSquare size={14} className="text-[#67E8F9]" />
          Student Task Manager
        </span>
        <span className="text-[10px] font-mono text-[#67E8F9]">DOM Table CRUD</span>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between px-2.5 py-1 rounded bg-white/5 text-[10px] text-slate-300">
          <span>JavaScript Form Record</span>
          <span className="text-rose-400">Delete</span>
        </div>
        <div className="flex items-center justify-between px-2.5 py-1 rounded bg-white/5 text-[10px] text-slate-300">
          <span>Task Completion Toggle</span>
          <span className="text-emerald-400">Active</span>
        </div>
      </div>
      <div className="text-[10px] text-slate-400 pt-1 border-t border-white/5">
        HTML5 • CSS3 • JavaScript
      </div>
    </div>
  );
}

function FormPreview() {
  return (
    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[#1c1824] to-[#120f18] p-4 flex flex-col justify-between border border-white/5 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <ClipboardList size={14} className="text-[#A78BFA]" />
          Academy Registration
        </span>
        <span className="text-[10px] font-mono text-[#A78BFA]">Input Handling</span>
      </div>
      <div className="space-y-1 text-[10px]">
        <div className="flex items-center gap-1.5 text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>Text, Number, Email & Dropdown Validation</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
          <span>Resume File Upload & Reset Actions</span>
        </div>
      </div>
      <div className="text-[10px] text-slate-400 pt-1 border-t border-white/5">
        HTML5 • CSS3 • JavaScript
      </div>
    </div>
  );
}

function PortfolioPreview() {
  return (
    <div className="w-full h-36 rounded-xl bg-gradient-to-br from-[#1a1429] to-[#0e0c18] p-4 flex flex-col justify-between border border-white/5 font-sans">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <Sparkles size={14} className="text-[#A78BFA]" />
          NR Developer Portfolio
        </span>
        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          Current Project
        </span>
      </div>
      <div className="text-xs text-slate-300">
        Dark editorial design with React.js, Tailwind CSS, and verified personal achievements.
      </div>
      <div className="text-[10px] text-slate-400 pt-1 border-t border-white/5">
        React.js • Vite • Tailwind CSS • JavaScript
      </div>
    </div>
  );
}

const previewComponents = {
  weather: WeatherPreview,
  music: MusicPreview,
  social: SocialPreview,
  food: FoodPreview,
  todo: TodoPreview,
  form: FormPreview,
  portfolio: PortfolioPreview
};

export default function Projects() {
  const primaryProjects = PROJECTS_DATA.filter(p => p.isPrimary);
  const secondaryProjects = PROJECTS_DATA.filter(p => !p.isPrimary);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Background accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#A78BFA]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#67E8F9]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131C] border border-white/10 text-[#A78BFA] text-xs font-semibold uppercase tracking-wider mb-3">
            Practical Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-[#A1A1B5] text-base">
            Front-end applications and interfaces I have built to apply web technologies to practical scenarios.
          </p>
        </div>

        {/* PRIMARY PROJECTS GRID: Cloudify, Spotify Clone, Instagram Clone, Foodholic */}
        <div className="mb-14">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#67E8F9] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#67E8F9]"></span>
            Featured Applications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {primaryProjects.map((project) => {
              const PreviewComponent = previewComponents[project.previewType] || WeatherPreview;
              const hasGithub = !!project.githubUrl;
              const hasLive = !!project.liveUrl;

              return (
                <div
                  key={project.id}
                  className="editorial-card bg-[#191923] p-6 sm:p-7 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 border border-white/10 hover:border-[#A78BFA]/40"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="mb-6 rounded-xl overflow-hidden border border-white/5">
                      <PreviewComponent />
                    </div>

                    {/* Header: Title and Status */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-xl font-bold text-[#F8FAFC] group-hover:text-[#A78BFA] transition-colors">
                        {project.title}
                      </h4>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        {project.status}
                      </span>
                    </div>

                    {/* Accurate Description */}
                    <p className="text-sm text-[#A1A1B5] leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[#F8FAFC]/80">
                          <Check size={14} className="text-[#67E8F9] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/10">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-[#13131C] border border-white/5 text-[11px] font-mono text-[#F8FAFC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links / Buttons */}
                    <div className="flex items-center gap-3">
                      {hasGithub && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#13131C] hover:bg-[#191923] text-xs font-semibold text-[#F8FAFC] border border-white/10 hover:border-[#A78BFA]/50 transition-colors"
                        >
                          <GithubIcon size={15} />
                          <span>View GitHub</span>
                        </a>
                      )}

                      {hasLive && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#A78BFA] hover:bg-[#A78BFA]/90 text-xs font-bold text-[#0A0A0F] transition-colors"
                        >
                          <ExternalLink size={15} />
                          <span>Live Demo</span>
                        </a>
                      )}

                      {!hasGithub && !hasLive && (
                        <div className="text-xs text-[#A1A1B5] italic">
                          Local project source verified on system
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECONDARY PROJECTS GRID: To-Do List, Registration Form, Portfolio Website */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#A78BFA] mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#A78BFA]"></span>
            Additional Practical Builds
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryProjects.map((project) => {
              const PreviewComponent = previewComponents[project.previewType] || TodoPreview;
              const hasGithub = !!project.githubUrl;

              return (
                <div
                  key={project.id}
                  className="editorial-card bg-[#191923] p-5 flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-[#67E8F9]/40"
                >
                  <div>
                    {/* Visual Preview */}
                    <div className="mb-4 rounded-xl overflow-hidden border border-white/5">
                      <PreviewComponent />
                    </div>

                    {/* Title and Status */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-base font-bold text-[#F8FAFC] group-hover:text-[#67E8F9] transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 shrink-0">
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs text-[#A1A1B5] leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#13131C] text-[10px] font-mono text-[#F8FAFC]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {hasGithub && (
                      <div className="mt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-[#67E8F9] hover:underline"
                        >
                          <GithubIcon size={13} />
                          <span>Repository</span>
                        </a>
                      </div>
                    )}
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
