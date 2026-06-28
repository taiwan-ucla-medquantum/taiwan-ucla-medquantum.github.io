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
    '<span class="railbar__path"><span class="railbar__line"></span><span class="railbar__ticks" id="ruler"></span><span class="railbar__trail" id="rail-trail"></span>' +
      '<span class="railbar__plane" id="rail-plane"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><g transform="rotate(90 12 12)"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></g></svg></span></span>' +
    '<span class="railbar__end"><span>LA</span><span class="railbar__dot railbar__dot--to"></span></span>' +
    '<span class="railbar__count" aria-label="page views" aria-live="off"><span class="railbar__count-dot"></span><span class="railbar__count-num" id="viewCount">—</span><span class="railbar__count-label" data-i18n="counter.label">views</span></span>';

  var nav = document.createElement("header");
  nav.className = "nav"; nav.id = "nav";
  nav.innerHTML =
    '<a class="nav__brand" href="index.html" aria-label="I-9-11 醫工量子：UCLA 菁英計畫 · home"><svg class="nav__mark" viewBox="274.9 -50.7 638.3 1126.3" aria-hidden="true"><g transform="translate(0,1024) scale(0.1,-0.1)"><path vector-effect="non-scaling-stroke" d="M7315 10231 c-65 -9 -88 -22 -180 -105 -51 -46 -85 -86 -104 -125 -16 -31 -41 -67 -55 -80 -24 -22 -24 -25 -8 -36 9 -7 34 -18 55 -24 24 -8 43 -23 52 -41 26 -50 13 -54 -35 -14 -23 20 -42 26 -78 27 -41 1 -60 -7 -123 -45 -70 -44 -80 -47 -179 -58 -168 -17 -207 -28 -355 -100 -77 -38 -158 -74 -180 -80 -88 -27 -133 -58 -174 -119 -22 -32 -52 -88 -66 -123 -18 -44 -41 -80 -75 -113 -35 -35 -50 -57 -50 -76 0 -15 -14 -43 -31 -65 -61 -75 -149 -298 -149 -376 0 -10 -20 -40 -44 -66 -52 -55 -116 -182 -116 -228 0 -31 -1 -32 -53 -36 -83 -7 -146 -43 -182 -104 -17 -29 -50 -67 -74 -85 -33 -27 -51 -52 -80 -119 -43 -98 -91 -176 -212 -340 -116 -159 -139 -195 -139 -226 0 -15 -18 -59 -39 -98 -22 -39 -56 -109 -76 -156 -20 -47 -49 -105 -65 -130 -16 -25 -37 -79 -47 -119 -16 -68 -22 -77 -69 -118 -37 -32 -55 -56 -63 -86 -7 -23 -33 -83 -58 -133 -39 -78 -51 -94 -89 -113 -36 -19 -49 -35 -75 -90 -17 -36 -44 -102 -59 -146 -15 -44 -50 -125 -77 -180 -28 -55 -61 -129 -74 -164 -19 -52 -33 -70 -67 -95 -29 -21 -60 -58 -91 -111 -102 -172 -101 -169 -101 -239 0 -65 0 -66 -27 -66 -57 -1 -143 -187 -143 -310 0 -30 12 -111 26 -180 18 -85 27 -152 26 -209 -1 -55 5 -111 18 -162 25 -96 25 -104 0 -139 -11 -16 -27 -47 -35 -69 l-14 -40 30 -10 c16 -5 29 -15 29 -20 0 -6 -20 -38 -44 -71 -25 -33 -54 -86 -66 -118 -12 -31 -31 -65 -43 -74 -19 -15 -22 -26 -22 -102 0 -72 -3 -88 -21 -108 -12 -13 -24 -36 -28 -52 -6 -26 -2 -34 36 -67 l43 -38 -32 -1 c-21 0 -37 -7 -48 -22 -15 -23 -15 -23 29 -33 24 -5 48 -13 52 -17 15 -15 -30 -47 -82 -59 l-53 -12 14 -26 c32 -61 36 -63 89 -50 44 11 50 10 62 -6 8 -11 14 -39 14 -63 0 -41 2 -44 23 -38 12 3 28 6 35 6 7 0 20 16 29 35 l17 35 28 -27 c26 -25 27 -29 21 -99 -9 -109 13 -254 53 -346 28 -65 34 -93 40 -188 l7 -112 70 -121 70 -122 -11 -75 -10 -74 36 -63 c27 -45 45 -65 67 -73 48 -16 104 -90 117 -155 9 -48 20 -65 85 -135 69 -74 78 -80 114 -80 56 0 145 -48 204 -112 28 -29 102 -87 166 -128 115 -74 116 -76 134 -130 12 -39 32 -71 70 -110 63 -66 194 -303 236 -429 38 -111 40 -221 7 -284 -19 -36 -22 -57 -21 -137 1 -87 4 -101 37 -170 20 -41 36 -89 36 -107 0 -32 1 -33 44 -33 37 0 48 5 65 27 l20 28 40 -23 c22 -12 49 -22 61 -22 30 0 56 -15 119 -68 l53 -46 -6 45 c-20 142 -19 166 6 201 14 18 44 69 68 112 40 76 42 82 36 140 -14 121 -17 649 -6 771 11 116 13 123 75 255 52 109 67 153 80 230 19 115 28 145 68 233 28 63 33 68 73 78 l43 11 15 69 c9 37 16 75 16 83 0 9 29 38 63 66 35 28 71 66 80 84 12 25 36 45 94 77 105 58 166 117 209 201 26 52 34 82 34 121 0 51 1 53 53 94 71 55 139 159 239 363 45 91 90 178 101 193 11 16 23 46 28 68 6 24 24 55 48 79 61 63 119 159 126 211 4 27 2 70 -5 102 -19 82 14 208 90 347 56 103 57 108 74 240 12 91 30 176 57 259 22 70 39 144 39 170 0 25 10 71 22 101 14 38 24 91 29 170 15 222 20 252 52 315 25 51 31 76 37 165 5 83 13 121 37 180 45 110 83 236 83 274 0 38 51 195 74 228 25 35 21 96 -8 119 -32 25 -50 81 -41 127 4 19 24 73 46 117 25 52 39 97 39 121 0 31 9 51 46 97 26 32 54 57 64 57 32 0 50 12 50 32 0 26 104 195 140 228 15 14 33 36 40 49 10 20 10 26 -3 35 -13 10 -12 27 10 146 14 74 27 145 29 158 3 12 35 54 71 93 l67 71 -2 72 -3 71 38 20 c27 15 37 26 35 40 -1 11 -5 52 -9 92 l-6 71 29 4 c25 3 19 7 -37 26 l-66 23 -18 60 c-16 52 -17 69 -7 137 9 54 9 87 2 112 -13 46 -40 249 -40 306 0 59 35 126 99 189 41 40 51 56 51 83 0 75 93 158 222 198 70 22 88 33 116 66 17 22 32 48 32 58 0 18 -21 23 -160 33 -32 2 -38 7 -63 58 -15 31 -32 83 -37 116 -11 79 -32 120 -67 127 -16 4 -78 10 -139 15 -85 7 -121 14 -160 34 -27 13 -78 35 -114 47 -65 23 -150 89 -150 117 0 12 -16 18 -64 25 -14 2 -35 34 -69 102 -47 95 -51 99 -104 123 -61 28 -105 34 -178 24z"/></g></svg><b>I-9-11</b><span lang="zh-Hant">醫工量子</span></a>' +
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
