import React, { useState } from 'react';
import {
  Loader2, Sparkles, Trophy, Lightbulb, Star,
  ArrowRight, Medal, Award, Flame, Maximize2, BookOpen, Heart,
  Quote, X, Eye, Calendar, User, FileText, PenTool, CheckCircle, HelpCircle, ListOrdered, MessageSquare, FileSpreadsheet
} from 'lucide-react';
import { SafariBridge } from './SafariBridge';

interface ThoughtArticle {
  id: number;
  title: string;
  author: string;
  department: string;
  excerpt: string;
  content: string;
  color: string;
  icon: string;
  date: string;
}

const CARD_THEMES = [
  { from: 'from-rose-500', to: 'to-red-600', shadow: 'shadow-rose-200', icon: 'text-rose-200' },
  { from: 'from-blue-500', to: 'to-indigo-600', shadow: 'shadow-blue-200', icon: 'text-blue-200' },
  { from: 'from-amber-500', to: 'to-orange-600', shadow: 'shadow-amber-200', icon: 'text-amber-200' },
  { from: 'from-emerald-500', to: 'to-teal-600', shadow: 'shadow-emerald-200', icon: 'text-emerald-200' },
  { from: 'from-violet-500', to: 'to-purple-600', shadow: 'shadow-violet-200', icon: 'text-violet-200' },
  { from: 'from-cyan-500', to: 'to-blue-600', shadow: 'shadow-cyan-200', icon: 'text-cyan-200' },
];

