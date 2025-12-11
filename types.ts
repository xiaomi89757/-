export enum ViewState {
  HOME = 'HOME', // 主页
  IMPORTANT_FILES = 'IMPORTANT_FILES', // 重要文件 (菜单组)
  COMPREHENSIVE_REMEDIATION_PLAN = 'COMPREHENSIVE_REMEDIATION_PLAN', // 公司治本攻坚三年专项整治方案
  HAZARD_CRITERIA_STANDARD = 'HAZARD_CRITERIA_STANDARD', // 2023版重大隐患判定标准（炼钢部分）
  LEAN_LEARNING = 'LEAN_LEARNING', // 精益学习交流平台资料
  LEAN_PROPOSAL = 'LEAN_PROPOSAL', // 精益提案 (包括子菜单)
  MICRO_IMPROVEMENT = 'MICRO_IMPROVEMENT', // 微改善 (包括子菜单)
  JOB_OPERATING_PROCEDURES = 'JOB_OPERATING_PROCEDURES', // 各岗位操作规程
  JOB_SAFETY_RESPONSIBILITIES = 'JOB_SAFETY_RESPONSIBILITIES', // 各岗位安全职责（责任制）
  PLANT_EMERGENCY_PLAN = 'PLANT_EMERGENCY_PLAN', // 第二炼钢厂专项应急预案
  SAFETY_CERT_QUERY = 'SAFETY_CERT_QUERY', // 安全培训合格证查询
  RESTRICTED_SPACE_QUERY = 'RESTRICTED_SPACE_QUERY', // 二炼钢有限空间查询
  OUTSOURCED_REGISTRATION = 'OUTSOURCED_REGISTRATION', // 外委施工入厂登记
  APP_DOWNLOADS = 'APP_DOWNLOADS', // App下载安装 (着陆页)
  APP_SHOUAN = 'APP_SHOUAN', // 首安云下载 (内嵌指南页)
  APP_EXAM_STAR = 'APP_EXAM_STAR', // 考试星下载 (内嵌指南页)
}

export interface NavLinkItem {
  label: string;
  url?: string; 
  viewId?: ViewState; 
  openInNewTab?: boolean;
  description?: string;
  icon?: string; 
  color?: 'blue' | 'indigo' | 'emerald' | 'orange' | 'rose' | 'violet' | 'cyan' | 'amber'; 
}

export interface MenuItem {
  id: ViewState | string; // Allow string for headers
  label: string;
  icon: string; 
  type: 'component' | 'iframe' | 'link_group' | 'external_single_tab' | 'header';
  path?: string; 
  subLinks?: NavLinkItem[]; 
  hidden?: boolean; 
}

export interface ProcedureItem {
  role: string;
  items: string[];
}

export interface ProcedureCategory {
  name: string;
  roles: ProcedureItem[];
}
