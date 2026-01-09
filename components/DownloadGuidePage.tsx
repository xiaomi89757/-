
import React from 'react';
import { 
  Smartphone, ShieldCheck, Info, 
  KeyRound, User, Layers, ChevronRight, Download,
  HelpCircle, UserCheck, Zap, Copy, CheckCircle2
} from 'lucide-react';

// 标准苹果实心图标组件 (Bitten Apple Logo)
const AppleIcon = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.057 1.25c-.864.054-1.89.57-2.484 1.282-.533.642-.96 1.583-.82 2.505.945.073 1.905-.472 2.476-1.157.533-.642.923-1.547.828-2.63m.22 3.82c-1.344 0-2.493.822-3.155.822-.673 0-1.63-.787-2.73-.767-1.442.022-2.772.84-3.512 2.128-1.493 2.597-.382 6.452 1.063 8.543.707 1.023 1.548 2.167 2.658 2.126 1.068-.04 1.474-.693 2.766-.693 1.284 0 1.66.693 2.788.673 1.147-.02 1.874-1.04 2.576-2.072.812-1.192 1.148-2.345 1.168-2.405-.025-.01-2.247-.864-2.272-3.414-.02-2.14 1.745-3.166 1.83-3.216-1.002-1.468-2.553-1.632-3.112-1.675" />
  </svg>
);

export const DownloadGuidePage: React.FC = () => {
  // Android 和 iOS 保持原始指定链接
  const androidUrl = "https://safety.sgai.com.cn/appDownload/songting/index.html";
  const iosUrl = "https://safety.sgai.com.cn/appDownload/songting/index.html";
  
  // 更新后的鸿蒙/64位版 APK 链接
  const harmonyUrl = "https://gh-proxy.com/https://github.com/xiaomi89757/-/releases/download/v1.0/songgang-shouanyun-x64-HarmonyOS.apk";

  const [copied, setCopied] = React.useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(harmonyUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-8 animate-fade-in font-sans">
      <div className="max-w-4xl mx-auto space-y-5 md:space-y-8">
        
        {/* Header Section */}
        <div className="flex items-center gap-4 border-b border-slate-200 pb-5">
          <div className="shrink-0 p-2.5 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-100">
            <Smartphone size={24} />
          </div>
          <div className="text-left">
            <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">首安云 APP 下载</h1>
            <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Safety Platform Installation</p>
          </div>
        </div>

        {/* 1. Account Info Card */}
        <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2rem] shadow-xl p-6 md:p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-blue-600/15 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2.5 mb-6 md:mb-8">
              <KeyRound className="text-blue-400" size={20} />
              <h2 className="text-lg md:text-xl font-black tracking-tight text-left">登录账号与密码指引</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 flex items-center group transition-all hover:bg-white/10">
                <div className="bg-blue-600/30 p-3.5 rounded-xl mr-5 text-blue-400 group-hover:scale-110 transition-transform text-left">
                  <User size={28} />
                </div>
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1">账号</p>
                  <p className="text-sm md:text-base font-bold text-blue-300">个人身份证号</p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 flex items-center group transition-all hover:bg-white/10">
                <div className="bg-blue-600/30 p-3.5 rounded-xl mr-5 text-blue-400 group-hover:scale-110 transition-transform text-left">
                  <ShieldCheck size={28} />
                </div>
                <div className="text-left">
                  <p className="text-2xl md:text-3xl font-black text-white tracking-tight mb-1">初始密码</p>
                  <p className="text-sm md:text-base font-bold text-blue-300">身份证后 6 位</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Download Buttons - Optimized for Uniformity */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 px-1">
            <Download className="text-blue-600" size={16} />
            <h3 className="text-sm font-black text-slate-800">立即下载安装</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Android Button */}
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
                <p className="text-[10px] text-slate-400 font-bold group-hover:text-emerald-600 transition-colors">通用安卓手机版</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-emerald-500" size={18} />
            </a>

            {/* iOS Button */}
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

            {/* X64位版按钮 - 现在已改为统一的白底卡片风格 */}
            <a 
              href={harmonyUrl}
              download="songgang-shouanyun-x64.apk"
              className="group flex items-center p-3.5 bg-white border border-slate-200 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all shadow-sm active:scale-[0.98]"
            >
              <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                <Layers size={22} />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-black text-slate-800">X64位版</h4>
                  <Zap size={12} className="text-yellow-500 animate-pulse" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold group-hover:text-blue-600 transition-colors">新机型 / 鸿蒙版适用</p>
              </div>
              <ChevronRight className="text-slate-300 group-hover:text-blue-500" size={18} />
            </a>
          </div>
        </div>

        {/* 3. Detailed Guide */}
        <div className="bg-white rounded-[1.5rem] shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-50 pb-3">
            <div className="p-1.5 bg-blue-50 text-blue-600 rounded-lg">
              <Info size={18} />
            </div>
            <h2 className="text-base font-black text-slate-800 tracking-tight">安装步骤详情</h2>
          </div>

          <div className="space-y-8 text-left">
            {/* Step 1: Old Android & iOS */}
            <div className="flex gap-4 group">
              <div className="shrink-0 w-6 h-6 bg-green-500 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-green-100">1</div>
              <div className="space-y-3 flex-1">
                <h4 className="text-xs font-black text-slate-700">老版安卓手机和苹果手机</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">直接点击对应的按钮进行下载即可。</p>
                <div className="bg-amber-50 border-l-3 border-amber-400 p-3 rounded-r-xl">
                  <p className="text-[10px] text-amber-800 leading-normal">
                    <span className="font-bold">提示：苹果手机首次安装需进行软件信任：</span><br />
                    设置 → 通用 → 设备管理 → 信任“IPHONE DISTRIBUTION: BEIJING SHOUGANGCO. LTD）
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: 64-bit phones */}
            <div className="flex gap-4 group">
              <div className="shrink-0 w-6 h-6 bg-blue-600 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-blue-100">2</div>
              <div className="space-y-1 flex-1">
                <h4 className="text-xs font-black text-slate-700">64位处理器手机</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  点击“X64位版”按钮安装，然后点击“下载文件”，下载成功后进行安装。
                </p>
              </div>
            </div>

            {/* Step 3: HarmonyOS NEXT */}
            <div className="flex gap-4 group">
              <div className="shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-lg flex items-center justify-center text-[10px] font-black shadow-md shadow-indigo-100">3</div>
              <div className="space-y-3 flex-1">
                <h4 className="text-xs font-black text-slate-700">鸿蒙手机系统 (NEXT版)</h4>
                <div className="text-[11px] text-slate-500 leading-relaxed space-y-3">
                  <p>① 打开 NEXT 版 App Gallery 搜索下载 <span className="text-indigo-600 font-bold">卓易通APP</span>。</p>
                  <p>② 安装完成后会生成卓易通和卓易通文件夹两个文件，在文件夹内打开 <span className="font-bold text-slate-700">“搜应用”</span>，在搜索位置输入下载链接。</p>
                  
                  {/* One-click copy link section */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 space-y-2">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">复制以下链接至卓易通搜索：</p>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-[10px] font-mono break-all text-slate-600">
                        {harmonyUrl}
                      </div>
                      <button 
                        onClick={copyLink}
                        className={`shrink-0 flex items-center justify-center px-4 rounded-lg transition-all ${copied ? 'bg-green-500 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}
                      >
                        {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                      </button>
                    </div>
                  </div>

                  <p>③ 下载首安云64位版，下载完毕后，点中间三条横线，点击下载图标打开安装包根据提示安装，安装完毕后即可正常使用。</p>
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
