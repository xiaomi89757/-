
import React, { useState, useEffect } from 'react';
import { 
  Search, ChevronDown, FileText, 
  Flame, Droplets, Zap, Truck, Hammer, Move, 
  Fan, ShieldAlert, Thermometer, Layers, Wrench,
  Factory, Gauge, BoxSelect, ClipboardList,
  UserCog, Snowflake, Trash2, Gem, MonitorPlay, 
  StretchHorizontal, Cylinder, ArrowUpFromLine, Scissors, 
  Wind, Waves, Database, Boxes, Tornado, Archive, 
  Filter, Magnet, Timer, CircuitBoard, Minimize2, 
  SprayCan, Construction, Settings, Anchor, CheckCircle2,
  Loader2
} from 'lucide-react';
import { ProcedureItem, ProcedureCategory } from '../types';

const CATEGORY_THEMES = [
  { color: 'red', label: '转炉炼钢', gradient: 'from-rose-500 to-red-600', shadow: 'shadow-red-200', border: 'border-red-200', text: 'text-red-600', bg: 'bg-red-50', light: 'bg-red-100' },
  { color: 'orange', label: '连铸生产', gradient: 'from-orange-400 to-amber-600', shadow: 'shadow-orange-200', border: 'border-orange-200', text: 'text-orange-600', bg: 'bg-orange-50', light: 'bg-orange-100' },
  { color: 'cyan', label: '天车运行', gradient: 'from-cyan-500 to-sky-600', shadow: 'shadow-cyan-200', border: 'border-cyan-200', text: 'text-cyan-600', bg: 'bg-cyan-50', light: 'bg-cyan-100' },
  { color: 'emerald', label: '辅助公辅', gradient: 'from-emerald-500 to-teal-600', shadow: 'shadow-emerald-200', border: 'border-emerald-200', text: 'text-emerald-600', bg: 'bg-emerald-50', light: 'bg-emerald-100' },
  { color: 'violet', label: '钢渣加工', gradient: 'from-violet-500 to-purple-600', shadow: 'shadow-violet-200', border: 'border-violet-200', text: 'text-violet-600', bg: 'bg-violet-50', light: 'bg-violet-100' },
  { color: 'blue', label: '设备维修', gradient: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-200', border: 'border-blue-200', text: 'text-blue-600', bg: 'bg-blue-50', light: 'bg-blue-100' },
];

export const ProceduresPage: React.FC = () => {
  const [proceduresData, setProceduresData] = useState<ProcedureCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [expandedRole, setExpandedRole] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // 更改为英文路径
    fetch('/safety_procedures.json')
      .then(res => {
        if (!res.ok) throw new Error('无法加载操作规程数据 (HTTP ' + res.status + ')');
        return res.json();
      })
      .then(data => {
        setProceduresData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const getRoleIcon = (roleName: string, categoryIndex: number) => {
    const name = roleName.trim();
    const size = 20;
    if (name.includes('助手') || name.includes('副')) return <UserCog size={size} />; 
    if (name.includes('汽冷')) return <Snowflake size={size} />; 
    if (name.includes('清渣') || name.includes('废')) return <Trash2 size={size} />; 
    if (name.includes('合金')) return <Gem size={size} />; 
    if (name.includes('混铁')) return <Settings size={size} />; 
    if (name.includes('操室')) return <MonitorPlay size={size} />; 
    if (name.includes('拉矫')) return <StretchHorizontal size={size} />; 
    if (name.includes('大包') || name.includes('中包') || name.includes('钢包')) return <Cylinder size={size} />; 
    if (name.includes('天车') || name.includes('吊')) return <ArrowUpFromLine size={size} />; 
    if (name.includes('精整') || name.includes('切割')) return <Scissors size={size} />; 
    if (name.includes('斜板')) return <Construction size={size} />; 
    if (name.includes('除尘') || name.includes('风机')) return <Wind size={size} />; 
    if (name.includes('泵')) return <Waves size={size} />; 
    if (name.includes('煤气柜')) return <Database size={size} />; 
    if (name.includes('散装')) return <Boxes size={size} />; 
    if (name.includes('旋流')) return <Tornado size={size} />; 
    if (name.includes('储灰')) return <Archive size={size} />; 
    if (name.includes('筛')) return <Filter size={size} />; 
    if (name.includes('捡铁')) return <Magnet size={size} />; 
    if (name.includes('破碎')) return <Minimize2 size={size} />; 
    if (name.includes('焖渣')) return <Timer size={size} />; 
    if (name.includes('电仪')) return <CircuitBoard size={size} />; 
    if (name.includes('焊')) return <Flame size={size} />; 
    if (name.includes('打水')) return <SprayCan size={size} />; 
    if (name.includes('压泥')) return <Layers size={size} />; 
    if (name.includes('钳')) return <Wrench size={size} />; 
    if (name.includes('滑板')) return <Settings size={size} />; 
    return <Wrench size={size} />;
  };

  if (loading) return (
    <div className="flex flex-col items-center justify-center h-full">
      <Loader2 className="animate-spin text-blue-600 mb-4" size={48} />
      <p className="text-slate-500 font-medium">正在加载安全操作规程...</p>
    </div>
  );

  if (error) return (
    <div className="flex flex-col items-center justify-center h-full text-red-500">
      <p className="font-bold text-xl mb-2">数据加载失败</p>
      <p className="text-sm bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
      >
        重试
      </button>
    </div>
  );

  const activeCategory = proceduresData[activeCategoryIndex];
  const toggleRole = (roleName: string) => setExpandedRole(expandedRole === roleName ? null : roleName);
  const isSearching = searchQuery.trim().length > 0;
  
  const displayRoles = isSearching 
    ? proceduresData.flatMap((cat, idx) => cat.roles.map(r => ({ ...r, categoryName: cat.name, categoryIndex: idx })))
        .filter(r => r.role.toLowerCase().includes(searchQuery.toLowerCase()))
    : activeCategory?.roles.map(r => ({ ...r, categoryIndex: activeCategoryIndex })) || [];

  return (
    <div className="h-full flex flex-col bg-slate-50 relative animate-fade-in font-sans">
      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 md:px-6 md:py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="p-2.5 bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-xl shadow-lg shadow-blue-200 mr-4">
              <ClipboardList size={24} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">安全操作规程</h2>
              <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">标准化作业 · 风险预控</p>
            </div>
          </div>
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-blue-500 transition-colors">
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="全站搜索岗位..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-transparent rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row overflow-hidden max-w-7xl mx-auto w-full">
        {!isSearching && (
          <div className="flex-shrink-0 z-20 flex flex-row overflow-x-auto w-full border-b border-slate-200 bg-white md:static md:w-72 md:flex-col md:h-full md:border-b-0 md:border-r md:bg-slate-50/50 md:p-6 scrollbar-hide">
            <div className="flex md:flex-col p-3 md:p-0 gap-3 md:gap-4 min-w-max md:min-w-0">
              {proceduresData.map((category, index) => {
                const theme = CATEGORY_THEMES[index % CATEGORY_THEMES.length];
                const isActive = activeCategoryIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => { setActiveCategoryIndex(index); setExpandedRole(null); }}
                    className={`relative group flex items-center justify-between w-auto md:w-full min-w-[140px] md:min-w-0 px-4 py-3 md:px-5 md:py-4 rounded-xl text-left transition-all duration-300 whitespace-nowrap flex-shrink-0 ${isActive ? `bg-gradient-to-r ${theme.gradient} text-white shadow-lg shadow-slate-200 md:shadow-xl ring-1 ring-white/20` : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 shadow-sm'}`}
                  >
                    <span className={`font-bold tracking-wide ${isActive ? 'text-white' : 'text-slate-700'}`}>{category.name}</span>
                    <span className={`ml-3 text-xs px-2 py-1 rounded-full font-bold tabular-nums ${isActive ? 'bg-white/20 text-white backdrop-blur-sm' : `${theme.bg} ${theme.text}`}`}>{category.roles.length}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div id="roles-container" className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full bg-slate-50">
          {isSearching && displayRoles.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 text-slate-400">
              <Search size={32} className="opacity-50 mb-4" />
              <p className="font-medium">未找到匹配的岗位</p>
            </div>
          )}
          <div className="space-y-4 max-w-4xl mx-auto pb-12">
            {displayRoles.map((role: any, idx) => {
              const isExpanded = expandedRole === role.role;
              const itemTheme = CATEGORY_THEMES[(role.categoryIndex ?? activeCategoryIndex) % CATEGORY_THEMES.length];
              return (
                <div key={idx} className={`bg-white rounded-2xl transition-all duration-300 overflow-hidden ${isExpanded ? `shadow-xl ring-1 ring-${itemTheme.color}-500/20` : 'shadow-sm hover:shadow-md border border-slate-100'}`}>
                  <button onClick={() => toggleRole(role.role)} className={`w-full flex items-center justify-between px-5 py-4 md:px-6 md:py-5 text-left transition-colors ${isExpanded ? 'bg-white' : 'hover:bg-slate-50'}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 ${isExpanded ? `bg-gradient-to-br ${itemTheme.gradient} text-white scale-110` : `${itemTheme.bg} ${itemTheme.text}`}`}>
                        {getRoleIcon(role.role, role.categoryIndex ?? activeCategoryIndex)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`text-lg md:text-xl font-bold ${isExpanded ? 'text-slate-800' : 'text-slate-700'}`}>{role.role}</h3>
                          {isSearching && role.categoryName && <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full font-medium border border-slate-200">{role.categoryName}</span>}
                        </div>
                        <p className={`text-xs md:text-sm mt-1 ${isExpanded ? itemTheme.text : 'text-slate-400'}`}>共 {role.items.length} 条操作规程</p>
                      </div>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? `bg-${itemTheme.color}-50 text-${itemTheme.color}-600 rotate-180` : 'text-slate-300 bg-slate-50'}`}><ChevronDown size={20} /></div>
                  </button>
                  <div className={`relative border-t border-slate-50 transition-all duration-500 ease-in-out origin-top ${isExpanded ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="p-6 md:p-8 relative">
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white border shadow-sm ${itemTheme.text} ${itemTheme.border}`}><FileText size={14} />安全操作规程清单</div>
                      <div className="space-y-0 relative ml-2 md:ml-4">
                        <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-slate-200/80 rounded-full" />
                        {role.items.map((item: string, i: number) => (
                          <div key={i} className="relative pl-10 md:pl-12 py-3 group">
                            <div className={`absolute left-0 top-3.5 w-8 h-8 rounded-full border-[3px] bg-white flex items-center justify-center z-10 transition-all duration-300 ${itemTheme.border} text-slate-400 group-hover:${itemTheme.text}`}><span className="text-xs font-bold">{i + 1}</span></div>
                            <div className="p-3.5 rounded-lg border border-transparent transition-all duration-200 hover:bg-white hover:shadow-sm"><p className="text-sm md:text-base text-slate-700 leading-relaxed">{item}</p></div>
                          </div>
                        ))}
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
