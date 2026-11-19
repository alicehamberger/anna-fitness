// Deutschsprachige Demo. Angebot, Namen und Stimmen sind fiktive Inhalte.
// Vor einem echten Start Leistungen, Kapazität und Geschäftsangaben bestätigen.
export const site = {
  brand: "Form & Flourish",
  byline: "von Anna",
  tagline: "Stärker. Selbstbewusster. Mehr du.",
  conceptPreview: true,
  offer: {
    name: "Die Flourish-Methode",
    duration: "Sechs Monate",
    introMinutes: 20,
    commitments: [
      {
        title: "Ein guter Anfang",
        text: "Ein 60-minütiges Auftaktgespräch, in dem wir deine Ziele, deinen Alltag und deinen Ausgangspunkt kennenlernen.",
      },
      {
        title: "Training, das mit dir wächst",
        text: "Dein individueller Trainingsplan für zu Hause oder das Studio. Alle vier Wochen überprüfen wir ihn und passen ihn bei Bedarf an.",
      },
      {
        title: "Ernährung, die zu dir passt",
        text: "Persönliche Orientierung zu Ernährung und Gewohnheiten – alltagstauglich und im Rahmen der fachlichen Qualifikation.",
      },
      {
        title: "Ein Rückblick pro Woche",
        text: "Ein schriftlicher Wochenrückblick mit persönlichem Feedback und konkreten nächsten Schritten.",
      },
      {
        title: "Zeit für echte Gespräche",
        text: "Alle zwei Wochen ein persönliches, 30-minütiges Coaching per Video.",
      },
      {
        title: "Mehr Sicherheit bei den Übungen",
        text: "Individuelles Technikfeedback zu den Trainingsvideos, die du mir schickst.",
      },
      {
        title: "Auch zwischendurch für dich da",
        text: "Nachrichtenbegleitung an Werktagen. Mein Antwortziel: innerhalb von zwei Werktagen.",
      },
      {
        title: "Alles an einem Ort",
        text: "Dein Trainingsplan und die Fortschritte, die wir gemeinsam festlegen, bleiben übersichtlich und leicht zugänglich.",
      },
      {
        title: "Dein Plan für danach",
        text: "Zum Abschluss entwickeln wir einen Plan, mit dem du eigenständig weitermachen kannst.",
      },
    ],
  },
  booking: {
    // Öffentlichen Buchungslink für Annas echten Kalender hier eintragen.
    // Mit gültiger HTTPS-Adresse ersetzt der echte Kalender das Demoformular.
    // Verfügbarkeit, Kontaktdaten und Bestätigung verarbeitet der Anbieter.
    url: "",
    noteMaxLength: 400,
  },
  images: {
    hero: {
      src: "/images/training.jpg",
      alt: "Eine Frau trainiert mit Kurzhanteln in einem Fitnessstudio",
      width: 1100,
      height: 1650,
    },
    anna: {
      src: "/images/coach-placeholder.jpg",
      alt: "Eine Frau beim Krafttraining mit Kurzhanteln",
      width: 1000,
      height: 1500,
      // Bildherkunft bleibt dokumentiert, ohne Bildunterschrift im Layout.
      isPlaceholder: true,
    },
    lifestyle: {
      src: "/images/everyday-food.jpg",
      alt: "Eine bunte Mahlzeit mit Gemüse und Quinoa",
      width: 900,
      height: 600,
    },
  },
  hero: {
    eyebrow: "Persönliches Fitness- & Abnehmcoaching",
    heading: [
      "Abnehmen.",
      "Stärker werden.",
      "Lass Alles-oder-nichts hinter dir.",
    ],
    description:
      "Individuelles Training, alltagstaugliche Ernährung und sechs Monate persönliche Begleitung. Damit du abnehmen, stärker werden und dich wohler fühlen kannst – ohne dein ganzes Leben um Fitness zu drehen.",
    strip: [
      "6 Monate",
      "Individuelles Training",
      "Wöchentliches Feedback",
      "Persönliche Begleitung",
    ],
  },
  recognition: [
    {
      title: "Eine volle Woche muss deinen Plan nicht kippen.",
      text: "Wenn viel zusammenkommt, vereinfachen wir deine Routine und schauen gemeinsam, was gerade realistisch ist.",
    },
    {
      title: "Du darfst dich im Studio sicher fühlen.",
      text: "Du weißt, was du trainierst, wie die Übungen funktionieren und wie du dich steigern kannst. Passend zu deinem Ausgangspunkt.",
    },
    {
      title: "Gut essen und das Leben genießen passen zusammen.",
      text: "Wir entwickeln hilfreiche Mahlzeitenroutinen und flexible Entscheidungen – ohne die nächste Liste strenger Essensregeln.",
    },
  ],
  pillars: [
    {
      icon: "strength",
      title: "Mit Plan trainieren.",
      text: "Schrittweise stärker werden. Dein Krafttraining richtet sich nach deiner Erfahrung, deiner Ausstattung und deinem Zeitplan.",
      detail: "Dein Einstieg. Dein Tempo.",
    },
    {
      icon: "leaf",
      title: "Flexibel essen.",
      text: "Ernährung verstehen, Mahlzeiten sinnvoll gestalten und im Alltag passende Entscheidungen treffen. Mit einem individuellen Blick auf deine Ziele.",
      detail: "Gutes Essen. Platz fürs Leben.",
    },
    {
      icon: "sun",
      title: "Dranbleiben lernen.",
      text: "Wöchentlich gemeinsam reflektieren, Lösungen finden und Routinen entwickeln, die auch in volle Wochen, auf Reisen und zu Einladungen passen.",
      detail: "Mehr Übung. Weniger Perfektion.",
    },
  ],
  exampleWeek: [
    {
      day: "MO",
      name: "Ganzkörpertraining",
      detail: "Einheit 01 · Studio",
      icon: "strength",
    },
    {
      day: "MI",
      name: "Ganzkörpertraining",
      detail: "Einheit 02 · Studio",
      icon: "strength",
    },
    {
      day: "FR",
      name: "Ganzkörpertraining",
      detail: "Einheit 03 · Studio",
      icon: "strength",
    },
    {
      day: "SO",
      name: "Dein Wochenrückblick",
      detail: "Reflektieren, anpassen, weitergehen",
      icon: "message",
    },
  ],
  roadmap: [
    {
      period: "Monat 1",
      title: "Deine Basis finden.",
      text: "Wir lernen deinen Ausgangspunkt kennen und bauen eine realistische Trainings- und Ernährungsroutine auf.",
    },
    {
      period: "Monate 2–3",
      title: "Deinen Rhythmus finden.",
      text: "Regelmäßig üben, gemeinsam reflektieren und Training und Ernährung so anpassen, dass sie zu dir passen.",
    },
    {
      period: "Monate 4–5",
      title: "Mit dem Alltag wachsen.",
      text: "Dein Training weiterentwickeln und lernen, mit vollen Wochen, Reisen und veränderten Prioritäten umzugehen.",
    },
    {
      period: "Monat 6",
      title: "Deinen Weg weitergehen.",
      text: "Gewohnheiten festigen und einen Plan für die Zeit nach unserem Coaching entwickeln.",
    },
  ],
  testimonials: {
    enabled: true,
    label: "Fiktive Beispielstimmen für diese Demo.",
    // Namen und Aussagen sind erfunden. Vor einem echten Start ersetzen oder ausblenden.
    quotes: [
      {
        name: "Anna",
        quote:
          "Früher war für mich die ganze Woche gelaufen, wenn ich ein Training verpasst hatte. Mit einem einfacheren Plan finde ich viel leichter wieder rein.",
      },
      {
        name: "Sophia",
        quote:
          "Ich wollte abnehmen, mich aber auch im Studio sicherer fühlen. Zu verstehen, wie ich mich steigern kann, hat mein Training viel greifbarer gemacht.",
      },
      {
        name: "Sarah",
        quote:
          "Die Wochenrückblicke haben mir geholfen, meinen Plan an Arbeit und Reisen anzupassen, statt immer auf die perfekte Woche zu warten.",
      },
    ],
  },
  about: {
    heading: "Dein Plan zählt. Wer dich begleitet, auch.",
    paragraphs: [
      "Ich glaube, ein guter Plan beginnt mit dem Leben, das du wirklich führst. Mit deiner Arbeit, deiner Energie, den Dingen, die dir Freude machen, und der Zeit, die du für dich findest.",
      "Bei mir kommen durchdachtes Krafttraining, flexible Ernährung und persönliche Begleitung zusammen. Wir schauen hin, was funktioniert, sprechen offen über Hürden und passen deinen Weg gemeinsam an.",
      "Du musst noch nicht alle Antworten haben. Wir brauchen nur einen Anfang.",
    ],
    // Nur nach Prüfung echte Qualifikationen ergänzen. Leere Felder bleiben unsichtbar.
    verifiedQualifications: [] as string[],
  },
  gettingStarted: [
    {
      title: "Erzähl mir von dir.",
      text: "Teile ein paar Gedanken zu deinen Zielen und dazu, wie du gerne trainieren möchtest.",
    },
    {
      title: "Nimm dir Zeit zum Kennenlernen.",
      text: "Im kostenlosen, 20-minütigen Erstgespräch ist Platz für deine Fragen und einen ersten gemeinsamen Blick auf deinen Alltag.",
    },
    {
      title: "Schau, ob es für dich passt.",
      text: "Wir besprechen deine Ziele und deinen Zeitplan. Wenn wir beide weitermachen möchten, erkläre ich dir das Paket, die Konditionen und die nächsten Schritte. Ganz ohne Kaufverpflichtung.",
    },
  ],
  faqs: [
    {
      question: "Ist das Coaching auch für Anfängerinnen geeignet?",
      answer:
        "Ja. Dein Ausgangspunkt bestimmt den Plan. Wir können mit den Grundlagen beginnen, Sicherheit bei den Übungen aufbauen und uns in deinem Tempo steigern.",
    },
    {
      question: "Brauche ich ein Fitnessstudio?",
      answer:
        "Nein. Dein Training kann zu Hause oder im Studio stattfinden, mit der Ausstattung, die dir zur Verfügung steht. Was für dich sinnvoll ist, besprechen wir im Erstgespräch.",
    },
    {
      question: "Wie viel Zeit brauche ich für das Training?",
      answer:
        "Das hängt von deinen Zielen, deinem Ausgangspunkt und deinem Alltag ab. Wir vereinbaren gemeinsam eine realistische Anzahl und Dauer der Einheiten und passen sie bei Bedarf an. Die Beispielwoche auf dieser Seite ist kein Pflichtprogramm.",
    },
    {
      question: "Muss ich Kalorien zählen?",
      answer:
        "Nicht unbedingt. Wir wählen die Ernährungsstrategie individuell. Mahlzeitenstruktur, Gewohnheiten und Entscheidungen im Alltag können im Mittelpunkt stehen. Kalorienzählen besprechen wir nur, wenn es für dich passend und hilfreich ist.",
    },
    {
      question: "Welche Begleitung bekomme ich?",
      answer:
        "Du bekommst wöchentliche schriftliche Rückblicke mit persönlichem Feedback, alle zwei Wochen ein 30-minütiges Videogespräch, Trainingsplan-Überprüfungen alle vier Wochen und Technikfeedback. Dazu kommt Nachrichtenbegleitung an Werktagen mit einem Antwortziel von zwei Werktagen.",
    },
    {
      question: "Was kostet das Coaching?",
      answer:
        "Die Konditionen für dein persönliches Coaching besprechen wir transparent im Erstgespräch. Das 20-minütige Kennenlernen ist kostenlos und verpflichtet dich zu nichts.",
    },
    {
      question: "Ist das Erstgespräch ein Verkaufsgespräch?",
      answer:
        "Wir sprechen über deine Ziele, deinen Alltag und darüber, ob mein Coaching zu dir passt. Dabei können wir auch das kostenpflichtige Paket und mögliche nächste Schritte besprechen. Du musst dich nicht entscheiden und nichts kaufen.",
    },
    {
      question: "Was ist bei Verletzungen oder Erkrankungen?",
      answer:
        "Coaching ersetzt keine medizinische Diagnose oder Behandlung. Je nach Situation kann vor Änderungen an Training oder Ernährung eine ärztliche oder andere geeignete fachliche Einschätzung nötig sein. Bitte teile im kurzen Erstkontaktformular keine medizinischen Angaben.",
    },
  ],
} as const;
