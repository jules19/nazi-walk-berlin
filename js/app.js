/* ============ Berlin 1933–1945 walk — app logic ============ */
"use strict";

/* ---------- state ---------- */
const LS_KEY = "bw-visited-v1";
let visited = new Set(JSON.parse(localStorage.getItem(LS_KEY) || "[]"));
let map, meMarker, meCircle, watchId = null;
const stopMarkers = {};
let currentStopId = null;

function saveVisited() {
  localStorage.setItem(LS_KEY, JSON.stringify([...visited]));
}

/* ---------- helpers ---------- */
const $ = sel => document.querySelector(sel);

function haversine(a, b) {
  const R = 6371000, rad = Math.PI / 180;
  const dLat = (b[0] - a[0]) * rad, dLng = (b[1] - a[1]) * rad;
  const s = Math.sin(dLat / 2) ** 2 +
    Math.cos(a[0] * rad) * Math.cos(b[0] * rad) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(s));
}

/* distance along the route polyline between two stops (by nearest vertex) */
function nearestRouteIdx(latlng) {
  let best = 0, bestD = Infinity;
  ROUTE.forEach((p, i) => {
    const d = haversine(p, latlng);
    if (d < bestD) { bestD = d; best = i; }
  });
  return best;
}
function legDistance(stopA, stopB) {
  const i0 = nearestRouteIdx([stopA.lat, stopA.lng]);
  const i1 = nearestRouteIdx([stopB.lat, stopB.lng]);
  const [a, b] = i0 <= i1 ? [i0, i1] : [i1, i0];
  let d = 0;
  for (let i = a; i < b; i++) d += haversine(ROUTE[i], ROUTE[i + 1]);
  return d;
}
function fmtDist(m) {
  return m < 950 ? `${Math.round(m / 10) * 10} m` : `${(m / 1000).toFixed(1)} km`;
}
function walkMins(m) { return Math.max(1, Math.round(m / 75)); } // ~4.5 km/h

/* ---------- tabs ---------- */
document.querySelectorAll("#tabbar .tab").forEach(btn => {
  btn.addEventListener("click", () => {
    // tapping Map while already there dismisses the stop sheet
    if (btn.dataset.view === "map" && btn.classList.contains("active")) {
      setSheet("hidden");
      return;
    }
    document.querySelectorAll("#tabbar .tab").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
    btn.classList.add("active");
    $(`#view-${btn.dataset.view}`).classList.add("active");
    if (btn.dataset.view === "map" && map) setTimeout(() => map.invalidateSize(), 60);
  });
});
function gotoMapTab() {
  document.querySelector('#tabbar .tab[data-view="map"]').click();
}

/* ---------- map ---------- */
function initMap() {
  map = L.map("map", { zoomControl: false, attributionControl: true });
  map.attributionControl.setPrefix(false);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    className: "map-tiles",
    crossOrigin: true,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // route line (dark casing first, amber line on top)
  L.polyline(ROUTE, {
    color: "#14161c", weight: 8, opacity: 0.35, lineJoin: "round"
  }).addTo(map);
  L.polyline(ROUTE, {
    color: "#d9a441", weight: 4, opacity: 0.85, lineJoin: "round"
  }).addTo(map);

  // stop markers
  WALK.stops.forEach(stop => {
    const m = L.marker([stop.lat, stop.lng], {
      icon: stopIcon(stop), zIndexOffset: 100
    }).addTo(map);
    m.on("click", () => openStop(stop.id, false));
    stopMarkers[stop.id] = m;
  });

  // extension markers (dashed grey)
  WALK.extensions.forEach(ext => {
    const m = L.marker([ext.lat, ext.lng], {
      icon: L.divIcon({
        className: "",
        html: `<div class="stop-marker ext-marker">S</div>`,
        iconSize: [28, 28], iconAnchor: [14, 14]
      })
    }).addTo(map);
    m.bindPopup(`<b>${ext.name}</b><br>${ext.sub}<br><i>${ext.transit}</i>`);
  });

  fitRoute();

  // tapping the bare map dismisses the stop sheet
  map.on("click", () => setSheet("hidden"));

  $("#btn-fitroute").addEventListener("click", fitRoute);
  $("#btn-locate").addEventListener("click", toggleLocate);
}

function stopIcon(stop) {
  const cls = ["stop-marker"];
  if (visited.has(stop.id)) cls.push("visited");
  if (stop.id === currentStopId) cls.push("current");
  return L.divIcon({
    className: "",
    html: `<div class="${cls.join(" ")}">${stop.num}</div>`,
    iconSize: [28, 28], iconAnchor: [14, 14]
  });
}
function refreshMarker(id) {
  const stop = WALK.stops.find(s => s.id === id);
  if (stop && stopMarkers[id]) stopMarkers[id].setIcon(stopIcon(stop));
}

