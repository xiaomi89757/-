
import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

export const HomePage: React.FC = () => {
  const [notices, setNotices] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching notices
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
    // Changed h-full to min-h-full to ensure background stretches if content is tall
    // Removed overflow-hidden from root to allow scrolling
    <div className="relative w-full min-h-full bg-slate-100">
      {/* Background Image/Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-75 transition-all duration-500 ease-in-out"
        style={{ 
          backgroundImage: `url('/images/home_bg.jpg')`, // User provided image
          backgroundAttachment: 'scroll' // Changed from fixed to scroll for better mobile support
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-indigo-800/70"></div>

      <div className="relative z-10 p-4 md:p-8 flex flex-col h-full min-h-[calc(100vh-60px)] justify-between">
        {/* Header Content */}
        <div className="text-white text-center py-12 md:py-24">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-lg">
            第二炼钢厂综合管理平台
          </h1>
          <p className="text-base md:text-xl font-light opacity-90 max-w-3xl mx-auto drop-shadow-md">
            数字化转型，我们在行动
          </p>
          <div className="mt-8">
            <h2 className="text-2xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg">精益松钢   绿色发展</h2>
            <p className="text-lg md:text-xl font-medium text-yellow-100 opacity-90">LEAN STEEL, GREEN DEVELOPMENT</p>
          </div>
        </div>

        {/* Dynamic Scrolling Notices */}
        <div className="relative w-full bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl border border-white/20 p-4 mb-4 md:mb-8">
          <div className="flex items-center mb-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white mr-3 shrink-0">
              <LucideIcons.Bell size={18} />
            </span>
            <h2 className="text-lg md:text-xl font-bold text-white tracking-wide">通知通告 & 重要事项</h2>
          </div>
          <div className="h-16 overflow-hidden relative flex items-center">
            {/* 
               CRITICAL FIX: 
               Added 'min-w-max' to force the container to be as wide as the text content.
               This ensures translateX(-50%) moves the full length of the text, preventing early resets.
            */}
            <div className="marquee-track flex space-x-8 md:space-x-12 whitespace-nowrap min-w-max">
              {notices.concat(notices).map((notice, index) => ( // Duplicate to ensure seamless loop
                <p key={index} className="text-base md:text-lg text-white font-medium flex-shrink-0">
                  <span className="text-blue-200 mr-2">●</span> {notice}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Access / Footer CTA (Optional) */}
        <div className="text-center text-white py-4 opacity-80">
          <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} 第二炼钢厂 版权所有</p>
        </div>
      </div>

      {/* Tailwind CSS keyframe for horizontal marquee */}
      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Half of the duplicated content */
        }
        
        .marquee-track {
          display: flex;
          /* Mobile: 45s. Slowed down significantly for readability */
          animation: marquee-horizontal 45s linear infinite !important;
          will-change: transform; /* Hardware acceleration hint */
        }

        /* Desktop: 60s. Longer duration for wider screens/same content to keep comfortable speed */
        @media (min-width: 768px) {
          .marquee-track {
            animation-duration: 60s !important;
          }
        }
      `}</style>
    </div>
  );
};
