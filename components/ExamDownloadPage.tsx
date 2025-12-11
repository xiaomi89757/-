
import React from 'react';
import { 
  Download, Smartphone, Info, 
  ExternalLink, Apple, UserCheck, HelpCircle
} from 'lucide-react';

export const ExamDownloadPage: React.FC = () => {
  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-8 animate-fade-in">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="text-center pt-8">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-2">
            考试星 APP 下载
          </h1>
          <p className="text-slate-500 font-medium">
            在线学习 · 考试测评 · 技能提升
          </p>
        </div>

        {/* Core Tip Card */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-center justify-center text-green-800 shadow-sm">
          <UserCheck className="mr-2" size={24} />
          <span className="font-bold text-lg">温馨提示：注册登录网盘可免充值高速下载</span>
        </div>

        {/* Main Action Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="p-8 md:p-12 flex flex-col items-center text-center">
            
            <div className="flex items-center space-x-4 mb-6 text-slate-400">
              <div className="flex flex-col items-center">
                <Smartphone size={48} className="mb-1 text-slate-600" />
                <span className="text-xs font-bold uppercase">Android</span>
              </div>
              <span className="text-3xl font-light text-slate-200">|</span>
              <div className="flex flex-col items-center">
                <Apple size={48} className="mb-1 text-slate-600" />
                <span className="text-xs font-bold uppercase">iOS</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mb-4">
              官方正版客户端下载
            </h2>
            
            <p className="text-slate-500 mb-8 max-w-md">
              点击下方按钮前往下载页面。
              <br/>
              <span className="text-sm">安卓用户请直接下载安装包，苹果用户请在页面内扫码安装。</span>
            </p>

            <a 
              href="https://pan.xunlei.com/s/VOg7Cylq3qJq2AVZLCBykIHAA1?pwd=k48n#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full max-w-sm group flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={24} />
              立即前往下载页
              <ExternalLink size={18} className="ml-2 opacity-80" />
            </a>

            <p className="mt-4 text-xs text-slate-400">
              链接由 迅雷网盘 提供高速分发服务
            </p>
          </div>
        </div>

        {/* Simple Instructions */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center mb-4">
            <HelpCircle className="text-blue-600 mr-2" size={20} />
            <h3 className="font-bold text-slate-700">安装说明</h3>
          </div>
          <ul className="space-y-3 text-slate-600 text-sm md:text-base">
            <li className="flex items-start">
              <span className="mr-2 text-blue-500 font-bold">1.</span>
              <span><strong>安卓手机：</strong>在打开的网页中点击“下载文件”，下载完成后点击 APK 文件直接安装。</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-500 font-bold">2.</span>
              <span><strong>苹果手机：</strong>打开下载页内的二维码保存后扫码下载安装。</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-green-600 font-bold">3.</span>
              <span><strong>免费下载：</strong>如果网页提示需要付费或充值，请先点击注册或登录账号，即可免费下载。</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};
