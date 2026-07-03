# Content Audit — Headless vs Live (Services · Industry · Resources)

Compared every per-page content section on our headless site against the matching live `icecubedigital.com` page. **71 pages audited** (50 service + 5 industry + 16 resources). Common/shared sections (portfolio, case study, single testimonial, achievements/counter, Countries We Serve, get-quote form, CEO CTA) and all media/icons were **excluded** by design. Our extra sections were **kept**.

- **~46 safe fixes auto-applied** across ~16 data files (missing inline links, missing bold, dropped sentences/paragraphs, and obvious copy-paste errors e.g. "Maintenance FAQs"→"Development FAQs", "eCommerce SEO experts"→"WordPress SEO experts").
- Everything ambiguous or high-stakes was **flagged only** (below) for your decision — nothing risky was changed.

## How to read this
Each category section lists pages with: **Fixes applied** (already done), **Flags (review)** (your call), and **Extra sections kept**. The clusters below summarize the cross-page patterns worth deciding on first.

---

## ⚠️ Decide first — cross-page patterns

### 1. Pages that are a MAJOR live redesign (our copy is stale) → full re-port candidates
Live has been substantially rewritten with many new sections we don't have. These are too big to spot-patch — recommend re-porting each fully (I can do them one at a time):
- `seo-search-engine-optimization` (extra "What Are Professional SEO Services?" section, rewritten AI block, changed stats)
- `hire-wordpress-developers-designers` (new banner + ~7 new sections; 5 of our sections gone on live)
- `hire-magento-2-developers-programmers` (~9 new sections: pricing table, "What Does a Magento Developer Do", Magento stack, Hyvä/headless…)
- `shopify-development-services` (4 live sections we lack; we keep 3 AI sections live lacks)
- `hire-shopify-plus-developers` (missing "Hire Dedicated Shopify Plus Developers" + 10-item list)
- `shopify-plus-seo-services` (missing "Fuel your SEO Strategy…" section; pricing differs)
(See per-page detail for the exact section lists.)

### 2. Component limits blocking some live links/bold (need a small component change, then I re-apply)
These live details can't be encoded until the renderer supports them — currently **flagged, not applied**:
- **Card/box TITLE hyperlinks** — live links some icon-box card titles to other services, but our item `title` renders as raw text (no href field). Affects many hire/service pages.
- **Inline bold** in: `ServicesLeftIconBoxSection` (no bold branch), FAQ `answerList`, info-guide `<ul>`, and any singular `subtitle`/`footerNote` (render raw strings).
→ I already added `{bold}` support to `ServicesInfoBoxSection`. Say the word and I'll extend the same to these renderers + add an optional title-link field, then re-run the flagged items.

### 3. Copy-paste "White Label / 500" pricing leftovers (VERIFY — prices are high-stakes)
Some SEO/pricing blocks still carry a white-label template's plan label/price where live shows the real service + a different price. Already fixed one label (`woocommerce-seo` → "WooCommerce"); still flagged for your confirmation:
- `shopify-seo-service` — plan label "White Label" vs live "Shopify"; price **500** vs live **599**
- `white-label-seo-services` — price **500** vs live **599**
- `shopify-seo-service` info card 1 title mismatch
→ I did not touch prices — confirm the correct numbers and I'll set them.

### 4. Global (every page): banner phone label
Live shows "**Or** Call Us +91 9106060593"; ours shows "Call Us +91 9106060593". One-line global fix if you want it (data or component). Not applied yet.

### 5. Extra sections we KEPT (not on live) — as instructed
Various "Guide Information" / "Additional Information" card blocks (eCommerce design & dev, AI-in-eCommerce, several Magento/Shopify/WordPress pages). Left untouched per your rule.

### 6. Live is WORSE than ours (no action taken)
Several live pages have typos or Cyrillic-homoglyph corruption ("Whitе Labеl", "is just another" missing "not", "Agnecy", "24 24-hour", "$10,0000"). Our copy is already correct — left as-is. Listed per page for transparency.

---

# Per-category detail


---

# Category: ecommerce

# eCommerce service pages — text-fidelity audit vs LIVE

Live fetched 2026-07-03. Common/shared sections (portfolio/case-study cards, single testimonial, achievements, countries, form fields, CEO CTA) and media paths were not compared. Button-label casing and trailing punctuation ignored.

## ai-in-ecommerce-solutions
- **Fetch:** ok
- **Fixes applied:**
  - plainText (final paragraph before "Request A Free Quote"): converted plain "AI integration services" into a link → `/ai-integration-services/` (live links it inside the paragraph).
- **Flags (review):**
  - **cta.text mismatch:** live = "Make AI your team member that never sleeps, never gets tired, and works every time with full precision!"; ours = "Make Your Business Smarter with Icecube Digital's AI in eCommerce Solutions." (Confirmed our sentence is absent from live HTML. Not auto-changed — full-sentence swap. CTA button label matches.)
  - **Live typo, ours cleaner (kept ours):** plainText para 3 — live "answers users' queries 24/7 **with** chugging down cups of coffee" vs ours "**without** chugging…". Ours is correct.
  - **Minor wording (kept ours):** plainText para 4 — live "Here's how, why AI matters… when **the** old competitors…" vs ours "Here's how **and** why AI matters… when old competitors…". Ours reads cleaner.
  - **Item order differs (not reordered):** leftIconBoxSecondary ("Why Icecube Digital is the Right Partner") — live order is …We understand → AI that actually works → Custom solutions → Easy integration…; ours has Easy integration and AI-that-works swapped. All 8 items present.
  - **Banner phone label:** live "**Or** Call Us +91 9106060593" vs ours "Call Us +91 9106060593" (dropped "Or"; identical difference on all 4 pages).
- **Extra sections kept:** `information` ("AI in eCommerce Guide Information", 3 cards) — not present on live.

## ecommerce-website-development-services
- **Fetch:** ok
- **Fixes applied:**
  - plainText block 1: converted plain "ecommerce website developers" into a link → `/hire-ecommerce-designers-developers/`.
  - plainText block 3: bolded "Here's our core ecommerce mantra" (live shows it bold).
  - topIconBoxSecondary → "User Friendly Layout" body: converted plain "eCommerce website design" into a link → `/ecommerce-website-design-services/`.
- **Flags (review):**
  - **Wrong subtitle (recommend fix, not auto-applied):** leftIconBox ("Our eCommerce Platform Expertise") subtitle in our data is a copy-paste duplicate of the topIconBox subtitle ("Being a well-established eCommerce website development company…"). Live shows a distinct subtitle: "As a top eCommerce development company, Icecube Digital has 14+ years of experience working across various platforms, like Shopify, Magento, and WooCommerce." (Both live subtitles confirmed in HTML.)
  - **Missing per-item "Learn More" links (no data field):** leftIconBox platform items link out on live — Shopify → `/shopify-development-services/`, Magento → `/magento-development-services/`, WooCommerce → `/woocommerce-development-services/`. Our leftIconBox item shape has no link field.
  - **Live typo, ours cleaner (kept ours):** leftIconBoxSecondary → "eCommerce Industry Experts" — live "Icecube Digital **is just** another development agency" (missing "not"); ours "is **not** just another…" is correct.
  - **Item order differs (not reordered):** leftIconBoxSecondary — live has "Timely Delivery & Support" before "Cost-Effective Solutions"; ours reversed. Both present.
  - **Banner phone label:** live "Or Call Us…" vs ours "Call Us…" (same as page 1).
- **Extra sections kept:** `information` ("eCommerce Website Development Guide Information", 3 cards) — not present on live.

## hire-ecommerce-designers-developers
- **Fetch:** ok
- **Fixes applied:** none (all inline links already present and correct in data).
- **Flags (review):**
  - **Banner form title:** live "Get Free **Magento** Store Audit" vs ours "Get Free **eCommerce** Store Audit". Live looks like a stale copy from a Magento page; ambiguous which is intended — not changed.
  - **Wording differs (not changed):** imageText para 2 — live "**Hiring a website designer** can tailor your site…" (bold lead-in) vs ours "An e-commerce website designer for hire can tailor your site…". Different words, not just formatting.
  - **Bold + spelling differ (not changed):** imageTextSecondary para 2 — live bolds & hyphenates "**e-commerce web development**"; ours "ecommerce web development" (plain, no hyphen). Not auto-bolded because the token spelling differs.
  - **CTA button label differs (not changed):** cta — live "Get a Free Quote" vs ours "Contact Us Today for a Free Consultation!". (cta.text "Let's Start A Successful Ecommerce Website Project Today" matches.)
  - **Banner phone label:** live "Or Call Us…" vs ours "Call Us…".
- **Extra sections kept:** none

## ecommerce-seo-services
- **Fetch:** ok
- **Fixes applied:** none (all inline links already present and correct in data).
- **Flags (review):**
  - **Banner form title:** live "Get Your Free AI SEO Audit" vs ours "Get Free eCommerce Store Audit" (ambiguous; not changed).
  - **CTA button label differs (not changed):** plainTextSecondary — live "Request a Demo!" vs ours "Request A Free Quote".
  - **Shared grammar slip (matches live, left as-is):** plainTextTertiary block 2 — both live and ours read "you can assured that we'll handle…" (missing "be"). Faithful to live; noted for awareness.
  - **Banner phone label:** live "Or Call Us…" vs ours "Call Us…".
- **Extra sections kept:** none


---

# Category: magento

# Magento Service Pages — Text-Fidelity Audit (headless vs LIVE)

Audited 7 Magento service pages against live WordPress. All fetches succeeded (files 320–378 KB).
Common sections (portfolio/case-study cards + metrics + single testimonial, Achievements/stars,
Countries We Serve, form field labels, CEO CTA), all media/icon paths, and button-label casing were
ignored per scope. Two known-global diffs (banner "Or Call Us…" vs "Call Us…", CTA button casing) omitted.

Structural note applying to every page: the icon-box components render `item.title` as a **plain
string** (no link support), so wherever live turns an icon-box title into an internal link, it cannot be
reproduced without a component change. These are reported as flags, never edited. Icon-box **bodies**
(which DO support link/bold parts) already match live.

---

## magento-development-services
- **Fetch:** ok
- **Fixes applied:**
  - `faq.title` "Maintenance FAQs" → **"Development FAQs"**. Live heading is "Magento Development FAQs"; ours rendered "Magento Maintenance FAQs" (copy-paste error — every Q&A on the page is about development).
- **Flags (review):**
  - `topIconBox` — 3 item titles are internal links on live, rendered plain by us (component limitation): "Magento Website Development & Design"→`/magento-website-design/`, "Magento Maintenance and Support"→`/magento-maintenance-services/`, "Magento Migration Services"→`/magento-2-upgrade-and-migration-services/`.
  - `topIconBoxSecondary` ("Why Employ Magento") — live has a **duplicated** "Multiple Payment Methods" card (appears twice) plus a different item order; ours has the unique set once (ours is cleaner). No action.
  - `plainText` heading — ours "…Continues To Thrive **&** Evolve!" vs live "…thrive **and** evolve!" (minor; left as-is).
- **Extra sections kept:** `information` "Additional Information" (6 cards: Introduction to Magento Development, Types of Websites, The Magento Development Process, Limitations/Challenges, Ongoing Maintenance & Support, Latest Trends) — **not present on live** (confirmed via raw-HTML grep).

---

