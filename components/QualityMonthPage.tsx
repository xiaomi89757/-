import React, { useState, useEffect } from 'react';
import {
  BadgeCheck, Users, Calendar, Search, Camera, Trophy, Medal,
  Sparkles, ArrowRight, ChevronDown, FileText, Lightbulb,
  BellRing, CheckCircle2, Target, AlertTriangle, Star, Award,
  ClipboardCheck, Flame, Activity
} from 'lucide-react';

interface QCWeek {
  week: number;
  title: string;
  period: string;
  description: string;
  submit?: string;
  deadline?: string;
  hasSubmit: boolean;
}

const WEEKS: QCWeek[] = [
  {
    week: 1,
    title: '质量隐患大排查',
    period: '9月1日 - 9月6日',
    hasSubmit: true,
    deadline: '9月6日前',
    description: '以各班组为单元，立足岗位实际，围绕进厂物料、生产工艺、岗位操作、成品质量等维度，全面排查梳理质量隐患，并统一在平台质量专题月专栏内提交。',
  },
  {
    week: 2,
    title: '质量专题研讨会',
    period: '9月7日 - 9月13日',
    hasSubmit: false,
    description: '组织召开铸坯质量保障专题研讨会，邀请结晶器厂家技术人员授课交流，届时邀请质检处领导参会指导。',
  },
  {
    week: 3,
    title: '质量隐患随手拍',
    period: '9月14日 - 9月20日',
    hasSubmit: true,
    description: '全员参与，对现场质量隐患拍照留存，描述清问题点及整改建议，实名报送，统一上传至平台质量专题月专栏。',
  },
  {
    week: 4,
    title: '质量标杆班组、质量之星评选',
    period: '9月21日 - 9月30日',
    hasSubmit: false,
    description: '结合质量月整体活动开展成效综合评定，由各工段推荐1名"质量之星"及标杆班组报送分厂综合办。',
  },
];

const QC_GROUP = {
  leader: '王立春',
  deputy: '张帆、马庆宇、玄兆刚',
  members: '全体科室、工段段长',
};

const PLAN_SECTIONS = [
  {
    title: '一、成立QC质量管理小组',
    rows: [
      { label: '组 长', value: '王立春' },
      { label: '副组长', value: '张帆、马庆宇、玄兆刚' },
      { label: '组 员', value: '全体科室、工段段长' },
    ],
  },
  {
    title: '二、活动主题',
    text: '人人都是质量关，工序互保你我他',
  },
  {
    title: '三、活动实施步骤',
    intro: '质量月活动分四周有序推进：',
    list: [
      '第一周：质量隐患大排查 —— 以各班组为单元，立足岗位实际，围绕进厂物料、生产工艺、岗位操作、成品质量等维度，全面排查梳理质量隐患。排查问题统一在第二炼钢厂综合管理平台（www.stelg.xyz）质量专题月专栏内提交，于第一周周日(9月6日)前完成全部上报工作。',
      '第二周：组织质量专题研讨会 —— 组织召开铸坯质量保障专题研讨会，邀请结晶器厂家技术人员授课交流，具体开交流会时间，视生产实际情况待定，届时邀请质检处领导参会指导。',
      '第三周：开展质量隐患随手拍活动 —— 实行全员参与，对现场质量隐患拍照留存，并描述清质量隐患问题点及整改建议，实行实名报送，统一上传至第二炼钢厂综合管理平台（www.stelg.xyz）质量专题月专栏内。',
      '第四周：开展质量标杆班组、质量之星评选 —— 结合质量月整体活动开展成效开展综合评定。由各工段推荐1名"质量之星"及标杆班组报送分厂综合办，评选标准严格按照公司质量之星评选相关规则严格执行。',
    ],
  },
  {
    title: '四、工作要求',
    list: [
      '各工段高度重视，做好活动宣贯，把活动要求传达到每一名职工。压实各级质量主体责任，做实过程跟踪，保障质量月各项工作落地见效。',
      '所有排查出的质量问题严格执行闭环管理，做到事事有落实、件件有回音。',
    ],
  },
];

