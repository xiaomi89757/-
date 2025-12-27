
import React from 'react';
import { 
  Download, Smartphone, Info, 
  UserCheck, HelpCircle, ChevronRight,
  KeyRound, User, ShieldCheck, Building2
} from 'lucide-react';

// 标准苹果实心图标组件 (Bitten Apple Logo)
const AppleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.057 1.25c-.864.054-1.89.57-2.484 1.282-.533.642-.96 1.583-.82 2.505.945.073 1.905-.472 2.476-1.157.533-.642.923-1.547.828-2.63m.22 3.82c-1.344 0-2.493.822-3.155.822-.673 0-1.63-.787-2.73-.767-1.442.022-2.772.84-3.512 2.128-1.493 2.597-.382 6.452 1.063 8.543.707 1.023 1.548 2.167 2.658 2.126 1.068-.04 1.474-.693 2.766-.693 1.284 0 1.66.693 2.788.673 1.147-.02 1.874-1.04 2.576-2.072.812-1.192 1.148-2.345 1.168-2.405-.025-.01-2.247-.864-2.272-3.414-.02-2.14 1.745-3.166 1.83-3.216-1.002-1.468-2.553-1.632-3.112-1.675" />
  </svg>
);

export const ExamDownloadPage: React.FC = () => {
  const androidUrl = "https://www.123865.com/s/pR9rVv-uJXO3";
  const iosUrl = "https://apps.apple.com/cn/app/1661503958";

  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-8 animate-fade-in font-sans">
      <div className="max-w-4xl mx-auto space-y-5 md:space-y-8">
        
        {/* Header - Compact */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-2.5 bg-purple-600 text-white rounded-xl shadow-lg shadow-purple-100 mb-3">
            <Download size={24} />
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 mb-1 tracking-tight">
            考试星 APP 下载
          </h1>
          <p className="text-slate-400 font-bold tracking-widest uppercase text-[10px]">
            Digital Learning & Assessment Platform
          </p>
        </div>

        {/* 1. Account Info Card - Redesigned Emphasis on Labels */}
        <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] shadow-xl p-5 md:p-7 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-purple-600/15 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-5">
              <KeyRound className="text-purple-400" size={20} />
              <h2 className="text-lg md:text-xl font-black tracking-tight text-left">登录凭证指引</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
              {/* Item 1: Organization ID (Emphasis on Label) */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex items-center group hover:bg-white/10 transition-all text-left">
                <div className="bg-purple-600/30 p-3 rounded-xl mr-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <Building2 size={24} />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-white tracking-tight mb-0.5">组织 ID</p>
                  <p className="text-sm md:text-base font-bold text-purple-300 whitespace-nowrap">395964</p>
                </div>
              </div>

              {/* Item 2: Account (Emphasis on Label) */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex items-center group hover:bg-white/10 transition-all text-left">
                <div className="bg-purple-600/30 p-3 rounded-xl mr-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-white tracking-tight mb-0.5">考试星账号</p>
                  <p className="text-sm md:text-base font-bold text-purple-300 whitespace-nowrap">本人工号</p>
                </div>
              </div>

              {/* Item 3: Password (Emphasis on Label) */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-5 flex items-center group hover:bg-white/10 transition-all text-left">
                <div className="bg-purple-600/30 p-3 rounded-xl mr-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-black text-white tracking-tight mb-0.5">默认密码</p>
                  <p className="text-sm md:text-base font-bold text-purple-300 whitespace-nowrap">sg123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Download Buttons */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Smartphone className="text-purple-600" size={16} />
            <h3 className="text-sm font-black text-slate-800">选择操作系统下载</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <a 
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner">
                <Smartphone size={22} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-base font-black text-slate-800 leading-tight">Android 版</h4>
                <p className="text-[10px] text-slate-400 font-bold group-hover:text-emerald-600 transition-colors">安卓系统官方下载</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" size={18} />
            </a>

            <a 
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center p-4 bg-white border border-slate-200 rounded-2xl hover:border-slate-800 hover:bg-slate-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <div className="w-10 h-10 bg-slate-100 text-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-inner">
                <AppleIcon size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-base font-black text-slate-800 leading-tight">iOS 版</h4>
                <p className="text-[10px] text-slate-400 font-bold group-hover:text-slate-600 transition-colors">App Store 官方下载</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-slate-800 transition-transform group-hover:translate-x-1" size={18} />
            </a>
          </div>
        </div>

        {/* 3. Instructions */}
        <div className="bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="flex items-center mb-5 border-b border-slate-50 pb-3">
            <div className="p-1.5 bg-purple-50 text-purple-600 rounded-lg mr-2.5">
              <Info size={16} />
            </div>
            <h3 className="text-base font-black text-slate-800">安装与使用说明</h3>
          </div>
          
          <div className="space-y-5 text-left">
            <div className="flex gap-4">
              <div className="shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-emerald-100">1</div>
              <div>
                <h4 className="text-xs font-black text-slate-800 mb-0.5">安卓用户</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  点击下载按钮后下载 APK 文件。若手机提示安全风险，请选择“继续安装”。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-6 h-6 bg-slate-800 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-slate-200">2</div>
              <div>
                <h4 className="text-xs font-black text-slate-800 mb-0.5">苹果用户</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  跳转至 App Store 后直接下载。首次运行可能需要输入上方的<span className="font-bold text-slate-700 mx-0.5 underline decoration-purple-200">组织 ID</span>。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-6 h-6 bg-blue-500 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-blue-100">3</div>
              <div>
                <h4 className="text-xs font-black text-slate-800 mb-0.5">账号登录方式</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  账号请输入您的<span className="font-bold text-slate-800">本人工号</span>，初始密码统一为 <span className="font-mono font-bold text-blue-600 px-1 bg-blue-50 rounded">sg123456</span>。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Support */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] py-2 font-bold uppercase tracking-wider">
          <HelpCircle size={12} />
          <span>安装疑问请咨询管理科室</span>
        </div>

      </div>
    </div>
  );
};
