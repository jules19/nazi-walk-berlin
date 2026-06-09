# Berlin 1933–1945 — A Self-Guided History Walk

An offline-capable PWA for a full-day walking tour of Third Reich history in
central Berlin: **24 stops over ~12.5 km**, from the Reichstag fire to the
Führerbunker, the Topography of Terror, the Bebelplatz book burning, the
Rosenstraße protest and the Neue Synagoge — plus 7 S-Bahn extensions
(Wannsee, Gleis 17, Plötzensee, Sachsenhausen, Tempelhof, Karlshorst,
Olympiastadion).

Built for walking the route on an iPhone in December: dark UI, big touch
targets, route + facts fully offline, dusk-timed finale.

## Features

- **Interactive map** (Leaflet + OpenStreetMap) with the full walking route,
  numbered stop markers, live GPS position and a "next stop" banner with
  distance/time.
- **Rich stop content**: history, human stories, myth-busting facts,
  "look for" details and practical tips for every stop.
- **Works fully offline**: the app shell is cached by a service worker, and a
  one-tap **"Download offline maps"** button pre-caches ~264 OSM tiles
  (≈5–8 MB) covering the route corridor at zooms 12–17. No roaming needed.
- **Progress tracking**: mark stops visited (persisted in localStorage),
  progress bar, auto-suggested next stop.
- **Practical guidance**: December timing, memorial etiquette, German law on
  Nazi symbols (§86a StGB), Stolpersteine explainer, source notes.

## Hosting (required once)

Service workers need HTTPS, so the app must be hosted — GitHub Pages is the
zero-cost way:

1. Push this repo to GitHub (already done if you're reading this there).
2. Repo **Settings → Pages → Source**: deploy from branch, select the branch,
   root folder (`.nojekyll` is already in place).
3. The app appears at `https://<user>.github.io/nazi-walk-berlin/`.

## Install on iPhone

1. Open the GitHub Pages URL in **Safari**.
2. Share button → **Add to Home Screen**.
3. Launch from the home-screen icon (runs standalone, full screen).
4. On WiFi, go to **Info → Download offline maps** before you fly.

## Development

No build step — plain HTML/CSS/JS. Leaflet 1.9.4 is vendored in
`vendor/leaflet/` so the app has zero runtime CDN dependencies.

```
index.html            app shell (4 views: Map / Stops / Extras / Info)
css/style.css         dark "archive" theme, iOS safe-area aware
js/data.js            all historical content (stops, extensions, practical)
js/route.js           hand-traced walking route polyline (~98 points)
js/app.js             map, bottom sheet, progress, geolocation, tile downloader
sw.js                 service worker: shell precache + tile cache-first
tools/make_icons.py   procedural PNG icon generator (no PIL needed)
tools/smoketest.js    jsdom DOM smoke test (npm i jsdom; node smoketest.js)
```

Local preview: `python3 -m http.server` and open `http://localhost:8000`
(service worker also works on `localhost` without HTTPS).

## Accuracy notes

- Stop texts are based on on-site documentation of the relevant memorial
  foundations and standard scholarship; where a story is legend or disputed
  (Chancellery marble reuse, the Rosenstraße release debate) the text says so.
- Coordinates are accurate to a few metres; the route polyline is hand-traced
  along streets (±20 m) — it's a guide line, not turn-by-turn navigation.
- **Verify opening hours before travelling**, especially around 24–26 December.

## Etiquette & law

This is a walk through sites of dictatorship, genocide and resistance. The
app's Info tab covers conduct at memorials and the German criminal code on
Nazi symbols and gestures (§86a StGB) — read it before you go.

Map data © [OpenStreetMap](https://www.openstreetmap.org/copyright)
contributors. Personal, non-commercial use.
