
import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

export const HomePage: React.FC = () => {
  const [notices, setNotices] = useState<string[]>([]);

  useEffect(() => {
    const mockNotices = [
      '重要通知：【2025年冬季安全生产专项检查】工作已全面启动，请各部门积极配合。',
      '事项提醒：【精益提案申报】截止日期为每月25日，请按时提交。',
      '最新动态：热烈祝贺公司成功荣获EPD平台及全国首家长流程【低碳排放钢双认证】。',
      '温馨提示：请全体职工提高警惕，注意【冬季低温冻害】和防寒保暖工作。',
      '政策宣贯：【公司治本攻坚三年专项整治方案】文件已发布，请认真学习。',
    ];
    setNotices(mockNotices);
  }, []);

  return (
    <div className="relative w-full min-h-full bg-slate-900 overflow-hidden flex flex-col">
      {/* Background with subtle animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-50 scale-105 transition-transform duration-[20s] ease-linear"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop')`,
          animation: 'slow-zoom 30s infinite alternate'
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-slate-900/80 to-indigo-900/90"></div>

      <div className="relative z-10 p-6 md:p-12 flex flex-col flex-1 justify-center items-center text-center">
        {/* Hero Section */}
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            SINCE 1958 · 钢铁意志
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-6 drop-shadow-2xl">
            第二炼钢厂<span className="text-blue-500">综合管理</span>平台
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            以数字化赋能精益管理，构建安全、绿色、高效的现代化信息化服务阵地。
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            <div className="text-center group">
              <h2 className="text-3xl md:text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform">精益松钢</h2>
              <p className="text-xs md:text-sm text-slate-400 mt-2 font-bold tracking-widest">LEAN OPERATION</p>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block"></div>
            <div className="text-center group">
              <h2 className="text-3xl md:text-5xl font-black text-emerald-400 group-hover:scale-110 transition-transform">绿色发展</h2>
              <p className="text-xs md:text-sm text-slate-400 mt-2 font-bold tracking-widest">GREEN GROWTH</p>
            </div>
          </div>
        </div>

        {/* Improved Marquee Section */}
        <div className="w-full max-w-6xl mt-auto">
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center px-6 py-4 border-b border-white/5 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <LucideIcons.Bell className="text-blue-400 animate-bounce" size={20} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </div>
                <h2 className="text-sm md:text-base font-black text-white tracking-widest uppercase">通知公告 | Announcements</h2>
              </div>
            </div>
            
            <div className="relative h-14 overflow-hidden group">
              <div className="marquee-container flex items-center h-full whitespace-nowrap">
                {/* Loop 1 */}
                <div className="marquee-content flex items-center gap-16 pr-16">
                  {notices.map((notice, index) => (
                    <div key={`n1-${index}`} className="flex items-center gap-3 text-white/90 text-sm md:text-base hover:text-blue-300 transition-colors cursor-default">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                      {notice}
                    </div>
                  ))}
                </div>
                {/* Loop 2 for seamless scrolling */}
                <div className="marquee-content flex items-center gap-16 pr-16">
                  {notices.map((notice, index) => (
                    <div key={`n2-${index}`} className="flex items-center gap-3 text-white/90 text-sm md:text-base hover:text-blue-300 transition-colors cursor-default">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                      {notice}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} Second Steelmaking Plant · All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .marquee-container {
          animation: marquee-scroll 40s linear infinite;
          width: fit-content;
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
