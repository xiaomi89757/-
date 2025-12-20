
import React, { useState, useEffect, useRef } from 'react';
import { Search, BookOpen, Video, FileText, X, ExternalLink, Maximize2, Zap, Loader2, Star, Clock, ChevronRight, Sparkles } from 'lucide-react';
import { Resource } from '../types';
import { LEAN_RESOURCES, LEAN_CATEGORIES, CATEGORY_TAG_THEMES } from '../constants';

const FRUIT_COLORS = [
  { bg: 'bg-[#10b981]', text: 'text-white' },
  { bg: 'bg-[#f59e0b]', text: 'text-white' },
  { bg: 'bg-[#f43f5e]', text: 'text-white' },
  { bg: 'bg-[#3b82f6]', text: 'text-white' },
  { bg: 'bg-[#8b5cf6]', text: 'text-white' },
];

export const LeanLearningPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('全部');
  const [headerShrunk, setHeaderShrunk] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [iframeScale, setIframeScale] = useState(1);
  const [clickCounts, setClickCounts] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('lean_learning_clicks');
    return saved ? JSON.parse(saved) : {};
  });

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setHeaderShrunk(scrollContainerRef.current.scrollTop > 60);
      }
    };
    const ref = scrollContainerRef.current;
    ref?.addEventListener('scroll', handleScroll);
    return () => ref?.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResourceClick = (res: Resource) => {
    const newCounts = { ...clickCounts, [res.id]: (clickCounts[res.id] || 0) + 1 };
    setClickCounts(newCounts);
    localStorage.setItem('lean_learning_clicks', JSON.stringify(newCounts));
    setSelectedResource(res);
  };

  const filteredResources = LEAN_RESOURCES.filter(res => {
    const matchesSearch = res.title.includes(searchQuery) || res.description.includes(searchQuery);
    const matchesCategory = activeCategory === '全部' || res.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video size={18} />;
      case 'pdf': return <FileText size={18} />;
      default: return <BookOpen size={18} />;
    }
  };

  return (
    <div className="h-full flex flex-col bg-[#f0f4f8] overflow-hidden font-['Noto_Sans_SC'] relative">
      
      {/* 1. 顶部头部 */}
      <header className={`shrink-0 z-40 bg-[#0a1631] text-white transition-all duration-500 ease-in-out px-4 md:px-10 flex items-center justify-between border-b border-white/10 shadow-xl relative ${headerShrunk ? 'h-14' : 'h-18 md:h-22'}`}>
        <div className="flex items-center gap-2 md:gap-3 relative z-10">
          <div className={`bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-500 ${headerShrunk ? 'w-8 h-8' : 'w-9 h-9 md:w-11 md:h-11 shadow-lg shadow-blue-500/20'}`}>
            <BookOpen size={headerShrunk ? 14 : 20} />
          </div>
          <h1 className={`font-black tracking-tight leading-none transition-all duration-500 ${headerShrunk ? 'text-sm' : 'text-lg md:text-2xl uppercase'}`}>
            精益知识库
          </h1>
        </div>

        <div className={`relative transition-all duration-500 ${headerShrunk ? 'w-32 md:w-64' : 'w-40 md:w-72'}`}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={12} />
          <input 
            type="text" 
            placeholder="搜资料..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full py-1 pl-8 pr-3 text-[10px] md:text-xs focus:bg-white focus:text-slate-900 focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all"
          />
        </div>
      </header>

      {/* 2. 粘性分类过滤器 */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-0 py-1.5 shadow-sm">
        <div className="flex items-center px-4 overflow-x-auto no-scrollbar gap-2 md:justify-center">
          {LEAN_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-3.5 py-1 rounded-full text-[10px] md:text-xs font-black transition-all duration-300 transform active:scale-90 ${activeCategory === cat ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. 资源列表 */}
      <main ref={scrollContainerRef} className="flex-1 overflow-y-auto p-3 md:p-6 space-y-3 scroll-smooth">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 md:gap-4 pb-20">
          {filteredResources.map((res, index) => {
            const fruit = FRUIT_COLORS[index % FRUIT_COLORS.length];
            const count = (clickCounts[res.id] || 0) + (index * 68 + 428);
            
            return (
              <button
                key={res.id}
                onClick={() => handleResourceClick(res)}
                className="group relative min-h-[94px] md:min-h-[103px] bg-white rounded-[1.25rem] border-[1.5px] border-blue-100/60 shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:border-blue-500 hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.95] transition-all duration-500 flex items-center text-left overflow-hidden cursor-pointer py-2"
              >
                {/* 1. 分享标签：再次缩小约2/5 (30px -> 18px / 44px -> 26px) */}
                <div className={`absolute top-0 left-0 h-[18px] md:h-[28px] px-2.5 md:px-5 flex items-center gap-1.5 rounded-br-[1rem] z-20 shadow-sm ${fruit.bg} ${fruit.text} group-hover:pl-7 transition-all duration-500`}>
                   <span className="text-[6px] md:text-[8px] font-black uppercase tracking-tighter opacity-80 group-hover:scale-105 transition-transform">分享</span>
                   <span className="text-xs md:text-lg font-black italic font-['JetBrains_Mono'] leading-none">
                     {res.shareIndex}
                   </span>
                </div>

                {/* 2. 左侧图标：适度调低上距 */}
                <div className="shrink-0 w-16 md:w-24 flex items-center justify-center pt-2 md:pt-3">
                   <div className="w-9 h-9 md:w-11 md:h-11 bg-slate-50/50 rounded-xl flex items-center justify-center text-blue-500/20 group-hover:text-blue-600 group-hover:bg-blue-50 group-hover:-rotate-12 group-hover:scale-115 transition-all duration-500">
                     {getIcon(res.type)}
                   </div>
                </div>

                {/* 3. 中间主要内容 */}
                <div className="flex-1 min-w-0 px-2 flex flex-col justify-center">
                  <div className="flex items-center gap-2.5 mb-0.5">
                    <span className={`text-[7px] md:text-[9px] font-black px-1.5 py-0.5 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500`}>
                      {res.category}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-400/20 group-hover:text-amber-400 transition-colors duration-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={8} fill={i < res.rating ? "currentColor" : "none"} className="group-hover:animate-pulse" />)}
                    </div>
                  </div>
                  
                  <h3 className="text-sm md:text-lg font-black text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-all duration-500 tracking-tight">
                    {res.title}
                  </h3>
                  
                  <p className="text-[9px] md:text-sm text-slate-400 font-medium line-clamp-1 opacity-90 mt-0.5 group-hover:text-slate-600 transition-colors duration-500">
                    {res.description}
                  </p>
                </div>

                {/* 4. 右侧：累计研学统计组 */}
                <div className="shrink-0 flex items-center gap-2 md:gap-8 pr-4 md:pr-10">
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-sm md:text-xl font-black font-['JetBrains_Mono'] text-blue-500 tabular-nums group-hover:scale-115 group-hover:text-blue-700 transition-all duration-500">
                      {count}
                    </span>
                    <div className="flex items-center gap-1 bg-[#f1f5f9] group-hover:bg-blue-50 px-1.5 py-0.5 rounded-full mt-1 transition-all duration-500 border border-transparent group-hover:border-blue-100">
                      <span className="text-[7px] md:text-[9px] font-black text-slate-400 group-hover:text-blue-500 uppercase tracking-tighter">*累计研学</span>
                      <div className="w-1.5 h-1.5 bg-[#2ecc71] rounded-full animate-pulse shadow-[0_0_8px_rgba(46,204,113,0.8)] group-hover:scale-125"></div>
                    </div>
                  </div>

                  {/* 进入按钮 */}
                  <div className="w-7 h-7 md:w-11 md:h-11 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-100 group-hover:bg-blue-700 group-hover:rotate-[360deg] group-hover:scale-115 transition-all duration-700 border border-white/20 shrink-0">
                    <ChevronRight size={16} md:size={20} strokeWidth={3} />
                  </div>
                </div>

                {/* 底部装饰亮线 */}
                <div className="absolute bottom-0 left-0 h-[2.5px] bg-blue-600 w-0 group-hover:w-full transition-all duration-700"></div>
              </button>
            );
          })}

          {/* 列表底部：持续分享提示区域 */}
          <div className="mt-8 flex flex-col items-center justify-center py-10 space-y-4 opacity-70 animate-in fade-in slide-in-from-bottom-4 duration-1000">
             <div className="flex items-center gap-3 md:gap-6">
                <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-slate-300"></div>
                <div className="flex items-center gap-2">
                   <Sparkles size={16} className="text-blue-500 animate-pulse" />
                   <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.4em] whitespace-nowrap">More Knowledge Is Coming</span>
                </div>
                <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-slate-300"></div>
             </div>
             <p className="text-xs md:text-base font-bold text-slate-500 tracking-wider">
               更多精益知识库内容正在持续整理分享中...
             </p>
             <div className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
                <span className="text-[10px] font-black text-blue-600 uppercase">Updating Daily</span>
             </div>
          </div>
        </div>
      </main>

      {/* 4. 资源预览模态框 */}
      {selectedResource && (
        <div className="fixed inset-0 z-[100] bg-slate-950/98 backdrop-blur-3xl flex flex-col animate-in fade-in duration-500">
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0a1631] shrink-0">
            <div className="flex items-center gap-2">
               <div className="p-2 bg-blue-600 text-white rounded-lg shadow-lg animate-pulse"><Zap size={16} fill="currentColor" /></div>
               <h2 className="text-white font-black text-sm md:text-xl truncate max-w-[200px] md:max-w-4xl tracking-tight">{selectedResource.title}</h2>
            </div>
            <button onClick={() => setSelectedResource(null)} className="p-2 text-white/40 hover:text-white hover:bg-red-500 hover:rotate-90 rounded-full transition-all duration-300">
              <X size={24} />
            </button>
          </div>
          <div className="flex-1 relative flex items-center justify-center p-1 md:p-6 bg-black/20">
            <div className="w-full h-full bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-500">
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-white z-0">
                <Loader2 className="animate-spin text-blue-500 mb-2" size={32} />
              </div>
              <iframe src={selectedResource.url} className="w-full h-full border-none relative z-10" title="Viewer" />
            </div>
          </div>
          <div className="px-4 py-2 bg-[#0a1631] border-t border-white/10 flex items-center justify-between shrink-0">
             <span className="text-[9px] text-white/40 font-black tracking-widest uppercase flex items-center gap-1">
               <Clock size={12} className="text-blue-500" /> 更新于 {selectedResource.updateDate}
             </span>
             <a href={selectedResource.url} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[9px] font-black rounded-full flex items-center gap-1 shadow-lg transition-all hover:scale-105">外部浏览器打开 <ExternalLink size={12} /></a>
          </div>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @font-face {
          font-family: 'JetBrains Mono';
          src: url('https://fonts.gstatic.com/s/jetbrainsmono/v18/t64vV45VOnY4Bf44Y4S-MIdN.woff2') format('woff2');
        }
      `}</style>
    </div>
  );
};
