/* DOM smoke test (no browser needed).
   Usage:  cd tools && npm install jsdom && node smoketest.js
   Note: "infinite number of tiles" errors are a jsdom zero-layout
   artifact and are ignored; real browsers don't hit them. */
const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

const ROOT = require("path").join(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

const dom = new JSDOM(html, {
  url: "https://example.com/nazi-walk-berlin/",
  runScripts: "outside-only",
  pretendToBeVisual: true,
});
const { window } = dom;

// stubs for what jsdom lacks
window.navigator.geolocation = { watchPosition: () => 1, clearWatch: () => {} };
Object.defineProperty(window.navigator, "serviceWorker", {
  value: { register: () => Promise.resolve() },
});
window.caches = { open: async () => ({ match: async () => null, put: async () => {} }) };
window.alert = () => {};
window.confirm = () => true;

const errors = [];
window.addEventListener("error", e => errors.push(e.message));

try {
  window.eval(fs.readFileSync(path.join(ROOT, "vendor/leaflet/leaflet.js"), "utf8"));
  const bundle = ["js/data.js", "js/route.js", "js/app.js"]
    .map(f => fs.readFileSync(path.join(ROOT, f), "utf8")).join("\n;\n");
  window.eval(bundle);
} catch (e) {
  errors.push("scripts: " + e.message);
}

const $ = s => window.document.querySelector(s);
const checks = [
  ["stop list rows", window.document.querySelectorAll("#stop-list .stop-row").length === 24],
  ["extras cards", window.document.querySelectorAll("#extras-list .ext-card").length === 7],
  ["info sections", window.document.querySelectorAll("#info-content .info-card").length === 4],
  ["progress line", /24 stops/.test($("#progress-line").textContent)],
  ["map container has leaflet", $("#map").classList.contains("leaflet-container")],
  ["markers on map", window.document.querySelectorAll(".stop-marker").length >= 24],
];

// simulate opening a stop
try {
  window.document.querySelectorAll("#stop-list .stop-row")[9].click();
  checks.push(["sheet opens stop 10", /Führerbunker/.test($("#sheet-content").innerHTML)]);
  checks.push(["sheet has facts", window.document.querySelectorAll("#sheet .fact-card").length >= 2]);
  // mark visited
  $("#sheet-visit").click();
  checks.push(["visited persists", JSON.parse(window.localStorage.getItem("bw-visited-v1")).includes("fuhrerbunker")]);
  // navigate next
  $("#sheet-next").click();
  checks.push(["next navigates to 11", /Chancellery/.test($("#sheet-content").innerHTML)]);
  // dismissal paths: close button, then re-open and Map tab tap
  $("#sheet-close").click();
  checks.push(["close button hides sheet", $("#sheet").classList.contains("sheet-hidden")]);
  window.document.querySelectorAll("#stop-list .stop-row")[0].click();
  checks.push(["sheet reopens", !$("#sheet").classList.contains("sheet-hidden")]);
  window.document.querySelector('#tabbar .tab[data-view="map"]').click();
  checks.push(["map tab tap hides sheet", $("#sheet").classList.contains("sheet-hidden")]);
} catch (e) {
  errors.push("interaction: " + e.message);
}

let fail = 0;
for (const [name, ok] of checks) {
  console.log((ok ? "PASS" : "FAIL") + "  " + name);
  if (!ok) fail++;
}
const real = errors.filter(e => !/infinite number of tiles/.test(e));
if (real.length) { console.log("ERRORS:"); real.forEach(e => console.log("  -", e)); }
process.exit(fail || real.length ? 1 : 0);