## magento-2-development-services
- **Fetch:** ok
- **Fixes applied:** none (all candidate diffs are entangled with wording changes — not safe/surgical)
- **Flags (review):**
  - `plainText` — live is a copy-edited version of both blocks. Differences: "next generation"→"next-generation", "favourite"→"favorite", "Omnichannel"→"an omnichannel", "business owners too."→"…owners, too.", added "but"; live links **"Magento development services"→`/magento-development-services/`** where ours reads plain "Magento" (and "Magento offers"→"…services offer"); live **bolds** "Magento 2 development company in the USA" (ours plain, and "in USA"→"in the USA"); "the clients"→"its clients"; two added commas.
  - `imageText` heading — ours eyebrow "Magento 2" + "Approach" (renders "Magento 2 Approach") vs live **"Our Approach"**.
  - `cta.text` — ours "Make Your Business Global with Icecube Digital's Magento 2 Development Services." vs live **"Launch your dream website with our trusted Magento 2 development services!"** (whole-sentence difference).
  - `topIconBox` title-links (component limitation): "Magento 2 Web Design"→`/magento-website-design/`, "Magento 2 Migration"→`/magento-2-upgrade-and-migration-services/`, "Magento 2 Maintenance"→`/magento-maintenance-services/` (others link to `#`).
- **Extra sections kept:** none

---

## magento-website-design
- **Fetch:** ok
- **Fixes applied:** none (content already matches; no clean diffs)
- **Flags (review):**
  - **Live page is pervasively corrupted with Cyrillic homoglyphs** (`і` = U+0456 substituted for Latin "i") throughout the prose — banner, plainText, imageText, infoBox, topIconBoxSecondary, leftIconBox, and FAQ answers. Our data is clean Latin. **Keep ours — no action** (live is worse). Example live line: "Icecube Digital іs your premіer destіnatіon…".
  - `topIconBoxSecondary` "Comprehensive Solutions" — our link text is "Magento SEO," (trailing comma **inside** the anchor); live places the comma outside. Cosmetic; href correct.
- **Extra sections kept:** none

---

## magento-2-upgrade-and-migration-services
- **Fetch:** ok
- **Fixes applied:**
  - `banner` — added `closingParagraph: "Get a smooth upgrade without risking your store."` Live shows this line between the checklist and the CTA button; the banner component already renders `closingParagraph` there (field used on 3 other service pages).
  - `topIconBox` ("Why Upgrading to Magento 2 Is No Longer Optional") — added `subtitle: "If you're still on an older Magento version, you're already at a disadvantage."` Live shows this intro sentence under the heading; the component renders `subtitle`.
- **Flags (review):**
  - `testimonials` heading — ours "Hear What Our Clients Have to Say!" vs live **"What Clients Say?"** (same Sean-Scott testimonial; heading wording differs).
  - Minor: some in-text link anchors include the trailing period inside the link ("Magento development services.", "Magento developers.") vs live period outside. Cosmetic; hrefs correct.
- **Extra sections kept:** none

---

## hire-magento-2-developers-programmers
- **Fetch:** ok
- **Fixes applied:** none — page has **diverged too far for safe surgical edits** (see below); needs a manual re-port.
- **Flags (review):**
  - **MAJOR — live page substantially rewritten/expanded vs our data (headless copy is stale).** Live sections **absent from ours**: "Why Businesses Hire Magento Developers", "What Does a Magento Developer Do", "Flexible Ways to Hire Magento Developers" (full pricing table: Hourly/Monthly/Dedicated Team/Fixed-Price), "How Hiring Works — From Inquiry to Launch" (6 steps), "Certified Magento & Adobe Commerce Developers", "Magento Development Services Tailored to Your Business", "Why Hire Magento Developers from Icecube Digital", "The Magento Stack Our Developers Work In", "Build on the Modern Magento Frontend: Hyvä & Headless", plus an "Ongoing Magento Support & Maintenance" item added to the topIconBox. (All confirmed present via raw-HTML grep.)
  - **Banner rewritten** — ours heading "Hire Magento Developers" + 2 B2B/B2C paragraphs vs live "Hire Magento 2 Developers & Programmers" + a single new intro paragraph.
  - **Our sections NOT on live** (confirmed absent via grep): `plainText` "…Business Success", `plainTextSecondary` "…Striking Difference!", `imageTextTertiary` "…Magento Web Developer", `imageTextQuaternary` "Make Online Shopping Enjoyable and Economical", `checkList` "Why Should You Hire a Magento-Certified…", the `topIconBox` subtitles, and the `topIconBox` 4th item "Sustainable Support From Magento Certified Developer" (live replaces it with "Ongoing Magento Support & Maintenance", different title+body).
  - Sections that DO still match live: portfolio subtitle, `imageText`, `leftIconBox`, `topIconBoxSecondary`, `imageTextSecondary`, `faq` (9 items).
  - `cta` button href — ours `/hire-magento-2-developers-programmers/` (self-referential) vs live `/contact-us/`.
  - "Hyva" (ours) vs "Hyvä" (live) — framework-name diacritic, in the FAQ ("Do you work with Hyva…").
  - `topIconBoxSecondary` title-link limitation (e.g. "Magento Theme Design"→`/magento-website-design/`, "Adobe Commerce Enterprise Solutions" & "Magento 2 Upgrade and Migration Services"→`/magento-2-upgrade-and-migration-services/`).
- **Extra sections kept:** `information` "Comprehensive Magento Development Guide For Success" (5 cards) — not on live. (Plus the other ours-only sections above — these reflect staleness, not deliberate extras; recommend a full re-port of this page.)

---

## magento-seo-services
- **Fetch:** ok
- **Fixes applied:**
  - `faq` (primary) item "We require assistance with the technical SEO setup…" — converted plain "technical SEO experts" to a link → **`/technical-seo-services/`**. Live has exactly this link; it was the only difference in the answer. (FAQ `answer` supports parts, so this is clean.)
- **Flags (review):**
  - **FAQ structure mismatch.** Our primary `faq` ("Top Magento SEO Challenges…") holds 8 challenge items **plus 15 general Q&A** (What Is Magento SEO?, etc.). Live shows only the **8 challenge items** in that section, and the 15 general Q&A appear **only** in the secondary "Magento SEO Service FAQs". Meanwhile our `faqSecondary` uses **enhanced/rewritten** answers, whereas live's secondary FAQ uses the **shorter original** answers (which match our primary faq's 15 appended items). Net: the 15 Q&A are effectively duplicated in our data (short in primary, enhanced in secondary); live shows them once (short). Fixing = deleting/moving items → not auto-edited (rules forbid delete/reorder). Recommend: drop the 15 general Q&A from primary `faq`; reconcile `faqSecondary` answers with live if the short versions are canonical.
  - `topIconBox` ("Our Magento SEO Services Include") — title-link limitation ("On Page and Off-page SEO setup"→`/ecommerce-seo-services/`, "Responsive Design and web development"→`/magento-development-services/`); different item order; and the "On Page and Off-page SEO setup" body on live ends with an extra sentence missing from ours: "We help you set up the Magento Search Engine Optimization plugins based on your business needs."
  - `tableSeoPlans` "Consultation Services" — ours "eCommerce SEO experts" vs live "Magento SEO experts".
  - `information` section heading — ours "Magento SEO / Guide Information" vs live "Guide Highlights" (cards themselves match, incl. the `/local-seo-services/` link).
  - Live typos where **ours is cleaner** (kept ours): "count on **is**" (ours "…us"), "website**, U**sing" (ours "website. Using"), lowercase "our Magento SEO Experts". One portfolio metric shows a Cyrillic homoglyph on live ("Organic Clіcks") — common section, ignored.
- **Extra sections kept:** none (the `information` section is on live; `faqSecondary` noted under flags).

---

## magento-maintenance-services
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - **Live page pervasively corrupted with Cyrillic homoglyphs** (`е` = U+0435 for Latin "e") across banner, leftIconBox, topIconBox, topIconBoxSecondary, and FAQ. Our data is clean Latin. **Keep ours — no action.** Example live line: "At IcеCubе Digital, we еxtеnd our еxpеrtisе…".
  - `faq` last item "Get Started with IceCube Digital's Magento Maintenance Services" — live wraps "Magento development agency" in **bold** and injects two **self-referential** links ("IceCube Digital's"/"IceCube Digital" → `/magento-maintenance-services/`) whose anchor text is itself homoglyph-corrupted. Given the tampering evidence, **not applied** — kept ours clean. (Our answer also has a stray space before a period: "agency ." — trivial.)
  - `topIconBoxSecondary` title-link limitation (all titles link to `#` placeholders on live; the two body links — "Magento developers"→`/hire-magento-2-developers-programmers/` and "Magento 1 to Magento 2"→`/magento-2-upgrade-and-migration-services/` — already match).
- **Extra sections kept:** none


---

# Category: wordpress-a

# WordPress service pages — text-fidelity audit (live vs headless)

Method: fetched each live page, extracted marked-up prose, compared per-page prose only
(ignored common sections, all media/icon/image paths, and button-label casing). Applied only
safe unambiguous fixes; everything else flagged. The two known-global diffs (banner "Or Call Us",
button casing) are omitted.

---

## wordpress-development-services
- **Fetch:** ok (402 KB)
- **Fixes applied:**
  - **Banner** — added missing `closingParagraph: "Turn your website into a powerful sales channel — schedule your free consultation today."` Live shows this line after the checklist / before the CTA; the banner component already renders `closingParagraph` in exactly that slot, so it was a clean add.
  - **topIconBox ("Our WordPress Development Services")** — appended the missing 3rd subtitle sentence: "…into an actual growth asset. **We offer WordPress website development services that are unique to your business needs and are scalable for long-term growth.**" Confirmed present on live; identical sentence already exists in the sister website-design page's subtitle. Used "WordPress" casing to match file/brand style (live literally prints "Wordpress").
- **Flags (review):**
  - **infoBox heading** — live = "Common WordPress Development Challenges **We Solve**"; ours renders "Common WordPress" + "Development Challenges" (missing "We Solve"). Eyebrow/title split is design-sensitive → left as flag.
  - **plainText block 2** — ours "trusted WordPress website development **partner**" vs live "…development **Company**" (live capitalises "Company" mid-sentence — awkward). Ours cleaner → not changed.
  - **infoBoxSecondary subtitle** — live ends with an extra lead-in "By availing the custom wordpress development services of Icecube Digital, you gain:" that ours omits. It's a colon lead-in into the card grid → flagged rather than appended.
  - **infoBoxTertiary subtitle** — ours has a subtitle that is a verbatim copy of the infoBoxSecondary subtitle, but live has **no** subtitle here (heading → first card directly). Looks like duplicated-data. Not deleted (conservative).
  - **tableBasic ("WordPress Development Pricing")** — live shows two intro sentences under the heading ("Every project is a tailored investment…" and "Our ultimate goal is to provide customized WordPress website services instead of one-size fits all price."). Our table has no subtitle field, so they don't render.
  - **leftIconBox heading** — live "Why Choose **Us**…" vs ours "Why Choose **Icecube Digital**…" (wording, not a typo).
  - **leftIconBox item 1 title** — live "USA-based team **signal**" (stray word); ours cleaner "USA-Based Team".
  - **leftIconBox item 7 "Client Retention Rate" body** — substantially different: live "Most of our clients continue working with us… We have **95% client retention rate**…"; ours is a short rewrite "Reflecting the trust we have built through consistent, high-quality deliveries over more than a decade." Ambiguous → not changed.
  - **checkList "Technologies We Use"** — ours has an EXTRA 6th bullet "24/7 Support: Dedicated support team available around the clock for your website" (not on live; live lists 5). Also ours splits the 5 live bullets into two columns (reorders) — all content present.
  - Several headings + the cta sentence use Title Case vs live sentence case (design choice) — not changed.
- **Extra sections kept:** no whole extra sections; within-section extras = infoBoxTertiary subtitle (duplicated, not on live) + checkList "24/7 Support" bullet.

---

