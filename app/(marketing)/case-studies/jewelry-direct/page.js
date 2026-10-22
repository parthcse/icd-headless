/**
 * Bespoke case study — Jewelry Direct.
 *
 * WHY THIS IS A STANDALONE ROUTE (not the ACF-driven [slug] template):
 * Same reasoning as mahesh-eng-works: the content is a long-form layout (a
 * seven-row challenge matrix and ten numbered solution blocks) that reads far
 * better as a purpose-built page than as the generic caseStudiesFields render.
 * The copy here is ported verbatim from the CMS ACF groups on
 * https://cms.icecubedigital.com/case-studies/jewelry-direct/ — nothing is
 * invented. Re-export from the CMS if that post is edited.
 *
 * ROUTING: a literal route segment ("jewelry-direct") wins over the sibling
 * dynamic [slug] segment, so this file serves the URL automatically. The slug
 * is also filtered out of getAllCaseStudySlugs() (see lib/case-studies.js →
 * BESPOKE_CASE_STUDY_SLUGS) so the dynamic route does not double-prerender it.
 *
 * HYBRID CMS: the /case-studies listing card and this page's SEO metadata still
 * come from the CMS post (featured image, title, Yoast). Only the body is
 * local. Keep the WP post published, or the listing card and metadata vanish.
 *
 * IMAGES: kept in /public/assets/case-studies/jewelry-direct/ so the page is
 * self-contained and covered by the 30-day /assets cache header. All three are
 * PNG, supplied by the client — the CMS copies come back WebP because
 * Cloudflare Polish re-encodes them whatever Accept header is sent.
 */
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import WeServeSection from "@/components/home/WeServeSection";
import CaseStudyBanner from "@/components/case-studies/CaseStudyBanner";
import CaseStudyTestimonials from "@/components/case-studies/CaseStudyTestimonials";
import YoastSchema from "@/components/common/YoastSchema";
import { getYoastMetadataByUri } from "@/lib/seo";

const URI = "/case-studies/jewelry-direct/";
const LIVE_URL = "https://www.jewelrydirect.com/";
const IMG = "/assets/case-studies/jewelry-direct";

const BTN_ARROW =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
    <path d={BTN_ARROW} />
  </svg>
);

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
// Content — ported verbatim from the CMS ACF groups.
// ---------------------------------------------------------------------------

const HERO = {
  eyebrow: "Jewelry Direct",
  title: "From Manufacturer to Fine Jewelry Brand",
  subtitle: "How IceCube Digital Built a Luxury Shopify Store for a Fine Jewelry Manufacturer",
  body: "IceCube Digital designed and developed jewelrydirect.com from scratch on Shopify, giving a fine jewelry manufacturer its own luxury jewelry website to sell diamond and gemstone jewelry directly to retail customers. The custom design, structured collections and rich product pages present 14K and 18K gold jewelry with the polish buyers expect from a premium brand.",
  stats: [
    { value: "25+", label: "Years of Craft Expertise" },
    { value: "14", label: "Gemstone Varieties" },
    { value: "4", label: "Core Jewelry Categories" },
  ],
  image: `${IMG}/hero.png`,
};

const CHALLENGES = [
  ["No Retail Storefront", "As a manufacturer, the business had no online store or brand presence of its own to reach retail customers.", "No direct sales channel and no direct relationship with the people buying the jewelry."],
  ["Luxury Perception Online", "Fine jewelry buyers judge quality by presentation. A standard template would make premium pieces look ordinary.", "Lower buyer confidence and less willingness to spend on high-value pieces."],
  ["Large, Layered Catalogue", "Products span 4 jewelry types, multiple diamond shapes, 14 gemstones and 2 metal colors.", "Without a clear structure, shoppers get lost and leave before finding the right piece."],
  ["Metal Variations", "Most designs come in both yellow and white gold. Separate listings for each metal would clutter collection pages.", "Shoppers miss the metal they want or struggle to compare options."],
  ["Buying Without Touching", "Online customers cannot hold a ring or see how a diamond catches light from every angle.", "Purchase hesitation on higher-priced pieces and more abandoned carts."],
  ["Personalization Demand", "Gift and bridal buyers often want a name, date or message engraved.", "Missed gift and bridal sales without a simple engraving option."],
  ["Promotions vs. Luxury Feel", "First-time buyer offers are needed, but loud pop-ups and banners cheapen a premium brand.", "Offers either go unnoticed or hurt the brand image."],
];

