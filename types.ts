
export enum ViewState {
  HOME = 'HOME',
  TEMP_ASSIGNMENT = 'TEMP_ASSIGNMENT',
  IMPORTANT_FILES = 'IMPORTANT_FILES',
  COMPREHENSIVE_REMEDIATION_PLAN = 'COMPRE_PLAN',
  HAZARD_CRITERIA_STANDARD = 'HAZARD_STD',
  ACTION_PLAN_PROGRESS_TABLE = 'PROGRESS_TABLE',
  LEAN_LEARNING = 'LEAN_LEARNING',
  LEAN_PROPOSAL = 'LEAN_PROPOSAL',
  MICRO_IMPROVEMENT = 'MICRO_IMPROVEMENT',
  JOB_OPERATING_PROCEDURES = 'JOB_PROCEDURES',
  JOB_SAFETY_RESPONSIBILITIES = 'JOB_RESP',
  PLANT_EMERGENCY_PLAN = 'EMERGENCY_PLAN',
  SAFETY_CERT_QUERY = 'CERT_QUERY',
  RESTRICTED_SPACE_QUERY = 'SPACE_QUERY',
  OUTSOURCED_REGISTRATION = 'OUTSOURCED_REG',
  APP_DOWNLOADS = 'APP_DOWNLOADS',
  APP_SHOUAN = 'APP_SHOUAN',
  APP_EXAM_STAR = 'APP_EXAM_STAR',
  FEEDBACK = 'FEEDBACK',
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'word' | 'pdf' | 'video' | 'ppt' | 'excel';
  url: string;
  updateDate: string;
  rating: number;
  isNew?: boolean;
  isHot?: boolean;
  shareIndex?: string;
  clickCount?: number;
}

export interface NavLinkItem {
  label: string;
  url?: string;
  viewId?: ViewState;
  openInNewTab?: boolean;
  description?: string;
  icon?: string;
  color?: 'blue' | 'indigo' | 'emerald' | 'orange' | 'rose' | 'violet' | 'cyan' | 'amber' | 'slate';
}

export interface MenuItem {
  id: ViewState;
  label: string;
  icon: string;
  type: 'component' | 'iframe' | 'link_group' | 'external_single_tab' | 'document' | 'header';
  path?: string;
  subLinks?: NavLinkItem[];
  hidden?: boolean;
}

export interface DocumentSection {
  heading?: string;
  paragraphs?: string[];
  listItems?: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
    width?: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  subSections?: DocumentSection[];
}

export interface DocumentContent {
  title: string;
  subtitle?: string;
  image?: {
    src: string;
    alt: string;
  };
  sections: DocumentSection[];
}

export type ProcedureItem = string;

export interface ProcedureRole {
  role: string;
  items: ProcedureItem[];
}

export interface ProcedureCategory {
  name: string;
  roles: ProcedureRole[];
}
