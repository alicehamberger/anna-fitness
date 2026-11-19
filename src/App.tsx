import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { site } from "./content";
import AppointmentScheduler from "./AppointmentScheduler";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    leaf: (
      <>
        <path d="M12 21V10M12 15C5 15 3 10 4 5c5 0 8 4 8 10Zm0-3c0-6 3-9 8-9 0 5-3 9-8 9Z" />
      </>
    ),
    strength: (
      <>
        <path d="m6 8 10 10M3 9l6-6M15 21l6-6M2 6l4-4M18 22l4-4M5 12l7-7M12 19l7-7" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 1v2m0 18v2M1 12h2m18 0h2M4.2 4.2l1.5 1.5m12.6 12.6 1.5 1.5M4.2 19.8l1.5-1.5M18.3 5.7l1.5-1.5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    message: (
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 10 10 0 0 1-4-.8L3 21l1.8-5a8.2 8.2 0 0 1-.8-4.5 8.5 8.5 0 0 1 17 0Z" />
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    calendar: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4m8-4v4M4 11h16m-12 4h3" />
      </>
    ),
    circle: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  };
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name] ?? paths.leaf}
    </svg>
  );
}

function Wordmark({ inverse = false }: { inverse?: boolean }) {
  return (
    <a
      className={`wordmark ${inverse ? "wordmark-light" : ""}`}
      href="/"
      aria-label="Form & Flourish von Anna, Startseite"
    >
      <Icon name="leaf" />
      <span>
        <span className="wordmark-name">
          Form <span className="ampersand">&</span> Flourish
        </span>
        <span className="wordmark-byline">VON ANNA</span>
      </span>
    </a>
  );
}