function fitRoute() {
  map.fitBounds(L.latLngBounds(ROUTE).pad(0.08));
}

/* ---------- geolocation ---------- */
function toggleLocate() {
  if (watchId !== null) {
    navigator.geolocation.clearWatch(watchId);
    watchId = null;
    $("#btn-locate").classList.remove("on");
    if (meMarker) { map.removeLayer(meMarker); meMarker = null; }
    if (meCircle) { map.removeLayer(meCircle); meCircle = null; }
    return;
  }
  if (!("geolocation" in navigator)) {
    alert("No geolocation available on this device/browser.");
    return;
  }
  $("#btn-locate").classList.add("on");
  let firstFix = true;
  watchId = navigator.geolocation.watchPosition(pos => {
    const ll = [pos.coords.latitude, pos.coords.longitude];
    if (!meMarker) {
      meMarker = L.marker(ll, {
        icon: L.divIcon({ className: "", html: '<div class="me-dot"></div>', iconSize: [16, 16], iconAnchor: [8, 8] }),
        zIndexOffset: 500
      }).addTo(map);
      meCircle = L.circle(ll, { radius: pos.coords.accuracy, color: "#4f9cf0", weight: 1, opacity: 0.5, fillOpacity: 0.08 }).addTo(map);
    } else {
      meMarker.setLatLng(ll);
      meCircle.setLatLng(ll).setRadius(pos.coords.accuracy);
    }
    if (firstFix) { map.setView(ll, Math.max(map.getZoom(), 16)); firstFix = false; }
    updateNextBanner(ll);
  }, err => {
    $("#btn-locate").classList.remove("on");
    watchId = null;
    alert("Couldn't get your location: " + err.message);
  }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 });
}

/* ---------- "next stop" banner ---------- */
function updateNextBanner(myLatLng) {
  const next = WALK.stops.find(s => !visited.has(s.id));
  const banner = $("#next-banner");
  if (!next) {
    banner.classList.add("hidden");
    return;
  }
  let distTxt = "";
  if (myLatLng) {
    const d = haversine(myLatLng, [next.lat, next.lng]);
    distTxt = ` — ${fmtDist(d)} away (~${walkMins(d)} min)`;
  }
  $("#next-banner-btn").innerHTML = `Next: <b>${next.num}. ${next.name}</b>${distTxt}`;
  $("#next-banner-btn").onclick = () => openStop(next.id, true);
  banner.classList.remove("hidden");
}

/* ---------- bottom sheet ---------- */
const sheet = $("#sheet");
let sheetState = "hidden"; // hidden | peek | full
function setSheet(state) {
  sheetState = state;
  sheet.classList.remove("sheet-hidden", "sheet-peek", "sheet-full");
  sheet.classList.add(`sheet-${state}`);
}
$("#sheet-grip").addEventListener("click", () => {
  setSheet(sheetState === "full" ? "peek" : "full");
});
$("#sheet-close").addEventListener("click", () => setSheet("hidden"));
let touchY = null;
$("#sheet-grip").addEventListener("touchstart", e => { touchY = e.touches[0].clientY; }, { passive: true });
$("#sheet-grip").addEventListener("touchend", e => {
  if (touchY === null) return;
  const dy = e.changedTouches[0].clientY - touchY;
  touchY = null;
  if (dy < -28) setSheet("full");
  else if (dy > 28) setSheet(sheetState === "full" ? "peek" : "hidden");
});

function openStop(id, panTo) {
  const stop = WALK.stops.find(s => s.id === id);
  if (!stop) return;
  const prevId = currentStopId;
  currentStopId = id;
  if (prevId) refreshMarker(prevId);
  refreshMarker(id);

  renderStopSheet(stop);
  gotoMapTab();
  setSheet(sheetState === "full" ? "full" : "peek");
  if (panTo && map) map.setView([stop.lat, stop.lng], Math.max(map.getZoom(), 16));
  $("#sheet-content").scrollTop = 0;
}

