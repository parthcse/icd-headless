# Service / Industry Page Build Guide

**A complete playbook for building icecubedigital.com service & industry pages in this headless Next.js app.**

This is the authoritative spec. Follow it exactly and any Claude Code instance will produce pages that match the live site 1:1 and slot into the existing template with zero surprises. It covers **both** page generation *and* the live-content audit process — they are the same skill.

> **The one sentence that matters most:** every page must mirror the **live icecubedigital.com** page's section **content, order, and text exactly** — no merging paragraphs, no dropping items, no inventing button labels, no missing inline links. When in doubt, match live.

---

## Table of Contents

1. [Architecture (how a page renders)](#1-architecture)
2. [The Golden Rules — content parity (READ FIRST)](#2-the-golden-rules)
3. [Step-by-step: building one new page](#3-step-by-step-building-one-new-page)
4. [The auditor workflow (fetch + extract live)](#4-the-auditor-workflow)
5. [Section reference (every key + data shape)](#5-section-reference)
6. [The `renderParts` pattern (bold + inline links)](#6-the-renderparts-pattern)
7. [Common (shared) sections](#7-common-shared-sections)
8. [CPT-backed sections: portfolio, caseStudy, testimonials](#8-cpt-backed-sections)
9. [Formatting conventions](#9-formatting-conventions)
10. [Post-build verification checklist](#10-post-build-verification-checklist)
11. [Catalogue of mistakes to avoid](#11-catalogue-of-mistakes-to-avoid)
12. [Reference constants & snippets](#12-reference-constants--snippets)

---

## 1. Architecture

**Stack:** Next.js 16 (App Router, React server components), Tailwind CSS 3.4 (prebuilt), WPGraphQL for live CMS data.

### How a URL becomes a page

- Every service/industry page is a **data file** in `lib/services/<category>/<slug>.js` that `export default`s one object (`ServiceData`).
- The single dynamic route `app/[slug]/page.js` looks the slug up, then renders sections from a registry called `SECTION_RENDERERS`.
- **Render order = the order the keys appear in your data object.** Writing `banner` above `topIconBox` in the file renders the banner first. (You can override with an explicit `sectionOrder: [...]` array, but you almost never need to — just order the keys.)

```js
// app/[slug]/page.js  — the registry (excerpt). Each key maps to a component.
const SECTION_RENDERERS = {
  banner:        (data) => <ServicesBannerSection data={data.banner} />,
  topIconBox:    (data) => data.topIconBox && <ServicesTopIconBoxSection data={data.topIconBox} />,
  leftIconBox:   (data) => data.leftIconBox && <ServicesLeftIconBoxSection data={data.leftIconBox} />,
  // ...every section key lives here. A key only renders if data[key] is present.
};

function buildSectionOrder(data) {
  const order = Object.keys(data).filter((key) => key in SECTION_RENDERERS);
  // getQuote auto-inserts right AFTER portfolio (or near the top if no portfolio)
  // weServe auto-inserts right BEFORE ceoCta (or at the end)
  // ...unless you place them explicitly with `getQuote: true` / `weServe: true`.
  return order;
}
```

**Key facts to internalise:**

- A section renders **only if** its data key is present. Omit a key → that section disappears. No need to touch the registry to skip a section.
- Most sections have **numbered variants** so you can stack several of the same type on one page: `topIconBox`, `topIconBoxSecondary`, `topIconBoxTertiary`, `topIconBoxQuaternary`, `topIconBoxQuinary`; likewise `plainText`/`plainTextSecondary`/…, `infoBox`/`infoBoxSecondary`/…, `checkList*`, `imageText*`, `information*`, `leftIconBox*`, `processSteps*`, `cta*`, `faq*`, `tableBasic*`, `getQuoteSecondary`. Same component, independent data.
- `getQuote` and `weServe` have **no data block** — they're global home-page sections. They auto-position (see above). To force a position, add `getQuote: true` / `weServe: true` as a key exactly where you want it.

### Registering a page (2 edits in `lib/services/index.js`)

```js
// 1. import your file (top of index.js, grouped by category)
import DentalSeo from "./industry/industry-dental";

// 2. add to the MAP (key = the URL slug, no slashes)
const MAP = {
  // ...
  "dental-seo-services": DentalSeo,
};
```

`SERVICES_SLUGS` and the route are derived automatically. That's the whole wiring.

### CSS build gotcha (important)

`public/css/output.css` is **prebuilt** with Tailwind and linked directly in `app/layout.js`. **Next does NOT run Tailwind JIT at request time.** If you add a **new utility class** in a component (not in a data file — data files never contain classes), you must run:

```bash
npm run build:css
```

…or the class won't be styled. Content globs cover `app/`, `components/`, `lib/`. Building normal pages from existing sections needs **no** CSS rebuild — only new/edited components do.

### Run & verify

```bash
npm run dev                     # dev server, usually http://localhost:3000
# then load http://localhost:3000/<your-slug>/ and diff against live
```

---

## 2. The Golden Rules

These are hard-won from dozens of correction rounds. **Violating any one of these produces a page the client will reject.** Treat them as non-negotiable.

### 2.1 Match live's content EXACTLY — no text may be missing

- **Never merge paragraphs.** If the live section shows 2, 3, 4 `<p>` tags, keep them as 2/3/4 **separate** entries in `paragraphs[]` / `blocks[]`. Concatenating live's multiple paragraphs into one is the single most common rejected mistake. This applies to the **banner**, `imageText`, `plainText`, `information`, and any body content.
- **Never drop an item.** After building any list section (`topIconBox`, `leftIconBox`, `infoBox`, `checkList`, `processSteps`, `information`), **count** your items and confirm the count equals live's item count. Auditors sometimes drop the last item or merge two live items into one (e.g. stuffing item #5's body onto item #4 as a `bodyAfter`). Diff titles in order against live.
- **Scan the FULL live page top-to-bottom.** Some live sections have **no heading markup** (e.g. a "Guide Highlights" sticky-nav block) and are missed by title-based scans. Read the entire DOM between `</header>` and `<footer`, not just titled sections.
- After a batch, sanity-scan for strings that end mid-sentence (no terminal punctuation) — a sign of truncated extraction. (Note: `{text,href}` parts-array fragments legitimately end without punctuation — those are false positives.)

### 2.2 Inline links, bold, and paragraph splits are content — reproduce them

- Live sentences frequently contain **inline `<a>` links** ("our *local SEO services* help…"). Reproduce every one as a `{ text, href }` part inside a parts array. Convert the URL to a **relative path** (`/local-seo-services/`, not the absolute live URL).
- Reproduce **bold** (`<strong>`) runs as `{ bold: "..." }` parts.
- These links point to pages we will build in our project soon — always keep live's real internal links.

### 2.3 caseStudy / portfolio items — use live's actual CPT items

- Resolve the live page's case-study / portfolio card slugs. **Keep every one that exists in our CPT — even if its ACF fields are currently empty.** Empty cards degrade gracefully to image + title; GraphQL fills them once ACF is populated (which the client is doing).
- **Only substitute** a relevant same-vertical item when the live slug does **not** resolve to any post in that CPT (e.g. live linked a `/portfolio/` item where a `caseStudy` is expected, or it's a testimonial-only card). Flag any substitution.
- Do **not** over-substitute "for completeness." Using our real live items (even sparse) is correct; swapping them for prettier complete ones is wrong.
- See [§8](#8-cpt-backed-sections) for how `postIds` resolve.

### 2.4 Button labels in non-common sections must match live verbatim

- Do **not** default every button to "Request a free quote." Extract each section's **actual** live button label from its `gdlr-core-button` (it can sit 4000+ characters after the heading in the HTML — scan the whole section wrapper, not a short window). Examples seen: `"Request a Demo!"`, `"Get a free quote now!"`, `"Schedule a Meeting Today!"`, `"Request a free quote now!"`.
- If a live section has **no** button, **omit** `ctaLabel` — don't invent one.
- The **banner** button (`"Send me a proposal"`) + phone are common/standard — don't audit those.

### 2.5 Title / eyebrow split (the 2-line rule)

Non-common sections have a small **eyebrow** (`font-48`) above a huge **main-title** (`main-title`). Because the main-title font is very large:

- Keep the **main-title to a maximum of 2 lines** — push extra words UP into the eyebrow. A 4-word title already wraps to 2 lines; a 5+ word title wraps to 3–4 (too much whitespace).
- But keep a **minimum of 2 words** in the title (avoid 1-word titles like "Industry" or "SEO"). Exact balance is your judgment.
- Example splits: eyebrow `"Unleash the Power of SEO with Our Cleaning Company"` / title `"SEO Services"`; eyebrow `"How We Work: Our SEO"` / title `"Process for Manufacturers"`.
- The eyebrow may end on a preposition — that matches existing house style.

### 2.6 plainText alignment

- `plainText` sections are **center-aligned only** (`contentAlign: "center"`, which is also the default). There is a `left` option but it's discouraged.
- Any prose that would read better **left-aligned or in a box** should be an **`information`** section (dark boxed cards) instead, NOT a left-aligned plainText.

### 2.7 Only include common sections live actually shows; skip post-footer popups

- Sections that appear **after** `</footer>` in the live DOM are popups/modals (a bottom "Get a Free Quote" form, "Your Vision Our Solutions", etc.) — **do NOT** add them.
- Only add common sections (`milestone`, `achievements`, `ourClients`, `getQuote`, `weServe`, `ceoCta`) that the live page genuinely contains. (Note: **industry pages generally have NO `milestone`** stats strip — verify before adding it.)

### 2.8 Fix live's defects; keep our house style

- **Normalise Cyrillic/Greek homoglyphs to Latin.** Live clone/spun pages sometimes contain lookalike characters ("Kеyword", "Maintеnancе" with Cyrillic е). Always output clean ASCII English.
- **Fix live's typos and copy-paste clone artifacts** (e.g. a fashion page with "Seattle" left over from a cloned template, "USAbility", a wrong city/industry word). Keep OUR correct text — do not mirror live's mistakes.
- Keep our cleaner house-style choices: CTA band `text` in Title Case, eyebrow/title Title-Case split, our punctuation.

### 2.9 During an audit, apply small obvious fixes directly — don't ask

Item-order swaps to match live, removing an inline link live doesn't have, delinking, typo/grammar/punctuation fixes — **just do them.** Only pause to ask on genuine judgment calls with real trade-offs.

---

## 3. Step-by-step: building one new page

The user typically gives you a **live URL** and a **section-by-section structure overview**. Workflow:

1. **Fetch the live page** with a browser UA (WebFetch is blocked by the WAF — use `curl`). See [§4](#4-the-auditor-workflow).
2. **Read the full page top to bottom.** List every section in order, mapping each to a section key by its visual type (table in [§5](#5-section-reference)). Note untitled sections.
3. **Pick the file path & name.** `lib/services/<category>/<slug>.js`. For industry pages the folder is `industry/`. Naming: one page per industry → `industry-<niche>.js`; a second page for the same industry → suffix both: SEO → `industry-<niche>-seo.js`, website-design → `industry-<niche>-web-design.js`.
4. **Copy a sibling as a template.** [`lib/services/industry/industry-manufacturing-seo.js`](lib/services/industry/industry-manufacturing-seo.js) is an excellent, near-complete reference (banner w/ 3 paragraphs, caseStudy, seoAuditForm, plainText w/ inline link, topIconBox w/ 9 items + inline links, infoBox, processSteps w/ button, leftIconBox, cta, faq, all commons).
5. **Author the data object**, section by section, in live's order. For each section:
   - Extract the eyebrow/title (apply the 2-line split rule, [§2.5](#25-title--eyebrow-split-the-2-line-rule)).
   - Extract **every** paragraph as a separate entry. Extract inline links/bold as parts.
   - Extract **every** list item; count them against live.
   - Extract the **exact** button label, or omit if none.
6. **Wire common sections** (`milestone`, `achievements`, `ourClients`, `ceoCta`) by importing from `../common-section/` — only those live shows. Add `getQuote: true` / `weServe: true` if you need to pin their position; otherwise leave them out and they auto-place.
7. **Resolve `caseStudy`/`portfolio` `postIds`** from live's card slugs (see [§8](#8-cpt-backed-sections)). Keep live's real items.
8. **Resolve `testimonials`** `testimonialSlug` to the person live actually quotes (add to `lib/testimonials.js` if missing, [§8](#8-cpt-backed-sections)).
9. **Register** the file in `lib/services/index.js` (import + MAP entry).
10. **Verify** — load the page, run the [§10 checklist](#10-post-build-verification-checklist).

### Parallel builds (the "auditor" pattern)

When the user hands you **several pages at once**, build them in parallel: launch one `general-purpose` sub-agent per page, each given (a) this guide, (b) the live URL, (c) the section overview, and the instruction to produce **one data file**. The parent process then registers each file in `index.js` and runs the post-audit ([§10](#10-post-build-verification-checklist)) on each. Keep each agent scoped to exactly one file to avoid write conflicts.

---

## 4. The auditor workflow

### Fetching live (WAF-safe)

WebFetch gets 403'd by Cloudflare. Use `curl` with a real browser User-Agent:

```bash
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"
curl -s -A "$UA" "https://www.icecubedigital.com/<slug>/" -o /tmp/live.html
```

- The main content is between `</header>` and `<footer` — extract that; ignore nav and post-footer popups.
- The theme is GDLR/Goodlayers. Useful landmarks in the HTML:
  - `gdlr-core-title-item-title` — a section H2/title
  - `gdlr-core-column-service-item` / `gdlr-core-icon-list-item` — icon-box / list items
  - `gdlr-core-button` — a section's button (may be far below its heading in the source)
  - `gdlr-core-testimonial-content` / `-title` / `-position` — testimonial quote / name / designation
  - `call-to-action-item-title` — a CTA band
  - `accordion-item-title` — an FAQ question
  - `counter-item` — a milestone/counter stat
- The banner's left text-box is the first `gdlr-core-text-box-item-content`; its inner contains only `<p>` tags, so it closes at the **first** following `</div>`. Extract **every** `<p>` inside it as a separate banner paragraph. (A regex that waits for a second `</div>` will grab too much or miss trailing paragraphs — match `<p>...</p>` runs instead.)

### Mapping a live section to a section key

| Live visual                                             | Section key                     |
|---------------------------------------------------------|---------------------------------|
| Top hero with a contact form on the right               | `banner`                        |
| Centered hero, no form (e.g. pricing/landing)           | `simpleBanner`                  |
| Grid of boxes, **icon on top**, centered                | `topIconBox` (`columns:2/3/4`)  |
| Boxes with **icon on the left**, text right             | `leftIconBox` (`columns:1` = full-width rows) |
| Plain feature boxes, **no icon**, title+text            | `infoBox` (`columns`/`gridClass`) |
| Heart/check bullet list (one or two columns)            | `checkList`                     |
| Numbered steps / process (arrows between)               | `processSteps` (`columns:2`)    |
| Image on one side, text + bullets on the other          | `imageText` (`imagePosition:"right"` to flip) |
| Centered prose block                                    | `plainText`                     |
| Dark **boxed** prose cards (often left-aligned prose)    | `information`                   |
| CTA band (one line + button, full-width)                | `cta`                           |
| Accordion Q&A                                           | `faq`                           |
| Sticky left-rail "guide"/scroll-spy + long right column | `scrollNavigation`              |
| "Case Studies" cards (metrics + testimonial)            | `caseStudy`                     |
| "Our Portfolio" / client-work gallery                   | `portfolio`                     |
| Single client quote with avatar                         | `testimonials`                  |
| "Get Your FREE SEO Audit" form band                     | `seoAuditForm`                  |
| Counter stats (Happy Clients / Websites / …)            | `milestone` (common)            |
| Review badges (Clutch/Google/…)                         | `achievements` (common)         |
| Client logo strip                                       | `ourClients` (common)           |
| CEO photo + closing CTA                                 | `ceoCta` (common)               |

If a section's mapping is genuinely unclear, ask rather than guess.

---

## 5. Section reference

Every content section's data shape. Legend: `?` = optional. **Parts** = a `renderParts` array (string / `{bold}` / `{text,href}`) — see [§6](#6-the-renderparts-pattern). `string|Parts` means the field accepts either a plain string or a parts array.

Every section (except the banner/commons) starts with `eyebrow` + `title`. Apply the [2-line title rule](#25-title--eyebrow-split-the-2-line-rule).

### banner (required, every page)

```js
banner: {
  heading: "Manufacturing SEO Company",
  paragraphs: [                       // EACH live <p> = its own entry. string | Parts.
    "First paragraph…",
    "Second paragraph…",
    ["Third with an ", { text: "inline link", href: "/hire-seo-experts/" }, "."],
  ],
  checklistItems: ["optional", "check bullets"],   // ? optional
  closingParagraph: "optional final line",         // ? optional
  ctaLabel: "Send me a proposal",     // common — keep as-is
  ctaHref: "popup",
  phoneLabel: "Call Us +91 9106060593",
  phoneHref: "tel:+919106060593",
  formTitle: "Request a Free Quote",
  btnArrow: BTN_ARROW,
}
```

The right-column form is standard. The **left column (heading + paragraphs + checklist) IS audited** — match live.

### simpleBanner

Centered hero, no form. `{ eyebrow?, heading, paragraphs?: (string|Parts)[], ctaLabel?, ctaHref?, phoneLabel?, phoneHref?, btnArrow? }`. Use for pricing/landing pages that lead with a section below.

### topIconBox

```js
topIconBox: {
  eyebrow: "Our Proven Manufacturing",
  title: "SEO Services",
  subtitles: ["optional lead-in paragraph(s), string|Parts"],  // ? or `subtitle:` for a single one
  columns: 3,                          // ? 2 | 3 | 4 (default 3)
  textAlign: "left",                   // ? default centered
  items: [
    {
      icon: "/assets/icons/pie-chart.svg",   // ? optional
      title: "SEO Audit for Manufacturing Sites",
      body: "…",                              // string | Parts
      bodyList: ["optional", "bullet", "lines"],   // ? renders <ul>
      bodyAfter: "optional paragraph after the list",  // string | Parts
    },
    // …one object per live item. COUNT them against live.
  ],
  footerNote: "optional centered note below the grid",  // ? string | Parts
}
```

> **Do NOT keep a lead-in `subtitle`/`subtitles` that live doesn't show** — remove it for cross-page consistency. The component renders nothing if absent.

### leftIconBox

Same item shape as topIconBox but icon-on-left rows. `columns: 1` = full-width single-column rows; default = 2-up. Supports `subtitle` (string|string[]|Parts), `footerNote`, and a bottom `ctaLabel`/`ctaHref`/`btnArrow`.

### infoBox

No-icon feature boxes. Width via **either** `columns: 2|3|4` **or** `gridClass: "sm:grid-cols-2"` / `"sm:grid-cols-2 lg:grid-cols-3"`. Items: `{ title, body?: string|Parts, bodyList?, bodyAfter? }`. Optional `subtitle` (string|string[]|Parts), `textAlign`.

### processSteps

```js
processSteps: {
  eyebrow: "How We Work: Our SEO",
  title: "Process for Manufacturers",
  subtitle: "…",                       // ? string | string[] | Parts
  columns: 2,                          // ? 2 = two-column; default single column
  align: "center",                     // ? vertical-centers the step content
  steps: [
    { title: "Strategy Planning", body: "…",     // body: string | Parts
      bodyList: ["…"], bodyAfter: "…" },          // ? both optional
  ],
  ctaLabel: "Schedule a Meeting Today!",  // ? EXACT live label or omit
  ctaHref: "popup",
  btnArrow: BTN_ARROW,
}
```

Steps auto-number 1..N.

### checkList

```js
checkList: {
  eyebrow: "…", title: "…",
  subtitle: "…",                       // ? string | string[] | Parts
  benefitsLeft: [                      // required column
    "Plain string bullet",
    ["Parts ", { bold: "bullet" }, " with inline formatting"],
    { title: "Bold lead-in", body: "second line under it" },
  ],
  benefitsRight: [ /* … */ ],          // ? present → two columns; absent → one
  textContent: "optional centered paragraph(s) below",   // ? string | Parts | array
  ctaLabel: "…", ctaHref: "popup", btnArrow: BTN_ARROW,  // ? EXACT live label or omit
}
```

### imageText

```js
imageText: {
  eyebrow: "…", title: "…", subtitle: "…",   // ? all optional (omit for a heading-less block)
  image: "/assets/photos/first-page-google.png",   // download the REAL live image, not a placeholder
  imageAlt: "…",
  imagePosition: "right",              // ? put the image on the right (default left)
  contentTitle: "optional bold in-column heading",  // ?
  // EITHER paragraphs…
  paragraphs: ["p1", ["p2 with ", {text:"link",href:"/x/"}]],  // string | Parts each
  checklistItems: ["optional check bullets"],       // ?
  // …OR a richer blocks array (mix paragraphs, lists, checklists):
  blocks: [
    { text: "a paragraph", strong: true },          // strong ? = bold paragraph
    { type: "ul", items: ["bullet", ["parts ", {bold:"bullet"}]] },
    { type: "checklist", items: ["check bullet"] },
  ],
  outro: "optional closing paragraph",  // ?
  ctaLabel: "Request a free quote", ctaHref: "popup", btnArrow: BTN_ARROW,  // ? EXACT live or omit
  footerParagraphs: ["full-width paragraphs below the two columns"],  // ?
  infoBoxes: [{ title: "…", body: "…" }],           // ? small boxes below
}
```

**imageText images:** download the real live image. Find the section's `<img data-lazy-src>`, strip the `/webp-express/webp-images` prefix and `.webp` suffix to get the original `/wp-content/uploads/...` URL, `curl` it into `public/assets/photos/<descriptive-name>.png`, and reference that path. Never leave the `wow-clients.jpg` placeholder.

**imageTextBlocks / imageTextBlocksSecondary:** an **array** of imageText objects — renders one section per entry, in place. Use instead of numbered keys when stacking several.

### plainText

```js
plainText: {
  eyebrow: "…", title: "…",            // ? both optional
  contentAlign: "center",              // ? "center" (default) | "left" — prefer center; use `information` for boxed/left prose
  paragraphs: ["p1", ["p2 ", {text:"link",href:"/x/"}]],   // string | Parts
  listItems: ["…" | {title,body} | Parts],   // ? optional <ul>
  outro: "…",                          // ? string | Parts
  ctaLabel: "…", ctaHref: "popup", btnArrow: BTN_ARROW,    // ? EXACT live or omit
}
// Alt richer form: `blocks: [{type:"ul", items:[…]} | {text} | {parts}]` instead of paragraphs.
```

### information (boxed cards — a.k.a. "infosection")

```js
information: {
  eyebrow: "Why Are We Your Top Choice for", title: "Fashion SEO?",
  cards: [
    {
      title: "optional card heading",  // ?
      blocks: [
        { type: "p", text: "a paragraph" },        // or { type:"p", parts:[…] } for inline formatting
        { type: "ul", items: [                      // bullets: string | Parts | {title,text}
          "plain", ["parts ", {bold:"x"}], { title: "Bold lead", text: "rest" },
        ]},
        { type: "table", columns: ["A","B"], rows: [["1","2"],["3","4"]] },  // optional table block
      ],
    },
  ],
  ctaLabel: "…", ctaHref: "popup", btnArrow: BTN_ARROW,   // ? optional section button
}
```

> When a user's overview says **"infosection"** they mean this `information` key (boxed cards), **not** `infoBox` (the no-icon grid). The `information` bullet object uses `{ title, text }` (note: `text`, not `body`).

### scrollNavigation (sticky-rail scroll-spy)

```js
scrollNavigation: {
  eyebrow: "…", title: "…", subtitle: "…",  // ? all optional
  navLabel: "Guide Highlights",             // ? header shown atop the sticky rail
  items: [
    {
      title: "What is Firearm eCommerce?",   // becomes both the rail label and the block id
      // simple form:
      body: "paragraph", bodyList: ["bullets"],   // string|Parts / (string|Parts)[]
      // OR rich form:
      blocks: [
        { text: "paragraph" },                     // string | Parts
        { type: "ul", items: ["bullet", ["parts ", {bold:"x"}]] },
      ],
    },
  ],
  ctaLabel: "…", ctaHref: "popup", btnArrow: BTN_ARROW,   // ?
}
```

Client component (uses IntersectionObserver). If you add new utility classes to it, rebuild CSS. **This section often has NO heading on live** — don't miss it during extraction.

### cta (call-to-action band)

```js
cta: {
  text: "Partner With a Professional SEO Company That Delivers Notable Results",  // Title Case (house style)
  subtitle: "optional smaller line",   // ?
  ctaLabel: "Contact Us Today for a Free Consultation!",
  ctaHref: "popup",
  btnArrow: BTN_ARROW,
}
```

### faq

```js
faq: {
  eyebrow: "Manufacturing SEO", title: "FAQs",
  subtitle: "…",                       // ?
  items: [
    { question: "…", answer: "…" },
    { question: "…", answerList: ["intro", ["bold ", {bold:"lead-in"}, " bullets"], "…"] },  // ? answerList instead of answer
  ],
}
```

### seoAuditForm

```js
seoAuditForm: {
  eyebrow: "Get Your FREE", title: "SEO Audit Report Now!",
  image: "/assets/photos/seo-form.png", imageAlt: "",
}
```

### Tables (specialized — mostly for pricing/packages pages)

These exist but are rarely used on standard service/industry pages. When you need one, copy the closest existing user of it (see `lib/services/packages/` and `resources/`):

| Key | Component | Use |
|-----|-----------|-----|
| `tableBasic` (+Secondary/…/Quaternary) | ServicesTableBasic | Simple orange-header comparison/spec table |
| `tableSeoPlans` | ServicesTableSeoPlans | SEO monthly pricing plans |
| `tablePricingPlans` | ServicesTablePricingPlans | Pricing plan columns |
| `tablePricingPlansTabs` | ServicesTablePricingPlansTabs | Tabbed pricing (tabs/plans/pricing/rows tuples) |
| `tableCompare` / `tableCompareAdvanced` | ServicesTableCompare(Advanced) | Feature comparison matrix |
| `tableInfoCards` | ServicesTableInfoCards | Columns of plain feature lists, **no prices** |
| `tablePackages` | ServicesTablePackages | **Pricing package cards** (name + price + grouped checklist + per-card CTA + "Most Popular" ribbon) |
| `tablePackagesAccordion` | ServicesTablePackagesAccordion | SEO comparison table: pinned tier header + collapsible category groups with ✓/✗/text cells |

> Naming gotcha: `tablePackages` = **pricing cards**; `tableInfoCards` = the older no-price feature-list table. Don't confuse them.

---

## 6. The `renderParts` pattern

Almost every text field accepts either a plain **string** or a **parts array** for inline formatting. Every renderer implements the same helper:

```js
// A "parts array" is a mix of:
"a plain string segment",
{ bold: "a bold run" },              // → <strong class="font-semibold">
{ text: "link text", href: "/relative-path/" },   // → <a class="text-primary … underline">
```

Example — a paragraph with a bold run and an inline link:

```js
body: [
  "Target nearby prospects with our expert ",
  { text: "local SEO company near me", href: "/local-seo-services/" },
  " services. This is ",
  { bold: "white-hat only" },
  ".",
],
```

**Rules:**

- Links are always **relative** (`/slug/`), never absolute live URLs.
- Use parts arrays **only** where live has inline bold/links. Plain text → plain string (don't wrap needlessly).
- Fields that take parts: banner `paragraphs`, all `body`/`bodyAfter`/`subtitle`/`footerNote` fields, `checkList` bullets, `information` blocks & bullets, `imageText` paragraphs/blocks/list items, `plainText` paragraphs/listItems/outro, `processSteps` bodies, `scrollNavigation` bodies/blocks, `faq` answerList items, `cta`… (basically everywhere).
- `{title, body}` (checkList) and `{title, text}` (information bullets) are the bold-lead-in bullet forms — note the different second-key name per component.

---

## 7. Common (shared) sections

These live in `lib/services/common-section/` and are **imported**, not hand-written, so every page stays identical. Import only the ones the live page shows.

```js
import milestoneSection from "../common-section/milestone-section";
import achievementsSection from "../common-section/achievements-section";
import ourClientsSection from "../common-section/our-clients-section";
import ceoCtaSection from "../common-section/ceo-cta-section";

// …then in the data object, place them where live shows them:
milestone: milestoneSection,       // counter stats — NOTE: most INDUSTRY pages have none
achievements: achievementsSection, // review badges
ourClients: ourClientsSection,     // client logo strip
getQuote: true,                    // global home CTA form (no data) — pin position, or omit to auto-place
weServe: true,                     // global "industries we serve" (no data)
ceoCta: ceoCtaSection,             // closing CEO CTA
```

- **milestone**: 250 Happy Clients / 500 Websites / 100% Satisfaction / 14 Years. **Industry pages typically omit this** — verify against live before adding.
- **achievements / ourClients / ceoCta**: fixed shared content. Just import and place.
- **getQuote / weServe**: no data block; auto-position if you don't add the `true` key (getQuote after portfolio, weServe before ceoCta).

---

## 8. CPT-backed sections

`portfolio`, `caseStudy`, and `testimonials` pull from live data — you provide **IDs / slugs**, not content.

### portfolio & caseStudy — `postIds`

```js
caseStudy: {
  eyebrow: "Our", title: "Case Studies",
  subtitle: ["…", "…"],               // string | string[]
  postIds: [62038, 56591, 56534],     // WordPress databaseIds, fetched live via WPGraphQL
  caseStudyCtaLabel: "More Case Studies", caseStudyCtaHref: "/case-studies/", btnArrow: BTN_ARROW,
}

portfolio: {
  eyebrow: "Our", title: "Portfolio",
  subtitle: "…",
  postIds: [40941, 40927, 40956],
  portfolioCtaLabel: "More Portfolio", portfolioCtaHref: "/portfolio/",
}
```

**How postIds resolve:** the section fetches these post IDs from WPGraphQL (`portfolios` / `caseStudies`). Each card renders image + title, and — **if the ACF fields exist** — a metrics grid + testimonial + author. Cards **degrade gracefully**: empty ACF → clean image+title card (no broken empty box).

**Finding the right IDs from a live card slug:** a `where:{in:[ids]}` filter needs numeric IDs, not slugs. So paginate and match by slug:

```bash
# fetch all case studies (or portfolios), then find the databaseId whose slug matches live's card
curl -s -A "$UA" -H "Accept: application/json" -H "Content-Type: application/json" \
  --data '{"query":"{ caseStudies(first:200){ nodes{ databaseId slug title } } }"}' \
  "https://www.icecubedigital.com/graphql"
```

Rules (from [§2.3](#23-casestudy--portfolio-items--use-lives-actual-cpt-items)): keep every live slug that resolves in the CPT (even empty ACF); substitute only genuinely-missing ones; flag substitutions. Track empty-ACF IDs in a `MISSING_CMS_REPORT.md` for the client to populate.

> Live databaseIds differ from the old dev IDs. Current default portfolio IDs are `[40941, 40927, 40956]`. The GraphQL endpoint is `https://www.icecubedigital.com/graphql` (set in `.env.local`; needs a browser UA + `Accept: application/json` when tested externally).

### testimonials — `testimonialSlug`

```js
testimonials: {
  eyebrow: "Hear What Our", title: "Clients Have to Say!",
  testimonialSlug: "christian-marcello",   // resolves from lib/testimonials.js
}
```

- The slug resolves against the `TESTIMONIALS` array in `lib/testimonials.js` (`{ slug, name, designation, quote, avatar, avatarAlt }`; `quote` may be a string or an array of paragraphs, and a paragraph may be a parts array for inline links). If the slug is unknown, the section renders **nothing**.
- **Match the person live actually quotes.** Don't leave a default (`christian-marcello`) on a page whose live testimonial is someone else. Extract live's quote/name/designation, and if that person isn't in the store, **add a new entry** to `lib/testimonials.js` and point `testimonialSlug` at it.
- Avatar: reuse an existing `/assets/testimonial/<name>.png` if present, else download the live one, else fall back to `/assets/testimonial/user-avatar-dark.png`. Empty designation → `designation: ""` (component hides it).

---

## 9. Formatting conventions

- **Indent with tabs.** Every service data file uses tabs (Prettier is not installed here). Match the surrounding file.
- **Write content-card objects multi-line** — one property per line — for anything with a long `body`/`answer` (items, benefits, steps, faq, cards). Never author them compact:

  ```js
  // GOOD
  {
      icon: "/assets/icons/copy.svg",
      title: "On-Page SEO Optimization",
      body: "On-page SEO service is the backbone of quality SEO services…",
  },
  // BAD (compact long-body object)
  { icon: "/assets/icons/copy.svg", title: "On-Page SEO Optimization", body: "On-page SEO…" },
  ```

  Keep genuinely tabular/short config compact (pricing tuples like `{ name: "Starter" }`, plain string-array bullets).
- **No comments** in data files except the one JSDoc type line at the top:

  ```js
  /** @type {import('../index').ServiceData} */
  const DentalSeo = { … };
  export default DentalSeo;
  ```

  (Path is `'../index'` from a category subfolder, `'./index'` from the root.)
- **BTN_ARROW constant** at the very top of the file (the long SVG path string used by every button). Copy it verbatim from any sibling — see [§12](#12-reference-constants--snippets).
- **Normalise homoglyphs to ASCII**, fix live typos, keep clean English ([§2.8](#28-fix-lives-defects-keep-our-house-style)).
- When reformatting an existing file, change **whitespace only** — never alter words (verify with `diff -w`).

---

## 10. Post-build verification checklist

Run this against **every** page before calling it done. This is the audit.

- [ ] **Section order** matches live top-to-bottom (your key order = live order).
- [ ] **No section missing** — including untitled ones (`scrollNavigation` "guide" blocks, etc.).
- [ ] **Banner paragraph count** equals live's `<p>` count (no merge, no drop).
- [ ] **Every list section's item count** equals live's (topIconBox / leftIconBox / infoBox / checkList / processSteps / information). Diff titles in order.
- [ ] **Every inline link** live has is reproduced as a relative `{text,href}` part; no links live doesn't have.
- [ ] **Every bold run** reproduced as `{bold}`.
- [ ] **Button labels** are live-exact (or omitted where live has none). Banner button excluded.
- [ ] **caseStudy/portfolio postIds** are live's real items (kept even if ACF empty; substitutions flagged).
- [ ] **testimonialSlug** matches live's quoted person (added to `lib/testimonials.js` if new).
- [ ] **Title/eyebrow** split follows the 2-line / min-2-word rule.
- [ ] **plainText** is centered; boxed/left prose is `information`.
- [ ] **Homoglyphs normalised; live typos fixed; our house style kept.**
- [ ] **Only live's common sections** included; no post-footer popups; industry pages have no stray `milestone`.
- [ ] **Formatting**: tabs, multi-line objects, only the JSDoc comment, BTN_ARROW present.
- [ ] **Registered** in `index.js` (import + MAP).
- [ ] **Page loads** (HTTP 200) and renders without errors. If you added component classes, `npm run build:css` was run.
- [ ] **No mid-sentence truncation** anywhere (scan for bodies ending without punctuation; ignore parts-array fragments).

---

## 11. Catalogue of mistakes to avoid

Real mistakes made and corrected on this project — each one cost a rejection round:

1. **Dropped the banner's 2nd/3rd paragraph** by extracting with a greedy regex. → Extract every `<p>` separately.
2. **Merged live's 3 banner paragraphs into 1.** → Never concatenate; keep the split.
3. **Merged an `imageText`'s 2 paragraphs into 1** and dropped its button. → Keep the split; grab the button.
4. **Missed inline content links** inside paragraphs on 5 pages. → Cross-check every in-`<p>` `<a>` and add relative `{text,href}` parts.
5. **Dropped a list item** (`topIconBox` had 8 vs live's 9) by stuffing item #5's body onto item #4 as a `bodyAfter`. → Count items; each live item = its own object.
6. **Over-substituted case studies** for "completeness." → Keep live's real CPT items even with empty ACF; substitute only genuinely-missing slugs.
7. **Missed an untitled `scrollNavigation` "Guide Highlights" section** because it had no title markup. → Read the full DOM, not just titled sections.
8. **Defaulted every button to "Request a free quote."** → Extract each section's exact live label; omit if none.
9. **Left the default `christian-marcello` testimonial** on a page quoting someone else. → Match live's person; add to the store if new.
10. **Left the `wow-clients.jpg` placeholder** for an imageText image. → Download the real live image.
11. **Made a 1-word main-title** by over-tightening the eyebrow split. → Min 2 words in the title.
12. **Mirrored a live typo / Cyrillic homoglyph / cloned wrong-city artifact.** → Fix it; output clean English.

---

## 12. Reference constants & snippets

**The button-arrow SVG path** (top of every data file):

```js
const BTN_ARROW = "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";
```

**Standard banner constants:** `ctaLabel: "Send me a proposal"`, `ctaHref: "popup"`, `phoneLabel: "Call Us +91 9106060593"`, `phoneHref: "tel:+919106060593"`, `formTitle: "Request a Free Quote"`.

**`ctaHref: "popup"`** is the standard button target (opens the quote popup) for every section button.

**Icons** live in `public/assets/icons/*.svg` (e.g. `pie-chart.svg`, `smart-search.svg`, `copy.svg`, `note.svg`, `web.svg`, `www.svg`, `speed.svg`, `seo-monitor.svg`, `code-monitor.svg`, `gear.svg`, `search-link.svg`, `note-edit.svg`, `html-code.svg`, `bulb-active.svg`, `sliders.svg`, `result.svg`, `user-time.svg`, `user-team.svg`, …). Pick an icon whose meaning matches the item; reuse existing ones, don't invent filenames.

**GraphQL endpoint:** `https://www.icecubedigital.com/graphql` (in `.env.local` as `NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT`). Read-only SSR via `lib/apollo-client.js`.

**Best template file to copy:** [`lib/services/industry/industry-manufacturing-seo.js`](lib/services/industry/industry-manufacturing-seo.js) — a near-complete real page exercising banner (3 paragraphs), caseStudy, seoAuditForm, plainText (with inline link + exact button), topIconBox (9 items + inline links), infoBox, processSteps (with button), leftIconBox (with inline links), cta, faq, and all four common sections.

**Category folders** under `lib/services/`: `ecommerce/`, `magento/`, `wordpress/`, `shopify/`, `woocommerce/`, `webflow/`, `white-label/`, `industry/`, `packages/`, `resources/our-approach/`, `resources/pricing-guides/`, plus `common-section/`. The folder is organisational only — the flat `slug` is the URL.

---

*This guide reflects the conventions and corrections established while building the icecubedigital.com headless rebuild. When live and this guide disagree on a specific page, **live content wins** for that page's copy; the guide wins on structure, formatting, and house style.*