function BookLink({
  children = "Kostenloses Erstgespräch",
  className = "",
  light = false,
}: {
  children?: ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-light" : "button-primary"} ${className}`}
      href="/#intro-call"
    >
      {children}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const links = [
    ["Die Methode", "method"],
    ["Leistungen", "included"],
    ["Über Anna", "about"],
    ["Fragen", "faq"],
  ];
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main">
        Zum Inhalt springen
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Wordmark />
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            id="main-navigation"
            aria-label="Hauptnavigation"
          >
            {links.map(([label, id]) => (
              <a href={`/#${id}`} key={id} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="button button-primary nav-book"
              href="/#intro-call"
              onClick={() => setMenuOpen(false)}
            >
              Kostenloses Erstgespräch
            </a>
          </nav>
          <button
            ref={toggle}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </div>
      </header>
    </>
  );
}

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>
  );
}

function Hero() {
  return (
    <>
      <section className="hero container" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <Eyebrow>{site.hero.eyebrow}</Eyebrow>
          <h1 id="hero-heading">
            <span>{site.hero.heading[0]}</span>
            <span>{site.hero.heading[1]}</span>
            <em>{site.hero.heading[2]}</em>
          </h1>
          <p className="hero-description">{site.hero.description}</p>
          <div className="hero-actions">
            <BookLink />
            <a href="#method" className="text-link">
              Coaching entdecken
              <span className="link-line" />
            </a>
          </div>
          <p className="booking-microcopy">
            20 Minuten <span>·</span> Kostenlos <span>·</span> Unverbindlich
          </p>
        </div>
        <figure className="hero-visual">
          <div className="hero-image-wrap">
            <img {...site.images.hero} fetchPriority="high" decoding="async" />
            <div className="image-shade" />
          </div>
          <div className="photo-note">
            <Icon name="leaf" />
            <span>
              Passt zu dir.
              <br />
              <strong>Und deinem Alltag.</strong>
            </span>
          </div>
          <div className="hero-side-note" aria-hidden="true">
            EIN BISSCHEN STÄRKER. EIN BISSCHEN MEHR DU.
          </div>
        </figure>
      </section>
      <div className="offer-strip">
        <div className="container offer-strip-inner">
          {site.hero.strip.map((item, index) => (
            <div key={item}>
              <Icon
                name={["calendar", "strength", "circle", "message"][index]}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Recognition() {
  return (
    <section
      className="section recognition"
      aria-labelledby="recognition-heading"
    >
      <div className="container recognition-grid">
        <div className="reveal">
          <Eyebrow>Ein Weg, der zu dir passt</Eyebrow>
          <h2 id="recognition-heading">
            Anfangen kennst du.
            <br />
            <em>
              Machen wir es leichter,
              <br />
              dranzubleiben.
            </em>
          </h2>
          <p className="section-intro">
            Dein Plan darf zu deinem Leben passen. Auch dann, wenn die Woche
            anders läuft als gedacht.
          </p>
          <div className="small-flourish" aria-hidden="true">
            <Icon name="leaf" />
            <span />
          </div>
        </div>
        <div className="recognition-list">
          {site.recognition.map((item) => (
            <article key={item.title} className="recognition-item reveal">
              <span className="round-icon">
                <Icon name="check" />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <p className="recognition-bridge container">
        Ein klarer Plan. Regelmäßige Anpassungen.{" "}
        <span>Jemand an deiner Seite.</span>
      </p>
    </section>
  );
}

function Method() {
  return (
    <section
      className="method section"
      id="method"
      aria-labelledby="method-heading"
    >
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <Eyebrow light>Die Flourish-Methode</Eyebrow>
            <h2 id="method-heading">
              Weniger Alles-oder-nichts.
              <br />
              <em>Mehr von dem, was zu dir passt.</em>
            </h2>
          </div>
          <p>
            Drei Bausteine. Dein persönlicher Plan.
            <br />
            Gemeinsam entwickelt. An deinen Alltag angepasst.
          </p>
        </div>
        <div className="pillar-grid">
          {site.pillars.map((pillar, index) => (
            <article className="pillar reveal" key={pillar.title}>
              <div className="pillar-top">
                <span className="step-index">0{index + 1}</span>
                <Icon name={pillar.icon} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <span className="pillar-detail">{pillar.detail}</span>
            </article>
          ))}
        </div>
        <div className="method-bottom">
          <Icon name="leaf" />
          <p>
            Stärker. Selbstbewusster. <em>Mehr du.</em>
          </p>
        </div>
      </div>
    </section>
  );
}

function WeekPreview() {
  return (
    <section className="week-section section" aria-labelledby="week-heading">
      <div className="container week-grid">
        <div className="week-copy reveal">
          <Eyebrow>Klarheit für deine Woche</Eyebrow>
          <h2 id="week-heading">
            Dein Plan im Blick.
            <br />
            <em>Begleitung, die du spürst.</em>
          </h2>
          <p>
            Du öffnest deinen Plan und weißt, was als Nächstes ansteht. Deine
            Einheiten, eine kleine Gewohnheit zum Üben und ein gemeinsamer Blick
            auf deine Woche.
          </p>
          <p>
            Manche Wochen geben wir mehr. In anderen machen wir es einfacher.
            Dein Plan darf sich mit deinem Leben verändern.
          </p>
          <a className="text-link" href="#included">
            Alle Leistungen ansehen
            <span className="link-line" />
          </a>
          <figure className="lifestyle-photo">
            <img {...site.images.lifestyle} loading="lazy" decoding="async" />
            <figcaption>
              Platz für gutes Essen. Und fürs echte Leben.
            </figcaption>
          </figure>
        </div>
        <div
          className="dashboard reveal"
          aria-label="Beispiel für einen persönlichen Wochenplan"
        >
          <div className="dashboard-top">
            <span className="dashboard-brand">
              <Icon name="leaf" /> DEIN FLOURISH-PLAN
            </span>
            <span className="demo-pill">Beispielwoche</span>
          </div>
          <div className="dashboard-title">
            <div>
              <p>Ein bisschen Struktur. Viele Möglichkeiten.</p>
              <h3>Deine Woche im Überblick.</h3>
            </div>
            <Icon name="sun" />
          </div>
          <div className="dashboard-days" aria-hidden="true">
            {["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"].map((day, i) => (
              <span
                className={[0, 2, 4, 6].includes(i) ? "active" : ""}
                key={i}
              >
                {day}
              </span>
            ))}
          </div>
          <div className="session-list">
            {site.exampleWeek.map((session) => (
              <div className="session" key={session.day}>
                <span className="session-day">{session.day}</span>
                <span className="session-icon">
                  <Icon name={session.icon} />
                </span>
                <div>
                  <strong>{session.name}</strong>
                  <span>{session.detail}</span>
                </div>
                <span className="session-circle" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="habit-focus">
            <Icon name="leaf" />
            <div>
              <span>DEIN FOKUS FÜR DIESE WOCHE</span>
              <strong>Nimm dir Zeit fürs Mittagessen.</strong>
              <p>Eine kleine Gewohnheit. Kein neuer Anspruch an Perfektion.</p>
            </div>
          </div>
          <p className="dashboard-disclaimer">
            Eine Beispielwoche zur Orientierung. Deine Einheiten und Wochenziele
            stimmen wir individuell auf dich ab.
          </p>
        </div>
      </div>
    </section>
  );
}

function Included() {
  return (
    <section
      id="included"
      className="included section"
      aria-labelledby="included-heading"
    >
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <Eyebrow>Persönlich. Durchdacht. Für dich.</Eyebrow>
            <h2 id="included-heading">
              Was in sechs Monaten
              <br />
              <em>für dich drin ist.</em>
            </h2>
          </div>
          <p>
            Dein Coaching bedeutet laufende persönliche Begleitung: Zeit für
            dich, regelmäßiges Feedback und einen Plan, den wir gemeinsam
            weiterentwickeln.
          </p>
        </div>
        <div className="commitments">
          {site.offer.commitments.map((item) => (
            <article className="commitment reveal" key={item.title}>
              <Icon name="check" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="roadmap section" aria-labelledby="roadmap-heading">
      <div className="container">
        <div className="roadmap-heading reveal">
          <Eyebrow>Raum zum Lernen. Zeit zum Wachsen.</Eyebrow>
          <h2 id="roadmap-heading">
            Sechs Monate.
            <br />
            <em>Eine Basis für deinen weiteren Weg.</em>
          </h2>
          <p>
            Wir richten uns nach deinem Tempo und deinem Alltag. Wie sich dein
            Gewicht entwickelt, ist individuell.
          </p>
        </div>
        <div className="timeline">
          {site.roadmap.map((phase) => (
            <article className="timeline-item reveal" key={phase.period}>
              <div className="timeline-dot" aria-hidden="true" />
              <span className="timeline-period">{phase.period}</span>
              <h3>{phase.title}</h3>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stories() {
  if (!site.testimonials.enabled) return null;
  return (
    <section className="stories section" aria-labelledby="stories-heading">
      <div className="container">
        <div className="stories-heading reveal">
          <Eyebrow>Was sich im Alltag verändern kann</Eyebrow>
          <h2 id="stories-heading">
            Fortschritt hat <em>viele Stimmen.</em>
          </h2>
        </div>
        <div className="quote-grid">
          {site.testimonials.quotes.map(({ name, quote }) => (
            <figure className="quote-card reveal" key={name}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{quote}</blockquote>
              <figcaption>
                <span className="quote-name">{name}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="stories-note">{site.testimonials.label}</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container about-grid">
        <figure className="about-photo reveal">
          <img
            src={site.images.anna.src}
            alt={site.images.anna.alt}
            width={site.images.anna.width}
            height={site.images.anna.height}
            loading="lazy"
            decoding="async"
          />
          <span className="photo-signature" aria-hidden="true">
            An deiner Seite.
            <br />
            <em>Für ein stärkeres Du.</em>
          </span>
        </figure>
        <div className="about-copy reveal">
          <Eyebrow>Über Anna</Eyebrow>
          <h2 id="about-heading">
            Dein Plan zählt.
            <br />
            <em>
              Wer dich begleitet,
              <br />
              auch.
            </em>
          </h2>
          {site.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {site.about.verifiedQualifications.length > 0 && (
            <ul className="qualifications">
              {site.about.verifiedQualifications.map((qualification) => (
                <li key={qualification}>{qualification}</li>
              ))}
            </ul>
          )}
          <span className="signature">Anna</span>
          <p className="signature-label">FORM & FLOURISH</p>
        </div>
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section
      className="investment section"
      aria-labelledby="investment-heading"
    >
      <div className="container investment-grid">
        <div className="reveal">
          <Eyebrow light>Eine Investition in dich</Eyebrow>
          <h2 id="investment-heading">
            Ein Plan für dich.
            <br />
            <em>Jemand an deiner Seite.</em>
          </h2>
          <p>
            Sechs Monate, um stärker zu werden, deinen Weg zu finden und
            Routinen zu üben, die zu deinem Leben passen. Mit persönlicher
            Begleitung von Anfang an.
          </p>
        </div>
        <div className="investment-offer reveal">
          <p className="offer-name">{site.offer.name}</p>
          <p className="offer-duration">
            {site.offer.duration} persönliches 1:1-Coaching
          </p>
          <div className="investment-divider" />
          <p className="offer-summary">
            Individuelles Training & Ernährungsbegleitung
            <br />
            Regelmäßiges Feedback, Gespräche & direkte Begleitung
          </p>
          <BookLink light />
          <p className="investment-micro">
            Dein Erstgespräch ist kostenlos und vom Coaching getrennt.
            <br />
            Du gehst keine Kaufverpflichtung ein.
          </p>
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  return (
    <section
      className="getting-started section"
      aria-labelledby="start-heading"
    >
      <div className="container">
        <div className="centered-heading reveal">
          <Eyebrow>Alles beginnt mit einem Gespräch</Eyebrow>
          <h2 id="start-heading">
            Ein kleiner erster Schritt.
            <br />
            <em>Gehen wir ihn gemeinsam.</em>
          </h2>
        </div>
        <div className="start-grid">
          {site.gettingStarted.map((step, i) => (
            <article className="start-item reveal" key={step.title}>
              <span className="start-number">0{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-heading">
      <div className="container faq-grid">
        <div className="reveal">
          <Eyebrow>Was du noch wissen möchtest</Eyebrow>
          <h2 id="faq-heading">
            Gute Fragen.
            <br />
            <em>Ehrliche Antworten.</em>
          </h2>
          <p>
            Du bist noch unsicher, ob das zu dir passt?
            <br />
            Das können wir in Ruhe im Erstgespräch klären.
          </p>
          <BookLink />
        </div>
        <div className="faq-list">
          {site.faqs.map((faq, index) => (
            <div
              className={`faq-item ${open === index ? "is-open" : ""}`}
              key={faq.question}
            >
              <h3>
                <button
                  type="button"
                  aria-expanded={open === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() => setOpen(open === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <Icon name="plus" />
                </button>
              </h3>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                hidden={open !== index}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type FieldName = "name" | "email" | "goal" | "setting" | "note";
const fieldOrder: FieldName[] = ["name", "email", "goal", "setting", "note"];

function getBookingUrl() {
  try {
    const url = new URL(site.booking.url);
    return url.protocol === "https:" && !url.username && !url.password
      ? url.href
      : null;
  } catch {
    return null;
  }
}

function Booking() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [complete, setComplete] = useState(false);
  const success = useRef<HTMLDivElement>(null);
  const bookingUrl = getBookingUrl();
  useEffect(() => {
    if (complete) success.current?.focus();
  }, [complete]);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const fields = new FormData(form);
    const value = (name: FieldName) => String(fields.get(name) ?? "").trim();
    const nextErrors: Partial<Record<FieldName, string>> = {};
    if (!value("name")) nextErrors.name = "Bitte gib deinen Namen ein.";
    else if (value("name").length > 80)
      nextErrors.name = "Bitte verwende höchstens 80 Zeichen.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email")))
      nextErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    if (!value("goal"))
      nextErrors.goal = "Bitte wähle dein wichtigstes Ziel aus.";
    if (!value("setting"))
      nextErrors.setting = "Bitte wähle aus, wo du trainieren möchtest.";
    if (value("note").length > site.booking.noteMaxLength)
      nextErrors.note = `Bitte verwende höchstens ${site.booking.noteMaxLength} Zeichen.`;
    setErrors(nextErrors);
    const firstError = fieldOrder.find((field) => nextErrors[field]);
    if (firstError) {
      const input = form.elements.namedItem(firstError);
      if (input instanceof HTMLElement) input.focus();
      return;
    }
    // No request, storage, analytics event or query-string personal data.
    form.reset();
    setComplete(true);
  };

  const errorFor = (field: FieldName) =>
    errors[field] && (
      <span className="field-error" id={`${field}-error`}>
        {errors[field]}
      </span>
    );
  const resetDemo = () => {
    setComplete(false);
    setTimeout(() => document.getElementById("booking-name")?.focus(), 0);
  };

  return (
    <section
      id="intro-call"
      className={`booking section ${bookingUrl ? "booking-live" : ""}`}
      aria-labelledby="booking-heading"
    >
      <div className="container booking-grid">
        <div className="booking-copy reveal">
          <Eyebrow>Lernen wir uns kennen</Eyebrow>
          <h2 id="booking-heading">
            Finden wir einen Plan,
            <br />
            <em>auf dem du aufbauen kannst.</em>
          </h2>
          <p>
            Erzähl mir ein wenig von deinen Zielen. Gemeinsam schauen wir,
            welche Begleitung zu dir passen könnte.
          </p>
          <div className="call-details">
            <Icon name="calendar" />
            <div>
              <strong>
                Kostenloses Erstgespräch · {site.offer.introMinutes} Minuten
              </strong>
              <span>Zeit für deine Fragen. Ganz unverbindlich.</span>
            </div>
          </div>
          <div className="booking-price">
            <span>{site.offer.name}</span>
            <strong>{site.offer.duration} persönliches 1:1-Coaching</strong>
          </div>
          <p className="booking-personal">
            Du musst nicht perfekt vorbereitet sein.
            <br />
            Nur neugierig darauf, was möglich ist.
          </p>
          <Icon name="leaf" className="booking-leaf" />
        </div>
        <div className="booking-panel reveal">
          {bookingUrl ? (
            <AppointmentScheduler url={bookingUrl} />
          ) : (
            <>
              <div className="form-mode">
                <span className="demo-pill">Dein erster Schritt</span>
                <p>
                  Demomodus: Deine Angaben bleiben im Browser. Es wird noch kein
                  Termin gebucht.
                </p>
              </div>
              {complete ? (
                <div
                  className="booking-success"
                  ref={success}
                  tabIndex={-1}
                  role="status"
                >
                  <span className="success-icon">
                    <Icon name="check" />
                  </span>
                  <h3>So einfach wäre der erste Schritt.</h3>
                  <p>
                    Deine Eingaben wurden geprüft und das Formular wurde
                    geleert. In dieser Demo werden keine Angaben gesendet oder
                    gespeichert. Es wurde weder ein Termin gebucht noch eine
                    E-Mail verschickt.
                  </p>
                  <p className="success-note">
                    Die direkte Terminwahl wird verfügbar, sobald die Buchung
                    eingerichtet ist.
                  </p>
                  <button
                    className="text-link"
                    type="button"
                    onClick={resetDemo}
                  >
                    Noch einmal ausprobieren
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  {Object.keys(errors).length > 0 && (
                    <p className="form-error-summary" role="alert">
                      Bitte prüfe die markierten Felder.
                    </p>
                  )}
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="booking-name">
                        Dein Name <span>(Pflichtfeld)</span>
                      </label>
                      <input
                        id="booking-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        maxLength={80}
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={
                          errors.name ? "name-error" : undefined
                        }
                        placeholder="Wie darf ich dich nennen?"
                      />
                      {errorFor("name")}
                    </div>
                    <div className="form-field">
                      <label htmlFor="booking-email">
                        E-Mail-Adresse <span>(Pflichtfeld)</span>
                      </label>
                      <input
                        id="booking-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        maxLength={254}
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        placeholder="du@beispiel.de"
                      />
                      {errorFor("email")}
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="booking-goal">
                      Was ist dein wichtigstes Ziel? <span>(Pflichtfeld)</span>
                    </label>
                    <div className="select-wrap">
                      <select
                        name="goal"
                        id="booking-goal"
                        defaultValue=""
                        required
                        aria-invalid={!!errors.goal}
                        aria-describedby={
                          errors.goal ? "goal-error" : undefined
                        }
                      >
                        <option value="" disabled>
                          Was möchtest du erreichen?
                        </option>
                        <option value="weight-management">
                          Mit mehr Flexibilität abnehmen
                        </option>
                        <option value="strength">
                          Stärker und sicherer trainieren
                        </option>
                        <option value="consistency">
                          Eine feste Routine entwickeln
                        </option>
                        <option value="exploring">
                          Meinen passenden Weg finden
                        </option>
                      </select>
                      <Icon name="chevron" />
                    </div>
                    {errorFor("goal")}
                  </div>
                  <div className="form-field">
                    <label htmlFor="booking-setting">
                      Wo möchtest du trainieren? <span>(Pflichtfeld)</span>
                    </label>
                    <div className="select-wrap">
                      <select
                        name="setting"
                        id="booking-setting"
                        defaultValue=""
                        required
                        aria-invalid={!!errors.setting}
                        aria-describedby={
                          errors.setting ? "setting-error" : undefined
                        }
                      >
                        <option value="" disabled>
                          Wähle deinen Trainingsort
                        </option>
                        <option value="gym">Im Fitnessstudio</option>
                        <option value="home">Zu Hause</option>
                        <option value="both">Zu Hause und im Studio</option>
                        <option value="unsure">Das weiß ich noch nicht</option>
                      </select>
                      <Icon name="chevron" />
                    </div>
                    {errorFor("setting")}
                  </div>
                  <div className="form-field">
                    <label htmlFor="booking-note">
                      Was möchtest du mir noch mitgeben?{" "}
                      <span>(freiwillig)</span>
                    </label>
                    <textarea
                      id="booking-note"
                      name="note"
                      rows={3}
                      maxLength={site.booking.noteMaxLength}
                      aria-invalid={!!errors.note}
                      aria-describedby={`note-hint${errors.note ? " note-error" : ""}`}
                      placeholder="Zum Beispiel etwas über deinen Alltag oder deine Wünsche …"
                    />
                    <p className="field-hint" id="note-hint">
                      Höchstens {site.booking.noteMaxLength} Zeichen. Bitte
                      keine medizinischen oder anderen sensiblen Angaben.
                    </p>
                    {errorFor("note")}
                  </div>
                  <button
                    type="submit"
                    className="button button-primary form-submit"
                  >
                    Kennenlernen ausprobieren
                  </button>
                  <p className="form-privacy">
                    Kostenlos · Unverbindlich ·{" "}
                    <a href="/datenschutz">Datenschutz</a>
                  </p>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Wordmark inverse />
          <p>
            Stärker. Selbstbewusster.
            <br />
            <em>Mehr du.</em>
          </p>
          <a className="footer-top-link" href="#top">
            Nach oben
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.brand} {site.byline}.
            {site.conceptPreview && " · Website-Demo"}
          </p>
          <nav aria-label="Rechtliche Informationen">
            <a href="/datenschutz">Datenschutz</a>
            <a href="/impressum">Impressum</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function LegalPage({ privacy }: { privacy: boolean }) {
  const bookingUrl = getBookingUrl();
  useEffect(() => {
    document.title = `${privacy ? "Datenschutz" : "Impressum"} | Form & Flourish von Anna`;
  }, [privacy]);
  return (
    <main id="main" className="legal-page container">
      <Eyebrow>Rechtliche Informationen · Entwurf</Eyebrow>
      <h1>
        {privacy ? "Datenschutz" : "Impressum"}
        <em> Informationen zur Demo.</em>
      </h1>
      <p className="legal-callout">
        Diese Website ist eine Design-Demo. Die folgenden Angaben sind ein
        Entwurf und müssen vor einem echten Geschäftsbetrieb um die
        tatsächlichen Unternehmens- und Verarbeitungsdaten ergänzt werden.
      </p>
      {privacy ? (
        <>
          <h2>Deine Angaben im Formular</h2>
          {bookingUrl ? (
            <p>
              Für echte Terminbuchungen wird nach deinem Klick der Kalender des
              verbundenen Buchungsanbieters geladen. Dort wählst du einen
              Termin, gibst deine Kontaktdaten ein und bestätigst deine Buchung.
              Die Buchungsdaten werden vom Anbieter verarbeitet. Die Website
              führt dafür keinen eigenen Formularspeicher und legt keine Kopie
              deiner Angaben an.
            </p>
          ) : (
            <p>
              Das Kennenlernformular prüft deine Eingaben ausschließlich im
              Browser und leert sich nach erfolgreicher Prüfung. Es übermittelt
              keine Angaben an einen Server, speichert sie nicht im
              Browserspeicher und löst weder eine Terminbuchung noch eine E-Mail
              aus. Nicht abgeschickter Text bleibt bis zum Leeren oder Neuladen
              im geöffneten Formular. Dein Browser kann unabhängig davon eine
              eigene automatische Vervollständigung anbieten.
            </p>
          )}
          <h2>Technische Bereitstellung</h2>
          <p>
            Diese Website bindet keine Analysewerkzeuge, Werbetracker oder
            eigenen Anwendungscookies ein. Schriften und Bilder werden lokal mit
            der Website ausgeliefert. Der Entwicklungsserver oder ein späterer
            Hostinganbieter kann gewöhnliche technische Zugriffsdaten, etwa
            IP-Adressen, in eigenen Protokollen verarbeiten.
          </p>
          <h2>Externe Terminbuchung</h2>
          {bookingUrl ? (
            <p>
              Der Buchungskalender ist unter{" "}
              <a className="text-link" href={bookingUrl} rel="noreferrer">
                {new URL(bookingUrl).hostname}
              </a>{" "}
              erreichbar. Die eingebettete Terminwahl stellt erst nach deinem
              Klick eine Verbindung zum Anbieter her. Dabei können technische
              Zugriffsdaten sowie die von dir eingegebenen Buchungsdaten
              verarbeitet werden. Es gelten die Angaben des jeweiligen
              Anbieters. Du kannst die Buchung alternativ in einem neuen Tab
              öffnen. Eine Buchung ist erst nach der Bestätigung beim Anbieter
              abgeschlossen.
            </p>
          ) : (
            <p>
              Aktuell ist kein Buchungsanbieter verbunden. Wird später ein
              Anbieter eingerichtet, öffnet die Terminwahl über einen externen
              Link. Die Angaben aus diesem Formular werden nicht an den Link
              angehängt. Für die Verarbeitung beim jeweiligen Anbieter gelten
              dessen Informationen, die vor einer echten Nutzung geprüft und
              hier berücksichtigt werden müssen.
            </p>
          )}
          <h2>Vor dem Betrieb zu ergänzen</h2>
          <ul>
            <li>
              Verantwortliche Stelle, Geschäftsanschrift und erreichbarer
              Datenschutzkontakt.
            </li>
            <li>
              Tatsächliche Hosting-, Formular- und Buchungsanbieter, Zwecke,
              Rechtsgrundlagen und Empfänger.
            </li>
            <li>
              Speicherfristen, Löschverfahren, mögliche Drittlandübermittlungen
              und erforderliche Vereinbarungen.
            </li>
            <li>
              Betroffenenrechte, Kontaktwege, zuständige Aufsichtsbehörde und
              gegebenenfalls Einwilligungsverfahren.
            </li>
          </ul>
          <p>
            Bitte gib im Demoformular keine medizinischen, finanziellen oder
            anderen sensiblen Informationen an.
          </p>
        </>
      ) : (
        <>
          <h2>Angaben zum Angebot</h2>
          <p>
            Form & Flourish von Anna ist eine fiktive Coaching-Marke für diese
            Website-Demo. Die Flourish-Methode wird als sechsmonatiges
            persönliches 1:1-Coaching gezeigt. Das kostenlose Erstgespräch ist
            davon getrennt und begründet keine Kaufverpflichtung.
          </p>
          <h2>Unternehmensangaben</h2>
          <p>
            Die tatsächliche Anbieteridentität, Rechtsform, ladungsfähige
            Anschrift, Kontaktmöglichkeiten sowie gegebenenfalls Register- und
            Steuerangaben sind noch zu ergänzen. Es wurden keine geschäftlichen
            Kontaktdaten oder Qualifikationen erfunden.
          </p>
          <h2>Leistungen und Konditionen</h2>
          <p>
            Vor einem echten Start sind die dargestellten Leistungen und
            Kapazitäten, der endgültige Gesamtpreis und dessen steuerliche
            Formulierung sowie Vertrags-, Zahlungs-, Kündigungs-, Erstattungs-
            und gegebenenfalls Widerrufsbedingungen zu bestätigen. Die
            Verfügbarkeit des Markennamens ist nicht geprüft.
          </p>
          <h2>Bilder und Beispielstimmen</h2>
          <p>
            Die Trainingsfotos stammen von Anastasia Shuraeva auf Pexels und
            zeigen ein Fotomodell. Die Küchenszene wurde mit KI bearbeitet:
            Grundlage ist ein Pexels-Foto von Kamaji Ogino, die Trainingsfotos
            dienten als Personenreferenz. Sie dokumentiert keine tatsächliche
            Kochsituation. Die Bilder sind keine echten Porträts von Anna oder
            Kundinnen und bedeuten keine Empfehlung durch die abgebildeten
            Personen. Die Stimmen von Anna,
            Sophia und Sarah sind erfundene Beispiele für die Demo. Vor einem
            echten Geschäftsstart sind sie durch freigegebene echte Erfahrungen
            zu ersetzen oder auszublenden.
          </p>
        </>
      )}
      <a href="/" className="button button-primary">
        Zurück zur Startseite
      </a>
    </main>
  );
}

function NotFound() {
  return (
    <main id="main" className="legal-page container">
      <Eyebrow>Ein kleiner Umweg</Eyebrow>
      <h1>
        Hier geht’s <em>wieder weiter.</em>
      </h1>
      <p>
        Diese Seite ist nicht verfügbar. Auf der Startseite erfährst du alles
        über das Coaching.
      </p>
      <a href="/" className="button button-primary">
        Zur Startseite
      </a>
    </main>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const isHome = path === "/";
  useEffect(() => {
    // On a direct section link, React mounts after the browser's first anchor
    // lookup. Wait for local fonts so the destination is in its final position.
    if (!isHome || !window.location.hash) return;
    let cancelled = false;
    let destination: string;
    try {
      destination = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    void document.fonts.ready.then(() => {
      if (!cancelled) {
        document.getElementById(destination)?.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      }
    });
    return () => {
      cancelled = true;
    };
  }, [isHome]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="top">
      <Header />
      {isHome ? (
        <>
          <main id="main">
            <Hero />
            <Recognition />
            <Method />
            <WeekPreview />
            <Included />
            <Roadmap />
            <Stories />
            <About />
            <Investment />
            <GettingStarted />
            <FAQ />
            <Booking />
          </main>
          <div className="mobile-booking">
            <span>20 Minuten · Kostenlos</span>
            <BookLink>Erstgespräch</BookLink>
          </div>
        </>
      ) : ["/datenschutz", "/impressum", "/privacy", "/legal"].includes(
          path,
        ) ? (
        <LegalPage privacy={path === "/datenschutz" || path === "/privacy"} />
      ) : (
        <NotFound />
      )}
      <Footer />
    </div>
  );
}
