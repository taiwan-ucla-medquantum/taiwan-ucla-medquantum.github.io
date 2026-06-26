/* ── Bilingual binding. EN is inline (source of truth); this provides 繁中. ──
   EN mode shows English only, except 青年百億計畫 and personal Chinese names
   (those live inline in the HTML and are never swapped).                        */
(function () {
  "use strict";
  var ZH = {
    "nav.home":"首頁","nav.program":"計畫綱要","nav.curriculum":"九週課程","nav.faculty":"講者陣容","nav.delegation":"代表團","nav.journal":"影像日誌",
    "rail.from":"臺灣","field.med":"醫學","field.q":"量子",

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

    /* faculty */
    "faculty.title":"教導這六十天的人。",
    "faculty.note":"客座師資與講者，依其帶來的領域分組。職稱與研究領域依計畫講者名單查證。",
    "band.quantum":"量子科學與工程","band.neuro":"神經科學與腦","band.pharma":"藥理、生物標記與生命科學",
    "band.digital":"數位健康與資料","band.integrative":"整合醫學與中醫","band.program":"計畫領導 · 臺灣",
    "fac.wang":"量子材料與元件、自旋電子學、拓樸絕緣體。中央研究院院士，亞洲大學量子 AI 研究中心榮譽主任。",
    "band.industry":"業界與公部門",
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
    "fac.iris.r":"計畫 · 學術顧問暨課程協調","fac.iris.a":"數學家暨認證資料科學家；量化金融、因果推論與應用機器學習。加州州立大學洛杉磯分校兼任數學教授，並於哈佛進修部進修資料科學。",
    "fac.gyure.r":"UCLA CQSE · 執行主任；電機工程兼任教授","fac.gyure.a":"固態量子資訊處理、半導體量子點、量子元件架構與模擬。",
    "fac.yan.r":"UPSUNS Diamond · CYAN Consulting（前卡內基研究院）· 創辦人／負責人","fac.yan.a":"單晶 CVD/MPCVD 鑽石生長、鑽石基板與熱學／半導體材料。",
    "fac.luo.r":"Anyon Technologies · 共同創辦人暨執行長","fac.luo.a":"超導量子計算、量子處理器與系統、混合量子-古典與模組化架構。",
    "fac.bedi.r":"史丹佛醫學院（耳鼻喉頭頸外科）· 哈佛 · 臨床研究協調員暨應用機器學習研究者","fac.bedi.a":"臨床研究、應用機器學習、多模態 AI、腫瘤學與數位健康。",
    "fac.lin.r":"PredictionProbe 公司 · 創辦人暨技術長","fac.lin.a":"不確定性量化、機率技術、可靠度最佳化、預測建模。",
    "fac.chou.r":"駐洛杉磯台北經文處 · 科技組組長（國科會）","fac.chou.a":"科技外交、臺美學術合作、海外科技計畫協調。",

    /* delegation */
    "deleg.title":"九位學員，三個專題分組。",
    "deleg.note":"九人團隊與就讀單位。專題 A、B、C 組貫穿九週。",
    "deleg.independent":"獨立學員","deleg.staff":"隨團教師",
    "lbl.volunteers":"義工團","vol.title":"義工團隊。","vol.note":"於計畫期間協助代表團的學員，分為 D、E 兩組。","vol.role":"義工",
    "del.introbtn":"自我介紹","del.introph":"這位學員的自我介紹將在此補上。",
    "deleg.staffNames":"顏宏融 院長 · 吳家樂 教授",
    "del.lee.s":"國立清華大學 · 物理（天文物理）與電機資訊","del.wang.s":"陽明交通大學 · 智慧醫療電子工程研究所","del.liu.s":"亞洲大學 · 聽力暨語言治療學系","del.chen.s":"芝加哥大學 · 應用資料科學","del.hsieh.s":"馬偕醫學院 · 醫學系","del.pan.s":"多倫多大學 · 藥理學（碩士）","del.clee.s":"國立臺灣大學 · 醫學院生理學","del.cheng.s":"牛津大學 · 博士候選人",

    /* journal */
    "journal.title":"影像日誌。","journal.note":"媒體組將以照片與短片紀錄這六十天。本頁先保留版位，活動開始後填入實拍影像。",
    "journal.state":"狀態：等待拍攝 · D01–D60",

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
