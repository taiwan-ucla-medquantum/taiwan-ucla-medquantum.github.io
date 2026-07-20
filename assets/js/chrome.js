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
      '<div class="foot__connect">' +'<span class="foot__connect-label mono" data-i18n="foot.follow">Follow the program</span>' +'<div class="foot__social">' +'<a class="social social--fb" href="https://www.facebook.com/people/UCLA-Biomedical-Engineering-Quantum-Science-Elite-Program/61591846618744/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/></svg></a>' +'<a class="social social--ig" href="https://www.instagram.com/tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5.2"/><circle cx="12" cy="12" r="4.3"/><circle cx="17.5" cy="6.5" r="1.4" fill="#fff" stroke="none"/></svg></a>' +'<a class="social social--th" href="https://www.threads.com/@tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Threads"><svg viewBox="0 0 192 192" fill="#fff" aria-hidden="true"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.7447C97.4484 44.7439 97.3355 44.7439 97.222 44.7439C82.2364 44.7439 69.7731 51.1409 62.102 62.7887L75.881 72.2394C81.6116 63.5478 90.6154 61.6941 97.2286 61.6941C97.3051 61.6941 97.3819 61.6941 97.4576 61.6947C105.707 61.7481 111.932 64.1489 115.961 68.8354C118.893 72.2492 120.854 76.9683 121.825 82.8848C114.511 81.6403 106.601 81.2572 98.145 81.7419C74.3247 83.1145 59.0111 97.0166 60.0396 116.338C60.5615 126.135 65.4397 134.564 73.775 140.078C80.8224 144.74 89.899 147.02 99.3323 146.502C111.79 145.82 121.563 141.078 128.381 132.4C133.559 125.812 136.834 117.276 138.28 106.549C144.217 110.134 148.612 114.851 151.039 120.52C155.16 130.148 155.4 145.97 142.487 158.87C131.166 170.177 117.554 175.067 97.0135 175.218C74.2298 175.049 56.9979 167.744 45.7857 153.503C35.2871 140.169 29.8607 120.919 29.6584 96.0662C29.8607 71.2134 35.2871 51.9635 45.7857 38.6294C56.9979 24.3888 74.2294 17.0836 97.0132 16.9145C119.963 17.0849 137.494 24.4257 149.128 38.7563C154.831 45.7817 159.13 54.6165 161.964 64.9169L178.144 60.595C174.708 47.9188 169.312 36.9938 161.981 27.9639C147.065 9.60212 125.269 0.195147 97.0695 0H96.9569C68.8144 0.19495 47.2627 9.6362 32.9059 28.0666C20.1358 44.4523 13.5473 67.2554 13.3273 95.9976L13.3271 96.0662L13.3273 96.1348C13.5473 124.877 20.1358 147.68 32.9059 164.065C47.2627 182.496 68.8144 191.937 96.9569 192.132H97.0695C122.153 191.958 139.797 185.42 154.325 170.895C173.325 151.917 172.748 128.108 166.474 113.472C161.974 103.036 153.394 94.5588 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg></a>' +'</div>' +'</div>' +
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

  // left-edge social "signal rail" — a vertical sibling of the flight-rail / timeline
  var srail = document.createElement("aside");
  srail.className = "srail"; srail.setAttribute("aria-label", "Follow the program");
  srail.innerHTML =
    '<span class="srail__line" aria-hidden="true"></span>' +
    '<span class="srail__spark" aria-hidden="true"></span>' +
    '<span class="srail__cap" aria-hidden="true" data-i18n="foot.follow">Follow</span>' +
    '<a class="srail__node srail__node--fb" href="https://www.facebook.com/people/UCLA-Biomedical-Engineering-Quantum-Science-Elite-Program/61591846618744/" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z\"/></svg><span class="srail__tip">Facebook</span></a>' +
    '<a class="srail__node srail__node--ig" href="https://www.instagram.com/tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" aria-hidden=\"true\"><rect x=\"2\" y=\"2\" width=\"20\" height=\"20\" rx=\"5.2\"/><circle cx=\"12\" cy=\"12\" r=\"4.3\"/><circle cx=\"17.5\" cy=\"6.5\" r=\"1.4\" fill=\"currentColor\" stroke=\"none\"/></svg><span class="srail__tip">Instagram</span></a>' +
    '<a class="srail__node srail__node--th" href="https://www.threads.com/@tw.ucla_medquantum" target="_blank" rel="noopener" aria-label="Threads"><svg viewBox=\"0 0 192 192\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.7447C97.4484 44.7439 97.3355 44.7439 97.222 44.7439C82.2364 44.7439 69.7731 51.1409 62.102 62.7887L75.881 72.2394C81.6116 63.5478 90.6154 61.6941 97.2286 61.6941C97.3051 61.6941 97.3819 61.6941 97.4576 61.6947C105.707 61.7481 111.932 64.1489 115.961 68.8354C118.893 72.2492 120.854 76.9683 121.825 82.8848C114.511 81.6403 106.601 81.2572 98.145 81.7419C74.3247 83.1145 59.0111 97.0166 60.0396 116.338C60.5615 126.135 65.4397 134.564 73.775 140.078C80.8224 144.74 89.899 147.02 99.3323 146.502C111.79 145.82 121.563 141.078 128.381 132.4C133.559 125.812 136.834 117.276 138.28 106.549C144.217 110.134 148.612 114.851 151.039 120.52C155.16 130.148 155.4 145.97 142.487 158.87C131.166 170.177 117.554 175.067 97.0135 175.218C74.2298 175.049 56.9979 167.744 45.7857 153.503C35.2871 140.169 29.8607 120.919 29.6584 96.0662C29.8607 71.2134 35.2871 51.9635 45.7857 38.6294C56.9979 24.3888 74.2294 17.0836 97.0132 16.9145C119.963 17.0849 137.494 24.4257 149.128 38.7563C154.831 45.7817 159.13 54.6165 161.964 64.9169L178.144 60.595C174.708 47.9188 169.312 36.9938 161.981 27.9639C147.065 9.60212 125.269 0.195147 97.0695 0H96.9569C68.8144 0.19495 47.2627 9.6362 32.9059 28.0666C20.1358 44.4523 13.5473 67.2554 13.3273 95.9976L13.3271 96.0662L13.3273 96.1348C13.5473 124.877 20.1358 147.68 32.9059 164.065C47.2627 182.496 68.8144 191.937 96.9569 192.132H97.0695C122.153 191.958 139.797 185.42 154.325 170.895C173.325 151.917 172.748 128.108 166.474 113.472C161.974 103.036 153.394 94.5588 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z\"/></svg><span class="srail__tip">Threads</span></a>' +
    '<span class="srail__dot" aria-hidden="true"></span>';
  document.body.appendChild(srail);
  requestAnimationFrame(function(){ requestAnimationFrame(function(){ srail.classList.add("srail--in"); }); });


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
