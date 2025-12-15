
import React from 'react';
import { Cpu, HardHat, Rocket, Zap, Settings, Globe } from 'lucide-react';

export const LeanLearningComingSoon: React.FC = () => {
  return (
    <div className="relative h-full w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden font-sans">
      
      {/* 科技背景 - 网格 */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#3b82f6 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
      </div>
      
      {/* 动态光晕 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-indigo-600/10 rounded-full blur-[100px]"></div>

      {/* 扫描线 */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent absolute animate-scan"></div>
      </div>

      {/* 核心内容容器 */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        
        {/* 动态图标组 */}
        <div className="relative mb-12">
          {/* 外环旋转 */}
          <div className="absolute inset-0 -m-8 border-2 border-dashed border-blue-500/30 rounded-full animate-spin-slow"></div>
          
          {/* 中心图标 */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 bg-slate-900 rounded-3xl border border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(59,130,246,0.3)] group transition-transform duration-500 hover:scale-105">
            <Cpu size={64} className="text-blue-400 animate-pulse" strokeWidth={1.5} />
            
            {/* 四角装饰 */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-blue-400"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-blue-400"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-blue-400"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-blue-400"></div>
          </div>
        </div>

        {/* 文字区域 */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black uppercase tracking-[0.3em]">
            <Zap size={14} className="animate-bounce" />
            System Upgrading
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            精益知识库 <span className="text-blue-500">筹建中</span>
          </h2>
          
          <div className="text-slate-400 text-base md:text-xl font-medium leading-relaxed flex flex-col items-center gap-1 md:gap-2">
            <p>构建第二炼钢厂专属的数字化精益学习交流平台，</p>
            <p>整合先进生产经验与身边的最佳实践。</p>
          </div>

          {/* 状态指示器 */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8">
            <div className="flex items-center gap-2 text-slate-500">
              <Settings size={18} className="animate-spin-slow" />
              <span className="text-xs font-bold uppercase tracking-widest">架构设计完成</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Globe size={18} className="animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest">内容采集同步中</span>
            </div>
          </div>
        </div>

        {/* 底部装饰 */}
        <div className="mt-16 w-64 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 w-1/3 animate-loading-bar"></div>
        </div>
      </div>

      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};
