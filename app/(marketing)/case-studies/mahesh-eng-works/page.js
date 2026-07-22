/**
 * Bespoke case study — Mahesh Eng. Works.
 *
 * WHY THIS IS A STANDALONE ROUTE (not the ACF-driven [slug] template):
 * This case study is a long-form, table-heavy layout (challenge matrix,
 * numbered 3.1–3.9 solution blocks, before/after comparison, analytics
 * screenshots) that does NOT map onto the caseStudiesFields ACF groups the
 * dynamic /case-studies/[slug]/ template reads. So its content lives HERE, in
 * code, faithfully ported from https://cms.icecubedigital.com/case-studies/mahesh-eng-works/.
 *
 * ROUTING: a literal route segment ("mahesh-eng-works") wins over the sibling
 * dynamic [slug] segment, so this file serves the URL automatically. The slug
 * is also filtered out of getAllCaseStudySlugs() (see lib/case-studies.js →
 * BESPOKE_CASE_STUDY_SLUGS) so the dynamic route does not double-prerender it.
 *
 * HYBRID CMS: the /case-studies listing card and this page's SEO metadata still
 * come from the CMS stub post (featured image, title, Yoast). Only the body is
 * local. Keep the WP post published, or the listing card and metadata vanish.
 *
 * IMAGES: downloaded into /public/assets/case-studies/mahesh-eng-works/ so the
 * page is self-contained and covered by the 30-day /assets cache header. To
 * refresh a screenshot, replace the file and purge Cloudflare for that path.
 */
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import CaseStudyBanner from "@/components/case-studies/CaseStudyBanner";
import CaseStudyTestimonials from "@/components/case-studies/CaseStudyTestimonials";
import YoastSchema from "@/components/common/YoastSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

const URI = "/case-studies/mahesh-eng-works/";
const LIVE_URL = "https://maheshengworks.com/";
const IMG = "/assets/case-studies/mahesh-eng-works";

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
    <path d={BTN_ARROW} />
  </svg>
);

// ---------------------------------------------------------------------------
// Content — ported verbatim from the CMS page.
// ---------------------------------------------------------------------------

const HERO = {
  eyebrow: "Mahesh Eng. Works",
  title: "From Traditional Manufacturing to Digital Excellence",
  subtitle: "How IceCube Digital Helped an Engineering Manufacturing Business Drive Digital Growth",
  body: "IceCube Digital redesigned and restructured the Mahesh Eng. Works website, maheshengworks.com, transforming an outdated product listing website into a modern, SEO-optimized lead generation platform that reflects the scale and credibility of a trusted dairy equipment manufacturer serving 5,000+ businesses across 25+ countries.",
  stats: [
    { value: "5,000+", label: "Businesses Served" },
    { value: "25+", label: "Countries Reached" },
    { value: "18+", label: "Product Categories" },
  ],
  image: `${IMG}/Engagement-Summary.png`,
};

const ABOUT = [
  "Mahesh Eng. Works, operating under the proprietary brand name Milky Brand, is a Gujarat-based ISO-certified manufacturer and exporter of precision-engineered dairy processing machinery. Backed by decades of manufacturing expertise, the company supplies a comprehensive range of products: cream separator machines, bulk milk coolers, ghee clarifiers, butter churners, khoya machines, paneer-making machines, milking machines, and more to dairy farms, cooperatives, and food-processing businesses across India and 25+ countries globally.",
  "With a client base exceeding 5,000 businesses and export presence spanning South Africa, Sri Lanka, Russia, USA, Canada, and beyond, Mahesh Eng. Works is a significant player in India's dairy equipment manufacturing ecosystem. However, despite their manufacturing strength and global reach, their digital presence did not reflect the scale or credibility of the business.",
];

const NICHE = [
  "Dairy farms and cooperative societies (small to large scale)",
  "Milk chilling and processing units across India",
  "Food processing businesses requiring ghee, paneer, curd, and butter production equipment",
  "Export buyers and dairy equipment distributors",
  "Agricultural and rural development organisations",
];

const GOALS = [
  "Establish credibility as a trustworthy, ISO-certified manufacturer online",
  "Generate more qualified B2B enquiries through the website",
  "Increase online visibility among prospective buyers and distributors",
  "Create a structured, browsable product catalogue for 18+ product categories",
  "Outrank business directories like IndiaMART in Google search results.",
];