// Numbered solution blocks. `image` optional; `bullets` optional; `body` may be
// an array so an inline link can sit inside the paragraph.
const SOLUTIONS = [
  {
    num: "2.1",
    title: "Store Strategy & Catalogue Architecture",
    body: "We started by mapping the full catalogue and the different ways customers look for jewelry. A gift buyer browses by type, a diamond buyer thinks in shapes, and a gemstone lover shops by stone or color. The store architecture supports all three paths, with collections for jewelry type, diamond shape, gemstone, color, best sellers and gifts.",
    image: `${IMG}/catalogue-architecture.png`,
  },
  {
    num: "2.2",
    title: "Custom Luxury UI Design",
    body: "The design is crisp, clean and modern, with plenty of white space so each piece stands out. Products sit on clean backgrounds, typography is refined and understated, and the color palette stays restrained to keep attention on the gold and stones. Separate desktop and mobile banner artwork keeps the look sharp on every screen.",
    image: `${IMG}/luxury-ui.png`,
  },
  {
    num: "2.3",
    title: "Homepage Sections for Every Type of Jewelry",
    body: [
      "The homepage works like a well-arranged showroom. Dedicated sections present different kinds of jewelry: Most Loved, Shop by Category (Gold Essentials, Diamond Edit, Gemstone Rings, Birthstone, Bridal Sets and Tennis Direct), a Diamond Edit feature banner and New In. A craftsmanship section tells the workshop story and backs it with trust points like ethical sourcing and factory-direct production. This is the same approach we bring to every project in ",
      { text: "jewelry website design and development", href: "/jewelry-website-design-development/" },
      ": let the product lead, and let the brand story build trust around it.",
    ],
    image: `${IMG}/homepage-most-loved.png`,
  },
  {
    num: "2.4",
    title: "Mega Menu Navigation",
    body: "A mega menu organizes the full catalogue under All Jewelry, Diamond Jewelry and Gemstone Jewelry. Each opens into clear columns such as Shop by Type, Shop by Shape, Shop by Gemstone and Shop by Color, with featured collection images inside the menu. Customers can reach a specific category, like oval diamond jewelry or sapphire jewelry, in two clicks.",
    image: `${IMG}/homepage-navigation.png`,
  },
  {
    num: "2.5",
    title: "Collection Pages With Filters & Sorting",
    body: [
      "Collection pages include filters for product type, style, metal, gemstone type and shape. A shopper can go from a full collection to something as specific as oval sapphire rings in white gold in a few clicks. Sort options for best sellers, newest arrivals and price let them order results the way they like to shop. Our ",
      { text: "Shopify development for jewelry stores", href: "/shopify-development-services/" },
      " kept these pages fast and easy to use, even with many products in a single collection.",
    ],
    image: `${IMG}/collection-filters.png`,
  },
  {
    num: "2.6",
    title: "Custom Search With Exact Keyword Matching",
    body: "Standard store search often returns loose, partial matches, which frustrates a customer who already knows what they want. We customized the search so it matches the exact keywords a customer types and brings up the specific product they are looking for, whether they search by product name, gemstone or style. Trending searches such as engagement rings, hoop earrings and studs appear as soon as the search opens.",
    image: `${IMG}/gemstone-collection.png`,
  },
  {
    num: "2.7",
    title: "Metal Swatches on Listing Pages",
    body: "Each product card on the listing page shows yellow and white gold swatches. Customers can switch metals right from the collection page and see the same design in a different color without opening the product. This keeps collections tidy, since each design appears once instead of being listed twice.",
    image: `${IMG}/metal-swatches.png`,
  },
  {
    num: "2.8",
    title: "Offer Banners Inside the Product Grid",
    body: [
      "Rather than relying only on pop-ups, we placed a styled offer banner within the product listing itself. The welcome offer (10% off with code WELCOME10) appears between products as a lifestyle image tile, so it reads like part of the collection instead of an interruption. It is a pattern we often use in ",
      { text: "conversion rate optimization for ecommerce stores", href: "/conversion-rate-optimization-services/" },
      ", because it puts the offer in front of shoppers at the moment they are browsing.",
    ],
    image: `${IMG}/offer-banner.png`,
  },
  {
    num: "2.9",
    title: "Product Pages With Metal Options & Engraving",
    body: "Product pages are designed to give buyers the confidence to complete a high-value purchase. Each page includes:",
    bullets: [
      "Metal option swatches for yellow and white gold",
      "A free engraving field on eligible products (up to 20 characters)",
      "Ring size selection with a built-in size guide",
      "A multi-image gallery with close-up and on-model shots",
      "Product details such as stone type, shape, setting and clarity",
      "Care instructions, delivery and return information",
    ],
    image: `${IMG}/size-guide.png`,
  },
  {
    num: "2.10",
    title: "360-Degree Product View",
    body: "To close the gap between browsing online and holding a piece in a store, we integrated Orbitvu's 360-degree viewer into the product pages. Customers can rotate the jewelry and see the setting, profile and sparkle from every angle before they buy.",
    image: `${IMG}/bracelets-detail.png`,
  },
];

