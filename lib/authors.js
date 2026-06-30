/**
 * Static author profiles for the blog author box. The post's author slug
 * (from WPGraphQL) maps to one of these; unknown authors get a graceful
 * fallback built from the name passed in.
 */
const AUTHORS = {
  parth: {
    name: "Parth P",
    role: "E-commerce Consultant & Co-founder",
    avatar: "/assets/photos/author-parth.jpg",
    linkedin: "https://www.linkedin.com/in/parthce",
    expertise: ["Magento", "WordPress", "Shopify", "WooCommerce", "JavaScript", "Ecommerce", "Web Design", "Web Development"],
    bio: "Parth Patel, a skilled E-commerce Consultant and co-founder of Icecube Digital, dedicates his time to producing straightforward yet invaluable content. With a sharp attention to detail and a passion for innovation, Parth focuses on Magento, WordPress, Shopify and other platforms in his commitment to advancing e-commerce solutions.",
  },
  bhavin: {
    name: "Bhavin M",
    role: "Co-founder & CEO",
    avatar: "/assets/photos/author-bhavin.jpg",
    linkedin: "https://www.linkedin.com/in/bhavin-m-44995727/",
    expertise: ["Ecommerce Store", "Online Business", "Website Design", "CWV", "Local SEO", "AI", "Mobile Shopping", "Content Management", "Email Marketing"],
    bio: "Bhavin M, co-founder of Icecube Digital, spends much of his time creating simple but valuable content that helps eCommerce entrepreneurs grow their business online — sharing practical, no-fluff advice drawn from years of building stores on Magento, Shopify and WordPress.",
  },
  nitin: {
    name: "Nitin D",
    role: "Digital Marketing Manager",
    avatar: "/assets/photos/author-nitin.jpg",
    linkedin: "https://www.linkedin.com/in/nitindevleseo/",
    expertise: ["Digital Marketing", "SEO", "Content Marketing", "eCommerce SEO", "Local SEO", "PPC", "SMM", "Technical SEO", "Amazon SEO", "GA4"],
    bio: "Nitin is the Digital Marketing Manager at Icecube Digital. He has helped many organizations grow their business online and improve sales through effective SEO, PPC and content marketing strategies built around measurable results.",
  },
};

export function getAuthorInfo(slug, fallbackName) {
  if (slug && AUTHORS[slug]) return { slug, ...AUTHORS[slug] };
  return {
    slug: slug || null,
    name: fallbackName || "Icecube Digital",
    role: "Author",
    avatar: null,
    linkedin: null,
    expertise: [],
    bio: "",
  };
}
