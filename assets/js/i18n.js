/* ── Bilingual binding. EN is inline (source of truth); this provides 繁中. ──
   EN mode shows English only, except 青年百億計畫 and personal Chinese names
   (those live inline in the HTML and are never swapped).                        */
(function () {
  "use strict";
  var ZH = {
    "nav.home":"首頁","nav.program":"計畫綱要","nav.curriculum":"九週課程","nav.faculty":"講者陣容","nav.delegation":"代表團","nav.journal":"影像日誌",
    "rail.from":"臺灣","field.med":"醫學","field.q":"量子","counter.label":"次瀏覽","endorse.label":"主辦・指導單位",

    "foot.org1":"<span class=\"mono\">承辦單位</span> 亞洲大學",
    "foot.org2":"<span class=\"mono\">合作單位</span> 美東台美產業科技協會 TAITA-East",
    "foot.org3":"<span class=\"mono\">學術合作單位</span> UCLA 量子科學與工程中心（CQSE）",
    "foot.org4":"<span class=\"mono\">共同主辦</span> UCLA Samueli 工學院 · David Geffen 醫學院 · UCLA Joe C. Wen 護理學院",
    "foot.initiative":"<span class=\"mono\">所屬計畫</span> 教育部青年百億海外圓夢基金計畫 · 海外翱翔組",
    "imprint.note":"本站由 I-9-11 代表團學員建置。計畫細節得由計畫團隊調整。內容依 2026 課程大綱與查證後的講者名單。",

    /* page headers */
    "page.program":"計畫綱要","page.curriculum":"九週課程","page.faculty":"講者陣容","page.delegation":"代表團","page.journal":"影像日誌",

    /* home */
    "hero.eyebrow":"教育部青年百億海外圓夢基金計畫 · 海外翱翔組",
    "hero.sub":"為期 60 天的 UCLA 菁英研習計畫。2026 年夏。",
    "stat.days":"在 UCLA 天數","stat.weeks":"研習週數","stat.delegates":"臺灣學員","stat.host":"主辦學府",
    "lbl.signals":"四大主題","lbl.program":"計畫","lbl.codex":"九週課程","lbl.oneday":"一日剖面",
    "lbl.contributors":"講者","lbl.delegation":"代表團","lbl.fieldlog":"影像日誌","lbl.brief":"綱要",
    "home.signalsTitle":"四大領域，兩種學門。",
    "home.signalsNote":"兩個在醫學，兩個在量子；四大領域完整內容見計畫頁。",
    "home.sc.brain":"AI <span class=\"cross\">×</span> 神經科學","home.sc.drug":"新藥探索 <span class=\"cross\">×</span> 中醫","home.sc.quantum":"量子場",
    "theme.brain.t":"AI <span class=\"cross\">×</span> 腦與神經科學",
    "theme.brain.d":"臨床上最成熟的一線。深度學習已能判讀 MRI／PET，2025 年首個阿茲海默症血液檢測也獲核准。AI 仍定位為輔助判讀，而非自主診斷。",
    "theme.drug.t":"AI <span class=\"cross\">×</span> 新藥與中醫",
    "theme.drug.d":"AI 正加速臨床前研究，並延伸到中醫領域。截至 2025 年仍無 AI 發現的藥物上市。",
    "theme.qc.t":"量子計算 <span class=\"cross\">×</span> 分子預測",
    "theme.qc.d":"最不成熟、討論最多。現有含噪量子裝置尚無法模擬真實藥物分子，實質價值多被放在 2030 年代。",
    "theme.conv.t":"生醫工程 <span class=\"cross\">×</span> 量子匯流",
    "theme.conv.d":"這股匯流正在頂尖大學成形：量子感測、生物磁造影、儀器與材料。仍屬早期，也是本代表團的前沿。",
    "home.briefTitle":"前沿的六十天。",
    "home.briefLede":"九位臺灣學員於 2026 年 7 月 6 日至 9 月 3 日在 UCLA 度過六十天，閱讀生醫工程與量子科學交會的前沿。",
    "cta.program":"閱讀計畫綱要","cta.curriculum":"看九週課程","cta.faculty":"認識講者","cta.delegation":"代表團",

    /* program */
    "brief.title":"在醫學與量子交界的田野研究。",
    "brief.lede":"九位臺灣學員在 UCLA 度過六十天（2026 年 7 月 6 日至 9 月 3 日），閱讀生醫工程與量子科學交會的前沿。",
    "brief.p2":"本計畫屬臺灣<strong>青年百億海外圓夢基金計畫</strong>（教育部青年發展署 · 海外翱翔組）。由<strong>亞洲大學</strong>承辦、<strong>美東台美產業科技協會（TAITA-East）</strong>合作，<strong>UCLA 量子科學與工程中心（CQSE）</strong>學術主辦，並與 UCLA Samueli 工學院、David Geffen 醫學院及 UCLA Joe C. Wen 護理學院共同主辦。",
    "brief.p3":"計畫由 UCLA 傑出教授、CQSE 主任之一<strong>王康隆教授</strong>領銜。團隊刻意精簡為九人，讓每位學員都上台報告、提問、實作，而非旁觀。",
    "pub.label":"計畫支持單位",
    "themes.title":"四個領域，誠實以對。",
    "themes.note":"每個主題對應一種波形。兩個屬於醫學，兩個屬於量子。",
    "daily.title":"一天如何構成。",
    "daily.note":"上午輸入，下午產出，是這項計畫的教學節奏。",
    "day.am.t":"上午：輸入","day.am.d":"師資或講者演講、實驗室參訪，或主題導論。做筆記、記下問題，為下午做準備。",
    "day.pm.t":"下午：產出","day.pm.d":"每日教學回講：三組各報告八到十分鐘，再加問答，用自己的話講出當天所學。接著進專題工作坊。",
    "day.close.t":"每日收束","day.close.d":"每位學員一份可追溯的學習紀錄：三個收穫、一個仍困惑的問題、一個下一步。",
    "day.weekend.t":"週末","day.weekend.d":"自主的城市與創新探索、休息與反思。沒有正式產出。",

    /* curriculum */
    "curriculum.title":"六十天，九週。上午輸入，下午產出。",
    "curriculum.note":"每週一站，沿時間軸往下。左為上午輸入，右為下午產出。",
    "io.input":"上午 · 輸入","io.output":"下午 · 產出","deliver.label":"每週產出",
    "w1.t":"量子科學、AI 與資料分析",
    "w1.in":"抵達與行前說明，從日常科學進入量子世界：光子、電子，以及 AI 與生物學共享的語言。講者：KS Huang（黃光旭）、Mark Gyure（UCLA CQSE）、William Yu（UCLA Anderson）。",
    "w1.out":"跨越電子、光子、量子與 AI 的共同詞彙概念圖，以三分鐘教學回講作結。",
    "w2.t":"生物、生命科學與健康資料",
    "w2.in":"量子科學與技術於感測、影像、計算、通訊、AI 與生醫的應用，含 Mona Jarrahi（UCLA）的兆赫電子與光子學。",
    "w2.out":"整合電子、光子、量子與 AI 架構的未來電腦系統設計。",
    "w3.t":"神經科學與腦研究",
    "w3.in":"神經科學與工程；C.Y. Daniel Lee 的神經行為遺傳學與神經退化疾病；Gina Poe（UCLA 腦研究所）的腦研究與實驗室參訪。",
    "w3.out":"健康感測案例：選擇一種疾病或社會問題，設計感測或 AI 解決方案。",
    "w4.t":"量子科學、半導體與材料",
    "w4.in":"量子科學與工程及實驗室參訪（Richard Ross）；半導體技術（Marko Sokolich）；太陽能與材料科學（Yang Yang）。",
    "w4.out":"關於量子、半導體、材料或神經科學應用的實驗室或技術案例研究。",
    "w5.t":"醫學藥理、奈米科技與生物標記",
    "w5.in":"銜接工作坊與詞彙特訓；Hsian-Rong Tseng（UCLA／David Geffen 醫學院）的奈米科技、液態切片、生物標記與數位分身；Yuan Tian 的健康與資安資料科學。",
    "w5.out":"生物標記或數位分身的迷你提案：問題、資料、方法與風險。",
    "w6.t":"數位健康與創新",
    "w6.in":"Bijan Najafi（UCLA／David Geffen 醫學院）的數位健康與創新；資料視覺化工作坊；王康隆的量子系統現況；Alan Ho（QoLab）的超導量子計算；Li-Fan Lu（UC San Diego）的免疫學與調節型 T 細胞。",
    "w6.out":"數位健康原型：使用者旅程、資料流，以及倫理與隱私考量。",
    "w7.t":"整合醫學與傳統中醫",
    "w7.in":"顏宏融（中國醫藥大學）的中醫、整合醫學、草藥與針灸；Ka-Kit Hui（UCLA 中西醫結合中心）的中西整合醫學。",
    "w7.out":"整合醫學的證據地圖：傳統與現代醫學如何彼此啟發與驗證。",
    "w8.t":"量子科學／應用量子",
    "w8.in":"Robert Huang（Caltech）的理論量子神經形態運算；從硬體到演算法的量子平台；量子資訊與應用量子科學。",
    "w8.out":"期末專題草稿：研究問題、技術路徑、預期影響與限制。",
    "w9.t":"最終整合、成果報告與返國",
    "w9.in":"期末專題彩排與同儕互評：評分量表、時間掌控與簡報修訂。",
    "w9.out":"期末成果發表會：完整報告、個人反思、作品集與感謝函。隨後返臺。",
    "log.title":"現場更新與照片","log.hint":"計畫期間即時更新","log.note":"本週的照片與紀錄將於 2026 年夏季計畫期間陸續加入。",
    "w1.log":"第一週從顏院長歡迎開場，黃光旭老師帶我們初探量子概念：疊加、測不準、觀察者效應。各組取了隊名，也選出代表自己的三個詞。Mark Gyure 從量子位元、糾纏一路講到去相干、錯誤更正與 NISQ 時代；William Yu 則以 AI、生產力與就業市場替這週收尾。",
    "w2.log":"黃光旭老師延續量子主線：正規化與尺度、振幅與相位、干涉與糾纏，以及量子感測如何接上真實世界（NV 中心、EEG、MRI），並收在量子細胞自動機。接著由 Mona Jarrahi 帶我們認識兆赫（THz）光子學，及其在成像、安檢與材料上的應用。",

    /* faculty */
    "faculty.title":"教導這六十天的人。",
    "faculty.note":"客座師資與講者，依其帶來的領域分組。職稱與研究領域依計畫講者名單查證。",
    "band.quantum":"量子科學與工程","band.neuro":"神經科學與腦","band.pharma":"藥理、生物標記與生命科學",
    "band.digital":"數位健康與資料","band.integrative":"整合醫學與中醫","band.program":"計畫領導 · 臺灣",
    "fac.wang":"量子材料與元件、自旋電子學、拓樸絕緣體。中央研究院院士，亞洲大學量子 AI 研究中心榮譽主任。",
    "band.industry":"業界與公部門","band.coord":"計畫協調",
    "fac.wang.r":"領銜教授 · UCLA Samueli（電機／材料）· CQSE 主任",
    "fac.jarrahi.r":"UCLA · 電機與電腦工程","fac.jarrahi.a":"兆赫與毫米波電子、光電與影像；UCLA 半導體中心學術主任。",
    "fac.ross.r":"UCLA · 量子科技碩士學程與 CQSE","fac.ross.a":"量子科學教育與人才培育；電子自旋量子位元元件。",
    "fac.sokolich.r":"UCLA 電機 · HRL 實驗室","fac.sokolich.a":"化合物半導體、高速電晶體與製程工程、射頻／微波元件。",
    "fac.yang.r":"UCLA · 材料科學與工程系（系主任）","fac.yang.a":"功能性電子元件、太陽能電池、混成鈣鈦礦、有機半導體。",
    "fac.rhuang.r":"加州理工學院 · 理論物理","fac.rhuang.a":"量子資訊與學習理論、量子機器學習、複雜度理論。",
    "fac.kshuang.r":"計畫講座 · 量子與 AI 基礎","fac.kshuang.a":"量子光學運算、細胞影像處理、運算與感測。",
    "fac.poe.r":"UCLA · 腦研究所所長","fac.poe.a":"睡眠與記憶固化、大腦韌性；整合生物學與生理學。",
    "fac.dlee.r":"UCLA · 神經行為遺傳學／精神醫學","fac.dlee.a":"神經退化、阿茲海默症與亨丁頓舞蹈症、神經發炎。",
    "fac.tseng.r":"UCLA · David Geffen 醫學院","fac.tseng.a":"液態切片、NanoVelcro 循環腫瘤細胞檢測、奈米診斷技術。",
    "fac.lu.r":"加州大學聖地牙哥分校 · 分子生物學","fac.lu.a":"免疫學、調節型 T 細胞、免疫耐受、免疫調控 microRNA。",
    "fac.najafi.r":"UCLA · David Geffen 醫學院（CASIT）","fac.najafi.a":"數位健康、穿戴裝置、遠距病人監測、數據驅動照護。",
    "fac.tian.r":"UCLA · 電機與電腦科學","fac.tian.a":"AI 安全、資料隱私、機器學習安全、隱私保護系統。",
    "fac.wyu.r":"UCLA · Anderson 經濟預測中心","fac.wyu.a":"經濟模型與預測、時間序列計量、資料分析。",
    "fac.hui.r":"UCLA · 中西醫結合中心創辦人暨主任","fac.hui.a":"中西整合醫學、中醫整合、臨床藥理。",
    "fac.yen.r":"中國醫藥大學 · 中醫學院院長","fac.yen.a":"中醫與整合醫學、草藥、針灸、實證傳統醫學。",
    "fac.kthuang.r":"亞洲大學 · 講座教授，AI 與量子研究中心主任","fac.kthuang.a":"MIT 博士；前 IBM 全球副總；知識管理；量子安全技術。",
    "fac.iris.r":"計畫 · 學術顧問暨課程協調","fac.iris.a":"應用量化研究者與教育者，專注於可信任機器學習、可重現資料科學、生醫證據評估，以及決策導向的風險建模。","fac.iris.more":"普渡大學科技博士（D.Tech.）研究生，並擁有哈佛大學推廣教育學院資料科學文學碩士（A.L.M.）與財務工程研究所進修。自 2012 年起於加州州立大學洛杉磯分校教授統計、資料科學與資訊安全，並擔任 2026 UCLA 夏季生醫工程與量子科技計畫的課程協調人。","more.open":"展開","more.close":"收合",
    "fac.gyure.r":"UCLA CQSE · 執行主任；電機工程兼任教授","fac.gyure.a":"固態量子資訊處理、半導體量子點、量子元件架構與模擬。",
    "fac.yan.r":"UPSUNS Diamond · CYAN Consulting（前卡內基研究院）· 創辦人／負責人","fac.yan.a":"單晶 CVD/MPCVD 鑽石生長、鑽石基板與熱學／半導體材料。",
    "fac.luo.r":"Anyon Technologies · 共同創辦人暨執行長","fac.luo.a":"超導量子計算、量子處理器與系統、混合量子-古典與模組化架構。",
    "fac.holsinger.r":"史丹佛醫學院（耳鼻喉頭頸外科）· 教授暨頭頸外科主任","fac.holsinger.a":"頭頸部外科腫瘤學；經口機器人手術（TORS）與微創手術；外科創新與 AI。",
    "fac.bedi.r":"史丹佛醫學院（耳鼻喉頭頸外科）· 哈佛 · 臨床研究協調員暨應用機器學習研究者","fac.bedi.a":"臨床研究、應用機器學習、多模態 AI、腫瘤學與數位健康。",
    "fac.lin.r":"PredictionProbe 公司 · 創辦人暨技術長","fac.lin.a":"不確定性量化、機率技術、可靠度最佳化、預測建模。",
    "fac.chou.r":"駐洛杉磯台北經文處 · 科技組組長（國科會）","fac.chou.a":"科技外交、臺美學術合作、海外科技計畫協調。",

    /* delegation */
    "deleg.title":"九位學員，三個專題分組。",
    "deleg.note":"九人團隊與就讀單位。專題 A、B、C 組貫穿九週。",
    "deleg.independent":"獨立學員","deleg.staff":"隨團教師",
    "lbl.volunteers":"義工團","vol.title":"義工團隊。","vol.note":"於計畫期間協助代表團的學員，分為 D、E 兩組。","vol.role":"義工",
    "del.introbtn":"自我介紹","del.introph":"這位學員的自我介紹將在此補上。",
    "del.arch":"本站架設者",
    "del.bio.lee":"我是李騏維，國立清華大學雙主修物理學系和電資學院學士班，現為中研院資訊科技創新研究中心兼任研究助理。研究興趣橫跨 AI4Science、腦神經啟發的預測編碼、機器學習的演算法，今年暑假很高興可以參加青年百億計畫到 UCLA 學習醫工量子的知識，希望能結合 AI 與生醫為社會帶來更多貢獻。",
    "del.bio.clee":"於臺大生理所從事離子通道、神經與活體電生理研究，並藉此解析抗癲癇藥物的作用機轉。希望透過本計畫學習 AI 與量子技術在神經研究與新藥開發上的應用，並將研習成果整併回現有研究。",
    "del.bio.chen":"大家好，我是陳融 Ryan，目前就讀芝加哥大學應用數據科學碩士 (MSADS)，核心方向為數據分析 AI Agent，特別專注於電子健康紀錄 (EHR) 等結構化醫療資料庫的架構與最佳化；日前很榮幸成為 IBM Quantum Qiskit Advocate。出國前在臺灣有數年跨領域實戰，曾任專案經理並有兩次創業經歷，兼具技術思維與商業落地視角。2026 夏季擔任芝大 IT 與 United Airlines 的 AI Developer Intern，同時參與教育部青年百億海外圓夢計畫的 UCLA 醫工量子研習。",
    "del.bio.tung":"大家好，我是 Joyce。我的研究將量子計算應用於新藥設計，尤其是阿茲海默症，以量子化學方法建模候選藥物與致病標靶蛋白之間的交互作用能，目標是把這類問題映射到量子電腦上。我也關注量子計算在醫學上的更廣泛應用，包括腦造影與腦連結體，以及量子機器學習與量子演算法。",
    "del.bio.liu":"具備語言治療、認知神經科學與數位醫療研究背景，曾於 UW-Madison 阿茲海默症實驗室接受 EEG、rTMS 與 fMRI 等訓練。研究興趣為失智症早期偵測，致力結合語言、聽覺處理與多模態生物標記，希望透過 I-9-11 醫工量子計畫，為臺灣帶回適用於華語高齡者的非侵入式篩檢工具。",
    "del.bio.pan":"我剛從多倫多大學藥理與毒理學系取得碩士學位，研究領域為阿茲海默症的神經精神症狀，包括大麻素相關藥物的治療潛力，以及神經發炎（特別是星形膠質細胞增生）在阿茲海默症躁動病理中的角色。希望透過本計畫拓展所學，並應用於臺灣的新藥開發與臨床試驗。",
    "del.bio.wang":"背景橫跨經濟學與生醫工程，近期研究聚焦於腦機介面與深度學習的開發。",
    "del.bio.hsieh":"獨立 App 開發者，同時也是一名醫師。",
    "del.bio.jewel":"Jewel 是布蘭迪斯大學神經科學與生物化學學士生。目前在 Thomas Pochapsky 與 Yihan Shao 教授指導下研究 P450cam 蛋白，探索結合分子動力學與 AI 的可能性。閒暇時喜歡觀察人群、聆聽拉赫曼尼諾夫，以及探訪新的烘焙坊。",
    "del.tung.s":"國立臺灣大學 · 機械工程學系（畢業）","del.jewel.s":"布蘭迪斯大學 · 神經科學與生物化學",
    "deleg.staffNames":"顏宏融 院長 · 吳家樂 教授",
    "del.lee.s":"國立清華大學 · 物理學系與電機資訊學院學士班（雙主修）","del.wang.s":"陽明交通大學 · 智慧醫療電子工程研究所","del.liu.s":"亞洲大學 · 聽力暨語言治療學系","del.chen.s":"芝加哥大學 · 應用資料科學","del.hsieh.s":"馬偕醫學院 · 醫學系","del.pan.s":"多倫多大學 · 藥理與毒理學（碩士）","del.clee.s":"國立臺灣大學 · 醫學院生理學","del.cheng.s":"牛津大學 · 博士候選人",

    /* news / press release */
    "news.title":"量子、生醫、AI 三線並進","news.sub":"UCLA 菁英計畫學子完成前兩週紮實淬鍊","news.lede":"由教育部「青年百億海外圓夢基金計畫」支持、亞洲大學主辦，並與美國加州大學洛杉磯分校（UCLA）量子科學與工程中心（CQSE）學術合作的「2026 UCLA 生醫工程×量子科學菁英計畫」，自 7 月 7 日在 UCLA 工學院正式展開以來，已順利完成為期九週研習中的前兩週課程。來自台灣各機構的學子走進世界頂尖學術殿堂，親身接觸量子科學、生醫工程與人工智慧三大前沿領域。計畫由 UCLA 講座教授、中央研究院王康隆院士擘劃課程願景並串聯 UCLA 世界級師資與實驗室網絡，亞洲大學黃光彩講座教授則擔任計畫主持人，統籌跨國資源與整體推動方向。從量子力學的基本概念，到人工智慧如何重塑全球經濟，再到跨領域的生醫科技應用，學子們在密集的課堂與實作中，逐步建立起橫跨物理、工程與醫學的知識版圖，並在分組合作中完成了兩項具國際水準的創新研究提案。","news.s1h":"走進量子世界：從物理巨人的故事說起","news.s1b":"第一週的課堂上，黃光旭博士（Dr. KS John Huang）以「從日常科技到量子世界」為題，帶領學子跨越古典與量子的邊界，並以「疊加」、「測不準原理」、「觀察者效應」與「量子躍遷」四個核心概念，勾勒出量子世界與日常直覺截然不同的樣貌。他同時分享了物理巨人的生命故事：愛因斯坦 26 歲便發表四篇奇蹟論文，奠定日後獲頒諾貝爾物理獎的基礎；特斯拉曾遭愛迪生打壓排擠，卻始終不曾放棄，最終以創新改變了世界。這些故事也為學子傳遞出一個訊息：真正的突破，往往來自對既有框架的挑戰與堅持。","news.cap1":"黃光旭博士講解量子感測概念","news.s2h":"量子運算解密：窺探下一代運算革命","news.s2b":"第一週的課程中，UCLA 量子科學與工程中心（CQSE）執行主任 Mark Gyure 博士深入講解量子科學與工程的基礎，說明量子電腦如何運用量子力學原理處理資訊。量子位元（qubit）透過疊加特性可同時代表 0 與 1，直到被測量的瞬間才會確定；多個量子位元之間則可透過「糾纏」產生關聯，形成古典電腦難以達成的運算能力。然而量子態極為脆弱，容易因「去相干」而失真，因此量子錯誤修正與容錯機制成為關鍵技術挑戰。課堂並以秀爾演算法（Shor's algorithm）為例，說明量子演算法在特定問題上超越古典演算法的潛力；目前主流量子裝置多屬「含噪中等規模量子」（NISQ）階段，而矽量子位元因具備較長的同調時間，被視為極具潛力的技術路徑。","news.cap2":"Mark Gyure 博士講解量子閘門概念","news.s3h":"AI 浪潮下的新經濟版圖","news.s3b":"同一週，UCLA 安德森經濟預測中心（UCLA Anderson Forecast）的 William Yu 博士以「AI 時代的新經濟與新商業」為題，剖析人工智慧對經濟與社會結構的深遠衝擊。他指出，掌握 AI 與科技資源的高教育、高財富族群正持續拉大社會分化，「全民基本收入」被視為可能的緩解方案之一。課程亦點出 AI 帶來的錯誤資訊風險：部分模型可能因訓練資料來源單一、缺乏獨立查證而產生偏誤，因此開放市場競爭，搭配以封閉且經過驗證的資料庫訓練 AI，被視為可能的解方。至於就業市場，許多舊型態工作正逐漸被 AI 取代，而由 AI 強化生產力、非取代性質的新型工作需求則持續增加；其中醫療專業人員、健身教練等仰賴人際連結的工作，也相對較能保有不可取代性。","news.cap3":"William Yu 博士於課堂與學員及志工合影","news.s4h":"深化量子科學：從最小作用量原理談人生哲理","news.s4b":"第二週，黃光旭博士再度回到課堂，延續量子科學的基礎課程。內容涵蓋「歸一化」（機率或量子機率幅之和收斂為 1）與「尺度縮放」（運算成本可能呈對數、線性、二次或指數成長）等概念，並介紹量子科技的五大應用領域：運算、模擬、通訊、感測與成像。他說明量子運算處理資訊、量子感測則透過量子態變化估算物理量，而振幅與相位、量子干涉、糾纏等概念進一步揭示量子系統獨有的行為，其代表性應用之一即為磁共振造影（MRI）。課程尾聲，他分享了生命中最重要的原則「最小作用量原理」，認為人生的路徑應在「付出的努力」與「長遠的益處」之間取得平衡，而非只求眼前的輕鬆，並介紹了「全息原理」。當天下午，學子在 Iris Yang 教授帶領下進行「教學回饋」（Teach-back），彼此分享所學，透過教學相長深化理解。","news.cap4":"黃光旭博士向學員講授量子細胞自動機（QCA）","news.cap5":"Iris Yang 教授帶領學員進行「教學回饋」","news.s5h":"太赫茲科技：跨足生醫與工業應用","news.s5b":"第二週的課程中，Mona Jarrahi 博士講授太赫茲（THz）技術的核心特性與應用挑戰。太赫茲波介於電子學與光子學之間的「縫隙」頻段：電子元件在此高頻範圍面臨轉換極限，光子雷射則缺乏對應的天然半導體材料，目前多以飛秒雷射照射光導材料產生電流脈衝、進而發射太赫茲訊號。太赫茲光子能量低、安全性高，能提供高對比度的表面成像與精細的深度解析度，然而它無法穿透金屬與水。結合人工智慧與衍射光學後，太赫茲仍展現多元潛力：不同材料具有獨特光譜特徵，脈衝式時域系統可用於辨識毒品、食品毒素、燒傷組織，甚至協助發現新的量子材料；在工業上亦可用於行李與化學物質安檢，以及飛機塗層缺陷的即時監測。","news.cap6":"Mona Jarrahi 博士與學員於課後合影","news.s6h":"學子跨域創新：量子與生醫交會的研究提案","news.s6b":"兩週課程的另一項重點，是學子分組完成的研究專案提案，展現量子科學與生醫工程跨域結合的創新能量。","news.team1":"由陳融、解展維、李騏維、董育瑄、劉家瑜組成的 MimiQular 團隊，聚焦古典與量子輔助運算能否預測與神經系統自體免疫疾病相關的細菌分子模擬現象。研究以曲狀桿菌（Campylobacter jejuni）的脂寡糖（LOS）為對象，其糖結構可能與人類神經節苷脂相似，進而引發抗體交叉反應，與格林巴利症候群（Guillain-Barré syndrome）等疾病相關。團隊建立了一套具透明度的九項結構特徵模型，成功排序潛在的神經節苷脂模擬物，並發現細部結構樣式比單純的糖組成更具預測力；模擬量子核方法雖經測試，但尚未展現優於強效古典機器學習方法的優勢。","news.cap7":"MimiQular 團隊於課餘時間討論研究專案提案","news.team2":"由王泊善、李卓明、王安泊、潘家怡組成的 MICE-ARIA 團隊，致力開發 AI 輔助方法，尋找以中醫藥（TCM）為基礎的策略，緩解阿茲海默症抗類澱粉樣蛋白治療所引發的類澱粉樣蛋白相關影像異常（ARIA）。雖然 lecanemab、donanemab 等療法已展現促進 Aβ 清除的臨床效益，但常受限於 ARIA 帶來的神經併發症風險。團隊觀察到中醫藥衍生化合物具備調節神經發炎路徑的潛力，透過建立以圖神經網路為基礎的排序系統，預測中醫藥化合物與 ARIA 相關靶點的交互作用，並整合文獻回顧、公開資料庫與 AI 深度學習，期能為患者提供更安全的治療策略。","news.concl":"兩週紮實的沉浸式學習，讓來自台灣各機構的學子不僅掌握了量子科學、量子運算與人工智慧的核心概念，更透過分組研究將課堂所學轉化為具體的跨域創新提案。從物理巨人堅持不懈的生命故事，到「最小作用量原理」所蘊含的人生哲理，再到太赫茲科技與生醫研究的前沿應用，這段 UCLA 研習之旅不僅拓展了學子的科研視野，也為他們日後投身跨領域研究，奠定了扎實的第一步。","news.conclh":"結語","nav.news":"最新消息",

    /* journal */
    "journal.title":"影像日誌。","journal.note":"媒體組正以照片紀錄這六十天。以下已收錄第 1、2 週的實拍影像，其餘將隨計畫進行陸續補上。",
    "journal.state":"狀態：拍攝中 · 已記錄第 1–2 週 · D01–D60","journal.weeksLogged":"第 1–2 週 · 已記錄","journal.weeksPending":"第 3–9 週 · 等待拍攝","journal.venues":"場館與情境",

    /* 404 */
    "nf.title":"這條路徑尚未被量測。","nf.state":"state: |ψ⟩ unresolved · no measurement at this path",
    "nf.sub":"此處的波函數沒有坍縮成頁面。請選一個已量測的頁面。","nf.back":"回到首頁"
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  nodes.forEach(function (el) { el.setAttribute("data-en", el.innerHTML); });
  var btn = document.getElementById("lang-switch");
  function apply(lang) {
    var zh = lang === "zh";
    document.body.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", zh ? "zh-Hant" : "en");
    nodes.forEach(function (el) { var k = el.getAttribute("data-i18n"); el.innerHTML = zh ? (ZH[k] != null ? ZH[k] : el.getAttribute("data-en")) : el.getAttribute("data-en"); });
    if (btn) { btn.setAttribute("aria-pressed", zh ? "true" : "false"); btn.querySelectorAll("[data-lang-opt]").forEach(function (o) { o.classList.toggle("on", o.getAttribute("data-lang-opt") === lang); }); }
    try { localStorage.setItem("ucla-lang", lang); } catch (e) {}
    if (window.__refreshInstruments) window.__refreshInstruments();
    if (window.ScrollTrigger && window.ScrollTrigger.refresh) window.ScrollTrigger.refresh();
  }
  var saved = "en"; try { saved = localStorage.getItem("ucla-lang") || "en"; } catch (e) {}
  apply(saved);
  if (btn) btn.addEventListener("click", function () { apply(document.body.getAttribute("data-lang") === "zh" ? "en" : "zh"); });
  window.__lang = function () { return document.body.getAttribute("data-lang") || "en"; };
})();
