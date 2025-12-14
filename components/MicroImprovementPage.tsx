
import React, { useState } from 'react';
import { 
  PlusCircle, ListChecks, LayoutGrid, 
  Loader2, Maximize2, Zap, ChevronRight
} from 'lucide-react';
import { NavLinkItem, ViewState } from '../types';

interface MicroImprovementPageProps {
  title: string;
  links: NavLinkItem[];
  onNavigate: (view: ViewState) => void;
}

const ICONS: Record<string, React.FC<any>> = {
  PlusCircle, ListChecks
};

const THEMES: Record<string, { bg: string, iconBg: string, text: string, shadow: string }> = {
  emerald: { 
    bg: 'bg-gradient-to-br from-emerald-500 to-teal-700', 
    iconBg: 'bg-white/20', 
    text: 'text-emerald-50',
    shadow: 'shadow-emerald-200'
  },
  blue: { 
    bg: 'bg-gradient-to-br from-blue-500 to-indigo-700', 
    iconBg: 'bg-white/20', 
    text: 'text-blue-50',
    shadow: 'shadow-blue-200'
  }
};

export const MicroImprovementPage: React.FC<MicroImprovementPageProps> = ({ title, links, onNavigate }) => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const dashboardUrl = "https://www.kdocs.cn/wo/sl/v12oW5qM";

  return (
    <div className="h-full flex flex-col bg-slate-50 overflow-hidden animate-fade-in font-sans">
      
      {/* Header - Glassmorphism */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 lg:py-4 lg:px-8 shadow-sm">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <div className="p-2.5 bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-xl shadow-lg shadow-emerald-200 mr-4">
              <LayoutGrid size={24} />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-black text-slate-800 tracking-tight drop-shadow-md">{title}</h2>
              <p className="hidden lg:block text-xs text-slate-500 font-medium mt-0.5 uppercase tracking-widest">Continuous Improvement & Micro-Innovation</p>
            </div>
          </div>
          <a 
            href={dashboardUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold hover:bg-emerald-100 transition-colors border border-emerald-200"
          >
            <Maximize2 size={14} />
            <span>全屏查看看板</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8 scroll-smooth">
        <div className="max-w-[1600px] mx-auto space-y-8">
          
          {/* Action Cards Container - Optimized for 2 cards to be centered and evenly spread */}
          <div className="flex flex-col lg:flex-row lg:justify-center items-center gap-4 lg:gap-8">
            {links.map((link, index) => {
              const Icon = link.icon ? ICONS[link.icon] : Zap;
              const theme = link.color ? THEMES[link.color] : THEMES.blue;
              
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 hover:brightness-110
                    shadow-xl ${theme.shadow} ${theme.bg}
                    /* Base / Mobile: Horizontal Strip */
                    flex flex-row items-center w-full h-[72px] px-4 rounded-[2rem]
                    /* Desktop: Vertical Box with balanced width */
                    lg:flex-col lg:items-start lg:justify-between lg:w-1/3 lg:max-w-[400px] lg:h-[150px] lg:p-6 lg:rounded-[2rem]
                  `}
                >
                  {/* Glass Decor - Only Desktop */}
                  <div className="hidden lg:block absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  
                  {/* Icon Container */}
                  <div className={`
                    shrink-0 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-md shadow-inner text-white
                    /* Mobile */
                    w-10 h-10 mr-4
                    /* Desktop */
                    lg:w-11 lg:h-11 lg:mb-4 lg:group-hover:scale-110 transition-transform
                  `}>
                    <Icon size={24} />
                  </div>

                  {/* Content Area */}
                  <div className="flex-1 min-w-0">
                    <h3 className={`
                      font-black text-white drop-shadow-md tracking-wide mb-0.5
                      /* Mobile */
                      text-base
                      /* Desktop */
                      lg:text-2xl
                    `}>
                      {link.label}
                    </h3>
                    <p className={`
                      font-light opacity-90 leading-tight ${theme.text}
                      /* Mobile: Force single line */
                      text-[10px] line-clamp-1
                      /* Desktop: Allow 2 lines */
                      lg:text-sm lg:line-clamp-2
                    `}>
                      {link.description}
                    </p>
                  </div>

                  {/* Right Guidance - Only Mobile */}
                  <div className="lg:hidden shrink-0 ml-2 text-white/50">
                    <ChevronRight size={20} />
                  </div>

                  {/* Bottom Tag - Only Desktop */}
                  <div className="hidden lg:block absolute bottom-4 right-6 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                    Immediate Access
                  </div>
                </a>
              );
            })}
          </div>

          {/* Data Dashboard Section */}
          <div className="relative group">
            <div className={`
              relative bg-white border-[4px] border-white ring-1 ring-slate-200 shadow-2xl overflow-hidden
              /* Mobile: Fixed height 650px */
              rounded-2xl h-[650px]
              /* Desktop: Fixed height 650px as requested */
              lg:rounded-[2.5rem] lg:h-[650px]
            `}>
              
              {/* Loading Placeholder */}
              {isIframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-0">
                  <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
                  <p className="text-slate-500 font-bold tracking-widest animate-pulse text-center px-4">正在接入实时数据云端...</p>
                </div>
              )}

              {/* Iframe with Performance Hints */}
              <iframe 
                src={dashboardUrl}
                className="w-full h-full border-none relative z-10"
                onLoad={() => setIsIframeLoading(false)}
                title="Micro Improvement Dashboard"
                loading="eager"
                // @ts-ignore - Experimental attribute
                fetchpriority="high"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              />
            </div>

            {/* Sync Status Bar */}
            <div className="mt-4 flex items-center justify-center lg:justify-end px-6">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[10px] lg:text-xs font-black text-slate-400 uppercase tracking-widest">
                  Live Syncing Data · Powered by WPS Cloud
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Padding for scroll */}
          <div className="h-12"></div>
        </div>
      </div>
    </div>
  );
};
