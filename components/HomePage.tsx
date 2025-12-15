
import React, { useState, useEffect } from 'react';
import { Bell, Users } from 'lucide-react';
import { ViewState } from '../types';

interface HomePageProps {
  onNavigate: (view: ViewState) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [notices, setNotices] = useState<string[]>([]);

  useEffect(() => {
    // 模拟通知数据
    const mockNotices = [
      '重要通知：【2025年冬季安全生产专项检查】工作已全面启动，请各部门积极配合。',
      '事项提醒：【精益提案申报】截止日期为每月25日，请按时提交。',
      '最新动态：热烈祝贺公司成功荣获EPD平台及全国首家长流程【低碳排放钢双认证】。',
      '政策宣贯：【公司治本攻坚三年专项整治方案】文件已发布，请认真学习。',
    ];
    setNotices(mockNotices);

    // 加载不蒜子统计脚本
    const loadBusuanzi = () => {
      const existingScript = document.getElementById('busuanzi-core');
      if (existingScript) existingScript.remove();

      const script = document.createElement('script');
      script.id = 'busuanzi-core';
      script.src = `https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js`;
      script.async = true;
      document.body.appendChild(script);
    };

    const timer = setTimeout(loadBusuanzi, 1000);
    return () => {
      clearTimeout(timer);
      const script = document.getElementById('busuanzi-core');
      if (script) script.remove();
    };
  }, []);

  return (
    <div className="min-h-full w-full bg-gradient-to-b from-slate-800 via-indigo-850 to-blue-900 flex flex-col items-center justify-center text-center px-4 md:px-10 relative animate-fade-in overflow-hidden">
      
      {/* 背景装饰光晕 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 标题区域 */}
      <div className="relative z-10 mb-10 md:mb-16 space-y-6 md:space-y-8 max-w-full -top-12 md:top-0">
        <h1 className="text-[2.4rem] sm:text-5xl md:text-7xl font-black text-white tracking-tight sm:tracking-wider drop-shadow-[0_8px_24px_rgba(0,0,0,0.8)] leading-tight px-2 whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="md:hidden">第二炼钢厂管理平台</span>
          <span className="hidden md:inline">第二炼钢厂综合管理平台</span>
        </h1>
        
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

      {/* 毛玻璃通知卡片 */}
      <div className="relative z-10 w-full max-w-[94%] lg:max-w-7xl bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] py-2 px-6 md:py-3 md:px-10 shadow-[0_25px_60_rgba(0,0,0,0.4)] transition-all duration-300">
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          <div className="relative flex items-center justify-center shrink-0 p-1">
            <Bell size={24} className="text-amber-500 animate-bounce" style={{ color: '#DAA520' }} />
            <div 
              className="absolute -top-0.5 -right-1 w-2.5 h-2.5 bg-[#ff0000] rounded-full shadow-[0_0_15px_#ff0000] z-20 border border-white/50"
              style={{ backgroundColor: '#ff0000' }}
            ></div>
          </div>
          <h3 className="text-sm md:text-lg font-bold text-white tracking-wide">
            通知通告
          </h3>
        </div>

        <div className="relative w-full overflow-hidden h-10 flex items-center border-t border-white/10 pt-2 md:pt-3">
          <span className="text-white/80 font-black mr-2 shrink-0 text-lg md:text-xl">:</span>
          <div className="flex-1 h-full overflow-hidden">
            <div className="marquee-wrapper flex items-center h-full whitespace-nowrap">
              <div className="marquee-content flex items-center gap-16 pr-16">
                {notices.map((n, i) => (
                  <span key={i} className="text-white text-base md:text-xl font-bold opacity-100 tracking-wide">
                    {n}
                  </span>
                ))}
              </div>
              <div className="marquee-content flex items-center gap-16 pr-16">
                {notices.map((n, i) => (
                  <span key={i} className="text-white text-base md:text-xl font-bold opacity-100 tracking-wide">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 版权页脚与访问计数 */}
      <div className="absolute bottom-6 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-2 md:gap-3">
        <div 
          id="busuanzi_container_site_uv" 
          className="!flex inline-flex items-center gap-2 text-white/80 text-[10px] md:text-xs font-bold tracking-widest bg-white/5 px-5 py-2 rounded-full border border-white/10 backdrop-blur-lg shadow-xl"
        >
          <Users size={14} className="text-blue-400 shrink-0" />
          <span className="flex items-center whitespace-nowrap">
            平台已累计服务：
            <span 
              id="busuanzi_value_site_uv" 
              className="text-blue-400 mx-1.5 font-black text-xs md:text-sm transition-all duration-1000 [text-shadow:0_0_10px_rgba(96,165,250,0.9)]"
            >
              ...
            </span> 
            位用户
          </span>
        </div>
        
        <p className="text-white/40 text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase">
          © 2025 第二炼钢厂 版权所有
        </p>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-wrapper {
          animation: marquee-scroll 30s linear infinite;
          width: fit-content;
        }
        @media (max-width: 768px) {
          .marquee-wrapper {
            animation-duration: 25s;
          }
        }
        .marquee-wrapper:hover {
          animation-play-state: paused;
        }
        .marquee-content {
          display: inline-flex;
        }
      `}</style>
    </div>
  );
};
