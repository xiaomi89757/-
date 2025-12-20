
import React, { useState, useEffect } from 'react';
import { ShieldCheck, ExternalLink, Smartphone, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';

interface SafariBridgeProps {
  url: string;
  title: string;
  onUnlocked: () => void;
}

export const SafariBridge: React.FC<SafariBridgeProps> = ({ url, title, onUnlocked }) => {
  const [isIOS, setIsIOS] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    // 检测是否为 iOS 设备
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIosDevice = /iphone|ipad|ipod/.test(userAgent);
    // 同时检测是否已经在本地“解锁”过
    const hasBeenUnlocked = localStorage.getItem(`safari_unlocked_${btoa(url).substring(0, 10)}`);
    
    setIsIOS(isIosDevice);
    if (hasBeenUnlocked) {
      setIsUnlocked(true);
      onUnlocked();
    }
  }, [url, onUnlocked]);

  const handleUnlock = async () => {
    // 1. 尝试调用苹果官方 API (即使可能报错也捕获，作为用户手势的一部分)
    try {
      if ('requestStorageAccess' in document) {
        // @ts-ignore
        await document.requestStorageAccess();
      }
    } catch (e) {
      console.log('Storage Access API not directly applicable, using window.open fallback');
    }

    // 2. 核心“敲门”操作：在新窗口打开一次目标 URL
    // 这会在 Safari 中建立第一方 Cookie 关系，让后续的 iframe 能够读取登录状态
    const win = window.open(url, '_blank');
    
    // 3. 状态反馈
    setIsUnlocked(true);
    localStorage.setItem(`safari_unlocked_${btoa(url).substring(0, 10)}`, 'true');
    
    // 延迟通知父组件，给浏览器一点点写入 Cookie 的时间
    setTimeout(() => {
      onUnlocked();
    }, 500);
  };

  if (!isIOS || isUnlocked) return null;

  return (
    <div className="absolute inset-0 z-[60] flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-xl animate-in fade-in duration-500">
      <div className="max-w-sm w-full bg-white rounded-[2.5rem] shadow-2xl p-8 flex flex-col items-center text-center space-y-6 border border-white/20">
        
        {/* Apple 风格图标容器 */}
        <div className="relative">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200 animate-pulse">
            <ShieldCheck size={40} />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center text-white">
            <CheckCircle2 size={16} strokeWidth={3} />
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-black text-slate-800 tracking-tight">iOS 兼容性优化</h3>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            检测到您正在使用苹果手机。为了正常显示内嵌文档并保持登录状态，我们需要进行一次“访问授权”。
          </p>
        </div>

        <div className="w-full space-y-3">
          <button 
            onClick={handleUnlock}
            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-100 transition-all active:scale-95 group"
          >
            一键开启访问权限
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            <Smartphone size={12} /> Powered by Safari Storage Bridge
          </div>
        </div>

        <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex items-start gap-3 text-left">
          <AlertCircle size={16} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[10px] text-amber-700 leading-normal font-medium">
            提示：点击后会短暂打开一个新页面，请在弹出窗口后直接返回此平台，文档即可正常显示。
          </p>
        </div>
      </div>
    </div>
  );
};