function renderStopSheet(stop) {
  const i = WALK.stops.indexOf(stop);
  const prev = WALK.stops[i - 1], next = WALK.stops[i + 1];
  const isV = visited.has(stop.id);
  const legTxt = next ? `${fmtDist(legDistance(stop, next))} to stop ${next.num}` : "End of the walk";

  let html = `
    <div class="sheet-head">
      <div class="sheet-num">${stop.num}</div>
      <div>
        <h2>${stop.name}</h2>
        <p class="sub">${stop.sub}</p>
      </div>
    </div>
    <div class="sheet-meta">
      <span class="chip">📍 ${stop.address}</span>
      <span class="chip">⏱ ~${stop.visitMin} min here</span>
      <span class="chip">➡ ${legTxt}</span>
    </div>`;

  stop.sections.forEach(sec => {
    html += `<div class="sheet-section"><h3>${sec.h}</h3><p>${md(sec.p)}</p></div>`;
  });

  if (stop.facts && stop.facts.length) {
    html += `<div class="sheet-section"><h3>Worth knowing</h3>`;
    stop.facts.forEach(f => { html += `<div class="fact-card">${md(f)}</div>`; });
    html += `</div>`;
  }
  if (stop.lookFor && stop.lookFor.length) {
    html += `<div class="sheet-section"><h3>Look for</h3><ul class="lookfor">`;
    stop.lookFor.forEach(l => { html += `<li>${md(l)}</li>`; });
    html += `</ul></div>`;
  }
  if (stop.tip) html += `<div class="tip-card">${md(stop.tip)}</div>`;

  html += `
    <div class="sheet-actions">
      <button class="visit-btn ${isV ? "is-visited" : ""}" id="sheet-visit">
        ${isV ? "✓ Visited" : "Mark as visited"}
      </button>
    </div>
    <div class="sheet-nav">
      <button id="sheet-prev" ${prev ? "" : "disabled"}>‹ ${prev ? prev.num + ". " + prev.name : ""}</button>
      <button id="sheet-next" ${next ? "" : "disabled"}>${next ? next.num + ". " + next.name : ""} ›</button>
    </div>`;

  $("#sheet-content").innerHTML = html;

  $("#sheet-visit").addEventListener("click", () => {
    toggleVisited(stop.id);
    renderStopSheet(stop);
  });
  if (prev) $("#sheet-prev").addEventListener("click", () => openStop(prev.id, true));
  if (next) $("#sheet-next").addEventListener("click", () => openStop(next.id, true));
}

/* minimal emphasis: *italics* */
function md(s) {
  return s.replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function toggleVisited(id) {
  if (visited.has(id)) visited.delete(id);
  else visited.add(id);
  saveVisited();
  refreshMarker(id);
  renderStopList();
  updateNextBanner(meMarker ? [meMarker.getLatLng().lat, meMarker.getLatLng().lng] : null);
}

/* ---------- stop list view ---------- */
function renderStopList() {
  const ol = $("#stop-list");
  ol.innerHTML = "";
  let totalM = 0;
  WALK.stops.forEach((stop, i) => {
    const next = WALK.stops[i + 1];
    const leg = next ? legDistance(stop, next) : 0;
    totalM += leg;
    const li = document.createElement("li");
    li.className = "stop-row" + (visited.has(stop.id) ? " visited" : "");
    li.innerHTML = `
      <div class="n">${stop.num}</div>
      <div class="body">
        <div class="t">${stop.name}</div>
        <div class="s">${stop.sub}</div>
      </div>
      ${visited.has(stop.id)
        ? `<div class="check">✓</div>`
        : next
          ? `<div class="leg">${fmtDist(leg)}<br>to next</div>`
          : `<div class="leg">finish</div>`}
    `;
    li.addEventListener("click", () => openStop(stop.id, true));
    ol.appendChild(li);
  });

  const done = WALK.stops.filter(s => visited.has(s.id)).length;
  $("#progress-line").textContent =
    `${done} of ${WALK.stops.length} stops visited · ${(totalM / 1000).toFixed(1)} km on foot · start early, finish at dusk`;
  $("#progress-fill").style.width = `${(done / WALK.stops.length) * 100}%`;
}

/* ---------- extras view ---------- */
function renderExtras() {
  const wrap = $("#extras-list");
  wrap.innerHTML = "";
  WALK.extensions.forEach(ext => {
    const card = document.createElement("div");
    card.className = "ext-card";
    card.innerHTML = `
      <h2>${ext.name}</h2>
      <p class="sub">${ext.sub}</p>
      <p class="transit"><b>Getting there:</b> ${ext.transit} · <b>Time:</b> ${ext.time}</p>
      <p class="desc clamped">${ext.desc}</p>
      <button class="ext-toggle">Read more</button>
    `;
    const desc = card.querySelector(".desc");
    const tog = card.querySelector(".ext-toggle");
    tog.addEventListener("click", () => {
      const clamped = desc.classList.toggle("clamped");
      tog.textContent = clamped ? "Read more" : "Show less";
    });
    wrap.appendChild(card);
  });
}

/* ---------- info view ---------- */
function renderInfo() {
  const c = $("#info-content");
  let html = `<p class="lead"><strong>${WALK.subtitle}</strong></p>`;
  WALK.intro.forEach(p => { html += `<p class="lead">${p}</p>`; });
  c.innerHTML = html;

  const order = ["stolpersteine", "december", "conduct", "sources"];
  order.forEach(key => {
    const sec = WALK.practical[key];
    const card = document.createElement("section");
    card.className = "info-card";
    card.innerHTML = `<h2>${sec.h}</h2><p>${md(sec.p)}</p>`;
    c.appendChild(card);
  });

  $("#btn-reset").addEventListener("click", () => {
    if (!confirm("Clear all visited checkmarks?")) return;
    visited = new Set();
    saveVisited();
    WALK.stops.forEach(s => refreshMarker(s.id));
    renderStopList();
    updateNextBanner(null);
  });
}

/* ---------- offline tile download ---------- */
const TILE_CACHE = "bw-tiles-v1";
const TILE_HOST = "https://tile.openstreetmap.org";

function lat2tile(lat, z) {
  return Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) + 1 / Math.cos(lat * Math.PI / 180)) / Math.PI) / 2 * 2 ** z);
}
function lng2tile(lng, z) {
  return Math.floor((lng + 180) / 360 * 2 ** z);
}