const RULE_SECTIONS = [
  {
    title: '（一）评选目的',
    text: '以本次质量月活动为载体，表彰在质量隐患排查、问题整改、工艺改进、质量管控中表现突出的职工，树立岗位质量标杆，营造全员重质量、抓质量的浓厚氛围。',
  },
  {
    title: '（二）评选范围',
    text: '公司全体在岗职工、班组，生产、质检、技术、设备、管理等各类岗位均可参评。',
  },
  {
    title: '（三）参评基本条件（须全部满足）',
    list: [
      '遵守公司各项规章制度，无质量责任事故',
      '积极参与本次质量月各项活动，立足岗位落实质量责任',
      '任职本岗位期间，未发生因个人原因造成的质量异议',
    ],
  },
  {
    title: '（四）评分考核维度（总分100分）',
    list: [
      '质量隐患/合理化建议上报（40分）：要求积极上报生产、检验、操作、设备方面质量隐患、改进建议；以上报问题的真实性、具体性，以及改进思路的可行性为评分依据，仅上报问题无分析不得分，建议具备落地价值可获高分。',
      '改善举措落地成效（35分）：要求积极参与班组、部门质量研讨，主动参与质量改进；本人提出的改善建议、整改措施得到落地执行；取得实际成效，降低产品缺陷、减少质量波动、降低质量风险。',
      '岗位质量履职表现（25分）：要求严格执行工艺标准、作业规程，岗位质量管控到位，主动提醒身边同事防范质量风险；得到班组、部门同事公认，质量意识突出。',
    ],
  },
  {
    title: '加分项 / 扣分项',
    list: [
      '加分项：发现重大质量隐患，有效避免质量事故发生的，可额外加分，并优先推荐入选。',
      '扣分项：活动期间发生质量违规行为、造成质量事故的，直接取消参评资格。',
    ],
  },
  {
    title: '（五）评选流程',
    list: [
      '部门推荐（9月第四周）：各部门结合质量月活动开展情况，对照评选条件择优推荐候选人，将候选人、班组简要事迹（包含上报隐患情况、参与改进情况、岗位实绩等）报送至质检计量处。',
      '资格审核：质检计量处核查候选人、班组本年度有无质量事故，确认参评资格。',
      '公示表彰：拟获奖名单在公司内部公示，公示无异议后正式进行表彰奖励。',
    ],
  },
  {
    title: '（六）名额设置',
    list: [
      '本次质量月评选"质量之星"个人20名每人奖励500元，班组6个每个班组奖励3000元。',
      '各部门择优推荐，不搞平均分配，坚持宁缺毋滥。',
    ],
  },
];

const SECTION_ACCENTS = {
  blue:   { title: 'text-blue-700',   bar: 'from-blue-400 via-blue-100 to-transparent' },
  cyan:   { title: 'text-cyan-700',   bar: 'from-cyan-400 via-cyan-100 to-transparent' },
  indigo: { title: 'text-indigo-700', bar: 'from-indigo-400 via-indigo-100 to-transparent' },
  sky:    { title: 'text-sky-700',    bar: 'from-sky-400 via-sky-100 to-transparent' },
  amber:  { title: 'text-amber-600',  bar: 'from-amber-400 via-amber-100 to-transparent' },
  rose:   { title: 'text-rose-600',   bar: 'from-rose-400 via-rose-100 to-transparent' },
} as const;
type SectionAccent = keyof typeof SECTION_ACCENTS;

