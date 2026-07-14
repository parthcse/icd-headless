/**
 * Site-wide structured data (JSON-LD).
 *
 * Rendered on EVERY page by <SiteSchema/> (components/common/SiteSchema.js) as a
 * SINGLE @graph. Keeping LocalBusiness + WebSite + Organization in one @graph
 * (rather than separate <script> tags) lets validators resolve the @id
 * cross-links — e.g. WebSite.publisher → #organization — and surface every
 * entity. A standalone Organization in its own <script> gets folded into that
 * publisher reference and won't appear as its own item in validator.schema.org.
 *
 * ▶ Edit the entities below. image / logo / url MUST be ABSOLUTE https URLs —
 *   schema.org rejects relative paths. `SITE` builds absolute URLs for local
 *   assets under public/.
 */

const SITE = "https://www.icecubedigital.com";

const localBusiness = {
  "@type": "LocalBusiness",
  name: "Icecube Digital, USA",
  "@id": `${SITE}/#LocalBusiness`,
  url: `${SITE}/`,
  telephone: "+01 862-345-6662",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+01 862-345-6662",
      contactType: "USA support",
      areaServed: ["US", "CA", "IN", "IE", "AU", "UK"],
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91 635-295-5623",
      contactType: "Indian support",
      areaServed: ["IN"],
      availableLanguage: ["English", "Hindi"],
    },
  ],
  description:
    "IceCube Digital is a top-rated eCommerce website design, development and digital marketing company, creating beautiful web experiences to grow brands online.",
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "160 Locksunart Way, Apt 3",
    addressLocality: "Sunnyvale",
    addressRegion: "CA",
    postalCode: "94087",
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 967,
  },
  image: `${SITE}/assets/photos/seo-schema-business-img.png`,
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.33885881497162,
    longitude: -122.03046781714515,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00 AM",
    closes: "07:00 PM",
  },
  sameAs: [
    "https://www.facebook.com/IcecubeDigital/",
    "https://twitter.com/Icecubedigital",
    "https://www.youtube.com/channel/UClVinGrBJ45XuOL_Q65WGEA/",
    "https://www.linkedin.com/company/ice-cube-digital/",
    "https://www.instagram.com/icecubedigital/",
    "https://www.pinterest.com/icecubedigital/",
  ],
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE}/#logo`,
    inLanguage: "en-US",
    url: `${SITE}/assets/icons/header-logo.svg`,
    width: 170,
    height: 63,
    caption: "Icecube Digital Logo",
  },
  department: [
    {
      "@type": "LocalBusiness",
      name: "Icecube Digital, India",
      "@id": `${SITE}/#LocalBusiness-india`,
      description:
        "IceCube Digital is a top-rated eCommerce website design, development and digital marketing company, creating beautiful web experiences to grow brands online.",
      image: `${SITE}/assets/photos/seo-schema-business-img.png`,
      telephone: "+91 635-295-5623",
      priceRange: "₹",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "310, Sarthik - II, Opp. Rajpath Club, Sarkhej - Gandhinagar Hwy, Bodakdev",
        addressLocality: "Ahmedabad",
        addressRegion: "GJ",
        postalCode: "380054",
        addressCountry: "India",
      },
      location: {
        "@type": "Place",
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.035257,
          longitude: 72.5088549,
        },
      },
    },
  ],
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: `${SITE}/`,
  name: "Icecube Digital",
  description:
    "IceCube Digital is a top-rated eCommerce website design, development and digital marketing company, creating beautiful web experiences to grow brands online.",
  publisher: { "@id": `${SITE}/#organization` },
  inLanguage: "en-US",
};

const organization = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Icecube Digital",
  image: `${SITE}/assets/photos/seo-schema-business-img.png`,
  logo: `${SITE}/assets/icons/header-logo.svg`,
  url: `${SITE}/`,
  description:
    "Are you looking for the best Magento 2 or WordPress Web Development Company to build a user-friendly website to improve organic sales? IceCube Digital is an award-winning eCommerce Website Design & Development Services Company, creating custom websites and mobile apps to grow brands online.",
  founder: [
    {
      "@type": "Person",
      name: "Bhavin Madariya",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "160 Locksunart Way, Apt 3",
    addressLocality: "Sunnyvale",
    addressRegion: "CA",
    postalCode: "94087",
    addressCountry: "United States",
  },
  sameAs: [
    "https://www.facebook.com/IcecubeDigital/",
    "https://twitter.com/Icecubedigital",
    "https://www.youtube.com/channel/UClVinGrBJ45XuOL_Q65WGEA/",
    "https://www.linkedin.com/company/ice-cube-digital/",
    "https://www.instagram.com/icecubedigital/",
    "https://www.pinterest.com/icecubedigital/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1 (862) 345-6662",
    contactType: "Customer Service",
    email: "mailto:hello@icecubedigital.com",
    areaServed: ["US", "CA", "IN", "IE", "AU", "UK"],
  },
};

/**
 * One connected @graph, output as a single <script type="application/ld+json">
 * on every page. Add entities to the @graph array to ship them site-wide.
 */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [localBusiness, website, organization],
};

export const siteSchemas = [siteGraph];
