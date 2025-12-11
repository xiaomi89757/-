
import React from 'react';
import { ViewState } from '../types';
import { Shield, Star, ArrowRight, Download, Smartphone } from 'lucide-react';

interface AppDownloadsLandingPageProps {
  setView: (view: ViewState) => void;
}

export const AppDownloadsLandingPage: React.FC<AppDownloadsLandingPageProps> = ({ setView }) => {
  return (
    <div className="p-4 md:p-8 animate-fade-in min-h-full">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex items-center mb-8 border-b border-slate-200 pb-6">
          <div className="p-3 bg-blue-50 rounded-xl mr-4 text-blue-600 shadow-sm">
            <Download size={28} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">常用应用下载</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Shouan Cloud Card */}
          <button 
            onClick={() => setView(ViewState.APP_SHOUAN)}
            className="group relative flex flex-col justify-between text-left rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden min-h-[180px] bg-gradient-to-br from-blue-500 to-blue-600"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black/5 blur-xl"></div>

            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-lg bg-white/20 backdrop-blur-sm text-white shadow-inner">
                  <Shield size={24} />
                </div>
                <ArrowRight className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
              </div>
              
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight tracking-wide">
                  首安云 APP
                </h3>
                <p className="text-sm text-blue-50 leading-relaxed font-light opacity-90">
                  安全生产必备，隐患排查与风险管控助手。
                </p>
              </div>
            </div>
          </button>

          {/* Exam Star Card */}
          <button 
            onClick={() => setView(ViewState.APP_EXAM_STAR)}
            className="group relative flex flex-col justify-between text-left rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden min-h-[180px] bg-gradient-to-br from-violet-500 to-violet-600"
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-white/10 blur-2xl group-hover:bg-white/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black/5 blur-xl"></div>

            <div className="relative z-10 p-6 flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2.5 rounded-lg bg-white/20 backdrop-blur-sm text-white shadow-inner">
                  <Star size={24} />
                </div>
                <ArrowRight className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all" size={20} />
              </div>
              
              <div className="mt-auto">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight tracking-wide">
                  考试星 APP
                </h3>
                <p className="text-sm text-violet-50 leading-relaxed font-light opacity-90">
                  全员教育培训，在线考试与技能提升平台。
                </p>
              </div>
            </div>
          </button>

        </div>

        {/* Footer Info */}
        <div className="mt-10 bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
          <div className="p-2 bg-white rounded-full text-slate-400 mb-3 md:mb-0 md:mr-3 shadow-sm">
            <Smartphone size={20} />
          </div>
          <div>
            <h3 className="text-slate-800 font-bold text-sm mb-0.5">系统兼容性</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              支持 Android / HarmonyOS / iOS。如遇证书信任问题，请参照下载页内的安装指南。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
