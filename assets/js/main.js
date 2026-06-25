/* ── Engine: progress bar, Lenis smooth scroll, reveals, count-up, mini-waves ──
   Content is fully present without JS; motion is prefers-reduced-motion gated.  */
(function () {
  "use strict";
  if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") return;
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  var qs = function (s, r) { return (r || document).querySelector(s); };
  var qsa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* top horizontal measurement rail (D01→D60) */
  var WEEKS = [{ n: 1, s: 1, e: 5 }, { n: 2, s: 6, e: 10 }, { n: 3, s: 11, e: 15 }, { n: 4, s: 16, e: 22 }, { n: 5, s: 23, e: 29 }, { n: 6, s: 30, e: 36 }, { n: 7, s: 37, e: 43 }, { n: 8, s: 44, e: 50 }, { n: 9, s: 51, e: 60 }];
  var WEEK_STARTS = [1, 6, 11, 16, 23, 30, 37, 44, 51];
  var ruler = qs("#ruler"), fill = qs("#rail-fill"), nowEl = qs("#rail-now"), weekEl = qs("#rail-week"), rticks = [];
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  if (ruler) { var fr = document.createDocumentFragment(); for (var dd = 1; dd <= 60; dd++) { var sp = document.createElement("span"); sp.className = "rtick" + (WEEK_STARTS.indexOf(dd) > -1 ? " rtick--week" : ""); sp.setAttribute("data-day", dd); fr.appendChild(sp); } ruler.appendChild(fr); rticks = qsa(".rtick", ruler); }
  var lastDay = -1;
  ScrollTrigger.create({ start: 0, end: "max", onUpdate: function (s) {
    if (fill) fill.style.transform = "scaleX(" + s.progress.toFixed(4) + ")";
    var day = Math.max(0, Math.min(60, Math.round(s.progress * 60)));
    if (day === lastDay) return; lastDay = day;
    if (nowEl) nowEl.textContent = "D" + pad(day);
    for (var i = 0; i < rticks.length; i++) { var rd = +rticks[i].getAttribute("data-day"); rticks[i].classList.toggle("now", rd === day); rticks[i].classList.toggle("past", rd < day); }
    var wk = null; for (var w = 0; w < WEEKS.length; w++) if (day >= WEEKS[w].s && day <= WEEKS[w].e) wk = WEEKS[w];
    if (weekEl) weekEl.textContent = wk ? "W" + wk.n : "W·";
  } });

  /* four-signal mini-waves (decorative SVG) */
  function shapeVal(t, u) {
    switch (t) {
      case "spindle": { var e = Math.exp(-Math.pow((u - .5) / .22, 2)); return Math.sin(u * Math.PI * 30) * e * (.4 + .6 * Math.abs(Math.sin(u * Math.PI * 6))); }
      case "mass": { var pk = [.16, .36, .56, .76, .9], v = 0; for (var i = 0; i < pk.length; i++) v += Math.exp(-Math.pow((u - pk[i]) / .02, 2)) * (.55 + .45 * ((i * 31) % 7) / 7); return Math.min(1, v) * 2 - .2; }
      case "diffraction": { var b = Math.sin(u * Math.PI * 34); return Math.pow(Math.abs(b), 5) * (b < 0 ? -1 : 1); }
      case "collapse": return Math.sin(u * Math.PI * 26) * Math.exp(-u * 2.6);
      default: return Math.sin(u * Math.PI * 8) * .5;
    }
  }
  qsa(".signal-card").forEach(function (c) {
    var p = qs(".signal-card__wave path", c); if (!p) return;
    var t = c.getAttribute("data-signal") || "spindle", n = 60, d = "";
    for (var i = 0; i < n; i++) { var u = i / (n - 1); d += (i ? "L" : "M") + (u * 120).toFixed(1) + " " + (20 - shapeVal(t, u) * 14).toFixed(1) + " "; }
    p.setAttribute("d", d);
  });

  /* count-up stats (GSAP proxy) */
  qsa(".stat__num[data-count]").forEach(function (el) {
    var target = +el.getAttribute("data-count"), out = el.querySelector(".v") || el;
    if (reduce) { out.textContent = target; return; }
    var o = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: "top 92%", once: true, onEnter: function () { gsap.to(o, { v: target, duration: 1.3, ease: "expo.out", onUpdate: function () { out.textContent = Math.round(o.v); } }); } });
  });

  /* smooth scroll + reveals (motion only) */
  var lenis = null, tickFn = null, tilts = [];
  var mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", function () {
    document.body.classList.add("js-anim");
    if (window.Lenis) {
      lenis = new window.Lenis({ autoRaf: false, lerp: .1, smoothWheel: true });
      lenis.on("scroll", ScrollTrigger.update);
      tickFn = function (t) { lenis.raf(t * 1000); };
      gsap.ticker.add(tickFn); gsap.ticker.lagSmoothing(0);
    }
    qsa(".section__head, .stat, .signal-card, .vt-item, .day-step, .fac-card, .delegate, .pub, .prose > p, .journal-cell, .cta-row, .mediaband").forEach(function (el) { el.classList.add("reveal"); });
    gsap.set(".reveal", { autoAlpha: 0, y: 18 });
    ScrollTrigger.batch(".reveal", {
      start: "top 90%",
      onEnter: function (b) { gsap.to(b, { autoAlpha: 1, y: 0, duration: .6, ease: "expo.out", stagger: .06, overwrite: true }); },
      onLeaveBack: function (b) { gsap.set(b, { autoAlpha: 0, y: 18, overwrite: true }); }
    });
    if (window.VanillaTilt && window.matchMedia("(hover:hover) and (pointer:fine) and (min-width:901px)").matches) {
      var te = qsa(".signal-card, .fac-card--lead, .stat");
      if (te.length) { window.VanillaTilt.init(te, { max: 4, speed: 500, glare: true, "max-glare": .1, scale: 1.008 }); tilts = te; }
    }
    return function () {
      document.body.classList.remove("js-anim");
      if (tickFn) gsap.ticker.remove(tickFn);
      if (lenis) { lenis.destroy(); lenis = null; }
      tilts.forEach(function (e) { if (e.vanillaTilt) e.vanillaTilt.destroy(); }); tilts = [];
    };
  });

  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  window.addEventListener("pagehide", function () {
    if (tickFn) gsap.ticker.remove(tickFn);
    if (lenis) { lenis.destroy(); lenis = null; }
    tilts.forEach(function (e) { if (e.vanillaTilt) e.vanillaTilt.destroy(); });
  });
})();