const MOCK_THOUGHTS: ThoughtArticle[] = [
  {
    id: 1,
    title: '载誉扬帆启新程 笃行精益再攀峰',
    author: '侯月明',
    department: '辅助工段',
    excerpt: '以榜样领航，以荣誉赋能。回首五载精益求索之路，万千汗水沉淀峥嵘过往；眺望崭新发展征途，我们初心如磐、信心万丈！',
    content: `公司精益五周年总结表彰大会虽已落幕，但本次对精益先进榜样的重磅嘉奖热度却在持续升温，在厂区内外引发广泛热议，激荡起强劲奋进浪潮。此次出人意料的高额奖金，既是对先进典型五年来深耕精益、矢志攻坚的崇高礼赞，更是公司布局人才链条、筑牢精益发展根基的战略之举。「以榜样领航，以荣誉赋能」！全员创新突破、勇担使命的奋进激情正在被持续点燃。回首五载精益求索之路，万千汗水沉淀峥嵘过往，一路耕耘收获熠熠荣光；眺望崭新发展征途，我们初心如磐、信心万丈！

[PULLQUOTE]
「以榜样领航，以荣誉赋能」
[/PULLQUOTE]

此次盛会，不仅是致敬耕耘、表彰先进的嘉奖大会，更是擘画蓝图、锚定航向的战略规划与目标部署大会。大会现场的学习让我对精益松钢未来五年发展战略有了初步认知，而真正学深悟透，是在后续研学团建会议之中。会上，李总质朴真切、如叙家常的分享，推心置腹地将企业面临的挑战与机遇，娓娓道来、引人深思；搭配张总对「一二二三四」战略部署条分缕析的细致解读，让我透彻领悟讲话深层要义，找准了奋进坐标、明晰了肩上重任。

[DIVIDER]

回首五年征程，个人成长与企业发展同频共振，耕耘之下收获颇丰。但成绩属于过往，展望全新征途，作为先进个人代表，我更要以全新姿态迎接新一轮挑战。过去五年，我们依靠精益变革站稳脚跟、谋求生存；未来五年，我们必须依托创新突破开拓格局、蓄力发展。而李总提出的「一二二三四」发展战略纲领，为全体职工绘就清晰的行动路线。作为生产一线的一员，我们绝不能停留在过往改善成果之上，要主动走出舒适区，把会议精神转化为扎根岗位的实际行动。

[HIGHLIGHT]
精益从来不是少数人的专项工作，而是全体松钢人共同耕耘的事业，是每一名职工的必修课。舞台不分大小，潜力无处不在，人人皆可创新，处处皆可改善。
[/HIGHLIGHT]

榜样是前行的标杆，战略是远航的罗盘。本次大会受到表彰的先进典型遍布各个工段、各个班组，他们没有惊天动地的壮举，依靠的正是长期扎根一线、坚守精益理念，在平凡岗位上持续精进、久久为功。他们的成长历程生动印证，精益从来不是少数人的专项工作，而是全体松钢人共同耕耘的事业，是每一名职工的必修课。舞台不分大小，潜力无处不在，人人皆可创新，处处皆可改善。作为获评先进的一员，我将以榜样为镜、对标看齐，自我加压；同时，充分发挥先锋模范作用，带动并帮扶身边同事积极投身精益改善实践。

[DIVIDER]

道阻且长，行则将至；行而不辍，未来可期。五年精益深耕，我们完成浴火重生；崭新五年画卷，等待我们执笔绘就。站在新的发展起点上，让我们紧跟公司战略部署，持续秉持精益之心、勇闯创新之路，脚踏实地、笃行实干，持续夯实绿色低碳、智能制造发展根基，全力向着人均劳效、成本管控、产品质量最优目标奋勇冲刺，携手推动松钢在高质量发展道路上行稳致远，共同奔赴更加壮阔的发展征程。`,
    color: 'rose',
    icon: 'Star',
    date: '2026-07-20',
  },
  {
    id: 2,
    title: '敢破陈规 焊花向新',
    author: '郎伟超',
    department: '维修工段钳焊班',
    excerpt: '「不解放思想，是我们最大的弱项。」拿起焊枪前先问自己一句：这活儿，还有没有更好的干法？',
    content: `我是维修工段钳焊班长郎伟超。说句心里话，这次反复读李总的讲话，越读越觉得脸上发烫。李总讲「不解放思想，是我们最大的弱项」，这句话像专门说给我听的。

[PULLQUOTE]
「不解放思想，是我们最大的弱项。」
[/PULLQUOTE]

干钳焊这些年，我有个毛病——太把自己那点老经验当回事。天天守着这些设备，对哪台爱出毛病、哪根管该重点照看，心里渐渐攒下了一套老印象。可正是这份「老印象」，让我慢慢生了惰性：遇上问题，凭着习惯就上手，焊完补完，凑合能用就过去了。日子一长，不光自己陷在老法子里，连班组的兄弟也跟着我，习惯了「班长怎么干、咱们照着来」。现在回头看，这不是本事，是把大伙儿都带进了窄胡同。

[HIGHLIGHT]
李总讲要解放思想，从「跟跑」到「领跑」。人家往前走，我还停在自己那点经验里打转，差的不是手上那点功夫，是压根没想着要抬头看路。
[/HIGHLIGHT]

[DIVIDER]

有一回，一台泵的轴封老是漏，我按老习惯拆了焊、焊了漏，返修了好几趟。最后还是班里一个小徒弟提醒我，说能不能在薄弱处提前加个简易加固、按周期排查。一试，真省了反复返修的功夫。这事儿不大，却让我难堪：我以为自己门儿清，其实最该学的，就在身边。老办法能交差，不代表是好办法；我惯于凑合，往往只是因为没去想更好的路子。

带队伍这一块，我更得检讨。过去我总揽着干，自己上手快、心安，却耽误了兄弟们练本事、长见识。

[PULLQUOTE]
班长不是最能干的那一个，是得带着大伙一起换脑筋的那一个。
[/PULLQUOTE]

可我连自己的脑筋都没换利索，又怎么带别人？近一段时间，我试着在班前会上少说「按老规矩」，多问一句「这活儿还有没有更省劲的干法」；年轻人提的土办法，哪怕粗糙，也先听、先试。做得还很不够，常常一忙起来又回到老样子，得时时提醒自己。

五周年是个节点，对我更是个照镜子的机会。我底子薄、脑子旧，唯有多跟年轻人学、多和大家伙一起想，才不至于拖了后腿。解放思想不是喊口号，是拿起焊枪前先问自己一句：这活儿，还有没有更好的干法？路还长，我得踏踏实实从头学起。`,
    color: 'violet',
    icon: 'BookOpen',
    date: '2026-07-20',
  },
  {
    id: 3,
    title: '钢流淬实干 躬身启新程',
    author: '刘子华',
    department: '连铸车间',
    excerpt: '「践行实干作风，把战略规划转化为具体工作、按期落地。」连铸平台上没有捷径，一炉一炉浇、一桩一桩钉，把该落的落到位，就是最实在的落实。',
    content: `我是连铸机长刘子华，每天守在浇铸平台，和滚烫的钢流打交道。浇铸这活儿，容不得花架子——拉速稳不稳、衔接顺不顺、铸坯质量好不好，全在手上那点真功夫，也在全班拧成一股绳的实劲。李总讲话里寄语三条，前两条讲心态、讲精神，第三条我有多的感悟：「践行实干作风，把战略规划转化为具体工作、按期落地。」这话，说给机长听，正合适。

[PULLQUOTE]
「践行实干作风，把战略规划转化为具体工作、按期落地。」
[/PULLQUOTE]

实干，先得自己沉到现场。平稳是连铸机的第一要务，拉速一波动，后面整条线都跟着晃。早些年我信经验，哪段该快该慢，脑子里有本老账，自己冲上去调，确实顺。可经验管得了自己，管不了一班人。李总讲「一二二三四」战略，落到连铸平台，不是喊口号，是把每一炉钢的浇铸节奏、把每一次换开浇拉下的标准动作，钉成全班都能使的规矩。战略再好，落不到每一道钢流上，就是纸上谈兵。

[DIVIDER]

这些年和班组的兄弟鼓捣过些小改善，没多高明，都是盯着手边的将就：二冷室里淤积的冷钢，一锹一锹清出来，通道顺了、隐患少了；用废了的小割把，合二为一修整再用，省下的是实打实的材料；大包机械手头部改成可拆分的结构，换个零件不用整台趴窝，两个人、个把钟头就利索；连主控室那把坐得掉皮、支架变形的旧座椅，也是用废旧钢筋焊巴焊巴又撑了好久。几把废旧引流枪拆开拼凑，又能凑出一把能用的。这些事上不了台面，可连铸平台上的顺当，就是这一桩一桩钉出来的。

[HIGHLIGHT]
实干，也得带着大伙一起干。机长不是「最能干的那一个」，是「带着大伙把活干实的那一个」。改善提案不能只靠一个人报，得让每个人都敢提、提了有人跟。
[/HIGHLIGHT]

往后我想在班里试着搞个精益积分，谁的点子被采纳、谁的活干得规范，都记下来、挂上号，慢慢把「人人都操心」的氛围带起来。这一步我还在学，班组里年轻人的点子比我活，得学着把他们的劲头拢起来。

李总说「没有等出来的辉煌，只有干出来的精彩」。连铸平台上没有捷径，一炉一炉浇、一桩一桩钉，把该落的落到位，就是最实在的落实。五周年是新起点，这股实干的劲，我带着全班，接着干下去。`,
    color: 'amber',
    icon: 'Flame',
    date: '2026-07-24',
  },
  {
    id: 4,
    title: '以斗争之姿 守空中坦途',
    author: '李美丽',
    department: '天车班',
    excerpt: '「发扬斗争精神」，天车高空作业，每一天都是在和「万一」较劲。守住这一钩一吊的安全，一天都不含糊。',
    content: `我驾驶的那台天车，在成品跨来回穿梭，驾驶室不足两平方米，悬在十几米的高空。脚下，是刚下线还泛着暗红、扑面而来热浪的炽热钢坯；身旁，是码放整齐、等待发运的成品钢坯。吊钩起落间几十吨的钢坯稳稳转运，手势、灯光、对讲机里的指令得严丝合缝，眼睛得像卡尺，差半米就是大事。一个班下来，起吊、走行、落钩成百上千次，手指磨出了茧，眼神不敢有半分松懈。外人看天车工是「空中飞人」，挺神气；只有干这行的知道，这方寸之地，每一天都是在和「万一」较劲。

[PULLQUOTE]
「发扬斗争精神，直面困难、不畏惧变革。」
[/PULLQUOTE]

起初我觉得，斗争是领导干部攻坚突围的大词，离我一个天车工太远。可静下心想想，这些年干的活儿，哪一桩不是在「斗」？

[HIGHLIGHT]
斗的是隐患。天车高空作业，一个小疏忽就是大事。安全这事儿不能靠侥幸，得跟它死磕。隐患不会自己消失，你不去斗它，它就在那儿等着。
[/HIGHLIGHT]

这几年我牵头做的几桩改造，桩桩都盯着「万一」较真：21号车旋转小车减速机吊装孔加防脱罩，防的是螺栓松脱坠落；20号车电缆箱高位移位，消的是气焊作业磨破电缆的隐患；15号车主钩卷筒加装防坠落防护；24号车减速机端盖密封优化——没一样惊天动地，都是把「凑合用」改成「必须牢」。

[DIVIDER]

斗的还有自己。李总讲「不畏惧变革」，如今天车在更新，智能系统、预测性维护一步步进来。我干了这么多年，没理由躺在老经验上。新规程、新逻辑，照学；年轻人上手快，我跟着他们一起琢磨数字化。这「斗」，也得斗过自己的守旧和松懈。每天开工前那一遍确认、每一次起吊前那一秒停顿，盯的不是设备，是心里那点「差不多就行」的念头。我常跟新来的姐妹说，干这行靠的不是手快，是把每一个动作都钉成不出错的习惯。

两平方米的驾驶室装不下豪言壮语。我就认一个理：我吊的每一钩稳了，底下兄弟干活就踏实。李总说的斗争精神，落到我这儿，就是守住这一钩一吊的安全，一天都不含糊。五周年是新起点，这股劲儿，我接着斗下去。`,
    color: 'blue',
    icon: 'Heart',
    date: '2026-07-23',
  },
  {
    id: 5,
    title: '炉火常温 初心如炽',
    author: '王志伟',
    department: '炼钢车间',
    excerpt: '「精益的激情不能松、不能降温。」炉火常温，初心如炽——每一天、每一炉，都把认真劲儿焐在心里，不凉、不松、不将就。',
    content: `我是炼钢工王志伟。炼钢这活儿，外人看是火光冲天、热闹得很，内行知道，差之毫厘就是废钢一炉。日复一日对着高温，倒班、盯炉、调温，同样的动作不知道重复了多少遍。三伏天炉前像蒸笼，汗水顺着脊梁往下淌；数九天夜里凉气往骨头里钻，可炉子不歇，人也得钉在岗位上。干到这个年岁，最怕的不是累，是心里那股劲儿不知不觉松了。

[PULLQUOTE]
「精益的激情不能松、不能降温。」
[/PULLQUOTE]

李总讲话里这一句，让我心里一热。干我们这行的，最容易犯的毛病不是不会干，是干久了「疲」了——同样的炉子、同样的流程，闭着眼都熟，手顺了，心就容易松。可炉前的活儿，恰恰是心一松，火候就飘；一炉废钢出去，前面兄弟们多少道工序、多少趟汗水就白忙活。激情这两个字，落在炉前，不是喊出来的，是每一炉都咬着牙盯出来的。

[HIGHLIGHT]
激情不降温，先是把自己这炉守住。每一炉钢，从配料、拉碳到出钢，哪个环节走神都不行。炉前没有「差不多」，只有「对」和「不对」。李总讲「质量是企业的生命」，落到咱手里，就是不让一炉含糊的钢从自己班上出去。
[/HIGHLIGHT]

[DIVIDER]

激情也不是蛮干，是肯在琐碎处下功夫。同样的工艺，今天和昨天能不能更稳定？同样的参数，能不能少一点波动？这些事小，可天天咬着，就是精益。遇到炉况不顺，最容易烦躁，越烦躁越容易乱阵脚。这些年我慢慢学着，先把性子稳下来，再去找症结——这其实是激情另一面的样子：不是猛冲，是长年不松劲，是炉况再颠，自己先不能颠。

带年轻人，我也是这么要求的。新来的兄弟图快，操作时容易抢节奏，我总劝他们，炉前这活儿，快不如稳，稳才能长久。能平凡的事常年干好，比一时冲劲儿更难得；一时热血谁都有，难的是年年月月、一班接一班，火候都不走样。

今后，不仅要守着这炉火，还要把那股热乎劲留住。炉火常温，初心如炽——不是要大干一场的豪言，是每一天、每一炉，都把那点认真劲儿焐在心里，不凉、不松、不将就。`,
    color: 'orange',
    icon: 'Flame',
    date: '2026-07-22',
  },
  {
    id: 6,
    title: '点渣成金 绿铸担当',
    author: '翟建兵',
    department: '钢选班',
    excerpt: '绿色低碳不是挂在墙上的词，就在每一撮钢渣、每一块废钢里。把分拣做细、把扬尘看住、把该回收的都收回来。',
    content: `我干的活，说白了就是跟废钢、钢渣、除尘灰打交道。外人路过钢选现场，多半嫌脏嫌吵；可在我眼里，那些别人脚下的「废料」，是还没归位的资源。李总讲话里讲「发展循环经济，把废弃物转化为利润增长点」「推进绿色低碳转型」，我反反复复读了好几遍——这不就是咱天天脚下踩着的活计吗？可读得越细，心里越虚：干是干了不少，想得还太浅。

[PULLQUOTE]
「发展循环经济，把废弃物转化为利润增长点」「推进绿色低碳转型」
[/PULLQUOTE]

绿色不是挂在墙上的词，就在我手里的每一撮钢渣、每一块废钢里。钢渣从热闷、筛分、磁选到归类，哪一步分得不细，含铁的东西就跟着渣一起进了渣场，那等于真金白银往外扔。这些年班组的兄弟跟着我，把能拣回来的物料一克一克往回抠：废旧耐磨齿板、滑板改制了吊挂挡板，把溜槽放料的料位控得匀了，皮带跑料、料位忽高忽低的老毛病顺了；现场裸露的物料及时苫盖，风一吹扬尘的隐患也压下去了。

[HIGHLIGHT]
李总把绿色低碳列为「两个突破」的头一个，不是让咱少洒点水、少扬点尘就交差，是要在每一道分拣、每一次归类里，把「变废为宝」做成习惯。
[/HIGHLIGHT]

[DIVIDER]

我常跟班组的兄弟念叨，咱这岗位不产生钢，却是全厂最该讲「循环」的地方。这中间，光靠老师傅的眼力远远不够。前阵子我牵头做的几桩改善，桩桩都盯着「别浪费」：观察孔焊块铁板挡住渣料外溅，减速机、电机表面的油污灰尘清到位，网架上挂的废彩钢瓦清下来防伤人——没一样惊天动地，可桩桩连着安全和环保。说到底，分类的标准得立起来、流程得捋顺，让新来的小伙子照着做也能出活，这活儿才算干到了位。

也得说实话，我自己理论底子薄，对精益管理的认识不算系统，带着大伙一起参与、一起琢磨的劲头还差着火候。年轻人手机一划，新法子比我想得快，这方面我得跟他们学。

干这行二十来年，越干越认一个理：绿色低碳不是别的车间的事，就是咱钢选班脚下的实事。五周年是新起点，往后我不图干出多大响动，就想带着班组把分拣做细、把扬尘看住、把该回收的都收回来。点点滴滴攒起来，就是咱为松钢绿色发展出的一份力。`,
    color: 'emerald',
    icon: 'Lightbulb',
    date: '2026-07-21',
  },
];

