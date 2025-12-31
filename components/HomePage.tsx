
import React, { useState, useEffect, useMemo } from 'react';
import { Bell, Users, Download, Info, X, Settings, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

// 标准苹果实心图标组件
const AppleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.057 1.25c-.864.054-1.89.57-2.484 1.282-.533.642-.96 1.583-.82 2.505.945.073 1.905-.472 2.476-1.157.533-.642.923-1.547.828-2.63m.22 3.82c-1.344 0-2.493.822-3.155.822-.673 0-1.63-.787-2.73-.767-1.442.022-2.772.84-3.512 2.128-1.493 2.597-.382 6.452 1.063 8.543.707 1.023 1.548 2.167 2.658 2.126 1.068-.04 1.474-.693 2.766-.693 1.284 0 1.66.693 2.788.673 1.147-.02 1.874-1.04 2.576-2.072.812-1.192 1.148-2.345 1.168-2.405-.025-.01-2.247-.864-2.272-3.414-.02-2.14 1.745-3.166 1.83-3.216-1.002-1.468-2.553-1.632-3.112-1.675" />
  </svg>
);

// 具象化数字宫灯组件
const DigitalLantern = () => (
  <div className="fixed top-0 right-6 md:right-20 z-50 pointer-events-none origin-top animate-lantern-sway-lux">
    {/* 挂绳 */}
    <div className="w-[2px] h-10 bg-gradient-to-b from-transparent to-amber-500 mx-auto"></div>
    
    <div className="relative flex flex-col items-center">
      {/* 檐顶 (Roof) - 六角造型 */}
      <div className="w-20 h-4 bg-gradient-to-b from-red-800 to-red-950 rounded-t-lg border-b-2 border-yellow-500/50 shadow-lg relative">
        <div className="absolute inset-0 border-x-[10px] border-x-transparent border-b-[16px] border-b-red-900 -top-3"></div>
      </div>

      {/* 灯身 (Body) */}
      <div className="relative w-16 h-24 flex items-center justify-center">
        {/* 金色骨架 (Side Pillars) */}
        <div className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-600 rounded-full shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
        <div className="absolute right-0 inset-y-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-200 to-yellow-600 rounded-full shadow-[0_0_5px_rgba(250,204,21,0.5)]"></div>
        
        {/* 红色玻璃质感中间层 */}
        <div className="w-14 h-22 bg-[#b91c1c]/80 backdrop-blur-sm rounded-lg border border-red-500/30 flex items-center justify-center overflow-hidden">
          {/* 动画发光圈 */}
          <div className="absolute inset-0 animate-pulse bg-red-600/20 rounded-full blur-xl"></div>
          
          {/* 核心 (Core) - 3D 旋转 */}
          <div className="relative w-10 h-16 bg-slate-950/80 rounded border border-yellow-500/20 flex flex-col items-center justify-center animate-lantern-core-spin">
            <span className="text-yellow-400 font-black text-xs leading-none">20</span>
            <div className="w-6 h-[1px] bg-yellow-500/30 my-1"></div>
            <span className="text-yellow-400 font-black text-xs leading-none">26</span>
          </div>
        </div>
      </div>

      {/* 灯座 (Base) */}
      <div className="w-18 h-4 bg-gradient-to-r from-red-900 via-yellow-500 to-red-900 rounded-[24px] shadow-inner border-t border-yellow-400/30"></div>

      {/* 流苏 (Tassels) */}
      <div className="flex gap-1.5 mt-1">
        {/* 中心主束 */}
        <div className="flex gap-[2px] animate-tassel-wave-deluxe">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className="w-[1.5px] bg-gradient-to-b from-yellow-400 to-red-700 rounded-full" 
              style={{ height: `${24 + (i % 3) * 6}px`, animationDelay: `${i * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface HomePageProps {
  onNavigate: (view: ViewState) => void;
  onInstall?: () => void;
  canInstall?: boolean;
}

const UV_BASE_OFFSET = 150; 

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onInstall, canInstall }) => {
  const [notices, setNotices] = useState<string[]>([]);
  const [showAppleModal, setShowAppleModal] = useState(false);
  const [rawUV, setRawUV] = useState<number>(() => {
    const saved = localStorage.getItem('steel_plant_raw_uv_v3');
    return saved ? parseInt(saved) : 0;
  });

  // 随机金色粒子数据
  const particles = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      duration: `${10 + Math.random() * 15}s`,
      size: `${2 + Math.random() * 4}px`
    }));
  }, []);

  useEffect(() => {
    const mockNotices = [
      '🎉 2026元旦快乐：数智元旦，万象更新！祝全厂职工新年大吉！',
      '站内更新：精益知识平台已更新至《分享52》',
      '重要通知：【2025年冬季安全生产专项检查】工作已全面启动，请各部门积极配合。',
      '事项提醒：【精益提案申报】截止日期为每月25日，请按时提交。',
      '最新动态：热烈祝贺公司成功荣获EPD平台及全国首家长流程【低碳排放钢双认证】。',
    ];
    setNotices(mockNotices);

    const targetNode = document.getElementById('busuanzi_value_site_uv');
    if (!targetNode) return;

    const observer = new MutationObserver((mutations, obs) => {
      const text = targetNode.innerText.trim();
      if (text && text !== '...' && text !== '') {
        const num = parseInt(text.replace(/,/g, ''));
        if (!isNaN(num) && num > 0) {
          setRawUV(num);
          localStorage.setItem('steel_plant_raw_uv_v3', num.toString());
          obs.disconnect();
        }
      }
    });

    observer.observe(targetNode, { childList: true, characterData: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const displayValue = rawUV > 0 ? (rawUV + UV_BASE_OFFSET).toLocaleString() : '...';

  return (
    <div className="min-h-full w-full bg-gradient-to-b from-slate-900 via-[#0a1631] to-blue-950 flex flex-col items-center justify-center text-center px-4 md:px-10 relative animate-fade-in overflow-hidden">
      
      {/* 元旦庆典背景装饰 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* 金色粒子漂浮层 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map(p => (
          <div 
            key={p.id}
            className="absolute bg-yellow-400 rounded-full animate-gold-particle-float opacity-0 blur-[1px]"
            style={{ 
              left: p.left, 
              top: p.top, 
              width: p.size, 
              height: p.size, 
              animationDelay: p.delay,
              animationDuration: p.duration 
            }}
          />
        ))}
      </div>

      {/* 数字宫灯 */}
      <DigitalLantern />

      {/* 苹果用户提示气泡 (保持原有逻辑，优化视觉以配合节日) */}
      <button 
        onClick={() => setShowAppleModal(true)}
        className="fixed bottom-24 right-6 md:right-10 z-50 group flex flex-col items-end animate-apple-float"
      >
        <div className="relative flex items-center gap-2.5 bg-white/90 backdrop-blur-2xl border border-white px-5 py-2.5 rounded-[1.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.15)] group-hover:bg-white group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer ring-4 ring-red-500/5">
          <div className="absolute -top-2 -left-2 text-amber-400 animate-spin-slow">
            <Sparkles size={16} />
          </div>
          
          <div className="bg-red-700 rounded-full p-1.5 shadow-sm text-white">
            <AppleIcon size={16} />
          </div>
          
          <div className="flex flex-col items-start leading-tight">
            <span className="text-slate-800 text-[11px] font-black tracking-tight">苹果用户tips</span>
            <span className="text-red-500 text-[8px] font-bold uppercase tracking-widest opacity-80">iOS Guide</span>
          </div>
          
          <div className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
          </div>
        </div>
        <div className="mr-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/90 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)]"></div>
      </button>

      <div className="relative z-10 mb-10 md:mb-16 space-y-6 md:space-y-8 max-w-full -top-12 md:top-0 w-full flex flex-col items-center">
        
        {/* 1. 元旦喜庆标语组件 */}
        <div className="flex flex-col items-center animate-in fade-in slide-in-from-top duration-1000">
           {/* 年份标签 (Year Label) */}
           <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/5 backdrop-blur-md border border-amber-500/40 rounded-full mb-3 md:mb-5">
              <span className="text-[10px] md:text-xs italic font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-[0.1em]">
                2026 DIGITAL YEAR
              </span>
           </div>
           
           {/* 核心标语 (Main Slogan) */}
           <h2 className="text-[clamp(1.5rem,7vw,4rem)] md:text-6xl font-black tracking-[0.15em] mb-2 text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-500 to-amber-800 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] px-4">
             数智元旦 · 万象更新
           </h2>
        </div>

        <div className="w-full px-6 sm:px-4 flex justify-center">
          <h1 className="text-[clamp(1.25rem,5vw,2.5rem)] sm:text-3xl md:text-5xl font-black text-white/90 tracking-tight sm:tracking-wider drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)] leading-tight break-keep border-t border-white/10 pt-4 md:pt-6 mt-2">
            <span className="sm:hidden block">第二炼钢厂管理平台</span>
            <span className="hidden sm:inline">第二炼钢厂综合管理平台</span>
          </h1>
        </div>
        
        <p className="text-slate-300 text-base md:text-2xl font-bold tracking-[0.3em] drop-shadow-md uppercase opacity-80">
          Digital Innovation & Prosperity
        </p>

        <div className="py-4 md:py-6">
          <h2 className="text-3xl md:text-6xl font-extrabold text-yellow-400 tracking-widest mb-2 md:mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
            精益松钢 绿色发展
          </h2>
          <p className="text-white text-sm md:text-4xl font-black tracking-[0.05em] md:tracking-[0.2em] font-sans uppercase opacity-100 drop-shadow-2xl px-4 whitespace-nowrap">
            LEAN STEEL, GREEN DEVELOPMENT
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[94%] lg:max-w-7xl bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] py-2 px-6 md:py-3 md:px-10 shadow-[0_25px_60_rgba(0,0,0,0.5)] transition-all duration-300 ring-1 ring-white/5">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center shrink-0 p-1">
              <Bell size={24} className="text-red-500 animate-bounce" />
              <div className="absolute -top-0.5 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_15px_#facc15] z-20 border border-white/50"></div>
            </div>
            <h3 className="text-sm md:text-lg font-bold text-white tracking-wide">元旦特别公告</h3>
          </div>
          
          {canInstall && (
            <button onClick={onInstall} className="flex items-center gap-1.5 px-3 py-1 bg-red-600 text-white rounded-full text-[10px] font-black hover:bg-red-500 transition-all shadow-lg">
              <Download size={12} />
              安装到桌面
            </button>
          )}
        </div>

        <div className="relative w-full overflow-hidden h-10 flex items-center border-t border-white/10 pt-2 md:pt-3">
          <span className="text-yellow-500/80 font-black mr-2 shrink-0 text-lg md:text-xl">:</span>
          <div className="flex-1 h-full overflow-hidden">
            <div className="marquee-wrapper flex items-center h-full whitespace-nowrap">
              <div className="marquee-content flex items-center gap-16 pr-16">
                {notices.map((n, i) => (
                  <span key={i} className={`text-base md:text-xl font-bold tracking-wide ${n.includes('🎉') ? 'text-yellow-400' : 'text-white'}`}>{n}</span>
                ))}
              </div>
              <div className="marquee-content flex items-center gap-16 pr-16">
                {notices.map((n, i) => (
                  <span key={i} className={`text-base md:text-xl font-bold tracking-wide ${n.includes('🎉') ? 'text-yellow-400' : 'text-white'}`}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 md:gap-3">
        <div className="inline-flex items-center gap-2 text-white/80 text-[10px] md:text-xs font-bold tracking-widest bg-white/5 px-5 py-2 rounded-full border border-white/10 backdrop-blur-lg shadow-xl">
          <Users size={14} className="text-blue-400 shrink-0" />
          <span className="flex items-center whitespace-nowrap">
            平台已累计服务：
            <span className="text-yellow-400 mx-1.5 font-black text-xs md:text-sm transition-all duration-1000 [text-shadow:0_0_10px_rgba(250,204,21,0.6)]">
              {displayValue}
            </span> 
            位用户
          </span>
        </div>
        
        <p className="text-white/40 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">
          © 2026 第二炼钢厂 · 新岁共启
        </p>
      </div>

      {/* Apple 用户设置指南模态框 */}
      {showAppleModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="max-w-sm w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#f2f2f7] px-6 py-4 flex items-center justify-between border-b border-slate-200">
               <div className="flex items-center gap-2 text-slate-800">
                 <AppleIcon size={20} />
                 <h4 className="font-bold">iOS 体验优化指导</h4>
               </div>
               <button onClick={() => setShowAppleModal(false)} className="p-2 bg-white rounded-full shadow-sm text-slate-400 hover:text-slate-800 transition-colors">
                 <X size={18} />
               </button>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
               <p className="text-sm text-slate-500 leading-relaxed text-left">
                 针对苹果 iOS 系统用户，为了确保平台内嵌文档正常显示且保持登录状态，请进行以下简单设置：
               </p>

               <div className="space-y-4">
                  {[
                    { step: 1, text: "打开手机“设置”", icon: <Settings size={14} /> },
                    { step: 2, text: "下滑找到“Safari 浏览器”", icon: <ChevronRight size={14} /> },
                    { step: 3, text: "找到“隐私与安全”栏目", icon: <ShieldCheck size={14} /> },
                    { step: 4, text: "关闭“阻止跨网站跟踪”", icon: <Info size={14} className="text-blue-500" /> }
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                       <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-black shrink-0">
                         {item.step}
                       </div>
                       <div className="flex-1 flex items-center justify-between">
                         <span className="text-sm font-bold text-slate-700">{item.text}</span>
                         <span className="text-slate-300">{item.icon}</span>
                       </div>
                    </div>
                  ))}
               </div>

               <button 
                 onClick={() => setShowAppleModal(false)}
                 className="w-full py-4 bg-red-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-red-500/20 active:scale-95 transition-all"
               >
                 我已了解
               </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrapper {
          animation: marquee-scroll 30s linear infinite;
          width: fit-content;
        }
        .marquee-wrapper:hover {
          animation-play-state: paused;
        }
        .marquee-content {
          display: inline-flex;
        }
        
        @keyframes apple-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }
        .animate-apple-float {
          animation: apple-float 4s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        /* 元旦特别动效 */
        @keyframes lantern-sway-lux {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        .animate-lantern-sway-lux {
          animation: lantern-sway-lux 4s ease-in-out infinite;
        }

        @keyframes lantern-core-spin {
          0% { transform: perspective(100px) rotateY(0deg); }
          100% { transform: perspective(100px) rotateY(360deg); }
        }
        .animate-lantern-core-spin {
          animation: lantern-core-spin 5s linear infinite;
        }

        @keyframes tassel-wave-deluxe {
          0%, 100% { transform: scaleY(1); filter: brightness(1); }
          50% { transform: scaleY(0.9) skewX(2deg); filter: brightness(1.2); }
        }
        .animate-tassel-wave-deluxe {
          animation: tassel-wave-deluxe 2s ease-in-out infinite;
        }

        @keyframes gold-particle-float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        .animate-gold-particle-float {
          animation: gold-particle-float linear infinite;
        }
      `}</style>
    </div>
  );
};
