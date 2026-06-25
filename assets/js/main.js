/* ── The 60-Day Codex — instrument & motion ──
   Builds the day-ruler, morphs the margin signal-line per week, draws the
   noon-rule, drives the coherence core from scroll, and reveals content.
   All motion is reduced-motion-guarded; content is fully visible without JS. */
(function () {
  "use strict";
  if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") return;

  var gsap = window.gsap, ScrollTrigger = window.ScrollTrigger;
  gsap.registerPlugin(ScrollTrigger);
  var qsa = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var pad = function (n) { return (n < 10 ? "0" : "") + n; };

  var WEEKS = [
    { n: 1, s: 1, e: 5, t: "Quantum Science, AI & Data" },
    { n: 2, s: 6, e: 10, t: "Biology & Health Data" },
    { n: 3, s: 11, e: 15, t: "Neuroscience & Brain" },
    { n: 4, s: 16, e: 22, t: "Quantum, Semiconductors & Materials" },
    { n: 5, s: 23, e: 29, t: "Pharmacology & Biomarkers" },
    { n: 6, s: 30, e: 36, t: "Digital Health" },
    { n: 7, s: 37, e: 43, t: "Integrative & Chinese Medicine" },
    { n: 8, s: 44, e: 50, t: "Applied Quantum" },
    { n: 9, s: 51, e: 60, t: "Final Integration" }
  ];
  var WEEK_STARTS = WEEKS.map(function (w) { return w.s; });

  /* ── Ruler ── */
  var ruler = document.getElementById("ruler");
  if (ruler) {
    var frag = document.createDocumentFragment();
    for (var d = 1; d <= 60; d++) {
      var sp = document.createElement("span");
      sp.className = "tick" + (WEEK_STARTS.indexOf(d) > -1 ? " tick--week" : "");
      sp.setAttribute("data-day", d);
      frag.appendChild(sp);
    }
    ruler.appendChild(frag);
  }
  var ticks = qsa(".tick");
  var nowEl = document.getElementById("margin-now");
  var weekEl = document.getElementById("margin-week");
  var statusEl = document.getElementById("progress-status");
  var coreCap = document.getElementById("core-caption");

  /* ── Signal-line waveforms ── */
  var path = document.getElementById("signal-path");
  var N = 120, AMP = 23, current = new Array(N).fill(0);
  var COLORS = { green: "#1E6E5A", amber: "#D98A2B", ink: "#5B6770" };

  function shapeVal(type, u) {
    switch (type) {
      case "interference": { var env = Math.exp(-Math.pow((u - 0.5) / 0.22, 2)); return Math.sin(u * Math.PI * 44) * env; }
      case "sequencing": { var s = Math.sin(u * Math.PI * 20); return (s > 0.3 ? 1 : s < -0.3 ? -1 : 0) * 0.82; }
      case "spindle": { var env2 = Math.exp(-Math.pow((u - 0.5) / 0.2, 2)); var mod = 0.4 + 0.6 * Math.abs(Math.sin(u * Math.PI * 8)); return Math.sin(u * Math.PI * 68) * env2 * mod; }
      case "diffraction": { var b = Math.sin(u * Math.PI * 120); return Math.pow(Math.abs(b), 6) * (b < 0 ? -1 : 1); }
      case "mass": { var pk = [0.12, 0.3, 0.46, 0.63, 0.79, 0.9], v = 0; for (var i = 0; i < pk.length; i++) v += Math.exp(-Math.pow((u - pk[i]) / 0.012, 2)) * (0.55 + 0.45 * ((i * 37) % 7) / 7); return Math.min(1, v); }
      case "packet": return (Math.sin(u * Math.PI * 18) >= 0 ? 1 : -1) * 0.8;
      case "pulse": { var f = (u * 7) % 1; return (Math.exp(-Math.pow((f - 0.2) / 0.05, 2)) - 0.4 * Math.exp(-Math.pow((f - 0.42) / 0.08, 2))); }
      case "collapse": { var dec = Math.exp(-u * 3.2); return Math.sin(u * Math.PI * 60) * dec; }
      case "decay": { var dd = Math.exp(-u * 4); return Math.sin(u * Math.PI * 36) * dd * 0.9; }
      default: return Math.sin(u * Math.PI * 4) * 0.04; /* baseline */
    }
  }
  function sample(type) { var a = []; for (var i = 0; i < N; i++) a.push(shapeVal(type, i / (N - 1))); return a; }
  function toPath(arr) {
    var d = "";
    for (var i = 0; i < N; i++) {
      var y = 5 + (i / (N - 1)) * 990;
      var x = 30 + Math.max(-24, Math.min(24, arr[i] * AMP));
      d += (i === 0 ? "M" : "L") + x.toFixed(2) + " " + y.toFixed(1) + " ";
    }
    return d;
  }
  var morphTween;
  function setShape(type, key) {
    if (!path) return;
    if (key && COLORS[key]) path.style.stroke = COLORS[key];
    var target = sample(type), start = current.slice();
    if (morphTween) morphTween.kill();
    if (reduce) { current = target; path.setAttribute("d", toPath(current)); return; }
    var o = { t: 0 };
    morphTween = gsap.to(o, {
      t: 1, duration: 0.75, ease: "expo.out",
      onUpdate: function () {
        for (var i = 0; i < N; i++) current[i] = start[i] + (target[i] - start[i]) * o.t;
        path.setAttribute("d", toPath(current));
      }
    });
  }
  setShape("baseline", "ink");

  /* ── Master scroll progress → day, ruler, core, captions ── */
  var lastDay = -1;
  function update(p) {
    var day = Math.max(0, Math.min(60, Math.round(p * 60)));
    if (window.CoherenceCore) window.CoherenceCore.setProgress(p);
    if (coreCap) coreCap.textContent = p < 0.12 ? "state: |ψ⟩ superposition" : p < 0.6 ? "state: collapsing …" : "state: measured · program defined";
    if (day === lastDay) return;
    lastDay = day;
    if (nowEl) nowEl.textContent = "D" + pad(day);
    for (var i = 0; i < ticks.length; i++) {
      var dd = +ticks[i].getAttribute("data-day");
      ticks[i].classList.toggle("is-now", dd === day);
      ticks[i].classList.toggle("is-past", dd < day);
    }
    var wk = null;
    for (var w = 0; w < WEEKS.length; w++) if (day >= WEEKS[w].s && day <= WEEKS[w].e) wk = WEEKS[w];
    if (weekEl) weekEl.textContent = wk ? "W" + wk.n : "W—";
    if (statusEl) statusEl.textContent = day === 0 ? "Before Day 1 of 60" : "Day " + day + " of 60" + (wk ? " · Week " + wk.n + " · " + wk.t : "");
  }
  ScrollTrigger.create({ start: 0, end: "max", onUpdate: function (self) { update(self.progress); }, onRefresh: function (self) { update(self.progress); } });

  /* ── Per-chapter signal morph ── */
  qsa(".chapter").forEach(function (ch) {
    ScrollTrigger.create({
      trigger: ch, start: "top 55%", end: "bottom 45%",
      onEnter: function () { setShape(ch.getAttribute("data-signal"), ch.getAttribute("data-key")); },
      onEnterBack: function () { setShape(ch.getAttribute("data-signal"), ch.getAttribute("data-key")); }
    });
  });
  ScrollTrigger.create({ trigger: "#brief", start: "top 60%", onEnter: function () { setShape("baseline", "ink"); }, onEnterBack: function () { setShape("baseline", "ink"); } });
  ScrollTrigger.create({ trigger: "#imprint", start: "top 70%", onEnter: function () { setShape("decay", "ink"); } });

  /* ── Nav current-section highlight ── */
  var navLinks = {};
  qsa(".bind__nav a").forEach(function (a) { navLinks[a.getAttribute("href")] = a; });
  ["#brief", "#themes", "#codex", "#daily", "#faculty", "#delegation"].forEach(function (id) {
    var sec = document.querySelector(id), link = navLinks[id];
    if (!sec || !link) return;
    ScrollTrigger.create({
      trigger: sec, start: "top 40%", end: "bottom 40%",
      onToggle: function (self) { link.classList.toggle("is-current", self.isActive); }
    });
  });

  /* ── Motion-only enhancements ── */
  var mm = gsap.matchMedia();
  mm.add("(prefers-reduced-motion: no-preference)", function () {
    document.body.classList.add("js-anim");

    var revealSel = ".chapter-head, .folio, .plate-figure, .delegate, .day-step, .deliverable, .brief__body > p, .published-under, .imprint-strip, .codex__legend, .accompanying, .imprint__logos, .imprint__fine";
    qsa(revealSel).forEach(function (el) { el.classList.add("reveal"); });
    gsap.set(".reveal", { autoAlpha: 0, y: 16 });
    ScrollTrigger.batch(".reveal", {
      start: "top 88%",
      onEnter: function (b) { gsap.to(b, { autoAlpha: 1, y: 0, duration: 0.6, ease: "expo.out", stagger: 0.07, overwrite: true }); },
      onLeaveBack: function (b) { gsap.set(b, { autoAlpha: 0, y: 16, overwrite: true }); }
    });

    /* noon-rule draws per chapter, then output settles */
    qsa(".chapter").forEach(function (ch) {
      var rule = ch.querySelector(".io__rule");
      if (rule) gsap.from(rule, { scaleY: 0, transformOrigin: "top center", duration: 0.7, ease: "expo.out", scrollTrigger: { trigger: ch, start: "top 70%" } });
    });

    /* day-figure leader lines draw */
    ScrollTrigger.batch(".day-step", { start: "top 85%", onEnter: function (b) { b.forEach(function (s) { s.classList.add("is-drawn"); }); } });

    /* delegate reading head */
    qsa(".delegate").forEach(function (dl) {
      ScrollTrigger.create({ trigger: dl, start: "top 55%", end: "bottom 45%", onToggle: function (self) { dl.classList.toggle("is-reading", self.isActive); } });
    });

    return function () { document.body.classList.remove("js-anim"); };
  });

  /* ── Refresh after fonts load ── */
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  window.addEventListener("load", function () { ScrollTrigger.refresh(); });
})();