## wordpress-website-design-company
- **Fetch:** ok (358 KB)
- **Fixes applied:** none — all live links (WordPress SEO service, WordPress development agency, eCommerce SEO services) and the bold "WordPress website design agency" are already present; no clearly-missing prose in a parts-supporting field.
- **Flags (review):**
  - **topIconBox subtitle** — ours has the generic "Icecube Digital is a custom WordPress development company… scalable for long-term growth." paragraph, but live shows **no** subtitle here (heading → first service directly). Extra in ours (copied from the development page). Confirmed absent on live via raw-HTML grep. Not deleted.
  - **"information" section** — live leads with a "Guide Highlights" table-of-contents (4 anchor links) that ours doesn't render; ours titles the block "Additional Information". The 4 cards' titles/paragraphs/list-items themselves all match. Structural/navigational → review.
  - **Card 4 ("Top Features…") para 1** — live has grammar slips ("when it comes to **manual designing**", "the AI brings **that ideas** to life"); ours is cleaner ("manually designing", "those ideas"). Not changed (ours correct).
  - infoBox card titles + cta sentence use Title Case vs live sentence case (design choice).
  - Minor: topIconBox SEO-Services link is absolute (https://www.icecubedigital.com/wordpress-seo-service/) while siblings are relative — same destination, harmless.
- **Extra sections kept:** topIconBox subtitle paragraph (not on live).

---

## wordpress-vip
- **Fetch:** ok (342 KB)
- **Fixes applied:** none. The clear missing links on this page all live in fields the component renders WITHOUT parts support (singular `subtitle` and `footerNote` render as raw `{value}`, and item `title` is plain text). Converting them to link-parts via the data file alone would crash rendering, and components are out of scope → all flagged with suggested fixes below.
- **Flags (review):**
  - **topIconBoxSecondary subtitle** — live links "WordPress Development Company" → `/wordpress-development-services/` in the last line "Here is a list of services we offer as a [WordPress Development Company]:". Ours is a plain singular `subtitle` string. Suggested fix (switch to the parts-capable `subtitles` array, matching live's 2-paragraph split):
    `subtitles: ["Your business website is the powerhouse of your brand's existence. Standard WordPress can be a limiting aspect of high traffic in your business. This is exactly where we as a WordPress VIP partner come in.", ["Here is a list of services we offer as a ", { text: "WordPress Development Company", href: "/wordpress-development-services/" }, ":"]]`
  - **topIconBoxSecondary item titles are hyperlinks on live** — "Custom Wordpress Website Development" → `/wordpress-development-services/`, "Woocommerce integration" → `/woocommerce-development-services/`, "Website maintenance" → `/wordpress-maintenance-service/` (the other 5 point to `#`). Ours renders plain titles; the component's item `title` has no link support. Needs component/schema support → review.
  - **topIconBox ("Why Choose WordPress VIP?") footerNote** — live links "hiring WordPress developers" → `/hire-wordpress-developers-designers/`. Ours `footerNote` is a plain string rendered without parts support → cannot be fixed via data alone.
  - **FAQ answer ordering** — for Q1, Q2, Q4, Q5 ours puts the closing paragraph inside `answer` (rendered BEFORE the bullet `answerList`), whereas live shows it AFTER the list. All content present; only order differs. Structural → review.
  - Many card titles use Title Case vs live sentence case; cta sentence Title Case (design choice).
- **Extra sections kept:** none.

---

## hire-wordpress-developers-designers
- **Fetch:** ok (335 KB)
- **Fixes applied:** in the one overlapping section, **topIconBox ("Reliable Team Of WordPress Developers")**, added the 3 missing links that live has (item `body` supports parts):
  - "Hire Wordpress Expert" → link "wordpress development services" → `/wordpress-development-services/`
  - "Hire Woocommerce Developer" → link "experienced Woocommerce developers" → `/hire-woocommerce-developers-experts/`
  - "WordPress Maintenance" → link "wordpress maintenance package" → `/wordpress-maintenance-service/`
- **Flags (review) — this live page has been substantially REDESIGNED; our data file is an older version. Needs a full re-sync, not spot fixes:**
  - **Banner fully differs** — live heading "Hire WordPress Developers & Designers" + a new intro paragraph ("Hire dedicated WordPress developers and designers… within 24 business hours.") + a 4-item checklist ("Hire Dedicated WordPress Developers & Designers", "Hourly, Monthly & Fixed Cost Hiring", "Gutenberg & Headless WordPress", "NDA & IP Protection"). Ours has heading "Hire Wordpress Developers", different older paragraphs, and no checklist. Not edited.
  - **New live sections absent from ours:** "What Does a WordPress Developer Do?"; "Flexible Ways to Hire WordPress Developers" (comparison table + rates paragraph); "Hire A WordPress Developer In 3 Steps" (process); "Build on the Modern WordPress Stack" (checklist); "Why Hire WordPress Developers from Icecube Digital?" (icon box, incl. link "WooCommerce specialists" → `/woocommerce-development-services/`); "Hire WordPress Designers, Not Just Developers"; "The WordPress Tech Stack Our Developers Use" (checklist).
  - **topIconBox item 3 differs** — live "Hire Experienced WordPress Developers" (new body) vs ours "Hire Dedicated WordPress Developer" (old body). Not edited.
  - Minor: item 2 body ours "developers **has** years" vs live "developers **have** years" (left as-is with the link fix); banner heading uses "Wordpress" while pageTitle uses "WordPress".
  - **FAQ matches live** (same 10 Q&A).
- **Extra sections kept (present in ours, absent from current live page):** plainText "Wordpress Certified Developers For Businesses / Pushing The Limits"; topIconBoxSecondary "Why To Hire Wordpress Programmers From Us"; plainTextSecondary "Professional Wordpress Developers For Hire"; imageText "Wordpress Experts - Your Reliable Partner"; imageTextSecondary "Hire Wordpress Designer To Wow Your Clients".


---

# Category: wordpress-b

# WordPress service pages — text-fidelity audit (batch B)

Audited 4 headless service pages against live WordPress. Compared per-page prose only
(banner, eyebrows/titles, paragraphs, icon/info-box + card items, process steps, plainText,
CTA sentences, FAQ Q&A). Ignored common sections, media/icon paths, and button-label casing.
Only the 4 listed data files were edited.

## hire-wordpress-vip-developers
- **Fetch:** ok (377,782 bytes)
- **Fixes applied:**
  - `infoBox.subtitle` — was a plain string; live links "WordPress development company" → `/wordpress-development-services/`. Converted the subtitle to a parts array with `{ text, href }`. (Component `ServicesInfoBoxSection` renders subtitle-array elements via `renderParts`.)
- **Flags (review):**
  - `topIconBox` item **titles** are hyperlinked on live — real targets: "Custom WordPress VIP Website Development" & "Custom WordPress VIP Theme Development" → `/wordpress-vip/`, "WooCommerce VIP Solutions" → `/woocommerce-development-services/` (the rest point to `#`). Our data stores titles as plain strings and `ServicesTopIconBoxSection` renders titles without link support. Not fixed (needs component change; also a consistent live-wide pattern where most title links are `#`).
  - `processSteps` step 09: live has a garbled insertion — "Our WordPress VIP experts **into your team to** simplify multi-site…". Ours reads correctly ("…experts simplify multi-site…"). Ours cleaner — no change.
  - `leftIconBoxTertiary` "Ongoing Support & Maintenance": live "…regular bug tracking, **repping**, upgrades…"; ours "…**repairs**…" (correct). No change.
  - `leftIconBoxTertiary` "Transparent Pricing…": live "flexible**/** fixed-cost basis"; ours "flexible **or** fixed-cost basis" (cleaner). No change.
  - Testimonials heading (normally-ignored common section — noting for awareness): our data eyebrow/title = "Hear What Our" / "Clients Have to Say!", but live renders **"What Clients Say?"**. On pages 2 & 3 our data matches their live heading, and page 4's data is "What"/"Clients Say?" — so this heading is genuinely per-page and page 1's appears mismatched. Left unchanged per the ignore rule.
- **Extra sections kept:** none

## wordpress-seo-service
- **Fetch:** ok (361,341 bytes)
- **Fixes applied:**
  - `tableSeoPlans` → "Consultation Services" body: "Our **eCommerce** SEO experts" → "Our **WordPress** SEO experts" (clear template-copy error; live obviously correct on a WordPress page).
  - `topIconBoxTertiary.subtitles[1]`: added missing link "AI SEO services" → `/ai-seo-services/` (string → parts array).
  - `infoBoxSecondary` → "We Know How To Achieve Results" body: added missing link "hire WordPress SEO experts" → `/hire-seo-experts/` (string → parts array). Live shows it bold+linked; `renderParts` has no bold+link combo, but the link anchor renders `font-semibold`, so the bold weight is approximated.
  - `faq` → "Can I do WordPress SEO myself…" answer: added missing link "WordPress website development services" → `/wordpress-development-services/` (string → parts array; FAQ answer supports parts).
- **Flags (review):**
  - `faq` question wording: ours "Why **is** Icecube Digital **the best** SEO company for my WordPress website?" vs live "Why Icecube Digital is best seo company for my Wordpress website?" — ours cleaner/grammatical. No change.
  - `faq` "How to install SEO plugin…": the trailing sentence "After you have installed and activated…" sits **after** the list on live, but our schema stores it inside `answer` (before `answerList`). Content preserved; only ordering differs — no safe structural fix.
- **Extra sections kept:** none

## wordpress-maintenance-service
- **Fetch:** ok (335,163 bytes)
- **Fixes applied:** none
- **Flags (review):**
  - `leftIconBox` "Improved SEO & Better Conversions" body: live **bolds** the opening phrase "**WordPress website maintenance services**"; ours is plain. NOT applied — `ServicesLeftIconBoxSection.renderParts` has no `bold` branch, so a `{ bold }` part would render an empty `<a>` and drop the text. Needs a component change (add bold branch) or manual review.
  - `leftIconBox`: live shows a CTA button **"Request a free quote"** after the section intro; our `leftIconBox` has no `ctaLabel`/`ctaHref` (the component does support them). Possible missing CTA — review.
  - `topIconBoxSecondary` ("What Do We Cover…") subtitle: our data carries a paragraph — "Our WordPress developers are experienced in creating top-tier, secure, and scalable WordPress enterprise applications… provided by our **WordPress VIP Designers and Developers**." — that (a) does **not** appear on live and (b) is mis-copied from the VIP-developers page (VIP wording on a maintenance page). Recommend removing/replacing. Left unchanged (conservative — no deletion).
  - `checkList`: our `benefitsRight` has a 3rd item "Flexible Engagement Models" not present on live (live shows 5 bullets, ours 6). Minor extra — review.
  - Banner heading: ours "**WordPress**" (correct) vs live "Wordpress" (typo). Ours cleaner — no change.
- **Extra sections kept:** none

## wordpress-vip-support-and-maintenance
- **Fetch:** ok (363,793 bytes)
- **Fixes applied:** none (the section's only link — "WordPress development agency" in "Effortless Scaling" — is already present; no clear ours-wrong word errors).
- **Flags (review):**
  - Banner para: live "Focus on **our** core strengths"; ours "Focus on **your** core strengths" (correct). Ours cleaner — no change.
  - `infoBoxSecondary` "Managed Infrastructure": live ends "…instead of **instruction**." (typo) and adds a stray "the"; ours "…instead of **infrastructure**." (correct). Ours cleaner — no change.
  - Live has extra sentences/clauses our (evidently curated) copy omits — flagged, NOT added (ambiguous whether the cuts were intentional):
    - `infoBoxSecondary` "Managed CDN": live opens with extra "WordPress VIP is the go-to option for businesses that need unmatched performance, security, and support."
    - `infoBoxSecondary` "Automatic Updates & Security Patches": live appends "…, making it ideal for regulated domains, including healthcare, legal and finance sectors."
    - `infoBoxTertiary` section subtitle: live inserts "However, some people might question its security… The bottom line is –" before "WordPress VIP can improve your security…".
    - `infoBoxTertiary` "Comprehensive Physical Security": live appends "…, giving you the utmost peace of mind."
  - Several live typos our copy already fixes (e.g., "indesign multi-factor", "audit trials", "any issue concerts", FAQ "What does WordPress VIP doesn't include?"). Ours cleaner — no change.
- **Extra sections kept:** none


---

# Category: dm-a

# Digital Marketing Services — Content Fidelity Audit (Batch A)

Audited 4 headless service pages against live WordPress. Common sections (portfolio/case-study cards + metrics + single testimonial, "Our Achievements"/stars, "Countries We Serve", form labels, CEO CTA), all media paths, and button-label casing were ignored per scope. Known-global diffs (banner "Or Call Us", button casing) omitted.

## answer-engine-optimization-aeo-services
- **Fetch:** ok
- **Fixes applied:** none (page is the same revision as live; all per-page prose matches).
- **Flags (review):**
  - Minor live typos where ours is already cleaner (kept ours): banner "voice search options**,** generative content" (ours adds "and"); plainText "Copilot**,** Bing" (live "Copilot Bing"); "U.S.** **consumers" (live "U.S.consumers"). No action needed.
  - CTA text: live reads "Get our Professional **On-Page SEO** Services today" — that is a template leftover from the On-Page SEO page. Ours correctly says "Professional **AEO** Services". Kept ours (live is wrong here).
  - `plainTextSecondary` ("Shaping the Future…"): live splits this into TWO paragraphs (break after "…extremely important."); ours holds it as one. All text present — cosmetic only.
- **Extra sections kept:** none

## marketing-automation-services
- **Fetch:** ok
- **Fixes applied:** (ours had dropped sentences from an otherwise-identical revision — restored verbatim from live)
  - Banner para 1: appended "Leads are sitting in inboxes, follow-ups are delayed, campaign messaging becomes unclear, and the customer data remains underutilized."
  - Banner para 2: appended ", and the actions are triggered based on user behaviour, engagement signals, and predefined business rules."
  - infoBox "Improve lead nurturing and conversions": appended "The sales rep can spend their efforts on the valuable ones, instead of targeting all, increasing the chances of conversions."
  - infoBox "Deliver personalized customer experiences": inserted "Manually delivering personalized experiences to every lead & customer can be time-consuming and resource-straining. However," (and lowercased the following "marketing").
  - infoBox "Improve marketing and sales alignment": inserted "No manual follow-ups, sharing spreadsheets, or asking updates from one team to another."
  - `processStepsSecondary` subtitle: restored the three parentheticals — "starting simple (master one workflow before building ten), clean data (accurate data foundation builds a strong automation architecture), and clear goals (know what success looks like before we even begin)".
- **Flags (review):**
  - `topIconBoxSecondary` "Custom automation strategies": live has grammar slip "after **understand** business process"; ours "after **understanding**" is cleaner — kept ours.
  - infoBox item order differs (live: …ROI, then sales-alignment; ours has them swapped). Not reordered per scope; content identical.
- **Extra sections kept:** none

## digital-marketing-service
- **Fetch:** ok
- **Fixes applied:**
  - `imageText` link "seo marketing agency in Las Vegas": corrected wrong href `/seo-search-engine-optimization/` → `/las-vegas-seo-company/` (matches live; anchor text is Las Vegas-specific).
- **Flags (review):**
  - Banner CTA label: live button reads "Get a Free Consultation"; ours `banner.ctaLabel` is "Send me a proposal" (the label used on the other three pages). Page-specific difference — left as-is (button label; reviewer to decide).
  - `topIconBox` first card title "Search Engine Optimization (SEO)" is a link to `/ecommerce-seo-services/` on live (other 6 card titles link to "#"). Our topIconBox model uses plain-string titles with no title-href field, so not applied.
  - `tableBasic` (comparison table): live shows a "Let's Talk!" CTA button below the table; our `tableBasic` has no CTA field — omitted.
  - `tablePackages` "Get a Free Quote": live href `/contact-us/`, ours `#` (likely intentional form-modal trigger). Left as-is.
  - FAQ inline bold not represented in ours (answers are plain strings): live bolds "digital marketing services" (Q3) and the SEO/PPC/SMM labels (Q8). Model has no inline-bold in FAQ answers; not applied.
- **Extra sections kept:** none

## seo-search-engine-optimization
- **Fetch:** ok
- **Fixes applied:** none — see note. The live page is a **substantially newer revision** than ours; piecemeal syncing would produce an inconsistent hybrid, so per "when in doubt don't edit" nothing was auto-changed. Recommend a full re-port/review of this page.
- **Flags (review) — significant divergence:**
  - **Banner fully rewritten on live** (both paragraphs, all 5 checklist items, and the closing line are different copy). Ours is the older "Most businesses consider SEO as a hit-and-miss strategy…" version.
  - **Whole section missing from ours:** live has a "What Are Professional SEO Services?" plainText block (2 paragraphs, incl. GEO/AEO explanation) between Case Studies and the SEO-audit form.
  - `topIconBox` "Our Professional SEO Services": live prepends a one-line definition to items 1–6 (e.g. "Technical SEO makes your site easy for Google and AI crawlers to read, render, and index."), adds a trailing line to "Link Building" ("This is one of the best SEO services…"), and links three card titles (On-Page → `/on-page-seo-services/`, Local SEO → `/local-seo-services/`, eCommerce SEO → `/ecommerce-seo-services/`). Ours lacks the lead sentences and title links.
  - `leftIconBox` (AI section): live heading is "AI Search Optimization: Get Cited in AI Overviews, ChatGPT, Perplexity & Gemini (GEO/AEO)" with a rewritten 2-paragraph intro (incl. links to AEO + AI SEO services). Live also has **two extra items** ours lacks: "Answer-First Content Built for Citation" and "Brand-Mention & Entity Authority Building".
  - `infoBoxTertiary` subtitle: live "professional SEO agency in USA" (bold) vs ours "professional SEO services USA"; and item "Long-Term ROI…" last sentence differs (live: "Explore how our team implements this ROI in our content marketing services").
  - `checkList` ("Why Choose…"): live item "SEO-Led, Revenue-Focused" vs ours "SEO-Only Specialization" (different title AND body); Clutch rating differs — live "5-star", ours "4.9-star".
  - `tableSeoPlans`: heading/label rewritten (live "Professional SEO Services Pricing" + 2 pricing paragraphs; ours "SEO Pricing Plans Customized For Your / Business Success"; planLabel "CUSTOM SEO PLANS" vs "CUSTOM PROFESSIONAL SEO PLANS"); team-size claim differs — features list ours "50+" vs live "20+" (note: ours is internally inconsistent — its own Consultation item says "20+"); Consultation body "expert SEO agency" (live) vs "eCommerce SEO experts" (ours).
  - `checkListSecondary` AI tools: live appends ", Claude, Open AI, n8n, Gemini etc." to the "AI-Powered Content & Optimization" list; ours ends at "SurferSEO".
  - FAQ answers match; two answers (Q1 tools, Q3 pricing) carry inline bold / an extra PPC-page link on live not represented in ours' plain-string answers.
- **Extra sections kept:** none (no ours-only sections found)


---

# Category: dm-b

# Digital-Marketing batch B — text-fidelity audit vs LIVE

Audited per-page prose only (banner, titles, paragraphs, icon/info-box & card items,
process steps, plainText, CTA sentences, FAQ). Common sections, media paths, and
button-label casing ignored.

## ppc-management-services
- **Fetch:** ok
- **Fixes applied:**
  - plainText para 1 — bolded "PPC experts" (live wraps it in `<strong>`); string converted to parts array `["Our ", { bold: "PPC experts" }, " have been providing…"]`. Renderer supports `{ bold }`.
  - FAQ "Why is PPC management service important?" — added the missing link on "Search Engine Optimization" → `/seo-search-engine-optimization/` (answer string → parts array). `FaqAccordion.answer` supports parts.
- **Flags (review):**
  - checkList "Why Work With Us?" carries a `subtitle` ("We are a Google-certified SEO agency in the USA… long-term growth and sustainable results…") that does **not** appear anywhere on the live page (0 occurrences in live HTML). Extra-in-ours, and reads oddly ("SEO agency" on a PPC page). Left as-is (no-delete rule).
- **Extra sections kept:** none

## conversion-rate-optimization-services
- **Fetch:** ok
- **Fixes applied:**
  - seoAuditForm title — "SEO Audit Report Now!" → "CRO Audit Report Now!". Live mid-page form reads "Get Your FREE CRO Audit Report Now!" and the banner formTitle in our own file already says CRO; "SEO" was a copy-paste leftover.
  - topIconBox subtitle link — href "/digital-marketing-service/" → "/digital-marketing-analytics-reporting-services/" (anchor "Digital marketing reporting agency"; live links to the analytics-reporting page). Anchor text unchanged.
- **Flags (review):**
  - topIconBoxSecondary "CRO for Different Business Models" has a `subtitle` that duplicates the infoBox subtitle ("As a business that's striving to grow…"). Live renders that text **once** (under infoBox "Why Businesses Need…"); topIconBoxSecondary has no subtitle on live. Duplicate/extra in ours.
  - FAQ Q3 "What tools and methods…": on live the sentence "User research, website analytics, UX/UI design optimization, and landing page optimization…" comes **after** the bulleted list; in ours it's embedded in `answer` (renders before the list). Same words, different order — renderer always places answerList after answer, so exact live order needs restructuring. Minor.
  - Live typos where OURS is cleaner (deliberately NOT changed): "At IceCube Digitals" (plainText para 3, stray 's'); "WE analyse" (topIconBox Usability item, all-caps WE); "these nights" → should be "insights" (processSteps step 3 — ours correctly says "insights"); "Wth such transparent reporting" (leftIconBox Transparent Reporting — ours "With").
- **Extra sections kept:** none

## email-marketing-company
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Bold lead-in labels appear on live but are plain in ours, in list types whose renderers can't take inline bold (left as-is, not restructured):
    - information card "1. Welcome Emails" ul — live bolds "**Timing:**", "**Content:**", "**Personalization:**". `ServicesInfoSection` ul supports a `{ title, text }` bold lead-in, but not the sanctioned inline `{ bold }`, and no existing data file uses `{ title, text }` here — flagged rather than introducing an unexercised shape.
    - FAQ "What are the Different Types of Drip Marketing Campaigns?" answerList — live bolds "**Top-of-Funnel Drip**", "**Educational Drip**", "**Re-engagement Drip**"; ours plain and uses " : " spacing vs live "Drip:". `FaqAccordion.answerList` renders plain strings only — no bold possible without a renderer/schema change.
    - FAQ "What new AI trends are coming to email marketing?" answerList — live bolds "**Sentiment-aware personalization:**", "**Predictive customer journey mapping:**", "**Agentic AI:**"; ours plain. Same answerList limitation.
  - All other prose (banner, plainText, 12 topIconBox items, checkList, 7 leftIconBox items incl. WooCommerce/Klaviyo links, 10 information cards, 20 FAQs) matches live.
- **Extra sections kept:** none

## hire-seo-experts
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):** none. Banner, caseStudy subtitle, plainText, all 6 topIconBox items (incl. inline links to /technical-seo-services/, /on-page-seo-services/, /local-seo-services/, /seo-search-engine-optimization/), 5-step processSteps, 6 infoBox items, 4-step processStepsSecondary, 3 information cards, and 6 FAQs all match live. (cta heading casing differs by text-transform only — ignored.)
- **Extra sections kept:** none


---

# Category: shopify-a

# Shopify Service Pages — Text-Fidelity Audit (batch A)

Audited per-page prose only (banner, titles, paragraphs, icon/info-box & card items,
process steps, plainText, CTA sentences, FAQ). Common sections, media paths, and
button-label casing were ignored. Known-global diffs omitted (e.g. live banner phone
label is prefixed "Or Call Us +91…" on every page vs our "Call Us +91…"; H1 casing
differences from CSS text-transform).

No fixes were applied on any page: every divergence is either a whole-section
structural difference, a business-data value (price/label), an ambiguous editorial
wording change, or a card-title link design difference — none met the "safe &
unambiguous" bar. All matching sections were faithful (item counts, bodies, inline
links, and bold all verified).

## shopify-development-services
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Banner H1: live = "**Best** Shopify Development Company"; ours = "Shopify Development Company" (missing word "Best"; possibly an intentional drop of the superlative).
  - Banner checklist item: live = "**Up to** 40% conversion uplift for optimized stores"; ours = "**Avg.** 40% conversion uplift…" — different claim (max vs average), not a typo.
  - Live has a section our slot does not: **"What Does a Shopify Development Company Do?"** (intro Q&A paragraph after the portfolio). Our corresponding slot holds a different `plainText` ("AI-Driven Shopify Development for Scalable Growth").
  - Whole section on live, missing from ours: **"Shopify or Shopify Plus: Which Is Right For You?"** (comparison table).
  - Whole section on live, missing from ours: **"The Shopify Stack We Build In"** (bulleted stack list).
  - Whole section on live, missing from ours: **"Is Shopify the Right Choice for Your Business?"** (para + benefits line).
  - Note: page has clearly diverged intentionally on both sides — do not auto-port live's sections; treat as an editorial decision.
- **Extra sections kept (in ours, not on live):**
  - `plainText` — "AI-Driven Shopify Development for Scalable Growth"
  - `information` — "Additional Information" (Shopify AI / Magic / Sidekick cards + comparison tables)
  - `plainTextSecondary` — "Let's Build a Shopify Store That Actually Performs"

## shopify-website-design
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):** none (full text match; only trivial H1/CTA casing, ignored)
- **Extra sections kept:** none

