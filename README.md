# Form & Flourish von Anna

Deutschsprachige, responsive Website-Demo für persönliches Fitness- und Ernährungscoaching. React, TypeScript und Vite; CSS ohne UI-Bibliothek. Bilder und Schriften liegen lokal, ein Backend ist nicht nötig.

## Lokal starten

Voraussetzung: Node.js **22.12 oder neuer** und npm.

```sh
npm ci
npm run dev
```

Öffne die von Vite ausgegebene Adresse, normalerweise `http://127.0.0.1:5173/`. Mit Strg+C beendest du den Server.

```sh
npm run build    # TypeScript prüfen und Produktionsdateien in dist/ erstellen
npm run lint     # ESLint einschließlich React-Hooks-Prüfung
npm run preview  # Fertigen Build lokal ansehen
```

## Inhalte bearbeiten

- `src/content.ts`: Marke, Angebot, alle neun Leistungsbausteine, Bilder, Wochenplan, Ablauf, Beispielstimmen, Philosophie, Qualifikationen, häufige Fragen und Buchungsadresse.
- `src/App.tsx`: Seitenaufbau, kurze Oberflächentexte, mobile Navigation, Fragen-Akkordeon, Formularprüfung und rechtliche Entwürfe.
- `src/AppointmentScheduler.tsx`: eingebetteter Buchungskalender mit bewusstem Laden und einem direkten Ausweichlink zum Anbieter.
- `src/styles.css`: Farben, lokale Schriften, responsives Layout, Tastaturfokus und reduzierte Bewegung.
- `index.html`: deutsche Spracheinstellung, Seitentitel, Beschreibung und Vorschaumetadaten.
- `public/images/` und `public/fonts/`: lokale, austauschbare Medien.
- `public/social-preview.svg`: bearbeitbare Grafik für die Linkvorschau; die deutsche JPEG-Fassung liegt daneben.

Das Layout nutzt deutsche Texte und einheitliche Du-Ansprache. Der Paketpreis wird auf der Website nicht angezeigt; Konditionen werden im Erstgespräch besprochen. Die auffällige Konzeptleiste und die Stockfoto-Bildunterschriften sind entfernt. Ein dezenter Demohinweis bleibt im Footer; der Buchungsstatus wird direkt am Formular erklärt.

## Beispielstimmen und Bilder

Die drei Stimmen tragen die erfundenen Vornamen **Anna, Sophia und Sarah**. Ein gemeinsamer Hinweis unter den Karten kennzeichnet sie als fiktive Beispielstimmen. `site.testimonials.enabled` blendet die gesamte Sektion aus. Vor einem echten Geschäftsstart mit freigegebenen, echten Erfahrungen ersetzen oder ausblenden.

Die Trainingsfotografien zeigen ein Fotomodell, keine echte Kundin und kein bestätigtes Porträt von Anna. Die Küchenszene ist eine KI-bearbeitete Illustration mit dem Trainingsporträt als Personenreferenz. Herkunft und Bearbeitung bleiben hier und im Impressumsentwurf dokumentiert. Die Bildkonfiguration hält diesen Status intern fest.

## Kennenlernformular und Terminbuchung

