/* ── Shared chrome: progress bar, nav (theme + lang + burger), footer ──
   Buildless, injected per page. Runs before i18n.js so its [data-i18n] nodes
   get captured/translated.                                                     */
(function () {
  "use strict";
  var page = document.body.getAttribute("data-page") || "home";
  var NAV = [["home","index.html","Home"],["program","program.html","Program"],["curriculum","curriculum.html","Curriculum"],
    ["faculty","faculty.html","Faculty"],["delegation","delegation.html","Delegation"],["news","news.html","News"],["journal","journal.html","Journal"]];
  var links = NAV.map(function (n) { return '<a class="nav__link" href="' + n[1] + '" data-i18n="nav.' + n[0] + '"' + (n[0] === page ? ' aria-current="page"' : '') + '>' + n[2] + '</a>'; }).join("");

  var sun = '<svg class="theme-day" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
  var moon = '<svg class="theme-night" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

  var rail = document.createElement("div"); rail.className = "railbar"; rail.id = "railbar"; rail.setAttribute("aria-hidden", "true");
  rail.innerHTML =
    '<span class="railbar__end"><span class="railbar__dot"></span><span data-i18n="rail.from">Taiwan</span></span>' +
    '<span class="railbar__path"><span class="railbar__line"></span><span class="railbar__ticks" id="ruler"></span><span class="railbar__trail" id="rail-trail"></span>' +
      '<span class="railbar__plane" id="rail-plane"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><g transform="rotate(90 12 12)"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></g></svg></span></span>' +
    '<span class="railbar__end"><span>LA</span><span class="railbar__dot railbar__dot--to"></span></span>' +
    '<span class="railbar__count" aria-label="page views" aria-live="off"><span class="railbar__count-dot"></span><span class="railbar__count-num" id="viewCount">—</span><span class="railbar__count-label" data-i18n="counter.label">views</span></span>';

  var nav = document.createElement("header");
  nav.className = "nav"; nav.id = "nav";
  nav.innerHTML =
    '<a class="nav__brand" href="index.html" aria-label="I-9-11 醫工量子：UCLA 菁英計畫 · home"><img class="nav__mark" src="assets/img/logo-badge.png" alt="" width="30" height="30" /><b>I-9-11</b><span lang="zh-Hant">醫工量子</span></a>' +
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
        '<img class="logo-taita" src="assets/img/TAITA.png" alt="TAITA-East · Taiwanese American Industrial Technology Association" loading="lazy">' +
        '<img src="assets/img/ucla-wordmark.svg" alt="UCLA" loading="lazy">' +
        '<img src="assets/img/ucla-cqse.png" alt="UCLA CQSE" loading="lazy">' +
        '<img src="assets/img/ucla-samueli.svg" alt="UCLA Samueli School of Engineering" loading="lazy">' +
        '<img src="assets/img/ucla-geffen-medicine.svg" alt="David Geffen School of Medicine at UCLA" loading="lazy">' +
        '<img src="assets/img/ucla-nursing.svg" alt="UCLA Joe C. Wen School of Nursing" loading="lazy">' +
      '</div>' +
      '<div class="foot__connect">' +'<span class="foot__connect-label mono" data-i18n="foot.follow">Follow the program</span>' +'<div class="foot__social">' +'<a class="social" href="https://www.facebook.com/people/UCLA-Biomedical-Engineering-Quantum-Science-Elite-Program/61591846618744/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg></a>' +'<a class="social" href="https://www.instagram.com/tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.4"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.4" cy="6.6" r="1.25" fill="currentColor" stroke="none"/></svg></a>' +'<a class="social" href="https://www.threads.com/@tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Threads"><svg viewBox="0 0 192 192" fill="currentColor" aria-hidden="true"><path d="M141.5 88.6c-.6-.3-1.3-.6-1.9-.9-1.1-20.7-12.4-32.5-31.4-32.6h-.3c-11.4 0-20.8 4.8-26.6 13.7l10.5 7.2c4.3-6.6 11.1-8 16.1-8h.2c6.2 0 10.9 1.8 13.9 5.4 2.2 2.6 3.7 6.2 4.4 10.7-5.3-.9-11-1.2-17.1-.8-17.2 1-28.3 11-27.5 24.9.4 7.1 3.9 13.2 10 17.1 5.1 3.3 11.7 4.9 18.5 4.6 9-.5 16.1-4 21-10.3 3.7-4.8 6.1-11 7.1-18.8 4.3 2.6 7.5 6 9.2 10.1 3 6.9 3.2 18.3-6.1 27.6-8.1 8.1-17.9 11.6-32.7 11.7-16.4-.1-28.8-5.4-36.9-15.6-7.6-9.6-11.5-23.4-11.6-41s3.9-31.4 11.6-41c8.1-10.2 20.5-15.5 36.9-15.6 16.5.1 29.1 5.4 37.5 15.7 4.1 5 7.2 11.3 9.3 18.7l12.3-3.3c-2.5-9.1-6.4-16.9-11.7-23.4C151.6 8.4 135.4 1.6 114.6 1.5h-.1C93.8 1.6 77.8 8.4 67 21.6 57.4 33.3 52.5 49.6 52.3 70.3v.4c.2 20.7 5.1 37 14.7 48.7 10.8 13.2 26.8 20 47.5 20.1h.1c18.4-.1 31.4-4.9 42.1-15.6 14-14 13.6-31.6 9-42.4-3.3-7.8-9.6-14.1-18.2-18.9zM115.2 122c-7.5.4-15.3-3-15.7-10.3-.3-5.4 3.8-11.5 16.2-12.2 1.4-.1 2.8-.1 4.2-.1 4.5 0 8.7.4 12.5 1.3-1.4 17.7-9.7 21-17.2 21.3z"/></svg></a>' +'</div>' +'</div>' +
      '<nav class="foot__nav" aria-label="Footer">' +
        '<a href="index.html" data-i18n="nav.home">Home</a><a href="program.html" data-i18n="nav.program">Program</a>' +
        '<a href="curriculum.html" data-i18n="nav.curriculum">Curriculum</a><a href="faculty.html" data-i18n="nav.faculty">Faculty</a>' +
        '<a href="delegation.html" data-i18n="nav.delegation">Delegation</a><a href="news.html" data-i18n="nav.news">News</a><a href="journal.html" data-i18n="nav.journal">Journal</a>' +
      '</nav>' +
      '<p class="foot__fine" data-i18n="imprint.note">Student-built site for the I-9-11 delegation. Program details may be adjusted by the program team. Content reflects the 2026 syllabus and verified speaker roster.</p>' +
      '<p class="foot__fine">Photos: Royce Hall, Powell Library &amp; MRI by Beyond My Ken / Ptrump16 (CC BY-SA 4.0); UCLA aerial by Alfred Twu &amp; LA skyline (CC0); IBM Quantum System One by Onri Jay Benally (CC BY 4.0); headshots of K. Wang &amp; M. Jarrahi (Wikimedia Commons). Logos are trademarks of their owners. Via Wikimedia Commons.</p>' +
      '<p class="foot__author"><span class="foot__author-mark" aria-hidden="true">&lt;/&gt;</span> <span data-i18n="foot.authorby">Designed &amp; built by</span> <a href="https://github.com/Arthur031221" target="_blank" rel="noopener">Chi-Wei Lee <span class="tc" lang="zh-Hant">李騏維</span></a></p>' +
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