## shopify-plus-development-agency
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):** none (full text match)
- **Extra sections kept:** none

## hire-shopify-plus-developers
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Banner CTA label: live = "Connect with Experts"; ours = "Send me a proposal" (4 of 5 pages use the generic "Send me a proposal"; live is page-specific here). Left as-is — possibly an intentional design-system default; confirm before changing.
  - Whole section on live, missing from ours: **"Hire Dedicated Shopify Plus Developers from Icecube Digital"** — intro paragraph + 10-item service list (Responsive Design, UX/UI Design, Custom Theme Development, Checkout Customization, Scripts and Functions, API Integration, CRM Integration, B2B Solutions, Store Optimization, Performance Enhancement). Sits after processSteps, before FAQ.
  - Design/link diff: live renders the `topIconBox` service-card **titles as hyperlinks**, several to real internal pages (Shopify Plus Theme Development → /shopify-plus-development-agency/; Shopify Maintenance and Support → /shopify-plus-support-and-maintenance-services/; Shopify Troubleshooting → /shopify-maintenance-services/; Shopify SEO Optimization → /shopify-seo-service/; others → "#"). Ours are plain titles. Body text matches; our schema has no linked-title precedent, so not auto-added.
- **Extra sections kept:** none

## shopify-plus-seo-services
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Whole section on live, missing from ours: **"Fuel your SEO Strategy with Shopify Plus SEO Experts"** — 3 paragraphs (opens "95% of Shopify stores fail to survive…") + "Request a free quote" CTA. Sits between the SEO-audit form and the achievements/ratings block.
  - `tableSeoPlans.planLabel`: ours = "CUSTOM White Label SEO PLANS"; live = "CUSTOM SHOPIFY PLUS SEO PLANS". "White Label" looks like leftover boilerplate on a Shopify Plus page, but see next item — the whole pricing block differs, so treat together, don't edit label in isolation.
  - `tableSeoPlans.price`: ours = "500 / Monthly"; live = "Starting at $599 / Monthly". Price value differs (500 vs 599). Flagged rather than edited — pricing is high-stakes; confirm the intended figure.
  - `tableSeoPlans` "Consultation Services" body: ours = "Our **eCommerce SEO** experts can also manage…"; live = "Our **Shopify Plus SEO** experts can also manage…". Minor wording; live is more on-brand for the page.
  - Design/link diff (minor): live links some `leftIconBox` card titles, incl. "Advanced Analytics and Reporting" → /magento-maintenance-services/ (looks like a wrong link on live). Ours has no title links — arguably cleaner; no action.