const QUESTION_BANKS = [
  {
    id: 1,
    title: '五周年题库01-单选1',
    tag: '单选题',
    icon: 'CheckCircle',
    count: '30道题',
    url: 'https://f.wps.cn/g/GVLAHdXW/',
    colors: { from: '#3b82f6', to: '#6366f1', glow: '#93c5fd' },
  },
  {
    id: 2,
    title: '五周年题库02-单选2',
    tag: '单选题',
    icon: 'CheckCircle',
    count: '30道题',
    url: 'https://f.wps.cn/g/szl2IF2z/',
    colors: { from: '#3b82f6', to: '#6366f1', glow: '#93c5fd' },
  },
  {
    id: 3,
    title: '五周年题库03-判断1',
    tag: '判断题',
    icon: 'HelpCircle',
    count: '30道题',
    url: 'https://f.wps.cn/g/9528th1w/',
    colors: { from: '#f59e0b', to: '#f97316', glow: '#fcd34d' },
  },
  {
    id: 4,
    title: '五周年题库04-判断2',
    tag: '判断题',
    icon: 'HelpCircle',
    count: '30道题',
    url: 'https://f.wps.cn/g/HiGmQAfc/',
    colors: { from: '#f59e0b', to: '#f97316', glow: '#fcd34d' },
  },
  {
    id: 5,
    title: '五周年题库05-多选1',
    tag: '多选题',
    icon: 'ListOrdered',
    count: '30道题',
    url: 'https://f.wps.cn/g/3tE23JTE/',
    colors: { from: '#8b5cf6', to: '#a855f7', glow: '#c4b5fd' },
  },
  {
    id: 6,
    title: '五周年题库06-多选2',
    tag: '多选题',
    icon: 'ListOrdered',
    count: '30道题',
    url: 'https://f.wps.cn/g/tZQLPWEV/',
    colors: { from: '#8b5cf6', to: '#a855f7', glow: '#c4b5fd' },
  },
  {
    id: 7,
    title: '五周年题库07-填空1',
    tag: '填空题',
    icon: 'PenTool',
    count: '30道题',
    url: 'https://f.wps.cn/g/yMzpIYbi/',
    colors: { from: '#10b981', to: '#14b8a6', glow: '#6ee7b7' },
  },
  {
    id: 8,
    title: '五周年题库08-填空2',
    tag: '填空题',
    icon: 'PenTool',
    count: '30道题',
    url: 'https://f.wps.cn/g/8eWKuTWA/',
    colors: { from: '#10b981', to: '#14b8a6', glow: '#6ee7b7' },
  },
  {
    id: 9,
    title: '五周年题库09-简答1',
    tag: '简答题',
    icon: 'MessageSquare',
    count: '13道题',
    url: 'https://f.wps.cn/g/MQzBKCmv/',
    colors: { from: '#f43f5e', to: '#e11d48', glow: '#fca5a5' },
  },
  {
    id: 10,
    title: '五周年题库10-简答2',
    tag: '简答题',
    icon: 'MessageSquare',
    count: '12道题',
    url: 'https://f.wps.cn/g/n7nSXotI/',
    colors: { from: '#f43f5e', to: '#e11d48', glow: '#fca5a5' },
  },
  {
    id: 11,
    title: '五周年题库11-论述1',
    tag: '论述题',
    icon: 'FileSpreadsheet',
    count: '12道题',
    url: 'https://f.wps.cn/g/9jMr9ejG/',
    colors: { from: '#06b6d4', to: '#0ea5e9', glow: '#7dd3fc' },
  },
];

