
import { MenuItem, ViewState, Resource } from './types';

export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  { id: ViewState.HOME, label: '主页', icon: 'Home', type: 'component' },
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
  // Fix: Updated shorthand COMPRE_PLAN to COMPREHENSIVE_REMEDIATION_PLAN
  { id: ViewState.COMPREHENSIVE_REMEDIATION_PLAN, label: '方案', icon: 'FileText', type: 'iframe', path: 'https://kdocs.cn/l/cefIGFFgviDR', hidden: true },
  // Fix: Updated shorthand HAZARD_STD to HAZARD_CRITERIA_STANDARD
  { id: ViewState.HAZARD_CRITERIA_STANDARD, label: '标准', icon: 'AlertTriangle', type: 'iframe', path: 'https://kdocs.cn/l/csvBw09bymX6', hidden: true },
  // Fix: Updated shorthand PROGRESS_TABLE to ACTION_PLAN_PROGRESS_TABLE
  { id: ViewState.ACTION_PLAN_PROGRESS_TABLE, label: '推进表', icon: 'ClipboardList', type: 'iframe', path: 'https://www.kdocs.cn/l/cmagm8QKt8Sz', hidden: true },
  { id: ViewState.LEAN_LEARNING, label: '精益学习资料', icon: 'BookOpen', type: 'component' },
  { 
    id: ViewState.LEAN_PROPOSAL, 
    label: '精益提案', 
    icon: 'Send', 
    type: 'link_group',
    subLinks: [
      { label: '精益提案提报', url: 'https://f.wps.cn/g/SHsqFlKK/', openInNewTab: true, description: '助力降本增效', icon: 'Send', color: 'indigo' },
      { label: '已提报提案查看', url: 'https://www.kdocs.cn/l/cshW3GzmadPZ', openInNewTab: true, icon: 'Search', color: 'cyan' },
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
  // Fix: Updated shorthand JOB_PROCEDURES to JOB_OPERATING_PROCEDURES
  { id: ViewState.JOB_OPERATING_PROCEDURES, label: '安全操作规程', icon: 'Wrench', type: 'component' },
  // Fix: Updated shorthand JOB_RESP to JOB_SAFETY_RESPONSIBILITIES
  { id: ViewState.JOB_SAFETY_RESPONSIBILITIES, label: '安全生产责任制', icon: 'ShieldCheck', type: 'component' },
  // Fix: Updated shorthand EMERGENCY_PLAN to PLANT_EMERGENCY_PLAN
  { id: ViewState.PLANT_EMERGENCY_PLAN, label: '应急预案汇总', icon: 'Siren', type: 'link_group', subLinks: [{label: '下载', url: 'https://www.123pan.com/s/pR9rVv-oNgO3.html', openInNewTab: true, icon: 'Shield', color: 'blue'}] },
  // Fix: Updated shorthand CERT_QUERY to SAFETY_CERT_QUERY
  { id: ViewState.SAFETY_CERT_QUERY, label: '合格证查询', icon: 'Search', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/s8BV0CAT' },
  // Fix: Updated shorthand SPACE_QUERY to RESTRICTED_SPACE_QUERY
  { id: ViewState.RESTRICTED_SPACE_QUERY, label: '有限空间查询', icon: 'Box', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/MJcTiw1a' },
  // Fix: Updated shorthand OUTSOURCED_REG to OUTSOURCED_REGISTRATION
  { id: ViewState.OUTSOURCED_REGISTRATION, label: '外委登记', icon: 'ClipboardList', type: 'external_single_tab', path: 'https://f.wps.cn/w/PBXs3qUz/' },
  { id: ViewState.APP_DOWNLOADS, label: '应用下载', icon: 'Download', type: 'component' },
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
    updateDate: '2025-01-10',
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
    updateDate: '2025-02-01',
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
    updateDate: '2025-02-10',
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
    updateDate: '2025-02-20',
    rating: 5,
    isHot: true,
    shareIndex: '04'
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