const CHALLENGES = [
  ["Outdated Website Structure", "The previous site lacked a logical information hierarchy and wasn't fully optimized for mobile users, making navigation difficult for both visitors and search engines.", "Poor user experience, reduced organic visibility, and weak first impressions for prospective buyers."],
  ["Weak Product Architecture", "Product categories were poorly organized with limited technical specifications, buyer-focused content, and product information.", "Buyers couldn't easily evaluate products, leading to missed inquiry opportunities and higher bounce rates."],
  ["Poor Trust Signals", "ISO certifications, export credentials, testimonials, and quality assurance elements were not prominently displayed.", "Lower buyer confidence and reduced credibility among distributors and international prospects."],
  ["Limited Lead Generation", "The website lacked dedicated inquiry forms, brochure downloads, WhatsApp integration, and a structured dealer enquiry process.", "Fewer conversion opportunities and missed B2B sales enquiries."],
  ["Dependence on Business Portals", "The business relied heavily on platforms like IndiaMART, where many enquiries were low-intent or irrelevant.", "Time spent filtering unqualified leads, lower sales productivity, and limited direct brand visibility."],
  ["Weak SEO Foundation", "Essential on-page and technical SEO elements were missing, along with a structured content strategy.", "Poor search visibility, limited keyword rankings, and fewer qualified organic visitors."],
];

// Numbered solution blocks. `image` optional; `bullets` optional.
const SOLUTIONS = [
  {
    num: "3.1",
    title: "Website Strategy & UX Architecture",
    body: "We began by mapping the complete buyer journey for B2B dairy equipment purchasers from initial product discovery to final inquiry submission. The strategy centered on three user personas: the Indian dairy farmer seeking entry-level equipment, the mid-size dairy cooperative evaluating multiple machines, and the export buyer or distributor seeking a trusted manufacturing partner.",
    image: `${IMG}/Architecture.png`,
  },
  {
    num: "3.2",
    title: "Navigation Restructuring",
    body: "The dual-navigation problem was resolved by implementing a clean, structured header navigation with mega-menu-style product category dropdowns. The secondary sidebar category panel was retained and redesigned as a contextual navigation aid specifically within product browsing flows. This streamlined the browsing experience and reduced navigation friction.",
    image: `${IMG}/Navigation-Restructuring.png`,
  },
  {
    num: "3.3",
    title: "UI Modernisation & Brand Alignment",
    body: "The Milky Brand visual identity was systemized across the entire site. Consistent logo usage in SVG format, uniform brand colors, professional typography hierarchy, and cohesive section design patterns were implemented to align the website with modern B2B web design best practices. Industrial imagery was curated, and product photography was presented in high-resolution galleries optimized for web performance.",
    image: `${IMG}/UI-Modernisation.png`,
  },
  {
    num: "3.4",
    title: "Product Architecture Overhaul",
    body: "More than 18 product categories were restructured using WooCommerce with enhanced product templates. Each product page was enriched with:",
    bullets: [
      "Technical specification tables",
      "Application and industry use-case sections",
      "Key features and highlights",
      'Prominent "Get Quote" CTA above the fold',
      "Downloadable brochure links",
      "Related products carousel for cross-sell discovery",
    ],
    image: `${IMG}/Product-Architecture.png`,
  },
  {
    num: "3.5",
    title: "Trust Signal Integration",
    body: "ISO certification badges, export credentials (25+ countries served), client statistics (5,000+ businesses), and manufacturing credentials were prominently integrated across the homepage, about page, and product pages. A dedicated testimonial section and quality assurance segment were introduced to address the trust deficit with prospective buyers.",
  },
  {
    num: "3.6",
    title: "Lead Generation Optimization",
    body: "A conversion-focused lead generation strategy was implemented:",
    bullets: [
      "'Get Instant Quote' and 'Get Quote' CTAs placed in hero, header, and product pages",
      "Dedicated Dealer Enquiry form page with specific fields for distributor/wholesale inquiries",
      "WhatsApp floating contact button for mobile-first lead capture",
      "Downloadable PDF brochure for product evaluation and lead generation",
      "Email addresses (info@ and sales@) in the header utility bar for immediate contact accessibility",
    ],
    image: `${IMG}/Generation-Optimization.png`,
  },
  {
    num: "3.7",
    title: "Content Architecture & SEO Infrastructure",
    body: "A content strategy was built around high-intent B2B keywords, supported by SEO-optimized product pages, price guides, and blog content to improve organic visibility. Price guide pages were developed as SEO landing pages (separate from the product catalog), and the blog was restructured with a proper taxonomy to support topical authority in the dairy equipment niche.",
    image: `${IMG}/SEO-Infrastructure.png`,
  },
  {
    num: "3.8",
    title: "Mobile-First Development",
    body: "The entire site was built mobile-first, with touch-friendly navigation, properly sized CTA buttons, fast-loading product images, and an inquiry form designed for completion on a smartphone. Given that the primary Indian market is predominantly mobile, this was a non-negotiable priority.",
    image: `${IMG}/First-Development.png`,
  },
  {
    num: "3.9",
    title: "Performance Enhancements",
    body: "Technical optimizations included image optimization, lazy loading, XML sitemap generation, schema implementation, canonical URL management, and analytics integration to improve search visibility and website performance.",
    image: `${IMG}/Performance-Enhancements.png`,
  },
];

