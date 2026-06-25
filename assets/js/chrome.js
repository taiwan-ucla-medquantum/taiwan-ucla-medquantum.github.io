/* ── Shared chrome ──
   Injects nav (7 pages + lang + hamburger), the measurement rail, and the
   footer into every page (buildless, no fetch). Runs before i18n.js so the
   [data-i18n] nodes it creates get captured/translated.                        */
(function () {
  "use strict";
  var page = document.body.getAttribute("data-page") || "home";
  var NAV = [
    ["home", "index.html", "Home"], ["program", "program.html", "Program"],
    ["curriculum", "curriculum.html", "Curriculum"], ["faculty", "faculty.html", "Faculty"],
    ["delegation", "delegation.html", "Delegation"], ["journal", "journal.html", "Journal"]
  ];
  var links = NAV.map(function (n) {
    return '<a class="nav__link" href="' + n[1] + '" data-i18n="nav.' + n[0] + '"' +
      (n[0] === page ? ' aria-current="page"' : '') + '>' + n[2] + '</a>';
  }).join("");

  var nav = document.createElement("header");
  nav.className = "nav"; nav.id = "nav";
  nav.innerHTML =
    '<a class="nav__brand" href="index.html" aria-label="I-9-11 醫工量子：UCLA 菁英計畫 — home"><b>I-9-11</b><span lang="zh-Hant">醫工量子</span></a>' +
    '<nav class="nav__links" aria-label="Primary">' + links + '</nav>' +
    '<button class="nav__lang" id="lang-switch" type="button" aria-pressed="false" aria-label="Switch language to Traditional Chinese">' +
      '<span class="o on" data-lang-opt="en">EN</span><span aria-hidden="true">/</span><span class="o" data-lang-opt="zh" lang="zh-Hant">中文</span></button>' +
    '<button class="nav__burger" id="nav-burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>';

  var rail = document.createElement("aside");
  rail.className = "rail"; rail.id = "rail"; rail.setAttribute("aria-hidden", "true");
  rail.innerHTML =
    '<div class="rail__now"><b id="rail-now">D00</b><span>/ D60</span></div>' +
    '<div class="rail__ruler" id="ruler"></div>' +
    '<svg class="rail__signal" id="signal" viewBox="0 0 60 1000" preserveAspectRatio="none" focusable="false"><path id="signal-path" d=""/></svg>' +
    '<span class="rail__week" id="rail-week">W—</span>';

  var foot = document.createElement("footer");
  foot.className = "foot";
  foot.innerHTML =
    '<div class="foot__grid">' +
      '<p class="foot__state" id="foot-state">state: measured · program defined</p>' +
      '<p class="foot__line mono" style="color:var(--paper-dim)">2026 / 07 / 06 — 2026 / 09 / 03 · 9 weeks · 60 days</p>' +
      '<div>' +
        '<p class="foot__line"><span class="mono" data-i18n="org.organized">Organized by · 承辦單位</span> Asia University 亞洲大學</p>' +
        '<p class="foot__line"><span class="mono" data-i18n="org.partner">Partner · 合作單位</span> TAITA-East 美東台美產業科技協會</p>' +
        '<p class="foot__line"><span class="mono" data-i18n="org.academic">Academic Partner · 學術合作單位</span> UCLA CQSE</p>' +
        '<p class="foot__line"><span class="mono" data-i18n="org.co">Co-organized by · 學術合作單位</span> UCLA Samueli · David Geffen School of Medicine · UCLA Joe C. Wen School of Nursing</p>' +
      '</div>' +
      '<div class="logos" aria-label="Institution logos">' +
        '<img src="assets/img/moe.png" alt="Ministry of Education, Taiwan" loading="lazy">' +
        '<img src="assets/img/asia-university.png" alt="Asia University" loading="lazy">' +
        '<img src="assets/img/ucla-wordmark.svg" alt="UCLA" loading="lazy">' +
        '<img src="assets/img/ucla-cqse.png" alt="UCLA CQSE" loading="lazy">' +
        '<img src="assets/img/ucla-samueli.svg" alt="UCLA Samueli School of Engineering" loading="lazy">' +
        '<img src="assets/img/ucla-geffen-medicine.svg" alt="David Geffen School of Medicine at UCLA" loading="lazy">' +
        '<img src="assets/img/ucla-nursing.svg" alt="UCLA Joe C. Wen School of Nursing" loading="lazy">' +
      '</div>' +
      '<nav class="foot__nav" aria-label="Footer">' +
        '<a href="index.html" data-i18n="nav.home">Home</a><a href="program.html" data-i18n="nav.program">Program</a>' +
        '<a href="curriculum.html" data-i18n="nav.curriculum">Curriculum</a><a href="faculty.html" data-i18n="nav.faculty">Faculty</a>' +
        '<a href="delegation.html" data-i18n="nav.delegation">Delegation</a><a href="journal.html" data-i18n="nav.journal">Journal</a>' +
      '</nav>' +
      '<p class="foot__fine" data-i18n="imprint.note">A student-built field-journal site for the I-9-11 delegation. Program details may be adjusted by the program team. Content reflects the 2026 syllabus and verified speaker roster.</p>' +
      '<p class="foot__fine">Royce Hall photograph: Beyond My Ken, CC BY-SA 4.0, via Wikimedia Commons. Institution logos are the trademarks of their respective owners. · Vol. 2026 · UCLA × 亞洲大學</p>' +
    '</div>';

  var pageEl = document.querySelector(".page");
  if (pageEl) { document.body.insertBefore(nav, pageEl); document.body.insertBefore(rail, pageEl); }
  else { document.body.insertBefore(rail, document.body.firstChild); document.body.insertBefore(nav, document.body.firstChild); }
  document.body.appendChild(foot);

  var burger = document.getElementById("nav-burger");
  burger.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.querySelectorAll(".nav__link").forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); });
  });
})();
