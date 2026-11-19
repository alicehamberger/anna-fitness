import { useEffect, useRef, useState } from "react";

/** The provider owns availability, double-booking prevention and confirmation. */
export default function AppointmentScheduler({ url }: { url: string }) {
  const [opened, setOpened] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const hostname = new URL(url).hostname;
  const provider =
    hostname === "calendly.com" || hostname === "www.calendly.com"
      ? "Calendly"
      : hostname === "calendar.google.com"
        ? "Google Calendar"
        : hostname === "cal.com"
          ? "Cal.com"
          : hostname;

  useEffect(() => {
    if (opened) heading.current?.focus({ preventScroll: true });
  }, [opened]);

  return (
    <div className={`appointment-scheduler ${opened ? "is-open" : ""}`}>
      <div className="form-mode">
        <span className="demo-pill">Dein kostenloses Erstgespräch</span>
        <h3 className="scheduler-heading" tabIndex={-1} ref={heading}>
          {opened
            ? "Wähle deinen Wunschtermin."
            : "Finde einen Termin, der zu dir passt."}
        </h3>
        <p>
          Wähle einen freien Tag und eine Uhrzeit. Anschließend gibst du deine
          Kontaktdaten ein und bestätigst deine Buchung direkt im Kalender.
        </p>
      </div>
      {opened ? (
        <div className="scheduler-frame-wrap">
          <iframe
            className="scheduler-frame"
            src={url}
            title="Freie Termine ansehen und kostenloses Erstgespräch buchen"
            referrerPolicy="no-referrer"
          />
        </div>
      ) : (
        <div className="scheduler-start">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <rect x="8" y="11" width="32" height="30" rx="4" />
            <path
              d="M16 6v10m16-10v10M8 22h32m-23 8 5 5 10-10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <ol className="scheduler-steps">
            <li>Passenden Tag auswählen</li>
            <li>Freie Uhrzeit auswählen</li>
            <li>Kontaktdaten eingeben und Termin bestätigen</li>
          </ol>
          <button
            className="button button-primary form-submit"
            type="button"
            onClick={() => setOpened(true)}
          >
            Freie Termine anzeigen
          </button>
        </div>
      )}
      <p className="scheduler-privacy">
        Der Kalender wird von {provider} bereitgestellt und erst nach deinem
        Klick geladen. Deine Buchungsdaten werden dort verarbeitet.{" "}
        <a href="/datenschutz">Datenschutz</a>
      </p>
      <a
        className="scheduler-external text-link"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Terminbuchung in einem neuen Tab öffnen
      </a>
      <p className="scheduler-help">
        {opened
          ? "Falls der Kalender hier nicht angezeigt wird, kannst du die Terminbuchung im neuen Tab öffnen. Eine Buchung ist erst nach der Bestätigung im Kalender abgeschlossen."
          : "Die Terminwahl ist kostenlos. Mit dem Erstgespräch gehst du keine Kaufverpflichtung für das Coaching ein."}
      </p>
    </div>
  );
}