- **Extra sections kept:** none


---

# Category: shopify-b

# Shopify batch B — headless vs LIVE text-content fidelity audit

**Global (applies to all 5 pages, not repeated per page):**
- Banner `phoneLabel` is `"Call Us +91 9106060593"` in ours vs live `"Or Call Us +91 9106060593"` on every page — banner template, left as-is.
- Out-of-scope per instructions and NOT flagged below: button-label casing / trailing `!` / `&`-vs-`and`, heading title-casing (incl. "eCommerce" vs live "E-commerce"), and all common sections (portfolio/case-study cards + metrics + single testimonial, achievements/stars, Countries We Serve, form field labels, CEO CTA).

---

## shopify-plus-support-and-maintenance-services
- **Fetch:** ok (355 KB)
- **Fixes applied:** none — banner, plainText, topIconBox (7 items), infoBox (6), leftIconBox (7), processSteps (4), cta, pricing table, leftIconBoxSecondary (4) and FAQ (9) all match live.
- **Flags (review):**
  - Banner CTA: ours `"Send me a proposal"` vs live `"Connect with Our Experts"` — **this page only** (pages 2–5 live also say "Send me a proposal"). CTA button, href `#`; left as-is.
  - plainText CTA: ours `"Request a Demo"` vs live `"Request a free quote"`.
  - Banner heading: ours "…Support **And** Maintenance…" vs live "…Support **and** Maintenance…" (trivial casing).
- **Extra sections kept:** none

## hire-shopify-developers-experts
- **Fetch:** ok (399 KB)
- **Fixes applied:** none — banner, plainText (3 paras), topIconBox (11 items + 2 links), imageText, imageTextSecondary, leftIconBox (6), infoBox (9), leftIconBoxSecondary (4), cta, information (4 cards incl. table), FAQ (14) all match live.
- **Flags (review):**
  - imageText "Why Hire Certified Shopify Experts?" paragraph: live bolds **"certified Shopify experts,"**; ours is plain text. Renderer supports `{ bold }` in array-form paragraphs, but left unedited (would require converting a ~90-word single-string paragraph into a parts array — low value, transcription risk). Suggested split: `["…it is always good to hire ", { bold: "certified Shopify experts," }, " someone who has experience …"]`.
  - topIconBox card titles: live hyperlinks 5 titles (Shopify Website Design→`/shopify-website-design/`, Support & Maintenance→`/shopify-plus-support-and-maintenance-services/`, Shopify Troubleshooting→`/shopify-maintenance-services/`, Shopify SEO Optimization→`/shopify-seo-service/`, Shopify Plus Development→`/shopify-plus-development-agency/`). Our topIconBox item model has no title-href field (renderer emits title as plain `<h3>`); item bodies all match.
  - "information" section header: ours eyebrow/title "Additional Information" vs live ToC label "Guide Highlights" (the 4 cards themselves match).
- **Extra sections kept:** none

## hire-shopify-website-designers
- **Fetch:** ok (375 KB)
- **Fixes applied:** none — banner, plainText (3), imageText, leftIconBox (6), topIconBox (9), infoBox (6), processSteps (6), topIconBoxSecondary (6), infoBoxSecondary (4), cta and FAQ (5) all match live.
- **Flags (review):**
  - topIconBox card title "Custom Shopify Theme Design" is hyperlinked to `/shopify-website-design/` on live; not representable in our topIconBox item model (body matches). Same structural limitation as page 2.
- **Extra sections kept:** none

## shopify-seo-service
- **Fetch:** ok (399 KB)
- **Fixes applied:**
  - infoBox item: "…need **through** SEO support…" → "…need **thorough** SEO support…" (clear typo; live confirms "thorough").
  - infoBox item: "…Shopify SEO **Agnecy**…" → "…Shopify SEO **Agency**…" (clear misspelling).
- **Flags (review):**
  - Banner heading: ours "Shopify SEO Services" vs live "**Result-Driven** Shopify SEO Services" (confirmed in live HTML). Left unedited (H1; meta title also omits it — possibly intentional).
  - tableSeoPlans `planLabel`: ours "CUSTOM **White Label** SEO PLANS" vs live "CUSTOM **SHOPIFY** SEO PLANS" — looks like a white-label template leftover on a customer-facing page. Recommend changing to "Shopify"; flagged (business-facing label).
  - tableSeoPlans `price`: ours "**500**" vs live "**599**" ($/Monthly). Pricing discrepancy — review.
  - plainText para 2: live bolds **"Shopify SEO agency"** and reads "having **14+**years of experience"; ours is plain and omits "14+". Left unedited (prose; number may be an intentional removal — but note checkList still says "14+ years").
  - plainText para 1 link href: ours `/ecommerce-website-development-services/` vs live `/ecommerce-website-design-services/` (anchor "eCommerce website"). Ambiguous — both are plausible internal pages; left as-is.
  - infoBox item: ours "We're **transforming** to Shopify…" vs live "**transitioning**" (wording; ours reads fine after the through→thorough fix).
  - infoBox item link href: ours "Shopify developers"→`/hire-shopify-developers-experts/` (a valid page in this repo = page 2) vs live `/hire-shopify-designers-developers/`. Ours points to a valid internal page — left as-is (ours is arguably more correct).
  - tableSeoPlans "Consultation Services" body: ours "Our **eCommerce** SEO experts" vs live "Our **Shopify** SEO experts".
  - topIconBox "Complete Technical SEO" title hyperlinked to `/technical-seo-services/` on live; not representable in item model (body matches).
  - Item ORDER differs in leftIconBox ("Strategies for Maximizing…") and infoBoxSecondary ("Best Practices…") — all items present; not reordered (per instructions).
- **Extra sections kept:** `information` — the "Shopify AI SEO" block (5 cards: [card1] "What is a Shopify Expert?", "Our Shopify AI SEO Solution", "Key Benefits of Our Shopify AI SEO Services", "What Makes Shopify SEO Challenging?", "Results You Can Expect"). **Not present on the live page** (0 matches for distinctive phrases in live HTML). Also, card 1's title "What is a Shopify Expert?" does not match its AI-SEO body (copy-paste from the developers page). Kept, untouched.

## shopify-maintenance-services
- **Fetch:** ok (440 KB)
- **Fixes applied:** none — banner (3 paras), plainText, topIconBox (6), leftIconBox (8 industries), processStepsSecondary (4), the 3 hiring-model imageText blocks, topIconBoxSecondary (6), leftIconBoxTertiary (7), processSteps (7), cta, pricing table, information (6 cards) and FAQ (10) all match live.
- **Flags (review):**
  - plainText CTA: ours `"Request a Demo"` vs live `"Request a free quote"` (same as page 1).
  - **Our copy is cleaner than live** — the live page has homoglyph contamination (Cyrillic `е`/`а` mixed into many headings & paragraphs), a stray "We will update." fragment inside the "Theme and Design Updates" body, a duplicated "04 Fashion" card, and a "4. . Regular Monitoring…" numbering glitch. Ours is the correct/clean text; no action taken (would be regressions).
- **Extra sections kept:** none

---

### Net edits
Only 2 edits, both in `lib/services/shopify/shopify-seo-service.js`: "through"→"thorough" and "Agnecy"→"Agency". No media, ordering, or common sections touched.