export const TempAssignmentPage: React.FC = () => {
  const [isIframeLoading, setIsIframeLoading] = useState(true);
  const [selectedThought, setSelectedThought] = useState<ThoughtArticle | null>(null);

  // ========================================
  // 数据大屏看板
  // ========================================
  const examDashboardUrl = 'https://www.kdocs.cn/l/cvd8W8iLXb7e?R=L1MvMw==&disableNoviceGuide=';

  // ========================================
  // 按钮跳转链接
  // ========================================
  const examFormUrl = 'https://f.wps.cn/g/hOwJ5ZdV/';
  const suggestionUrl = 'https://f.wps.cn/g/JePk6lX5/';

  return (
    <div className="h-full flex flex-col bg-gradient-to-b from-slate-50 via-red-50/30 to-slate-50 relative animate-fade-in font-sans">

      {/* ========== 顶部标题栏 · 红金庆典风格 ========== */}
      <div className="relative sticky top-0 z-30 bg-gradient-to-r from-red-700 via-red-600 to-orange-700 border-b border-red-400/20 px-4 py-5 md:px-8 shadow-[0_4px_30px_rgba(185,28,28,0.3)]">
        {/* 装饰光晕 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-orange-400/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 bg-yellow-300/5 rounded-full blur-3xl"></div>
        </div>

        {/* 金色星尘装饰 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-[15%] w-1 h-1 bg-yellow-300/60 rounded-full animate-pulse" style={{ animationDuration: '2.4s' }}></div>
          <div className="absolute top-3 right-[20%] w-1.5 h-1.5 bg-yellow-200/40 rounded-full animate-pulse" style={{ animationDuration: '3.2s' }}></div>
          <div className="absolute bottom-2 left-[40%] w-1 h-1 bg-orange-300/50 rounded-full animate-pulse" style={{ animationDuration: '1.8s' }}></div>
          <div className="absolute top-1/2 right-[10%] w-1 h-1 bg-yellow-200/30 rounded-full animate-pulse" style={{ animationDuration: '2.8s' }}></div>
        </div>

        <div className="max-w-5xl mx-auto flex items-center relative z-10">
          <div className="shrink-0 p-2.5 bg-gradient-to-br from-yellow-400/30 to-orange-400/20 backdrop-blur-sm text-yellow-200 rounded-xl ring-1 ring-yellow-400/30 mr-4 shadow-lg shadow-red-900/20">
            <Star size={24} className="fill-yellow-200/80" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-4xl font-black tracking-wide leading-snug text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" style={{ fontFamily: "'Noto Serif SC', 'SimSun', 'Songti SC', serif" }}>
              淬火重生五载路 精益铸魂再出发
            </h1>
            <p className="text-[10px] md:text-xs text-yellow-200/80 font-semibold mt-1.5 tracking-[0.15em] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-yellow-300/60 rounded-full inline-block"></span>
              五周年重要讲话专题 · 2026 DIGITAL YEAR
            </p>
          </div>
          {/* 装饰性年份标识 */}
          <div className="hidden md:flex shrink-0 items-center gap-1 ml-4 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full ring-1 ring-white/20">
            <Medal size={14} className="text-yellow-300" />
            <span className="text-[11px] font-black text-yellow-200 tracking-wider">2026</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth w-full">
        <div className="max-w-5xl mx-auto space-y-6 md:space-y-10">

          {/* ========== 双 CTA 按钮 · 催人奋进 ========== */}
          <section>
            <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
              <Flame size={16} className="text-red-500" />
              <h2 className="text-sm md:text-base font-black text-slate-700 tracking-tight">行动起来</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* 重要讲话学习答题 */}
              <a
                href={examFormUrl || '#'}
                target={examFormUrl ? '_blank' : undefined}
                rel={examFormUrl ? 'noopener noreferrer' : undefined}
                onClick={!examFormUrl ? (e) => e.preventDefault() : undefined}
                className="group relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-orange-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-3.5 md:p-5 text-white cursor-pointer active:scale-[0.98]"
              >
                {/* 扁平装饰 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

                <Sparkles size={14} className="absolute top-3 right-3 text-yellow-200/40 animate-pulse" style={{ animationDuration: '2s' }} />

                <div className="relative z-10 flex flex-row items-center gap-3 md:gap-4">
                  <div className="shrink-0 p-1.5 bg-white/15 rounded-lg ring-1 ring-white/20 group-hover:scale-110 transition-all duration-300">
                    <BookOpen size={20} className="text-yellow-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-xl font-black drop-shadow-sm tracking-wide">
                      重要讲话学习答题
                    </h3>
                    <p className="text-[10px] md:text-xs text-red-100/90 font-semibold mt-0.5 tracking-wider">
                      深学细悟 · 以考促行
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-[10px] font-black bg-white/15 px-3 py-1.5 rounded-full group-hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span>开始答题</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* 底部扫光 */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-300/50 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </a>

              {/* 合理化建议提报 */}
              <a
                href={suggestionUrl || '#'}
                target={suggestionUrl ? '_blank' : undefined}
                rel={suggestionUrl ? 'noopener noreferrer' : undefined}
                onClick={!suggestionUrl ? (e) => e.preventDefault() : undefined}
                className="group relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-violet-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-3.5 md:p-5 text-white cursor-pointer active:scale-[0.98]"
              >
                {/* 扁平装饰 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>

                <Sparkles size={14} className="absolute top-3 right-3 text-blue-200/40 animate-pulse" style={{ animationDuration: '2.4s' }} />

                <div className="relative z-10 flex flex-row items-center gap-3 md:gap-4">
                  <div className="shrink-0 p-1.5 bg-white/15 rounded-lg ring-1 ring-white/20 group-hover:scale-110 transition-all duration-300">
                    <Lightbulb size={20} className="text-yellow-200" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm md:text-xl font-black drop-shadow-sm tracking-wide">
                      合理化建议提报
                    </h3>
                    <p className="text-[10px] md:text-xs text-blue-100/90 font-semibold mt-0.5 tracking-wider">
                      建言献策 · 共筑未来
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1 text-[10px] font-black bg-white/15 px-3 py-1.5 rounded-full group-hover:bg-white/25 transition-all duration-300 border border-white/10">
                    <span>立即提报</span>
                    <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* 底部扫光 */}
                <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-transparent via-blue-300/50 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
              </a>
            </div>
          </section>

          {/* ========== 五周年讲话学习龙虎榜 · 嵌入式看板 ========== */}
          <section>
            <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
              <Trophy size={18} className="text-amber-500" />
              <h2 className="text-sm md:text-base font-black text-slate-700 tracking-tight">五周年讲话学习龙虎榜</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-2"></div>
              <a
                href={examDashboardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-[10px] md:text-xs font-bold hover:bg-amber-100 transition-colors border border-amber-200 shrink-0"
              >
                <span className="hidden md:inline">全屏查看</span>
                <Maximize2 size={12} />
              </a>
            </div>

            <div className="relative bg-white border-[4px] border-white ring-1 ring-slate-200 shadow-2xl overflow-hidden rounded-2xl h-[450px] md:rounded-[2rem] md:h-[650px]">
              <SafariBridge url={examDashboardUrl} title="五周年讲话学习龙虎榜" onUnlocked={() => {}} />

              {isIframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white z-0">
                  <div className="relative">
                    <Loader2 className="animate-spin text-amber-500 mb-4" size={40} />
                  </div>
                  <p className="text-slate-500 font-bold tracking-widest animate-pulse text-center px-4 text-sm">
                    正在加载成绩数据
                  </p>
                  <p className="text-[10px] text-slate-400 mt-2 font-medium">请稍候 ...</p>
                </div>
              )}

              <iframe
                src={examDashboardUrl}
                className="w-full h-full border-none relative z-10"
                onLoad={() => setIsIframeLoading(false)}
                title="五周年讲话学习龙虎榜"
                loading="eager"
                // @ts-ignore
                fetchpriority="high"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-downloads"
              />
            </div>

            <div className="mt-3 flex items-center justify-center md:justify-end px-2">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">Data Syncing</span>
              </div>
            </div>
          </section>

          {/* ========== 职工学习重要讲话心得体会 · 图文卡片墙 ========== */}
          <section>
            <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
              <Heart size={18} className="text-red-500" />
              <h2 className="text-sm md:text-base font-black text-slate-700 tracking-tight">职工学习重要讲话心得体会</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {MOCK_THOUGHTS.map((item, index) => {
                const theme = CARD_THEMES[index % CARD_THEMES.length];
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedThought(item)}
                    className="group text-left bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-slate-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden cursor-pointer focus:outline-none"
                  >
                    {/* 彩色图 Banner */}
                    <div className={`relative h-28 md:h-32 bg-gradient-to-br ${theme.from} ${theme.to} flex items-center justify-center overflow-hidden`}>
                      {/* 装饰性光晕 */}
                      <div className="absolute -top-6 -right-6 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
                      {/* 图标 */}
                      <div className={`relative z-10 ${theme.icon}`}>
                        {item.icon === 'Star' && <Star size={40} className="opacity-60" />}
                        {item.icon === 'Flame' && <Flame size={40} className="opacity-60" />}
                        {item.icon === 'Award' && <Award size={40} className="opacity-60" />}
                        {item.icon === 'Lightbulb' && <Lightbulb size={40} className="opacity-60" />}
                        {item.icon === 'Heart' && <Heart size={40} className="opacity-60" />}
                        {item.icon === 'BookOpen' && <BookOpen size={40} className="opacity-60" />}
                      </div>
                      {/* 底部阅读提示 */}
                      <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[10px] text-white/70 font-bold">
                        <Eye size={10} />
                        <span>点击阅读</span>
                      </div>
                    </div>

                    {/* 文字内容 */}
                    <div className="p-4 md:p-5">
                      {/* 标题 */}
                      <h3 className="text-sm md:text-base font-black text-slate-800 mb-2 leading-snug line-clamp-2 min-h-[2.5em]">
                        {item.title}
                      </h3>

                      {/* 作者信息 */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${theme.from} ${theme.to} flex items-center justify-center text-white text-[10px] font-black shadow-sm`}>
                          {item.author.charAt(0)}
                        </div>
                        <span className="text-xs font-bold text-slate-400">{item.author}</span>
                        <span className="text-[9px] text-slate-300">·</span>
                        <span className="text-[9px] text-slate-400">{item.department}</span>
                      </div>

                      {/* 摘要 */}
                      <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed line-clamp-3">
                        {item.excerpt}
                      </p>

                      {/* 阅读全文 */}
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-black text-slate-400 group-hover:text-red-500 transition-colors duration-300">
                        阅读全文 <ArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* ========== 重要讲话题库练习专区 ========== */}
          <section>
            <div className="flex items-center gap-2 mb-3 md:mb-4 px-1">
              <PenTool size={18} className="text-indigo-500" />
              <h2 className="text-sm md:text-base font-black text-slate-700 tracking-tight">重要讲话题库练习专区</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent ml-2"></div>
            </div>

            {/* 通知/介绍卡片 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 rounded-2xl p-5 md:p-6 mb-5 md:mb-6 shadow-sm">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="shrink-0 p-2.5 bg-indigo-100 rounded-xl text-indigo-600">
                  <FileText size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-black text-indigo-800 mb-2">人力资源管理处通知</h3>
                  <div className="text-[11px] md:text-xs text-slate-600 leading-relaxed space-y-2">
                    <p>
                      为深入贯彻落实李总讲话文件精神，我处将于八月份组织专项抽考检查工作，
                      范围覆盖公司所有在册人员。
                    </p>
                    <p>
                      为了方便分厂职工练习，现将题库题目进行分块分解：
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1.5 text-[11px] md:text-xs font-medium">
                      <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></span>填空题 2套（各30道）</span>
                      <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>单选题 2套（各30道）</span>
                      <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0"></span>多选题 2套（各30道）</span>
                      <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>判断题 2套（各30道）</span>
                      <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0"></span>简答题 2套（13道+12道）</span>
                      <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0"></span>论述题 1套（12道）</span>
                    </div>
                    <div className="mt-3 bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 border-l-4 border-amber-400 rounded-r-lg px-4 py-3 shadow-sm">
                      <div className="flex items-start gap-2.5">
                        <Sparkles size={16} className="text-amber-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[13px] md:text-sm font-black text-amber-900 leading-relaxed">
                            职工可进行自由练习，<span className="text-amber-700 underline decoration-amber-300 decoration-2 underline-offset-2">成绩不记录不考核</span>，仅供自己查验掌握情况。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 题库卡片网格 */}
            <style>{`
              .qb-card {
                position: relative;
                width: 100%;
                min-height: 200px;
                background-color: #1a1a2e;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 24px 22px;
                border-radius: 12px;
                cursor: pointer;
                color: white;
                overflow: hidden;
                z-index: 1;
                border: none;
                outline: none;
                text-decoration: none;
                transition: transform 0.3s ease;
              }
              .qb-card::before {
                content: '';
                position: absolute;
                inset: 0;
                left: -4px;
                margin: auto;
                width: calc(100% + 8px);
                height: calc(100% + 8px);
                border-radius: 16px;
                background: linear-gradient(-45deg, var(--qb-from) 0%, var(--qb-to) 100%);
                z-index: -10;
                pointer-events: none;
                transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
              }
              .qb-card::after {
                content: "";
                z-index: -1;
                position: absolute;
                inset: 0;
                background: linear-gradient(-45deg, var(--qb-from) 0%, var(--qb-glow) 100%);
                transform: translate3d(0, 0, 0) scale(0.95);
                filter: blur(20px);
                transition: filter 0.6s ease;
                opacity: 0.6;
              }
              .qb-card:hover::after {
                filter: blur(30px);
                opacity: 1;
              }
              .qb-card:hover::before {
                transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
              }
              .qb-card:hover {
                transform: translateY(-2px);
              }
              .qb-tag {
                display: inline-flex;
                align-items: center;
                gap: 5px;
                padding: 3px 12px;
                border-radius: 999px;
                font-size: 10px;
                font-weight: 900;
                background: rgba(255,255,255,0.12);
                color: rgba(255,255,255,0.9);
                backdrop-filter: blur(4px);
                margin-bottom: 14px;
                width: fit-content;
                border: 1px solid rgba(255,255,255,0.08);
                letter-spacing: 0.08em;
                text-transform: uppercase;
              }
              .qb-title {
                font-size: 16px;
                font-weight: 900;
                color: #fff;
                line-height: 1.45;
                margin-bottom: 6px;
                text-shadow: 0 0 16px rgba(255,255,255,0.1);
                letter-spacing: 0.02em;
              }
              .qb-count {
                font-size: 12px;
                font-weight: 600;
                color: rgba(255,255,255,0.45);
                margin-bottom: 0;
                letter-spacing: 0.06em;
              }
              .qb-btn {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 11px;
                font-weight: 900;
                color: rgba(255,255,255,0.4);
                transition: all 0.3s ease;
                letter-spacing: 0.04em;
                margin-top: 16px;
              }
              .qb-card:hover .qb-btn {
                color: #fff;
                text-shadow: 0 0 10px rgba(255,255,255,0.2);
              }
              .qb-btn svg {
                transition: transform 0.3s ease;
              }
              .qb-card:hover .qb-btn svg {
                transform: translateX(3px);
              }
            `}</style>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
              {QUESTION_BANKS.map((bank) => {
                const IconComponent = {
                  CheckCircle, HelpCircle, ListOrdered,
                  PenTool, MessageSquare, FileSpreadsheet,
                }[bank.icon] || CheckCircle;

                return (
                  <a
                    key={bank.id}
                    href={bank.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qb-card"
                    style={{
                      '--qb-from': bank.colors.from,
                      '--qb-to': bank.colors.to,
                      '--qb-glow': bank.colors.glow,
                    } as React.CSSProperties}
                  >
                    {/* 类型标签 */}
                    <div className="qb-tag">
                      <IconComponent size={10} />
                      <span>{bank.tag}</span>
                    </div>
                    {/* 标题 */}
                    <h3 className="qb-title">{bank.title}</h3>
                    {/* 题目数量 */}
                    <p className="qb-count">{bank.count}</p>
                    {/* 开始练习按钮 */}
                    <div className="qb-btn">
                      <span>开始练习</span>
                      <ArrowRight size={10} />
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          {/* ========== 文章阅读弹窗 ========== */}
          {selectedThought && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
              {/* 杂志风格字体与样式 */}
              <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Source+Serif+Pro:wght@300;400;600;700&family=Noto+Serif+SC:wght@400;600;700;900&display=swap');

                .magazine-content {
                  font-family: 'Source Serif Pro', 'Noto Serif SC', serif;
                  line-height: 2;
                  letter-spacing: 0.02em;
                  color: #3a3a3a;
                }
                .magazine-content .drop-cap::first-letter {
                  float: left;
                  font-size: 4.8em;
                  line-height: 0.8;
                  margin: 0.08em 0.15em 0 0;
                  font-family: 'Playfair Display', serif;
                  color: #8b1a1a;
                  font-weight: 700;
                  text-shadow: 2px 2px 4px rgba(139,26,26,0.1);
                }
                .magazine-content .pull-quote {
                  font-size: 1.3rem;
                  line-height: 1.6;
                  color: #8b1a1a;
                  font-weight: 600;
                  text-align: center;
                  padding: 1.2rem 1.5rem;
                  margin: 2rem 0;
                  border-top: 2px solid #c9a959;
                  border-bottom: 2px solid #c9a959;
                  font-family: 'Playfair Display', 'Noto Serif SC', serif;
                  font-style: italic;
                }
                .magazine-content .pull-quote p {
                  margin-bottom: 0;
                  text-indent: 0;
                }
                .magazine-content .highlight-box {
                  background: linear-gradient(135deg, rgba(139,26,26,0.05) 0%, rgba(201,169,89,0.08) 100%);
                  padding: 1.5rem 2rem;
                  border-radius: 0.5rem;
                  margin: 2rem 0;
                  border-left: 4px solid #8b1a1a;
                }
                .magazine-content .highlight-box p {
                  text-indent: 0;
                  margin-bottom: 0;
                }
                .magazine-content .elegant-divider {
                  display: flex;
                  align-items: center;
                  margin: 2.5rem 0;
                }
                .magazine-content .elegant-divider::before,
                .magazine-content .elegant-divider::after {
                  content: '';
                  flex: 1;
                  height: 1px;
                  background: linear-gradient(to right, transparent, #c9a959, transparent);
                }
                .magazine-content .elegant-divider span {
                  padding: 0 1.5rem;
                  color: #c9a959;
                  font-size: 1.5rem;
                }
                .magazine-content p {
                  margin-bottom: 1.6rem;
                  text-indent: 2em;
                }
              `}</style>
              <div className="relative w-full max-w-3xl max-h-full bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
                {/* 关闭按钮 */}
                <button
                  onClick={() => setSelectedThought(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 shadow-lg hover:shadow-xl transition-all border border-slate-100"
                >
                  <X size={18} />
                </button>

                {/* 文章顶部图 Banner */}
                {(() => {
                  const theme = CARD_THEMES[(selectedThought.id - 1) % CARD_THEMES.length];
                  return (
                    <div className={`relative shrink-0 bg-gradient-to-br ${theme.from} ${theme.to} px-6 md:px-10 pt-6 md:pt-10 pb-12 md:pb-14 overflow-hidden`}>
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>

                      <div className="relative z-10">
                        {/* 文章标签 */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 backdrop-blur-sm rounded-full mb-4 text-[10px] text-white/80 font-bold tracking-wider border border-white/10">
                          <Calendar size={10} />
                          {selectedThought.date}
                        </div>

                        {/* 标题 */}
                        <h2 className="text-xl md:text-3xl font-black text-white leading-snug drop-shadow-lg tracking-wide" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                          {selectedThought.title}
                        </h2>

                        {/* 作者信息 */}
                        <div className="flex items-center gap-3 mt-4">
                          <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${theme.from} ${theme.to} border-2 border-white/40 flex items-center justify-center text-white text-sm font-black shadow-lg`}>
                            {selectedThought.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white drop-shadow">{selectedThought.author}</p>
                            <p className="text-[10px] text-white/70 font-medium">{selectedThought.department}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* 文章正文 */}
                <div className={`flex-1 overflow-y-auto px-6 md:px-10 py-6 md:py-8 ${selectedThought.content.includes('[PULLQUOTE]') ? 'magazine-content' : ''}`}>
                  <div className="max-w-3xl mx-auto">
                    {/* 引言/摘要 */}
                    <div className="relative pl-5 border-l-4 border-red-400 mb-6">
                      <p className="text-sm md:text-base text-slate-600 italic leading-relaxed font-medium">
                        {selectedThought.excerpt}
                      </p>
                    </div>

                    {/* 正文内容 - 杂志风格排版 */}
                    <div className="magazine-body">
                      {(() => {
                        const content = selectedThought.content;
                        // 检测是否包含杂志标记
                        if (!content.includes('[PULLQUOTE]') && !content.includes('[DIVIDER]')) {
                          // 无标记时使用默认渲染
                          return content.split('\n\n').map((paragraph, i) => {
                            const isHighlighted = paragraph.includes('：') && paragraph.length < 25;
                            return (
                              <p key={i} className={`${isHighlighted ? 'font-black text-slate-800 text-base md:text-lg' : 'text-slate-700'}`} style={{ textIndent: '2em', lineHeight: '1.9' }}>
                                {paragraph}
                              </p>
                            );
                          });
                        }

                        // 杂志风格：解析标记
                        const lines = content.split('\n');
                        const elements: React.ReactNode[] = [];
                        let inPullQuote = false;
                        let inHighlight = false;
                        let accText = '';
                        let isFirstPara = true;
                        let keyIndex = 0;

                        for (const line of lines) {
                          if (line === '[PULLQUOTE]') {
                            inPullQuote = true;
                            accText = '';
                            continue;
                          }
                          if (line === '[/PULLQUOTE]') {
                            inPullQuote = false;
                            if (accText.trim()) {
                              elements.push(
                                <div key={`pq-${keyIndex++}`} className="pull-quote">
                                  <p>{accText.trim()}</p>
                                </div>
                              );
                            }
                            continue;
                          }
                          if (inPullQuote) {
                            accText += line;
                            continue;
                          }

                          if (line === '[HIGHLIGHT]') {
                            inHighlight = true;
                            accText = '';
                            continue;
                          }
                          if (line === '[/HIGHLIGHT]') {
                            inHighlight = false;
                            if (accText.trim()) {
                              elements.push(
                                <div key={`hl-${keyIndex++}`} className="highlight-box">
                                  <p>{accText.trim()}</p>
                                </div>
                              );
                            }
                            continue;
                          }
                          if (inHighlight) {
                            accText += line;
                            continue;
                          }

                          if (line === '[DIVIDER]') {
                            elements.push(
                              <div key={`div-${keyIndex++}`} className="elegant-divider">
                                <span>✦</span>
                              </div>
                            );
                            continue;
                          }

                          if (line.trim() === '') continue;

                          // 普通段落 - 首段加首字下沉
                          if (isFirstPara) {
                            elements.push(
                              <p key={`p-${keyIndex++}`} className="drop-cap">{line}</p>
                            );
                            isFirstPara = false;
                          } else {
                            elements.push(
                              <p key={`p-${keyIndex++}`}>{line}</p>
                            );
                          }
                        }
                        return elements;
                      })()}
                    </div>

                    {/* 底部装饰 */}
                    <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold">
                        <Heart size={12} className="text-red-400" />
                        感谢阅读 · 精益路上你我同行
                      </div>
                      <button
                        onClick={() => setSelectedThought(null)}
                        className="text-[10px] font-black text-red-500 hover:text-red-600 transition-colors"
                      >
                        关闭
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 底部留白 */}
          <div className="h-6"></div>
        </div>
      </div>
    </div>
  );
};
