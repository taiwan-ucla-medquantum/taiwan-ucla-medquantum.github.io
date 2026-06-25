/* ── Shared chrome: progress bar, nav (theme + lang + burger), footer ──
   Buildless, injected per page. Runs before i18n.js so its [data-i18n] nodes
   get captured/translated.                                                     */
(function () {
  "use strict";
  var page = document.body.getAttribute("data-page") || "home";
  var NAV = [["home","index.html","Home"],["program","program.html","Program"],["curriculum","curriculum.html","Curriculum"],
    ["faculty","faculty.html","Faculty"],["delegation","delegation.html","Delegation"],["journal","journal.html","Journal"]];
  var links = NAV.map(function (n) { return '<a class="nav__link" href="' + n[1] + '" data-i18n="nav.' + n[0] + '"' + (n[0] === page ? ' aria-current="page"' : '') + '>' + n[2] + '</a>'; }).join("");

  var sun = '<svg class="theme-day" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon = '<svg class="theme-night" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  var rail = document.createElement("div"); rail.className = "railbar"; rail.id = "railbar"; rail.setAttribute("aria-hidden", "true");
  rail.innerHTML =
    '<span class="railbar__end"><span class="railbar__dot"></span><span data-i18n="rail.from">Taiwan</span></span>' +
    '<span class="railbar__path"><span class="railbar__line"></span><span class="railbar__trail" id="rail-trail"></span>' +
      '<span class="railbar__plane" id="rail-plane"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><g transform="rotate(90 12 12)"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></g></svg></span></span>' +
    '<span class="railbar__end"><span>LA</span><span class="railbar__dot railbar__dot--to"></span></span>';

  var nav = document.createElement("header");
  nav.className = "nav"; nav.id = "nav";
  nav.innerHTML =
    '<a class="nav__brand" href="index.html" aria-label="I-9-11 醫工量子：UCLA 菁英計畫 · home"><b>I-9-11</b><span lang="zh-Hant">醫工量子</span></a>' +
    '<nav class="nav__links" aria-label="Primary">' + links + '</nav>' +
    '<div class="nav__tools">' +
      '<button class="iconbtn" id="theme-switch" type="button" aria-label="Toggle day / night theme">' + sun + moon + '</button>' +
      '<button class="nav__lang" id="lang-switch" type="button" aria-pressed="false" aria-label="Switch language to Traditional Chinese"><span class="o on" data-lang-opt="en">EN</span><span aria-hidden="true">/</span><span class="o" data-lang-opt="zh" lang="zh-Hant">中文</span></button>' +
      '<button class="nav__burger" id="nav-burger" type="button" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
    '</div>';

  var foot = document.createElement("footer");
  foot.className = "foot";
  foot.innerHTML =
    '<div class="foot__grid">' +
      '<p class="foot__line mono" id="foot-state" style="color:var(--accent)">state: measured · program defined</p>' +
      '<p class="foot__line mono">2026.07.06 – 09.03 · 9 weeks · 60 days · UCLA Westwood</p>' +
      '<div>' +
        '<p class="foot__line" data-i18n="foot.org1"><span class="mono">Organized by</span> Asia University</p>' +
        '<p class="foot__line" data-i18n="foot.org2"><span class="mono">Partner</span> TAITA-East</p>' +
        '<p class="foot__line" data-i18n="foot.org3"><span class="mono">Academic partner</span> UCLA Center for Quantum Science &amp; Engineering (CQSE)</p>' +
        '<p class="foot__line" data-i18n="foot.org4"><span class="mono">Co-organized by</span> UCLA Samueli · David Geffen School of Medicine · UCLA Joe C. Wen School of Nursing</p>' +
        '<p class="foot__line" data-i18n="foot.initiative"><span class="mono">Under</span> Taiwan Global Pathfinders Initiative（青年百億海外圓夢基金計畫）</p>' +
      '</div>' +
      '<div class="logos" aria-label="Institution logos">' +
        '<img src="assets/img/moe.png" alt="Ministry of Education, Taiwan" loading="lazy">' +
        '<img src="assets/img/asia-university.png" alt="Asia University" loading="lazy">' +
        '<img src="assets/img/taita-east.png" alt="TAITA-East · Taiwanese American Industrial Technology Association" loading="lazy">' +
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
      '<p class="foot__fine" data-i18n="imprint.note">Student-built site for the I-9-11 delegation. Program details may be adjusted by the program team. Content reflects the 2026 syllabus and verified speaker roster.</p>' +
      '<p class="foot__fine">Photos: Royce Hall, Powell Library &amp; MRI by Beyond My Ken / Ptrump16 (CC BY-SA 4.0); UCLA aerial by Alfred Twu &amp; LA skyline (CC0); IBM Quantum System One by Onri Jay Benally (CC BY 4.0); headshots of K. Wang &amp; M. Jarrahi (Wikimedia Commons). Logos are trademarks of their owners. Via Wikimedia Commons.</p>' +
    '</div>';

  var pageEl = document.querySelector(".page");
  document.body.insertBefore(rail, document.body.firstChild);
  if (pageEl) { document.body.insertBefore(nav, pageEl); } else { document.body.insertBefore(nav, document.body.firstChild.nextSibling); }
  document.body.appendChild(foot);

  // theme toggle
  var tbtn = document.getElementById("theme-switch");
  tbtn.addEventListener("click", function () {
    var night = document.documentElement.getAttribute("data-theme") === "night";
    if (night) { document.documentElement.removeAttribute("data-theme"); } else { document.documentElement.setAttribute("data-theme", "night"); }
    try { localStorage.setItem("ucla-theme", night ? "day" : "night"); } catch (e) {}
  });

  // burger
  var burger = document.getElementById("nav-burger");
  burger.addEventListener("click", function () { var o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", o ? "true" : "false"); });
  nav.querySelectorAll(".nav__link").forEach(function (a) { a.addEventListener("click", function () { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }); });
})();
