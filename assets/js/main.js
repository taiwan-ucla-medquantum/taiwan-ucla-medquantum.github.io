/* ── Engine: Lenis + GSAP/ScrollTrigger, measurement pipeline, page motion ──
   Content is fully present without JS; motion is prefers-reduced-motion gated. */
(function () {
  "use strict";
  if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") return;
  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  var qs = function (s, r) { return (r || document).querySelector(s); };
  var qsa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = function () { return (window.__lang ? window.__lang() : "en"); };
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };

  var WEEKS = [
    { n: 1, s: 1, e: 5 }, { n: 2, s: 6, e: 10 }, { n: 3, s: 11, e: 15 }, { n: 4, s: 16, e: 22 },
    { n: 5, s: 23, e: 29 }, { n: 6, s: 30, e: 36 }, { n: 7, s: 37, e: 43 }, { n: 8, s: 44, e: 50 }, { n: 9, s: 51, e: 60 }
  ];
  var WEEK_STARTS = [1, 6, 11, 16, 23, 30, 37, 44, 51];

  /* ── Ruler ── */
  var ruler = qs("#ruler");
  if (ruler) {
    var f = document.createDocumentFragment();
    for (var d = 1; d <= 60; d++) {
      var t = document.createElement("span");
      t.className = "tick" + (WEEK_STARTS.indexOf(d) > -1 ? " tick--week" : "");
      t.setAttribute("data-day", d); f.appendChild(t);
    }
    ruler.appendChild(f);
  }
  var ticks = qsa(".tick"), nowEl = qs("#rail-now"), weekEl = qs("#rail-week");
  var heroState = qs("#hero-state-text"), footState = qs("#foot-state");

  /* ── Signal-line shapes (rail) ── */
  var path = qs("#signal-path"), N = 120, AMP = 23, cur = new Array(N).fill(0);
  var SCOL = { quantum: "#38E1E6", gold: "#FBB615", medicine: "#FF6B8A", ink: "#7DA0C9" };
  function shapeVal(t, u) {
    switch (t) {
      case "interference": { var e = Math.exp(-Math.pow((u - .5) / .22, 2)); return Math.sin(u * Math.PI * 44) * e; }
      case "sequencing": { var s = Math.sin(u * Math.PI * 20); return (s > .3 ? 1 : s < -.3 ? -1 : 0) * .82; }
      case "spindle": { var e2 = Math.exp(-Math.pow((u - .5) / .2, 2)); return Math.sin(u * Math.PI * 68) * e2 * (.4 + .6 * Math.abs(Math.sin(u * Math.PI * 8))); }
      case "diffraction": { var b = Math.sin(u * Math.PI * 120); return Math.pow(Math.abs(b), 6) * (b < 0 ? -1 : 1); }
      case "mass": { var pk = [.12, .3, .46, .63, .79, .9], v = 0; for (var i = 0; i < pk.length; i++) v += Math.exp(-Math.pow((u - pk[i]) / .012, 2)) * (.6 + .4 * ((i * 37) % 7) / 7); return Math.min(1, v); }
      case "packet": return (Math.sin(u * Math.PI * 18) >= 0 ? 1 : -1) * .8;
      case "pulse": { var fr = (u * 7) % 1; return Math.exp(-Math.pow((fr - .2) / .05, 2)) - .4 * Math.exp(-Math.pow((fr - .42) / .08, 2)); }
      case "collapse": return Math.sin(u * Math.PI * 60) * Math.exp(-u * 3.2);
      case "decay": return Math.sin(u * Math.PI * 36) * Math.exp(-u * 4) * .9;
      default: return Math.sin(u * Math.PI * 4) * .04;
    }
  }
  function sample(t) { var a = []; for (var i = 0; i < N; i++) a.push(shapeVal(t, i / (N - 1))); return a; }
  function toPath(a) { var d = ""; for (var i = 0; i < N; i++) { var y = 5 + i / (N - 1) * 990, x = 30 + Math.max(-24, Math.min(24, a[i] * AMP)); d += (i ? "L" : "M") + x.toFixed(2) + " " + y.toFixed(1) + " "; } return d; }
  var mt;
  function setShape(type, key) {
    if (!path) return;
    if (key && SCOL[key]) path.style.stroke = SCOL[key];
    var tg = sample(type || "baseline"), st = cur.slice();
    if (mt) mt.kill();
    if (reduce) { cur = tg; path.setAttribute("d", toPath(cur)); return; }
    var o = { t: 0 };
    mt = gsap.to(o, { t: 1, duration: .75, ease: "expo.out", onUpdate: function () { for (var i = 0; i < N; i++) cur[i] = st[i] + (tg[i] - st[i]) * o.t; path.setAttribute("d", toPath(cur)); } });
  }
  setShape("baseline", "ink");

  /* ── Master measurement pipeline ── */
  var lastDay = -1, lastP = 0;
  function captions(p) {
    var zh = lang() === "zh";
    if (heroState) heroState.textContent = p < .12 ? (zh ? "狀態：|ψ⟩ 疊加態" : "state: |ψ⟩ superposition")
      : p < .6 ? (zh ? "狀態：坍縮中…" : "state: collapsing …") : (zh ? "狀態：已量測 · 行程確定" : "state: measured · program defined");
  }
  function update(p) {
    lastP = p;
    if (window.CoherenceCore) window.CoherenceCore.setProgress(p);
    captions(p);
    var day = Math.max(0, Math.min(60, Math.round(p * 60)));
    if (day === lastDay) return;
    lastDay = day;
    if (nowEl) nowEl.textContent = "D" + pad(day);
    for (var i = 0; i < ticks.length; i++) { var dd = +ticks[i].getAttribute("data-day"); ticks[i].classList.toggle("now", dd === day); ticks[i].classList.toggle("past", dd < day); }
    var wk = null; for (var w = 0; w < WEEKS.length; w++) if (day >= WEEKS[w].s && day <= WEEKS[w].e) wk = WEEKS[w];
    if (weekEl) weekEl.textContent = wk ? "W" + wk.n : "W—";
  }
  window.__refreshInstruments = function () { captions(lastP); };
  ScrollTrigger.create({ start: 0, end: "max", onUpdate: function (s) { update(s.progress); }, onRefresh: function (s) { update(s.progress); } });

  /* ── Smooth scroll (Lenis) + reveals + tilt — motion only ── */
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
    qsa(".section__head, .signal-card, .stat, .fac-card, .delegate, .day-step, .deliverable, .brief__body > p, .org-strip, .cta-row, .journal-cell").forEach(function (el) { el.classList.add("reveal"); });
    gsap.set(".reveal", { autoAlpha: 0, y: 18 });
    ScrollTrigger.batch(".reveal", {
      start: "top 90%",
      onEnter: function (b) { gsap.to(b, { autoAlpha: 1, y: 0, duration: .6, ease: "expo.out", stagger: .06, overwrite: true }); },
      onLeaveBack: function (b) { gsap.set(b, { autoAlpha: 0, y: 18, overwrite: true }); }
    });
    if (window.VanillaTilt && window.matchMedia("(hover:hover) and (pointer:fine) and (min-width:901px)").matches) {
      var te = qsa(".signal-card, .fac-card--lead");
      if (te.length) { window.VanillaTilt.init(te, { max: 5, speed: 500, glare: true, "max-glare": .12, scale: 1.01 }); tilts = te; }
    }
    return function () {
      document.body.classList.remove("js-anim");
      if (tickFn) gsap.ticker.remove(tickFn);
      if (lenis) { lenis.destroy(); lenis = null; }
      tilts.forEach(function (e) { if (e.vanillaTilt) e.vanillaTilt.destroy(); }); tilts = [];
    };
  });

  /* ── Per-page motion ── */
  var page = document.body.getAttribute("data-page");

  /* stats count-up (GSAP proxy, no extra lib) */
  qsa(".stat__num[data-count]").forEach(function (el) {
    var target = +el.getAttribute("data-count"), suffix = el.getAttribute("data-suffix") || "";
    if (reduce) { el.firstChild ? (el.childNodes[0].nodeValue = target) : (el.textContent = target + suffix); return; }
    var o = { v: 0 }, out = el.querySelector(".v") || el;
    ScrollTrigger.create({
      trigger: el, start: "top 92%", once: true,
      onEnter: function () { gsap.to(o, { v: target, duration: 1.4, ease: "expo.out", onUpdate: function () { out.textContent = Math.round(o.v); } }); }
    });
  });

  /* hero pointer parallax → lattice */
  var hero = qs(".hero");
  if (hero && window.CoherenceCore && !reduce) {
    hero.addEventListener("pointermove", function (e) {
      var r = hero.getBoundingClientRect();
      window.CoherenceCore.setPointer(((e.clientX - r.left) / r.width - .5) * 2, ((e.clientY - r.top) / r.height - .5) * 2);
    });
  }

  /* four-signals: render mini-wave + mood bleed (home/program) */
  qsa(".signal-card").forEach(function (c) {
    var svg = qs(".signal-card__wave path", c), type = c.getAttribute("data-signal") || "interference";
    if (svg) { var n = 64, d = ""; for (var i = 0; i < n; i++) { var u = i / (n - 1); d += (i ? "L" : "M") + (u * 120).toFixed(1) + " " + (20 - shapeVal(type, u) * 15).toFixed(1) + " "; } svg.setAttribute("d", d); }
    ScrollTrigger.create({ trigger: c, start: "top 70%", end: "bottom 30%", onEnter: setSig(c), onEnterBack: setSig(c) });
  });
  function setSig(c) { return function () { setShape(c.getAttribute("data-signal"), c.getAttribute("data-skey")); }; }

  /* curriculum timeline */
  var timeline = qs(".timeline"), track = qs(".track");
  if (timeline && track) {
    var panels = qsa(".week-panel", track);
    mm.add("(min-width: 901px) and (prefers-reduced-motion: no-preference)", function () {
      var tween = gsap.to(track, {
        x: function () { return -(track.scrollWidth - timeline.clientWidth + 40); },
        ease: "none",
        scrollTrigger: { trigger: timeline, pin: true, scrub: 1, start: "top top", end: function () { return "+=" + (track.scrollWidth - timeline.clientWidth + window.innerHeight * .6); }, invalidateOnRefresh: true }
      });
      panels.forEach(function (p) {
        ScrollTrigger.create({ trigger: p, containerAnimation: tween, start: "left 70%", onEnter: setWk(p), onEnterBack: setWk(p) });
        var rule = qs(".io__rule", p);
        if (rule) gsap.from(rule, { scaleY: 0, transformOrigin: "top center", ease: "expo.out", duration: .7, scrollTrigger: { trigger: p, containerAnimation: tween, start: "left 75%" } });
      });
      return function () {};
    });
    mm.add("(max-width: 900px), (prefers-reduced-motion: reduce)", function () {
      panels.forEach(function (p) { ScrollTrigger.create({ trigger: p, start: "top 60%", end: "bottom 40%", onEnter: setWk(p), onEnterBack: setWk(p) }); });
      return function () {};
    });
  }
  function setWk(p) { return function () { setShape(p.getAttribute("data-signal"), p.getAttribute("data-key")); }; }

  /* delegation reading head */
  qsa(".delegate").forEach(function (dl) {
    ScrollTrigger.create({ trigger: dl, start: "top 55%", end: "bottom 45%", onToggle: function (s) { dl.classList.toggle("reading", s.isActive); } });
  });

  /* refresh after fonts + load; teardown on MPA navigation */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
  window.addEventListener("pagehide", function () {
    if (tickFn) gsap.ticker.remove(tickFn);
    if (lenis) { lenis.destroy(); lenis = null; }
    tilts.forEach(function (e) { if (e.vanillaTilt) e.vanillaTilt.destroy(); });
  });
})();