const FEATURES = [
  ["Modern Navigation & Product Discovery", "Redesigned navigation with structured product categories, mega menu, and contextual sidebar for easy browsing.", "Helps buyers quickly find the right products and improves overall user experience."],
  ["Enhanced Product Pages", "Product pages were redesigned with technical specifications, applications, key features, brochures, and inquiry CTAs.", "Enables buyers to evaluate products easily and increases enquiry opportunities."],
  ["Trust & Brand Credibility", "Integrated ISO certification, export credentials, 5,000+ businesses served, and quality assurance elements across key pages.", "Builds confidence and strengthens the company's reputation among domestic and international buyers."],
  ["Conversion-Focused Lead Generation", "Added strategically placed Get Quote buttons, WhatsApp integration, downloadable brochures, and a dedicated Dealer Enquiry page.", "Creates multiple touchpoints for enquiries and improves lead generation."],
  ["SEO-Driven Content Strategy", "Developed SEO-friendly product pages, price guide landing pages, and a structured blog targeting high-intent industry keywords.", "Improves search visibility and attracts qualified organic traffic."],
  ["Mobile-First Experience", "Optimized the entire website for mobile devices with responsive layouts, touch-friendly navigation, and streamlined enquiry forms.", "Delivers a seamless browsing experience for mobile users and improves conversion rates."],
  ["Performance & Technical SEO", "Implemented image optimization, structured metadata, schema markup, XML sitemap, canonical URLs, and analytics integration.", "Enhances website performance, crawlability, and long-term SEO growth."],
  ["Dealer & Export Enquiry System", "Created a dedicated enquiry process for dealers and international distributors with tailored contact forms.", "Supports B2B partnerships and improves the quality of distributor enquiries."],
  ["Scalable WordPress CMS", "Built a flexible content management system that allows the client to update products, specifications, and content with ease.", "Simplifies ongoing website management and supports future business growth."],
];

const BEFORE_AFTER = [
  ["Generic, text-heavy homepage with no clear value proposition", "Structured hero with bold headline, stats bar (5000+ businesses, 25+ countries), and prominent CTAs", "First impressions aligned with brand's actual scale; reduced bounce rate"],
  ["No ISO/certification display on key pages", "ISO badge, quality certification, and export credentials displayed on homepage and about page", "Prospective buyers can verify credibility instantly"],
  ["Single or minimal inquiry CTA on most pages", "Multiple strategically placed CTAs (Get Quote, Download Brochure, WhatsApp, Dealer Enquiry) across all pages", "More conversion entry points and greater lead capture opportunities"],
  ["Poor mobile navigation — clunky menu and overcrowded layout", "Mobile-first responsive design with clean hamburger menu and thumb-friendly CTAs", "Mobile users (majority of Indian B2B audience) experience frictionless browsing"],
  ["18+ product categories with minimal descriptions and specs", "Each category has structured product cards; each product page has spec tables, use cases, features, and an inquiry form", "B2B buyers can self-qualify; shorter sales cycle"],
  ["No dedicated dealer or export inquiry pathway", "Dedicated Dealer Enquiry page with specialised form fields and content for distributors", "New distribution pipeline created; export lead quality improved"],
  ["Blog existed but lacked strategy, taxonomy, or keyword targeting", "Blog restructured with categories, consistent post templates, and content aligned to buyer search queries", "Organic content funnel established for high-intent dairy equipment queries"],
  ["Separate price guide content absent from the site", "Four standalone price guide landing pages (Cream Separator, Bulk Milk Cooler, Butter Churner, Homogenizer) published as SEO assets", "Top-of-funnel traffic captured from commercial research queries"],
  ["No social proof elements — no testimonials, client count, or export stats", "Social proof woven into homepage, about page, and footer (5000+ clients, 25+ countries, positive manufacturing reputation)", "Trust established before a prospect even considers making contact"],
  ["No Google Tag Manager or structured analytics foundation", "GTM deployed with container ready for conversion tracking, scroll events, and remarketing audiences", "Business now has the data infrastructure to measure and optimise marketing ROI"],
  ["Branding inconsistent across pages — logo quality varied, colours not unified", "SVG logo, consistent brand colour system, and unified typographic hierarchy across all pages", "Professional, trustworthy impression consistently delivered across the site"],
  ["No downloadable assets for offline evaluation", "Downloadable company brochure (PDF) accessible from homepage hero and product pages", "Pre-qualifies serious buyers; reduces repetitive sales communication"],
];

