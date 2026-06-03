import React from 'react';
import { ExternalLink, Search, ClipboardList, Clock, ChevronRight, HelpCircle, FileText } from 'lucide-react';

const THEMES: Record<string, { bg: string, iconBg: string, text: string, shadow: string, border: string }> = {
  blue: {
    bg: 'bg-gradient-to-r from-blue-500 to-blue-600',
    iconBg: 'bg-white/20',
    text: 'text-blue-50',
    shadow: 'shadow-blue-200',
    border: 'border-blue-400'
  },
  indigo: {
    bg: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
    iconBg: 'bg-white/20',
    text: 'text-indigo-50',
    shadow: 'shadow-indigo-200',
    border: 'border-indigo-400'
  },
  emerald: {
    bg: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
    iconBg: 'bg-white/20',
    text: 'text-emerald-50',
    shadow: 'shadow-emerald-200',
    border: 'border-emerald-400'
  },
  orange: {
    bg: 'bg-gradient-to-r from-orange-500 to-orange-600',
    iconBg: 'bg-white/20',
    text: 'text-orange-50',
    shadow: 'shadow-orange-200',
    border: 'border-orange-400'
  },
  rose: {
    bg: 'bg-gradient-to-r from-rose-500 to-rose-600',
    iconBg: 'bg-white/20',
    text: 'text-rose-50',
    shadow: 'shadow-rose-200',
    border: 'border-rose-400'
  },
  violet: {
    bg: 'bg-gradient-to-r from-violet-500 to-violet-600',
    iconBg: 'bg-white/20',
    text: 'text-violet-50',
    shadow: 'shadow-violet-200',
    border: 'border-violet-400'
  },
  cyan: {
    bg: 'bg-gradient-to-r from-cyan-500 to-cyan-600',
    iconBg: 'bg-white/20',
    text: 'text-cyan-50',
    shadow: 'shadow-cyan-200',
    border: 'border-cyan-400'
  },
  amber: {
    bg: 'bg-gradient-to-r from-amber-500 to-amber-600',
    iconBg: 'bg-white/20',
    text: 'text-amber-50',
    shadow: 'shadow-amber-200',
    border: 'border-amber-400'
  },
  slate: {
    bg: 'bg-gradient-to-r from-slate-500 to-slate-600',
    iconBg: 'bg-white/20',
    text: 'text-slate-50',
    shadow: 'shadow-slate-200',
    border: 'border-slate-400'
  },
  default: {
    bg: 'bg-gradient-to-r from-slate-600 to-slate-700',
    iconBg: 'bg-white/20',
    text: 'text-slate-50',
    shadow: 'shadow-slate-300',
    border: 'border-slate-500'
  }
};

interface ToolItem {
  title: string;
  description: string;
  url: string;
  icon: React.FC<any>;
  theme: string;
}

export const TempAssignmentPage: React.FC = () => {
  const tools: ToolItem[] = [
    {
      title: '五年精益提案查询',
      description: '便捷查询五年间精益提案数据，支持多维度筛选与统计分析',
      url: 'https://web.wps.cn/etapps/query/q/aI3M0QdA',
      icon: Search,
      theme: 'blue',
    },
    {
      title: '五年稿件数量查询',
      description: '快速查询五年间稿件数量统计，掌握宣传成果数据',
      url: 'https://web.wps.cn/etapps/query/q/2CCeadPl',
      icon: FileText,
      theme: 'emerald',
    },
  ];

  return (
    <div className="h-full flex flex-col bg-slate-50 relative animate-fade-in font-sans">

      {/* 顶部标题栏 - 毛玻璃效果 */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-4 md:px-8 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center">
          <div className="p-2.5 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl shadow-lg shadow-blue-200 mr-4">
            <ClipboardList size={24} />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">临时交办</h2>
            <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5 uppercase tracking-widest">Temp Assignment & Tools</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full">
        <div className="max-w-5xl mx-auto">
          {/* 列表布局 - 一列一行 */}
          <div className="flex flex-col gap-4 md:gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const theme = THEMES[tool.theme] || THEMES.default;

              return (
                <a
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    group relative flex flex-row items-center
                    text-left rounded-2xl shadow-lg hover:shadow-xl
                    transition-all duration-300 transform hover:-translate-y-1 hover:brightness-105
                    overflow-hidden p-4 md:p-6 min-h-[80px] md:min-h-[100px]
                    ${theme.bg} ${theme.shadow}
                  `}
                >
                  {/* 背景装饰光晕 */}
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-all duration-500"></div>

                  {/* 左侧图标 */}
                  <div className={`
                    shrink-0 p-3 md:p-4 rounded-xl ${theme.iconBg} backdrop-blur-md text-white shadow-inner
                    group-hover:scale-110 transition-transform duration-300 mr-4 md:mr-6
                  `}>
                    <Icon size={28} />
                  </div>

                  {/* 中间文字 */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-2xl font-black text-white mb-0.5 md:mb-1 leading-tight tracking-wide drop-shadow-sm truncate">
                      {tool.title}
                    </h3>
                    <p className={`text-[10px] md:text-sm ${theme.text} leading-tight font-light opacity-90 line-clamp-1`}>
                      {tool.description}
                    </p>
                  </div>

                  {/* 右侧引导图标 */}
                  <div className="shrink-0 ml-4 flex items-center">
                    <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors text-white">
                      <ExternalLink className="group-hover:scale-110 transition-transform" size={20} />
                    </div>
                  </div>

                  {/* 底部亮线 */}
                  <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-0 group-hover:w-full transition-all duration-500"></div>
                </a>
              );
            })}

            {/* 更多功能即将上线 - 占位条 */}
            <div className={`
              group relative flex flex-row items-center
              text-left rounded-2xl border-2 border-dashed border-slate-200
              transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/30
              overflow-hidden p-4 md:p-6 min-h-[80px] md:min-h-[100px]
              bg-white/50
            `}>
              {/* 左侧图标 */}
              <div className="shrink-0 p-3 md:p-4 rounded-xl bg-slate-100 text-slate-300 mr-4 md:mr-6 group-hover:bg-blue-100 group-hover:text-blue-400 transition-all duration-500">
                <Clock size={28} />
              </div>

              {/* 中间文字 */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg md:text-2xl font-black text-slate-300 group-hover:text-blue-400 transition-colors mb-0.5 md:mb-1 leading-tight tracking-wide truncate">
                  更多功能即将上线
                </h3>
                <p className="text-[10px] md:text-sm text-slate-200 font-medium group-hover:text-blue-300 transition-colors leading-tight">
                  敬请期待
                </p>
              </div>

              {/* 右侧占位 */}
              <div className="shrink-0 ml-4 flex items-center">
                <div className="bg-slate-100 p-2 rounded-full group-hover:bg-blue-100 transition-colors text-slate-300 group-hover:text-blue-400">
                  <ChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* 底部填充 */}
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
};
