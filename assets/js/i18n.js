/* ── Bilingual binding (EN inline = source of truth; this swaps in 繁中) ── */
(function () {
  "use strict";
  var ZH = {
    "nav.home": "首頁", "nav.program": "計畫綱要", "nav.curriculum": "九週課程",
    "nav.faculty": "講者陣容", "nav.delegation": "代表團", "nav.journal": "影像日誌",

    "org.organized": "承辦單位 · Organized by", "org.partner": "合作單位 · Partner",
    "org.academic": "學術合作單位 · Academic Partner", "org.co": "學術合作單位 · Co-organized by",
    "imprint.note": "這是 I-9-11 代表團由學員打造的田野手記。計畫細節得由計畫團隊調整。內容依 2026 課程大綱與查證後的講者名單。",

    /* home */
    "home.tagline": "在 UCLA 的六十天——生醫工程與量子科學在此交會。",
    "stat.days": "在 UCLA 天數", "stat.weeks": "研習週數", "stat.delegates": "臺灣學員", "stat.host": "主辦學府",
    "home.signalsTitle": "四個領域，誠實以對。", "home.signalsNote": "兩個屬於醫學，兩個屬於量子——每個都對應一種波形。",
    "home.briefTitle": "一份在醫學與量子交界的田野研究。",
    "home.briefLede": "九位來自臺灣的學員，在 2026 年 7 月 6 日至 9 月 3 日的六十天裡，於 UCLA 閱讀生醫工程與量子科學交會的最前沿。本站是他們的田野手記。",
    "cta.program": "閱讀計畫綱要", "cta.curriculum": "看九週課程", "cta.faculty": "認識講者", "cta.delegation": "代表團",

    /* program */
    "brief.title": "在醫學與量子交界處的一次田野研究。",
    "brief.lede": "九位來自臺灣的學員在 UCLA 度過六十天——自 <strong>2026 年 7 月 6 日至 9 月 3 日</strong>——閱讀生醫工程與量子科學交會的最前沿。",
    "brief.p2": "本計畫隸屬臺灣<strong>「青年百億海外圓夢基金計畫」</strong>（教育部青年發展署 · Taiwan Global Pathfinders Initiative · 海外翱翔組）。由<strong>亞洲大學</strong>承辦、<strong>美東台美產業科技協會（TAITA-East）</strong>合作，並由 <strong>UCLA 量子科學與工程中心（CQSE）</strong>於學術上主辦，與 UCLA Samueli 工學院、David Geffen 醫學院及 UCLA Joe C. Wen 護理學院共同協辦。",
    "brief.p3": "計畫由 UCLA 傑出教授、CQSE 主任之一<strong>王康隆教授（Kang L. Wang）</strong>領銜。代表團刻意維持小規模——九位不同年齡與專業背景的學員——讓每個人都能上台報告、提問、動手實作，而非旁觀。",
    "themes.title": "四個領域，誠實以對——也是後文的圖例。",
    "themes.note": "每個主題對應一種波形，並在你閱讀時於邊欄重複出現。兩個屬於醫學，兩個屬於量子。",
    "theme.brain.t": "AI <span class=\"cross\">×</span> 腦與神經科學",
    "theme.brain.d": "臨床上最成熟的一條線。深度學習可判讀 MRI／PET；2025 年美國核准了史上第一個阿茲海默症血液檢測——但這個領域仍將 AI 視為輔助判讀，而非自主診斷。誠實，勝過炒作。",
    "theme.drug.t": "AI <span class=\"cross\">×</span> 新藥與中醫",
    "theme.drug.d": "AI 正加速臨床前研究，並透過網路藥理學延伸至中醫。截至 2025 年，尚無任何由 AI 發現的藥物上市——前景真實，時程務實。",
    "theme.qc.t": "量子計算 <span class=\"cross\">×</span> 分子與藥物預測",
    "theme.qc.d": "最不成熟、討論最多。今日含噪的量子裝置尚無法模擬真實藥物分子；實質價值普遍被放在 2030 年代。我們研究它真正能幫上忙、以及尚未能之處。",
    "theme.conv.t": "生醫工程 <span class=\"cross\">×</span> 量子匯流",
    "theme.conv.d": "這股匯流正在頂尖大學制度化——用於生物磁造影的量子感測、儀器與材料。前瞻、早期，正是這支代表團被派去閱讀的前沿。",
    "daily.title": "一天是如何構成的。",
    "day.am.t": "上午——輸入", "day.am.d": "一場師資或講者演講、一次實驗室參訪，或一段主題導論。做筆記、記下問題，為下午的產出做準備。",
    "day.pm.t": "下午——產出", "day.pm.d": "每日教學回講：三組各報告八到十分鐘，再加五分鐘問答——用自己的話講出當天所學。接著是專題工作坊。",
    "day.close.t": "每日收束", "day.close.d": "每位學員一份可追溯的學習紀錄：三個收穫、一個仍感困惑的問題，以及一個下一步。",
    "day.weekend.t": "週末", "day.weekend.d": "自主的城市與創新探索、休息與個人反思。沒有正式產出——也不是補課時間。",

    /* curriculum */
    "curriculum.title": "六十天，九週。上午輸入，下午產出。",
    "curriculum.note": "頁面的切分一如每一天：左側是上午的輸入，右側是下午的產出，中間以「正午之線」分隔。桌機水平推進，手機改為垂直能階梯。",
    "codex.morning": "上午 · 輸入", "codex.afternoon": "下午 · 產出",
    "io.input": "上午 · 輸入", "io.output": "下午 · 產出",
    "w1.t": "量子科學、AI 與資料分析",
    "w1.in": "抵達與行前說明，接著從日常科學進入量子世界——光子相吻、電子，以及 AI 與生物學共享的語言。量子科學與工程的基礎。講者：KS Huang（黃光旭）、Mark Gyure（UCLA CQSE）、William Yu（UCLA Anderson）。",
    "w1.out": "跨越電子、光子、量子科學與 AI 的共同詞彙概念圖——以三分鐘的教學回講作結。",
    "w2.t": "生物、生命科學與健康資料",
    "w2.in": "量子科學與技術於感測、影像、計算、通訊、AI 與生醫的應用——包含與 Mona Jarrahi（UCLA）的兆赫電子與光子學。",
    "w2.out": "一份整合電子、光子、量子科學與 AI 架構的未來電腦系統設計。",
    "w3.t": "神經科學與腦研究",
    "w3.in": "神經科學與工程；與 C.Y. Daniel Lee 的神經行為遺傳學與神經退化疾病；以光子、電子、量子與 AI 打造的未來健康科技；與 Gina Poe（UCLA 腦研究所）的腦研究與實驗室參訪。",
    "w3.out": "一個健康感測案例：選擇一種疾病或社會問題，為其設計感測或 AI 解決方案。",
    "w4.t": "量子科學、半導體與材料",
    "w4.in": "量子科學與工程及實驗室參訪（Richard Ross）；半導體技術（Marko Sokolich）；太陽能與材料科學（Yang Yang）；以及 Gina Poe 持續的腦研究。",
    "w4.out": "一份關於量子科學、半導體、材料或神經科學應用的實驗室或技術案例研究。",
    "w5.t": "醫藥藥理、奈米科技與生物標記",
    "w5.in": "銜接工作坊與詞彙特訓，接著與 Hsian-Rong Tseng（UCLA／David Geffen 醫學院）的奈米科技、液態切片、生物標記與數位分身；與 Yuan Tian 的健康與資安資料科學；以及匯流的生命科學與生醫工程。",
    "w5.out": "一份生物標記或數位分身的迷你提案——問題、資料、方法與風險。",
    "w6.t": "數位健康與創新",
    "w6.in": "與 Bijan Najafi（UCLA／David Geffen 醫學院）的數位健康與創新；資料視覺化與敘事技能工作坊；與王康隆的量子系統現況；與 Alan Ho（QoLab）的超導量子計算；與 Li-Fan Lu（UC San Diego）的免疫學與調節型 T 細胞。",
    "w6.out": "一個數位健康原型——使用者旅程、資料流，以及倫理／隱私考量。",
    "w7.t": "整合醫學與傳統中醫",
    "w7.in": "與顏宏融（中國醫藥大學）的中醫、整合醫學、草藥與針灸；與 Ka-Kit Hui（UCLA 中西醫結合中心）的中西整合醫學；以及半導體與鑽石技術。",
    "w7.out": "一份整合醫學的證據地圖——傳統與現代醫學如何彼此啟發與驗證。",
    "w8.t": "量子科學／應用量子",
    "w8.in": "與 Robert Huang（Caltech）的理論量子神經形態運算；從硬體到演算法的量子平台；量子資訊與應用量子科學。",
    "w8.out": "一份期末專題草稿——研究問題、技術路徑、預期影響與限制。",
    "w9.t": "最終整合、成果報告與返國",
    "w9.in": "期末專題彩排與同儕互評——以評分量表計分、時間掌控與簡報敘事修訂。",
    "w9.out": "期末成果發表會——完整專題報告、個人反思、成果作品集與感謝函。隨後返回臺灣。",

    /* faculty */
    "faculty.title": "教導這六十天的人。",
    "faculty.note": "客座師資與講者，依其帶來的領域分組——職稱與研究領域依計畫講者名單查證。",
    "band.quantum": "量子科學與工程", "band.neuro": "神經科學與腦",
    "band.pharma": "藥理、生物標記與生命科學", "band.digital": "數位健康與資料",
    "band.integrative": "整合與中醫", "band.program": "計畫領導 · 臺灣",
    "fac.wang": "量子材料與元件、自旋電子學、拓樸絕緣體。中央研究院院士；亞洲大學量子 AI 研究中心榮譽主任。",

    /* delegation */
    "deleg.title": "九位學員。三個專題分組。",
    "deleg.note": "九人團隊，附就讀單位。專題 A、B、C 組貫穿九週。",
    "deleg.independent": "獨立學員", "deleg.staff": "隨團教師",

    /* journal */
    "journal.title": "影像日誌。",
    "journal.note": "媒體組將以照片與短片紀錄這六十天。本頁先以佔位格保留版位，活動開始後填入實拍影像。",
    "journal.state": "state: pending capture · D01–D60",

    /* 404 */
    "nf.title": "這條路徑尚未被量測。",
    "nf.state": "state: |ψ⟩ unresolved · no measurement at this path",
    "nf.back": "回到已量測的頁面"
  };

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  nodes.forEach(function (el) { el.setAttribute("data-en", el.innerHTML); });
  var btn = document.getElementById("lang-switch");

  function apply(lang) {
    var zh = lang === "zh";
    document.body.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", zh ? "zh-Hant" : "en");
    nodes.forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      el.innerHTML = zh ? (ZH[k] != null ? ZH[k] : el.getAttribute("data-en")) : el.getAttribute("data-en");
    });
    if (btn) {
      btn.setAttribute("aria-pressed", zh ? "true" : "false");
      btn.setAttribute("aria-label", zh ? "切換語言為英文 · Switch to English" : "Switch language to Traditional Chinese · 切換為繁體中文");
      btn.querySelectorAll("[data-lang-opt]").forEach(function (o) { o.classList.toggle("on", o.getAttribute("data-lang-opt") === lang); });
    }
    try { localStorage.setItem("ucla-lang", lang); } catch (e) {}
    if (window.__refreshInstruments) window.__refreshInstruments();
    if (window.ScrollTrigger && window.ScrollTrigger.refresh) window.ScrollTrigger.refresh();
  }

  var saved = "en";
  try { saved = localStorage.getItem("ucla-lang") || "en"; } catch (e) {}
  apply(saved);
  if (btn) btn.addEventListener("click", function () { apply(document.body.getAttribute("data-lang") === "zh" ? "en" : "zh"); });
  window.__lang = function () { return document.body.getAttribute("data-lang") || "en"; };
})();
