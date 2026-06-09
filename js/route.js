/* Walking route geometry: hand-traced along streets between the 24 stops.
   Format: [lat, lng]. Approximate (±20 m) — use the on-map line as a guide,
   not turn-by-turn navigation. Total ≈ 12.5 km. */

const ROUTE = [
  // 1 Reichstag → 2 Sinti & Roma Memorial
  [52.51863, 13.37624],
  [52.51815, 13.37590],
  [52.51790, 13.37520],
  // → 3 Soviet War Memorial (west along Simsonweg / Str. des 17. Juni)
  [52.51755, 13.37330],
  [52.51680, 13.37120],
  [52.51640, 13.36960],
  [52.51612, 13.36710],
  // → 4 Brandenburg Gate (back east)
  [52.51640, 13.36960],
  [52.51650, 13.37300],
  [52.51640, 13.37580],
  [52.51628, 13.37770],
  // → 5 Holocaust Memorial (south on Ebertstraße)
  [52.51560, 13.37800],
  [52.51470, 13.37840],
  [52.51397, 13.37880],
  // → 6 Memorial to Homosexuals (across Ebertstraße)
  [52.51385, 13.37720],
  [52.51353, 13.37615],
  // → 7 T4 Memorial (south, then west on Tiergartenstraße)
  [52.51300, 13.37680],
  [52.51160, 13.37660],
  [52.51030, 13.37580],
  [52.50990, 13.37430],
  [52.50975, 13.37200],
  [52.50975, 13.36963],
  // → 8 Bendlerblock (west, then south on Stauffenbergstraße)
  [52.50950, 13.36700],
  [52.50930, 13.36480],
  [52.50820, 13.36420],
  [52.50700, 13.36330],
  [52.50650, 13.36180],
  // → 9 Potsdamer Platz (east along Reichpietschufer, NE on Potsdamer Str.)
  [52.50570, 13.36250],
  [52.50580, 13.36600],
  [52.50620, 13.36950],
  [52.50680, 13.37200],
  [52.50790, 13.37400],
  [52.50880, 13.37550],
  [52.50940, 13.37640],
  // → 10 Führerbunker site (north on Ebertstr., In den Ministergärten)
  [52.51060, 13.37610],
  [52.51180, 13.37700],
  [52.51210, 13.37850],
  [52.51240, 13.38020],
  [52.51260, 13.38120],
  // → 11 New Reich Chancellery site (Voßstraße)
  [52.51200, 13.38140],
  [52.51165, 13.38230],
  [52.51155, 13.38330],
  // → 12 Wilhelmplatz / Mohrenstraße
  [52.51150, 13.38390],
  [52.51175, 13.38400],
  [52.51190, 13.38440],
  // → 13 Aviation Ministry (south on Wilhelmstraße)
  [52.51080, 13.38390],
  [52.50950, 13.38380],
  [52.50840, 13.38375],
  [52.50760, 13.38370],
  // → 14 Topography of Terror
  [52.50690, 13.38360],
  [52.50625, 13.38330],
  // → 15 Anhalter Bahnhof (west on Niederkirchnerstr., south on Stresemannstr.)
  [52.50640, 13.38150],
  [52.50560, 13.38080],
  [52.50430, 13.38070],
  [52.50330, 13.38120],
  [52.50260, 13.38170],
  // → 16 Checkpoint Charlie (east on Anhalter Str., north on Wilhelmstr., east on Kochstr.)
  [52.50330, 13.38330],
  [52.50400, 13.38560],
  [52.50480, 13.38640],
  [52.50650, 13.38680],
  [52.50660, 13.38850],
  [52.50670, 13.39010],
  [52.50755, 13.39035],
  // → 17 Bebelplatz (north on Friedrichstr., via Gendarmenmarkt)
  [52.50880, 13.39000],
  [52.51000, 13.38980],
  [52.51190, 13.38940],
  [52.51230, 13.39150],
  [52.51280, 13.39260],
  [52.51380, 13.39280],
  [52.51470, 13.39300],
  [52.51500, 13.39370],
  [52.51560, 13.39400],
  [52.51612, 13.39395],
  // → 18 St. Hedwig's Cathedral
  [52.51570, 13.39480],
  // → 19 Neue Wache (NE to Unter den Linden)
  [52.51620, 13.39550],
  [52.51680, 13.39590],
  [52.51720, 13.39650],
  [52.51745, 13.39690],
  // → 20 Lustgarten (east, over the Schlossbrücke)
  [52.51770, 13.39790],
  [52.51800, 13.39870],
  [52.51860, 13.39950],
  // → 21 Rosenstraße (NE along Karl-Liebknecht-Straße)
  [52.51930, 13.40060],
  [52.52010, 13.40170],
  [52.52090, 13.40280],
  [52.52130, 13.40330],
  // → 22 Otto Weidt's Workshop (north past Hackescher Markt, Rosenthaler Str.)
  [52.52200, 13.40290],
  [52.52260, 13.40250],
  [52.52350, 13.40240],
  [52.52440, 13.40250],
  [52.52500, 13.40250],
  // → 23 Große Hamburger Straße (west on Sophienstraße)
  [52.52520, 13.40180],
  [52.52530, 13.40100],
  [52.52510, 13.40080],
  [52.52470, 13.40060],
  // → 24 Neue Synagoge (south to Oranienburger Str., then west)
  [52.52430, 13.40020],
  [52.52450, 13.39800],
  [52.52465, 13.39600],
  [52.52480, 13.39410]
];
