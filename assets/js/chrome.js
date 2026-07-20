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
      '<div class="foot__connect">' +'<span class="foot__connect-label mono" data-i18n="foot.follow">Follow the program</span>' +'<div class="foot__social">' +'<a class="social social--fb" href="https://www.facebook.com/people/UCLA-Biomedical-Engineering-Quantum-Science-Elite-Program/61591846618744/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg></a>' +'<a class="social social--ig" href="https://www.instagram.com/tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.2"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.5" cy="6.5" r="1.4" fill="#fff" stroke="none"/></svg></a>' +'<a class="social social--th" href="https://www.threads.com/@tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Threads"><svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.324.145 1.517.717 2.688 1.83 3.343 3.286.913 2.031.997 5.343-1.664 8.062-1.878 1.918-4.14 2.786-6.72 2.826Zm-1.442-9.895c-1.204-.05-2.29.27-2.868.756-.535.45-.79 1.02-.756 1.694.048.877.914 1.573 2.05 1.507.99-.054 1.71-.45 2.15-.998.416-.516.7-1.235.85-2.147-.475-.257-1.005-.482-1.426-.812Z"/></svg></a>' +'</div>' +'</div>' +
      '<nav class="foot__nav" aria-label="Footer">' +
        '<a href="index.html" data-i18n="nav.home">Home</a><a href="program.html" data-i18n="nav.program">Program</a>' +
        '<a href="curriculum.html" data-i18n="nav.curriculum">Curriculum</a><a href="faculty.html" data-i18n="nav.faculty">Faculty</a>' +
        '<a href="delegation.html" data-i18n="nav.delegation">Delegation</a><a href="news.html" data-i18n="nav.news">News</a><a href="journal.html" data-i18n="nav.journal">Journal</a>' +
      '</nav>' +
      '<p class="foot__fine" data-i18n="imprint.note">Student-built site for the I-9-11 delegation, reflecting the 2026 syllabus and verified speaker roster.</p>' +
      '<details class="foot__credits"><summary data-i18n="foot.credits">Image credits</summary>' +
      '<p class="foot__fine">Photos: Royce Hall, Powell Library &amp; MRI by Beyond My Ken / Ptrump16 (CC BY-SA 4.0); UCLA aerial by Alfred Twu &amp; LA skyline (CC0); IBM Quantum System One by Onri Jay Benally (CC BY 4.0); headshots of K. Wang &amp; M. Jarrahi (Wikimedia Commons). Logos are trademarks of their owners. Via Wikimedia Commons.</p></details>' +
      '<p class="foot__author"><span class="foot__author-mark" aria-hidden="true">&lt;/&gt;</span> <span data-i18n="foot.authorby">Designed &amp; built by</span> <a href="delegation.html#chi-wei-lee">Chi-Wei Lee <span class="tc" lang="zh-Hant">李騏維</span></a></p>' +
    '</div>';

  var pageEl = document.querySelector(".page");
  document.body.insertBefore(rail, document.body.firstChild);
  if (pageEl) { document.body.insertBefore(nav, pageEl); } else { document.body.insertBefore(nav, document.body.firstChild.nextSibling); }
  document.body.appendChild(foot);

  // left-edge social half-wheel dock (all pages)
  var dock = document.createElement("aside");
  dock.className = "sdock"; dock.setAttribute("aria-label", "Follow the program");
  dock.innerHTML =
    '<span class="sdock__disc" aria-hidden="true"></span>' +
    '<a class="sdock__item sdock__item--fb" style="--a:-37deg;--r:48px" href="https://www.facebook.com/people/UCLA-Biomedical-Engineering-Quantum-Science-Elite-Program/61591846618744/" target="_blank" rel="noopener" aria-label="Facebook"><span class="sdock__btn"><svg viewBox=\"0 0 24 24\" fill=\"#fff\" aria-hidden=\"true\"><path d=\"M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z\"/></svg></span><span class="sdock__tip">Facebook</span></a>' +
    '<a class="sdock__item sdock__item--ig" style="--a:0deg;--r:48px" href="https://www.instagram.com/tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Instagram"><span class="sdock__btn"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5.2\"/><circle cx=\"12\" cy=\"12\" r=\"4.3\"/><circle cx=\"17.5\" cy=\"6.5\" r=\"1.4\" fill=\"#fff\" stroke=\"none\"/></svg></span><span class="sdock__tip">Instagram</span></a>' +
    '<a class="sdock__item sdock__item--th" style="--a:37deg;--r:48px" href="https://www.threads.com/@tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Threads"><span class="sdock__btn"><svg viewBox=\"0 0 24 24\" fill=\"#fff\" aria-hidden=\"true\"><path d=\"M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 0 1 3.02.142c-.126-.742-.375-1.332-.75-1.757-.513-.586-1.308-.883-2.359-.89h-.029c-.844 0-1.992.232-2.721 1.32L7.734 7.847c.98-1.454 2.568-2.256 4.478-2.256h.044c3.194.02 5.097 1.975 5.287 5.388.108.046.216.094.324.145 1.517.717 2.688 1.83 3.343 3.286.913 2.031.997 5.343-1.664 8.062-1.878 1.918-4.14 2.786-6.72 2.826Zm-1.442-9.895c-1.204-.05-2.29.27-2.868.756-.535.45-.79 1.02-.756 1.694.048.877.914 1.573 2.05 1.507.99-.054 1.71-.45 2.15-.998.416-.516.7-1.235.85-2.147-.475-.257-1.005-.482-1.426-.812Z\"/></svg></span><span class="sdock__tip">Threads</span></a>';
  document.body.appendChild(dock);
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ dock.classList.add("sdock--in"); }); });

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
