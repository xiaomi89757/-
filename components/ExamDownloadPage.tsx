
import React from 'react';
import { 
  Download, Smartphone, Info, 
  UserCheck, HelpCircle, ChevronRight,
  KeyRound, User, ShieldCheck
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
      <div className="max-w-3xl mx-auto space-y-6 md:space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-purple-600 text-white rounded-2xl shadow-xl shadow-purple-200 mb-4">
            <Download size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 tracking-tight">
            考试星 APP 下载
          </h1>
          <p className="text-slate-500 font-bold tracking-widest uppercase text-xs">
            Digital Learning & Assessment Platform
          </p>
        </div>

        {/* 1. Account Info Card - Premium Dark Purple Version */}
        <div className="bg-slate-900 rounded-[2rem] shadow-2xl p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <KeyRound className="text-purple-400" size={24} />
              <h2 className="text-xl font-black tracking-tight text-left">登录账号与密码指引</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center group hover:bg-white/10 transition-all text-left">
                <div className="bg-purple-600/30 p-3 rounded-xl mr-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">考试星账号</p>
                  <p className="text-lg font-black tracking-wider text-purple-100">本人工号</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center group hover:bg-white/10 transition-all text-left">
                <div className="bg-purple-600/30 p-3 rounded-xl mr-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">默认密码</p>
                  <p className="text-lg font-black tracking-wider text-purple-100">sg123456</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Download Buttons - Rich Colors & Separate */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <Smartphone className="text-purple-600" size={20} />
            <h3 className="text-lg font-black text-slate-800">选择您的操作系统下载</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Android Button */}
            <a 
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center p-6 bg-emerald-50 border-2 border-emerald-100 rounded-3xl hover:bg-emerald-100 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-white text-emerald-500 rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform shadow-sm">
                <Smartphone size={32} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-xl font-black text-slate-800">Android 版</h4>
                <p className="text-xs text-emerald-600 font-bold">安卓系统官方下载</p>
              </div>
              <ChevronRight className="text-emerald-400 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* iOS Button */}
            <a 
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center p-6 bg-white border-2 border-slate-200 rounded-3xl hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-xl"
            >
              <div className="w-14 h-14 bg-slate-800 text-white rounded-2xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform shadow-sm">
                <AppleIcon size={32} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-xl font-black text-slate-800">iOS 版</h4>
                <p className="text-xs text-slate-500 font-bold">App Store 官方下载</p>
              </div>
              <ChevronRight className="text-slate-400 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 3. Instructions */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-6 md:p-10">
          <div className="flex items-center mb-6 border-b border-slate-50 pb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-xl mr-3">
              <Info size={20} />
            </div>
            <h3 className="text-lg font-black text-slate-800">安装与使用说明</h3>
          </div>
          
          <div className="space-y-6 text-left">
            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-emerald-500 text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg shadow-emerald-100">1</div>
              <div>
                <h4 className="text-base font-black text-slate-800 mb-1">安卓用户</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  点击上方 Android 下载按钮，在打开的页面中直接下载 APK 文件。若提示安全风险，请选择“继续安装”。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-slate-800 text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg shadow-slate-200">2</div>
              <div>
                <h4 className="text-base font-black text-slate-800 mb-1">苹果用户</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  点击上方 iOS 下载按钮，系统将自动跳转至 App Store 应用商店。直接点击“获取”进行安装即可。
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-8 h-8 bg-blue-500 text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg shadow-blue-100">3</div>
              <div>
                <h4 className="text-base font-black text-slate-800 mb-1">账号登录方式</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  账号请输入您的<span className="font-bold text-slate-800">本人工号</span>，初始密码统一为 <span className="font-mono font-bold text-blue-600 px-1 bg-blue-50 rounded">sg123456</span>。如有疑问请咨询工段技术员。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Support */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs py-4">
          <HelpCircle size={14} />
          <span>安装遇到问题，请咨询第二炼钢厂相关管理科室</span>
        </div>

      </div>
    </div>
  );
};
