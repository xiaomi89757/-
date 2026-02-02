
import { MenuItem, ViewState, Resource } from './types';

export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  { id: ViewState.HOME, label: '主页', icon: 'Home', type: 'component' },
  { id: ViewState.TEMP_ASSIGNMENT, label: '临时交办', icon: 'BellRing', type: 'component' },
  { 
    id: ViewState.IMPORTANT_FILES, 
    label: '重要文件', 
    icon: 'FolderOpen', 
    type: 'link_group',
    subLinks: [
      { label: '治本攻坚三年专项整治方案', viewId: ViewState.COMPREHENSIVE_REMEDIATION_PLAN, description: '工作目标与任务清单', icon: 'FileText', color: 'rose' },
      { label: '2023版重大事故隐患判定标准', viewId: ViewState.HAZARD_CRITERIA_STANDARD, description: '工贸企业标准解读', icon: 'AlertTriangle', color: 'orange' },
      { label: '2025年重点任务推进表', viewId: ViewState.ACTION_PLAN_PROGRESS_TABLE, description: '月度任务跟踪', icon: 'ClipboardList', color: 'blue' }
    ]
  },
  { id: ViewState.COMPREHENSIVE_REMEDIATION_PLAN, label: '方案', icon: 'FileText', type: 'iframe', path: 'https://kdocs.cn/l/cefIGFFgviDR', hidden: true },
  { id: ViewState.HAZARD_CRITERIA_STANDARD, label: '标准', icon: 'AlertTriangle', type: 'iframe', path: 'https://kdocs.cn/l/csvBw09bymX6', hidden: true },
  { id: ViewState.ACTION_PLAN_PROGRESS_TABLE, label: '推进表', icon: 'ClipboardList', type: 'iframe', path: 'https://www.kdocs.cn/l/cmagm8QKt8Sz', hidden: true },
  { id: ViewState.LEAN_LEARNING, label: '精益学习资料', icon: 'BookOpen', type: 'component' },
  { 
    id: ViewState.LEAN_PROPOSAL, 
    label: '精益提案', 
    icon: 'Send', 
    type: 'link_group',
    subLinks: [
      { label: '精益提案提报', url: 'https://f.wps.cn/g/SduuEqae/', openInNewTab: true, description: '助力降本增效', icon: 'Send', color: 'indigo' },
      { label: '已提报提案查看', url: 'https://www.kdocs.cn/l/caIeWgrNR5Uf', openInNewTab: true, icon: 'Search', color: 'cyan' },
      { label: '精益提案展示', url: 'https://www.kdocs.cn/folder/ctNEL', openInNewTab: true, icon: 'Presentation', color: 'violet' }
    ]
  },
  { 
    id: ViewState.MICRO_IMPROVEMENT, 
    label: '精益微改善', 
    icon: 'BarChart3', 
    type: 'link_group',
    subLinks: [
      { label: '现场微改善提报', url: 'https://f.wps.cn/g/40YKGlJV/', openInNewTab: true, icon: 'PlusCircle', color: 'emerald' },
      { label: '已提报微改善查看', url: 'https://www.kdocs.cn/l/ccWZAfWXWgR6', openInNewTab: true, icon: 'ListChecks', color: 'blue' }
    ]
  },
  { id: ViewState.JOB_OPERATING_PROCEDURES, label: '安全操作规程', icon: 'Wrench', type: 'component' },
  { id: ViewState.JOB_SAFETY_RESPONSIBILITIES, label: '安全生产责任制', icon: 'ShieldCheck', type: 'component' },
  { id: ViewState.PLANT_EMERGENCY_PLAN, label: '应急预案汇总', icon: 'Siren', type: 'link_group', subLinks: [{label: '下载', url: 'https://www.123pan.com/s/pR9rVv-oNgO3.html', openInNewTab: true, icon: 'Shield', color: 'blue'}] },
  { id: ViewState.SAFETY_CERT_QUERY, label: '合格证查询', icon: 'Search', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/s8BV0CAT' },
  { id: ViewState.RESTRICTED_SPACE_QUERY, label: '有限空间查询', icon: 'Box', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/MJcTiw1a' },
  { id: ViewState.OUTSOURCED_REGISTRATION, label: '外委登记', icon: 'ClipboardList', type: 'external_single_tab', path: 'https://f.wps.cn/w/PBXs3qUz/' },
  { id: ViewState.APP_DOWNLOADS, label: '应用下载', icon: 'Download', type: 'component' },
  { id: ViewState.APP_SHOUAN, label: '首安云下载', icon: 'Shield', type: 'component', hidden: true },
  { id: ViewState.APP_EXAM_STAR, label: '考试星下载', icon: 'Star', type: 'component', hidden: true },
  { id: ViewState.FEEDBACK, label: '意见反馈', icon: 'MessageSquare', type: 'component' }
];

export const LEAN_RESOURCES: Resource[] = [
  {
    id: 'l-01',
    title: '精益管理常用十方法',
    description: '价值流图、看板管理、防错技术、TPM等核心实战工具。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/ccpZwIIYcAWx',
    updateDate: '2025-02-15',
    rating: 5,
    isHot: true,
    shareIndex: '01'
  },
  {
    id: 'l-02',
    title: '目视化与5S管理',
    description: '打造制造车间的黄金搭档，通过视觉信号提升现场透明度。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cihRdDjURGOJ',
    updateDate: '2025-02-18',
    rating: 5,
    isNew: true,
    shareIndex: '02'
  },
  {
    id: 'l-03',
    title: '5WHY分析法详解',
    description: '追本溯源，从根本上杜绝问题重复发生，提升全员解决力。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/chXi7OklkBXq',
    updateDate: '2025-02-20',
    rating: 4,
    shareIndex: '03'
  },
  {
    id: 'l-04',
    title: '打造标杆车间5S精髓',
    description: '8大妙招+7条标语，实现从整洁到素养的质变指南。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cs6lyp05gCGL',
    updateDate: '2025-02-22',
    rating: 5,
    isHot: true,
    shareIndex: '04'
  },
  {
    id: 'l-05',
    title: '（德鲁克管理思维）如何让员工主动承担责任，打造高效绩团队',
    description: '德鲁克经典管理智慧，解决员工积极性难题，构建高绩效班组核心竞争力。',
    category: '基础理论',
    type: 'video',
    url: 'https://player.bilibili.com/player.html?isOutside=true&aid=115749620286133&bvid=BV1eyqBB4EQp&cid=34854537379&p=1',
    updateDate: '2025-02-25',
    rating: 5,
    shareIndex: '05'
  },
  {
    id: 'l-06',
    title: '5分钟看透目视化管理本质',
    description: '通过视觉化手段实现异常管理与标准透明化的核心逻辑。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cimVL2GtWjFL',
    updateDate: '2025-02-26',
    rating: 5,
    shareIndex: '06'
  },
  {
    id: 'l-07',
    title: '做精益要做的四个减法',
    description: '精益不仅仅是增加工具，更是通过减法去除无效动作与浪费。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cp4xqLoBCWCH',
    updateDate: '2025-02-27',
    rating: 4,
    shareIndex: '07'
  },
  {
    id: 'l-08',
    title: '运用SWOT、PDCA、SMART工具搭建高效管理模式',
    description: '综合运用管理工具链，实现从战略分析到执行闭环的全流程。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/ciz8CNsP5UNu',
    updateDate: '2025-02-28',
    rating: 5,
    shareIndex: '08'
  },
  {
    id: 'l-09',
    title: '人机料法环测，工厂管理全面分析',
    description: '深挖生产要素中的不稳定点，全面系统地进行工厂效能诊断。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cmVGkUm9u0RC',
    updateDate: '2025-03-01',
    rating: 5,
    shareIndex: '09'
  },
  {
    id: 'l-10',
    title: '精益领导力十二范式',
    description: '从管理者到领导者的转变，塑造精益文化的核心软实力。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cp73eq55tGuM',
    updateDate: '2025-03-02',
    rating: 5,
    shareIndex: '10'
  },
  {
    id: 'l-11',
    title: '格鲁克工作逻辑思维',
    description: '高效工作的逻辑架构，从结果导向思维重塑日常作业效率。',
    category: '基础理论',
    type: 'video',
    url: 'https://player.bilibili.com/player.html?bvid=BV1n1B8BmEK4&page=1',
    updateDate: '2025-03-03',
    rating: 5,
    isNew: true,
    shareIndex: '11'
  },
  {
    id: 'l-12',
    title: '从六个维度，构建精益管理体系化',
    description: '系统化推进精益的路线图，避免碎片化改进的系统性方案。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cqmNxqYpWjCf',
    updateDate: '2025-03-04',
    rating: 4,
    shareIndex: '12'
  },
  {
    id: 'l-13',
    title: '错误反复发生？如何构建防错体系',
    description: 'Poka-Yoke 技术的深度解析，从源头杜绝人为失误。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cre96AefJA0u',
    updateDate: '2025-03-05',
    rating: 5,
    isHot: true,
    shareIndex: '13'
  },
  {
    id: 'l-14',
    title: '八大浪费背后的根源',
    description: '不仅是识别浪费，更是要看透浪费产生的组织与流程病灶。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cpy3dsdFgG5H',
    updateDate: '2025-03-06',
    rating: 5,
    shareIndex: '14'
  },
  {
    id: 'l-15',
    title: '传统设备管理与TPM的差异及推行5步骤',
    description: '全员生产保全的核心思想与落地步骤。',
    category: '设备保全',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/ch7z7bcYuKaz',
    updateDate: '2025-03-07',
    rating: 5,
    shareIndex: '15'
  },
  {
    id: 'l-16',
    title: '德鲁克管理思维 - 深度解析',
    description: '探究卓越管理的真谛，如何通过卓有成效的管理提升组织价值。',
    category: '基础理论',
    type: 'video',
    url: 'https://player.bilibili.com/player.html?bvid=BV1n1B8BmE33&page=1',
    updateDate: '2025-03-08',
    rating: 5,
    isNew: true,
    shareIndex: '16'
  },
  {
    id: 'l-17',
    title: '金牌一线班组长的全能通关手册',
    description: '班组管理的一站式实战指南，涵盖沟通、任务分配与现场管控。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cix1IJIaaZ7o',
    updateDate: '2025-03-09',
    rating: 5,
    shareIndex: '17'
  },
  {
    id: 'l-18',
    title: '衡量企业仓库精细化管理水平的KPI指标',
    description: '通过量化数据衡量物流与库存管理的真实效率。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cfhbjjExOwO5',
    updateDate: '2025-03-10',
    rating: 4,
    shareIndex: '18'
  },
  {
    id: 'l-19',
    title: '干好工作的10种方法',
    description: '一线职工通用职场技能，提升工作质量与效率的实用技巧。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cl6qqKgbm8NE',
    updateDate: '2025-03-11',
    rating: 5,
    shareIndex: '19'
  },
  {
    id: 'l-20',
    title: '藏在丰田A3报告里的问题解决逻辑',
    description: '单页报告背后的深度思考力，结构化解决复杂问题的方法论。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cjkwAfSfYWGl',
    updateDate: '2025-03-12',
    rating: 5,
    isNew: true,
    shareIndex: '20'
  }
];

export const LEAN_CATEGORIES = ['全部', '基础理论', '现场管理', '设备保全', '改善实战'];

export const CATEGORY_TAG_THEMES: Record<string, string> = {
  '基础理论': 'bg-blue-50 text-blue-600 border-blue-200',
  '现场管理': 'bg-emerald-50 text-emerald-600 border-emerald-200',
  '设备保全': 'bg-amber-50 text-amber-600 border-amber-200',
  '改善实战': 'bg-rose-50 text-rose-600 border-rose-200',
  'default': 'bg-slate-50 text-slate-600 border-slate-200'
};
