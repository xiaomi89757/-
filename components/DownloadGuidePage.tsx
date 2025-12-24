
import React from 'react';
import { 
  Smartphone, ShieldCheck, Info, 
  KeyRound, User, Layers, ChevronRight, Download,
  HelpCircle, UserCheck
} from 'lucide-react';

// 标准苹果实心图标组件 (Bitten Apple Logo)
const AppleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.057 1.25c-.864.054-1.89.57-2.484 1.282-.533.642-.96 1.583-.82 2.505.945.073 1.905-.472 2.476-1.157.533-.642.923-1.547.828-2.63m.22 3.82c-1.344 0-2.493.822-3.155.822-.673 0-1.63-.787-2.73-.767-1.442.022-2.772.84-3.512 2.128-1.493 2.597-.382 6.452 1.063 8.543.707 1.023 1.548 2.167 2.658 2.126 1.068-.04 1.474-.693 2.766-.693 1.284 0 1.66.693 2.788.673 1.147-.02 1.874-1.04 2.576-2.072.812-1.192 1.148-2.345 1.168-2.405-.025-.01-2.247-.864-2.272-3.414-.02-2.14 1.745-3.166 1.83-3.216-1.002-1.468-2.553-1.632-3.112-1.675" />
  </svg>
);

export const DownloadGuidePage: React.FC = () => {
  const androidUrl = "https://safety.sgai.com.cn/appDownload/songting/index.html";
  const iosUrl = "https://safety.sgai.com.cn/appDownload/songting/index.html";
  const harmonyUrl = "https://www.123865.com/s/pR9rVv-0JXO3";

  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-8 animate-fade-in font-sans">
      <div className="max-w-4xl mx-auto space-y-5 md:space-y-8">
        
        {/* Header Section - Compact */}
        <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
          <div className="shrink-0 p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
            <Smartphone size={24} />
          </div>
          <div className="text-left">
            <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">首安云 APP 下载</h1>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Safety Platform Installation</p>
          </div>
        </div>

        {/* 1. Account Info Card - Dark Premium */}
        <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] shadow-xl p-5 md:p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-600/15 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-5">
              <KeyRound className="text-blue-400" size={18} />
              <h2 className="text-base md:text-lg font-black tracking-tight">登录账号与密码指引</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center group transition-all">
                <div className="bg-blue-600/20 p-2 rounded-lg mr-3.5 text-blue-400">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase mb-0.5">账号</p>
                  <p className="text-sm md:text-base font-black text-blue-100">个人身份证号</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center group transition-all">
                <div className="bg-blue-600/20 p-2 rounded-lg mr-3.5 text-blue-400">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-[9px] text-slate-400 font-black uppercase mb-0.5">初始密码</p>
                  <p className="text-sm md:text-base font-black text-blue-100">身份证后 6 位</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Download Buttons - Flattened for Mobile */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Download className="text-blue-600" size={16} />
            <h3 className="text-sm font-black text-slate-800">立即下载安装</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Android Button - Flattened */}
            <a 
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-emerald-500 hover:bg-emerald-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-inner">
                <Smartphone size={22} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-black text-slate-800">Android 版</h4>
                <p className="text-[10px] text-slate-400 font-bold group-hover:text-emerald-600 transition-colors">安卓手机/各系统通用</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={18} />
            </a>

            {/* iOS Button - Flattened */}
            <a 
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-slate-800 hover:bg-slate-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <div className="w-10 h-10 bg-slate-100 text-slate-800 rounded-xl flex items-center justify-center mr-4 group-hover:bg-slate-900 group-hover:text-white transition-all shadow-inner">
                <AppleIcon size={20} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-black text-slate-800">iOS 版</h4>
                <p className="text-[10px] text-slate-400 font-bold group-hover:text-slate-600 transition-colors">iPhone / iPad 设备</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-slate-800" size={18} />
            </a>

            {/* HarmonyOS Button - Flattened */}
            <a 
              href={harmonyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                <Layers size={22} />
              </div>
              <div className="flex-1 text-left">
                <h4 className="text-sm font-black text-slate-800">鸿蒙版</h4>
                <p className="text-[10px] text-slate-400 font-bold group-hover:text-blue-600 transition-colors">HarmonyOS Next 专用</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-blue-500" size={18} />
            </a>
          </div>
          
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-3 flex items-center text-emerald-700 text-[11px] font-bold">
            <UserCheck className="mr-2 shrink-0" size={14} />
            提示：若跳转网盘下载，登录网盘账号后速度更快。
          </div>
        </div>

        {/* 3. Detailed Guide - Horizontal List */}
        <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-200 p-5 md:p-8">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-50 pb-3">
            <Info className="text-blue-600" size={18} />
            <h2 className="text-base font-black text-slate-800 tracking-tight">安装步骤详情</h2>
          </div>

          <div className="space-y-6 text-left">
            {/* Steps remain in list format as they are inherently thin */}
            <div className="flex gap-4 group">
              <div className="shrink-0 w-6 h-6 bg-green-500 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-green-100">1</div>
              <div className="space-y-1">
                <h4 className="text-xs font-black text-slate-700">安卓安装</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">点击下载后，若提示安全风险请选择“继续安装”。</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-blue-100">2</div>
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-700">鸿蒙 NEXT 安装</h4>
                <div className="text-[11px] text-slate-500 leading-relaxed space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p>1. 商店搜索下载 <span className="text-blue-600 font-bold">“卓易通”</span>。</p>
                  <p>2. 在其搜索框输入本页提供的链接下载。</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="shrink-0 w-6 h-6 bg-slate-800 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-slate-200">3</div>
              <div className="space-y-2">
                <h4 className="text-xs font-black text-slate-700">苹果 iOS 信任设置</h4>
                <div className="bg-amber-50 border-l-3 border-amber-400 p-3 rounded-r-xl">
                  <p className="text-[11px] text-amber-800 leading-normal">
                    <span className="font-bold">设置 → 通用 → VPN与设备管理</span><br />
                    点击并“信任”企业证书即可使用。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Tip */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-[10px] py-2 font-bold">
          <HelpCircle size={12} />
          <span>安装失败？请咨询第二炼钢厂安全科</span>
        </div>

      </div>
    </div>
  );
};