// Post-launch results screenshots. Each: heading, body, and one or more images.
const RESULTS = [
  {
    title: "Google Search Console",
    body: "Google Search Console highlights the website's growth in organic visibility following the redesign. Improvements in impressions, clicks, keyword rankings, and average position demonstrate that the new information architecture, product pages, technical SEO, and content strategy have strengthened search engine discoverability.",
    images: [`${IMG}/Google-Search.png`],
  },
  {
    title: "Google Analytics 4 (GA4)",
    body: "Google Analytics 4 provides insight into visitor engagement and user behaviour after launch. Improvements in engagement rate, pages per session, average engagement time, and conversion events indicate that users can now navigate the website more efficiently and complete inquiry actions with less friction.",
    images: [`${IMG}/Google-Analytics.png`],
  },
  {
    title: "Semrush",
    body: "Semrush data demonstrates the website's increasing organic search footprint. Growth in ranking keywords, estimated traffic, visibility score, and featured search positions reflects the effectiveness of the new SEO structure and optimized content.",
    images: [`${IMG}/Semrush-1.png`, `${IMG}/Semrush-2.png`],
  },
  {
    title: "AI Search Visibility",
    body: "The redesigned website improved visibility across emerging AI-powered search experiences, including Google AI Overviews, ChatGPT, and Google Gemini, helping Mahesh Eng. Works reach buyers through next-generation search platforms.",
    images: [`${IMG}/AI-Search-Visibility.png`, `${IMG}/AI-Search-Visibility-1.png`, `${IMG}/AI-Search-Visibility-2.png`],
  },
];

const OUTCOMES = [
  ["User Experience Score", "Visitors now navigate a structured, intuitive product hierarchy with clear category architecture and prominent CTAs", "32% improvement in pages per session"],
  ["Mobile Accessibility", "Mobile-first build eliminates previous rendering issues; inquiry forms and product pages fully functional on all screen sizes", "41% increase in mobile session quality"],
  ["Brand Credibility", "ISO certification, export credentials, and client count statistics now front-and-centre on homepage; professional visual system deployed", "27% reduction in bounce rate from new visitors"],
  ["Lead Generation Pathways", "From zero dedicated forms to five entry points: Get Quote, Dealer Enquiry, Contact, WhatsApp, and Brochure Download", "58% increase in form submission rate"],
  ["Organic Search Visibility", "SEO-ready architecture, product schema, price guide pages, and blog content strategy create a foundation for ranking growth", "64% increase in organic impressions (GSC, 90-day post-launch)"],
  ["AI Search Visibility", "The website gained visibility across AI-powered search platforms, including Google AI Overviews, ChatGPT, and Google Gemini, increasing its discoverability for relevant manufacturing and dairy equipment queries.", "43% increase in AI search appearances across leading AI platforms"],
];

// ---------------------------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------------------------

const SectionHeading = ({ eyebrow, children }) => (
  <div className="mb-8 animate fadeUp xl:mb-12">
    {eyebrow && <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
    <h2 className="mb-0 font-36 font-semibold leading-tight">{children}</h2>
  </div>
);

const Shot = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    loading="lazy"
    className="w-full rounded-xl border border-white/10 bg-black-light object-cover"
  />
);

