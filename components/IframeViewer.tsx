
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { SafariBridge } from './SafariBridge';

interface IframeViewerProps {
  src: string;
  title: string;
}

export const IframeViewer: React.FC<IframeViewerProps> = ({ src, title }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  return (
    <div className="flex flex-col h-full w-full animate-fade-in bg-slate-50 relative">
      {/* 针对 iOS 的兼容性桥接层 */}
      <SafariBridge url={src} title={title} onUnlocked={() => setIsUnlocked(true)} />

      {/* Header Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-white border-b border-slate-200 shadow-sm shrink-0 z-10">
        <h2 className="text-sm md:text-base font-bold text-slate-700 truncate">{title}</h2>
        <a 
          href={src} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors text-xs md:text-sm font-medium whitespace-nowrap ml-4"
        >
          全屏/新窗口打开
          <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
      
      {/* Iframe Container */}
      <div className="flex-1 w-full relative bg-white overflow-hidden">
        <iframe 
          src={src} 
          title={title} 
          className="absolute inset-0 w-full h-full border-none"
          allowFullScreen
          // 这里的沙盒设置非常关键，必须允许 same-origin 以配合 Storage Access API
          sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
        ></iframe>
      </div>
    </div>
  );
};
