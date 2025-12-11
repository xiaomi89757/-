
import React from 'react';
import { 
  Smartphone, ShieldCheck, Info, 
  ExternalLink, Apple, KeyRound, User,
  HelpCircle, Layers, UserCheck
} from 'lucide-react';

export const DownloadGuidePage: React.FC = () => {
  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-8 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
            首安云 APP 下载与安装
          </h1>
          <p className="text-slate-500 font-medium">
            安全生产 · 信息化管理 · 移动办公
          </p>
          <div className="inline-flex items-center mt-3 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-semibold border border-orange-200">
            <HelpCircle size={14} className="mr-1" />
            特殊情况请咨询第二炼钢厂安全科
          </div>
        </div>

        {/* 1. Account Info Card (Important) */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          <div className="relative z-10">
            <h2 className="text-lg font-bold mb-4 flex items-center border-b border-white/20 pb-2">
              <KeyRound className="mr-2" size={20} />
              登录账号与密码
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-3 flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <User size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase">首安云账号</p>
                  <p className="text-lg font-mono font-bold tracking-wide">个人身份证号</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3 flex items-center">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase">初始密码</p>
                  <p className="text-lg font-mono font-bold tracking-wide">身份证号后 6 位</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Download Actions (Unified CTA) */}
        <div className="flex flex-col items-center justify-center space-y-4">
          
          {/* Added Tip */}
          <div className="w-full max-w-2xl bg-green-50 border border-green-200 text-green-800 px-4 py-2 rounded-lg flex items-center justify-center text-sm md:text-base font-medium">
            <UserCheck size={18} className="mr-2" />
            温馨提示：注册登录网盘可免充值高速下载
          </div>

          <a 
            href="https://pan.xunlei.com/s/VOg7CgIMkyRDwVBKuLN_BsoqA1?pwd=u4q5#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full max-w-2xl group relative flex flex-col items-center justify-center p-8 bg-white border-2 border-slate-200 hover:border-blue-500 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Icons Row */}
            <div className="flex items-center justify-center space-x-6 md:space-x-8 mb-4 text-slate-400 group-hover:text-blue-600 transition-colors">
              <div className="flex flex-col items-center gap-1">
                <Smartphone size={40} strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Android</span>
              </div>
              <span className="text-slate-200 text-3xl font-light">/</span>
              <div className="flex flex-col items-center gap-1">
                <Layers size={40} strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-wider">Harmony</span>
              </div>
              <span className="text-slate-200 text-3xl font-light">/</span>
              <div className="flex flex-col items-center gap-1">
                <Apple size={40} strokeWidth={1.5} className="pb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider">iOS</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2 tracking-tight group-hover:text-blue-700">
              安卓 / 鸿蒙 / 苹果
            </h3>
            <p className="text-base text-slate-500 text-center mb-6">
              点击下方按钮进入迅雷网盘页面，请根据您的机型选择对应文件
            </p>
            
            <span className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-bold text-lg shadow-lg shadow-blue-200 group-hover:bg-blue-700 group-hover:shadow-blue-300 transition-all">
              前往下载页面 <ExternalLink size={20} className="ml-2" />
            </span>
          </a>
        </div>

        {/* 3. Detailed Installation Guide */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
          <div className="flex items-center mb-6 border-b border-slate-100 pb-4">
            <Info className="text-blue-600 mr-3" size={28} />
            <h2 className="text-2xl font-bold text-slate-800">详细安装指南</h2>
          </div>

          <div className="space-y-10">
            
            {/* Guide 1: Android */}
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-50"></div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-sm mr-2">Step 1</span>
                普通安卓手机
              </h3>
              <p className="text-slate-600 text-base leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                点击上方下载按钮，在打开的页面中选择“下载文件”，下载成功后直接点击 <span className="font-mono text-blue-600 bg-blue-50 px-1 rounded">.apk</span> 文件进行安装即可。
              </p>
            </div>

            {/* Guide 2: HarmonyOS */}
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-indigo-50"></div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-sm mr-2">Step 2</span>
                华为鸿蒙系统 (HarmonyOS Next)
              </h3>
              <div className="bg-slate-50 rounded-lg p-5 space-y-4 border border-slate-100">
                <div className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">1</span>
                  <p className="text-sm md:text-base text-slate-700">
                    打开 <strong>NEXT 版 App Gallery</strong>，搜索并下载 <strong>“卓易通”</strong> APP。
                  </p>
                </div>
                <div className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">2</span>
                  <div className="text-sm md:text-base text-slate-700 w-full">
                    <p className="mb-2">安装完成后会生成卓易通和卓易通文件夹。在文件夹内打开“搜应用”，在搜索位置输入以下下载链接：</p>
                    <div className="bg-white border border-indigo-200 rounded p-3 flex items-center justify-between group cursor-pointer hover:border-indigo-400 transition-colors">
                      <code className="text-xs md:text-sm text-indigo-600 break-all select-all font-mono">
                        https://pan.xunlei.com/s/VOg7CgIMkyRDwVBKuLN_BsoqA1?pwd=u4q5#
                      </code>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5">3</span>
                  <p className="text-sm md:text-base text-slate-700">
                    下载 <strong>首安云64位版</strong>。下载完毕后，点击中间三条横线，找到下载图标打开安装包，根据提示完成安装，安装完毕后可以正常使用。
                  </p>
                </div>
              </div>
            </div>

            {/* Guide 3: iOS */}
            <div className="relative pl-8 border-l-2 border-slate-200">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-400 ring-4 ring-slate-100"></div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center">
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-sm mr-2">Step 3</span>
                苹果手机 (iOS)
              </h3>
              <div className="text-slate-600 space-y-3 text-base leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p>点击上方下载按钮，在浏览器中打开后选择对应的 iOS 版本下载。</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3 text-yellow-800 text-sm">
                  <div className="flex items-start">
                    <ShieldCheck size={18} className="mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>信任企业证书：</strong> 首次安装后需进行软件信任才能打开。
                      <br />
                      <span className="mt-1 block text-slate-600">
                        路径：<span className="font-semibold text-slate-800">设置 → 通用 → 设备管理 (或 VPN与设备管理)</span>
                        <br />
                        操作：点击信任 <span className="italic font-medium">"IPHONE DISTRIBUTION: BEIJING SHOUGANGCO. LTD"</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
