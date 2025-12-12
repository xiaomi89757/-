import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [notices, setNotices] = useState<string[]>([]);

  useEffect(() => {
    const mockNotices = [
      '重要通知：【2025年冬季安全生产专项检查】工作已全面启动，请各部门积极配合。',
      '事项提醒：【精益提案申报】截止日期为每月25日，请按时提交。',
      '最新动态：热烈祝贺公司成功荣获EPD平台及全国首家长流程【低碳排放钢双认证】。',
      '政策宣贯：【公司治本攻坚三年专项整治方案】文件已发布，请认真学习。',
    ];
    setNotices(mockNotices);
  }, []);

  return (
    <div className="min-h-full w-full bg-gradient-to-b from-indigo-700 via-blue-600 to-indigo-900 flex flex-col items-center justify-center text-center px-4 md:px-6 relative animate-fade-in overflow-hidden">
      
      {/* 背景装饰光晕 */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* 标题区域 */}
      <div className="relative z-10 mb-10 md:mb-16 space-y-6 md:space-y-8">
        {/* 适配手机单行显示，进一步增大字号增强视觉冲击力 */}
        <h1 className="text-[2.1rem] sm:text-5xl md:text-7xl font-black text-white tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] whitespace-nowrap">
          第二炼钢厂综合管理平台
        </h1>
        
        <p className="text-slate-200 text-xl md:text-3xl font-bold tracking-[0.2em] drop-shadow-md">
          数字化转型，我们在行动
        </p>

        <div className="py-4 md:py-6">
          <h2 className="text-4xl md:text-6xl font-extrabold text-yellow-300 tracking-widest mb-2 md:mb-4 drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
            精益松钢 绿色发展
          </h2>
          <p className="text-white text-xl md:text-4xl font-black tracking-[0.1em] md:tracking-[0.2em] font-sans uppercase opacity-100 drop-shadow-xl">
            LEAN STEEL, GREEN DEVELOPMENT
          </p>
        </div>
      </div>

      {/* 毛玻璃通知卡片 */}
      <div className="relative z-10 w-full max-w-[96%] lg:max-w-7xl bg-white/15 backdrop-blur-lg border border-white/25 rounded-[2.5rem] py-2 px-6 md:py-3 md:px-10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
        <div className="flex items-center gap-3 mb-2 md:mb-3">
          {/* 铃铛容器 */}
          <div className="relative flex items-center justify-center shrink-0 p-1">
            <Bell size={24} className="text-amber-500 animate-bounce" style={{ color: '#DAA520' }} />
            {/* 红色小点：缩小尺寸 (w-2.5 h-2.5)，颜色使用极艳红色 (#ff0000)，发光效果更亮 */}
            <div 
              className="absolute -top-0.5 -right-1 w-2.5 h-2.5 bg-[#ff0000] rounded-full shadow-[0_0_12px_#ff0000] z-20 border border-white/40"
              style={{ backgroundColor: '#ff0000' }}
            ></div>
          </div>
          {/* 缩小“通知通告”字号 */}
          <h3 className="text-sm md:text-lg font-bold text-white tracking-wide">
            通知通告
          </h3>
        </div>

        <div className="relative w-full overflow-hidden h-10 flex items-center border-t border-white/15 pt-2 md:pt-3">
          <span className="text-white/90 font-black mr-2 shrink-0 text-lg md:text-xl">:</span>
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

      {/* 版权页脚 */}
      <div className="absolute bottom-8 left-0 right-0 z-10">
        <p className="text-white/70 text-xs md:text-base font-bold tracking-[0.2em] uppercase">
          © 2025 第二炼钢厂 版权所有
        </p>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        /* PC端速度：保持40秒 */
        .marquee-wrapper {
          animation: marquee-scroll 40s linear infinite;
          width: fit-content;
        }

        /* 移动端滚动速度：保持35秒 */
        @media (max-width: 768px) {
          .marquee-wrapper {
            animation-duration: 35s;
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