/** Paragraph that may carry an inline internal link. */
function Body({ content }) {
  if (!Array.isArray(content)) return <p className="text-white/75">{content}</p>;
  return (
    <p className="text-white/75">
      {content.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <Link key={i} href={part.href} className="font-semibold text-primary underline">
            {part.text}
          </Link>
        )
      )}
    </p>
  );
}

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri(URI);
  return (
    yoast || {
      title: "Jewelry Direct Case Study | Icecube Digital",
      description:
        "How IceCube Digital built jewelrydirect.com from scratch on Shopify — a luxury fine jewelry store with structured collections, metal swatches, engraving and 360-degree product views.",
    }
  );
}

export default async function JewelryDirectCaseStudy() {
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
                  <a href={LIVE_URL} target="_blank" rel="nofollow noopener noreferrer" className="btn btn-primary">
                    View Live Website
                    <ArrowIcon />
                  </a>
                  <Link href="/contact-us/" className="btn btn-secondary">
                    Start Your Project Today
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
              <figure className="animate fadeUp" style={{ animationDelay: "0.1s" }}>
                <Shot src={HERO.image} alt="Jewelry Direct fine jewelry storefront" />
              </figure>
            </div>
          </div>
        </section>

        {/* 1. Client Challenges */}
        <section className="full-section">
          <div className="container">
            <SectionHeading eyebrow="1. Client Challenges">Building a Brand From the Workshop Up</SectionHeading>
            <p className="mb-8 max-w-5xl text-white/75 animate fadeUp">
              Jewelry Direct had the products, the craft and the pricing advantage, but no online store of its own.
              Building one from scratch meant solving several problems that are specific to selling fine jewelry
              online.
            </p>
            <DataTable head={["Challenge Area", "Description", "Business Impact"]} rows={CHALLENGES} />
          </div>
        </section>

        {/* 2. Our Solution */}
        <section className="full-section">
          <div className="container">
            <SectionHeading eyebrow="2. Our Solution">A Luxury Store Built End to End on Shopify</SectionHeading>
            <p className="mb-12 max-w-5xl text-white/75 animate fadeUp xl:mb-16">
              IceCube Digital planned, designed and developed the store end to end on Shopify. Instead of adapting a
              ready-made theme, our team delivered{" "}
              <Link href="/shopify-website-design/" className="font-semibold text-primary underline">
                custom Shopify website design for jewelry brands
              </Link>
              , built around how people actually shop for fine jewelry online.
            </p>

            <div className="space-y-12 xl:space-y-16">
              {SOLUTIONS.map((s, idx) => (
                <div key={s.num} className="grid grid-cols-1 items-center gap-space-mini xl:gap-space lg:grid-cols-2">
                  {/* Alternate image side on wide screens; text-only blocks span full width */}
                  <div className={`animate fadeUp ${s.image && idx % 2 === 1 ? "lg:order-2" : ""} ${!s.image ? "lg:col-span-2" : ""}`}>
                    <p className="mb-2 font-semibold text-primary">{s.num}</p>
                    <h3 className="mb-4 font-24 font-semibold leading-tight">{s.title}</h3>
                    <Body content={s.body} />
                    {s.bullets && (
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-white/75 marker:text-primary">
                        {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    )}
                  </div>
                  {s.image && (
                    <figure className={`animate fadeUp ${idx % 2 === 1 ? "lg:order-1" : ""}`} style={{ animationDelay: "0.1s" }}>
                      <Shot src={s.image} alt={`${s.title} — Jewelry Direct`} />
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials — shared site slider */}
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