---

# Category: industry

# Industry Pages — Text-Content Fidelity Audit

Audited 5 headless industry data files against the LIVE WordPress pages. Only per-page prose compared; common sections (portfolio/case-study cards+metrics+single testimonial, achievements, Countries We Serve, form labels, CEO CTA), media paths, and button casing ignored. Fetches all succeeded (>390 KB each).

Overall: fidelity is very high. Every banner, title, paragraph, icon/info-box item, card, process step, imageTextBlock, CTA sentence, and FAQ matched (including all inline links and structural bolds). The only real gaps are a set of live SEO keyword **inline bolds** that our data dropped — 3 safely restored (automotive), the rest un-restorable without component changes (flagged).

---

## jewelry-website-design-development
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Live has minor typos where OURS is already cleaner (no action): infoBox "Mobile-Friendly" body reads "This is why; **O**ur jewelry website designers…" on live vs our correct "This is why, our…"; payment-terms FAQ reads "**I**t will be monthly…" on live vs our lowercase "it will be monthly…".
- **Extra sections kept:** none

## furniture-website-design-development
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Missing inline bolds present on live but plain strings in our data — NOT applied because the target component cannot render them (`ServicesLeftIconBoxSection.renderParts` has no `bold` branch; `topIconBox` singular `subtitle` is rendered raw, not through `renderParts`). Applying `{ bold }` there would render a broken `<a>` or crash. Needs a component change if desired:
    - `leftIconBox` → "Performance Optimization" body: live bolds **"online store development for furniture businesses"**.
    - `leftIconBoxSecondary` subtitle: live bolds **"best furniture website designer"**.
    - `topIconBox` subtitle: live bolds **"furniture store website design"**.
  - Live FAQ has copy-paste errors where OURS is already correct (no action): live Q1 "our **jewelry** website design team", Q3 "warranty on **Jewelry** websites", Q9 "designing **jewelry** websites" — our file correctly says "furniture" in all three.
  - Note (ignored common section): data key `caseStudy` titles the block "Case Studies" but live labels it "Our Portfolio" and its subtitle says "each Portfolio is a testament". This lives inside the ignored portfolio/case-study common section, so not edited — flagged only for cross-page naming consistency (jewelry/automotive/fashion use `portfolio`/"Portfolio").
- **Extra sections kept:** none (all present on live, including `imageTextBlocksSecondary`)

## blinds-website-design-development
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Note (ignored common section): same `caseStudy` "Case Studies" vs live "Our Portfolio" naming as furniture — not edited, flagged only.
- **Extra sections kept:** none

## automotive-website-design
- **Fetch:** ok
- **Fixes applied:**
  - Restored 3 missing inline SEO bolds by converting plain-string bodies to `{ bold }` parts arrays (matches file style; verified `ServicesTopIconBoxSection` renders `part.bold` as `<strong>`; `node --check` passes):
    - `topIconBox` → "Maintenance and Support" body: **"automotive website developers"**.
    - `topIconBoxSecondary` → "Expand Customer Reach" body: **"automotive design agencies"**.
    - `topIconBoxSecondary` → "Improve the Customer Experience" body: **"automotive ecommerce website"**.
- **Flags (review):**
  - `topIconBox` subtitle: live bolds **"automotive web design services."** — NOT applied because singular `subtitle` is rendered raw (an array would break). Needs component/structure change (e.g. move to `subtitles` array) if desired.
  - Live typo in `topIconBoxQuaternary` → "Ecommerce Stores" body: live reads "…WooCommerce **or or** any other eCommerce platform…"; our file already correct ("…or any other…"). No action.
- **Extra sections kept:** none

## fashion-website-design
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - The 3 FAQ keyword bolds ("fashion web design company", "website design for clothing", "clothing development company") are already present as `{ bold }` in our data. On live they render run-together with the next word (e.g. "company**specializes**") due to a missing space in the source; ours has correct spacing. No action.
- **Extra sections kept:** none

---

### Cross-cutting note
Live WordPress pages carry SEO keyword inline-bolds that the headless port dropped inconsistently (some preserved, e.g. furniture "Drupal Commerce" and all fashion FAQ bolds; many others dropped). Restoring the rest is blocked in `leftIconBox*` bodies and singular `subtitle` fields because those render paths don't support a `bold` part. If full fidelity is wanted, add a `part.bold` branch to `ServicesLeftIconBoxSection.renderParts` and either route `subtitle` through `renderParts` or migrate those to the array-capable `subtitles` field — then the 4 flagged bolds (furniture ×3, automotive ×1) can be added safely.


---

# Category: woo-webflow

# WooCommerce / Webflow service pages — text-fidelity audit vs LIVE

Audited per-page prose against the live WordPress site. Common sections (portfolio/case-study cards + metrics + single testimonial, achievements/stars, "Countries We Serve", form labels, CEO CTA), all media/icon paths, and button-label casing were ignored. Two known-global diffs (banner "Or Call Us…" vs "Call Us…", button-label casing) omitted throughout.

---

## woocommerce-development-services
- **Fetch:** ok
- **Fixes applied:**
  - infoBox "Enticing Designs" body — added missing bold on **WooCommerce development agency** (converted string → parts array; supported field).
  - infoBox "SEO Friendly" body — added missing bold on **WooCommerce development services** (converted string → parts array; supported field).
- **Flags (review):**
  - infoBox title: ours "eCommerce Success" vs live "E-Commerce Success" (title = raw string; ours is brand-consistent with rest of page — left as-is).
  - Heading title-case vs live sentence-case (systematic design normalization, not edited): infoBox item titles "On-Time Delivery"/"Forward-Thinking Management" (live "On-time"/"Forward-thinking"); infoBoxSecondary title "Challenges And Solutions" (live "and"); cta.text title-cased vs live sentence-case.
- **Extra sections kept:** none

## hire-woocommerce-developers-experts
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - topIconBox item titles are hyperlinks on live but plain text in ours (title = raw string; needs a component change to render linked titles): "WooCommerce Website Design" → /wordpress-website-design-company/, "WooCommerce Website Development" → /woocommerce-development-services/.
  - checkListSecondary: all 5 benefit texts present and identical, but the left/right column split & order differ from live (cosmetic; reordering avoided).
- **Extra sections kept:** none

## woocommerce-seo-service
- **Fetch:** ok
- **Fixes applied:**
  - tableSeoPlans planLabel: "CUSTOM White Label SEO PLANS" → "CUSTOM WooCommerce SEO PLANS" (wrong-context term; live obviously right on a WooCommerce SEO page).
- **Flags (review):**
  - tableSeoPlans price: ours "500" vs live "599" (renders "$599 / Monthly"). Business/pricing value — flagged for human confirmation, NOT auto-edited.
  - tableSeoPlans "Consultation Services" body: ours "Our eCommerce SEO experts" vs live "Our Woocommerce SEO experts" (ambiguous wording; not edited).
  - cta.text: live has a double-question-mark typo ("…Business Will Get??"); ours is cleaner with single "?" — kept ours.
  - banner heading: ours "Award-Winning" vs live "Award-winning" (casing; design).
  - infoBoxTertiary: live shows several best-practice titles in inconsistent ALL-CAPS (e.g. CHOOSE RELEVANT KEYWORDS, USE SEO-FRIENDLY URLS, MONITOR AND ANALYZE); ours normalized to Title Case (cleaner) — not changed.
- **Extra sections kept:** none

## webflow-development-agency
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - leftIconBox item titles are wrapped in empty `href="#"` anchors on live (Affordable Pricing, Fast Turnaround, Certified Webflow Experts, etc.) — placeholder anchors with no real target; ours renders plain titles. No action needed.
  - Minor heading title-case vs live sentence-case (design): plainText title "Tailored To Your Needs" (live "to"), plainTextSecondary "With Any" (live "with"), cta.text.
- **Extra sections kept:** none

## webflow-maintenance-services
- **Fetch:** ok
- **Fixes applied:**
  - topIconBox "SEO support" body — link href corrected: "technical SEO modifications" pointed to /seo-search-engine-optimization/, live points to /technical-seo-services/ (href fixed inside existing parts array).
  - leftIconBox "In-House Design & Dev Team" body — link href corrected: "Webflow developers" pointed to /webflow-development-agency/, live points to /hire-webflow-developers/ (href fixed inside existing parts array).
- **Flags (review):**
  - topIconBox subtitle: ours carries "Webflow offers powerful customization options, an intuitive visual editor…" which is NOT on live for this page and is duplicated verbatim from the webflow-development-agency page. Recommend removing to match live (kept, not deleted — conservative).
  - plainText: ours merges two paragraphs that live renders as two separate paragraphs (split at "…industry standards." | "Besides, with Webflow's monthly maintenance plans…"). Identical text; cosmetic paragraph-break difference; not edited.
  - topIconBox "Priority Support" body: live has "24 24-hour turnaround time" (duplication typo); ours cleaner "24-hour" — kept ours.
  - processSteps heading: ours "How Our Webflow Maintenance Process Works" vs live "How Our Webflow Maintenance Works?" (ours adds "Process", drops "?"; eyebrow/title raw-string fields; ambiguous — not edited).
  - topIconBox item titles wrapped in empty `href="#"` anchors on live — no action.
  - cta.text title-case vs live sentence-case — design.
- **Extra sections kept:** topIconBox subtitle (extra vs live; duplicated from webflow-development page — see flag above).

## hire-webflow-developers
- **Fetch:** ok
- **Fixes applied:**
  - leftIconBox ("Advantages of Using Webflow as Your Website Platform") — added missing section subtitle present on live but absent in ours: "Webflow stands out as a powerful platform for building responsive websites…make it an ideal choice for businesses aiming for growth." (supported plain-string subtitle field).
- **Flags (review):**
  - topIconBox item titles are REAL hyperlinks on live but plain text in ours (title = raw string; needs component change): "Webflow Development" → /webflow-development-agency/, "Conversion Rate Optimization" → /conversion-rate-optimization/.
  - topIconBox other item titles wrapped in empty `href="#"` anchors — no action.
  - cta.text: ours has a casing inconsistency "…Represents Your brand –" (lowercase "brand" amid otherwise Title Case); live is all sentence-case. Design/minor — not edited.
  - faq answer "highly skilled wWebflowdevelopers" typo appears on BOTH live and ours (faithful reproduction) — no action.
- **Extra sections kept:** none

---

### Notes on renderers verified
- topIconBox / infoBox / plainText item `body` and plainText `paragraphs`/blocks render parts arrays with both `{ bold }` and `{ text, href }` support.
- leftIconBox item `body` renders parts arrays but supports links only (no bold); `subtitle` renders as a plain string (or array).
- Item `title`, singular `subtitle` (as raw string), `footerNote`, tableSeoPlans `planLabel`/`price` all render as raw strings — string-value fixes are safe there, but string→parts conversion is not (hence linked-title cases are flagged, not edited).


---

# Category: white-label

# White-Label Service Pages — Text-Content Fidelity Audit

Audited 6 headless service pages against the LIVE WordPress site. All 6 fetches OK (all > 350 KB). 3 safe fixes applied; everything else flagged for review. Conservative: no media, no reorders, no deletes.

## Global / systematic diffs (omitted from per-page flags)
- **Banner phone label:** data renders "Call Us +91 9106060593"; live shows "Or Call Us …". Identical on all 6 pages (template element).
- **CTA button styling:** many CTA labels differ only by a trailing "!" or Title-Case vs sentence-case (e.g. "Schedule a Meeting Today" vs live "…Today!", "Request a Demo" vs "Request a Demo!"). Treated as button-label styling per scope.
- **CTA hrefs "#":** most section/card CTAs use href `"#"` in data where live points to `/contact-us` or an in-page anchor — consistent headless convention (form triggers). Not changed.
- **Verified URL consolidations (NOT bugs, no change):** data links to *existing* headless routes where live uses a slug that is **not registered** in `lib/services/index.js`:
  - p1 leftIconBox `/wordpress-maintenance-service/` (live `/website-maintenance-service/`)
  - p4 SEO topIconBoxSecondary `/seo-search-engine-optimization/` (live `/local-seo-services/`)
  - p5 PPC plainText `/digital-marketing-service/` (live `/digital-marketing-analytics-reporting-services/`)
  Data is correct for headless routing.