export const QualityMonthPage: React.FC = () => {
  const [openPlan, setOpenPlan] = useState(true);
  const [openRules, setOpenRules] = useState(false);
  const [today, setToday] = useState<Date>(() => new Date());

  // 提交链接待开放后填入
  const hazardUrl = 'https://f.wps.cn/g/z82AoqxL/';    // 质量隐患大排查提报
  const snapshotUrl = 'https://f.wps.cn/g/oGIF2VJU/';  // 质量隐患随手拍提报

  // 每分钟刷新一次，保证周高亮与截止倒计时随时间自动更新
  useEffect(() => {
    const timer = setInterval(() => setToday(new Date()), 60_000);
    return () => clearInterval(timer);
  }, []);

  const getActiveWeek = (now: Date): number | null => {
    if (now.getMonth() !== 8) return null; // 仅9月为活动期
    const d = now.getDate();
    if (d <= 6) return 0;
    if (d <= 13) return 1;
    if (d <= 20) return 2;
    return 3;
  };
  const activeWeek = getActiveWeek(today);

  // 大排查截止 9月6日 倒计时
  const deadline = new Date(2026, 8, 6);
  const daysLeft = Math.ceil((deadline.getTime() - today.getTime()) / 86_400_000);
  const deadlineText =
    daysLeft > 0 ? `距大排查截止 9月6日 还剩 ${daysLeft} 天` :
    daysLeft === 0 ? '今日为大排查截止日，请尽快上报' : '大排查提报已截止';

  const renderSubmitCard = (
    url: string,
    icon: React.ReactNode,
    title: string,
    subtitle: string,
    badge: string,
  ) => {
    const inner = (
      <>
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        <div className="relative z-10 flex flex-row items-center gap-3 md:gap-4">
          <div className="shrink-0 p-1.5 bg-white/15 rounded-lg ring-1 ring-white/20 group-hover:scale-110 transition-all duration-300">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm md:text-xl font-black drop-shadow-sm tracking-wide">{title}</h3>
            <p className="text-[10px] md:text-xs text-blue-100/90 font-semibold mt-0.5 tracking-wider">{subtitle}</p>
          </div>
          <div className="shrink-0 flex items-center gap-1 text-[10px] font-black bg-white/15 px-3 py-1.5 rounded-full group-hover:bg-white/25 transition-all duration-300 border border-white/10">
            <span>{url ? '立即提交' : '待开放'}</span>
            <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
      </>
    );
    const baseCls = `group relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-3.5 md:p-5 text-white ${url ? 'hover:-translate-y-1 cursor-pointer active:scale-[0.98]' : 'opacity-90'}`;
    return url ? (
      <a href={url} target="_blank" rel="noopener noreferrer" className={baseCls}>
        {inner}
      </a>
    ) : (
      <div className={baseCls}>{inner}</div>
    );
  };

  const renderSectionHeader = (icon: React.ReactNode, title: string, accent: SectionAccent) => {
    const c = SECTION_ACCENTS[accent];
    return (
      <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
        {icon}
        <h2 className={`text-sm md:text-base font-black ${c.title} tracking-tight`}>{title}</h2>
        <div className={`flex-1 h-px bg-gradient-to-r ${c.bar} ml-2`}></div>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-slate-50 via-blue-50/30 to-slate-50 relative animate-fade-in font-sans">
      <style>{`
        @keyframes tech-sweep {
          0%   { transform: translateX(-130%) skewX(-12deg); }
          100% { transform: translateX(360%) skewX(-12deg); }
        }
        .animate-tech-sweep {
          animation: tech-sweep 4.5s ease-in-out infinite;
        }
        .tech-grid {
          background-image:
            linear-gradient(rgba(34, 211, 238, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.07) 1px, transparent 1px);
          background-size: 26px 26px;
        }
      `}</style>

      {/* ========== 顶部标题栏 · 质量蓝青风格 ========== */}
      <div className="relative sticky top-0 z-30 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 border-b border-blue-400/20 px-4 py-5 md:px-8 shadow-[0_4px_30px_rgba(37,99,235,0.3)]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-sky-400/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-cyan-300/5 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto flex items-center relative z-10">
          <div className="shrink-0 p-2.5 bg-gradient-to-br from-cyan-400/30 to-sky-400/20 backdrop-blur-sm text-cyan-100 rounded-xl ring-1 ring-cyan-300/30 mr-4 shadow-lg shadow-blue-900/20">
            <BadgeCheck size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-4xl font-black tracking-wide leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              2026年质量月专题活动
            </h1>
            <p className="text-[10px] md:text-xs text-cyan-100/80 font-semibold mt-1.5 tracking-[0.15em] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-cyan-300/60 rounded-full inline-block"></span>
              人人都是质量关 · 工序互保你我他
            </p>
          </div>
          <div className="hidden md:flex shrink-0 items-center gap-1 ml-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full ring-1 ring-white/20">
            <Medal size={14} className="text-cyan-200" />
            <span className="text-[11px] font-black text-cyan-100 tracking-wider">2026 · SEPT</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">

          {/* ========== 活动主题 + QC小组 ========== */}
          <section>
            {renderSectionHeader(<Sparkles size={16} className="text-blue-500" />, '活动概况', 'blue')}
            {/* 主题 Hero · 科技蓝·流光动效 */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/40 ring-1 ring-cyan-400/20">
              {/* 深蓝黑渐变底 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#082f49] to-[#0e7490]"></div>
              {/* 科技网格背景 */}
              <div className="absolute inset-0 tech-grid opacity-70"></div>
              {/* 青色光晕 */}
              <div className="absolute -top-12 -left-10 w-44 h-44 bg-cyan-500/25 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              <div className="absolute -bottom-14 -right-8 w-56 h-56 bg-sky-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5.2s' }}></div>
              <div className="absolute top-1/3 left-1/2 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl"></div>
              {/* 高光线循环扫过 */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 bottom-0 left-0 w-2/5 animate-tech-sweep bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent"></div>
              </div>
              {/* 粒子浮动 */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <span className="absolute top-5 left-[12%] w-1 h-1 bg-cyan-300/80 rounded-full animate-pulse" style={{ animationDuration: '2.2s' }}></span>
                <span className="absolute top-9 right-[18%] w-1.5 h-1.5 bg-sky-300/60 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></span>
                <span className="absolute bottom-1/3 left-[28%] w-1 h-1 bg-blue-300/70 rounded-full animate-pulse" style={{ animationDuration: '2.6s' }}></span>
                <span className="absolute bottom-8 right-[32%] w-1 h-1 bg-cyan-300/60 rounded-full animate-pulse" style={{ animationDuration: '3.4s' }}></span>
                <span className="absolute top-1/2 right-[8%] w-1 h-1 bg-sky-200/50 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></span>
                <span className="absolute bottom-6 left-[16%] w-1 h-1 bg-cyan-200/60 rounded-full animate-pulse" style={{ animationDuration: '3.1s' }}></span>
              </div>

              <div className="relative z-10 p-6 md:p-8 text-center">
                {/* 顶部标签行 */}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[10px] font-black tracking-widest text-cyan-100 ring-1 ring-cyan-300/30">
                    <Sparkles size={10} /> 2026年9月 · 全员质量月
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-cyan-400/25 to-blue-500/25 rounded-full text-[10px] font-black text-cyan-100 ring-1 ring-cyan-300/40">
                    <Target size={10} />
                    {activeWeek === null ? '活动筹备中' : `第 ${activeWeek + 1} 周 / 共 4 周`}
                  </span>
                </div>

                {/* 主题大字 · 青色霓虹发光 */}
                <h3 className="mt-4 md:mt-6 text-2xl md:text-5xl font-black tracking-wide leading-snug bg-gradient-to-r from-cyan-200 via-cyan-400 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.45)]">
                  人人都是质量关，工序互保你我他
                </h3>

                {/* 青色装饰线 */}
                <div className="mt-3 md:mt-4 flex items-center justify-center gap-2">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-cyan-400/70"></div>
                  <Medal size={13} className="text-cyan-300" />
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-cyan-400/70"></div>
                </div>

                {/* 副文 */}
                <p className="mt-3 md:mt-4 text-[11px] md:text-sm text-cyan-100/80 font-medium leading-relaxed">
                  结合公司9月份全员质量月专题活动工作部署，结合分厂生产实际，特制定第二炼钢厂质量月活动实施方案。
                </p>

                {/* 底部：QC徽章 + 倒计时 */}
                <div className="mt-5 md:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full ring-1 ring-cyan-300/30">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[10px] font-black text-white shadow-lg shadow-cyan-500/40">QC</div>
                    <span className="text-[10px] font-black tracking-widest text-cyan-100">质量管理小组</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full ring-1 ring-sky-300/30">
                    <Flame size={13} className="text-sky-300" />
                    <span className="text-[10px] font-black text-cyan-100">{deadlineText}</span>
                  </div>
                </div>

                {/* 四周活动进度条 */}
                <div className="mt-5 md:mt-6 w-full max-w-md mx-auto">
                  <div className="flex items-center justify-between text-[10px] font-black tracking-widest text-cyan-200/80 mb-1.5">
                    <span className="inline-flex items-center gap-1"><Activity size={10} /> 活动进度</span>
                    <span>第 {activeWeek === null ? '—' : activeWeek + 1} / 4 周</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden ring-1 ring-white/10">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-700 shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                      style={{ width: `${activeWeek === null ? 0 : ((activeWeek + 1) / 4) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 md:px-5 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-blue-100">
                <Users size={15} className="text-blue-600" />
                <h3 className="text-sm font-black text-blue-900">QC质量管理小组</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent ml-2"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                <div className="px-4 md:px-5 py-4">
                  <p className="text-[10px] text-slate-400 font-bold mb-1">组长</p>
                  <p className="text-sm font-black text-slate-800">{QC_GROUP.leader}</p>
                </div>
                <div className="px-4 md:px-5 py-4">
                  <p className="text-[10px] text-slate-400 font-bold mb-1">副组长</p>
                  <p className="text-sm font-black text-slate-800">{QC_GROUP.deputy}</p>
                </div>
                <div className="px-4 md:px-5 py-4">
                  <p className="text-[10px] text-slate-400 font-bold mb-1">组员</p>
                  <p className="text-sm font-black text-slate-800">{QC_GROUP.members}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ========== 双提交入口 ========== */}
          <section>
            {renderSectionHeader(<Target size={16} className="text-cyan-600" />, '活动参与入口', 'cyan')}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {renderSubmitCard(
                hazardUrl,
                <Search size={20} className="text-cyan-100" />,
                '质量隐患大排查提报',
                '第一周活动 · 9月6日前完成上报',
                '排查提报',
              )}
              {renderSubmitCard(
                snapshotUrl,
                <Camera size={20} className="text-cyan-100" />,
                '质量隐患随手拍提报',
                '第三周活动 · 拍照 + 整改建议',
                '随手拍',
              )}
            </div>
            <div className="mt-3 flex items-start gap-2 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3 shadow-sm">
              <BellRing size={15} className="text-amber-500 shrink-0 mt-0.5" />
              <p className="text-[11px] md:text-xs text-amber-800 font-semibold leading-relaxed">
                大排查问题请于 <span className="font-black underline decoration-amber-300 underline-offset-2">9月6日前</span> 完成全部上报；随手拍活动实行实名报送，请描述清隐患问题点及整改建议。
              </p>
            </div>
          </section>

          {/* ========== 四周活动安排时间轴 ========== */}
          <section>
            {renderSectionHeader(<Calendar size={16} className="text-indigo-500" />, '四周活动安排', 'indigo')}
            <div className="relative">
              {WEEKS.map((w, i) => {
                const isActive = activeWeek === i;
                const isLast = i === WEEKS.length - 1;
                return (
                  <div key={w.week} className="relative flex gap-4 md:gap-5 pb-5 last:pb-0">
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white font-black text-sm md:text-base shadow-lg transition-all ${isActive ? 'bg-gradient-to-br from-blue-600 to-cyan-500 ring-4 ring-blue-200 shadow-blue-200 scale-110' : 'bg-gradient-to-br from-slate-300 to-slate-400 shadow-slate-200'}`}>
                        {w.week}
                      </div>
                      {!isLast && <div className={`w-0.5 flex-1 min-h-6 ${isActive ? 'bg-gradient-to-b from-blue-400 to-slate-200' : 'bg-slate-200'}`} />}
                    </div>
                    <div className={`flex-1 min-w-0 bg-white rounded-xl border p-4 md:p-5 transition-all ${isActive ? 'border-blue-300 ring-1 ring-blue-100 shadow-md shadow-blue-100' : 'border-slate-100 shadow-sm'}`}>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <h3 className={`text-sm md:text-base font-black tracking-tight ${isActive ? 'text-blue-700' : 'text-slate-800'}`}>{w.title}</h3>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-600 text-white text-[9px] font-black rounded-full shadow-sm">
                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                            本周进行中
                          </span>
                        )}
                        {w.hasSubmit && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-cyan-50 text-cyan-700 text-[9px] font-black rounded-full border border-cyan-200">
                            <ClipboardCheck />
                            平台提交
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] md:text-xs text-slate-400 font-bold mb-2">{w.period}{w.deadline ? ` · 截止${w.deadline}` : ''}</p>
                      <p className="text-[11px] md:text-sm text-slate-600 leading-relaxed">{w.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ========== 文件展示区 ========== */}
          <section>
            {renderSectionHeader(<FileText size={16} className="text-sky-600" />, '活动文件', 'sky')}

            {/* 活动方案 */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-4">
              <button
                onClick={() => setOpenPlan(!openPlan)}
                className="w-full flex items-center gap-3 px-4 md:px-5 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:brightness-110 transition-all text-left"
              >
                <div className="shrink-0 p-2 bg-white/15 rounded-lg ring-1 ring-white/20">
                  <FileText size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-black tracking-wide">2026年质量月活动方案</h3>
                  <p className="text-[10px] text-blue-100 font-semibold">第二炼钢厂 · 2026年9月1日</p>
                </div>
                <ChevronDown size={18} className={`shrink-0 transition-transform duration-300 ${openPlan ? 'rotate-180' : ''}`} />
              </button>
              {openPlan && (
                <div className="p-4 md:p-6 space-y-4">
                  {PLAN_SECTIONS.map((sec, idx) => (
                    <div key={idx}>
                      <h4 className="text-[13px] md:text-sm font-black text-blue-800 mb-2 flex items-center gap-1.5">
                        <span className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full"></span>
                        {sec.title}
                      </h4>
                      {'text' in sec && sec.text && <p className="text-[12px] md:text-sm text-slate-700 leading-relaxed pl-1">{sec.text}</p>}
                      {'intro' in sec && sec.intro && <p className="text-[12px] md:text-sm text-slate-700 leading-relaxed pl-1 mb-1">{sec.intro}</p>}
                      {'list' in sec && sec.list && (
                        <ul className="space-y-1.5">
                          {sec.list.map((li, liIdx) => (
                            <li key={liIdx} className="flex items-start gap-2 text-[12px] md:text-sm text-slate-600 leading-relaxed">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {'rows' in sec && sec.rows && (
                        <div className="space-y-1.5">
                          {sec.rows.map((row, rowIdx) => (
                            <div key={rowIdx} className="flex items-center gap-3 text-[12px] md:text-sm">
                              <span className="shrink-0 w-16 text-slate-400 font-bold">{row.label}</span>
                              <span className="font-semibold text-slate-700">{row.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-slate-400 text-[10px] font-bold">
                    <CheckCircle2 size={12} className="text-blue-400" />
                    第二炼钢厂 · 2026年9月1日
                  </div>
                </div>
              )}
            </div>

            {/* 评选规则 */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenRules(!openRules)}
                className="w-full flex items-center gap-3 px-4 md:px-5 py-4 bg-gradient-to-r from-slate-700 to-slate-800 text-white hover:brightness-110 transition-all text-left"
              >
                <div className="shrink-0 p-2 bg-white/15 rounded-lg ring-1 ring-white/20">
                  <Award size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-black tracking-wide">附件：公司"质量之星"评选规则</h3>
                  <p className="text-[10px] text-slate-300 font-semibold">评选目的 · 维度 · 流程 · 名额</p>
                </div>
                <ChevronDown size={18} className={`shrink-0 transition-transform duration-300 ${openRules ? 'rotate-180' : ''}`} />
              </button>
              {openRules && (
                <div className="p-4 md:p-6 space-y-4">
                  {RULE_SECTIONS.map((sec, idx) => (
                    <div key={idx}>
                      <h4 className="text-[13px] md:text-sm font-black text-slate-800 mb-2 flex items-center gap-1.5">
                        <span className="w-1 h-4 bg-gradient-to-b from-slate-400 to-slate-500 rounded-full"></span>
                        {sec.title}
                      </h4>
                      {'text' in sec && sec.text && <p className="text-[12px] md:text-sm text-slate-600 leading-relaxed pl-1">{sec.text}</p>}
                      {'list' in sec && sec.list && (
                        <ul className="space-y-1.5">
                          {sec.list.map((li, liIdx) => (
                            <li key={liIdx} className="flex items-start gap-2 text-[12px] md:text-sm text-slate-600 leading-relaxed">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0"></span>
                              <span>{li}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ========== 评选激励 ========== */}
          <section>
            {renderSectionHeader(<Trophy size={16} className="text-amber-500" />, '评选激励', 'amber')}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative overflow-hidden bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl p-5 text-white shadow-lg shadow-amber-200 ring-1 ring-amber-300/60">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-10 -left-8 w-28 h-28 bg-yellow-300/25 rounded-full blur-2xl"></div>
                <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-[200%] transition-transform duration-1000"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="shrink-0 p-2.5 bg-white/20 rounded-xl ring-1 ring-white/20">
                    <Star size={20} className="text-yellow-100" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[10px] font-bold text-amber-100 tracking-wider">质量之星 · 个人</p>
                      <span className="px-1.5 py-px bg-white/25 rounded-full text-[8px] font-black text-amber-50 ring-1 ring-white/30">全公司名额</span>
                    </div>
                    <p className="text-lg md:text-2xl font-black"><span className="text-3xl md:text-4xl">20</span> 名</p>
                    <p className="text-[10px] font-bold text-amber-100">每人奖励 500 元</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-5 text-white shadow-lg shadow-blue-200 ring-1 ring-blue-300/50">
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <div className="shrink-0 p-2.5 bg-white/20 rounded-xl ring-1 ring-white/20">
                    <Trophy size={20} className="text-cyan-100" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[10px] font-bold text-cyan-100 tracking-wider">标杆班组 · 集体</p>
                      <span className="px-1.5 py-px bg-white/25 rounded-full text-[8px] font-black text-cyan-50 ring-1 ring-white/30">全公司名额</span>
                    </div>
                    <p className="text-lg md:text-2xl font-black"><span className="text-3xl md:text-4xl">6</span> 个</p>
                    <p className="text-[10px] font-bold text-cyan-100">每个班组奖励 3000 元</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 rounded-xl border border-amber-100 shadow-sm px-4 py-3 flex items-start gap-2">
              <Lightbulb size={14} className="text-amber-500 shrink-0 mt-0.5" />
              <div className="text-[11px] md:text-xs text-slate-500 leading-relaxed space-y-1">
                <p>
                  <span className="font-black text-amber-700">名额说明：</span>
                  "质量之星"20名、"标杆班组"6个均为<span className="font-black text-slate-700">全公司</span>评选名额（依据附件《公司"质量之星"评选规则》），第二炼钢厂由各工段择优推荐、分厂综合办汇总后统一上报公司评选。
                </p>
                <p>
                  坚持宁缺毋滥、不搞平均分配。发现重大质量隐患、有效避免质量事故的，可额外加分并优先推荐入选。
                </p>
              </div>
            </div>
          </section>

          {/* ========== 工作要求 ========== */}
          <section>
            {renderSectionHeader(<AlertTriangle size={16} className="text-rose-500" />, '工作要求', 'rose')}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 md:p-5 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
                <p className="text-[12px] md:text-sm text-slate-600 leading-relaxed">
                  各工段高度重视，做好活动宣贯，把活动要求传达到每一名职工。压实各级质量主体责任，做实过程跟踪，保障质量月各项工作落地见效。
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="mt-[5px] w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>
                <p className="text-[12px] md:text-sm text-slate-600 leading-relaxed">
                  所有排查出的质量问题严格执行闭环管理，做到事事有落实、件件有回音。
                </p>
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
