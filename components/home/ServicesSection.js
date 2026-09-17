import Link from "next/link";
import ServicesTabs from "@/components/home/ServicesTabs";

// Shared arrow glyph used by the service links (same path as the first tab).
const ARROW_PATH =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

// One tab's content panel: intro paragraph + two-column list of service links.
// The show/hide wrapper (#tabN.tab-content) is rendered by ServicesTabs.
function TabContent({ description, links }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-space-mini">
      <div className="txet-box lg:col-span-5">
        <p>{description}</p>
      </div>
      <div className="list-box font-semibold lg:col-span-7 xl:pl-16">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link className="flex gap-3 lg:gap-3 hover:text-primary group" href={link.href}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 13" fill="currentColor" className="small w-[0.8em] h-[0.8em] mt-1.5">
                  <path d={ARROW_PATH} />
                </svg>
                <span className="my-auto group-hover:underline inline-block">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/**
 * Tabs, in display order. Tab 1 is active on load. To add or reorder a tab, edit
 * this array — the buttons and panels are both generated from it.
 */
const TABS = [
  {
    // AI Services
    id: "tab1",
    label: ["AI", "Services"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="2.0 2.0 60.0 60.0" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
        <circle cx="32" cy="32" r="14.5" />
        <path d="M26.11 38.42L29.86 25.58L33.6 38.42" />
        <path d="M27.93 34.78L31.79 34.78" />
        <path d="M37.88 25.58L37.88 38.42" />
        <circle cx="32.0" cy="7.0" r="3.2" />
        <path d="M32.0 16.0L32.0 11.4" />
        <circle cx="49.7" cy="14.3" r="3.2" />
        <path d="M43.3 20.7L46.6 17.4" />
        <circle cx="57.0" cy="32.0" r="3.2" />
        <path d="M48.0 32.0L52.6 32.0" />
        <circle cx="49.7" cy="49.7" r="3.2" />
        <path d="M43.3 43.3L46.6 46.6" />
        <circle cx="32.0" cy="57.0" r="3.2" />
        <path d="M32.0 48.0L32.0 52.6" />
        <circle cx="14.3" cy="49.7" r="3.2" />
        <path d="M20.7 43.3L17.4 46.6" />
        <circle cx="7.0" cy="32.0" r="3.2" />
        <path d="M16.0 32.0L11.4 32.0" />
        <circle cx="14.3" cy="14.3" r="3.2" />
        <path d="M20.7 20.7L17.4 17.4" />
      </svg>
    ),
    description:
      "We deliver AI solutions that help businesses automate processes, improve customer experiences, and make smarter decisions. From AI software and agent development to AI SEO, consulting, and integrations, we build practical solutions designed to drive efficiency, growth, and measurable results.",
    links: [
      { label: "AI Software Development Services", href: "/ai-software-development-services/" },
      { label: "AI Agent Development Services", href: "/ai-agent-development-services/" },
      { label: "AI Consulting Services", href: "/ai-consulting-services/" },
      { label: "AI Integration Services", href: "/ai-integration-services/" },
      { label: "ChatGPT Ads Agency Services", href: "/chatgpt-advertising-services/" },
      { label: "AI WhatsApp Quoting System", href: "/ai-whatsapp-quoting-system/" },
    ],
  },
  {
    // Magento
    id: "tab2",
    label: ["Magento", "Development"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 59 68" fill="currentColor" className="mx-auto">
        <path d="M29.2578 0L58.5156 16.9531V50.8594L50.3125 55.7812V21.875L29.2578 9.84375L8.20312 21.875V55.7812L0 50.8594V16.9531L29.2578 0ZM33.6328 55.7812V21.875L41.8359 26.7969V60.7031L29.2578 67.8125L16.6797 60.7031V26.7969L25.1562 21.875V55.7812L29.2578 57.9688L33.6328 55.7812Z" />
      </svg>
    ),
    description:
      "Unlock the power of e-commerce with our Magento development expertise. We specialize in building robust and scalable online stores that provide a seamless shopping experience. From customizing themes to integrating extensions, we tailor Magento solutions that cater to your business's unique needs.",
    links: [
      { label: "Magento Development", href: "/magento-development-services/" },
      { label: "Magento 2 Development", href: "/magento-2-development-services/" },
      { label: "Hire Magento Developers", href: "/hire-magento-2-developers-programmers/" },
      { label: "Magento 2 Migration", href: "/magento-2-upgrade-and-migration-services/" },
      { label: "Magento SEO Service", href: "/magento-seo-services/" },
      { label: "Magento Maintenance Services", href: "/magento-maintenance-services/" },
    ],
  },
  {
    // Shopify
    id: "tab3",
    label: ["Shopify", "Development"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 62 70" fill="currentColor" className="mx-auto">
        <path d="M39.9219 8.75C40.651 8.38542 41.3802 8.20312 42.1094 8.20312L39.375 70L0 62.6172L2.73438 42.3828C4.375 28.8932 5.19531 21.875 5.19531 21.3281C5.19531 20.599 5.28646 20.1432 5.46875 19.9609C5.65104 19.5964 6.28906 19.2318 7.38281 18.8672L13.6719 16.9531C14.5833 12.9427 16.0417 9.38802 18.0469 6.28906C20.9635 2.09635 24.4271 0 28.4375 0C30.0781 0 31.263 0.729167 31.9922 2.1875H32.2656C35.7292 2.1875 38.2812 4.375 39.9219 8.75ZM27.3438 12.8516C29.5312 12.1224 31.0807 11.4844 31.9922 10.9375C31.9922 9.11458 31.7188 7.10938 31.1719 4.92188C29.8958 5.28646 28.7109 6.19792 27.6172 7.65625C26.5234 9.11458 25.612 11.1198 24.8828 13.6719L27.3438 12.8516ZM29.2578 3.00781C29.0755 2.82552 28.6198 2.73438 27.8906 2.73438C25.1562 2.73438 22.6953 4.28385 20.5078 7.38281C18.6849 9.9349 17.4089 12.8516 16.6797 16.1328L21.875 14.4922C22.4219 11.2109 23.5156 8.56771 25.1562 6.5625C26.25 5.10417 27.6172 3.91927 29.2578 3.00781ZM24.6094 31.4453C26.25 31.4453 27.9818 31.901 29.8047 32.8125L31.4453 24.8828L30.0781 24.6094C28.9844 24.2448 27.7083 24.0625 26.25 24.0625C21.6927 24.0625 18.2292 25.3385 15.8594 27.8906C13.4896 30.2604 12.3047 33.1771 12.3047 36.6406C12.3047 38.6458 12.7604 40.3776 13.6719 41.8359C14.401 42.5651 15.4948 43.5677 16.9531 44.8438C18.0469 45.7552 18.8672 46.5755 19.4141 47.3047C19.9609 47.8516 20.2344 48.4896 20.2344 49.2188C20.2344 49.9479 19.9609 50.5859 19.4141 51.1328C19.0495 51.6797 18.4115 51.9531 17.5 51.9531C16.5885 51.9531 15.5859 51.7708 14.4922 51.4062C13.5807 50.8594 12.7604 50.3125 12.0312 49.7656L10.9375 48.9453L9.29688 55.2344L10.3906 56.3281C11.4844 57.0573 12.6693 57.6953 13.9453 58.2422C15.7682 59.1536 17.6823 59.6094 19.6875 59.6094C22.6042 59.6094 24.974 58.6068 26.7969 56.6016C28.8021 54.4141 29.8047 51.7708 29.8047 48.6719C29.8047 46.3021 29.0755 44.2057 27.6172 42.3828C26.7057 41.2891 25.2474 40.013 23.2422 38.5547C22.1484 37.8255 21.3281 37.1875 20.7812 36.6406C20.4167 36.0938 20.2344 35.5469 20.2344 35C20.2344 32.6302 21.6927 31.4453 24.6094 31.4453ZM33.3594 4.92188C33.9062 6.5625 34.1797 8.29427 34.1797 10.1172V10.3906L37.7344 10.1172C36.4583 6.65365 35 4.92188 33.3594 4.92188ZM53.0469 13.125C53.5938 13.125 53.8672 13.3073 53.8672 13.6719L61.25 65.625L40.1953 70L42.9297 8.75H43.2031L47.3047 12.5781L53.0469 13.125Z" />
      </svg>
    ),
    description:
      "Shopify is everywhere, so why not incorporate it into your ecosystem? We transform your brand's vision into a captivating online store, leveraging Shopify's versatile platform. From design customization to app integration, we create Shopify solutions that blend aesthetics and functionality seamlessly.",
    links: [
      { label: "Shopify Development", href: "/shopify-development-services/" },
      { label: "Hire Shopify Developers", href: "/hire-shopify-developers-experts/" },
      { label: "Shopify SEO Service", href: "/shopify-seo-service/" },
      { label: "Shopify Plus Development", href: "/shopify-plus-development-agency/" },
      { label: "Shopify Plus SEO Services", href: "/shopify-plus-seo-services/" },
      { label: "Shopify Maintenance Services", href: "/shopify-maintenance-services/" },
    ],
  },
  {
    // Digital Marketing
    id: "tab4",
    label: ["Digital", "Marketing"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 66 67" fill="currentColor" className="mx-auto">
        <path d="M59.0625 0C60.8854 0 62.4349 0.729167 63.7109 2.1875C64.987 3.46354 65.625 5.01302 65.625 6.83594V44.5703C65.625 46.5755 64.8958 48.3073 63.4375 49.7656C62.1615 51.0417 60.612 51.6797 58.7891 51.6797H50.0391C48.2161 51.6797 46.6667 51.0417 45.3906 49.7656C44.1146 48.4896 43.3854 46.9401 43.2031 45.1172L19.6875 40.4688L22.6953 57.6953C23.0599 59.7005 22.6042 61.5234 21.3281 63.1641C20.4167 64.2578 19.4141 65.0781 18.3203 65.625C17.2266 65.9896 16.1328 66.1719 15.0391 66.1719C13.2161 66.1719 11.5755 65.625 10.1172 64.5312C8.65885 63.4375 7.7474 62.0703 7.38281 60.4297L3.55469 39.1016C2.46094 38.5547 1.54948 37.8255 0.820312 36.9141C0.273438 35.8203 0 34.6354 0 33.3594V15.3125C0 13.4896 0.638021 11.9401 1.91406 10.6641C3.1901 9.38802 4.73958 8.75 6.5625 8.75H16.6797L43.2031 6.01562C43.3854 4.375 44.1146 3.00781 45.3906 1.91406C46.849 0.638021 48.3984 0 50.0391 0H59.0625ZM19.1406 13.3984V35.2734L43.2031 40.1953V10.9375L19.1406 13.3984ZM4.92188 15.3125V33.3594C4.92188 33.724 5.10417 34.0885 5.46875 34.4531C5.83333 34.8177 6.19792 35 6.5625 35H14.2188V13.6719H6.5625C6.19792 13.6719 5.83333 13.8542 5.46875 14.2188C5.10417 14.5833 4.92188 14.9479 4.92188 15.3125ZM17.5 60.1562C17.8646 59.6094 17.9557 59.0625 17.7734 58.5156L14.4922 39.9219H8.75L12.3047 59.3359C12.3047 59.8828 12.5781 60.3385 13.125 60.7031C13.6719 61.0677 14.3099 61.25 15.0391 61.25C15.9505 61.25 16.7708 60.8854 17.5 60.1562ZM60.7031 44.5703V6.83594C60.7031 6.28906 60.5208 5.83333 60.1562 5.46875C59.7917 5.10417 59.3359 4.92188 58.7891 4.92188H50.0391C49.4922 4.92188 49.0365 5.10417 48.6719 5.46875C48.3073 5.83333 48.125 6.28906 48.125 6.83594V44.5703C48.125 45.1172 48.3073 45.6641 48.6719 46.2109C49.0365 46.5755 49.4922 46.7578 50.0391 46.7578H58.7891C59.3359 46.7578 59.7917 46.5755 60.1562 46.2109C60.5208 45.6641 60.7031 45.1172 60.7031 44.5703Z"/>
      </svg>
    ),
    description:
      "We are a digital marketing company comprising many strategies tailored to your goals. From social media marketing that builds an engaging community to email campaigns that nurture leads, we work tirelessly to create campaigns that drive impactful results.",
    links: [
      { label: "AI SEO Services", href: "/ai-seo-services/" },
      { label: "AI Digital Marketing Services", href: "/ai-digital-marketing-services/" },
      { label: "Answer Engine Optimization Services", href: "/answer-engine-optimization-aeo-services/" },
      { label: "Digital Marketing Services", href: "/digital-marketing-service/" },
      { label: "Professional SEO Services", href: "/seo-search-engine-optimization/" },
      { label: "PPC Services", href: "/ppc-management-services/" },
      { label: "Email Marketing Services", href: "/email-marketing-company/" },
    ],
  },
  {
    // WordPress
    id: "tab5",
    label: ["WordPress", "Development"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 68 68" fill="currentColor" className="mx-auto">
        <path d="M33.9062 0C39.9219 0 45.4818 1.54948 50.5859 4.64844C55.8724 7.7474 60.0651 11.9401 63.1641 17.2266C66.263 22.3307 67.8125 27.8906 67.8125 33.9062C67.8125 39.9219 66.263 45.5729 63.1641 50.8594C60.2474 55.9635 56.1458 60.0651 50.8594 63.1641C45.7552 66.263 40.1042 67.8125 33.9062 67.8125C27.7083 67.8125 21.9661 66.3542 16.6797 63.4375C11.5755 60.3385 7.47396 56.237 4.375 51.1328C1.45833 45.8464 0 40.1042 0 33.9062C0 27.7083 1.45833 22.0573 4.375 16.9531C7.47396 11.6667 11.5755 7.5651 16.6797 4.64844C21.9661 1.54948 27.7083 0 33.9062 0ZM63.9844 33.9062C63.9844 30.0781 63.2552 26.3411 61.7969 22.6953C61.0677 26.3411 59.6094 31.0807 57.4219 36.9141L48.3984 60.1562C53.138 57.6042 56.875 54.0495 59.6094 49.4922C62.526 44.7526 63.9844 39.5573 63.9844 33.9062ZM40.4688 19.1406C40.651 19.1406 40.8333 19.2318 41.0156 19.4141C41.3802 19.5964 41.5625 19.8698 41.5625 20.2344C41.5625 20.9635 41.1979 21.3281 40.4688 21.3281H38.8281L47.5781 43.75L51.4062 33.3594C51.9531 32.0833 52.0443 30.8984 51.6797 29.8047C51.4974 28.8932 51.0417 27.7083 50.3125 26.25L50.0391 25.7031C49.3099 24.2448 48.763 23.0599 48.3984 22.1484C48.0339 20.6901 48.0339 19.3229 48.3984 18.0469C48.763 16.5885 49.401 15.4036 50.3125 14.4922C51.4062 13.3984 52.5911 12.7604 53.8672 12.5781C51.3151 10.026 48.3073 8.11198 44.8438 6.83594C41.3802 5.3776 37.7344 4.64844 33.9062 4.64844C28.6198 4.64844 23.6979 5.92448 19.1406 8.47656C14.7656 11.0286 11.3932 14.4922 9.02344 18.8672L20.7812 19.1406C21.5104 19.1406 21.875 19.5052 21.875 20.2344C21.875 20.9635 21.5104 21.3281 20.7812 21.3281H18.0469L26.25 42.9297L30.8984 31.1719L27.0703 21.3281H24.8828C24.1536 21.3281 23.7891 20.9635 23.7891 20.2344C23.7891 19.5052 24.1536 19.1406 24.8828 19.1406H40.4688ZM3.82812 33.9062C3.82812 39.7396 5.3776 45.1172 8.47656 50.0391C11.5755 54.7786 15.6771 58.4245 20.7812 60.9766L6.01562 22.9688C4.55729 26.4323 3.82812 30.0781 3.82812 33.9062ZM34.1797 40.4688L25.7031 62.8906C28.0729 63.6198 30.7161 63.9844 33.6328 63.9844C36.7318 63.9844 39.8307 63.5286 42.9297 62.6172L34.1797 40.4688Z" />
      </svg>
    ),
    description:
      "Our WordPress development services breathe life into your online presence. With a deep understanding of the WordPress ecosystem, we build visually stunning and functionally brilliant websites. Whether it's a corporate site, blog, or portfolio, we tailor WordPress solutions that reflect your brand story.",
    links: [
      { label: "WordPress Development", href: "/wordpress-development-services/" },
      { label: "Hire WordPress Developers", href: "/hire-wordpress-developers-designers/" },
      { label: "WordPress SEO Service", href: "/wordpress-seo-service/" },
      { label: "WordPress Maintenance Service", href: "/wordpress-maintenance-service/" },
      { label: "White Label WordPress Development", href: "/white-label-wordpress-development/" },
    ],
  },
  {
    // White Label
    id: "tab6",
    label: ["White Label", "Services"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 44 67" fill="currentColor" className="mx-auto">
        <path d="M5.19531 66.1719C4.46615 66.1719 3.64583 65.9896 2.73438 65.625C2.00521 65.2604 1.36719 64.7135 0.820312 63.9844C0.273438 63.0729 0 62.0703 0 60.9766V7.10938C0 5.10417 0.638021 3.46354 1.91406 2.1875C3.3724 0.729167 5.10417 0 7.10938 0H36.9141C38.737 0 40.2865 0.729167 41.5625 2.1875C43.0208 3.46354 43.75 5.10417 43.75 7.10938V60.7031C43.75 61.7969 43.4766 62.7995 42.9297 63.7109C42.3828 64.4401 41.6536 65.0781 40.7422 65.625C39.8307 65.9896 38.8281 66.0807 37.7344 65.8984C36.8229 65.7161 35.9115 65.3516 35 64.8047L22.9688 54.1406C22.2396 53.5938 21.5104 53.5938 20.7812 54.1406L8.75 64.8047C7.65625 65.7161 6.47135 66.1719 5.19531 66.1719ZM6.83594 4.92188C6.28906 4.92188 5.83333 5.19531 5.46875 5.74219C5.10417 6.10677 4.92188 6.5625 4.92188 7.10938V60.9766C4.92188 61.1589 4.92188 61.25 4.92188 61.25H5.19531L17.5 50.5859C18.776 49.4922 20.2344 48.9453 21.875 48.9453C23.5156 48.9453 24.974 49.4922 26.25 50.5859L38.2812 61.25H38.5547C38.737 61.0677 38.8281 60.9766 38.8281 60.9766V7.10938C38.8281 6.5625 38.5547 6.10677 38.0078 5.74219C37.6432 5.19531 37.1875 4.92188 36.6406 4.92188H6.83594Z" />
      </svg>
    ),
    description:
      "We assist agencies in overcoming bandwidth and capacity challenges with our White Label Services. Our partnership helps you save time, avoid hiring hassles, and streamline team management, all while maintaining profitability without adding extra overhead costs.",
    links: [
      { label: "White Label Web Design and Development", href: "/white-label-web-design-and-development-services/" },
      { label: "White Label WordPress Development", href: "/white-label-wordpress-development/" },
      { label: "White Label Magento Development", href: "/white-label-magento-development/" },
      { label: "White Label Shopify Development", href: "/white-label-shopify-development/" },
      { label: "White Label SEO Services", href: "/white-label-seo-services/" },
      { label: "White Label PPC Services", href: "/white-label-ppc-services/" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="home-services full-section xl:pt-28 xl:pb-36">
      <div className="container">
        <div className="heading-wrap xl:pb-8 animate fadeUp">
          <h3 className="font-48 font-normal mb-0">We Provide The Full Stack of</h3>
          <h2 className="main-title mb-0">Creative Services</h2>
          <p>Customized solutions for eCommerce and digital marketing</p>
        </div>
        <ServicesTabs
          tabs={TABS.map(({ id, label, icon, description, links }) => ({
            id,
            label,
            icon,
            panel: <TabContent description={description} links={links} />,
          }))}
        />
      </div>
    </section>
  );
}