---

## white-label-web-design-and-development-services
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - `cta.text` — casing/dash only: data "…Under Your Brand-Explore…" (Title-Case, hyphen) vs live "…under your brand—explore…" (sentence-case, em-dash). Words identical.
  - `processSteps.ctaLabel` "Schedule a Meeting Today" vs live "…Today!" (systematic "!").
- **Extra sections kept:** none

## white-label-magento-development
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - `topIconBoxSecondary` — 4 item **titles are hyperlinks on live**, plain text in data (item `title` renders raw — needs a component change to support linked titles): "Magento Store Design"→`/magento-website-design/`; "Magento Store Development"→`/magento-development-services/`; "Magento Migration"→`/magento-2-upgrade-and-migration-services/`; "Magento Maintenance and Support"→`/magento-maintenance-services/`.
  - `processSteps.subtitle` — data has "We follow a clear, structured process…" but **live shows NO subtitle here**. Extra sentence in ours (appears copied from the web-design page). Not deleted — flag.
  - `processSteps` steps — live prefixes titles "Step 1:"…"Step 5:"; data omits the "Step N:" prefix.
  - `faq` eyebrow — live is corrupted "Dеvеlopmеnt" (Cyrillic look-alike letters); ours is clean "Development" (kept ours).
  - Minor casing (kept as-is): `cta.text` "Custom Pricing?" vs live "Custom pricing?"; `ctaSecondary.text` "Book a Call With Us Now!" vs live "Book a call with us now!"; plan name "PRO" vs live "Pro"; pricing "Bi-Weekly" vs live "Bi-weekly".
- **Extra sections kept:** none

## white-label-shopify-development
- **Fetch:** ok
- **Fixes applied:**
  - `checkListSecondary` "Increase Revenue Streams" body was truncated ("…without hiring in-house"); restored live's full text "…without hiring in-house experts."
- **Flags (review):**
  - `checkListTertiary.textContent` — **entirely different sentence.** Data: "We've helped businesses increase their revenue on an average by 90% in their first year with us!" Live: "We ensure seamless connectivity across your client's entire eCommerce ecosystem." (Not auto-changed: full-sentence replacement, verify intent.)
  - `infoBox.title` — data "Shopify Services"; live heading reads "…White Label Shopify **Development** Services" (word "Development" missing in ours). Title renders raw — verify intended shortening.
  - `topIconBoxSecondary` — 6 item **titles are hyperlinks on live**, plain in data (title renders raw): "Custom eCommerce Store Development"→`/shopify-development-services/`; "Shopify Redesign"→`/shopify-development-services/`; "Shopify App Integration"→`/shopify-development-services/`; "Maintenance & Optimization"→`/shopify-maintenance-services/`; "Platform Migration"→`/hire-shopify-developers-experts/`; "Shopify Plus & Enterprise"→`/hire-shopify-website-designers/`. Also data title "Custom **E**commerce…" vs live "Custom **eC**ommerce…" (casing).
  - `faq` eyebrow — live corrupted "Dеvеlopmеnt" (Cyrillic); ours clean (kept ours).
  - Minor: `processSteps.title` "Partnership Works?" (live has no "?"); `plainText.title` odd casing "Shopify Theme For better sales?" vs live "…for better sales?"; shared source typo "under your band" present in BOTH live and data — left as-is (matches live).
- **Extra sections kept:** none

## white-label-seo-services
- **Fetch:** ok
- **Fixes applied:**
  - `tableSeoPlans` Consultation Services body — corrected "Our **eCommerce** SEO experts…" → "Our **White Label** SEO experts…" (copy-paste error; live text and page context agree).
- **Flags (review):**
  - `tableSeoPlans.price` — data "500" (renders $500) but **live shows "Starting at $599 / Monthly"**. Pricing discrepancy — verify before changing (left as-is).
  - Whole-page: live SEO body copy renders with Cyrillic look-alike letters ("Whitе Labеl SEO Sеrvicеs" etc.); our data is clean Latin and correct — no change.
  - `topIconBoxSecondary` "Website Optimization Beyond Keywords" body link — data `/seo-search-engine-optimization/` vs live `/local-seo-services/`; data route is the valid headless one (see Global note). No change.
  - `faq` — live has errors ours already fixes: "How **do** Icecube…ensure" (live) vs "How does…"; "how can I **get start**" (live) vs "get started". Kept ours.
  - Minor: `plainTextSecondary.ctaLabel` "Request A Demo" vs live "Request a Demo!".
  - (Ignored per scope: achievements/stars header — data uses default "Our Achievements" while live shows "Our Top Ratings and Recognitions…"; achievements is a common/ignored section, but noting the inconsistency vs the other 4 pages which override it.)
- **Extra sections kept:** none

## white-label-ppc-services
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - `plainText` link href — data `/digital-marketing-service/` vs live `/digital-marketing-analytics-reporting-services/`; data route is the valid headless one (see Global note). No change.
  - Minor casing only: `plainText.ctaLabel` "Request A Free Quote" vs live "Request a free quote"; `cta.text`/`cta.ctaLabel` Title-Case vs live sentence-case; topIconBox item title "…Tailored Plans For Your Clients" vs live "…for your Clients"; `processSteps.ctaLabel` missing "!".
  - (topIconBoxSecondary & leftIconBoxSecondary item titles appear as `href="#"` links on live — no destination/content lost; not flagged.)
- **Extra sections kept:** none

## white-label-wordpress-maintenance-services
- **Fetch:** ok
- **Fixes applied:**
  - `processSteps` — added the intro `subtitle` present on live but missing from data: "To ensure the success of our clients, we, as a leading, white-label WP development agency, are always reading about the most recent news and updates in the field and have an intense passion for everything website-related. Find out more about our simple and fast wordpress maintenance white label process." (renderer-supported field; clearly missing content).
- **Flags (review):**
  - `caseStudy.title` "White **Lable** WP Maintenance Services…" — "Lable" typo, but **live has the identical typo**; left as-is for fidelity (flag for future cleanup).
  - Minor: `leftIconBox` item titles Title-Case vs live sentence-case (systematic); `cta` / `plainTextSecondary` / `processSteps` heading & CTA casing and trailing "!" diffs.
- **Extra sections kept:** none


---

# Category: our-approach

# Our-Approach Resource Pages — Text-Fidelity Audit vs LIVE WordPress

Audited 6 headless data files against live `icecubedigital.com` pages. Overall fidelity is very high — the prose, process steps, card items, inline links, and FAQ content match the live site almost verbatim. One real fix applied (page 4). Everything else is either already correct/cleaner in our files or a low-priority design-split artifact.

**Global note (all pages, omitted per-page):** The single-testimonial common section heading is `"Hear What Our Clients Have to Say!"` in our files, but live shows `"What Clients Say?"` on pages 2–6 (and `"Hear What Our Clients Have to Say!"` on page 1). This is the ignore-listed common testimonial section, so no action taken.

---

## my-marketing-agency-isnt-delivering-results
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):** Banner paragraph — live contains homoglyph corruption `"Whitе Labеl SEO Sеrvicеs"` (Cyrillic `е` characters). Our file has the clean ASCII `"White Label SEO Services"`. Ours is correct/cleaner — no action needed. All other prose (banner, plainText, 6 process steps, topIconBox 5 items, CTA, infoBox 4 items, FAQ 5 items) matches live verbatim, including inline links.
- **Extra sections kept:** none

## my-website-isnt-appearing-on-google
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):** none. Full match — banner (2 paras), checkList "Our Custom SEO Approach" (subtitle + 5 benefit items), all 7 process steps with `bodyList` + `bodyAfter`, and inline links (`local SEO services`, `eCommerce SEO`) all match live.
- **Extra sections kept:** none

## my-website-isnt-fueling-business-growth
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):** none. Full match — banner, checkList "Our Approach To Revenue Growth" (5 benefit items), processSteps subtitle + 6 steps with `bodyList`, and inline links (`WooCommerce SEO agency`, `SEO experts`) all match live.
- **Extra sections kept:** none

## why-my-website-isnt-converting
- **Fetch:** ok
- **Fixes applied:**
  - processSteps step 1 ("You're Not Optimizing for Every Stage of the Conversion Funnel"): the 3 `bodyList` items were missing the bold labels present on live. Converted plain strings to `{ bold }` parts (renderer-supported — `ServicesProcessStepSection` runs `bodyList` items through `renderParts`):
    - `[{ bold: "Top of the funnel (Awareness):" }, " Work on educational content…"]`
    - `[{ bold: "Middle of the funnel (Consideration):" }, " Create case studies…"]`
    - `[{ bold: "Bottom of the funnel (Decision):" }, " Optimize checkout pages…"]`
- **Flags (review):** processSteps heading — live reads `"5 Common Reasons for Low Conversion Rates (How Our Experts Solve Them!)"` (parentheses); our eyebrow/title split renders it as `"…Rates - How Our Experts Solve Them!"` ("(" → " - ", ")" dropped). Low priority — appears to be an intentional two-tone-heading adaptation, not an error. All other prose and the 5 steps (incl. inline links `Best SEO Company`, `Shopify SEO service`, `hire SEO experts`) match live.
- **Extra sections kept:** none

## why-is-my-website-traffic-going-down
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):** none. Full match — banner, plainText "Recover Your Website Traffic with Icecube Digital", processSteps subtitle + 5 steps with `bodyList`, and inline links (`Technical SEO`, `hired SEO expert`) all match live.
- **Extra sections kept:** none

## why-my-website-isnt-driving-leads
- **Fetch:** ok
- **Fixes applied:** none
- **Flags (review):**
  - Step 4 body ("Missing or Ineffective CTAs") — live has corruption `"A call to action(C)A)"`; our file has the correct `"A call to action (CTA)"`. Ours is cleaner — no action needed.
  - plainText title — live `"Transform your Website into a Powerful Lead-Generation Tool"` (hyphenated compound); our eyebrow/title split (`"…Powerful Lead"` / `"Generation Tool"`) renders `"Lead Generation"`, losing the hyphen. Low priority — eyebrow/title split artifact.
  - processSteps heading — live `"Website Issues That Impact Lead Generation (and How to Solve Them)"` (parentheses); ours renders `"…Lead Generation and How to Solve Them"` (parens dropped). Low priority — same two-tone-heading artifact as page 4.
  - (Minor, ours cleaner: live uses hyphens where ours uses em dashes in a couple of spots — no action.)
  - All 5 steps with `bodyList` + `bodyAfter` and inline links (`WordPress SEO service`, `local SEO`) match live.
- **Extra sections kept:** none


---

# Category: pricing-a

# Pricing-Guide Headless-vs-Live Text Audit (batch A)

Audited 5 pricing-guide pages under `icd-headless/lib/services/resources/pricing-guides/`
against the live WordPress pages. Scope = per-page prose only (banner, titles,
subtitles, icon/info-box & card items, process steps, plainText, table text, CTA
sentences, FAQ). Common sections (metrics, single testimonial, achievements/stars,
Countries We Serve, form fields, CEO CTA), all media paths, and button-label casing
were ignored per instructions.

