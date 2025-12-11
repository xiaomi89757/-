
import React, { useState } from 'react';
import { SAFETY_RESPONSIBILITIES_DATA } from '../constants';
import { 
  Search, ChevronDown, FileText, 
  User, Users, Briefcase, Shield, Settings,
  HardHat, ClipboardList, PenTool, Radio,
  Factory, Truck, Wrench, Flame, Droplets,
  Warehouse, AlertCircle, CheckCircle2
} from 'lucide-react';
import { ProcedureItem } from '../types';

// 升级版主题配置：增加渐变色和阴影
const CATEGORY_THEMES = [
  { 
    color: 'indigo', 
    label: '综合管理',
    gradient: 'from-indigo-500 to-indigo-600',
    shadow: 'shadow-indigo-200',
    border: 'border-indigo-200',
    text: 'text-indigo-600',
    bg: 'bg-indigo-50',
    light: 'bg-indigo-100'
  }, 
  { 
    color: 'red', 
    label: '转炉炼钢',
    gradient: 'from-rose-500 to-red-600',
    shadow: 'shadow-red-200',
    border: 'border-red-200',
    text: 'text-red-600',
    bg: 'bg-red-50',
    light: 'bg-red-100'
  }, 
  { 
    color: 'orange', 
    label: '连铸生产',
    gradient: 'from-orange-400 to-amber-600',
    shadow: 'shadow-orange-200',
    border: 'border-orange-200',
    text: 'text-orange-600',
    bg: 'bg-orange-50',
    light: 'bg-orange-100'
  }, 
  { 
    color: 'blue', 
    label: '设备维修',
    gradient: 'from-blue-500 to-indigo-600',
    shadow: 'shadow-blue-200',
    border: 'border-blue-200',
    text: 'text-blue-600',
    bg: 'bg-blue-50',
    light: 'bg-blue-100'
  }, 
  { 
    color: 'cyan', 
    label: '天车运行',
    gradient: 'from-cyan-500 to-sky-600',
    shadow: 'shadow-cyan-200',
    border: 'border-cyan-200',
    text: 'text-cyan-600',
    bg: 'bg-cyan-50',
    light: 'bg-cyan-100'
  }, 
  { 
    color: 'emerald', 
    label: '运转辅助',
    gradient: 'from-emerald-500 to-teal-600',
    shadow: 'shadow-emerald-200',
    border: 'border-emerald-200',
    text: 'text-emerald-600',
    bg: 'bg-emerald-50',
    light: 'bg-emerald-100'
  }, 
  { 
    color: 'violet', 
    label: '钢渣加工',
    gradient: 'from-violet-500 to-purple-600',
    shadow: 'shadow-violet-200',
    border: 'border-violet-200',
    text: 'text-violet-600',
    bg: 'bg-violet-50',
    light: 'bg-violet-100'
  }, 
];

