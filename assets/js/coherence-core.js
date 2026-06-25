/* ── Coherence core ──
   A small canvas instrument on the cover: a Bloch-style sphere whose state
   vector opens in blurred superposition and collapses to a measured direction
   as scroll progress → 1. One ambient precession loop; pointer nudges the
   measured axis. Honors prefers-reduced-motion (renders one static frame).     */
(function () {
  "use strict";

  var cv = document.getElementById("coherence-core");
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext("2d");
  var W = cv.width, H = cv.height, CX = W / 2, CY = H / 2, R = Math.min(W, H) * 0.36;

  var INK = "#14181C", SLATE = "#5B6770", CINNABAR = "#C8412B", AMBER = "#D98A2B", PAPER = "#F4F1E8";
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var progress = 0;          // 0 superposition → 1 measured
  var phase = 0;             // precession
  var px = 0, py = 0;        // pointer offset (-1..1)
  var measured = -Math.PI * 0.62; // settled vector angle

  function lerp(a, b, t) { return a + (b - a) * t; }
  function hexA(hex, a) {
    var n = parseInt(hex.slice(1), 16);
    return "rgba(" + (n >> 16 & 255) + "," + (n >> 8 & 255) + "," + (n & 255) + "," + a + ")";
  }

  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    var p = progress;

    // sphere outline
    ctx.lineWidth = 1.1;
    ctx.strokeStyle = hexA(SLATE, 0.5);
    ctx.beginPath(); ctx.arc(CX, CY, R, 0, Math.PI * 2); ctx.stroke();

    // equator + meridian (faint)
    ctx.strokeStyle = hexA(SLATE, 0.28);
    ctx.beginPath(); ctx.ellipse(CX, CY, R, R * 0.32, 0, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.ellipse(CX, CY, R * 0.32, R, 0, 0, Math.PI * 2); ctx.stroke();

    // ghost superposition vectors fade out as p→1
    var ghosts = 5, spread = (1 - p);
    for (var i = 0; i < ghosts; i++) {
      var a = measured + Math.sin(phase * 1.3 + i * 1.7) * 1.9 * spread + (i - 2) * 0.5 * spread;
      var gx = CX + Math.cos(a) * R, gy = CY + Math.sin(a) * R;
      ctx.strokeStyle = hexA(AMBER, 0.10 * spread);
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(gx, gy); ctx.stroke();
    }

    // main state vector
    var jitter = Math.sin(phase * 0.9) * 0.18 * spread + Math.cos(phase * 1.7) * 0.10 * spread;
    var ang = measured + jitter + px * 0.4;
    var vx = CX + Math.cos(ang) * R, vy = CY + Math.sin(ang) * R + py * 4;

    ctx.strokeStyle = hexA(INK, lerp(0.45, 0.95, p));
    ctx.lineWidth = lerp(1.4, 2.2, p);
    ctx.beginPath(); ctx.moveTo(CX, CY); ctx.lineTo(vx, vy); ctx.stroke();

    // tip: slate → cinnabar as it measures
    ctx.fillStyle = p > 0.55 ? CINNABAR : hexA(SLATE, 0.9);
    ctx.beginPath(); ctx.arc(vx, vy, lerp(2.4, 4.2, p), 0, Math.PI * 2); ctx.fill();

    // origin dot
    ctx.fillStyle = hexA(INK, 0.8);
    ctx.beginPath(); ctx.arc(CX, CY, 2, 0, Math.PI * 2); ctx.fill();

    if (!reduce) { phase += 0.018; requestAnimationFrame(frame); }
  }

  var api = {
    setProgress: function (p) { progress = Math.max(0, Math.min(1, p)); if (reduce) frame(); },
    setPointer: function (x, y) { px = x; py = y; }
  };
  window.CoherenceCore = api;

  if (reduce) { progress = 1; frame(); }
  else requestAnimationFrame(frame);

  // pointer nudge over the cover
  var cover = document.getElementById("cover");
  if (cover && !reduce) {
    cover.addEventListener("pointermove", function (e) {
      var r = cover.getBoundingClientRect();
      api.setPointer(((e.clientX - r.left) / r.width - 0.5) * 2, ((e.clientY - r.top) / r.height - 0.5) * 2);
    });
  }
})();
