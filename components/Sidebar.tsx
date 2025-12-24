
import React from 'react';
import { 
  Factory, X, HelpCircle, 
  Home, FolderOpen, FileText, AlertTriangle, BookOpen, Send, 
  BarChart3, Wrench, ShieldCheck, Siren, Search, Box, 
  ClipboardList, Download, User, ChevronRight, MessageSquare
} from 'lucide-react';
import { ViewState, MenuItem } from '../types';
import { SIDEBAR_MENU_ITEMS } from '../constants';

interface SidebarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

// Map string icon names to actual components
const ICON_MAP: Record<string, React.FC<any>> = {
  'Home': Home,
  'FolderOpen': FolderOpen,
  'FileText': FileText,
  'AlertTriangle': AlertTriangle,
  'BookOpen': BookOpen,
  'Send': Send,
  'BarChart3': BarChart3,
  'Wrench': Wrench,
  'ShieldCheck': ShieldCheck,
  'Siren': Siren,
  'Search': Search,
  'Box': Box,
  'ClipboardList': ClipboardList,
  'Download': Download,
  'Factory': Factory,
  'X': X,
  'HelpCircle': HelpCircle,
  'MessageSquare': MessageSquare
};

export const Sidebar: React.FC<SidebarProps> = ({ currentView, setView, isOpen, setIsOpen }) => {

  const getIcon = (iconName: string) => {
    const IconComponent = ICON_MAP[iconName] || ICON_MAP['HelpCircle'];
    return <IconComponent size={22} />; 
  };

  const handleMenuItemClick = (item: MenuItem) => {
    if (item.type === 'external_single_tab' && item.path) {
      window.open(item.path, '_blank');
    } else {
      setView(item.id);
    }
    setIsOpen(false); 
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Container */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-72 
        bg-slate-900/95 backdrop-blur-xl border-r border-white/5
        shadow-[10px_0_30px_rgba(0,0,0,0.5)] 
        transform transition-transform duration-300 ease-out 
        lg:translate-x-0 lg:static lg:inset-0 lg:shadow-none lg:z-30
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 to-blue-900/10 pointer-events-none"></div>

        <div className="flex flex-col h-full relative z-10">
          
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-4 p-2 text-slate-400 hover:text-white lg:hidden transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex items-center px-6 h-24 border-b border-white/5 bg-gradient-to-r from-slate-900/50 to-transparent">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20 mr-4 shrink-0 border border-white/5">
              <Factory className="text-white" size={24} />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-black tracking-wider text-white leading-none mb-1">第二炼钢厂</h1>
              <span className="text-[10px] text-blue-300/60 font-bold tracking-[0.2em] uppercase">综合管理平台</span>
            </div>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {SIDEBAR_MENU_ITEMS.map((item, idx) => {
              if (item.hidden) return null;

              if (item.type === 'header') {
                return (
                  <div key={item.id} className="pt-6 pb-2 px-3">
                    <p className="text-[11px] font-extrabold text-slate-500 uppercase tracking-widest border-b border-white/5 pb-1">{item.label}</p>
                  </div>
                );
              }
              
              const isActive = currentView === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuItemClick(item)}
                  className={`
                    group relative flex items-center w-full px-4 py-3.5 rounded-xl transition-all duration-300 
                    ${isActive
                      ? 'bg-gradient-to-r from-blue-600/90 to-blue-700/90 shadow-md shadow-blue-900/30 ring-1 ring-blue-500/50' 
                      : 'hover:bg-white/5'
                    }
                  `}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-400 rounded-r-full shadow-[0_0_12px_rgba(96,165,250,0.8)]"></div>
                  )}

                  <span className={`
                    mr-4 transition-colors duration-200
                    ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-blue-300'}
                  `}>
                    {getIcon(item.icon)}
                  </span>
                  
                  <span className={`
                    text-base tracking-wide transition-colors duration-200
                    ${isActive ? 'font-bold text-white' : 'font-medium text-slate-400 group-hover:text-slate-100'}
                  `}>
                    {item.label}
                  </span>

                  {isActive && (
                    <ChevronRight size={16} className="absolute right-3 text-blue-300/50" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-white/5 bg-slate-900/50">
            <div className="mt-3 text-center">
               <p className="text-[10px] text-slate-600/80 font-mono">v2.1.2 · Build 2025</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
