import React, { useState } from 'react';
import {
  Loader2, Sparkles, Trophy, Lightbulb, Star,
  ArrowRight, Medal, Award, Flame, Maximize2, BookOpen
} from 'lucide-react';
import { SafariBridge } from './SafariBridge';

export const TempAssignmentPage: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  // ========================================
  // 数据大屏看板
  // ========================================
  const examDashboardUrl = 'https://www.kdocs.cn/wo/sl/v13LI1Jx';

  // ========================================
  // 按钮跳转链接
  // ========================================
  const examFormUrl = 'https://f.wps.cn/g/hOwJ5ZdV/';
  const suggestionUrl = 'https://f.wps.cn/g/JePk6lX5/';

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-slate-50 via-red-50/30 to-slate-50 relative animate-fade-in font-sans">

      {/* ========== 顶部标题栏 · 红金庆典风格 ========== */}
      <div className="relative sticky top-0 z-30 bg-gradient-to-r from-red-700 via-red-600 to-orange-700 border-b border-red-400/20 px-4 py-5 md:px-8 shadow-[0_4px_30px_rgba(185,28,28,0.3)]">
        {/* 装饰光晕 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl"></div>
        </div>

        {/* 金色星尘装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-[15%] w-1 h-1 bg-yellow-300/60 rounded-full animate-pulse" style={{ animationDuration: '2.4s' }}></div>
          <div className="absolute top-3 right-[20%] w-1.5 h-1.5 bg-yellow-200/40 rounded-full animate-pulse" style={{ animationDuration: '3.2s' }}></div>
          <div className="absolute bottom-2 left-[40%] w-1 h-1 bg-orange-300/50 rounded-full animate-pulse" style={{ animationDuration: '1.8s' }}></div>
          <div className="absolute top-1/2 right-[10%] w-1 h-1 bg-yellow-200/30 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto flex items-center relative z-10">
          <div className="shrink-0 p-2.5 bg-gradient-to-br from-yellow-400/30 to-orange-400/20 backdrop-blur-sm text-yellow-200 rounded-xl ring-1 ring-yellow-400/30 mr-4 shadow-lg shadow-red-900/20">
            <Star size={24} className="fill-yellow-200/80" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-4xl font-black tracking-wide leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ fontFamily: "'Noto Serif SC', 'SimSun', 'Songti SC', serif" }}>
              淬火重生五载路 精益铸魂再出发
            </h1>
            <p className="text-[10px] md:text-xs text-yellow-200/80 font-semibold mt-1.5 tracking-[0.15em] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-yellow-300/60 rounded-full inline-block"></span>
              五周年重要讲话专题 · 2026 DIGITAL YEAR
            </p>
          </div>
          {/* 装饰性年份标识 */}
          <div className="hidden md:flex shrink-0 items-center gap-1 ml-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full ring-1 ring-white/20">
            <Medal size={14} className="text-yellow-300" />
            <span className="text-[11px] font-black text-yellow-200 tracking-wider">2026</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">

          {/* ========== 双 CTA 按钮 · 催人奋进 ========== */}
          <section>
            <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
              <Flame size={16} className="text-red-500" />
              <h2 className="text-sm md:text-base font-black text-slate-700 tracking-tight">行动起来</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* 重要讲话学习答题 */}
              <a
                href={examFormUrl || '#'}
                target={examFormUrl ? '_blank' : undefined}
                rel={examFormUrl ? 'noopener noreferrer' : undefined}
                onClick={!examFormUrl ? (e) => e.preventDefault() : undefined}
                className="group relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-3.5 md:p-5 text-white cursor-pointer active:scale-[0.98]"
              >
                {/* 扁平装饰 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

                <Sparkles size={14} className="absolute top-3 right-3 text-yellow-200/40 animate-pulse" style={{ animationDuration: '2s' }} />

                <div className="relative z-10 flex flex-row items-center gap-3 md:gap-4">
                  <div className="shrink-0 p-1.5 bg-white/15 rounded-lg ring-1 ring-white/20 group-hover:scale-110 transition-all duration-300">
                    <BookOpen size={20} className="text-yellow-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-xl font-black drop-shadow-sm tracking-wide">
                      重要讲话学习答题
                    </h3>
                    <p className="text-[10px] md:text-xs text-red-100/90 font-semibold mt-0.5 tracking-wider">
                      深学细悟 · 以考促行
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-[10px] font-black bg-white/15 px-3 py-1.5 rounded-full group-hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span>开始答题</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* 底部扫光 */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </a>

              {/* 合理化建议提报 */}
              <a
                href={suggestionUrl || '#'}
                target={suggestionUrl ? '_blank' : undefined}
                rel={suggestionUrl ? 'noopener noreferrer' : undefined}
                onClick={!suggestionUrl ? (e) => e.preventDefault() : undefined}
                className="group relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-3.5 md:p-5 text-white cursor-pointer active:scale-[0.98]"
              >
                {/* 扁平装饰 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

                <Sparkles size={14} className="absolute top-3 right-3 text-blue-200/40 animate-pulse" style={{ animationDuration: '2.4s' }} />

                <div className="relative z-10 flex flex-row items-center gap-3 md:gap-4">
                  <div className="shrink-0 p-1.5 bg-white/15 rounded-lg ring-1 ring-white/20 group-hover:scale-110 transition-all duration-300">
                    <Lightbulb size={20} className="text-yellow-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-xl font-black drop-shadow-sm tracking-wide">
                      合理化建议提报
                    </h3>
                    <p className="text-[10px] md:text-xs text-blue-100/90 font-semibold mt-0.5 tracking-wider">
                      建言献策 · 共筑未来
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-[10px] font-black bg-white/15 px-3 py-1.5 rounded-full group-hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span>立即提报</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* 底部扫光 */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-blue-300/50 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </a>
            </div>
          </section>

          {/* ========== 五周年讲话学习龙虎榜 · 嵌入式看板 ========== */}
          <section>
            <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
              <Trophy size={18} className="text-amber-500" />
              <h2 className="text-sm md:text-base font-black text-slate-700 tracking-tight">五周年讲话学习龙虎榜</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-2"></div>
              <a
                href={examDashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-[10px] md:text-xs font-bold hover:bg-amber-100 transition-colors border border-amber-200 shrink-0"
              >
                <span className="hidden md:inline">全屏查看</span>
                <Maximize2 size={12} />
              </a>
            </div>

            <div className="relative bg-white border-[4px] border-white ring-1 ring-slate-200 shadow-2xl overflow-hidden rounded-2xl h-[450px] md:rounded-[2rem] md:h-[650px]">
              <SafariBridge url={examDashboardUrl} title="五周年讲话学习龙虎榜" onUnlocked={() => {}} />

              {isIframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white z-0">
                  <div className="relative">
                    <Loader2 className="animate-spin text-amber-500 mb-4" size={40} />
                  </div>
                  <p className="text-slate-500 font-bold tracking-widest animate-pulse text-center px-4 text-sm">
                    正在加载成绩数据
                  </p>
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">请稍候 ...</p>
                </div>
              )}

              <iframe
                src={examDashboardUrl}
                className="w-full h-full border-none relative z-10"
                onLoad={() => setIsIframeLoading(false)}
                title="五周年讲话学习龙虎榜"
                loading="eager"
                // @ts-ignore
                fetchpriority="high"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
              />
            </div>

            <div className="mt-3 flex items-center justify-center md:justify-end px-2">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Data Syncing</span>
              </div>
            </div>
          </section>

          {/* 底部留白 */}
          <div className="h-6"></div>
        </div>
      </div>
    </div>
  );
};
