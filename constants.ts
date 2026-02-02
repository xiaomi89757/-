
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
      // Corrected ViewState enum references
      { label: '治本攻坚三年专项整治方案', viewId: ViewState.COMPREHENSIVE_REMEDIATION_PLAN, description: '工作目标与任务清单', icon: 'FileText', color: 'rose' },
      { label: '2023版重大事故隐患判定标准', viewId: ViewState.HAZARD_CRITERIA_STANDARD, description: '工贸企业标准解读', icon: 'AlertTriangle', color: 'orange' },
      { label: '2025年重点任务推进表', viewId: ViewState.ACTION_PLAN_PROGRESS_TABLE, description: '月度任务跟踪', icon: 'ClipboardList', color: 'blue' }
    ]
  },
  // Corrected ViewState enum references
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
  // Corrected ViewState enum references
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
  },
  {
    id: 'l-21',
    title: '三步落地“自工序完结”，实现“一次做对”',
    description: '实现从源头控制质量，告别返工，确保工序质量的稳定性。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cp0DSNXEAGPk',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '21'
  },
  {
    id: 'l-22',
    title: '全国碳市场扩容，进入“多行业管控”元年',
    description: '深度解析环保政策趋势，助力企业在低碳元年平稳过渡。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cpRb5uMY33eO',
    updateDate: '2025-03-16',
    rating: 4,
    shareIndex: '22'
  },
  {
    id: 'l-23',
    title: 'PDCA与SDCA循环，双轨改善威力无穷',
    description: '维持与改善并重，通过标准化与持续改进驱动管理升级。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/ckz3YyGP2wKy',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '23'
  },
  {
    id: 'l-24',
    title: '仓库管理效率低怎么破？',
    description: '优化仓储物流与现场定置，提升物料周转与作业效率。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cvggyrfdPKcS',
    updateDate: '2025-03-16',
    rating: 4,
    shareIndex: '24'
  },
  {
    id: 'l-25',
    title: '运用横纵向思维，突破管理瓶颈',
    description: '多维度视角切换，帮助管理者从系统层面破解复杂难题。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cjPaCmgHBZ1f',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '25'
  },
  {
    id: 'l-26',
    title: '工厂的隐形成本：还有多少在白白流失',
    description: '识别生产中看不见的浪费，深度挖掘降本潜力。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/crUku7CekY1x',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '26'
  },
  {
    id: 'l-27',
    title: '班组长核心能力提升',
    description: '提升基层管理者领导力与现场执行力，打造卓越班组。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cn14SFi6ZjTs',
    updateDate: '2025-03-18',
    rating: 5,
    shareIndex: '27'
  },
  {
    id: 'l-28',
    title: '如何开一场高效的会',
    description: '提升组织沟通效率，杜绝冗长无效会议的实战指南。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cv4lgWxULb0J',
    updateDate: '2025-03-16',
    rating: 4,
    shareIndex: '28'
  },
  {
    id: 'l-29',
    title: '班组执行力的六脉神剑',
    description: '从目标到反馈，全面提升班组核心战斗力的核心心法。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/clbH042GOCCo',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '29'
  },
  {
    id: 'l-30',
    title: '生产管理效率与质量双提升的五个关键',
    description: '精准把握生产节奏，实现产出效能与品质的一致性。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cn0smqhB2DUw',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '30'
  },
  {
    id: 'l-31',
    title: '德鲁克解决问题的处置思维',
    description: '掌握大师级的结构化问题解决方法，从根本上化解管理难题。',
    category: '基础理论',
    type: 'video',
    url: 'https://player.bilibili.com/player.html?isOutside=true&aid=115766196178886&bvid=BV1nyB8BEEGR&cid=34917583337&p=1',
    updateDate: '2025-03-18',
    rating: 5,
    shareIndex: '31'
  },
  {
    id: 'l-32',
    title: '现场6S定置管理PPT',
    description: '标准化的现场定置实操模板，助力标杆车间建设。',
    category: '现场管理',
    type: 'ppt',
    url: 'https://www.kdocs.cn/l/cgxcoztF8WnC',
    updateDate: '2025-03-16',
    rating: 5,
    isHot: true,
    shareIndex: '32'
  },
  {
    id: 'l-33',
    title: '全员都要关注的设备点检事项',
    description: '明确设备员、班组长与操作工在点检中的职责分工。',
    category: '设备保全',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/co1rcqOIi4kW',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '33'
  },
  {
    id: 'l-34',
    title: '打造会说话的指导书（文档）',
    description: '优化SOP作业标准，让员工一看即懂、一学即会。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cj8LQBRzVYrz',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '34'
  },
  {
    id: 'l-35',
    title: '什么样才算执行力强？',
    description: '深度剖析强执行力的核心特质与评估基准。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cgPJPiSB4kZn',
    updateDate: '2025-03-16',
    rating: 4,
    shareIndex: '35'
  },
  {
    id: 'l-36',
    title: '标准化可视化看板化三大管理工具',
    description: '综合运用精益工具，让现场问题迎刃而解。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cubxiQkQGsLE',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '36'
  },
  {
    id: 'l-37',
    title: '浅显易懂的“人机料法环”解析',
    description: '生产要素分析的入门与进阶，系统排查现场隐患。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cfA9xx8YBZ4R',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '37'
  },
  {
    id: 'l-38',
    title: '班组长八条工作戒律',
    description: '提升基层管理者的红线意识，打造守纪高效的班组环境。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cjVkoLu1e2dh',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '38'
  },
  {
    id: 'l-39',
    title: '设备点检6步走，运行稳定又长久',
    description: '建立标准化的点检闭环流程，预防设备突发故障。',
    category: '设备保全',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cbLUZngj9n0n',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '39'
  },
  {
    id: 'l-40',
    title: '车间主任做好7件事，轻松提效',
    description: '优化组织结构与任务分配，释放管理效能，减轻管理压力。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cdXg9tyIAYwR',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '40'
  },
  {
    id: 'l-41',
    title: '日常点检4招，腰斩维修费',
    description: '通过精准的预防性维护，大幅削减企业的设备维修支出。',
    category: '设备保全',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/caN516YVgNRl',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '41'
  },
  {
    id: 'l-42',
    title: '降本增效，企业到底要做什么？',
    description: '回归精益本质，明确高质量发展的核心路径与行动基准。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/crQzDiK79lNk',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '42'
  },
  {
    id: 'l-43',
    title: '死磕这三件小事，改变乱糟糟现场',
    description: '从小处着手，通过简单有效的动作彻底重塑现场秩序。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cnMHnoA6jUl1',
    updateDate: '2025-03-16',
    rating: 4,
    shareIndex: '43'
  },
  {
    id: 'l-44',
    title: '精益生产现场-浪费与改善（培训）',
    description: '核心理念宣贯，教你如何用精益眼光识别现场浪费点。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/codxI40rKBhx',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '44'
  },
  {
    id: 'l-45',
    title: '增加车间组织弹性，解决劳动力失衡',
    description: '应对忙闲不均问题，建立灵活的组织响应机制。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/ch5sDBt3yc9L',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '45'
  },
  {
    id: 'l-46',
    title: '改善精准高效，问题识别方法与实践',
    description: '掌握科学的问题识别技术，让每一次改进都直击痛点。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/catNnQSdX5zp',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '46'
  },
  {
    id: 'l-47',
    title: 'TPM核心知识点详解',
    description: '全员生产保全体系的深度解读，构建零故障的生产基石。',
    category: '设备保全',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cczykJxHG3cS',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '47'
  },
  {
    id: 'l-48',
    title: 'SMED快速换模：不只是快一点',
    description: '缩短非生产时间，大幅提升产线的柔性与响应速度。',
    category: '改善实战',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cc5JgpvvxZsL',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '48'
  },
  {
    id: 'l-49',
    title: '提质增效90%企业都踩过的坑！',
    description: '以史为鉴，通过案例解析避开常见的管理误区。',
    category: '基础理论',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/clEJWOvriqdQ',
    updateDate: '2025-03-16',
    rating: 4,
    shareIndex: '49'
  },
  {
    id: 'l-50',
    title: '制造业现场管理综合要素梳理',
    description: '一消二化三不三现四M五S，系统化的现场管控模型。',
    category: '现场管理',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cmsQjGXIZ1dz',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '50'
  },
  {
    id: 'l-51',
    title: '聚焦八大部位，让设备点检效率翻倍',
    description: '针对核心零部件的精准点检，优化作业负荷与深度。',
    category: '设备保全',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cpNzZcDDEgw8',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '51'
  },
  {
    id: 'l-52',
    title: '设备点检：以“必须”为基，“必要”为尺',
    description: '建立科学、动态的维护基准，平衡保全投入与运行安全。',
    category: '设备保全',
    type: 'pdf',
    url: 'https://www.kdocs.cn/l/cpafCzkoQPVy',
    updateDate: '2025-03-16',
    rating: 5,
    shareIndex: '52'
  },
  {
    id: 'l-53',
    title: '德鲁克管理思维，为什么时间总不够用',
    description: '时间管理专题：如何摆脱琐事缠身，将精力聚焦于核心成果。',
    category: '基础理论',
    type: 'video',
    url: 'https://player.bilibili.com/player.html?isOutside=true&aid=115937525106446&bvid=BV1BUzsBPERL&cid=35540372517&p=1',
    updateDate: '2025-03-18',
    rating: 5,
    shareIndex: '53'
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