/* tiles covering the route corridor + a margin, per zoom level */
function densifiedRoute(stepM) {
  const pts = [];
  for (let i = 0; i < ROUTE.length - 1; i++) {
    const a = ROUTE[i], b = ROUTE[i + 1];
    const d = haversine(a, b);
    const n = Math.max(1, Math.ceil(d / stepM));
    for (let k = 0; k < n; k++) {
      pts.push([a[0] + (b[0] - a[0]) * k / n, a[1] + (b[1] - a[1]) * k / n]);
    }
  }
  pts.push(ROUTE[ROUTE.length - 1]);
  return pts;
}

function tileList() {
  const tiles = new Set();
  const zooms = [12, 13, 14, 15, 16, 17];
  const pad = { 12: 0.02, 13: 0.012, 14: 0.007, 15: 0.004, 16: 0.0025, 17: 0.0015 };
  const points = densifiedRoute(70).concat(WALK.stops.map(s => [s.lat, s.lng]));
  zooms.forEach(z => {
    points.forEach(([lat, lng]) => {
      const p = pad[z];
      for (const la of [lat - p, lat, lat + p]) {
        for (const ln of [lng - p * 1.6, lng, lng + p * 1.6]) {
          tiles.add(`${z}/${lng2tile(ln, z)}/${lat2tile(la, z)}`);
        }
      }
    });
  });
  return [...tiles];
}

async function downloadTiles() {
  const btn = $("#btn-download-tiles");
  const prog = $("#dl-progress"), fill = $("#dl-fill"), status = $("#dl-status");
  btn.disabled = true;
  prog.classList.remove("hidden");

  const list = tileList();
  const cache = await caches.open(TILE_CACHE);
  let done = 0, failed = 0;
  status.textContent = `0 / ${list.length} tiles`;

  const CONCURRENCY = 5;
  const queue = [...list];
  async function worker() {
    while (queue.length) {
      const t = queue.shift();
      const url = `${TILE_HOST}/${t}.png`;
      try {
        const hit = await cache.match(url);
        if (!hit) {
          let res;
          try {
            res = await fetch(url, { mode: "cors" });
          } catch (corsErr) {
            res = await fetch(url, { mode: "no-cors" }); // opaque fallback
          }
          if (res.ok || res.type === "opaque") await cache.put(url, res);
          else failed++;
        }
      } catch (e) { failed++; }
      done++;
      if (done % 10 === 0 || done === list.length) {
        fill.style.width = `${(done / list.length) * 100}%`;
        status.textContent = `${done} / ${list.length} tiles${failed ? ` (${failed} failed)` : ""}`;
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  btn.disabled = false;
  if (failed < list.length * 0.1) {
    $("#dl-done").classList.remove("hidden");
    btn.textContent = "Re-download offline maps";
    localStorage.setItem("bw-tiles-done", "1");
  } else {
    status.textContent += " — many tiles failed; check your connection and try again.";
  }
}

/* ---------- boot ---------- */
function boot() {
  renderStopList();
  renderExtras();
  renderInfo();
  try {
    initMap();
  } catch (e) {
    console.error("Map failed to initialise:", e);
  }
  updateNextBanner(null);

  if (localStorage.getItem("bw-tiles-done")) {
    $("#dl-done").classList.remove("hidden");
    $("#btn-download-tiles").textContent = "Re-download offline maps";
  }
  $("#btn-download-tiles").addEventListener("click", downloadTiles);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch(() => { /* offline-first is best effort */ });
  }
}
boot();
