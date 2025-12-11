import React from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';

interface IframeViewerProps {
  src: string;
  title: string;
}

export const IframeViewer: React.FC<IframeViewerProps> = ({ src, title }) => {
  return (
    <div className="flex flex-col h-full w-full animate-fade-in bg-slate-50">
      {/* Header Bar - Minimalist and Compact */}
      <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-slate-200 shadow-sm shrink-0">
        <h2 className="text-sm md:text-base font-bold text-slate-700 truncate">{title}</h2>
        <a 
          href={src} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm font-medium whitespace-nowrap ml-4"
          title={`如果显示不全，请在新标签页中打开 ${title}`}
        >
          全屏/新窗口打开
          <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
      
      {/* Iframe Container - Full dimensions, no padding */}
      <div className="flex-1 w-full relative bg-white">
        <iframe 
          src={src} 
          title={title} 
          className="absolute inset-0 w-full h-full border-none"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
        ></iframe>
      </div>
    </div>
  );
};