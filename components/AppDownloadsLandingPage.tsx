
import React from 'react';
import { ViewState } from '../types';
import { Shield, Star, ArrowRight, Download, Smartphone } from 'lucide-react';

interface AppDownloadsLandingPageProps {
  setView: (view: ViewState) => void;
}

export const AppDownloadsLandingPage: React.FC<AppDownloadsLandingPageProps> = ({ setView }) => {
  return (
    <div className="p-4 md:p-8 animate-fade-in min-h-full bg-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center mb-12 border-b border-slate-200 pb-6">
          <div className="p-3 bg-white rounded-2xl mr-4 text-blue-600 shadow-sm border border-slate-100">
            <Download size={28} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight">常用应用下载</h2>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">Essential Apps for Production</p>
          </div>
        </div>

        {/* 居中布置的卡片容器 */}
        <div className="flex flex-wrap justify-center gap-8">
          
          {/* Shouan Cloud Card */}
          <button 
            onClick={() => setView(ViewState.APP_SHOUAN)}
            className="group relative flex flex-col justify-between text-left rounded-[2.5rem] shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden w-full sm:w-[350px] min-h-[240px] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 border border-white/10"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-32 h-32 rounded-full bg-black/10 blur-2xl"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-inner border border-white/10">
                  <Shield size={28} />
                </div>
                <div className="bg-white/10 p-2 rounded-full text-white/70 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                  首安云 APP
                </h3>
                <p className="text-sm text-blue-100 leading-relaxed font-medium opacity-90">
                  安全生产必备，提供隐患排查、风险管控与安全办公助手。
                </p>
              </div>
            </div>
          </button>

          {/* Exam Star Card */}
          <button 
            onClick={() => setView(ViewState.APP_EXAM_STAR)}
            className="group relative flex flex-col justify-between text-left rounded-[2.5rem] shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden w-full sm:w-[350px] min-h-[240px] bg-gradient-to-br from-violet-600 to-purple-800 p-8 border border-white/10"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-32 h-32 rounded-full bg-black/10 blur-2xl"></div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="flex justify-between items-start">
                <div className="p-3 rounded-2xl bg-white/20 backdrop-blur-md text-white shadow-inner border border-white/10">
                  <Star size={28} />
                </div>
                <div className="bg-white/10 p-2 rounded-full text-white/70 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <ArrowRight size={20} />
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">
                  考试星 APP
                </h3>
                <p className="text-sm text-violet-100 leading-relaxed font-medium opacity-90">
                  全员教育培训专用，支持在线考试、课程学习与技能评价。
                </p>
              </div>
            </div>
          </button>

        </div>

        {/* Footer Info */}
        <div className="mt-16 max-w-2xl mx-auto bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="p-3 bg-blue-50 rounded-2xl text-blue-600 mb-4 md:mb-0 md:mr-4 shadow-inner">
            <Smartphone size={24} />
          </div>
          <div>
            <h3 className="text-slate-800 font-black text-base mb-1 tracking-tight">多平台系统支持</h3>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              应用均已适配 Android / HarmonyOS / iOS。若在安装过程中遇到证书信任、网络拦截等问题，请点击进入对应应用的详情页查阅“详细安装指南”。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
