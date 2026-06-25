/* ── Qubit Lattice instrument ──
   Site-wide decorative canvas: qubit nodes float in blurred superposition and,
   as scroll progress (the "measurement") rises, collapse onto a rectilinear
   grid with a gold edge-flash. Exposes window.CoherenceCore.setProgress/Pointer.
   Option B: a subtle WebGL probability-fog behind it on capable desktops only.
   Honors prefers-reduced-motion (one static measured frame). aria-hidden.      */
(function () {
  "use strict";
  var cv = document.getElementById("lattice");
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var W = 0, H = 0, DPR = 1, nodes = [], spacing = 84, time = 0;
  var progress = 0, px = 0, py = 0, raf = 0;
  var CYAN = [56, 225, 230], VIOLET = [110, 75, 255], GOLD = [251, 182, 21];

  function rnd(a, b) { return a + (b - a) * fakeRand(); }
  var seed = 20260706;
  function fakeRand() { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; }
  function smooth(e0, e1, x) { x = Math.max(0, Math.min(1, (x - e0) / (e1 - e0))); return x * x * (3 - 2 * x); }

  function build() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * DPR; cv.height = H * DPR; cv.style.width = W + "px"; cv.style.height = H + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    var area = W * H, cap = W < 760 ? 70 : W < 1200 ? 130 : 190;
    spacing = Math.max(64, Math.sqrt(area / cap));
    var cols = Math.ceil(W / spacing) + 1, rows = Math.ceil(H / spacing) + 1;
    var ox = (W - (cols - 1) * spacing) / 2, oy = (H - (rows - 1) * spacing) / 2;
    nodes = []; seed = 20260706;
    var i = 0;
    for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
      var gx = ox + c * spacing, gy = oy + r * spacing;
      nodes.push({
        gx: gx, gy: gy,
        ox: gx + rnd(-.46, .46) * spacing, oy: gy + rnd(-.46, .46) * spacing,
        ph: rnd(0, Math.PI * 2), amp: rnd(.18, .5) * spacing,
        gold: (i % 8 === 3), col: (i % 3 === 0) ? VIOLET : CYAN, x: gx, y: gy
      });
      i++;
    }
  }

  function paint() {
    ctx.clearRect(0, 0, W, H);
    var cP = smooth(0, .16, progress);        // collapse completes in first 16% of scroll
    var spread = 1 - cP;
    var parX = px * 14 * spread, parY = py * 10 * spread;

    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var jx = Math.sin(time + n.ph) * n.amp * spread * .5;
      var jy = Math.cos(time * .9 + n.ph) * n.amp * spread * .5;
      n.x = (n.ox + (n.gx - n.ox) * cP) + jx + parX;
      n.y = (n.oy + (n.gy - n.oy) * cP) + jy + parY;
    }

    ctx.globalCompositeOperation = "lighter";
    // links (nearest neighbour by squared distance)
    var thr = spacing * 1.25, thr2 = thr * thr;
    ctx.lineWidth = 1;
    for (var a = 0; a < nodes.length; a++) {
      for (var b = a + 1; b < nodes.length; b++) {
        var dx = nodes[a].x - nodes[b].x, dy = nodes[a].y - nodes[b].y, d2 = dx * dx + dy * dy;
        if (d2 > thr2) continue;
        var al = (1 - d2 / thr2) * (.12 + .14 * cP);
        var goldEdge = cP > .55 && (nodes[a].gold || nodes[b].gold);
        var col = goldEdge ? GOLD : CYAN;
        ctx.strokeStyle = "rgba(" + col[0] + "," + col[1] + "," + col[2] + "," + al.toFixed(3) + ")";
        ctx.beginPath(); ctx.moveTo(nodes[a].x, nodes[a].y); ctx.lineTo(nodes[b].x, nodes[b].y); ctx.stroke();
      }
    }
    // nodes (ghost copies in superposition, crisp when measured)
    for (var k = 0; k < nodes.length; k++) {
      var nd = nodes[k], col2 = nd.gold ? GOLD : nd.col;
      var ghosts = spread > .04 ? 4 : 1, baseA = nd.gold ? .9 : .6;
      for (var g = 0; g < ghosts; g++) {
        var off = g === 0 ? 0 : 1;
        var gx2 = nd.x + Math.cos(time * 1.2 + nd.ph + g) * nd.amp * spread * off;
        var gy2 = nd.y + Math.sin(time * 1.4 + nd.ph + g * 1.7) * nd.amp * spread * off;
        var aa = (g === 0 ? baseA : .12 * spread);
        var rad = (nd.gold ? 2.2 : 1.6) + cP * 1.1;
        ctx.fillStyle = "rgba(" + col2[0] + "," + col2[1] + "," + col2[2] + "," + aa.toFixed(3) + ")";
        ctx.beginPath(); ctx.arc(gx2, gy2, rad, 0, Math.PI * 2); ctx.fill();
        if (g === 0 && (nd.gold || cP > .7)) {
          ctx.fillStyle = "rgba(" + col2[0] + "," + col2[1] + "," + col2[2] + "," + (aa * .25).toFixed(3) + ")";
          ctx.beginPath(); ctx.arc(gx2, gy2, rad * 3.2, 0, Math.PI * 2); ctx.fill();
        }
      }
    }
    ctx.globalCompositeOperation = "source-over";
  }

  function loop() { time += .006; paint(); if (gl) drawGL(); raf = requestAnimationFrame(loop); }

  /* ── Optional WebGL probability-fog (capable desktops only) ── */
  var gl = null, glcv = null, uTime = null, uCollapse = null, uRes = null;
  function initGL() {
    if (reduce || window.innerWidth < 1025) return;
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    try {
      if (navigator.connection && navigator.connection.saveData) return;
      glcv = document.createElement("canvas"); glcv.id = "lattice-gl";
      glcv.setAttribute("aria-hidden", "true");
      glcv.style.cssText = "position:fixed;inset:0;width:100%;height:100%;z-index:0;pointer-events:none;opacity:.5";
      cv.parentNode.insertBefore(glcv, cv);
      gl = glcv.getContext("webgl", { antialias: false, alpha: true, premultipliedAlpha: false });
      if (!gl) { glcv.remove(); gl = null; return; }
      var vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
      var fs = [
        "precision highp float;uniform vec2 r;uniform float t;uniform float c;",
        "float wave(vec2 u,float f,float s){return sin(u.x*f+t*s)*cos(u.y*f*0.9-t*s*0.7);}",
        "void main(){vec2 u=(gl_FragCoord.xy/r-0.5)*vec2(r.x/r.y,1.0);",
        "float q=mix(1.0,8.0,c);",                                   // quantize fringes on collapse
        "float w=wave(u,3.0,0.25)+0.6*wave(u,6.0,0.4)+0.4*wave(u,11.0,0.15);",
        "float fr=mix(w, floor(w*q)/q, c*0.8);",
        "float d=length(u);float vig=smoothstep(1.1,0.2,d);",
        "vec3 cyan=vec3(0.22,0.88,0.90),viol=vec3(0.43,0.29,1.0),gold=vec3(0.98,0.71,0.08);",
        "vec3 col=mix(viol,cyan,0.5+0.5*fr);",
        "float mote=smoothstep(0.86,1.0,sin(u.x*40.0+t)*sin(u.y*40.0-t*0.8));",
        "col+=gold*mote*0.5*(0.4+0.6*c);",
        "float a=(0.05+0.06*abs(fr))*vig;",
        "gl_FragColor=vec4(col*a,a);}"
      ].join("");
      function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; }
      var prog = gl.createProgram();
      gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { glcv.remove(); gl = null; return; }
      gl.useProgram(prog);
      var buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
      var loc = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
      uTime = gl.getUniformLocation(prog, "t"); uCollapse = gl.getUniformLocation(prog, "c"); uRes = gl.getUniformLocation(prog, "r");
      gl.enable(gl.BLEND); gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      sizeGL();
    } catch (e) { if (glcv) glcv.remove(); gl = null; }
  }
  function sizeGL() { if (!gl) return; var d = Math.min(1.5, window.devicePixelRatio || 1); glcv.width = window.innerWidth * d; glcv.height = window.innerHeight * d; gl.viewport(0, 0, glcv.width, glcv.height); }
  function drawGL() { gl.uniform1f(uTime, time * 8); gl.uniform1f(uCollapse, smooth(0, .16, progress)); gl.uniform2f(uRes, glcv.width, glcv.height); gl.drawArrays(gl.TRIANGLES, 0, 3); }

  window.CoherenceCore = {
    setProgress: function (p) { progress = Math.max(0, Math.min(1, p)); if (reduce) paint(); },
    setPointer: function (x, y) { px = x; py = y; }
  };

  function start() {
    build(); initGL();
    if (reduce) { progress = 1; paint(); if (gl) drawGL(); return; }
    cancelAnimationFrame(raf); raf = requestAnimationFrame(loop);
  }
  var rt;
  window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(function () { build(); sizeGL(); }, 180); });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { cancelAnimationFrame(raf); raf = 0; }
    else if (!reduce && !raf) raf = requestAnimationFrame(loop);
  });
  window.addEventListener("pagehide", function () { cancelAnimationFrame(raf); });
  start();
})();
