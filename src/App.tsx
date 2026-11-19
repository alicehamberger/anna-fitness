import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { site } from "./content";

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
      aria-label="Form & Flourish by Anna, home"
    >
      <Icon name="leaf" />
      <span>
        <span className="wordmark-name">
          Form <span className="ampersand">&</span> Flourish
        </span>
        <span className="wordmark-byline">BY ANNA</span>
      </span>
    </a>
  );
}

function BookLink({
  children = "Book a free intro call",
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
    ["The Method", "method"],
    ["What You Get", "included"],
    ["About Anna", "about"],
    ["FAQ", "faq"],
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
        Skip to content
      </a>
      {site.conceptPreview && (
        <div className="concept-bar">
          A coaching concept by Anna <span aria-hidden="true">·</span> Preview
          website & demo booking
        </div>
      )}
      <header className="site-header">
        <div className="container header-inner">
          <Wordmark />
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            id="main-navigation"
            aria-label="Main navigation"
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
              Book a free intro call
            </a>
          </nav>
          <button
            ref={toggle}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
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
              Explore the coaching
              <span className="link-line" />
            </a>
          </div>
          <p className="booking-microcopy">
            20 minutes <span>·</span> Free <span>·</span> No obligation
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
              Built around
              <br />
              <strong>your real life.</strong>
            </span>
          </div>
          <div className="hero-side-note" aria-hidden="true">
            A LITTLE STRONGER. A LITTLE MORE YOU.
          </div>
          <figcaption className="photo-caption">
            Stock training image · Concept preview
          </figcaption>
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
          <Eyebrow>A different way forward</Eyebrow>
          <h2 id="recognition-heading">
            You know how to start.
            <br />
            <em>
              Let’s make it easier
              <br />
              to keep going.
            </em>
          </h2>
          <p className="section-intro">
            You don’t need another fresh start. You need an approach that makes
            space for being human.
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
        A clear plan. Regular adjustments. <span>Someone in your corner.</span>
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
            <Eyebrow light>The Flourish Method</Eyebrow>
            <h2 id="method-heading">
              Less all-or-nothing.
              <br />
              <em>More of what works for you.</em>
            </h2>
          </div>
          <p>
            Three connected pillars. One individual plan.
            <br />
            Built with you, then adapted as life happens.
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
            Stronger. More confident. <em>More you.</em>
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
          <Eyebrow>Clarity, week by week</Eyebrow>
          <h2 id="week-heading">
            A plan you can see.
            <br />
            <em>Support you can feel.</em>
          </h2>
          <p>
            Open your plan and know your next step. Your sessions, a small habit
            to practise and a check-in to keep the conversation going.
          </p>
          <p>
            Some weeks we build. Some weeks we simplify. Your plan should move
            with you.
          </p>
          <a className="text-link" href="#included">
            See what’s included
            <span className="link-line" />
          </a>
          <figure className="lifestyle-photo">
            <img {...site.images.lifestyle} loading="lazy" decoding="async" />
            <figcaption>Room for everyday food. And everyday life.</figcaption>
          </figure>
        </div>
        <div
          className="dashboard reveal"
          aria-label="Illustrative weekly coaching dashboard"
        >
          <div className="dashboard-top">
            <span className="dashboard-brand">
              <Icon name="leaf" /> YOUR FLOURISH PLAN
            </span>
            <span className="demo-pill">Example week</span>
          </div>
          <div className="dashboard-title">
            <div>
              <p>A little structure. A lot of possibility.</p>
              <h3>Your week, at a glance.</h3>
            </div>
            <Icon name="sun" />
          </div>
          <div className="dashboard-days" aria-hidden="true">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
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
              <span>THIS WEEK’S HABIT FOCUS</span>
              <strong>Make space for a proper lunch.</strong>
              <p>A small step to practise, not a rule to perfect.</p>
            </div>
          </div>
          <p className="dashboard-disclaimer">
            Illustrative coaching preview. Your plan and sessions are
            individualised; this is not a universal prescription or a client
            record.
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
            <Eyebrow>Individual attention. Thoughtful support.</Eyebrow>
            <h2 id="included-heading">
              What six months
              <br />
              <em>together includes.</em>
            </h2>
          </div>
          <p>
            The fee pays for an ongoing coaching relationship: time to
            understand you, review your progress and adjust the plan with you.
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
        {site.conceptPreview && (
          <p className="package-note">
            Concept package · Service commitments are proposed and subject to
            Anna’s confirmation before launch.
          </p>
        )}
      </div>
    </section>
  );
}