function DataTable({ head, rows }) {
  return (
    <div className="animate fadeUp overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full min-w-[640px] border-collapse text-left align-top">
        <thead>
          <tr className="bg-white/[0.06]">
            {head.map((h) => (
              <th key={h} className="border-b border-white/10 px-4 py-4 font-semibold text-white lg:px-6">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="odd:bg-white/[0.02]">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`border-b border-white/[0.06] px-4 py-4 align-top text-white/75 lg:px-6 ${
                    j === 0 ? "font-semibold text-white" : ""
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Metadata (from the CMS stub's Yoast) + JSON-LD
// ---------------------------------------------------------------------------

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri(URI);
  return (
    yoast || {
      title: "Mahesh Eng. Works Case Study | Icecube Digital",
      description:
        "How IceCube Digital transformed Mahesh Eng. Works from an outdated product listing site into a modern, SEO-optimized B2B lead generation platform.",
    }
  );
}

export default async function MaheshEngWorksCaseStudy() {
  // Guard: this is a real published case-study CPT. If the stub is ever
  // unpublished the listing card and Yoast metadata disappear, but the page
  // itself is fully local — so we intentionally do NOT notFound() on missing
  // CMS data. (notFound kept imported for parity with the template route.)
  void notFound;

  return (
    <>
      <YoastSchema uri={URI} />
      <Header />
      <main>
        {/* Top banner — shared with every other case study for consistency */}
        <CaseStudyBanner title={HERO.eyebrow} />

        {/* Intro — headline, summary, stats, CTAs + hero visual */}
        <section className="full-section">
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
              <div className="animate fadeUp">
                <h2 className="mb-4 font-36 font-semibold leading-tight">{HERO.title}</h2>
                <p className="mb-4 text-lg font-semibold text-white/90">{HERO.subtitle}</p>
                <p className="mb-8 text-white/75">{HERO.body}</p>
                <div className="mb-8 grid grid-cols-3 gap-3 lg:gap-4">
                  {HERO.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-white/10 bg-black-light/60 px-3 py-5 text-center backdrop-blur">
                      <p className="mb-1 font-36 font-bold text-primary"><small>{s.value}</small></p>
                      <p className="text-sm font-semibold text-white/70">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    View Live Website
                    <ArrowIcon />
                  </a>
                  <a href="/contact-us/" className="btn btn-secondary">
                    Start Your Project Today
                    <ArrowIcon />
                  </a>
                </div>
              </div>
              <figure className="animate fadeUp" style={{ animationDelay: "0.1s" }}>
                <Shot src={HERO.image} alt="Mahesh Eng. Works post-launch engagement summary" />
              </figure>
            </div>
          </div>
        </section>

        {/* 1. Project Overview */}
        <section className="full-section">
          <div className="container">
            <div className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
              <div className="animate fadeUp">
                <SectionHeading eyebrow="1. Project Overview">About the Client</SectionHeading>
                {ABOUT.map((p, i) => (
                  <p key={i} className="mb-4 text-white/75">{p}</p>
                ))}
              </div>
              <figure className="animate fadeUp" style={{ animationDelay: "0.1s" }}>
                <Shot src={`${IMG}/Business-Goals.png`} alt="Mahesh Eng. Works business goals overview" />
              </figure>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-space-mini md:grid-cols-2 xl:mt-16">
              <div className="animate fadeUp rounded-xl border border-white/10 bg-black-light p-6 lg:p-8">
                <h3 className="mb-4 font-24 font-semibold">Business Niche &amp; Target Audience</h3>
                <p className="mb-3 text-white/75">The company primarily operates in a B2B niche, supplying to:</p>
                <ul className="list-disc space-y-2 pl-5 text-white/75 marker:text-primary">
                  {NICHE.map((n, i) => <li key={i}>{n}</li>)}
                </ul>
              </div>
              <div className="animate fadeUp rounded-xl border border-white/10 bg-black-light p-6 lg:p-8" style={{ animationDelay: "0.1s" }}>
                <h3 className="mb-4 font-24 font-semibold">Business Goals</h3>
                <ul className="list-disc space-y-2 pl-5 text-white/75 marker:text-primary">
                  {GOALS.map((g, i) => <li key={i}>{g}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Client Challenges */}
        <section className="full-section">
          <div className="container">
            <SectionHeading eyebrow="2. Client Challenges">The Problems Limiting Growth</SectionHeading>
            <p className="mb-8 max-w-5xl text-white/75 animate fadeUp">
              When Mahesh Eng. Works approached IceCube Digital, the existing website presented several critical
              problems that were directly limiting business growth, lead generation, and online credibility.
            </p>
            <DataTable head={["Challenge Area", "Description", "Business Impact"]} rows={CHALLENGES} />
          </div>
        </section>

        {/* 3. Our Solution */}
        <section className="full-section">
          <div className="container">
            <SectionHeading eyebrow="3. Our Solution">A Full-Stack Digital Strategy</SectionHeading>
            <p className="mb-12 max-w-5xl text-white/75 animate fadeUp xl:mb-16">
              IceCube Digital deployed a full-stack digital strategy encompassing UX architecture, brand positioning,
              WordPress development, content structuring, and SEO infrastructure to transform Mahesh Eng. Works into a
              credible, conversion-ready digital platform.
            </p>

            <div className="space-y-12 xl:space-y-16">
              {SOLUTIONS.map((s, idx) => (
                <div key={s.num} className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
                  {/* Alternate image side on wide screens; text-only blocks span full width */}
                  <div className={`animate fadeUp ${s.image && idx % 2 === 1 ? "lg:order-2" : ""} ${!s.image ? "lg:col-span-2" : ""}`}>
                    <p className="mb-2 font-semibold text-primary">{s.num}</p>
                    <h3 className="mb-4 font-24 font-semibold leading-tight">{s.title}</h3>
                    <p className="text-white/75">{s.body}</p>
                    {s.bullets && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75 marker:text-primary">
                        {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                  {s.image && (
                    <figure className={`animate fadeUp ${idx % 2 === 1 ? "lg:order-1" : ""}`} style={{ animationDelay: "0.1s" }}>
                      <Shot src={s.image} alt={`${s.title} — Mahesh Eng. Works`} />
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Key Features Delivered */}
        <section className="full-section">
          <div className="container">
            <SectionHeading eyebrow="4. Key Features Delivered">What We Shipped</SectionHeading>
            <DataTable head={["Feature", "Description", "Business Benefit"]} rows={FEATURES} />
          </div>
        </section>

        {/* 5. Before vs. After */}
        <section className="full-section">
          <div className="container">
            <SectionHeading eyebrow="5. Before vs. After">Improvement Comparison</SectionHeading>
            <div className="mb-12 grid grid-cols-1 gap-space-mini md:grid-cols-2 xl:mb-16">
              <figure className="animate fadeUp">
                <p className="mb-3 font-semibold uppercase tracking-[0.15em] text-white/60">Previous Website</p>
                <Shot src={`${IMG}/Previous-Website.png`} alt="Mahesh Eng. Works previous website" />
              </figure>
              <figure className="animate fadeUp" style={{ animationDelay: "0.1s" }}>
                <p className="mb-3 font-semibold uppercase tracking-[0.15em] text-primary">Redesigned Website</p>
                <Shot src={`${IMG}/Redesigned-Website.png`} alt="Mahesh Eng. Works redesigned website" />
              </figure>
            </div>
            <DataTable head={["Before (Old Website)", "After (IceCube Digital Redesign)", "Business Impact"]} rows={BEFORE_AFTER} />
          </div>
        </section>

        {/* 6. Results & Outcomes */}
        <section className="full-section">
          <div className="container">
            <SectionHeading eyebrow="6. Results & Outcomes">Measurable Impact</SectionHeading>
            <p className="mb-12 max-w-5xl text-white/75 animate fadeUp xl:mb-16">
              The redesigned website delivered significant improvements in user experience, organic visibility, and
              lead generation. The sections below highlight key performance metrics and visual evidence collected after
              launch.
            </p>

            <div className="space-y-12 xl:space-y-16">
              {RESULTS.map((r, idx) => (
                <div key={r.title} className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
                  <div className={`animate fadeUp ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <h3 className="mb-4 font-24 font-semibold leading-tight">{r.title}</h3>
                    <p className="text-white/75">{r.body}</p>
                  </div>
                  <div className={`animate fadeUp space-y-4 ${idx % 2 === 1 ? "lg:order-1" : ""}`} style={{ animationDelay: "0.1s" }}>
                    {r.images.map((src) => (
                      <Shot key={src} src={src} alt={`${r.title} results for Mahesh Eng. Works`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 xl:mt-16">
              <DataTable head={["Outcome Area", "Qualitative Result", "Metric"]} rows={OUTCOMES} />
            </div>

            <div className="btn-wrap mt-10 text-center animate fadeUp xl:mt-14">
              <a href={LIVE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Live Website
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials — shared site slider (includes the three clients shown on the CMS page) */}
        <CaseStudyTestimonials />

        {/* Let's Work Together — shared quote/contact section */}
        <GetQuoteSection />

        {/* Countries We Serve */}
        <WeServeSection />
      </main>
      <Footer />
    </>
  );
}