**Aktiv verbunden:** [Kostenloses Erstgespräch mit Anna](https://calendly.com/anna-k-99165/kostenloses-erstgesprach-mit-anna). Der Termin ist kostenlos, dauert 20 Minuten, verwendet Deutsch und findet über das verbundene Google Meet statt. Er übernimmt die im Calendly-Konto vorhandenen Zeiten: Montag bis Freitag, 09:00–17:00 Uhr, Zeitzone Europe/Berlin. Änderungen an Arbeitszeiten und Kalenderkonflikten erfolgen direkt in Calendly.

Alle primären Schaltflächen führen zu `/#intro-call`. Dort erscheint entweder der echte Buchungskalender oder, solange kein Anbieter konfiguriert ist, das ausdrücklich gekennzeichnete Demoformular.

Ohne Buchungsadresse prüft die Demo die Eingaben nur im Browser, leert das Formular und fokussiert die Bestätigung. Es werden keine Angaben gesendet oder gespeichert, kein Termin gebucht und keine E-Mail verschickt. Der Browser kann unabhängig davon seine eigene automatische Vervollständigung anbieten.

In `site.booking.url` wird **Annas echte öffentliche HTTPS-Buchungsadresse** hinterlegt, beispielsweise ein konkreter Calendly-Termin oder eine öffentliche Google-Terminbuchungsseite. Keine API-Adresse, kein privater Kalenderzugang und keine Zugangsdaten eintragen.

Bei gültiger Adresse ersetzt die Kalenderansicht das Demoformular vollständig: Nach „Freie Termine anzeigen“ lädt der echte Anbieter die verfügbaren Tage und Uhrzeiten. Name, E-Mail und weitere benötigte Angaben werden im Buchungskalender erfasst und dort bestätigt. Verfügbarkeiten, Zeitzonen, Reservierung, Konfliktprüfung und Bestätigung werden vom tatsächlichen Anbieter verwaltet. Es werden keine Termine lokal erfunden und keine Buchung durch einen bloßen Klick auf dieser Website bestätigt. Ein direkter Link bleibt für Anbieter verfügbar, die eine Einbettung nicht erlauben.

Die Kalenderverbindung wird vor der bewussten Auswahl nicht geladen. Die Datenschutzseite passt ihre Beschreibung an den konfigurierten Modus an. Der Anbieter muss mit dem richtigen Kalender verbunden sein; Arbeitszeiten, Einladungsfragen, Zeitzone und Bestätigungen sind dort zu pflegen. Ohne gültigen Link bleibt der Demomodus aktiv. Ein Google-Kalender-Zugriff über Codex allein stellt noch keine öffentliche Buchungsseite für Websitebesucher bereit.

Die Einbettung nutzt ein normales Iframe ohne zusätzliche Anbieter-SDKs; siehe die [offizielle Calendly-Dokumentation zur Iframe-Einbettung](https://calendly.com/help/advanced-calendly-embed-for-developers). Es wird kein Buchungserfolg aus einem unbestätigten Browserereignis abgeleitet.

Ein echter Anfrage-Endpunkt wäre eine separate Erweiterung mit serverseitiger Prüfung und passenden Datenschutzhinweisen. Zugangsdaten und andere Geheimnisse gehören nicht in den Frontendcode.

## Rechtliche Seiten

`/datenschutz` und `/impressum` sind auf Deutsch verfasst und innerhalb der Seiten als unvollständige Entwürfe markiert. Die früheren Pfade `/privacy` und `/legal` funktionieren weiterhin. Die erforderlichen Umschreibungen für Vercel stehen in `vercel.json`.

## Vor einem echten Start

- Annas Identität, eigene Fotos, fachliche Qualifikationen und Leistungsumfang prüfen und ergänzen. Es wurden keine Kontaktdaten, Zertifikate, Geschäftshistorie oder Ergebnisse erfunden.
- Echte Kundenstimmen mit Zustimmung einsetzen oder die Beispielstimmen ausblenden.
- Kapazität für Auftaktgespräch, Trainingsplanprüfungen, wöchentliches Feedback, zweiwöchentliche Videogespräche, Technikfeedback und Nachrichtenbegleitung bestätigen.
- Gesamtpreis, steuerliche Formulierung, Zahlungs-, Vertrags-, Kündigungs-, Erstattungs- und gegebenenfalls Widerrufsbedingungen klären.
- Einen eigenen Testtermin im verbundenen Buchungskalender auswählen und Bestätigung sowie Google-Meet-Link prüfen. Es wurde nicht ungefragt ein Testtermin erstellt oder eine Einladung verschickt.
- Anbieteridentität, Rechtsform, Anschrift, Kontakt und gegebenenfalls Register-/Steuerangaben sowie tatsächliche Verarbeitungsdaten in Impressum und Datenschutz ergänzen.
- Verfügbarkeit von Marke und Domain prüfen. Absolute Vorschau- und kanonische URLs für die tatsächliche Domain setzen.
- Erst für einen echten öffentlichen Start die Suchmaschinen-Sperren in `index.html`, `vercel.json` und `public/robots.txt` entfernen. Diese Hinweise sind kein Zugriffsschutz.

## Veröffentlichung

Die Coaching-Website ist als Demo unter [formandflourish.vercel.app](https://formandflourish.vercel.app/) veröffentlicht. Vercel verwendet das Repository-Stammverzeichnis, die Vite-Voreinstellung, den Buildbefehl `npm run build` und das Ausgabeverzeichnis `dist`. Der verbundene Calendly-Buchungskalender ist separat öffentlich erreichbar und benötigt keine API-Schlüssel im Frontend.

Der vollständige Quellcode liegt auf [GitHub: alicehamberger/anna-fitness](https://github.com/alicehamberger/anna-fitness). Die Produktionsquelle ist der Branch `main`. Node.js 22, `npm ci`, der Vite-Build und das Ausgabeverzeichnis `dist` sind für Vercel festgelegt; lokale Vercel-Konfiguration und Buildartefakte bleiben außerhalb der Versionsverwaltung.

## Bild- und Schriftlizenzen

Die Ausgangsfotografien stammen von Pexels und verwenden die [Pexels-Lizenz](https://www.pexels.com/license/). Abgebildete Personen empfehlen diese Demo nicht.

Die beiden originalen Trainingsfotos zeigen dieselbe Frau in derselben Studioserie bei Tageslicht. Sie wurden nur verkleinert und als WebP gespeichert; Gesicht und Körper wurden nicht verändert. Die Küchenszene wurde dagegen mit dem integrierten OpenAI-Bildwerkzeug bearbeitet, um die Darstellung der Frau an das Trainingsporträt anzugleichen. Sie ist kein unverändertes Foto derselben Person beim Kochen und dokumentiert kein tatsächliches Ereignis.

| Datei | Fotografie und Quelle |
| ----- | --------------------- |
| `public/images/training-daylight.webp` | Anastasia Shuraeva – [Langhanteltraining](https://www.pexels.com/photo/a-strong-woman-lifting-a-barbell-4944312/) |
| `public/images/coach-natural.webp` | Anastasia Shuraeva – [Lächeln beim Aufwärmen](https://www.pexels.com/photo/photograph-of-a-woman-stretching-while-smiling-4943919/) |
| `public/images/kitchen-anna.webp` | KI-Bearbeitung mit dem integrierten OpenAI-Bildwerkzeug. Szenengrundlage: Kamaji Ogino – [Kochen zu Hause](https://www.pexels.com/photo/woman-cooking-lunch-in-light-kitchen-5094661/). Personenreferenz: Anastasia Shuraeva – [Trainingsporträt](https://www.pexels.com/photo/photograph-of-a-woman-stretching-while-smiling-4943919/). |

<details>
<summary>Bearbeitungsauftrag für die Küchenszene</summary>

Werkzeug: integrierte Bildbearbeitung (`image_gen`), keine CLI-/API-Ausführung. Eingabe 1: `public/images/coach-natural.webp` als Personenreferenz. Eingabe 2: die vorherige `public/images/kitchen-everyday.webp` als Bearbeitungsziel. Die ausgegebene PNG-Datei wurde auf 1100 × 550 Pixel verkleinert und als `public/images/kitchen-anna.webp` gespeichert.

Verwendeter Prompt:

```text
Use case: identity-preserve photographic edit for a fictional fitness-coaching website demo. Image 1 is the portrait reference for the woman; image 2 is the kitchen photograph to edit. Edit image 2, replacing its cooking woman with the brunette athletic woman from image 1. Preserve the reference woman's recognizable facial proportions, natural skin texture and small freckles/moles, brown hair and athletic build; tie her hair back casually. Give her the same plain off-white cotton T-shirt and simple grey trousers as the kitchen target, with realistic fabric wrinkles. Keep her cooking at the stove in the same position and scale, holding the pan and spatula naturally. Let a little of her three-quarter profile be visible as she looks down at her cooking, with a relaxed everyday expression. Preserve the kitchen, cream cupboards, tiled backsplash, dishes, stove and pan, blue doorway and out-of-focus foreground wall from image 2, with its existing perspective, gentle available light, slightly imperfect documentary grain and muted colors. Retain the original landscape composition and make it work when cropped to a wide 2:1 website thumbnail with the face and hands near the center. It should look like an ordinary candid home photograph, not an advertisement: no airbrushing, glamour makeup, artificial bokeh, dramatic color grading, spotless showroom kitchen, extra people, extra limbs, logos, lettering or watermarks. Do not change the gym reference photograph. Output only the edited kitchen photograph.
```

</details>

DM Sans und DM Serif Display werden als lokale WOFF2-Dateien verwendet. Die unveränderten englischen SIL-Open-Font-Lizenztexte liegen in `public/fonts/`. Beim Seitenbesuch werden keine Schriften oder Bilder von Drittanbietern nachgeladen.

## Prüfung

Build und Lint prüfen TypeScript, Produktionsausgabe und Codequalität. Die ursprüngliche englische Fassung wurde im Browser für Desktop und Mobilgeräte geprüft. Für die deutsche Überarbeitung wurden Texte, Seitenpfade, Medien und der erzeugte Build zusätzlich statisch geprüft; eine erneute visuelle Browserprüfung war ohne Browsersteuerung nicht verfügbar.

Beim Austausch der Fotografien wurden die Bildausschnitte anhand der bestehenden Bildgrößen für Desktop und Mobilgeräte geprüft. Die drei optimierten Bilder werden lokal ausgeliefert.

Für die Calendly-Anbindung wurden der aktive, kostenfreie 20-Minuten-Termin, die deutsche Sprache, die Google-Meet-Verbindung und die übernommenen Verfügbarkeiten über Calendly bestätigt. Die Verfügbarkeitsabfrage für den 19.–26. November 2026 lieferte 80 buchbare Startzeiten. Diese Zeiten werden nicht in der Website gespeichert; der eingebettete Kalender lädt sie jeweils aktuell. Die eigentliche Terminbuchung und E-Mail-Zustellung wurden nicht durch einen Testtermin ausgelöst.
