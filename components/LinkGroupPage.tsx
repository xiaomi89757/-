
import React from 'react';
import { NavLinkItem, ViewState } from '../types';
import { 
  ExternalLink, ArrowRight, 
  FileText, AlertTriangle, Send, Search, Presentation, 
  PlusCircle, ListChecks, FolderOpen, BarChart3, HelpCircle,
  // New Icons
  Shield, Flame, Zap, Wrench, BookOpen, Siren, HardHat,
  Activity, Component, LayoutGrid
} from 'lucide-react';

interface LinkGroupPageProps {
  title: string;
  links: NavLinkItem[];
  onNavigate: (view: ViewState) => void;
}

// Icon mapper
const ICONS: Record<string, React.FC<any>> = {
  FileText, AlertTriangle, Send, Search, Presentation, 
  PlusCircle, ListChecks, FolderOpen, BarChart3, HelpCircle,
  Shield, Flame, Zap, Wrench, BookOpen, Siren, HardHat,
  Activity, Component
};

// 升级版主题配置：增加渐变色背景和阴影效果
const THEMES: Record<string, { bg: string, iconBg: string, text: string, shadow: string, border: string }> = {
  blue: { 
    bg: 'bg-gradient-to-br from-blue-500 to-blue-600', 
    iconBg: 'bg-white/20', 
    text: 'text-blue-50',
    shadow: 'shadow-blue-200',
    border: 'border-blue-400'
  },
  indigo: { 
    bg: 'bg-gradient-to-br from-indigo-500 to-indigo-600', 
    iconBg: 'bg-white/20', 
    text: 'text-indigo-50',
    shadow: 'shadow-indigo-200',
    border: 'border-indigo-400'
  },
  emerald: { 
    bg: 'bg-gradient-to-br from-emerald-500 to-emerald-600', 
    iconBg: 'bg-white/20', 
    text: 'text-emerald-50',
    shadow: 'shadow-emerald-200',
    border: 'border-emerald-400'
  },
  orange: { 
    bg: 'bg-gradient-to-br from-orange-500 to-orange-600', 
    iconBg: 'bg-white/20', 
    text: 'text-orange-50',
    shadow: 'shadow-orange-200',
    border: 'border-orange-400'
  },
  rose: { 
    bg: 'bg-gradient-to-br from-rose-500 to-rose-600', 
    iconBg: 'bg-white/20', 
    text: 'text-rose-50',
    shadow: 'shadow-rose-200',
    border: 'border-rose-400'
  },
  violet: { 
    bg: 'bg-gradient-to-br from-violet-500 to-violet-600', 
    iconBg: 'bg-white/20', 
    text: 'text-violet-50',
    shadow: 'shadow-violet-200',
    border: 'border-violet-400'
  },
  cyan: { 
    bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600', 
    iconBg: 'bg-white/20', 
    text: 'text-cyan-50',
    shadow: 'shadow-cyan-200',
    border: 'border-cyan-400'
  },
  amber: { 
    bg: 'bg-gradient-to-br from-amber-500 to-amber-600', 
    iconBg: 'bg-white/20', 
    text: 'text-amber-50',
    shadow: 'shadow-amber-200',
    border: 'border-amber-400'
  },
  slate: { 
    bg: 'bg-gradient-to-br from-slate-500 to-slate-600', 
    iconBg: 'bg-white/20', 
    text: 'text-slate-50',
    shadow: 'shadow-slate-200',
    border: 'border-slate-400'
  },
  default: { 
    bg: 'bg-gradient-to-br from-slate-600 to-slate-700', 
    iconBg: 'bg-white/20', 
    text: 'text-slate-50',
    shadow: 'shadow-slate-300',
    border: 'border-slate-500'
  }
};

export const LinkGroupPage: React.FC<LinkGroupPageProps> = ({ title, links, onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-slate-50 relative animate-fade-in font-sans">
      
      {/* 顶部标题栏 - 毛玻璃效果 */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4 md:px-8 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center">
          <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg shadow-blue-200 mr-4">
            <LayoutGrid size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">{title}</h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">请选择下方项目进行查看或操作</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {links.map((navLink, index) => {
              const isInternal = !!navLink.viewId;
              const IconComponent = navLink.icon ? ICONS[navLink.icon] : HelpCircle;
              const theme = navLink.color ? THEMES[navLink.color] : THEMES.default;
              
              // Determine element type and props
              const Component = isInternal ? 'button' : 'a';
              const props = isInternal 
                ? { 
                    onClick: () => navLink.viewId && onNavigate(navLink.viewId),
                    type: 'button' as 'button'
                  }
                : { 
                    href: navLink.url, 
                    target: navLink.openInNewTab ? '_blank' : '_self',
                    rel: navLink.openInNewTab ? 'noopener noreferrer' : ''
                  };

              return (
                <Component
                  key={index}
                  {...props}
                  className={`
                    group relative flex flex-col justify-between
                    text-left rounded-2xl shadow-lg hover:shadow-2xl
                    transition-all duration-300 transform hover:-translate-y-1.5
                    overflow-hidden min-h-[200px] border border-transparent hover:border-white/20
                    ${theme.bg} ${theme.shadow}
                  `}
                >
                  {/* Decorative background effects */}
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>
                  <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 rounded-full bg-black/10 blur-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 p-6 md:p-7 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`
                        p-3 rounded-xl ${theme.iconBg} backdrop-blur-md text-white shadow-inner 
                        group-hover:scale-110 transition-transform duration-300
                      `}>
                        <IconComponent size={28} />
                      </div>
                      <div className="bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-colors">
                        {isInternal ? (
                          <ArrowRight className="text-white/80 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
                        ) : (
                          <ExternalLink className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all" size={20} />
                        )}
                      </div>
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-wide drop-shadow-sm">
                        {navLink.label}
                      </h3>
                      {navLink.description && (
                        <p className={`text-sm ${theme.text} leading-relaxed font-light opacity-90 line-clamp-2`}>
                          {navLink.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
