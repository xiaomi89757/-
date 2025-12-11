
import { MenuItem, ViewState, DocumentContent, ProcedureCategory } from './types';

// 侧边栏菜单配置
export const SIDEBAR_MENU_ITEMS: MenuItem[] = [
  { id: ViewState.HOME, label: '系统主页', icon: 'Home', type: 'component' },
  { type: 'header', id: 'group_files', label: '管理制度与文件', icon: 'FolderOpen' },
  { 
    id: ViewState.IMPORTANT_FILES, 
    label: '重要文件', 
    icon: 'FolderOpen', 
    type: 'link_group',
    subLinks: [
      { 
        label: '治本攻坚三年专项整治方案', 
        viewId: ViewState.COMPREHENSIVE_REMEDIATION_PLAN, 
        description: '查看详细工作目标、组织机构及任务清单。',
        icon: 'FileText',
        color: 'rose'
      },
      { 
        label: '2023版重大事故隐患判定标准', 
        viewId: ViewState.HAZARD_CRITERIA_STANDARD, 
        description: '学习炼钢部分重点条款解读。',
        icon: 'AlertTriangle',
        color: 'orange'
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
  { type: 'header', id: 'group_lean', label: '精益管理与改善', icon: 'Send' },
  { id: ViewState.LEAN_LEARNING, label: '精益学习资料', icon: 'BookOpen', type: 'iframe', path: 'https://www.123865.com/s/pR9rVv-lb' },
  { 
    id: ViewState.LEAN_PROPOSAL, 
    label: '精益提案', 
    icon: 'Send', 
    type: 'link_group',
    subLinks: [
      { label: '精益提案提报', url: 'https://f.wps.cn/g/SHsqFlKK/', openInNewTab: true, description: '在线提交改善建议，助力工厂增效。', icon: 'Send', color: 'indigo' },
      { label: '已提报提案查看', url: 'https://www.kdocs.cn/l/cshW3GzmadPZ', openInNewTab: true, description: '查询您的提案进度及历史记录。', icon: 'Search', color: 'cyan' },
      { label: '精益提案展示', url: 'https://www.kdocs.cn/folder/ctNEL', openInNewTab: true, description: '浏览优秀精益提案案例。', icon: 'Presentation', color: 'violet' },
    ]
  },
  { 
    id: ViewState.MICRO_IMPROVEMENT, 
    label: '精益微改善', 
    icon: 'BarChart3', 
    type: 'link_group',
    subLinks: [
      { label: '现场微改善提报', url: 'https://f.wps.cn/g/40YKGlJV/', openInNewTab: true, description: '发现身边小问题，提出改进措施。', icon: 'PlusCircle', color: 'emerald' },
      { label: '已提报微改善查看', url: 'https://www.kdocs.cn/l/cd3K7qIlQZqx?R=L1MvMg==', openInNewTab: true, description: '查看全厂微改善提报公示。', icon: 'ListChecks', color: 'blue' },
    ]
  },
  { type: 'header', id: 'group_safety', label: '安全生产与规范', icon: 'ShieldCheck' },
  { id: ViewState.JOB_OPERATING_PROCEDURES, label: '安全操作规程', icon: 'Wrench', type: 'component' },
  { id: ViewState.JOB_SAFETY_RESPONSIBILITIES, label: '安全生产责任制', icon: 'ShieldCheck', type: 'component' },
  { 
    id: ViewState.PLANT_EMERGENCY_PLAN, 
    label: '应急预案汇总', 
    icon: 'Siren', 
    type: 'link_group', 
    subLinks: [
      { label: '综合应急预案', url: 'https://www.123pan.com/s/pR9rVv-oNgO3.html', openInNewTab: true, description: '应对突发事件的总体原则、机构及机制。', icon: 'Shield', color: 'blue' },
      { label: '专项应急预案', url: 'https://www.123pan.com/s/pR9rVv-oNgO3.html', openInNewTab: true, description: '火灾、煤气泄漏等特定事件应对程序。', icon: 'Flame', color: 'rose' },
      { label: '现场处置方案', url: 'https://www.123pan.com/s/pR9rVv-oNgO3.html', openInNewTab: true, description: '具体场所装置的第一时间响应。', icon: 'Zap', color: 'emerald' },
    ]
  },
  { type: 'header', id: 'group_service', label: '综合服务与下载', icon: 'Download' },
  { id: ViewState.SAFETY_CERT_QUERY, label: '培训合格证查询', icon: 'Search', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/s8BV0CAT' },
  { id: ViewState.RESTRICTED_SPACE_QUERY, label: '有限空间查询', icon: 'Box', type: 'iframe', path: 'https://web.wps.cn/etapps/query/q/MJcTiw1a' },
  { id: ViewState.OUTSOURCED_REGISTRATION, label: '外委施工登记', icon: 'ClipboardList', type: 'external_single_tab', path: 'https://f.wps.cn/w/PBXs3qUz/' },
  { id: ViewState.APP_DOWNLOADS, label: '常用下载和安装', icon: 'Download', type: 'component' }
];

export const DOCUMENT_CONTENTS: Record<string, DocumentContent> = {};

// --- 安全操作规程 (完整修复) ---
export const PROCEDURES_DATA: ProcedureCategory[] = [
  {
    name: "转炉工段",
    roles: [
      { role: "炼钢工", items: [
        "开炉前，必须检查炉衬是否有掉砖、断砖或因漏水炉衬受潮等现象。",
        "检查倾动系统、炉下车辆、氧枪升降、散装料及合金料系统是否正常。",
        "确认氧枪水流量压力正常后，方可兑铁生产。",
        "处理氧枪粘钢粘渣作业时，不得兑铁加废钢。",
        "倒炉时炼钢工应到炉前指挥，发现火焰大要立即摇起转炉，防止钢渣涌出。",
        "出钢前与炉坑工确认周边无人，严禁使用潮湿脱氧剂。"
      ]},
      { role: "一助手", items: [
        "测量液面必须两人以上操作，氧枪头进入枪口后，人离开后再降枪测量。",
        "倾动机械、电器故障时不得摇炉。炉下有人工作时，严禁摇炉。",
        "处理加料管堆料需两人配合作业，一人监护。",
        "处理氧枪口粘渣时，确保炉体稳定，设置专人看守。"
      ]},
      { role: "炉前工", items: [
        "取样时观察炉渣液面是否平稳，防止喷溅伤人。",
        "用氧气烧出钢口时，手不得握在接口处，手套严禁有油污。",
        "清理挡火门轨道积渣须两人作业，炉体处于垂直锁定状态。"
      ]},
      { role: "汽冷工", items: [
        "汽化冷却装置运行必须执行国家相关安全技术监察规程。",
        "运行前检查受压容器安全附件是否灵敏可靠。",
        "发现汽包严重缺水等异常，应立即通知停止吹炼。"
      ]}
    ]
  },
  {
    name: "连铸工段",
    roles: [
      { role: "拉钢工", items: ["穿戴好耐高温防护用品。", "结晶器水报警或漏水严重时必须立即停浇。", "浇钢过程中严禁进入冷室。"]},
      { role: "大包浇钢工", items: ["坐包、吊包必须由专人指挥天车。", "装拆液压缸时严防高温钢水及热气烫伤。"]},
      { role: "精整工", items: ["火焰切割作业时，确保气带无漏气，周围无油污易燃物。", "吊运钢坯时严禁人员从吊物下经过。"]}
    ]
  },
  {
    name: "天车工段",
    roles: [
      { role: "天车工", items: ["接班详细检查钢丝绳、制动、限位。", "听从地面专人指挥，起车前先鸣铃。", "严禁超载吊运，严禁在吹炼转炉上方停车。"]}
    ]
  },
  {
    name: "辅助工段",
    roles: [
      { role: "斜板工", items: ["监控泥浆浓度，定时定量排泥，防止泵体堵塞。", "清理斜板积垢须佩戴防护面罩。"]},
      { role: "风机房", items: ["开停风机必须双人监护，确认油泵压力正常。", "风机停转20分钟后方可停止油泵。"]},
      { role: "煤气柜", items: ["进入区域必须佩戴便携式CO报警器，严禁携带火种。", "发现泄漏立即启动应急预案。"]}
    ]
  },
  {
    name: "加工工段",
    roles: [
      { role: "储灰站", items: ["打灰时连接胶管必须牢固，开启脉冲除尘。", "严禁储灰超压，定期清掏滤袋。"]},
      { role: "破碎工", items: ["启动设备前确认腔内无异物，周围无人员。", "作业中戴好防尘口罩及耳塞。"]}
    ]
  },
  {
    name: "维修工段", // 专业独立
    roles: [
      { role: "维修钳工", items: [
        "检修前办理作业票，严格执行能源隔离挂牌上锁。",
        "高空作业佩戴安全带，下方设置警戒区域。",
        "使用电动工具必须配备漏电保护器。"
      ]},
      { role: "焊工", items: [
        "作业前检查割炬气路，气瓶保持5米以上安全间距。",
        "有限空间内焊割必须进行氧含量检测，并持续通风。",
        "清理焊渣必须佩戴防护眼镜。"
      ]},
      { role: "电仪工", items: [
        "停送电实行双人核对制，验电后方可触碰线路。",
        "带电作业必须两人操作，使用合格绝缘工具。",
        "定期检查仪表防爆密封情况。"
      ]}
    ]
  }
];

// --- 安全生产责任制 (完整修复) ---
export const SAFETY_RESPONSIBILITIES_DATA: ProcedureCategory[] = [
  {
    name: "综合办公室",
    roles: [
      { role: "分厂厂长", items: ["第一责任人，对分厂安全生产负全面责任。", "建立健全全员安全生产责任制，落实考核制度。", "保障安全投入的有效实施。"]},
      { role: "管理科长", items: ["协助厂长开展安全管理工作，对科室职责内安全负责。", "组织制定分厂级规章制度，督促隐患排查。"]},
      { role: "安全干事", items: ["日常监督检查，发现违章有权责令整改。", "负责安全教育培训记录管理。"]}
    ]
  },
  {
    name: "转炉工段",
    roles: [
      { role: "转炉段长", items: ["工段安全第一责任人，对工段职工安全负责。", "落实岗位履职检查，组织班组安全活动。"]},
      { role: "转炉班长", items: ["现场违章纠偏，执行生产与安全同步。", "负责班前会安全提醒。"]},
      { role: "操作岗位人员", items: ["熟知岗位风险，遵章守纪，拒绝违章指挥。", "正确穿戴劳保，发现事故隐患立即上报。"]}
    ]
  },
  {
    name: "连铸工段",
    roles: [
      { role: "连铸段长", items: ["组织本工段隐患自查自改。", "对结晶器、大包等关键设施安全运行负责。"]},
      { role: "连铸班长", items: ["监督现场文明施工及标准化作业落实。", "参与事故应急预想及演练。"]}
    ]
  },
  {
    name: "维修工段",
    roles: [
      { role: "维修段长", items: ["负责全厂设备检修作业的安全策划与监控。", "组织落实能源隔离(LOTO)制度考核。"]},
      { role: "机械技术员", items: ["编制特种检修方案并落实安全技术交底。", "对动火、高处作业进行现场确认。"]},
      { role: "钳工/焊工", items: ["执行检修标准化作业，严禁野蛮操作。", "作业后做到工完、料净、场地清。"]}
    ]
  },
  {
    name: "天车工段",
    roles: [
      { role: "天车段长", items: ["确保特种设备定检率100%。", "对天车工违章作业负管理责任。"]},
      { role: "天车班长", items: ["巡查吊具、索具完好情况，严禁使用不合格辅具。", "负责班组安全教育。"]}
    ]
  },
  {
    name: "辅助工段",
    roles: [
      { role: "辅助段长", items: ["负责二次除尘、水泵房等辅机系统安全。", "对有限空间作业安全负直接责任。"]},
      { role: "风机/水泵操作工", items: ["严格执行操作票制度，如实填写运行记录。", "保障设备报警联锁处于投用状态。"]}
    ]
  }
];
