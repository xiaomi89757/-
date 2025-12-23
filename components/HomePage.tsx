
import React, { useState, useEffect } from 'react';
import { Bell, Users, Download, Apple, Info, X, Settings, ShieldCheck, ChevronRight, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface HomePageProps {
  onNavigate: (view: ViewState) => void;
  onInstall?: () => void;
  canInstall?: boolean;
}

const UV_BASE_OFFSET = 50; 

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onInstall, canInstall }) => {
  const [notices, setNotices] = useState<string[]>([]);
  const [showAppleModal, setShowAppleModal] = useState(false);
  const [rawUV, setRawUV] = useState<number>(() => {
    const saved = localStorage.getItem('steel_plant_raw_uv_v3');
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    const mockNotices = [
      '重要通知：【2025年冬季安全生产专项检查】工作已全面启动，请各部门积极配合。',
      '事项提醒：【精益提案申报】截止日期为每月25日，请按时提交。',
      '最新动态：热烈祝贺公司成功荣获EPD平台及全国首家长流程【低碳排放钢双认证】。',
      '政策宣贯：【公司治本攻坚三年专项整治方案】文件已发布，请认真学习。',
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
    <div className="min-h-full w-full bg-gradient-to-b from-slate-800 via-indigo-850 to-blue-900 flex flex-col items-center justify-center text-center px-4 md:px-10 relative animate-fade-in overflow-hidden">
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 精心设计的苹果用户tips文字气泡 */}
      <button 
        onClick={() => setShowAppleModal(true)}
        className="fixed bottom-24 right-6 md:right-10 z-50 group flex flex-col items-end animate-apple-float"
      >
        <div className="relative flex items-center gap-2.5 bg-white/90 backdrop-blur-2xl border border-white px-5 py-2.5 rounded-[1.5rem] shadow-[0_12px_40px_rgba(0,0,0,0.15)] group-hover:bg-white group-hover:scale-105 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 cursor-pointer ring-4 ring-blue-500/5">
          {/* 装饰性星星动画 */}
          <div className="absolute -top-2 -left-2 text-amber-400 animate-spin-slow">
            <Sparkles size={16} />
          </div>
          
          <div className="bg-slate-900 rounded-full p-1.5 shadow-sm">
            <Apple className="text-white" size={16} strokeWidth={2.5} />
          </div>
          
          <div className="flex flex-col items-start leading-tight">
            <span className="text-slate-800 text-[11px] font-black tracking-tight">苹果用户tips</span>
            <span className="text-slate-400 text-[8px] font-bold uppercase tracking-widest opacity-80">iOS Guide</span>
          </div>
          
          {/* 通知性小红点 */}
          <div className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500 border-2 border-white"></span>
          </div>
        </div>
        
        {/* 气泡小尖角 - 模仿 iOS 风格 */}
        <div className="mr-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white/90 drop-shadow-[0_4px_4px_rgba(0,0,0,0.05)]"></div>
      </button>

      <div className="relative z-10 mb-10 md:mb-16 space-y-6 md:space-y-8 max-w-full -top-12 md:top-0 w-full flex flex-col items-center">
        <div className="w-full px-6 sm:px-4 flex justify-center">
          <h1 className="text-[clamp(1.75rem,8.8vw,3.5rem)] sm:text-5xl md:text-7xl font-black text-white tracking-tight sm:tracking-wider drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)] leading-tight break-keep">
            <span className="sm:hidden block">第二炼钢厂管理平台</span>
            <span className="hidden sm:inline">第二炼钢厂综合管理平台</span>
          </h1>
        </div>
        
        <p className="text-slate-200 text-lg md:text-3xl font-bold tracking-[0.2em] drop-shadow-md">
          数字化转型，我们在行动
        </p>

        <div className="py-4 md:py-6">
          <h2 className="text-3xl md:text-6xl font-extrabold text-yellow-400 tracking-widest mb-2 md:mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
            精益松钢 绿色发展
          </h2>
          <p className="text-white text-sm md:text-4xl font-black tracking-[0.05em] md:tracking-[0.2em] font-sans uppercase opacity-100 drop-shadow-2xl px-4 whitespace-nowrap">
            LEAN STEEL, GREEN DEVELOPMENT
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[94%] lg:max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] py-2 px-6 md:py-3 md:px-10 shadow-[0_25px_60_rgba(0,0,0,0.4)] transition-all duration-300">
        <div className="flex items-center justify-between mb-2 md:mb-3">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center shrink-0 p-1">
              <Bell size={24} className="text-amber-500 animate-bounce" style={{ color: '#DAA520' }} />
              <div className="absolute -top-0.5 -right-1 w-2.5 h-2.5 bg-[#ff0000] rounded-full shadow-[0_0_15px_#ff0000] z-20 border border-white/50"></div>
            </div>
            <h3 className="text-sm md:text-lg font-bold text-white tracking-wide">通知通告</h3>
          </div>
          
          {canInstall && (
            <button onClick={onInstall} className="flex items-center gap-1.5 px-3 py-1 bg-blue-500 text-white rounded-full text-[10px] font-black hover:bg-blue-400 transition-all shadow-lg animate-pulse">
              <Download size={12} />
              安装到桌面
            </button>
          )}
        </div>

        <div className="relative w-full overflow-hidden h-10 flex items-center border-t border-white/10 pt-2 md:pt-3">
          <span className="text-white/80 font-black mr-2 shrink-0 text-lg md:text-xl">:</span>
          <div className="flex-1 h-full overflow-hidden">
            <div className="marquee-wrapper flex items-center h-full whitespace-nowrap">
              <div className="marquee-content flex items-center gap-16 pr-16">
                {notices.map((n, i) => (
                  <span key={i} className="text-white text-base md:text-xl font-bold opacity-100 tracking-wide">{n}</span>
                ))}
              </div>
              <div className="marquee-content flex items-center gap-16 pr-16">
                {notices.map((n, i) => (
                  <span key={i} className="text-white text-base md:text-xl font-bold opacity-100 tracking-wide">{n}</span>
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
            <span className="text-blue-400 mx-1.5 font-black text-xs md:text-sm transition-all duration-1000 [text-shadow:0_0_10px_rgba(96,165,250,0.9)]">
              {displayValue}
            </span> 
            位用户
          </span>
        </div>
        
        <p className="text-white/40 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">
          © 2025 第二炼钢厂 版权所有
        </p>
      </div>

      {/* Apple 用户设置指南模态框 */}
      {showAppleModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="max-w-sm w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
            <div className="bg-[#f2f2f7] px-6 py-4 flex items-center justify-between border-b border-slate-200">
               <div className="flex items-center gap-2">
                 <Apple size={20} className="text-slate-800" />
                 <h4 className="font-bold text-slate-800">iOS 体验优化指导</h4>
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
                       <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-black shrink-0">
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
                 className="w-full py-4 bg-blue-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 active:scale-95 transition-all"
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
      `}</style>
    </div>
  );
};
