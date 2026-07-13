/**
 * Site-wide structured data (JSON-LD).
 *
 * These schemas are rendered on EVERY page and post of the site by
 * <SiteSchema/> (components/common/SiteSchema.js), which is included once in
 * the root layout (app/layout.js).
 *
 * ▶ To change the site-wide schema, edit the objects in THIS file only.
 *   Anything you add to `siteSchemas` is output as its own <script
 *   type="application/ld+json"> tag on every page.
 */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Icecube Digital, USA",
      "@id": "https://www.icecubedigital.com/#LocalBusiness",
      url: "https://www.icecubedigital.com/",
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
      image: "/assets/photos/about-our-heart.png",
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
        "@id": "https://www.icecubedigital.com/#logo",
        inLanguage: "en-US",
        url: "/assets/photos/about-our-heart.png",
        width: 512,
        height: 201,
        caption: "Icecube Digital Logo",
      },
      department: [
        {
          "@type": "LocalBusiness",
          name: "Icecube Digital, India",
          "@id": "https://www.icecubedigital.com/",
          description:
            "IceCube Digital is a top-rated eCommerce website design, development and digital marketing company, creating beautiful web experiences to grow brands online.",
          image: "/assets/photos/about-our-heart.png",
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
    },
    {
      "@type": "WebSite",
      "@id": "https://www.icecubedigital.com/#website",
      url: "https://www.icecubedigital.com/",
      name: "Icecube Digital",
      description:
        "IceCube Digital is a top-rated eCommerce website design, development and digital marketing company, creating beautiful web experiences to grow brands online.",
      publisher: {
        "@id": "https://www.icecubedigital.com/#organization",
      },
      potentialAction: [
        {
          "@type": "SearchAction",
          target: "https://www.icecubedigital.com/search/node?keys={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      ],
      inLanguage: "en-US",
    },
  ],
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.icecubedigital.com/#organization",
  name: "Icecube Digital",
  image: "/assets/photos/about-our-heart.png",
  logo: "/assets/icons/header-logo.svg",
  url: "https://www.icecubedigital.com/",
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
 * Every entry here is rendered as its own JSON-LD <script> on every page.
 * Add or remove schema objects here to control what ships site-wide.
 */
export const siteSchemas = [localBusinessSchema, organizationSchema];
