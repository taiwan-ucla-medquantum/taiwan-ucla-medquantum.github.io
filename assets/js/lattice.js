/* ── Hero field ──
   A confined, ambient qubit network inside the hero only (not a full-page
   background). Slowly drifting nodes + nearest-neighbour links over the dark
   hero photo. Pointer parallax. Pauses off-screen / hidden. Honors
   prefers-reduced-motion (one static frame). Decorative, aria-hidden.          */
(function () {
  "use strict";
  var cv = document.getElementById("hero-field");
  if (!cv || !cv.getContext) return;
  var host = cv.parentElement, ctx = cv.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W = 0, H = 0, DPR = 1, nodes = [], raf = 0, visible = true, px = 0, py = 0, tx = 0, ty = 0;
  var CYAN = [128, 196, 224], VIOLET = [128, 196, 224], GOLD = [251, 200, 90];
  var seed = 70626; function rand() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }

  function build() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    var r = host.getBoundingClientRect(); W = r.width; H = r.height || window.innerHeight;
    cv.width = W * DPR; cv.height = H * DPR; cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var cap = W < 720 ? 34 : W < 1100 ? 52 : 72; nodes = []; seed = 70626;
    for (var i = 0; i < cap; i++) nodes.push({
      x: rand() * W, y: rand() * H, vx: (rand() - .5) * .12, vy: (rand() - .5) * .12,
      r: .8 + rand() * 1.6, gold: i % 7 === 2, col: i % 3 === 0 ? VIOLET : CYAN, ph: rand() * 6.28
    });
  }
  function step() {
    tx += (px - tx) * .05; ty += (py - ty) * .05;
    ctx.clearRect(0, 0, W, H);
    var t = Date.now() ? 0 : 0; // keep deterministic-ish; drift via velocity
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      if (!reduce) { n.x += n.vx; n.y += n.vy; if (n.x < -20) n.x = W + 20; if (n.x > W + 20) n.x = -20; if (n.y < -20) n.y = H + 20; if (n.y > H + 20) n.y = -20; }
    }
    ctx.globalCompositeOperation = "lighter";
    var thr = Math.min(W, 900) * .16, thr2 = thr * thr;
    for (var a = 0; a < nodes.length; a++) for (var b = a + 1; b < nodes.length; b++) {
      var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y, d2 = dx * dx + dy * dy;
      if (d2 > thr2) continue;
      var al = (1 - d2 / thr2) * .16, gold = nodes[a].gold || nodes[b].gold, c = gold ? GOLD : CYAN;
      ctx.strokeStyle = "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + al.toFixed(3) + ")";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(nodes[a].x + tx, nodes[a].y + ty); ctx.lineTo(nodes[b].x + tx, nodes[b].y + ty); ctx.stroke();
    }
    for (var k = 0; k < nodes.length; k++) {
      var nd = nodes[k], col = nd.gold ? GOLD : nd.col, x = nd.x + tx * (nd.gold ? 1.4 : 1), y = nd.y + ty;
      ctx.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + (nd.gold ? .95 : .6) + ")";
      ctx.beginPath(); ctx.arc(x, y, nd.r + (nd.gold ? .8 : 0), 0, 6.2832); ctx.fill();
      ctx.fillStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + ",.14)";
      ctx.beginPath(); ctx.arc(x, y, (nd.r + (nd.gold ? .8 : 0)) * 3.4, 0, 6.2832); ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";
  }
  function loop() { step(); raf = requestAnimationFrame(loop); }
  function start() { build(); if (reduce) { step(); return; } cancelAnimationFrame(raf); raf = requestAnimationFrame(loop); }

  var rt; window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(build, 180); });
  host.addEventListener("pointermove", function (e) { var r = host.getBoundingClientRect(); px = ((e.clientX - r.left) / r.width - .5) * 26; py = ((e.clientY - r.top) / r.height - .5) * 18; });
  if ("IntersectionObserver" in window) new IntersectionObserver(function (es) {
    visible = es[0].isIntersecting;
    if (!visible) { cancelAnimationFrame(raf); raf = 0; } else if (!reduce && !raf) raf = requestAnimationFrame(loop);
  }, { threshold: 0 }).observe(host);
  document.addEventListener("visibilitychange", function () { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else if (visible && !reduce && !raf) raf = requestAnimationFrame(loop); });
  window.addEventListener("pagehide", function () { cancelAnimationFrame(raf); });
  start();
})();
