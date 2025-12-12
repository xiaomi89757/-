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
    <div className="relative w-full h-full bg-slate-900 overflow-hidden flex flex-col">
      {/* 工业风背景图 */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-[0.35]"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop')`,
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-slate-900/80"></div>

      <div className="relative z-10 p-6 md:p-12 flex flex-col flex-1 justify-center items-center text-center">
        {/* 标题部分 - 恢复简洁风格 */}
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-block px-3 py-1 rounded bg-blue-600/80 backdrop-blur-sm text-white text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 shadow-lg">
            数字化赋能 · 精益管理
          </div>
          <h1 className="text-3xl md:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-2xl">
            第二炼钢厂综合管理平台
          </h1>
          <p className="text-sm md:text-xl text-slate-300 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
            构建安全、绿色、高效的现代化信息化服务阵地
          </p>
        </div>

        {/* 底部通知栏 */}
        <div className="w-full max-w-5xl mt-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/30">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <LucideIcons.Bell className="text-yellow-400 animate-bounce" size={18} />
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-slate-900 shadow-sm"></span>
                </div>
                <h2 className="text-xs md:text-sm font-bold text-white tracking-widest">通知公告</h2>
              </div>
            </div>
            
            <div className="relative h-12 overflow-hidden">
              <div className="marquee-container flex items-center h-full whitespace-nowrap">
                <div className="marquee-content flex items-center gap-12 pr-12">
                  {notices.map((notice, index) => (
                    <div key={`n1-${index}`} className="flex items-center gap-2 text-white/90 text-xs md:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      {notice}
                    </div>
                  ))}
                </div>
                {/* 循环部分确保无缝滚动 */}
                <div className="marquee-content flex items-center gap-12 pr-12">
                  {notices.map((notice, index) => (
                    <div key={`n2-${index}`} className="flex items-center gap-2 text-white/90 text-xs md:text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                      {notice}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center pb-4">
            <p className="text-[10px] text-slate-500 font-medium uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} Second Steelmaking Plant · All Rights Reserved
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .marquee-container {
          animation: marquee-scroll 45s linear infinite;
          width: fit-content;
        }

        .marquee-container:hover {
          animation-play-state: paused;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};
