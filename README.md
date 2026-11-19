# Form & Flourish by Anna

A responsive concept website for a fictional premium fitness coach. React, TypeScript and Vite with plain CSS, local fonts and photographs, and no backend services.

**Concept preview:** the six-month €4,000 offer and service commitments are proposed creative content. Anna’s identity, qualifications, capacity and commercial terms have not been verified. The intro form is a browser-only demo: it does not send, store or email entries or book appointments. Illustrative stories and placeholder photography are visibly labelled. No live website has been published.

## Run locally

Use Node.js **22.12+** (Node 22 recommended) and npm.

```sh
npm ci
npm run dev
```

Open Vite’s printed Local URL, normally `http://127.0.0.1:5173/`. Stop with Ctrl+C.

```sh
npm run lint     # ESLint, including React hooks
npm run build    # TypeScript checks and production output in dist/
npm run preview  # Serve the production build locally
```

## Editing

- `src/content.ts`: brand, hero copy, price/duration, **all nine proposed service commitments**, images, method, example week, roadmap, illustrative stories, philosophy, optional verified qualifications, FAQs and booking URL.
- `src/App.tsx`: page components, remaining short UI copy, accessible menu/FAQ, form validation and draft privacy/legal pages.
- `src/styles.css`: palette, local fonts, layout, responsive breakpoints, focus states and reduced-motion support.
- `public/images/`, `public/fonts/`: replaceable local assets. Update dimensions, alt text and placeholder flags in the configuration when replacing photos.
- `index.html`, `public/favicon.svg`, `public/social-preview.svg`: metadata and original brand artwork.

All primary booking links lead to `/#intro-call`. The form requests name, email, primary goal, preferred training setting and an optional short, non-sensitive note. It validates entries, resets the form and focuses the confirmation. No values are stored in React state, browser storage or URLs, and there is no submission request. A visitor’s browser may independently provide autofill.

### Scheduling

Set `site.booking.url` in `src/content.ts` to **one verified HTTPS booking URL** (the actual Calendly, GoHighLevel or other provider page). Empty, invalid or non-HTTPS URLs keep the form in demo mode. No provider is configured by default.

With a valid URL, validation clears the form and shows an outbound scheduling link. **Fields still are not sent to Anna or forwarded to the provider.** Visitors complete their real booking at the provider; this site does not assert an appointment has been booked. A real enquiry endpoint is separate work, requiring suitable privacy information and server-side validation. Keep all secrets and credentials out of frontend code and source control.

### Illustrative stories

`site.testimonials.enabled` controls the entire section. Each supplied original fictional example is labelled **“Illustrative example—not a client review”**. Set the flag to `false`, or replace the examples with consented, verified real testimonials and appropriate labels before a real business launch. There are no invented identities, results, review badges or client photos.

## Before a real launch

- Add Anna’s authorised photographs, verified qualifications and actual scope of practice; empty qualification fields are omitted. Hide fictional stories or replace them with consented real reviews. Confirm brand/domain/trademark availability.
- Confirm service capacity: **one 60-minute onboarding call; training reviews every four weeks; weekly written check-ins; a 30-minute video call every two weeks; technique-video feedback; weekday messages with the proposed two-business-day response target; nutrition education within verified qualifications; progress tracking; and a final maintenance plan**.
- Confirm the €4,000 total consumer price, tax wording, service terms, payment arrangements, cancellation/refund terms and applicable withdrawal rights. No financing or guarantee is assumed.
- Connect and test actual scheduling. If enquiries must be delivered, implement and verify a real endpoint, processing and retention. Keep demo labels while the form is a demo.
- Complete `/privacy` and `/legal` with verified business identity, legal form, postal/contact details, relevant registration/tax details, actual providers, processing purposes/legal bases, recipients, retention, rights, transfers and applicable local requirements. These are visibly **incomplete drafts**, not completed compliance.
- Keep `site.conceptPreview` enabled until the business/demo status changes. Review all customer copy then, including price FAQ and legal pages.
- Before a real public launch, remove the preview `noindex` tag in `index.html`, `X-Robots-Tag` in `vercel.json`, and `Disallow: /` in `public/robots.txt`. These are search instructions, **not access control**.
- A 1200 × 630 social JPEG is included alongside its editable SVG. Configure absolute social-image, page and canonical URLs for the real domain before launch.

## Deploy later

No external deployment is needed for the local preview. When requested, import this repository into Vercel with the **Vite** preset, repository root, **`npm run build`** and output directory **`dist`**. `vercel.json` includes direct-visit rewrites for `/privacy` and `/legal`; other static hosts need equivalent route fallbacks. Deploying does not connect the demo form to a service.

## Assets and licences

The locally saved photographs use the [Pexels licence](https://www.pexels.com/license/). Stock subjects are not Anna or clients and do not endorse this concept.

| File | Photographer and source |
| --- | --- |
| `public/images/training.jpg` | Joshua Brown — [A Woman Working Out at a Gym](https://www.pexels.com/photo/a-woman-working-out-at-a-gym-13197590/) |
| `public/images/coach-placeholder.jpg` | Joshua Brown — [A Woman Holding Dumbbells](https://www.pexels.com/photo/a-woman-holding-dumbbells-13197592/) |
| `public/images/everyday-food.jpg` | Ella Olsson — [Vegetable Salad on Plate](https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777/) |

DM Sans and DM Serif Display are self-hosted WOFF2 files distributed through Fontsource. Their SIL Open Font License notices are included in `public/fonts/`. Visitors’ browsers do not request Google Fonts, Pexels or Fontsource.

## Verification

`npm run build` and `npm run lint` check the production build, TypeScript and lint rules. Browser checks cover desktop/mobile layouts, menu open/close and Escape, FAQ expansion, form validation, successful demo confirmation and clearing, booking links, draft legal navigation, local assets, overflow and browser errors. This is a concept preview, not a verified live booking integration.
