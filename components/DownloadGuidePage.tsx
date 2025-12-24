
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
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
        
        {/* Header Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 mb-4">
            <Smartphone size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 tracking-tight">
            首安云 APP 下载与安装
          </h1>
          <p className="text-slate-500 font-bold tracking-widest uppercase text-xs md:text-sm">
            Digital Safety Management Platform
          </p>
        </div>

        {/* 1. Account Info Card - Restored to Premium Dark Version */}
        <div className="bg-slate-900 rounded-[2rem] shadow-2xl p-6 md:p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <KeyRound className="text-blue-400" size={24} />
              <h2 className="text-xl font-black tracking-tight">登录账号与密码指引</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center group hover:bg-white/10 transition-all">
                <div className="bg-blue-600/30 p-3 rounded-xl mr-4 text-blue-400 group-hover:scale-110 transition-transform">
                  <User size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">首安云账号</p>
                  <p className="text-lg font-black tracking-wider text-blue-100">个人身份证号</p>
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex items-center group hover:bg-white/10 transition-all">
                <div className="bg-blue-600/30 p-3 rounded-xl mr-4 text-blue-400 group-hover:scale-110 transition-transform">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">初始密码</p>
                  <p className="text-lg font-black tracking-wider text-blue-100">身份证后 6 位</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Download Actions - Restored to Individual Brand Buttons */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <Download className="text-blue-600" size={20} />
            <h3 className="text-lg font-black text-slate-800">选择您的操作系统下载</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Android Button */}
            <a 
              href={androidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all">
                <Smartphone size={32} />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">Android 版</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">安卓/各种系统</p>
              <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 rounded-full text-xs font-black text-slate-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                立即下载 <ChevronRight size={14} />
              </div>
            </a>

            {/* iOS Button - Kept with Optimized Bitten Apple Logo */}
            <a 
              href={iosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-slate-800 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-slate-50 text-slate-800 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-slate-900 group-hover:text-white transition-all">
                <AppleIcon size={32} />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">iOS 版</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">iPhone / iPad</p>
              <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 rounded-full text-xs font-black text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all">
                立即下载 <ChevronRight size={14} />
              </div>
            </a>

            {/* HarmonyOS Button */}
            <a 
              href={harmonyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-100 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Layers size={32} />
              </div>
              <h4 className="text-lg font-black text-slate-800 mb-1">鸿蒙版</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4">HarmonyOS Next</p>
              <div className="flex items-center gap-1.5 px-4 py-2 bg-slate-100 rounded-full text-xs font-black text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                立即下载 <ChevronRight size={14} />
              </div>
            </a>
          </div>
          
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-4 flex items-center justify-center text-emerald-700 text-sm font-bold shadow-sm">
            <UserCheck className="mr-2" size={18} />
            温馨提示：如果是跳转网盘下载，注册登录网盘账号可享高速免充值下载
          </div>
        </div>

        {/* 3. Detailed Installation Guide */}
        <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 p-6 md:p-10">
          <div className="flex items-center mb-8 border-b border-slate-100 pb-6">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl mr-4">
              <Info size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">详细安装指南</h2>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">Step-by-Step Instructions</p>
            </div>
          </div>

          <div className="space-y-12 text-left">
            
            {/* Android Guide */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-xl bg-green-500 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-green-200">1</div>
              <h3 className="text-lg font-black text-slate-800 mb-4">普通安卓手机</h3>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  点击上方下载按钮，在打开的页面中点击下载。若提示安全风险，请选择“继续安装”。安装完成后，直接点击 <span className="font-mono text-blue-600 font-bold bg-blue-50 px-1.5 rounded">.apk</span> 文件即可。
                </p>
              </div>
            </div>

            {/* Harmony Guide */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-xl bg-blue-500 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-blue-200">2</div>
              <h3 className="text-lg font-black text-slate-800 mb-4">华为鸿蒙系统 (HarmonyOS Next)</h3>
              <div className="bg-slate-50 rounded-2xl p-6 space-y-4 border border-slate-100">
                <div className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-black mt-1">1</span>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    打开 <strong>NEXT 版 App Gallery</strong>，搜索并下载 <strong>“卓易通”</strong> APP。
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-black mt-1">2</span>
                  <div className="text-sm md:text-base text-slate-600 leading-relaxed space-y-2">
                    <p>在卓易通内打开“搜应用”，在搜索栏输入以下下载链接进行安装：</p>
                    <div className="bg-white border border-blue-100 rounded-xl p-3 flex items-center justify-between group cursor-pointer hover:border-blue-400 transition-colors shadow-sm">
                      <code className="text-xs text-blue-600 break-all select-all font-mono font-bold">
                        https://www.123865.com/s/pR9rVv-0JXO3
                      </code>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-[10px] font-black mt-1">3</span>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    下载 <strong>首安云64位版</strong>。下载完成后，点击底部菜单找到安装包进行安装即可。
                  </p>
                </div>
              </div>
            </div>

            {/* iOS Guide */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-0 w-8 h-8 rounded-xl bg-slate-800 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-slate-200">3</div>
              <h3 className="text-lg font-black text-slate-800 mb-4">苹果手机 (iOS)</h3>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-4">
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  点击上方下载按钮，跳转后根据提示安装。首次打开会提示“未受信任的企业级开发者”。
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-2xl">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={20} className="text-amber-600 shrink-0 mt-0.5" />
                    <div className="text-sm leading-relaxed">
                      <strong className="text-amber-900 block mb-1">信任企业证书操作路径：</strong>
                      <p className="text-amber-800">
                        <span className="font-bold">设置 → 通用 → VPN与设备管理</span>
                        <br />
                        点击并选择 <span className="italic font-bold">"BEIJING SHOUGANGCO. LTD"</span> 并点击“信任”。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Support Tip */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs py-4">
          <HelpCircle size={14} />
          <span>特殊情况或安装失败，请咨询第二炼钢厂安全科</span>
        </div>

      </div>
    </div>
  );
};
