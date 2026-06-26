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

  /* top rail: plane flies Taiwan → LA; ruler ticks light up as it passes */
  var WEEK_STARTS = [1, 6, 11, 16, 23, 30, 37, 44, 51];
  var trail = qs("#rail-trail"), plane = qs("#rail-plane"), railbar = qs("#railbar"), ruler = qs("#ruler"), rticks = [];
  if (ruler) { var fr = document.createDocumentFragment(); for (var dd = 1; dd <= 60; dd++) { var sp = document.createElement("span"); sp.className = "rtick" + (WEEK_STARTS.indexOf(dd) > -1 ? " rtick--week" : ""); sp.setAttribute("data-day", dd); fr.appendChild(sp); } ruler.appendChild(fr); rticks = qsa(".rtick", ruler); }
  var lastDay = -1;
  ScrollTrigger.create({ start: 0, end: "max", onUpdate: function (s) {
    var pct = (s.progress * 100).toFixed(2);
    if (trail) trail.style.width = pct + "%";
    if (plane) plane.style.left = pct + "%";
    if (railbar) railbar.classList.toggle("arrived", s.progress > 0.992);
    var day = Math.round(s.progress * 60);
    if (day !== lastDay) { lastDay = day; for (var i = 0; i < rticks.length; i++) rticks[i].classList.toggle("past", +rticks[i].getAttribute("data-day") <= day); }
  } });

  /* vertical timeline: a glowing light follows the scroll down the line (behind the nodes); each node ignites like a lamp as it passes */
  var vtl = qs(".vtimeline");
  if (vtl) {
    var vtProg = document.createElement("div"); vtProg.className = "vt-progress";
    var vtHead = document.createElement("div"); vtHead.className = "vt-head";
    // insert BEFORE the items so the (opaque) node boxes always paint over the line — it runs behind each box and "skips" it
    vtl.insertBefore(vtHead, vtl.firstChild); vtl.insertBefore(vtProg, vtl.firstChild);
    var vtNodes = qsa(".vt-node", vtl), vtCenters = [], vtY0 = 0, vtY1 = 0;
    // node centre relative to .vtimeline (nodes are absolute, so offsetParent is their .vt-item — walk up);
    // anchor the line a few px INSIDE the first & last node so it never pokes above/below them on any browser
    var vtMeasure = function () {
      vtCenters = vtNodes.map(function (n) { var y = 0, el = n; while (el && el !== vtl) { y += el.offsetTop; el = el.offsetParent; } return y + n.offsetHeight / 2; });
      if (!vtCenters.length) return;
      var half = vtNodes[0].offsetHeight / 2;
      vtY0 = vtCenters[0] - half + 3;
      vtY1 = vtCenters[vtCenters.length - 1] + half - 3;
      vtl.style.setProperty("--vt-y0", vtY0 + "px");
      vtl.style.setProperty("--vt-y1", (vtl.offsetHeight - vtY1) + "px");
    };
    vtMeasure();
    ScrollTrigger.create({
      trigger: vtl, start: "top center", end: "bottom center",
      onRefresh: vtMeasure,
      onUpdate: function (s) {
        if (!vtCenters.length) return;
        var head = vtY0 + Math.max(0, Math.min(1, s.progress)) * (vtY1 - vtY0);
        vtProg.style.height = (head - vtY0) + "px";
        vtHead.style.top = head + "px";
        for (var i = 0; i < vtNodes.length; i++) vtNodes[i].classList.toggle("is-lit", vtCenters[i] <= head);
      }
    });
    vtl.classList.add("vt-live");
    // a week's live-log dropdown changes card height → re-measure node positions
    qsa("details.vt-log", vtl).forEach(function (d) { d.addEventListener("toggle", function () { ScrollTrigger.refresh(); }); });
  }

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

  /* AI-image slots: if the generated file is missing, fall back to a real photo or reveal the placeholder */
  qsa("img[data-fallback]").forEach(function (im) {
    im.addEventListener("error", function () {
      var fb = im.getAttribute("data-fallback");
      if (fb && im.getAttribute("src").indexOf(fb) < 0) im.setAttribute("src", fb);
      else im.style.opacity = 0;
    });
  });
  qsa(".genph > img:not([data-fallback])").forEach(function (im) { im.addEventListener("error", function () { im.style.opacity = 0; }); });

  /* faculty band accent variety (harmonious gold/steel tones, all AA-readable) */
  var BAND_ACC = ["--steel", "--steel-deep", "--gold-deep", "--steel", "--gold", "--steel-deep", "--gold"];
  qsa(".fac-band").forEach(function (b, i) { b.style.setProperty("--accent", "var(" + BAND_ACC[i % BAND_ACC.length] + ")"); });

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
