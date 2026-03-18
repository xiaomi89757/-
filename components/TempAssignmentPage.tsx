
import React from 'react';
import { BellRing, Clock, ShieldCheck, Zap, Layers, Rocket } from 'lucide-react';

export const TempAssignmentPage: React.FC = () => {
  return (
    <div className="relative min-h-full w-full bg-[#f8fafc] flex flex-col items-center justify-center overflow-hidden font-sans p-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl w-full relative z-10 text-center space-y-8 animate-fade-in">
        
        {/* Animated Icon Container */}
        <div className="relative mx-auto w-24 h-24 md:w-32 md:h-32 mb-10">
          <div className="absolute inset-0 bg-blue-600/10 rounded-[2.5rem] animate-pulse"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] shadow-2xl flex items-center justify-center text-white ring-4 ring-white">
            <BellRing size={48} className="animate-swing" />
          </div>
          {/* Floating dots */}
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 shadow-lg animate-bounce-slow border-4 border-white">
            <Zap size={20} fill="currentColor" />
          </div>
        </div>

        {/* Text Area */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            临时交办 <span className="text-blue-600 font-extrabold">功能预留</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
            本板块已升级为分厂“临时交办”工作平台预留区，<br className="hidden md:block" />
            后续将用于发布阶段性紧急任务、临时通告及跨部门协作事务。
          </p>
        </div>

        {/* Features List (Conceptual) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-left space-y-2">
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-2">
              <Clock size={20} />
            </div>
            <h4 className="font-bold text-slate-800">时效性任务</h4>
            <p className="text-xs text-slate-400">快速下达阶段性紧急任务，实时追踪处理进度。</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-left space-y-2">
            <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-2">
              <Layers size={20} />
            </div>
            <h4 className="font-bold text-slate-800">分类化归口</h4>
            <p className="text-xs text-slate-400">针对不同工段类型进行定向任务推送与数据归集。</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-left space-y-2">
            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-2">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-bold text-slate-800">全流程闭环</h4>
            <p className="text-xs text-slate-400">建立从派单到核销的全链条闭环，确保件件有落实。</p>
          </div>
        </div>

        {/* Action / Status */}
        <div className="pt-8">
           <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full text-sm font-black shadow-xl">
             <Rocket size={18} className="text-blue-400" />
             板块就绪 · 待发布内容载入
           </div>
        </div>
      </div>

      <style>{`
        @keyframes swing {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        .animate-swing {
          animation: swing 2s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};
