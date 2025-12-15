
import React from 'react';
import { MessageSquare, Bug, Lightbulb, User, ExternalLink, ShieldCheck, HelpCircle } from 'lucide-react';

export const FeedbackPage: React.FC = () => {
  // 统一的反馈链接
  const feedbackFormUrl = "https://f.wps.cn/g/SLB9AU22/"; 

  return (
    <div className="min-h-full bg-slate-50 p-4 md:p-8 animate-fade-in font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-600 text-white rounded-2xl shadow-xl shadow-blue-200 mb-4">
            <MessageSquare size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 mb-2">意见反馈中心</h1>
          <p className="text-slate-500 font-medium tracking-wide">您的每一条建议，都是我们优化的动力</p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Bug Report Card */}
          <a 
            href={feedbackFormUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-rose-50 rounded-full blur-2xl group-hover:bg-rose-100 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bug size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-3">Bug/故障报修</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                发现页面显示异常、链接失效或数据加载错误？请详细描述问题并提供截图。
              </p>
              <div className="flex items-center text-rose-600 font-bold text-sm">
                立即反馈 <ExternalLink size={16} className="ml-1.5" />
              </div>
            </div>
          </a>

          {/* Feature Suggestion Card */}
          <a 
            href={feedbackFormUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative bg-white rounded-[2rem] p-8 shadow-sm hover:shadow-2xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-emerald-50 rounded-full blur-2xl group-hover:bg-emerald-100 transition-all"></div>
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-800 mb-3">功能优化建议</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                希望增加新的查询功能、优化现有板块排版？您的想法对平台建设至关重要。
              </p>
              <div className="flex items-center text-emerald-600 font-bold text-sm">
                提交想法 <ExternalLink size={16} className="ml-1.5" />
              </div>
            </div>
          </a>
        </div>

        {/* Administrator Info */}
        <div className="bg-gradient-to-r from-slate-800 to-indigo-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <User size={40} className="text-blue-300" />
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-2">
              <h4 className="text-xl font-bold">直接联系管理员</h4>
              <p className="text-slate-300 text-sm">如有紧急内容更新或权限问题，请直接联系运维负责人：</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-sm">
                  <span className="text-slate-400">联系人：</span><span className="font-bold">韩福利</span>
                </div>
                <div className="bg-white/5 px-4 py-2 rounded-xl border border-white/10 text-sm">
                  <span className="text-slate-400">科室：</span><span className="font-bold">综合管理办公室</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-white rounded-[2rem] p-6 md:p-10 border border-slate-100">
          <div className="flex items-center gap-3 mb-6 border-b border-slate-50 pb-4">
            <ShieldCheck className="text-blue-600" size={24} />
            <h4 className="font-black text-slate-800 text-lg">反馈说明</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black text-sm">1</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">提报匿名性</p>
              <p className="text-sm text-slate-600 leading-relaxed">表单支持匿名提交，若希望得到进度回馈，请留下您的联系方式。</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black text-sm">2</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">处理周期</p>
              <p className="text-sm text-slate-600 leading-relaxed">我们将在收到反馈后的 3 个工作日内进行初步评估，并根据重要程度排期优化。</p>
            </div>
            <div className="space-y-2">
              <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-black text-sm">3</div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">反馈范围</p>
              <p className="text-sm text-slate-600 leading-relaxed">反馈范围仅限于本管理平台的功能与内容，生产业务类问题请通过正式办公渠道提报。</p>
            </div>
          </div>
        </div>

        {/* Support Tip */}
        <div className="flex items-center justify-center gap-2 text-slate-400 text-xs py-4">
          <HelpCircle size={14} />
          <span>遇到紧急无法访问的情况，请检查网络连接或咨询办公室网管人员</span>
        </div>

      </div>
    </div>
  );
};