**Fetch note:** all 5 URLs returned HTTP **406** (Cloudflare WAF soft-status) but
served the **full ~285-310 KB real page** each time: correct `<title>`, the
`gdlr-core-page-builder-body` marker, zero hard-challenge strings ("Just a moment" /
"Attention Required" = 0), and the extractor produced 150-200 lines of clean prose.
The retry rule's <40000-byte guard (the challenge-page detector) passed decisively, so
the content is genuine and was audited; these are NOT fetch failures. Retrying was
skipped to avoid provoking a real block when complete content was already in hand.

**Renderer parts-support map** (determines fix-vs-flag):
- Convert-safe (uses `renderParts`): topIconBox/infoBox `item.body`, `subtitles[]`
  array items, plainText `paragraphs`/`parts`/`outro`/`listItems`, checkList
  `subtitle[]` & `textContent[]`, leftIconBox/processStep `item.body`+`bodyAfter`(arrays).
- Raw-rendered, NOT parts-capable (must flag): topIconBox/infoBox `item.bodyAfter`,
  singular `subtitle`, every `item.title`, checkList `benefits*` items, all table
  cells and table `subtitle` (`ServicesTableBasic` line 10 renders subtitle raw).

Net result: **no safe unambiguous fixes were applicable on any page** — all inline
links and in-body bold that live carries are already present as `parts`/`{bold}` in
our data. Remaining diffs are component-change / singular-field / cosmetic / or
live-typo-ours-cleaner cases, all flagged below.

---

## how-much-does-a-website-cost
- **Fetch:** ok (HTTP 406, full content — see fetch note)
- **Fixes applied:** none
- **Flags (review):**
  - `topIconBox.items[*].bodyAfter`: live renders the labels **bold** and on two lines
    ("**Suitable for:** …" / "**Approximate Cost:** …"); our `bodyAfter` is one plain
    string. `ServicesTopIconBoxSection.js` line 47 renders `bodyAfter` raw (no
    `Array.isArray`/`renderParts`), so bold cannot be added without a **component
    change**. Affects all 3 items (Fixed Cost, Hourly Model, Hire Developers).
  - Minor (ours cleaner, kept): live "Hourly Model" bodyAfter reads
    "Suitable for:Businesses" (missing space); our copy has the space.
- **Extra sections kept:** none

## how-much-does-seo-cost
- **Fetch:** ok (HTTP 406, full content)
- **Fixes applied:** none
- **Flags (review):**
  - `leftIconBox.subtitle` (singular string) concatenates what live shows as **3
    separate paragraphs** ("Your business goals…continuously." / "If you are launching…
    few items." / "When it comes to SEO…best fit for another."). Text is identical;
    only paragraph breaks are lost. Singular `subtitle` — flagged per "do not convert
    singular subtitle" rule (would need subtitle→array of 3).
  - Minor casing: `tableBasic.eyebrow` "…Gives You **The**" vs live lowercase "the".
  - Note (shared live typo, ours matches live so kept): `tableBasic.subtitle[1]`
    "The best SEO **piercing** models" — should be "pricing"; present identically on
    live, so left as-is for fidelity.
- **Extra sections kept:** none

## how-much-does-ppc-cost
- **Fetch:** ok (HTTP 406, full content)
- **Fixes applied:** none
- **Flags (review):**
  - Minor casing: `tableBasic.eyebrow` "…Gives You **The**" vs live "the";
    `plainTextSecondary.eyebrow` "Conclusion: Choosing **The** Right" vs live "the".
  - (infoBox `bodyAfter` "Costs associated: …" is plain on live too — matches, no bold
    flag here, unlike the website-cost page.)
- **Extra sections kept:** none

## how-much-does-email-marketing-cost
- **Fetch:** ok (HTTP 406, full content)
- **Fixes applied:** none
- **Flags (review):**
  - Minor casing: `plainText` heading "…Is Best **For** Your Budget?" vs live "for".
  - `tableBasic` Plan column: live separates the trailing note with " **|** "
    ("…emails/month **|** Free plan available"); our cells use ". " instead. 4 rows
    (Klaviyo, MailChimp, Active Campaign, Constant Contact). Cosmetic separator diff in
    raw table cells.
  - `tableBasic` "Icecube Digital" row, Services cell: live lists 3 line-separated
    services (Campaign Design & Deployment / Email campaign Reporting / Campaign
    Monitoring & Reporting); our cell space-joins them into one string. Minor formatting
    (table cells are raw strings).
  - Note (ours cleaner, kept): FAQ Q4 live typo "free and **pain** email marketing";
    our copy correctly says "paid".
- **Extra sections kept:** none

## how-much-does-social-media-management-cost
- **Fetch:** ok (HTTP 406, full content)
- **Fixes applied:** none
- **Flags (review):**
  - Banner: live page does **not** render the "Or Call Us +91 9106060593" phone line
    that our `banner.phoneLabel`/`phoneHref` includes (that line IS present on the other
    4 pages). Likely shared banner boilerplate / a live-side omission — NOT deleted from
    our data (single-page evidence, conservative). Observation for review.
  - Minor casing: `tableBasic.eyebrow` "Comparing Costs – Which One **Is**" vs live "is".
  - `checkList.subtitle[2]` merges live's standalone lead-in paragraph ("Here's a list
    of services that we offer…") into the end of the preceding paragraph. Text present;
    paragraph break lost. Minor formatting (subtitle already an array; would split [2]).
  - Notes (ours cleaner, kept for fidelity to intended copy): tableBasic Cost/DIY cell
    "professional training**)**" — live is missing the closing paren; FAQ freelance-cost
    "$500 and **$ 1,000**" (live has stray space) vs ours "$1,000"; FAQ eCommerce
    "$2,000 and **$10,0000**" (live 5-zero typo) vs ours "$10,000".
- **Extra sections kept:** none

---

### Summary
- 5/5 fetched with full real content (all HTTP 406 soft-status, none a challenge page).
- 0 fixes applied — pages are high-fidelity; all live inline links & in-body bold are
  already represented as `parts`/`{bold}` in the data files.
- Recurring flags: (1) `bodyAfter` bold on website-cost needs a `ServicesTopIconBox`
  component change; (2) several singular `subtitle`/`checkList.subtitle` paragraph-break
  merges; (3) minor eyebrow/heading casing (The/the, Is/is, For/for); (4) email-cost
  table separator/line-break cosmetics; (5) social-media banner phone line absent on
  live. Several live typos left untouched because our copy is already correct.
- No sections missing from ours, and no extra (non-live) sections in ours.


---

# Category: pricing-b

# Pricing-guide audit (batch B) — text-content fidelity vs LIVE

Fetch note: every page returned HTTP **406** (the Cloudflare quirk flagged in the task), but each response still carried the **full, valid page HTML** (correct `<title>`, `gdlr-core-page-builder-body` present, no challenge markers, all >300 KB). Since the retry rule's guard is against blocked/challenge/short pages and these were complete real pages, they were treated as usable rather than re-hammered. All 5 = usable.

Renderer note: `components/services/ServicesFaqSection.js` renders `data.subtitle` as a plain `<p>` — so a FAQ `subtitle` string is renderer-supported (relevant to page 1).

Global/common diffs (portfolio cards+metrics, single testimonial, achievements/stars, Countries We Serve, contact form field labels, CEO CTA, `[email protected]` cloak links, media paths, button-label casing) were ignored per instructions.

---

## how-much-does-wordpress-seo-cost
- **Fetch:** ok (HTTP 406, full HTML served)
- **Fixes applied:**
  - Primary FAQ (`faq`, "Questions to Ask Before Hiring a WordPress SEO Expert") was missing the intro line that live shows between the title and the first question. Added `subtitle: "Asking these questions is important before hiring a WordPress SEO expert:"`. Renderer confirmed to support `faq.subtitle` (plain `<p>`); text is plain (no links/bold). Live's source reads lowercase "wordpress" — normalized to "WordPress" to match this file's house style and the section title (consistent with the codebase's "our copy may be cleaner than live" convention).
- **Flags (review):**
  - Live typo, ours already correct (no change): first FAQ answer on live reads "…backlink strategies with an expert,**t** so that it clarifies…". Our copy is clean ("…with an expert, so that…"). Kept ours.
  - Minor heading casing (singular eyebrow/title fields; likely CSS-normalized, not fixed): `leftIconBox.eyebrow` ends "…SEO Plan **For** Your" vs live "…for Your"; `tableBasic.title` "**The** Difference?" vs live "the Difference?".
- **Extra sections kept:** none

## how-much-does-shopify-seo-cost
- **Fetch:** ok (HTTP 406, full HTML served)
- **Fixes applied:** none
- **Flags (review):**
  - Minor heading casing (not fixed): `processSteps.eyebrow` "Sample Shopify SEO Packages **Or**" vs live "…Packages or".
  - `processSteps` step 4 "Add-On Pricing": ours bolds each label ("Blog Writing", "Technical Repairs", "Link Building") as 3 clean items; live does **not** bold these and merges "Technical Repairs…" + "Link Building…" onto one line. Ours is cleaner — no change; noted only.
  - (Trivial, not acted on) first three plan steps: live places the colon outside the bold ("**Pricing**:") while ours bolds "Pricing:" incl. colon — cosmetic only.
- **Extra sections kept:** none

## how-much-does-a-wordpress-website-cost
- **Fetch:** ok (HTTP 406, full HTML served)
- **Fixes applied:** none
- **Flags (review):**
  - Minor heading casing (not fixed): `tableBasic.eyebrow` "WordPress Development Cost **By**" vs live "…Cost by".
  - Otherwise a clean, faithful match (banner, all icon/info-box items, 4 tables, process steps, both in-body links, FAQ all verified).
- **Extra sections kept:** none

## how-much-does-magento-website-development-cost
- **Fetch:** ok (HTTP 406, full HTML served)
- **Fixes applied:** none
- **Flags (review):**
  - Missing link in a **singular subtitle** (per rules: flag, do NOT convert to parts). `processSteps.subtitle` reads "You can optimize the Magento 2 development cost…" as plain text; live links "Magento 2 development" → `/magento-2-development-services/`. Needs a component/field change to render inline links in a subtitle, so left for review.
  - All other content (banner incl. Magento 2 Development link, 9 factor items incl. 2 in-body links, cost-components, 13-row pricing table, hidden-costs, 6 process steps incl. step-6 link, "What Sets Icecube Digital Apart", 8 FAQs) matches faithfully.
- **Extra sections kept:** none

## how-much-does-shopify-website-cost
- **Fetch:** ok (HTTP 406, full HTML served)
- **Fixes applied:** none
- **Flags (review):**
  - Live content error, ours already correct (no change): `leftIconBox.subtitle` on the LIVE Shopify page says "IceCube Digital offers comprehensive **Magento** development services…" (copy-paste slip from the Magento page). Our data correctly says "**Shopify** development services." Kept ours — our copy is cleaner/correct.
  - Otherwise fully faithful (2 hiring/affects icon-box groups incl. link, Shopify vs Shopify Plus table, benefits incl. SEO-experts link, DIY-vs-expert table, 7 process steps, reduce-costs box, "What Sets Icecube Digital Apart" incl. link, closing plainText incl. link, 9 FAQs incl. the plan `answerList`).
- **Extra sections kept:** none

---

### Summary
- 5/5 pages fetched usable despite HTTP 406 (full HTML served each time; no retry needed).
- 1 safe fix applied: added the missing renderer-supported FAQ intro `subtitle` on **wordpress-seo-cost**.
- Everything else was flagged, not touched: 1 needs a component change (magento `processSteps.subtitle` inline link in a singular subtitle); 2 are cases where LIVE has an error and our copy is already cleaner (wordpress-seo FAQ typo; shopify-website "Magento"→should-be-Shopify subtitle); the rest are trivial heading-casing / bold-styling nuances.
- No extra (ours-only) sections found on any page; no whole live section missing from ours.
