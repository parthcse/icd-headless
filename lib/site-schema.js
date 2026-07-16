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
  // Rating lives on the LocalBusiness (matching the CMS schema, which the Rich
  // Results Test validates as "1 valid Review snippet"). It must NOT be moved to
  // the Organization: the Organization is a SEPARATE <script> below (not in this
  // @graph), exactly like the CMS — merging it here cross-links the two "Icecube
  // Digital" entities and makes Google report the rating on two items.
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

// Standalone Organization — its OWN <script>, not part of the @graph above.
// This mirrors the CMS layout that Google validates cleanly. It deliberately
// carries NO aggregateRating (the rating is on the LocalBusiness); keeping the
// company's two representations in separate scripts is what stops Google from
// attributing the rating to two entities.
const organization = {
  "@context": "https://schema.org",
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

// Script 1: the @graph (LocalBusiness + WebSite). Script 2: the standalone
// Organization. Two separate <script> tags, mirroring the validated CMS schema.
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [localBusiness, website],
};

export const siteSchemas = [siteGraph, organization];
