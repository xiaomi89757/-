
import { MenuItem, ViewState, DocumentContent } from './types';

// 定义侧边栏菜单项
export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  { id: ViewState.HOME, label: '主页', icon: 'Home', type: 'component' },
  { 
    id: ViewState.IMPORTANT_FILES, 
    label: '重要文件', 
    icon: 'FolderOpen', 
    type: 'link_group',
    subLinks: [
      { 
        label: '治本攻坚三年专项整治方案', 
        viewId: ViewState.COMPREHENSIVE_REMEDIATION_PLAN, 
        description: '查看公司发布的治本攻坚三年行动详细工作目标、组织机构及任务清单。',
        icon: 'FileText',
        color: 'rose'
      },
      { 
        label: '2023版重大事故隐患判定标准', 
        viewId: ViewState.HAZARD_CRITERIA_STANDARD, 
        description: '学习工贸企业重大事故隐患判定标准（炼钢部分）及重点条款解读。',
        icon: 'AlertTriangle',
        color: 'orange'
      },
      { 
        label: '2025年治本攻坚重点任务推进表', 
        viewId: ViewState.ACTION_PLAN_PROGRESS_TABLE, 
        description: '实时跟踪2025年度治本攻坚三年行动重点任务的月度完成进度与落实情况。',
        icon: 'ClipboardList',
        color: 'blue'
      }
    ]
  },
  { 
    id: ViewState.COMPREHENSIVE_REMEDIATION_PLAN, 
    label: '治本攻坚方案', 
    icon: 'FileText', 
    type: 'iframe', 
    path: 'https://kdocs.cn/l/cefIGFFgviDR', 
    hidden: true 
  },
  { 
    id: ViewState.HAZARD_CRITERIA_STANDARD, 
    label: '隐患判定标准', 
    icon: 'AlertTriangle', 
    type: 'iframe', 
    path: 'https://kdocs.cn/l/csvBw09bymX6', 
    hidden: true
  },
  { 
    id: ViewState.ACTION_PLAN_PROGRESS_TABLE, 
    label: '治本攻坚推进表', 
    icon: 'ClipboardList', 
    type: 'iframe', 
    path: 'https://www.kdocs.cn/l/cmagm8QKt8Sz', 
    hidden: true
  },
  { id: ViewState.LEAN_LEARNING, label: '精益学习资料', icon: 'BookOpen', type: 'component' },
  { 
    id: ViewState.LEAN_PROPOSAL, 
    label: '精益提案', 
    icon: 'Send', 
    type: 'link_group',
    subLinks: [
      { 
        label: '精益提案提报', 
        url: 'https://f.wps.cn/g/SHsqFlKK/', 
        openInNewTab: true,
        description: '在线填写并提交您的改善建议，助力工厂降本增效。',
        icon: 'Send',
        color: 'indigo'
      },
      { 
        label: '已提报提案查看', 
        url: 'https://www.kdocs.cn/l/cshW3GzmadPZ?R=L1MvMw==&disableNoviceGuide=', 
        openInNewTab: true,
        description: '查询您已经提交的提案进度及历史记录。',
        icon: 'Search',
        color: 'cyan'
      },
      { 
        label: '精益提案展示', 
        url: 'https://www.kdocs.cn/folder/ctNEL', 
        openInNewTab: true,
        description: '浏览优秀精益提案案例，学习先进经验。',
        icon: 'Presentation',
        color: 'violet'
      },
    ]
  },
  { 
    id: ViewState.MICRO_IMPROVEMENT, 
    label: '精益微改善', 
    icon: 'BarChart3', 
    type: 'link_group',
    subLinks: [
      { 
        label: '现场微改善提报', 
        url: 'https://f.wps.cn/g/40YKGlJV/', 
        openInNewTab: true, 
        description: '每月25日截止。发现身边的小问题，提出改进措施。',
        icon: 'PlusCircle',
        color: 'emerald'
      },
      { 
        label: '已提报微改善查看', 
        url: 'https://www.kdocs.cn/l/ccWZAfWXWgR6?R=L1MvNA==&disableNoviceGuide=', 
        openInNewTab: true,
        description: '查看全厂微改善提报公示及采纳情况。',
        icon: 'ListChecks',
        color: 'blue'
      },
    ]
  },
  { id: ViewState.JOB_OPERATING_PROCEDURES, label: '安全操作规程', icon: 'Wrench', type: 'component' },
  { id: ViewState.JOB_SAFETY_RESPONSIBILITIES, label: '安全生产责任制', icon: 'ShieldCheck', type: 'component' },
  { 
    id: ViewState.PLANT_EMERGENCY_PLAN, 
    label: '应急预案汇总', 
    icon: 'Siren', 
    type: 'link_group', 
    subLinks: [
      {
        label: '应急预案下载',
        url: 'https://www.123pan.com/s/pR9rVv-oNgO3.html',
        openInNewTab: true,
        description: '确立应急管理体系。',
        icon: 'Shield',
        color: 'blue'
      }
    ]
  },
  { id: ViewState.SAFETY_CERT_QUERY, label: '培训合格证查询', icon: 'Search', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/s8BV0CAT' },
  { id: ViewState.RESTRICTED_SPACE_QUERY, label: '有限空间查询', icon: 'Box', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/MJcTiw1a' },
  { id: ViewState.OUTSOURCED_REGISTRATION, label: '外委施工登记', icon: 'ClipboardList', type: 'external_single_tab', path: 'https://f.wps.cn/w/PBXs3qUz/' },
  { id: ViewState.APP_DOWNLOADS, label: '常用下载和安装', icon: 'Download', type: 'component' },
  { id: ViewState.FEEDBACK, label: '意见反馈', icon: 'MessageSquare', type: 'component' },
  { id: ViewState.APP_SHOUAN, label: '首安云下载指引', icon: 'Download', type: 'component', hidden: true },
  { id: ViewState.APP_EXAM_STAR, label: '考试星下载指引', icon: 'Download', type: 'component', hidden: true }
];

export const DOCUMENT_CONTENTS: Record<string, DocumentContent> = {};