export const SafetyResponsibilitiesPage: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 职责岗位图标匹配逻辑
  const getRoleIcon = (roleName: string) => {
    const name = roleName.trim();

    // 管理层
    if (name.includes('厂长')) return <Briefcase size={20} />;
    if (name.includes('科长') || name.includes('主任')) return <User size={20} />;
    if (name.includes('段长')) return <Users size={20} />;
    if (name.includes('班长') || name.includes('组长')) return <HardHat size={20} />;
    if (name.includes('调度')) return <Radio size={20} />;
    if (name.includes('员')) return <PenTool size={20} />; 

    // 生产岗位
    if (name.includes('天车') || name.includes('吊')) return <Settings size={20} />;
    if (name.includes('焊') || name.includes('割')) return <Flame size={20} />;
    if (name.includes('电')) return <Settings size={20} />;
    if (name.includes('钳')) return <Wrench size={20} />;
    if (name.includes('水') || name.includes('泵')) return <Droplets size={20} />;
    if (name.includes('库') || name.includes('仓')) return <Warehouse size={20} />;
    if (name.includes('检') || name.includes('巡')) return <ClipboardList size={20} />;
    if (name.includes('安全')) return <Shield size={20} />;
    if (name.includes('车') || name.includes('司机')) return <Truck size={20} />;

    return <User size={20} />;
  };

  const activeCategory = SAFETY_RESPONSIBILITIES_DATA[activeCategoryIndex];
  
  const toggleRole = (roleName: string) => {
    if (expandedRole === roleName) {
      setExpandedRole(null);
    } else {
      setExpandedRole(roleName);
    }
  };

  const isSearching = searchQuery.trim().length > 0;
  
  const displayRoles = isSearching 
    ? SAFETY_RESPONSIBILITIES_DATA.flatMap((cat, idx) => cat.roles.map(r => ({ ...r, categoryName: cat.name, categoryIndex: idx })))
        .filter(r => r.role.toLowerCase().includes(searchQuery.toLowerCase()))
    : activeCategory.roles.map(r => ({ ...r, categoryIndex: activeCategoryIndex }));

  return (
    <div className="h-full flex flex-col bg-slate-50 relative animate-fade-in font-sans">
      
      {/* 顶部搜索栏 - 毛玻璃效果 */}
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 md:px-6 md:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl shadow-lg shadow-indigo-200 mr-4">
              <ShieldCheckIcon size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">安全生产责任制</h2>
              <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">全员安全红线 · 岗位履职清单</p>
            </div>
          </div>
          
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="快速查找岗位..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-transparent rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto w-full">
        
        {/* 左侧导航栏 - 优化为卡片式选项卡 */}
        {!isSearching && (
          <div className="
            flex-shrink-0 z-20
            flex flex-row overflow-x-auto w-full border-b border-slate-200 bg-white
            md:static md:w-72 md:flex-col md:h-full md:border-b-0 md:border-r md:bg-slate-50/50 md:p-6
            scrollbar-hide
          ">
            <div className="flex md:flex-col p-3 md:p-0 gap-3 md:gap-4 min-w-max md:min-w-0">
              {SAFETY_RESPONSIBILITIES_DATA.map((category, index) => {
                const theme = CATEGORY_THEMES[index % CATEGORY_THEMES.length];
                const isActive = activeCategoryIndex === index;

                return (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCategoryIndex(index);
                      setExpandedRole(null);
                      const container = document.getElementById('responsibilities-container');
                      if (container) container.scrollTop = 0;
                    }}
                    className={`
                      relative group flex items-center justify-between w-auto md:w-full min-w-[140px] md:min-w-0
                      px-4 py-3 md:px-5 md:py-4 rounded-xl text-left transition-all duration-300
                      whitespace-nowrap flex-shrink-0
                      ${isActive 
                        ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg shadow-slate-200 md:shadow-xl ring-1 ring-white/20` 
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-sm'
                      }
                    `}
                  >
                    <span className={`font-bold tracking-wide ${isActive ? 'text-white' : 'text-slate-700'}`}>
                      {category.name}
                    </span>
                    
                    {/* Badge */}
                    <span className={`
                      ml-3 text-xs px-2 py-1 rounded-full font-bold tabular-nums
                      ${isActive 
                        ? 'bg-white/20 text-white backdrop-blur-sm' 
                        : `${theme.bg} ${theme.text}`
                      }
                    `}>
                      {category.roles.length}
                    </span>

                    {/* Active Indicator for Desktop */}
                    {isActive && (
                      <div className="absolute right-2 w-1.5 h-8 rounded-full bg-white/30 hidden md:block" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* 右侧内容区 - 职责详情 */}
        <div 
          id="responsibilities-container"
          className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full bg-slate-50"
        >
          {isSearching && displayRoles.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
              <div className="p-4 bg-slate-100 rounded-full mb-4">
                <Search size={32} className="opacity-50" />
              </div>
              <p className="font-medium">未找到匹配的岗位</p>
              <p className="text-sm opacity-70 mt-1">请尝试更换关键词</p>
            </div>
          )}

          <div className="space-y-4 max-w-4xl mx-auto pb-12">
            {displayRoles.map((role: ProcedureItem & { categoryName?: string, categoryIndex?: number }, idx) => {
              const isExpanded = expandedRole === role.role;
              const itemTheme = role.categoryIndex !== undefined 
                ? CATEGORY_THEMES[role.categoryIndex % CATEGORY_THEMES.length] 
                : CATEGORY_THEMES[activeCategoryIndex % CATEGORY_THEMES.length];

              return (
                <div 
                  key={idx} 
                  className={`
                    bg-white rounded-2xl transition-all duration-300 overflow-hidden
                    ${isExpanded 
                      ? `shadow-xl ring-1 ring-${itemTheme.color}-500/20 shadow-${itemTheme.color}-500/10` 
                      : 'shadow-sm hover:shadow-md border border-slate-100'
                    }
                  `}
                >
                  {/* Header */}
                  <button
                    onClick={() => toggleRole(role.role)}
                    className={`
                      w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left transition-colors
                      ${isExpanded ? 'bg-white' : 'hover:bg-slate-50'}
                    `}
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Box */}
                      <div className={`
                        w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm
                        transition-all duration-300
                        ${isExpanded 
                          ? `bg-gradient-to-br ${itemTheme.gradient} text-white scale-110 shadow-md` 
                          : `${itemTheme.bg} ${itemTheme.text}`
                        }
                      `}>
                        {getRoleIcon(role.role)}
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`text-lg md:text-xl font-bold transition-colors ${isExpanded ? 'text-slate-800' : 'text-slate-700'}`}>
                            {role.role}
                          </h3>
                          {/* 只有搜索时显示所属工段标签 */}
                          {isSearching && role.categoryName && (
                            <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-medium border border-slate-200">
                              {role.categoryName}
                            </span>
                          )}
                        </div>
                        <p className={`text-xs md:text-sm mt-1 transition-opacity ${isExpanded ? itemTheme.text : 'text-slate-400'}`}>
                          共 {role.items.length} 条职责
                        </p>
                      </div>
                    </div>
                    
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                      ${isExpanded ? `bg-${itemTheme.color}-50 text-${itemTheme.color}-600 rotate-180` : 'text-slate-300 bg-slate-50'}
                    `}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Content List - Timeline Style */}
                  <div 
                    className={`
                      relative border-t border-slate-50
                      transition-all duration-500 ease-in-out origin-top
                      ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                    `}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-slate-50/50 pattern-dots opacity-30 pointer-events-none" />
                    
                    <div className="p-6 md:p-8 relative">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white border shadow-sm ${itemTheme.text} ${itemTheme.border}`}>
                        <AlertCircle size={14} />
                        岗位安全责任清单
                      </div>

                      <div className="space-y-0 relative ml-2 md:ml-4">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200/80 rounded-full" />

                        {role.items.map((item, i) => (
                          <div key={i} className="relative pl-10 md:pl-12 py-3 group">
                            {/* Timeline Node */}
                            <div className={`
                              absolute left-0 top-3.5 w-8 h-8 rounded-full border-[3px] bg-white flex items-center justify-center z-10
                              transition-all duration-300
                              ${itemTheme.border} text-slate-400 group-hover:scale-110 group-hover:shadow-md
                              group-hover:${itemTheme.text} group-hover:border-current
                            `}>
                              <span className="text-xs font-bold">{i + 1}</span>
                            </div>

                            {/* Content Card */}
                            <div className={`
                              p-3.5 rounded-lg border border-transparent transition-all duration-200
                              hover:bg-white hover:border-${itemTheme.color}-100 hover:shadow-sm
                            `}>
                              <p className="text-sm md:text-base text-slate-700 leading-relaxed group-hover:text-slate-900">
                                {item}
                              </p>
                            </div>
                          </div>
                        ))}
                        
                        {/* End Node */}
                        <div className="relative pl-10 md:pl-12 pt-2 opacity-40">
                          <div className="absolute left-[11px] top-3 w-4 h-4 rounded-full bg-slate-200 border-2 border-white" />
                          <span className="text-xs font-medium text-slate-400 italic">责任制签署完毕</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

// SVG Icon Component
const ShieldCheckIcon = ({ size }: { size: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