function Roadmap() {
  return (
    <section className="roadmap section" aria-labelledby="roadmap-heading">
      <div className="container">
        <div className="roadmap-heading reveal">
          <Eyebrow>Room to learn. Time to grow.</Eyebrow>
          <h2 id="roadmap-heading">
            Six months.
            <br />
            <em>A foundation for what’s next.</em>
          </h2>
          <p>
            A coaching process, with room for your pace. There’s no timetable
            for a particular weight-loss result.
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
          <Eyebrow>The kind of change we’re working towards</Eyebrow>
          <h2 id="stories-heading">
            Progress can sound <em>like this.</em>
          </h2>
          <p>Fictional examples of a more flexible approach to fitness.</p>
        </div>
        <div className="quote-grid">
          {site.testimonials.quotes.map((quote) => (
            <figure className="quote-card reveal" key={quote}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{quote}</blockquote>
              <figcaption>{site.testimonials.label}</figcaption>
            </figure>
          ))}
        </div>
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
          {site.images.anna.isPlaceholder && (
            <figcaption>
              Stock model · Placeholder for Anna’s own photograph
            </figcaption>
          )}
          <span className="photo-signature" aria-hidden="true">
            A little support.
            <br />
            <em>A stronger you.</em>
          </span>
        </figure>
        <div className="about-copy reveal">
          <Eyebrow>Meet Anna</Eyebrow>
          <h2 id="about-heading">
            Your plan matters.
            <br />
            <em>
              So does the person
              <br />
              beside you.
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
          <Eyebrow light>An investment in your everyday</Eyebrow>
          <h2 id="investment-heading">
            Not just a plan.
            <br />
            <em>A person in your corner.</em>
          </h2>
          <p>
            Six months to build strength, explore what works for you and
            practise a more sustainable way forward—with individual attention
            all the way.
          </p>
        </div>
        <div className="investment-offer reveal">
          <p className="offer-name">{site.offer.name}</p>
          <p className="offer-duration">
            {site.offer.duration} of 1:1 coaching
          </p>
          <p className="offer-price">
            {site.offer.price} <span>{site.offer.priceQualifier}</span>
          </p>
          <div className="investment-divider" />
          <p className="offer-summary">
            Personalised training & nutrition guidance
            <br />
            Regular reviews, coaching calls & direct support
          </p>
          <BookLink light />
          <p className="investment-micro">
            Your intro call is free and separate from paid coaching.
            <br />
            No obligation to join.
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
          <Eyebrow>A conversation is a good place to start</Eyebrow>
          <h2 id="start-heading">
            A small first step.
            <br />
            <em>Let’s take it together.</em>
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
          <Eyebrow>A little more clarity</Eyebrow>
          <h2 id="faq-heading">
            Good questions.
            <br />
            <em>Honest answers.</em>
          </h2>
          <p>
            Still wondering if this is right for you?
            <br />
            We can talk it through on your intro call.
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
    if (!value("name")) nextErrors.name = "Please enter your name.";
    else if (value("name").length > 80)
      nextErrors.name = "Please use 80 characters or fewer.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email")))
      nextErrors.email = "Please enter a valid email address.";
    if (!value("goal")) nextErrors.goal = "Please choose a primary goal.";
    if (!value("setting"))
      nextErrors.setting = "Please choose where you would prefer to train.";
    if (value("note").length > site.booking.noteMaxLength)
      nextErrors.note = `Please use ${site.booking.noteMaxLength} characters or fewer.`;
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
      className="booking section"
      aria-labelledby="booking-heading"
    >
      <div className="container booking-grid">
        <div className="booking-copy reveal">
          <Eyebrow>Start with a conversation</Eyebrow>
          <h2 id="booking-heading">
            Let’s find a plan
            <br />
            <em>you can build on.</em>
          </h2>
          <p>
            Tell me a little about your goals. Then we can explore what support
            could look like for you.
          </p>
          <div className="call-details">
            <Icon name="calendar" />
            <div>
              <strong>
                A free {site.offer.introMinutes}-minute intro call
              </strong>
              <span>A chance to ask questions. No obligation to join.</span>
            </div>
          </div>
          <div className="booking-price">
            <span>{site.offer.name}</span>
            <strong>
              {site.offer.duration} of 1:1 coaching · {site.offer.price}{" "}
              {site.offer.priceQualifier}
            </strong>
          </div>
          <p className="booking-personal">
            You don’t need a perfect starting point.
            <br />
            Just a little curiosity about what’s possible.
          </p>
          <Icon name="leaf" className="booking-leaf" />
        </div>
        <div className="booking-panel reveal">
          <div className="form-mode">
            <span className="demo-pill">
              {bookingUrl ? "Intro-call details" : "Demo booking"}
            </span>
            <p>
              {bookingUrl
                ? "Continue to our external scheduling provider after this step. These form details are not sent or saved."
                : "Preview only. No details are sent or saved, and no call is booked."}
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
              <h3>
                {bookingUrl
                  ? "Ready to choose a time."
                  : "Your preview is complete."}
              </h3>
              <p>
                {bookingUrl
                  ? "Your form details have been cleared. Open the scheduling provider to see available times and book your free intro call. No appointment has been booked here."
                  : "The demo validated your entries and cleared the form. Nothing was sent or saved, and no appointment or email was created."}
              </p>
              {bookingUrl && (
                <a
                  className="button button-primary"
                  href={bookingUrl}
                  rel="noreferrer"
                >
                  Choose a call time
                </a>
              )}
              {!bookingUrl && (
                <p className="success-note">
                  Live scheduling will be available once Anna connects her
                  booking provider.
                </p>
              )}
              <button className="text-link" type="button" onClick={resetDemo}>
                {bookingUrl ? "Return to the form" : "Try the demo again"}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              {Object.keys(errors).length > 0 && (
                <p className="form-error-summary" role="alert">
                  Please check the highlighted fields below.
                </p>
              )}
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="booking-name">
                    Your name <span>(required)</span>
                  </label>
                  <input
                    id="booking-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={80}
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    placeholder="What should I call you?"
                  />
                  {errorFor("name")}
                </div>
                <div className="form-field">
                  <label htmlFor="booking-email">
                    Email address <span>(required)</span>
                  </label>
                  <input
                    id="booking-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={254}
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    placeholder="you@example.com"
                  />
                  {errorFor("email")}
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="booking-goal">
                  What’s your primary goal? <span>(required)</span>
                </label>
                <div className="select-wrap">
                  <select
                    name="goal"
                    id="booking-goal"
                    defaultValue=""
                    required
                    aria-invalid={!!errors.goal}
                    aria-describedby={errors.goal ? "goal-error" : undefined}
                  >
                    <option value="" disabled>
                      Choose what matters most to you
                    </option>
                    <option value="weight-management">
                      Weight loss with a flexible approach
                    </option>
                    <option value="strength">
                      Build strength and gym confidence
                    </option>
                    <option value="consistency">
                      Build a more consistent routine
                    </option>
                    <option value="exploring">
                      Explore what’s right for me
                    </option>
                  </select>
                  <Icon name="chevron" />
                </div>
                {errorFor("goal")}
              </div>
              <div className="form-field">
                <label htmlFor="booking-setting">
                  Where would you like to train? <span>(required)</span>
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
                      Choose your preferred setting
                    </option>
                    <option value="gym">At a gym</option>
                    <option value="home">At home</option>
                    <option value="both">A mix of home and gym</option>
                    <option value="unsure">I’m not sure yet</option>
                  </select>
                  <Icon name="chevron" />
                </div>
                {errorFor("setting")}
              </div>
              <div className="form-field">
                <label htmlFor="booking-note">
                  Anything else you’d like to share? <span>(optional)</span>
                </label>
                <textarea
                  id="booking-note"
                  name="note"
                  rows={3}
                  maxLength={site.booking.noteMaxLength}
                  aria-invalid={!!errors.note}
                  aria-describedby={`note-hint${errors.note ? " note-error" : ""}`}
                  placeholder="A little about your schedule or what you’re hoping for…"
                />
                <p className="field-hint" id="note-hint">
                  Up to {site.booking.noteMaxLength} characters. Please leave
                  out medical or other sensitive information.
                </p>
                {errorFor("note")}
              </div>
              <button
                type="submit"
                className="button button-primary form-submit"
              >
                {bookingUrl
                  ? "Continue to scheduling"
                  : "Try the intro-call demo"}
              </button>
              <p className="form-privacy">
                Free call · No obligation · <a href="/privacy">Privacy draft</a>
              </p>
            </form>
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
            Stronger. More confident.
            <br />
            <em>More you.</em>
          </p>
          <a className="footer-top-link" href="#top">
            Back to top
          </a>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {site.brand} {site.byline}.
            {site.conceptPreview && " A fictional coaching concept."}
          </p>
          <nav aria-label="Legal navigation">
            <a href="/privacy">
              Privacy <span>(draft)</span>
            </a>
            <a href="/legal">
              Legal <span>(draft)</span>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function LegalPage({ privacy }: { privacy: boolean }) {
  useEffect(() => {
    document.title = `${privacy ? "Privacy" : "Legal"} draft | Form & Flourish by Anna`;
  }, [privacy]);
  return (
    <main id="main" className="legal-page container">
      <Eyebrow>Concept preview · Incomplete draft</Eyebrow>
      <h1>
        {privacy ? "Privacy information" : "Legal information"}
        <em> A working draft.</em>
      </h1>
      <p className="legal-callout">
        This is an unfinished concept page. It is not a completed legal notice
        or a claim of legal compliance. Business-specific details and applicable
        requirements must be confirmed before a real launch.
      </p>
      {privacy ? (
        <>
          <h2>What happens in this preview</h2>
          <p>
            The demo intro-call form validates entries in your browser, then
            clears them after a successful submission. It does not send those
            entries to a server, save them to browser storage, create an
            appointment or send email. Unsubmitted text remains in the open form
            until it is cleared or the page is reloaded; your browser may also
            offer its own autofill.
          </p>
          <p>
            This implementation does not add analytics, advertising trackers or
            application cookies. Fonts and photographs are served as local site
            assets. The development server or a future hosting provider may
            process ordinary technical request data, such as IP addresses, in
            its own logs.
          </p>
          <h2>External scheduling</h2>
          <p>
            No booking provider is configured in this concept. If a provider is
            connected later, scheduling opens through an outbound link. The form
            fields on this site are not included in that link. The provider may
            collect information under its own privacy terms, which must be
            reviewed and explained before live use.
          </p>
          <h2>Information still needed</h2>
          <ul>
            <li>
              Controller’s legal identity, business address and a working
              privacy contact.
            </li>
            <li>
              Actual hosting and form/scheduling providers, processing purposes,
              legal bases and recipients.
            </li>
            <li>
              Retention periods, deletion process, international transfers and
              any required contractual safeguards.
            </li>
            <li>
              Applicable rights, request process, supervisory authority and any
              required consent handling.
            </li>
          </ul>
          <p>
            Please do not enter medical, financial or other sensitive
            information in this preview form.
          </p>
        </>
      ) : (
        <>
          <h2>About this concept</h2>
          <p>
            Form & Flourish by Anna is a fictional premium coaching website. No
            surname, location, professional qualification, business history,
            address, contact email, registration number or tax treatment has
            been invented.
          </p>
          <h2>Proposed offer</h2>
          <p>
            The Flourish Method is presented as six months of individual
            coaching for €4,000 total. The service commitments, capacity, final
            consumer price and tax wording require confirmation before trading.
            The free intro call is separate from paid coaching and does not
            create a purchase obligation.
          </p>
          <h2>Business and commercial details still needed</h2>
          <ul>
            <li>
              Verified business identity, legal form, address, contact details
              and applicable registration or tax information.
            </li>
            <li>Verified coaching qualifications and scope of services.</li>
            <li>
              Agreed contract, payment, cancellation, refund and any applicable
              withdrawal terms.
            </li>
            <li>
              Review of the proposed brand, domain and trademark availability.
            </li>
            <li>
              Completed privacy information and applicable local legal notices.
            </li>
          </ul>
          <h2>Imagery and illustrative stories</h2>
          <p>
            The photographs show stock models, not Anna or clients. The stories
            are original fictional examples, explicitly labelled on the page.
            They must be replaced with consented, verified reviews or hidden
            before a real business launch.
          </p>
        </>
      )}
      <a href="/" className="button button-primary">
        Return to the website
      </a>
    </main>
  );
}

function NotFound() {
  return (
    <main id="main" className="legal-page container">
      <Eyebrow>A little detour</Eyebrow>
      <h1>
        Let’s get you <em>back on track.</em>
      </h1>
      <p>
        That page isn’t here. You can explore the coaching from the home page.
      </p>
      <a href="/" className="button button-primary">
        Back to home
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
    return () => { cancelled = true; };
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
            <span>Free 20-minute intro call</span>
            <BookLink>Let’s talk</BookLink>
          </div>
        </>
      ) : path === "/privacy" || path === "/legal" ? (
        <LegalPage privacy={path === "/privacy"} />
      ) : (
        <NotFound />
      )}
      <Footer />
    </div>
  );
}
