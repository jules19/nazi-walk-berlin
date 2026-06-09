/* ============================================================
   Berlin 1933–1945 — A Self-Guided History Walk
   All content researched for accuracy; coordinates approximate
   to within a few metres. Times assume a steady walking pace.
   ============================================================ */

const WALK = {
  title: "Berlin 1933–1945",
  subtitle: "The Rise and Fall of the Third Reich — a full-day walk",
  distanceKm: 12.5,
  stopsCount: 24,
  intro: [
    "This walk traces the physical history of the Nazi dictatorship through the heart of Berlin — from the Reichstag fire that opened the door to total power, through the government quarter where the machinery of terror was administered, to the streets of the old Jewish quarter where ordinary Berliners resisted, hid, denounced and survived.",
    "Berlin does not hide this history. Almost nothing of Nazi Berlin survives as architecture — most of it was bombed, shelled, or deliberately demolished — so this is a walk of traces: an empty parking lot over the Führerbunker, a glass plate over an empty library, brass cobblestones outside apartment doors. The emptiness is the point, and knowing what stood where transforms it.",
    "The full loop is about 12.5 km with 24 stops. A strong walker can do it in a day — in December plan to start by 9:00, as the sun sets before 16:00. The route is deliberately ordered so that the most atmospheric memorials (Bebelplatz, the Neue Synagoge dome) come at dusk, when they are lit."
  ],
  stops: [

  /* ───────────────────────── 1 ───────────────────────── */
  {
    id: "reichstag",
    num: 1,
    name: "The Reichstag",
    sub: "Where democracy burned — and where the war ended",
    lat: 52.51863, lng: 13.37624,
    address: "Platz der Republik 1",
    visitMin: 25,
    sections: [
      { h: "The fire that killed a republic",
        p: "On the night of 27 February 1933 — just four weeks after Hitler was appointed Chancellor — the Reichstag's debating chamber went up in flames. A 24-year-old Dutch council communist, Marinus van der Lubbe, was caught inside and confessed to acting alone (historians still argue whether he really did). Within hours, before the embers cooled, Hitler and Göring declared it the signal for a communist uprising. The next morning President Hindenburg signed the Reichstag Fire Decree, suspending free speech, free press, privacy of post and telephone, and protection from arbitrary arrest. Those 'temporary' emergency powers remained in force for twelve years. Mass arrests of communists and social democrats began that same night." },
      { h: "The Nazis never used it",
        p: "Here is the strange part: the Nazi parliament never sat in this building. After the fire, the rubber-stamp Reichstag met in the Kroll Opera House across the square (it stood roughly where the lawn west of here is now). It was there, on 23 March 1933, surrounded by ranks of SA men, that the Enabling Act was passed — the law by which parliament voted itself out of existence and handed Hitler the power to rule by decree. Only the 94 Social Democrats present voted no; their leader Otto Wels told Hitler to his face: 'You can take our lives and our freedom, but you cannot take our honour.'" },
      { h: "April 1945: the last battle",
        p: "To Stalin, the Reichstag was the symbol of 'fascist Germany', and he wanted it taken by May Day. The battle for the building on 30 April 1945 was fought floor by floor against a garrison that included SS men and Hitler Youth, while Hitler killed himself a few hundred metres south. The famous photograph of a Red Army soldier raising the flag over the parapet was taken (and partly staged) by Yevgeny Khaldei on 2 May. Inside today's building, Norman Foster's renovation deliberately preserved walls covered in Cyrillic graffiti scrawled by Soviet soldiers — names, home towns, and rude remarks about Hitler, conserved under glass like frescoes." }
    ],
    facts: [
      "The inscription 'Dem Deutschen Volke' (To the German People) was added in 1916 — cast from two French cannons captured in the Napoleonic Wars.",
      "Van der Lubbe was beheaded in 1934 under a law passed *after* his act — a retroactive death penalty created specially for him. German courts formally overturned his conviction in 2008.",
      "Foster's glass dome (1999) is built so the public literally walks above the heads of their members of parliament — a pointed architectural answer to 1933."
    ],
    lookFor: [
      "The mismatched stonework on the facade — shrapnel and bullet scars were left visible during restoration.",
      "If you've pre-registered online (do it weeks ahead), the dome and roof terrace visit is free, and the audio guide points out battle damage."
    ],
    tip: "Free dome visits require advance registration at bundestag.de — book before you fly. Same-day slots are sometimes available at the service centre on Scheidemannstraße."
  },

  /* ───────────────────────── 2 ───────────────────────── */
  {
    id: "sinti-roma",
    num: 2,
    name: "Memorial to the Sinti and Roma of Europe",
    sub: "The forgotten genocide — the Porajmos",
    lat: 52.51790, lng: 13.37520,
    address: "Simsonweg, Tiergarten (south of the Reichstag)",
    visitMin: 15,
    sections: [
      { h: "A pool of still water",
        p: "Israeli artist Dani Karavan designed this memorial, opened in 2012, as a circular black pool — a dark mirror reflecting the sky and the trees of the Tiergarten. At its centre is a triangular stone, echoing the badge that Sinti and Roma prisoners wore in the camps. Every day the stone is lowered and a fresh flower is placed on it. Around the rim runs the poem 'Auschwitz' by the Italian Roma musician Santino Spinelli: 'Sunken face / extinguished eyes / cold lips / silence / a torn heart / without breath / without words / no tears.' Violin music plays quietly — almost too quietly to notice at first." },
      { h: "Between 220,000 and 500,000 murdered",
        p: "The Nazi genocide of Europe's Sinti and Roma — the Porajmos, 'the devouring' — followed the same trajectory as the Holocaust of the Jews: racial registration, deportation, ghettos, and the gas chambers. In the 'Gypsy family camp' at Auschwitz-Birkenau, around 23,000 people were registered; almost all died. On the night of 2–3 August 1944 the camp was liquidated and some 4,300 men, women and children were gassed. Yet West Germany did not recognise the Porajmos as racial persecution until 1982 — survivors had been denied compensation for decades on the grounds that they were persecuted as 'criminals', not as a race." }
    ],
    facts: [
      "The chronology panels around the memorial were the subject of years of dispute over a single question: how to name the victims. The final text uses both 'Sinti and Roma' and the historical context of the slur used by the regime.",
      "The memorial took 20 years from federal approval (1992) to opening (2012) — itself a comment on how slowly this genocide entered public memory."
    ],
    lookFor: [
      "The fresh flower on the central stone — placed daily, every day of the year.",
      "The shattered-glass effect of the panels listing the camps and killing sites around the pool's edge."
    ],
    tip: "This memorial is at its most powerful when quiet. Early morning, you may have it entirely to yourself."
  },

  /* ───────────────────────── 3 ───────────────────────── */
  {
    id: "soviet-memorial",
    num: 3,
    name: "Soviet War Memorial, Tiergarten",
    sub: "Built from the rubble of the Reich, six months after its fall",
    lat: 52.51612, lng: 13.36710,
    address: "Straße des 17. Juni",
    visitMin: 15,
    sections: [
      { h: "The first monument of postwar Berlin",
        p: "The Red Army built this memorial with astonishing speed — it was inaugurated on 11 November 1945, barely six months after the surrender, while the city around it was still a field of ruins. Around 2,000 Soviet soldiers are buried here, a fraction of the roughly 80,000 Red Army dead of the Battle of Berlin. The curved colonnade is crowned by a bronze rifleman, his weapon slung — the fighting over. Persistent Berlin legend says the stone was salvaged from Hitler's ruined Reich Chancellery; the evidence is thin, but the story stuck because the symbolism was irresistible." },
      { h: "A Soviet island in the British sector",
        p: "When Berlin was divided, this memorial ended up in the British sector — yet Soviet honour guards continued to goose-step here throughout the Cold War, ferried across the Wall under escort, making it one of the strangest enclaves in the divided city. After a shooting incident in 1970, British troops guarded the Soviet guards. The two T-34 tanks flanking the memorial are claimed to have been among the first into Berlin in April 1945." }
    ],
    facts: [
      "The Battle of Berlin (16 April – 2 May 1945) cost the Red Army more casualties than the United States suffered in the entire Pacific war.",
      "Under the Two-Plus-Four Treaty of 1990, Germany is permanently obliged to maintain and protect the Soviet war memorials — including this one and the colossal one at Treptower Park."
    ],
    lookFor: [
      "The two ML-20 howitzers and T-34 tanks on their plinths — note how worn the tank treads are.",
      "Cyrillic inscriptions honouring the 'heroes of the storm of Berlin'."
    ],
    tip: "You're standing on Speer's East-West Axis: this grand boulevard was widened in 1939 as the first finished piece of 'Germania'. The Victory Column was moved to Großer Stern (visible west) the same year to clear the sightline."
  },

  /* ───────────────────────── 4 ───────────────────────── */
  {
    id: "brandenburg-gate",
    num: 4,
    name: "Brandenburg Gate",
    sub: "The torchlight parade of 30 January 1933",
    lat: 52.51628, lng: 13.37770,
    address: "Pariser Platz",
    visitMin: 15,
    sections: [
      { h: "The night the lights went out",
        p: "On the evening of 30 January 1933, hours after Hindenburg appointed Hitler Chancellor, tens of thousands of SA and SS men marched through this gate in a torchlight parade stage-managed by Joseph Goebbels. The columns of flame flowed down Unter den Linden and past the Chancellery on Wilhelmstraße, where Hitler beamed from a window and Hindenburg, at another, was said to have tapped along absently with his cane. The painter Max Liebermann, watching from his house right beside the gate (the rebuilt Liebermann-Haus stands on the same spot), delivered the most Berlin of verdicts: 'I cannot possibly eat as much as I would like to vomit.'" },
      { h: "1945 and after",
        p: "By May 1945 the gate stood scarred and pockmarked amid total ruin, the Quadriga above reduced to mangled bronze — of the original sculpture group, essentially one horse's head survived (it's now in the Märkisches Museum). The Quadriga was recast in 1957 from old moulds. From 1961 the gate stood marooned in the death strip of the Berlin Wall, accessible to no one — which is why its reopening on 22 December 1989 became *the* image of reunification." }
      ],
    facts: [
      "Goebbels' propaganda made the torchlight parade look endless; foreign correspondents reported the columns simply circled around and marched through twice.",
      "Liebermann, Germany's most famous impressionist and honorary citizen of Berlin, died ostracised in 1935; only three 'Aryan' friends dared attend his funeral. His widow Martha took poison in 1943 hours before her deportation order was to be executed."
    ],
    lookFor: [
      "The Raum der Stille (Room of Silence) in the northern gatehouse — modelled on the meditation room of the UN.",
      "Plaques on the Liebermann-Haus (north side) telling the painter's story."
    ],
    tip: "In December, Pariser Platz is bright, busy and full of mulled-wine stands — a jarring but very Berlin contrast with what you're here to see."
  },

  /* ───────────────────────── 5 ───────────────────────── */
  {
    id: "holocaust-memorial",
    num: 5,
    name: "Memorial to the Murdered Jews of Europe",
    sub: "2,711 concrete stelae over the former death strip",
    lat: 52.51397, lng: 13.37880,
    address: "Cora-Berliner-Straße 1",
    visitMin: 60,
    sections: [
      { h: "Walk in — don't walk around",
        p: "Peter Eisenman's field of 2,711 grey concrete stelae (opened 2005) only works if you enter it. From the edge it looks orderly, almost benign — knee-high slabs on a gentle slope. But the ground falls away as you walk in, the stelae rise above your head, the city's noise fades, the people you arrived with vanish down parallel corridors and reappear as strangers crossing your path. Eisenman refused to assign it a single meaning, but most visitors land on the same words: disorientation, isolation, a system that looks rational from outside and is anything but once you're inside it." },
      { h: "The Information Centre below",
        p: "Underground, the Ort der Information gives the abstraction its names. The Room of Names reads aloud short biographies of murdered Jews, one by one — reading all the known names would take more than six years of continuous recitation. The Room of Families follows fifteen specific families across Europe from photographs of weddings and beach holidays into the ghettos and camps. It is free, and it is the most important indoor hour of this walk. The memorial stands on the former death strip of the Wall — and during construction, workers hit the buried remains of the garden bunkers of Goebbels' official villa." },
      { h: "The Degussa controversy",
        p: "In 2003 construction halted when it emerged that the anti-graffiti coating protecting the stelae was made by Degussa — the company whose subsidiary Degesch had manufactured Zyklon B for the gas chambers. After bitter debate, the trustees decided to continue: the entanglement of ordinary German industry in the genocide was, in the end, part of what the memorial commemorates." }
    ],
    facts: [
      "The number 2,711 has no symbolic meaning — Eisenman has said it is simply how many stelae fit the site.",
      "The memorial's location is deliberate: not on the site of a crime, but in the absolute centre of the reunified capital, one block from the Brandenburg Gate — Germany placed its shame at its own front door.",
      "Each stele is unique: same footprint (2.38 × 0.95 m) but heights from 0 to 4.7 m, and each tilts slightly off true."
    ],
    lookFor: [
      "How the apparently flat field actually swallows you — the deepest corridors are over 2 m below street level.",
      "The queue for the Ort der Information moves fast; airport-style security."
    ],
    tip: "Etiquette matters here: no climbing or jumping on the stelae, no sunbathing. You will see people doing it anyway. (Look up the art project 'Yolocaust' if you want the definitive commentary.)"
  },

  /* ───────────────────────── 6 ───────────────────────── */
  {
    id: "homosexual-memorial",
    num: 6,
    name: "Memorial to the Homosexuals Persecuted under Nazism",
    sub: "A window into a kiss",
    lat: 52.51353, lng: 13.37615,
    address: "Ebertstraße, edge of the Tiergarten",
    visitMin: 10,
    sections: [
      { h: "Paragraph 175",
        p: "Across the road from the Holocaust Memorial, half-hidden among the trees, stands a single tilted concrete cuboid by the artists Elmgreen & Dragset (2008) — deliberately echoing one stele that wandered off from the field opposite. Through a small window, a film loops endlessly: two men, or two women, kissing. Under the Nazi-sharpened Paragraph 175, around 50,000 men were convicted of homosexuality; an estimated 5,000–15,000 were sent to concentration camps, where the pink triangle marked them for the bottom of the camp hierarchy. Many were subjected to 'medical' experiments or castration." },
      { h: "Persecution didn't end in 1945",
        p: "The bitterest fact: liberated camp survivors with pink triangles could be re-imprisoned to serve out their sentences, and West Germany kept the Nazi version of Paragraph 175 on the books unchanged until 1969. The convictions were only annulled — and survivors only symbolically compensated — in 2002 and 2017. The memorial's placement in the Tiergarten is pointed: these woods were one of Berlin's best-known gay meeting places, before and after the Nazis." }
    ],
    facts: [
      "Weimar Berlin had been the queer capital of the world — Magnus Hirschfeld's Institute of Sexual Science, the first of its kind, was looted on 6 May 1933 and its library fed the Bebelplatz book burning you'll visit later today.",
      "The film in the window is changed every two years, alternating between male and female couples after a debate about the near-invisibility of persecuted lesbian women."
    ],
    lookFor: [
      "You have to lean in close to the window to see the film — making every viewer enact a small public act of looking."
    ],
    tip: null
  },

  /* ───────────────────────── 7 ───────────────────────── */
  {
    id: "t4",
    num: 7,
    name: "Tiergartenstraße 4 — the 'Aktion T4' Memorial",
    sub: "Where the gas chambers were invented — for German patients first",
    lat: 52.50975, lng: 13.36963,
    address: "Tiergartenstraße 4, beside the Philharmonie",
    visitMin: 20,
    sections: [
      { h: "A villa address that became a codename",
        p: "On this spot, where the golden Philharmonie now stands, was a confiscated Jewish-owned villa at Tiergartenstraße 4. From 1940 it housed the bureaucracy of the 'euthanasia' programme — codename 'T4' after the address. Behind drawn curtains, doctors reviewed registration forms from asylums across the Reich and marked them with a red '+' (death) or blue '–' (life), often at a rate of hundreds per day, without ever seeing a patient. Grey buses with painted-over windows collected the selected from their institutions. More than 70,000 psychiatric patients and people with disabilities were gassed with carbon monoxide at six killing centres between January 1940 and August 1941." },
      { h: "The rehearsal for the Holocaust",
        p: "T4 is where the technology and personnel of the Holocaust were assembled: the gas chamber disguised as a shower room, the cremation of bodies, the falsified death certificates, the looting of gold teeth — all were developed here first, on disabled Germans. When public unrest and Bishop von Galen's famous sermons forced the programme officially underground in August 1941, its experienced staff were transferred east: T4 men built and ran Bełżec, Sobibór and Treblinka. Killing of patients continued covertly by starvation and overdose until 1945; total victims of the 'euthanasia' murders are estimated at around 300,000." },
      { h: "The memorial",
        p: "For decades the site was unmarked except for a bronze plaque set in the pavement (1989). The long blue glass wall and open-air exhibition were added in 2014, after disability-rights campaigners pointed out that the victims 'least able to speak for themselves' had waited longest for a memorial. The dark curved sculpture nearby, Richard Serra's 'Berlin Junction' (1987), was rededicated to the T4 victims." }
    ],
    facts: [
      "Doctors were never conscripted into T4 — participation was voluntary, and almost none refused. After the war, most returned to respectable medical careers.",
      "The exhibition is deliberately at wheelchair height with text in plain language and Braille — designed around the people the programme murdered."
    ],
    lookFor: [
      "The bronze plaque set into the pavement in front of the bus stop — easy to walk over without noticing, which is the point it was making in 1989.",
      "The grey concrete bus sculpture motif on the info panels: survivors remembered the grey buses for the rest of their lives."
    ],
    tip: "The Berlin Philharmonic often has free lunchtime concerts (Tuesdays) — a strange and moving thing to know while standing here."
  },

  /* ───────────────────────── 8 ───────────────────────── */
  {
    id: "bendlerblock",
    num: 8,
    name: "Bendlerblock — German Resistance Memorial",
    sub: "Stauffenberg and the 20 July plot died in this courtyard",
    lat: 52.50633, lng: 13.36215,
    address: "Stauffenbergstraße 13–14",
    visitMin: 60,
    sections: [
      { h: "Operation Valkyrie",
        p: "This sprawling office complex was the headquarters of the Army High Command's home forces — and the nerve centre of the 20 July 1944 plot. After Colonel Claus Schenk Graf von Stauffenberg's bomb exploded at Hitler's East Prussian headquarters that lunchtime, the conspirators tried to run their coup, 'Operation Valkyrie', from these very rooms: arrest orders teletyped across the Reich, the SS to be disarmed, a new government formed. Then the radio announced Hitler had survived. By midnight the building had turned against them. Stauffenberg, his adjutant Werner von Haeften, General Friedrich Olbricht and Colonel Mertz von Quirnheim were marched into the courtyard you're standing in and shot by the light of truck headlamps. Stauffenberg's last words: 'Es lebe das heilige Deutschland' — long live sacred Germany." },
      { h: "Much more than the generals",
        p: "Upstairs, the free Gedenkstätte Deutscher Widerstand (German Resistance Memorial Center) is the best single exhibition in Berlin on *all* German resistance — not just the aristocratic officers, but the communist and social-democratic underground, the Kreisau Circle, the Rote Kapelle, the White Rose students, Jewish resistance groups like Herbert Baum's (whose memorial you'll pass at the Lustgarten), and lone actors like Georg Elser, the carpenter whose 1939 beer-hall bomb missed Hitler by thirteen minutes. The exhibition is unsparing about how small and late military resistance was — and how comprehensively the regime murdered everyone involved: around 200 people were executed for the 20 July plot alone, many at Plötzensee (see Extensions)." }
    ],
    facts: [
      "General Fromm, who ordered the courtyard executions to silence men who could implicate him, was himself executed by the regime in March 1945.",
      "Stauffenberg had lost his right hand, two fingers of his left, and an eye in Tunisia — he armed the bomb with three fingers and a pair of pliers, and managed to arm only one of the two charges.",
      "The Bendlerblock is today part of the Federal Ministry of Defence; new Bundeswehr soldiers swear their oath in this courtyard every 20 July."
    ],
    lookFor: [
      "Richard Scheibe's bronze figure of a bound young man (1953) in the courtyard, and the plaque marking the execution spot.",
      "In the exhibition: the actual teleprinter messages of the coup, sent and countermanded within hours."
    ],
    tip: "Free entry. If you only have time for one indoor exhibition today besides the Topography of Terror, make it this one — allow 45–60 minutes."
  },

  /* ───────────────────────── 9 ───────────────────────── */
  {
    id: "potsdamer-platz",
    num: 9,
    name: "Potsdamer Platz",
    sub: "From the busiest square in Europe to a no-man's-land — and back",
    lat: 52.50940, lng: 13.37640,
    address: "Potsdamer Platz",
    visitMin: 10,
    sections: [
      { h: "Three cities in one square",
        p: "In 1929 this was the busiest traffic junction in continental Europe — the place Berliners meant when they said the city never slept. The Nazis distrusted its cosmopolitan glitter; Speer's Germania plans would have largely erased it. Allied bombing and the final battle did the job instead: by 1945 Potsdamer Platz was a moonscape, and the Wall then ran straight across it, leaving Europe's Times Square as a weed-grown void patrolled by border guards for thirty years. Everything you see — the Sony Center, the towers — was built in a single decade after 1990 on essentially empty ground." },
      { h: "Under your feet",
        p: "A few survivors: the replica of Europe's first traffic-light tower (1924) stands in the middle of the square, and the Weinhaus Huth — the lone intact building of old Potsdamer Platz — looks bizarrely small among the towers. Deep below the S-Bahn station, sections of the wartime and Cold War 'ghost station' levels survive; in the final days of the war, the S-Bahn tunnels here flooded when the SS blew the Landwehr Canal bulkhead to slow the Red Army, with civilians sheltering inside." }
    ],
    facts: [
      "A double row of cobblestones across the square (look down as you cross) traces exactly where the Wall stood.",
      "A few original Wall segments stand outside the station entrance — note the graffiti and the chiselled souvenir-hunter damage."
    ],
    lookFor: [
      "The traffic-light tower replica, and the line of Wall cobblestones crossing the square."
    ],
    tip: "Good place for a fast coffee/toilet stop (station and malls) before the dense Wilhelmstraße section — there's little en route for the next hour."
  },

  /* ───────────────────────── 10 ───────────────────────── */
  {
    id: "fuhrerbunker",
    num: 10,
    name: "Site of the Führerbunker",
    sub: "A parking lot over the place Hitler died",
    lat: 52.51260, lng: 13.38120,
    address: "Corner In den Ministergärten / Gertrud-Kolmar-Straße",
    visitMin: 15,
    sections: [
      { h: "What's under the car park",
        p: "Beneath this utterly ordinary residential parking lot lay the Führerbunker: two storeys, 8.5 metres down, under a roof of concrete more than 3 metres thick, built in 1944 in the garden of the Old Reich Chancellery. Hitler moved in permanently on 16 January 1945 and left it alive only for short moments — including his final public appearance, decorating Hitler Youth boys in the Chancellery garden above, on his 56th birthday. Here he dictated his political testament blaming the Jews for the war he had started; married Eva Braun after midnight on 29 April; and on 30 April 1945, around 3:30 in the afternoon, shot himself, Braun taking cyanide beside him. The bodies were burned in a shell crater in the garden, a few steps from where you stand. On 1 May, Magda Goebbels poisoned her six children in the bunker's upper level before she and Joseph Goebbels died in the garden above." },
      { h: "Why there's nothing here",
        p: "That nothing marks German memory culture at its most deliberate. The Soviets blew in the entrances; the GDR, building the apartment blocks around you in the late 1980s, broke up and filled much of the bunker. After reunification, authorities refused all proposals to excavate or mark it, fearing a pilgrimage site. Only in 2006 — quietly, just before the football World Cup — was the small information board you see installed, with a technical diagram and dry text. The address keeps its own counsel too: Gertrud-Kolmar-Straße is named for a great Berlin Jewish poet, murdered in Auschwitz in 1943. Her street now runs over Hitler's grave." }
    ],
    facts: [
      "The diesel generator and ventilation drew air from the garden; witnesses recalled the bunker smelled of damp concrete, diesel and boiled cabbage. Hitler's study was about 3 × 4 metres.",
      "The skull fragment long displayed in Moscow as Hitler's was DNA-tested in 2009 and found to be from a woman under 40 — but jawbone fragments matched his dental records via his dentist's assistant's testimony in 1945.",
      "Most of the bunker's shell is still down there: solid, flooded in parts, sealed, and intentionally left inaccessible."
    ],
    lookFor: [
      "The information board at the parking lot's edge — the only marker, in German and English.",
      "The GDR prefab housing all around: built deliberately banal, for the families of Stasi and government employees."
    ],
    tip: "Resist any urge to treat this as a photo-op backdrop; Berliners notice. The banality of the site is its message."
  },

  /* ───────────────────────── 11 ───────────────────────── */
  {
    id: "chancellery",
    num: 11,
    name: "Site of the New Reich Chancellery",
    sub: "Speer's 400-metre palace of intimidation — gone without trace",
    lat: 52.51155, lng: 13.38330,
    address: "Voßstraße, between Wilhelmstraße and Ebertstraße",
    visitMin: 15,
    sections: [
      { h: "Built in a year, to intimidate",
        p: "Along the entire north side of Voßstraße ran Albert Speer's New Reich Chancellery — over 400 metres of marble-clad power, thrown up in barely a year and inaugurated in January 1939, seven months before the war. Diplomats summoned to Hitler walked nearly a quarter of a kilometre through court of honour, mosaic hall, and the 146-metre Marble Gallery — deliberately twice the length of Versailles' Hall of Mirrors, with a floor polished so slick that Speer, when asked about carpets, said visitors *should* slip and slide: 'diplomats should have practice in moving on slippery surfaces.' Hitler's study alone was 400 m². The building's cost would be roughly a billion euros today; it was used for barely six years." },
      { h: "Erased — and recycled",
        p: "Wrecked in the bombing and the final battle, the ruins were demolished by the Soviets by 1949. And here's a Berlin legend worth busting: every guide used to claim its red marble was reused in the Mohrenstraße U-Bahn station around the corner. Geologists have since shown that stone is Thuringian 'Saalburg' marble delivered postwar — though Chancellery granite genuinely did end up in the Soviet war memorials you've seen and will see. Today the site is GDR apartment blocks; a kindergarten playground sits almost exactly where Hitler's study was. There is no plaque at all — erasure as policy." }
    ],
    facts: [
      "Some 4,000 workers built it in shifts around the clock; Hitler presented it as a gift of German workmanship, completed '48 hours ahead of schedule' — theatre, as the deadline had been padded.",
      "In the Chancellery's Court of Honour, the besieged garrison of Berlin formally learned of Hitler's death; the building's air-raid cellars sheltered hundreds of wounded during the final battle.",
      "Hitler's giant globe from the study (the one Chaplin spoofed) was found by Soviet soldiers; several 'Führer globes' now surface periodically at auctions, most of dubious provenance."
    ],
    lookFor: [
      "Stand at Voßstraße/Wilhelmstraße corner and pace out the length westward — it takes about five minutes to walk what was a single building.",
      "The open-air history panels on Wilhelmstraße (you'll see more at the next stop) include photos of the facade exactly aligned with where you stand."
    ],
    tip: null
  },

  /* ───────────────────────── 12 ───────────────────────── */
  {
    id: "wilhelmstrasse",
    num: 12,
    name: "Wilhelmstraße & Wilhelmplatz",
    sub: "The Reich's Whitehall: Old Chancellery, Goebbels' ministry, Hotel Kaiserhof",
    lat: 52.51190, lng: 13.38440,
    address: "Wilhelmstraße / Mohrenstraße U-Bahn",
    visitMin: 20,
    sections: [
      { h: "The most powerful street in Europe",
        p: "'Wilhelmstraße' meant the German government the way 'Whitehall' means the British one. Along this stretch stood the Old Reich Chancellery (where Hitler appeared at the famous balcony Speer added for him in 1935 — crowds below chanting until he showed himself), the Presidential Palace, and the Foreign Office where Ribbentrop signed away the peace of Europe. Free-standing history panels along the pavement show photo after photo of what stood where; the contrast with today's quiet apartment blocks is total. The street itself was, for the GDR, simply too contaminated to rebuild as anything but housing." },
      { h: "Goebbels across the square",
        p: "Wilhelmplatz — the square at Mohrenstraße U-Bahn — was where crowds gathered for the balcony appearances. On its east side stood the Ordenspalais, home of Goebbels' Reich Ministry of Public Enlightenment and Propaganda: the office that controlled every newspaper, film, broadcast, painting and concert in Germany. The ministry's huge 1930s extension survives behind it on Mauerstraße and today houses, with deliberate irony, the Federal Ministry of Labour and Social Affairs. And one more layer: the luxury Hotel Kaiserhof, from which Hitler ran his final intrigues for power in January 1933, stood on the square's south side — its site is now occupied by the embassy of North Korea." },
      { h: "January 30, 1933",
        p: "Stand here and picture the evening you heard about at the Brandenburg Gate from the other end: the torchlight columns flowing down Wilhelmstraße between the Chancellery and the Kaiserhof, Goebbels directing the spectacle like a film premiere. Twelve years later, almost to the week, Hitler descended into the bunker a few hundred metres from this spot and never really came up again." }
    ],
    facts: [
      "Mohrenstraße station was called 'Kaiserhof' until 1950 — then 'Thälmannplatz', then 'Otto-Grotewohl-Straße': four names, four Germanies, one platform.",
      "Goebbels' ministry employed barely 1,000 people at first — terrifying proof of how few professionals it takes to run total propaganda when broadcasting is centralised.",
      "The Czech embassy nearby (Wilhelmstraße 44) is a brutalist UFO worth a glance — built by the communist ČSSR on the rubble of the old diplomatic quarter."
    ],
    lookFor: [
      "The open-air 'Wilhelmstraße 1933–1945' panel exhibition along the pavement — each panel stands where its subject stood.",
      "The North Korean embassy's plain white block on Zietenplatz — once partially rented out as a budget hostel until Berlin shut that down in 2017."
    ],
    tip: null
  },

  /* ───────────────────────── 13 ───────────────────────── */
  {
    id: "aviation-ministry",
    num: 13,
    name: "Former Reich Aviation Ministry",
    sub: "Göring's intact colossus — the largest office building in Europe",
    lat: 52.50760, lng: 13.38370,
    address: "Wilhelmstraße 97 / Leipziger Straße corner",
    visitMin: 15,
    sections: [
      { h: "The building that wouldn't die",
        p: "This is your one chance today to feel Nazi state architecture with your own eyes, because almost uniquely, it survived: Ernst Sagebiel's Reich Aviation Ministry (1936) — at completion the largest office building in Europe, with around 2,800 rooms and seven kilometres of corridors. From here Hermann Göring ran the Luftwaffe, the four-year economic plan, and the plunder of occupied Europe's economies. Berliners noted the irony early: the headquarters of the air force that failed to protect Berlin came through the bombing of Berlin almost untouched. Walk along the Wilhelmstraße facade and feel the intended effect — stone, repetition, and the individual reduced to an ant." },
      { h: "Three regimes, one building",
        p: "In October 1949 the German Democratic Republic was proclaimed in its festival hall — the GDR was literally founded inside a Nazi ministry, which became the 'House of Ministries'. On 16–17 June 1953, building workers from Stalinallee marched here demanding lower work quotas, then free elections; the protest became a national uprising, crushed by Soviet tanks with dozens killed. On the building's north side you'll find both Max Lingner's 1952 socialist-realist mural of happy workers and — set in the ground before it — a 1953 memorial photograph of the real workers who marched: propaganda and reality in one frame. After 1990 the building housed the Treuhand, privatising the GDR economy (its chief, Detlev Rohwedder, was assassinated in 1991 and the building is named for him). Today: the Federal Ministry of Finance." }
    ],
    facts: [
      "Sagebiel also built Tempelhof Airport — same architect, same overwhelming horizontal monumentality (see Extensions).",
      "The building had 4,000 rooms by some counts, paternoster lifts, and its own air-raid command centre; Göring boasted no enemy bomber would ever reach the Ruhr, let alone Berlin.",
      "Rote Kapelle resistance members worked inside the Air Ministry itself — Harro Schulze-Boysen, executed 1942, fed intelligence to Moscow from Göring's own building. A memorial to him stands in the courtyard."
    ],
    lookFor: [
      "Max Lingner mural + the 1953 uprising memorial in the pavement (Leipziger Straße side, at the corner with Wilhelmstraße).",
      "Original 1930s lamps and eagles-removed scars over the doorways."
    ],
    tip: "You can't go inside (working ministry), but the exterior alone is worth slow minutes. Now brace yourself: the next stop is the hardest of the day."
  },

  /* ───────────────────────── 14 ───────────────────────── */
  {
    id: "topography",
    num: 14,
    name: "Topography of Terror",
    sub: "Gestapo, SS and Reich Security Main Office — the command centre of the terror",
    lat: 52.50625, lng: 13.38330,
    address: "Niederkirchnerstraße 8",
    visitMin: 90,
    sections: [
      { h: "The most feared address in Europe",
        p: "Prinz-Albrecht-Straße 8 — today's Niederkirchnerstraße — was the bureaucratic heart of the Nazi terror apparatus. Within a few hundred metres stood the Secret State Police Office (Gestapo headquarters) with its 'house prison', the Hotel Prinz Albrecht where Himmler ran the SS, and the Prinz-Albrecht-Palais, headquarters of the SD and then of the Reich Security Main Office (RSHA) under Reinhard Heydrich. From these desks were organised the political persecution of Germans, the Einsatzgruppen shooting operations, and the deportation of Europe's Jews — Adolf Eichmann's office was part of this complex's apparatus. This was that rarest of Nazi sites: not where the killing happened, but where it was *planned*, by educated men at desks, most of whom never faced justice." },
      { h: "The house prison",
        p: "In the Gestapo building's cellar, up to 15,000 political prisoners were held and tortured between 1933 and 1945: communists, clergy, union leaders, and after July 1944 the cream of the German resistance — many of the people you encountered at the Bendlerblock were brutalised here before Plötzensee. Georg Elser was interrogated here after his 1939 assassination attempt. The buildings were razed after the war and the site became a driving range and rubble dump until 1987, when digging for an exhibition uncovered the cellar walls. The excavated foundations now run along the outdoor gallery." },
      { h: "Three eras in one sightline",
        p: "Look up from the excavated Gestapo cellar wall: directly above it runs one of the longest surviving stretches of the outer Berlin Wall, and behind that rises Göring's Aviation Ministry. Nazi terror, Cold War division, and the modern republic's documentation centre stack in a single glance — there is no other spot in Berlin like it. The indoor exhibition (free) is encyclopaedic; the outdoor trench gallery is open even when the building is closed." }
    ],
    facts: [
      "After the 20 July plot, prisoners here included Admiral Canaris's circle and members of the Kreisau Circle; some were held in shackles, under glaring light, for months.",
      "The name 'Niederkirchnerstraße' is itself a memorial: Käthe Niederkirchner was a communist resistance fighter executed at Ravensbrück in 1944.",
      "The 1987 excavation began as a citizens' initiative — Berliners with shovels, against official indifference. The permanent centre opened only in 2010."
    ],
    lookFor: [
      "The cellar wall remains under the Wall segment along Niederkirchnerstraße.",
      "In the exhibition: the 'perpetrator biographies' wall — note how many died peacefully in West German retirement."
    ],
    tip: "Free entry, open daily (typically 10:00–20:00). This is the day's anchor visit — budget 60–90 minutes. There's a decent bookshop and toilets."
  },

  /* ───────────────────────── 15 ───────────────────────── */
  {
    id: "anhalter",
    num: 15,
    name: "Anhalter Bahnhof",
    sub: "A ruined doorway — and the 'quiet' deportations in plain sight",
    lat: 52.50260, lng: 13.38170,
    address: "Askanischer Platz",
    visitMin: 20,
    sections: [
      { h: "Gateway to the South",
        p: "The fragment of portico standing alone on Askanischer Platz is all that remains of the Anhalter Bahnhof, once one of continental Europe's grandest stations — the 'Gateway to the South', from which sleeper trains left for Vienna, Rome and Athens. Bombed heavily in February 1945, it limped on after the war until the division of the city starved it of traffic; the ruin was demolished in 1959–61 against public protest, leaving only the central doorway as a monument." },
      { h: "Deportation in ordinary carriages",
        p: "From June 1942, the Anhalter Bahnhof was one of three Berlin stations used for the deportation of the city's Jews — but with a particular cruelty of staging. From here, mostly elderly Berlin Jews were sent to the Theresienstadt ghetto-camp: not in freight wagons at night, but in ordinary passenger coaches coupled to the *regular scheduled trains*, in groups of 50–100, in full view of commuters on the platform. Around 9,600 people were deported through this station in 116 transports. Almost all were murdered — Theresienstadt was for most a waystation to Auschwitz. The memorial panels by the portico tell this with train-by-train precision." },
      { h: "Around the ruin",
        p: "The vast emptiness behind the portico (now a sports field and the Tempodrom tent) gives you the station's true scale. Just south rises a massive grey wartime flak/air-raid bunker, today housing the 'Berlin Story Bunker' museum, whose exhibition 'Hitler — How Could It Happen' is one of the city's best explanatory museums if you have a spare half-day. The Exilmuseum, about Germans driven into exile after 1933, is planned to rise directly behind the portico." }
    ],
    facts: [
      "Pre-war, around 40,000 passengers a day passed through; the train shed's iron roof spanned over 60 metres — engineering on the scale of a cathedral.",
      "Among those who fled into exile from this station: Albert Einstein. Among those deported through it to Theresienstadt: the artist couple who ran Berlin's famous Romanisches Café circle, and hundreds of decorated Jewish veterans of the First World War.",
      "The S-Bahn station below survives — you are standing over live platforms."
    ],
    lookFor: [
      "The sculpted day/night figures atop the portico fragment — they once crowned a facade over 100 m wide.",
      "The deportation memorial steles to the right of the portico."
    ],
    tip: "This is the route's southern tip. If energy is flagging, S-Bahn from Anhalter Bahnhof to Friedrichstraße cuts the route's second half short — but the best human stories are still ahead."
  },

  /* ───────────────────────── 16 ───────────────────────── */
  {
    id: "checkpoint-charlie",
    num: 16,
    name: "Checkpoint Charlie",
    sub: "Cold War interlude — what the Reich's defeat left behind",
    lat: 52.50755, lng: 13.39035,
    address: "Friedrichstraße 43",
    visitMin: 10,
    sections: [
      { h: "The consequence of 1945",
        p: "Checkpoint Charlie is a Cold War site, but it belongs on this walk for one reason: the division of Berlin was the direct, physical consequence of the war the Nazis started. The occupation sectors agreed by the Allies in 1944–45 hardened into the front line of a 40-year global standoff, and in October 1961 American and Soviet tanks faced each other here, live ammunition loaded, sixteen on each side, over a dispute about diplomats' passports. The replica guardhouse and sandbags are pure tourist theatre — but stand here and connect the chain: Reichstag fire → war → ruin → division → this." },
      { h: "Keep walking",
        p: "Everything genuinely moving about divided Berlin is elsewhere (Bernauer Straße, if you have another day). Treat this as a pacing stop: photo, context, onwards — the imperial and resistance heart of the walk is 10 minutes north." }
    ],
    facts: [
      "'Charlie' is just NATO alphabet: checkpoints Alpha (Helmstedt) and Bravo (Dreilinden) came first on the transit route.",
      "The original guardhouse is in the Allied Museum in Dahlem; the one here is a replica, and the 'soldiers' posing were banned by the city in 2019 for hustling tourists."
    ],
    lookFor: [
      "The giant photo of a Soviet soldier facing the American sector — and vice versa — by photographer Frank Thiel.",
      "Cobblestone Wall line crossing Friedrichstraße."
    ],
    tip: "Skip the commercial 'Wall museum' here if pressed for time; the Topography of Terror already gave you better history for free."
  },

  /* ───────────────────────── 17 ───────────────────────── */
  {
    id: "bebelplatz",
    num: 17,
    name: "Bebelplatz — the Book Burning",
    sub: "'Where they burn books, they will in the end burn people'",
    lat: 52.51612, lng: 13.39395,
    address: "Bebelplatz (then Opernplatz), Unter den Linden",
    visitMin: 20,
    sections: [
      { h: "10 May 1933",
        p: "On a rainy night four months into Nazi rule, students of Berlin's university — not stormtroopers: students, the academic elite — marched by torchlight onto this square and fed some 20,000 books to a bonfire: Heinrich Heine, Thomas and Heinrich Mann, Erich Kästner, Kurt Tucholsky, Sigmund Freud, Karl Marx, Helen Keller, Ernest Hemingway. Goebbels arrived near midnight to declare 'the era of exaggerated Jewish intellectualism is now at an end.' Similar fires burned in 21 other university cities the same night, organised by the German Student Union. Erich Kästner stood in the crowd here, collar up, and watched his own books burn — the only one of the burned authors to witness it in person." },
      { h: "The Empty Library",
        p: "In the centre of the square, set into the cobbles, is a glass plate. Look down: Micha Ullman's 'Library' (1995) is an underground white room lined with empty bookshelves — with space for exactly the number of books burned here. It is lit from within and at its best after dark, which in December is exactly when you'll arrive. A bronze plaque nearby carries Heine's terrible prophecy, written 110 years before Auschwitz, in his 1820 play Almansor: 'Das war ein Vorspiel nur; dort wo man Bücher verbrennt, verbrennt man am Ende auch Menschen' — That was only a prelude; where they burn books, they will in the end also burn people." }
    ],
    facts: [
      "Among the books burned were the works of Magnus Hirschfeld's institute, looted four days earlier (see stop 6) — the fire consumed the world's first archive of queer and sexological research.",
      "Helen Keller responded in an open letter to German students: 'You can burn my books and the books of the best minds of Europe, but the ideas in them have seeped through a million channels and will continue to quicken other minds.'",
      "Every 10 May, students of Humboldt University hold a book sale on the square."
    ],
    lookFor: [
      "The glass plate is easy to miss — centre of the square, often with people standing around an apparently blank patch of ground.",
      "Two bronze plaques with the Heine quote, set diagonally near the glass."
    ],
    tip: "Arrive at dusk if you can pace the day that way — the glowing empty library through the glass, with the floodlit State Opera behind, is the single most haunting image of the walk."
  },

  /* ───────────────────────── 18 ───────────────────────── */
  {
    id: "hedwig",
    num: 18,
    name: "St. Hedwig's Cathedral",
    sub: "Bernhard Lichtenberg — the priest who prayed for the Jews, out loud",
    lat: 52.51570, lng: 13.39480,
    address: "Hinter der Katholischen Kirche 3 (Bebelplatz)",
    visitMin: 15,
    sections: [
      { h: "One man, every evening",
        p: "The domed cathedral on Bebelplatz's east side had as its provost Bernhard Lichtenberg — and from the night of the November pogrom in 1938, this stubborn 63-year-old priest closed evening prayers, publicly, with a prayer 'for the Jews and the poor prisoners in the concentration camps.' Every evening. For three years. He wrote to the Reich Chief Physician protesting the T4 'euthanasia' murders, citing the programme by name. Denounced in 1941 by two students who heard him preach, he told the Gestapo interrogators he rejected National Socialism's principles 'as a Catholic priest' and asked — knowing exactly what it meant — to be deported to the Łódź ghetto so he could minister to the Jews there. He died on 5 November 1943 in a cattle car en route to Dachau. He is buried in the crypt below; Israel's Yad Vashem named him Righteous Among the Nations in 2004." },
      { h: "The building",
        p: "The cathedral itself — Berlin's Catholic cathedral, built under Frederick the Great in the 1740s as a rare gesture of toleration — burned out in an air raid in March 1943 and was rebuilt after the war. Its recent renovation reopened in 2024; Lichtenberg's tomb in the crypt is normally accessible during opening hours." }
    ],
    facts: [
      "Lichtenberg had form: he had protested film censorship of 'All Quiet on the Western Front' in 1930 and sued Goebbels' paper for libel — and won — before 1933.",
      "He was beatified by Pope John Paul II in 1996; the Vatican recognises him as a martyr.",
      "The two students who denounced him received a reward; their names are known; they were never prosecuted."
    ],
    lookFor: [
      "Lichtenberg's tomb in the crypt (free; respect services).",
      "The dome — modelled on the Pantheon, an unexpected sight in Protestant Prussia."
    ],
    tip: null
  },

  /* ───────────────────────── 19 ───────────────────────── */
  {
    id: "neue-wache",
    num: 19,
    name: "Neue Wache",
    sub: "Germany's central memorial — a mother, her dead son, and an open sky",
    lat: 52.51745, lng: 13.39690,
    address: "Unter den Linden 4",
    visitMin: 10,
    sections: [
      { h: "One room, one sculpture",
        p: "Schinkel's little Doric guardhouse (1818) has been Germany's argument with itself about memory for a century: war memorial under Weimar, hero-shrine under the Nazis, then the GDR's 'Memorial to the Victims of Fascism and Militarism' complete with eternal flame, buried unknown soldier and resistance fighter, and goose-stepping honour guards (the irony of GDR soldiers goose-stepping at an anti-fascist shrine was lost on no one in West Berlin). Since 1993 it is the Federal Republic's central memorial 'to the victims of war and tyranny': a single bare room, open to the sky through an oculus, containing one enlarged sculpture — Käthe Kollwitz's pietà, 'Mother with her Dead Son'." },
      { h: "Why Kollwitz",
        p: "Kollwitz lost her son Peter at Ypres in 1914 and spent the rest of her life drawing grief; the Nazis forced her out of the Academy of Arts in 1933 and banned her from exhibiting. The memorial's deliberate exposure to the weather means that in December, snow or freezing rain falls directly onto the bronze mother and son. The dedication 'to the victims of war and tyranny' was controversial — it mourns perpetrators' soldiers and murdered Jews in one breath — and plaques added at the entrance now spell out the distinct groups of victims. Stand inside for a minute; it is the quietest place on Unter den Linden." }
    ],
    facts: [
      "Hitler reviewed parades from in front of this building on Unter den Linden; the linden trees themselves were felled and replanted to suit parade sightlines.",
      "Kollwitz's design was enlarged from a 38 cm original by sculptor Harald Haacke — Chancellor Kohl chose it personally, which fed the 1993 controversy."
    ],
    lookFor: [
      "The oculus and whatever weather is falling through it.",
      "Bullet damage on the columns, left unrestored."
    ],
    tip: null
  },

  /* ───────────────────────── 20 ───────────────────────── */
  {
    id: "lustgarten",
    num: 20,
    name: "Lustgarten & the Herbert Baum Group",
    sub: "Nazi parade ground — and the Jewish resistance cell that attacked it",
    lat: 52.51860, lng: 13.39950,
    address: "Lustgarten, Museum Island",
    visitMin: 15,
    sections: [
      { h: "From pleasure garden to parade ground",
        p: "The Nazis paved over this old royal garden in 1934 to create a granite parade ground for rallies of up to several hundred thousand — the photographs of massed crowds saluting in front of the Altes Museum's columns, with the Cathedral looming to the right, were taken exactly where you're standing. The 'Lustgarten' rallies were Berlin's answer to Nuremberg. After the war the GDR kept it paved (good for their parades too); only in 1999 was it restored to lawns and fountain." },
      { h: "18 May 1942: Jews fight back in the heart of Berlin",
        p: "In May 1942 Goebbels staged a propaganda exhibition here called 'The Soviet Paradise', depicting the USSR as a Jewish-Bolshevik hellscape. On 18 May, a resistance cell of young Berlin Jews and communists led by 30-year-old electrician Herbert Baum slipped in and set it partially ablaze with incendiary devices. The damage was modest; the act, in the totalitarian heart of the Reich capital, was almost unimaginable. The Gestapo's revenge was monstrous: Baum's group was betrayed and rounded up within days — over 30 were executed — and in collective reprisal 500 Berlin Jewish men were seized, half shot at Sachsenhausen immediately, half deported. Baum died in Moabit prison on 11 June 1942, officially a 'suicide', almost certainly from torture. A memorial stone to the group stands in the Lustgarten — for decades the GDR's text praised only their communism; the 2000 redesign finally names them as Jews." }
    ],
    facts: [
      "Most of Baum's group were under 25; several couples in it married knowing they were likely to die. Their graves are in the Weißensee Jewish cemetery.",
      "The Altes Museum steps behind you appear in countless 1930s propaganda photos — compare the scene now: museum island, buskers, school groups."
    ],
    lookFor: [
      "The Herbert Baum memorial stone in the Lustgarten lawn (a low pink-granite cube).",
      "Shrapnel scars across the Altes Museum colonnade and the Cathedral's stonework."
    ],
    tip: "Toilets and warm café in the Humboldt Forum across the road — last good break before the final Jewish-quarter chapter of the walk."
  },

  /* ───────────────────────── 21 ───────────────────────── */
  {
    id: "rosenstrasse",
    num: 21,
    name: "Rosenstraße",
    sub: "The wives who stood in the street and won",
    lat: 52.52130, lng: 13.40330,
    address: "Rosenstraße (memorial park)",
    visitMin: 15,
    sections: [
      { h: "The Fabrikaktion",
        p: "On 27 February 1943, the Gestapo launched the 'factory action': the final round-up of Berlin's remaining Jews, seized directly from forced-labour factory floors. Most — around 7,000 people — were deported to Auschwitz within days. But roughly 2,000 Jewish men married to non-Jewish ('Aryan') wives were separated out and held in the Jewish community building that stood here at Rosenstraße 2–4, while the regime decided what to do with them." },
      { h: "The protest",
        p: "Then something happened that happened nowhere else in the Reich: the wives came. Day after day, in the bitter cold of early March 1943, hundreds of women — sometimes a thousand or more, with mothers and sisters joining — stood in this narrow street chanting 'Gebt uns unsere Männer wieder!' (Give us back our husbands!). When SS guards set up machine guns and threatened to shoot, the women scattered into doorways — and came back. After a week, Goebbels (as Gauleiter of Berlin) ordered the men released; even a group already sent to Auschwitz was returned. Historians still debate whether the protest forced the release or the regime never intended to deport 'mixed-marriage' Jews — but the women didn't know that, and stood in front of machine guns anyway. It remains the only mass public protest by Germans against the deportation of Jews — and it succeeded, and nobody was shot for it. The uncomfortable question it leaves is the most important one of this whole walk: what if more people had stood in the street?" }
    ],
    facts: [
      "Ingeborg Hunzinger's red-sandstone sculpture group 'Block der Frauen' (1995) stands in the small park — Hunzinger was herself a persecuted half-Jewish communist sculptor.",
      "The community building was destroyed in the war; a rose-coloured Litfaß advertising column nearby carries the historical information.",
      "Most of the ~1,700 released men survived the war — among the very few Berlin Jews who did so openly, not in hiding."
    ],
    lookFor: [
      "The sculpture's carved inscription: 'The strength of civil disobedience, the vigour of love overcome the violence of dictatorship.'",
      "You're behind Hackescher Markt: note how the old quarter's small scale survives here, unlike the government district."
    ],
    tip: null
  },

  /* ───────────────────────── 22 ───────────────────────── */
  {
    id: "otto-weidt",
    num: 22,
    name: "Otto Weidt's Workshop for the Blind",
    sub: "The brush-maker who outwitted the Gestapo",
    lat: 52.52500, lng: 13.40250,
    address: "Rosenthaler Straße 39 (courtyard, Haus Schwarzenberg)",
    visitMin: 35,
    sections: [
      { h: "A factory as an ark",
        p: "Through the graffiti-covered Haus Schwarzenberg alley — one of the last unrenovated courtyards in Mitte — you reach the actual rooms of Otto Weidt's brush and broom workshop, preserved as a free museum. Weidt, a half-blind anarchist-leaning brush-maker, employed around 30 blind and deaf Jewish workers, and fought for each one of them: he declared his brooms 'essential for the war effort' (he supplied the Wehrmacht), bribed Gestapo officers with cognac and cigars, falsified papers, and when his workers were seized in raids, marched to the Gestapo collection point and bought them back. Behind a wardrobe in the back room — you can walk through it — he hid the four members of the Horn family in a windowless chamber through most of 1943." },
      { h: "How far one man went",
        p: "When his secretary (and the woman he loved) Alice Licht was deported with her parents to Theresienstadt and on to Auschwitz, Weidt did the unthinkable: he travelled to Auschwitz itself, posing as a businessman, located the satellite camp where she was held, and arranged with a Polish worker to smuggle her money, food and a note telling her where to run when the camps were evacuated. She escaped during the January 1945 death-march chaos and survived. The Horn family did not — betrayed in October 1943, they were murdered in Auschwitz. Weidt died in 1947; Yad Vashem recognised him as Righteous Among the Nations in 1971, largely on the testimony of the writer Inge Deutschkron, who as a young Jewish woman had worked in this room and survived in hiding." }
    ],
    facts: [
      "The museum preserves the actual hiding place: a doorless room behind a swung-aside wardrobe. Standing inside it is the most physically immediate moment of this entire walk.",
      "Inge Deutschkron's memoir 'I Wore the Yellow Star' tells the workshop's story; she unveiled the museum and died in 2022 aged 99.",
      "Next door in the same courtyard: the Anne Frank Zentrum and the Gedenkstätte Stille Helden (Silent Heroes Memorial), honouring Germans who hid Jews — around 1,700 Berlin Jews survived in hiding, helped by an estimated 20,000+ quiet accomplices."
    ],
    lookFor: [
      "The workshop's original workbenches and brush-making machines.",
      "The Haus Schwarzenberg street art — the alley's anarchic present is its own kind of memorial culture."
    ],
    tip: "Free entry, small rooms, usually open daily — check hours. If it's closed, the courtyard and the Silent Heroes exhibition still justify the stop."
  },

  /* ───────────────────────── 23 ───────────────────────── */
  {
    id: "grosse-hamburger",
    num: 23,
    name: "Große Hamburger Straße",
    sub: "The street of tolerance — cemetery, collection camp, missing house",
    lat: 52.52470, lng: 13.40060,
    address: "Große Hamburger Straße 26",
    visitMin: 25,
    sections: [
      { h: "Berlin's oldest Jewish cemetery",
        p: "This short street once held a Jewish school, Berlin's oldest Jewish cemetery (1672), a Protestant and a Catholic church — Berliners called it the 'street of tolerance'. The cemetery received some 12,000 burials including Moses Mendelssohn, the Enlightenment philosopher whose life's work was precisely the German-Jewish symbiosis the Nazis set out to annihilate. In 1943 the Gestapo destroyed the cemetery: gravestones smashed or used to shore up a slit trench, graves dug open. Today it is a bare, tree-shaded field of ivy — one symbolic Mendelssohn gravestone (a postwar replacement) stands by the wall, usually piled with pebbles left by visitors." },
      { h: "The collection camp",
        p: "The Jewish old people's home beside the cemetery was turned by the Gestapo in 1942 into the main Sammellager (collection camp) for the deportation of Berlin's Jews: some 55,000 men, women and children were registered here, held for days in overcrowded rooms, then marched or trucked to the trains at Grunewald and Moabit — destination Theresienstadt, Riga, Auschwitz. The building is gone; Will Lammert's harrowing sculpture group of thirteen gaunt figures (1985, originally designed for the Ravensbrück memorial) stands on its site, in front of a memorial stone that is permanently covered in pebbles." },
      { h: "The Missing House",
        p: "A few doors on at no. 15/16, look up at the gap between buildings: Christian Boltanski's 'The Missing House' (1990). The house that stood here was destroyed by a bomb in February 1945; Boltanski researched its tenants and mounted plaques on the flanking firewalls with their names, dates and occupations — Jewish and non-Jewish neighbours interleaved, the deported and the bombed-out side by side. The artwork is just the gap, the names, and the December sky. Many consider it the best memorial in Berlin." }
    ],
    facts: [
      "The Jewish high school at no. 27 reopened in 1993 and again teaches Jewish and non-Jewish Berlin kids — note the police post outside, a sobering present-tense fact.",
      "Look down: this street has one of the densest clusters of Stolpersteine in the city (see the walk's introduction on these brass 'stumbling stones').",
      "Mendelssohn's grandson Felix, the composer, had his music banned by the Nazis and his statue in Leipzig demolished in 1936."
    ],
    lookFor: [
      "Will Lammert's figures and the pebble-covered memorial stone.",
      "Boltanski's name-plaques on the firewalls at no. 15/16.",
      "Stolpersteine along the whole street — read at least one aloud; that's their intended use."
    ],
    tip: null
  },

  /* ───────────────────────── 24 ───────────────────────── */
  {
    id: "neue-synagoge",
    num: 24,
    name: "Neue Synagoge",
    sub: "The golden dome, the pogrom, and the policeman who said no",
    lat: 52.52480, lng: 13.39410,
    address: "Oranienburger Straße 28–30",
    visitMin: 25,
    sections: [
      { h: "The most beautiful synagogue in Germany",
        p: "When it opened in 1866 with 3,200 seats, the Moorish-style Neue Synagoge was the largest and grandest synagogue in Germany — its gilded dome a deliberate, confident statement that Jews belonged at the centre of Berlin. Bismarck attended the opening. By the 1930s it stood at the heart of a Jewish community of 160,000 — a third of all Jews in Germany lived in Berlin, many in the streets you've just walked." },
      { h: "9 November 1938 — and Wilhelm Krützfeld",
        p: "On Kristallnacht, SA men broke in, wrecked what they could and set the synagogue alight — as over 1,400 synagogues and prayer rooms burned across the Reich, shop windows shattered, and some 30,000 Jewish men were dragged to concentration camps. But here, something singular happened: Wilhelm Krützfeld, chief of the local police precinct, arrived with his officers, brandished the building's landmark-protection papers at the SA, ordered the arsonists out and had the fire brigade extinguish the flames — fire brigades elsewhere had orders only to protect neighbouring 'Aryan' buildings. The synagogue was saved that night by a Prussian policeman doing his job at a moment when doing your job was an act of courage. He was reprimanded ('rüffel') by his superiors, and survived the war." },
      { h: "Destruction and resurrection",
        p: "What the pogrom spared, the war did not: Allied bombs gutted the main hall in November 1943, and the GDR demolished the ruined sanctuary in 1958. The restored facade and rebuilt golden dome (1995) front the Centrum Judaicum: behind the exhibition rooms, a glass wall looks out onto the vast empty gravel space where the 3,200-seat sanctuary once stood. The inscription over the door, placed in 1966, reads 'Vergesst es nie' — Never forget it. In December the dome is floodlit against the early dark: the intended final image of this walk." }
    ],
    facts: [
      "The dome you see is structurally new — built from photographs and surviving plans; only the front building is original fabric.",
      "The synagogue's 1866 organ and mixed choir marked it as a Reform congregation — Albert Einstein once played a violin concert here.",
      "The permanent police presence and barriers in front are, like at the school on Große Hamburger Straße, part of the present-day story."
    ],
    lookFor: [
      "Bullet and shrapnel scars preserved on the facade, marked by a steel band inscription.",
      "The empty gravel field behind the building (visible from the exhibition) — absence as architecture, one last time."
    ],
    tip: "End of the walk. S-Bahn Oranienburger Straße is 100 m west; the streets around (and the Hackescher Markt arches) are full of good food. In December, the synagogue dome and the Christmas lights along Oranienburger Straße make a strangely hopeful closing scene — which, after this day, you'll have earned."
  }
  ],

  /* ═══════════════ EXTENSIONS — half-day trips ═══════════════ */
  extensions: [
    {
      id: "gleis17",
      name: "Gleis 17 — Grunewald Deportation Memorial",
      sub: "The platform the trains left from",
      lat: 52.48864, lng: 13.26218,
      transit: "S7 to Grunewald (~25 min from city centre), follow signs to 'Gleis 17'",
      time: "1–1.5 h round trip + visit",
      desc: "From this freight platform in the prosperous, leafy west of Berlin, more than 50 of the 184 deportation trains left the city — beginning 18 October 1941, when 1,013 Berlin Jews were sent to the Łódź ghetto. Deutsche Bahn's memorial (1998) lines both platform edges with 186 cast-steel plates in chronological order: each gives the date, the number of deportees, and the destination — '18.10.1941 / 1013 Juden / Berlin – Litzmannstadt'. Reading them in sequence, you watch the destinations change from ghettos to Theresienstadt to, finally and repeatedly, Auschwitz. Trees and scrub grow up between the rails and are deliberately left: no train will ever depart from this track again. Of all Berlin's memorials this is the one most worth the detour — go in the morning before starting the city walk, or as a pilgrimage the next day."
    },
    {
      id: "wannsee",
      name: "House of the Wannsee Conference",
      sub: "Ninety minutes that organised a genocide",
      lat: 52.43251, lng: 13.16455,
      transit: "S1/S7 to Wannsee (~35 min), then bus 114 to Haus der Wannsee-Konferenz",
      time: "Half day",
      desc: "In this lakeside industrialist's villa, on 20 January 1942, Reinhard Heydrich convened fifteen senior officials — over half holding doctorates — to coordinate the 'Final Solution of the Jewish Question'. The meeting took about ninety minutes, with cognac served after. The mass murder was already underway in the East; Wannsee's purpose was bureaucratic: to put every ministry on board and under the RSHA's lead, and to define who counted as a Jew. Adolf Eichmann's sanitised minutes — the 'Wannsee Protocol', discovered in 1947 — tabulate 11 million European Jews, country by country, including the unconquered: England, Ireland, Switzerland. The villa is now a free memorial and education site; you stand in the conference room with the protocol's pages displayed where the men sat. The contrast between the beauty of the lake view and what was agreed at the table is the exhibit."
    },
    {
      id: "plotzensee",
      name: "Plötzensee Memorial",
      sub: "Where the resistance was executed",
      lat: 52.54260, lng: 13.32220,
      transit: "U9/S41/42 to Westhafen + 15 min walk, or bus 123",
      time: "2–3 h round trip",
      desc: "In a plain brick shed in the yard of Plötzensee prison, more than 2,800 people were executed between 1933 and 1945 — communists, Czech and Polish resisters, clergy, and most of the men and women of the 20 July plot, some hanged from meat hooks with thin cord while cameras filmed for Hitler's viewing. During the 'Plötzensee blood nights' of September 1943, after bombs damaged the prison, over 250 prisoners were hanged in a few nights to prevent escapes — including some whose pardons were being processed. The execution shed stands as found, with the hook beam, a stone urn of earth from concentration camps, and the names. It is stark, free, and ten minutes is enough to never forget it. Combine with the Maria Regina Martyrum memorial church nearby."
    },
    {
      id: "sachsenhausen",
      name: "Sachsenhausen Concentration Camp Memorial",
      sub: "The 'model camp' and SS training ground",
      lat: 52.76622, lng: 13.26430,
      transit: "S1 to Oranienburg (~45 min) + 20 min walk or bus",
      time: "Full day",
      desc: "Built in 1936 as the SS's geometric 'ideal' camp and administrative centre — the Inspectorate of all concentration camps sat just outside its walls — Sachsenhausen imprisoned over 200,000 people: political prisoners first, then Jews (especially after Kristallnacht), Soviet POWs (over 10,000 shot in a purpose-built neck-shooting facility), and prisoners from across Europe. Tens of thousands died here; 'Station Z' held the crematoria and gas chamber. The triangular site, the 'neutral zone' death strip, the pathology building and the punishment cells survive or are documented in place. This needs a full day and emotional reserves — do it on a separate day from the city walk, not after it."
    },
    {
      id: "tempelhof",
      name: "Tempelhof & the Schwerbelastungskörper",
      sub: "Nazi mega-architecture you can actually touch",
      lat: 52.48280, lng: 13.38840,
      transit: "U6 to Platz der Luftbrücke; Schwerbelastungskörper: S-Bahn ring to Julius-Leber-Brücke / General-Pape-Straße",
      time: "Half day",
      desc: "Sagebiel's Tempelhof airport terminal (1936–41) was for decades among the largest buildings on earth — a 1.2 km curved colossus meant as the air gateway of Germania, later saved from infamy by the 1948–49 Airlift that made it West Berlin's lifeline. The airfield is now a giant public park; guided tours go inside the terminal. Dark layer: the Columbia-Haus concentration camp (1933–36) stood beside the field, and forced labourers assembled bombers in its hangars. Two km west stands the weirdest Nazi relic in Berlin: the Schwerbelastungskörper (1941), a 12,650-tonne concrete cylinder built (with French POW labour) purely to test whether Berlin's sandy ground could carry Germania's Triumphal Arch — an arch big enough to swallow the Arc de Triomphe. It sank too far; the arch would have been impossible; the cylinder was too massive to demolish and still squats among apartment houses with a small (summer-season) info centre."
    },
    {
      id: "karlshorst",
      name: "Museum Berlin-Karlshorst",
      sub: "The room where the Second World War in Europe ended",
      lat: 52.48628, lng: 13.53843,
      transit: "S3 to Karlshorst + 10 min walk",
      time: "Half day",
      desc: "In the officers' mess of this former Wehrmacht engineering school, shortly after midnight on 9 May 1945, Field Marshal Keitel signed the unconditional surrender of the German armed forces before Marshal Zhukov — the definitive end of the war in Europe (a first signing had taken place at Reims the day before; Stalin insisted on a repeat in Berlin). The surrender hall is preserved exactly, flags and all, and the museum — long the 'German-Russian Museum', renamed in 2022 — covers the German-Soviet war with unflinching honesty about both the Wehrmacht's war of annihilation and Soviet conduct. Free, uncrowded, and the single most underrated museum in Berlin."
    },
    {
      id: "olympiastadion",
      name: "Olympiastadion",
      sub: "The 1936 propaganda games",
      lat: 52.51470, lng: 13.23940,
      transit: "U2 or S3/S9 to Olympiastadion",
      time: "Half day",
      desc: "Werner March's stadium hosted the August 1936 Olympics — the regime's masterpiece of image-laundering, with antisemitic signs temporarily removed from Berlin's streets and the world charmed while the Gestapo paused arrests for the duration. Jesse Owens won four golds in front of Hitler; German Jewish athletes had been excluded from the team (the fencer Helene Mayer, the single token exception, gave the Hitler salute on the podium — a story of impossible choices). The stone exterior, Langemarckhalle and bell tower (great view) survive as the most complete ensemble of Third Reich architecture anywhere; the self-guided audio tour is excellent. Leni Riefenstahl's 'Olympia' was filmed here — the aesthetic template for sports broadcasting to this day, invented as propaganda."
    }
  ],

  /* ═══════════════ Practical & contextual notes ═══════════════ */
  practical: {
    stolpersteine: {
      h: "Stolpersteine — the smallest memorials",
      p: "All day you will pass small brass cobblestones set into the pavement outside doorways: Stolpersteine, 'stumbling stones', each hand-made by artist Gunter Demnig's project since 1992. Each names one person at their last freely chosen home: HERE LIVED — name, birth year, deportation date, fate. There are over 10,000 in Berlin and over 100,000 across Europe — the largest decentralised memorial in the world. The intended gesture: you must bow slightly to read one. When you see one today, stop and read the name aloud — that is how they're meant to work. The densest clusters on this route are around Große Hamburger Straße and the Hackescher Markt quarter."
    },
    december: {
      h: "Walking this in December",
      p: "Sunrise ~08:10, sunset ~15:55, often grey, around 0–5°C. Start at 09:00 at the Reichstag and the timing works perfectly: Topography of Terror around midday (warm indoor hour), Bebelplatz's glowing Empty Library at dusk, the floodlit synagogue dome at the end. Wear serious shoes (cobbles + 12 km) and layers; pack gloves — you'll be using your phone constantly. Christmas markets at Gendarmenmarkt (just off the route after stop 16) and Opernpalais make good warm-up stops. Most outdoor memorials are open 24/7; indoor sites generally 10:00–18:00 or 20:00 — and note that on 24–26 December most museums close or shorten hours."
    },
    conduct: {
      h: "Conduct & the law",
      p: "Germany takes this history seriously, and so does its criminal code: the Hitler salute, swastikas and other Nazi symbols or slogans are crimes under §86a StGB — including in jokes, poses or photos. Tourists are arrested for this every year. At memorials: no climbing on the Holocaust Memorial stelae, keep voices down at the deportation sites, and photograph respectfully (the general rule: monuments yes, people grieving no). Men should cover their heads (a beanie is fine — it's December) when entering the synagogue exhibition or the Jewish cemetery field."
    },
    sources: {
      h: "Where this content comes from",
      p: "Stop texts are based on the on-site documentation of the Topography of Terror Foundation, the German Resistance Memorial Center, the Memorial to the Murdered Jews of Europe Foundation, Centrum Judaicum, the Gedenkstätte Stille Helden, and standard scholarship (Evans' Third Reich trilogy, Kershaw's Hitler, Friedländer's Nazi Germany and the Jews, Moorhouse's Berlin at War). Where stories are legend or disputed (Chancellery marble, the Rosenstraße release debate), the text says so. Verify opening hours before you fly — they change."
    }
  }
};
