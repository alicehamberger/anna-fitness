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

- `src/content.ts`: Marke, Angebot, Preis, alle neun Leistungsbausteine, Bilder, Wochenplan, Ablauf, Beispielstimmen, Philosophie, Qualifikationen, häufige Fragen und Buchungsadresse.
- `src/App.tsx`: Seitenaufbau, kurze Oberflächentexte, mobile Navigation, Fragen-Akkordeon, Formularprüfung und rechtliche Entwürfe.
- `src/styles.css`: Farben, lokale Schriften, responsives Layout, Tastaturfokus und reduzierte Bewegung.
- `index.html`: deutsche Spracheinstellung, Seitentitel, Beschreibung und Vorschaumetadaten.
- `public/images/` und `public/fonts/`: lokale, austauschbare Medien.
- `public/social-preview.svg`: bearbeitbare Grafik für die Linkvorschau; die deutsche JPEG-Fassung liegt daneben.

Das Layout nutzt deutsche Texte, einheitliche Du-Ansprache und **4.000 € gesamt** als Preisformat. Die auffällige Konzeptleiste und die Stockfoto-Bildunterschriften sind entfernt. Ein dezenter Demohinweis bleibt im Footer; der Buchungsstatus wird direkt am Formular erklärt.

## Beispielstimmen und Bilder

Die drei Stimmen tragen die erfundenen Vornamen **Anna, Sophia und Sarah**. Ein gemeinsamer Hinweis unter den Karten kennzeichnet sie als fiktive Beispielstimmen. `site.testimonials.enabled` blendet die gesamte Sektion aus. Vor einem echten Geschäftsstart mit freigegebenen, echten Erfahrungen ersetzen oder ausblenden.

Die Fotografien zeigen Fotomodelle, keine echten Kundinnen und kein bestätigtes Porträt von Anna. Herkunft und Rechte bleiben hier und im Impressumsentwurf dokumentiert. Die Bildkonfiguration hält diesen Status intern fest.

## Kennenlernformular und Terminbuchung

Alle primären Schaltflächen führen zu `/#intro-call`. Abgefragt werden Name, E-Mail-Adresse, Hauptziel, Trainingsort und eine freiwillige, kurze Nachricht ohne sensible Angaben.

Ohne Buchungsadresse prüft die Demo die Eingaben nur im Browser, leert das Formular und fokussiert die Bestätigung. Es werden keine Angaben gesendet oder gespeichert, kein Termin gebucht und keine E-Mail verschickt. Der Browser kann unabhängig davon seine eigene automatische Vervollständigung anbieten.

In `site.booking.url` kann **eine echte HTTPS-Buchungsadresse** hinterlegt werden. Danach führt die Bestätigung zur externen Terminwahl. Auch in diesem Modus werden die Formularangaben nicht übertragen oder an den Link angehängt. Die tatsächliche Buchung erfolgt beim Anbieter. Ungültige oder nicht verschlüsselte Adressen lassen die Demo aktiv.

Ein echter Anfrage-Endpunkt wäre eine separate Erweiterung mit serverseitiger Prüfung und passenden Datenschutzhinweisen. Zugangsdaten und andere Geheimnisse gehören nicht in den Frontendcode.

## Rechtliche Seiten

`/datenschutz` und `/impressum` sind auf Deutsch verfasst und innerhalb der Seiten als unvollständige Entwürfe markiert. Die früheren Pfade `/privacy` und `/legal` funktionieren weiterhin. Die erforderlichen Umschreibungen für Vercel stehen in `vercel.json`.

## Vor einem echten Start

- Annas Identität, eigene Fotos, fachliche Qualifikationen und Leistungsumfang prüfen und ergänzen. Es wurden keine Kontaktdaten, Zertifikate, Geschäftshistorie oder Ergebnisse erfunden.
- Echte Kundenstimmen mit Zustimmung einsetzen oder die Beispielstimmen ausblenden.
- Kapazität für Auftaktgespräch, Trainingsplanprüfungen, wöchentliches Feedback, zweiwöchentliche Videogespräche, Technikfeedback und Nachrichtenbegleitung bestätigen.
- Gesamtpreis, steuerliche Formulierung, Zahlungs-, Vertrags-, Kündigungs-, Erstattungs- und gegebenenfalls Widerrufsbedingungen klären.
- Tatsächliche Terminbuchung anschließen und testen. Den Formularhinweis nur dann anpassen, wenn sich die Funktion wirklich geändert hat.
- Anbieteridentität, Rechtsform, Anschrift, Kontakt und gegebenenfalls Register-/Steuerangaben sowie tatsächliche Verarbeitungsdaten in Impressum und Datenschutz ergänzen.
- Verfügbarkeit von Marke und Domain prüfen. Absolute Vorschau- und kanonische URLs für die tatsächliche Domain setzen.
- Erst für einen echten öffentlichen Start die Suchmaschinen-Sperren in `index.html`, `vercel.json` und `public/robots.txt` entfernen. Diese Hinweise sind kein Zugriffsschutz.

## Später veröffentlichen

Es wurde keine Website extern veröffentlicht. Für Vercel: Repository-Stammverzeichnis, Vite-Voreinstellung, Buildbefehl `npm run build`, Ausgabeverzeichnis `dist`. Andere statische Hoster benötigen entsprechende Seitenpfad-Umschreibungen. Eine Veröffentlichung aktiviert das Demoformular nicht automatisch.

Die GitHub-Adresse ist bereits als Remote hinterlegt: [alicehamberger/anna-fitness](https://github.com/alicehamberger/anna-fitness). Der Upload benötigt weiterhin eine schreibberechtigte GitHub-Anmeldung.

## Bild- und Schriftlizenzen

Die lokal gespeicherten Fotografien stammen von Pexels und verwenden die [Pexels-Lizenz](https://www.pexels.com/license/). Abgebildete Personen empfehlen diese Demo nicht.

| Datei                                 | Fotografie und Quelle                                                                                                     |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `public/images/training.jpg`          | Joshua Brown – [Trainingsaufnahme](https://www.pexels.com/photo/a-woman-working-out-at-a-gym-13197590/)                   |
| `public/images/coach-placeholder.jpg` | Joshua Brown – [Frau mit Kurzhanteln](https://www.pexels.com/photo/a-woman-holding-dumbbells-13197592/)                   |
| `public/images/everyday-food.jpg`     | Ella Olsson – [Gemüse und Quinoa](https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777/) |

DM Sans und DM Serif Display werden als lokale WOFF2-Dateien verwendet. Die unveränderten englischen SIL-Open-Font-Lizenztexte liegen in `public/fonts/`. Beim Seitenbesuch werden keine Schriften oder Bilder von Drittanbietern nachgeladen.

## Prüfung

Build und Lint prüfen TypeScript, Produktionsausgabe und Codequalität. Die ursprüngliche englische Fassung wurde im Browser für Desktop und Mobilgeräte geprüft. Für die deutsche Überarbeitung wurden Texte, Seitenpfade, Medien und der erzeugte Build zusätzlich statisch geprüft; eine erneute visuelle Browserprüfung war ohne Browsersteuerung nicht verfügbar.
