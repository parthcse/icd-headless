# icd-headless

A headless **Next.js 16** front-end for **icecubedigital.com** (Icecube Digital, an eCommerce-focused web agency). Marketing/service pages are rendered from local, data-driven configuration; dynamic content (blog posts, portfolio items, case studies, testimonials) is pulled from a **headless WordPress** backend over **WPGraphQL**.

The site is content-heavy — **~178 data-driven service/industry/location pages** plus blog and portfolio/case-study archives — so the architecture is built around a small set of reusable "section" components driven by plain data objects. **You add pages by writing data, not JSX.**

---

## Table of contents

1. [Tech stack](#tech-stack)
2. [Getting started](#getting-started)
3. [Environment variables](#environment-variables)
4. [NPM scripts](#npm-scripts)
5. [Project structure](#project-structure)
6. [Routing](#routing)
7. [The page/section system](#the-pagesection-system) ← read this before building pages
8. [Adding a new service/industry page](#adding-a-new-serviceindustry-page)
9. [Styling (Tailwind, theme, icons)](#styling)
10. [Data layer (WPGraphQL, CPTs, testimonials)](#data-layer)
11. [Forms (contact + newsletter)](#forms)
12. [Fonts](#fonts)
13. [Deployment & operational notes](#deployment--operational-notes)
14. [Conventions & gotchas cheat-sheet](#conventions--gotchas-cheat-sheet)
15. [Reference docs](#reference-docs)

---

## Tech stack

| Area | Choice | Version |
|---|---|---|
| Framework | Next.js (App Router, RSC) | 16.1.7 |
| UI runtime | React | 19.2.3 |
| Styling | Tailwind CSS (**prebuilt**, not JIT at runtime) | 3.4.17 |
| CMS data | headless WordPress via `@apollo/client` + WPGraphQL | 4.1.6 |
| Animation | Framer Motion (hero) + Lenis (smooth scroll) | 12 / 1.3 |
| GraphQL | `graphql` | 16 |
| Fonts | Gilroy (self-hosted, `public/fonts/`) | — |
| Build tooling | Turbopack (dev/build), PostCSS + Autoprefixer, ESLint | — |

---

## Getting started

**Prerequisites:** Node.js 18.18+ (Next 16 requires a modern LTS) and npm.

```bash
# 1. install
npm install

# 2. create your local env (see the table below for the keys)
cp .env.local.example .env.local   # or create .env.local by hand

# 3. run the dev server (Turbopack)
npm run dev
# → http://localhost:3000
```

Load `http://localhost:3000/<slug>/` to view any registered page and diff it against the live site.

> **First-time note:** the compiled CSS at `public/css/output.css` is committed, so the app is styled out of the box. You only need `npm run build:css` after editing a **component's** class list (see [Styling](#styling)).

---

## Environment variables

Defined in `.env.local` (not committed). `NEXT_PUBLIC_*` are exposed to the browser; the rest are server-only.

| Variable | Scope | Purpose |
|---|---|---|
| `NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT` | public | WPGraphQL endpoint, e.g. `https://www.icecubedigital.com/graphql`. Source of blog posts, portfolio, case studies, and other CMS data. If unset, the Apollo client falls back to an invalid URI and CMS-backed sections degrade gracefully to empty. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | public | Cloudflare Turnstile site key for the contact form. Has a hard-coded production fallback; a test key is used automatically on non-production hosts. |
| `NEXT_PUBLIC_CF7_FORM_ID` | public | WordPress Contact Form 7 form id the contact form submits to (default `4751`). |
| `MAILCHIMP_API_KEY` | server | Mailchimp API key for the newsletter API route. |
| `MAILCHIMP_AUDIENCE_ID` | server | Mailchimp audience/list id for newsletter signups. |

---

## NPM scripts

| Script | What it does |
|---|---|
| `npm run dev` | Next dev server with Turbopack. |
| `npm run dev:webpack` | Dev server with Webpack (fallback if a Turbopack issue appears). |
| `npm run build` | Production build. **Statically renders every page**, so it's the definitive check that all ~380 routes compile and render. |
| `npm run build:css` | **Recompiles Tailwind** from `styles/input.css` → `public/css/output.css`. Run this whenever you add/change a utility class **in a component**. |
| `npm run start` | Serve the production build. |
| `npm run lint` | ESLint. |

### ⚠️ The CSS build gotcha (important)

`public/css/output.css` is **prebuilt** and linked directly in the root layout. **Next does NOT run Tailwind JIT at request time.** So:

- **New utility class in a component** (`components/**`) → you MUST run `npm run build:css`, or the class won't be styled.
- **Data files never contain classes** — they're pure data, so editing `lib/services/**` needs no CSS rebuild.
- Content globs cover `app/`, `components/`, `lib/`.

---

## Project structure

```
icd-headless/
├── app/                         # Next.js App Router
│   ├── layout.js                # Root layout: global CSS, fonts, SmoothScroll, third-party scripts
│   ├── page.js                  # Home page  /
│   ├── [slug]/page.js           # ★ Dynamic route for ALL data-driven service/industry/etc. pages
│   ├── (marketing)/             # Route group: about-us, contact-us, career, case-studies (index),
│   │                            #   our-portfolio (index), client-testimonials, privacy-policy, sitemap, …
│   ├── (resources)/             # learning, web-wednesday-newsletter
│   ├── (tools)/                 # meta-length-checker
│   ├── blog/                    # /blog + /blog/[slug] + /blog/category|author|page/…  (WP posts)
│   ├── portfolio/[slug]/        # individual portfolio items (WP CPT)
│   └── api/                     # route handlers: newsletter (Mailchimp), case-studies, portfolios
├── components/
│   ├── layout/                  # Header, Footer
│   ├── common/                  # ContactForm, SmoothScroll, RouteHandler, …
│   ├── services/                # ★ 31 reusable "section" components consumed by the data files
│   ├── home/ about/ blog/ portfolio/ case-studies/ testimonials/ contact/ career/ …
│   └── icons/
├── lib/
│   ├── services/                # ★ 178 page data files, grouped by category folder
│   │   ├── index.js             #   the registry: imports + MAP (slug → data) + getServiceData()
│   │   ├── common-section/      #   shared section presets (milestone, achievements, ourClients, ceoCta)
│   │   ├── ecommerce/ magento/ wordpress/ shopify/ woocommerce/ webflow/ white-label/
│   │   ├── digital-marketing/ ai/ development/ industry/ location/ packages/ resources/
│   ├── company/                 # "about the company" pages (why-work-with-us, mobile-application, …)
│   ├── testimonials.js          # static, slug-keyed testimonial store
│   ├── apollo-client.js         # Apollo/WPGraphQL client
│   ├── wp-home-data.js          # CMS fetch helpers (case studies, portfolio, posts) with fallbacks
│   ├── blog.js portfolio.js case-studies.js seo.js wp-text.js
├── graphql/                     # GraphQL query documents
├── public/
│   ├── css/output.css           # ★ PREBUILT Tailwind output (committed)
│   ├── fonts/                   # Gilroy family
│   ├── assets/{icons,photos,testimonial}/  # SVG icons, downloaded images, avatars
│   └── js/                      # legacy jQuery/owl-carousel design scripts
├── styles/input.css             # Tailwind source → compiles to public/css/output.css
├── scripts/                     # one-off migration/extraction scripts (*.mjs)
└── SERVICE_PAGE_BUILD_GUIDE.md  # the page-building playbook (see Reference docs)
```

---

## Routing

| Route | Rendered by | Notes |
|---|---|---|
| `/` | `app/page.js` | Home |
| `/<slug>/` | `app/[slug]/page.js` | **Every service/industry/location/package/resource/company page.** Looked up via `getServiceData(slug)`. |
| `/about-us`, `/contact-us`, `/career`, … | `app/(marketing)/…` | Standalone static pages (route group, no URL prefix) |
| `/blog`, `/blog/<slug>`, `/blog/category/…` | `app/blog/…` | WordPress posts + archives |
| `/our-portfolio`, `/portfolio/<slug>` | `app/(marketing)` + `app/portfolio/[slug]` | Portfolio archive + item detail (WP CPT) |
| `/case-studies`, `/case-studies/<slug>` | `app/(marketing)` + dynamic | Case-study archive + detail (WP CPT) |
| `POST /api/newsletter` | `app/api/newsletter/route.js` | Mailchimp signup |

> Route groups `(marketing)`, `(resources)`, `(tools)` organize files **without** adding a URL segment.

---

## The page/section system

This is the heart of the codebase. **Read [`SERVICE_PAGE_BUILD_GUIDE.md`](./SERVICE_PAGE_BUILD_GUIDE.md) for the full playbook**; the essentials:

**1. One page = one data file** in `lib/services/<category>/<file>.js` that `export default`s a single `ServiceData` object:

```js
/** @type {import('../index').ServiceData} */
const AmazonPpc = {
  slug: "amazon-ppc-management-services",   // ← the URL (independent of the filename)
  pageTitle: "…",
  metaDescription: "…",
  banner: { … },
  milestone: milestoneSection,   // a shared common section
  caseStudy: { … },
  topIconBox: { … },
  faq: { … },
  // …
};
export default AmazonPpc;
```

**2. Render order = the order keys appear in the object.** No manual ordering needed (an optional `sectionOrder: [...]` can override).

**3. `app/[slug]/page.js` holds a `SECTION_RENDERERS` registry** mapping each key (`banner`, `topIconBox`, `faq`, …) to a component in `components/services/`. **A section renders only if its data key is present** — omit a key to skip it.

**4. Numbered variants** let you stack the same section type: `topIconBox`, `topIconBoxSecondary`, `topIconBoxTertiary`, …; likewise `infoBox*`, `plainText*`, `leftIconBox*`, `checkList*`, `cta*`, `imageText*`, `processSteps*`.

**5. Common (shared) sections** live in `lib/services/common-section/` and are imported, not hand-written, so they stay identical everywhere: `milestone`, `achievements`, `ourClients`, `ceoCta`. `getQuote: true` and `weServe: true` are **no-data** global sections (position them by placing the key).

**6. CPT-backed sections** take IDs/slugs, not content:
- `caseStudy` / `portfolio` → `postIds: [WP databaseIds]` (fetched live via WPGraphQL; cards degrade to image+title if ACF is empty).
- `testimonials` → `testimonialSlug` resolved against `lib/testimonials.js`.

**7. `renderParts`** — most text fields accept a plain string **or** a parts array for inline formatting:
```js
body: ["Plain text, a ", { bold: "bold run" }, ", and a ", { text: "link", href: "/relative/" }, "."]
```
Internal links are **relative**; external `http(s)://` links stay absolute and auto-open in a new tab.

**8. Filename vs slug convention** — the **filename is a short handle**; the `slug` field is the full SEO URL. E.g. `amazon-ppc.js` → slug `amazon-ppc-management-services`. The folder is organizational only; the flat `slug` is the URL.

---

## Adding a new service/industry page

```
1. Create lib/services/<category>/<short-name>.js   (copy a sibling as a template)
2. Fill in slug (the real URL), pageTitle, metaDescription, and the section keys in order.
3. Register it in lib/services/index.js — 2 edits:
     import MyPage from "./<category>/<short-name>";
     …and add to MAP:  "my-page-url-slug": MyPage,
4. npm run build   → confirms it prerenders (HTTP 200) with no crash.
```

That's the whole wiring — the route, metadata, and sections are automatic. For content parity rules, section shapes, the icon rule, and the auditor workflow, follow **`SERVICE_PAGE_BUILD_GUIDE.md`**.

---

## Styling

- **Tailwind is prebuilt** into `public/css/output.css` (see the [CSS gotcha](#️-the-css-build-gotcha-important)). Source: `styles/input.css`.
- **Theme:** primary orange `#F17E3F`; Gilroy font; custom fluid spacing utilities (`.py-space`, `.py-space-small`, …); custom breakpoints.
- **Arbitrary values** use underscores for spaces: `w-[calc(50%_-_12px)]`.
- **Alignment prop is `contentAlign`** (`"left"` / `"center"`) on `topIconBox` / `infoBox` / `information` sections. (Older code used `textAlign`; it has been standardized to `contentAlign`.)
- **Icon convention (strict):** icons used in `topIconBox` / `leftIconBox` grids must be **circular-badge SVGs** — a 108×108 SVG with `<rect … rx="54" fill="white"/>` behind a black glyph. Verify with `grep -l 'rx="54"' public/assets/icons/<name>.svg`. Flat brand/payment logos (`facebook.svg`, `stripe-icon.svg`, …) are for the footer/inline strips only; never in an icon-box grid. If a badge grid needs a brand mark, create a `-circle` variant.

---

## Data layer

- **`lib/apollo-client.js`** creates the Apollo client from `NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT` (read-only, server-side SSR).
- **`lib/wp-home-data.js`** + **`graphql/`** hold the fetch helpers and query documents for the WordPress CPTs: `posts`, `allPortfolio`/`portfolios`, and `caseStudies` (with their ACF fields). **All fetches fail gracefully** — an empty/failed response degrades a section to a clean fallback rather than crashing the page.
- **Testimonials are static**, not fetched: `lib/testimonials.js` exports a slug-keyed array (`{ slug, name, designation, quote, avatar, avatarAlt }`). `quote` may be a string or an array of paragraphs (each a string or a parts array for inline links). Add a new entry here and point a page's `testimonialSlug` at it. Avatars live in `public/assets/testimonial/`.

---

## Forms

- **Contact form** (`components/common/ContactForm.js`): submits **directly to the live WordPress Contact Form 7** form (id from `NEXT_PUBLIC_CF7_FORM_ID`, default `4751`) at `/wp-json/contact-form-7/v1/contact-forms/<id>/feedback`. Bot protection is **Cloudflare Turnstile** (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`, with a test key on non-production hosts). It also does light geo-IP country prefill.
- **Newsletter** (`app/api/newsletter/route.js`): server-side Mailchimp signup using `MAILCHIMP_API_KEY` + `MAILCHIMP_AUDIENCE_ID`.

---

## Fonts

**Gilroy** is self-hosted from `public/fonts/` and wired via CSS (not `next/font`). Preloaded in the root layout to avoid layout shift (CLS).

---

## Deployment & operational notes

Deploys to **Vercel**. The WordPress backend sits behind **Cloudflare**, which introduces a few real gotchas:

- **Empty CMS data on Vercel (403):** Cloudflare **Bot Fight Mode** can challenge the Vercel build/SSR IP, so WPGraphQL returns 403 and CMS-backed sections render empty. **Fix:** disable Bot Fight Mode for the GraphQL path, then redeploy.
- **Contact-form "spam" rejections on a new domain:** add the new host to the **Turnstile allowlist** in Cloudflare, or CF7 rejects submissions as spam.
- **Stale/cross-page clones from Cloudflare cache:** when scraping/verifying live pages you may receive a *different page's* cached body. Re-fetch (cache-bust) until the body matches the expected topic, and **purge the Cloudflare cache** for a URL before treating live as source-of-truth.

---

## Conventions & gotchas cheat-sheet

- **Data files:** tabs for indentation; one `/** @type {import('…/index').ServiceData} */` JSDoc line; a `BTN_ARROW` SVG-path const at the top; multi-line objects for long bodies; **no CSS classes** and **no other comments**.
- **Links** in content are **relative** (`/slug/`); third-party links stay absolute.
- **Normalize homoglyphs / fix live typos** — output clean ASCII English; don't mirror source typos.
- **`topIconBox` singular `subtitle` renders raw** — if it contains an inline link or multiple paragraphs, use the plural **`subtitles`** instead (a `{text,href}` in a raw field crashes the build).
- **Always run `npm run build`** after adding/editing pages — a syntax check does not catch render crashes; the full static render does.
- **New component class → `npm run build:css`.**

---

## Reference docs

- **[`SERVICE_PAGE_BUILD_GUIDE.md`](./SERVICE_PAGE_BUILD_GUIDE.md)** — the authoritative, in-depth playbook for building/auditing service & industry pages (section shapes, content-parity "golden rules", the live-fetch/auditor workflow, the icon rule, and the catalogue of past mistakes).

  > This is a **working document for the current page build-out**. It is intended to be removed once the page set is complete — keep it until the team decides the build phase is done.
