import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import { getRecentPostNodes } from "@/lib/wp-home-data";
import { stripHtml, wpPermalink } from "@/lib/wp-text";
import FaqAccordion from "@/components/common/FaqAccordion";
import { getYoastMetadataByUri } from "@/lib/seo";

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/ecommerce-website-design-development-faqs/");
  return yoast || {
  title: "eCommerce Website Design & Development FAQs | Icecube Digital",
  description:
    "Answers to the most common questions about eCommerce website design and development — costs, timelines, customization, support, SEO, security, payments and more.",
};
}

const FALLBACK_IMG = "/assets/photos/home-our-client-slider.png";

const FAQS = [
  {
    q: "I Want to Develop a Website for My Business How Much It Would Cost Me?",
    a: "The development of a new website for your business will cost as per your requirements for the design and features. The website can be developed in a range from simple, standard, and customize. The costs will depend upon that and can be decided after a proper understanding of your business requirements.",
  },
  {
    q: "I Want to Change the Current Design of My Website. Can You Suggest Something Better?",
    a: "Absolutely! Your current website design can be changed and made up-to-date as per your requirements. Our UX design team will review your current website layout and provide suggestions for improvements required.",
  },
  {
    q: "How Much Customization is Possible for My New Website?",
    a: "It is possible to build a fully customized website as per your requirements. All the features, functionalities, and designs can be developed as per the suggestions made by you.",
  },
  {
    q: "After My Website is Developed If I Need Changes in the Design or Features. Will It Be Possible To Do It?",
    a: "Yes, it's possible to make changes in the design or features even after the website is developed. Though the change in design or features will add to the total costs.",
  },
  {
    q: "Can You Show Me Some Website Designs Developed By You?",
    a: "Yes. Please have a look at this portfolio showcasing all the websites designed by us.",
  },
  {
    q: "How Much Time Will it Take in Website Development?",
    a: "The time required for the development of standard websites is approximately 2-3 weeks. Custom sites require much time that can only be decided after the project is discussed.",
  },
  {
    q: "What If There's Any Problem After the Website is Built and Gone Live?",
    a: "No worries, any problem occurring after the website is built and gone live will be taken care of by our efficient development team. We provide free 1 month support after the development of your website.",
  },
  {
    q: "Do You Provide Support After the Site is Developed?",
    a: "Yes, We provide regular website maintenance and support services. You can select from the packages on monthly basis to keep your site maintained. We are always willing to provide support and help with your requirements for new features, maintenance, and regular updates.",
  },
  {
    q: "Will You Teach Me How to Manage and Use My Site After It Is Developed?",
    a: "Yes. Training and guidance both are readily available to explain all the details of website management and how you can effectively use your website and update content, and pictures from your end.",
  },
  {
    q: "How Many Clients Have You Served?",
    a: "We have served a diverse range of international clients that include individual business consultants, SMEs & big enterprises. We have delivered 400+ projects successfully.",
  },
  {
    q: "Will You Listen to My Design Suggestions or Will You Design on Any Fixed Format?",
    a: "The website design suggestions will be provided by us after having a detailed discussion with you on your requirements. All the design suggestions provided by you will be taken into consideration and then proper suggestions will be offered to you from our website design team.",
  },
  {
    q: "Who Will Take Care Of the Content For My Website?",
    a: "Content can be provided by your end or you can opt for the content services package provided by us.",
  },
  {
    q: "What Services are Included in the Free Support You Provide?",
    a: "Any problems arising in relation to the design, and development are included in the free support provided by us.",
  },
  {
    q: "How Will My Site Get Top Google Ranking?",
    a: "We provide a monthly SEO services package that will help to boost your website's organic rankings. Our Professional SEO services are very effective in giving results in form of improved organic rankings, traffic, and sales.",
  },
  {
    q: "What eCommerce Platform Will Be Used To Build My E-commerce Website?",
    a: "We have experts in Magento eCommerce, WooCommerce, and Shopify to build ecommerce websites.",
  },
  {
    q: "Want to Know About WordPress CMS and How It Is Useful In Managing My Web Site?",
    a: "WordPress is the largest content management system that provides simple blogging tools, and great plugins, you can log in and edit your site easily with the help of a page builder. The plugins will help you to grow and expand your website as per your business needs.",
  },
  {
    q: "How the Security of My Website Will Be Ensured?",
    a: "We will make sure that all the required security measures are implemented during the development phase of the website. You can opt for a regular maintenance package provided by us for getting security updates and keeping your website safe from any vulnerabilities.",
  },
  {
    q: "How Quick You're in Replying and Solving Your Customer's Queries?",
    a: "We take pride in the services we provide to our customers. Our customers are our main priority and it is always easy to reach us and get an immediate response from us. We aim to make each and every customer satisfied and happy with our services. All queries and requests are answered within 24 hours.",
  },
  {
    q: "How Effective SEO Services are For My Website?",
    a: "SEO services are very effective in improving the Google search organic rankings for your website. SEO services will help you attract more traffic to your website thus, helping you in the expansion of your reach and offering growth for your business.",
  },
  {
    q: "How Much SEO Services Cost?",
    a: "The cost of SEO services really depends on how many keywords you are looking to target and how competitive the keywords are. Our expert team can audit your website, research the most profitable keywords and offer you the best SEO package.",
  },
  {
    q: "How Many Design Revisions You Allow For?",
    a: "There is not any fixed number allotted for the design revisions provided by us. It depends on the project as we understand that a customized website may require more design revisions to be done. But we will not be happy with the designs until you are not happy.",
  },
  {
    q: "What's the Difference Between a Template and a Fully Custom Site?",
    a: "A website template is a pre-designed layout for a website. A website template gives designers a relatively simple way to plug content into a website without having to build the website from the ground up. Templates lower the overall website development cost as you don't need to create the designs from scratch but you won't have a unique design and there will be limited functionality. While custom websites are built from scratch based on unique business needs without the use of any premade templates. Custom websites cost more than template websites but your design will be unique with more custom features around your business needs.",
  },
  {
    q: "What's Your Refund Policy?",
    a: "We assure a 100% customer satisfaction guarantee for our services though If you are not happy, we refund the money for unfinished work/uncovered scope from the project contract.",
  },
  {
    q: "Do You Offer Satisfaction Guarantee For Your Services?",
    a: "Yes, we are a result-driven agency and we offer a 100% customer satisfaction guarantee for our web design, development, and digital marketing services. We strive to develop the best possible websites and give unmatched support services.",
  },
  {
    q: "Are There Any Recurring Costs Involved With Owning A Website?",
    a: "Yes, after the design and development of the website – you need to invest in regular maintenance of your website to keep it up to date to provide your end-user with the best experience + you need to pay for the recurring cost of website hosting based on the hosting package you select for your website.",
  },
  {
    q: "What Forms of Payment Do You Accept?",
    a: "We accept all credit/debit cards, PayPal, and bank wire payments.",
  },
  {
    q: "How Does Your Payment Term Works?",
    a: "Project payments are divided into phases as per the project scope. You will need to release part of the payment as we finish the set milestones. For SEO & website maintenance services, It will be monthly or yearly based on the package selected.",
  },
];

// Sidebar "Our Services" — only routes that exist in this project (lib/services).
const OUR_SERVICES = [
  { label: "eCommerce Website Design", href: "/ecommerce-website-design-services/" },
  { label: "eCommerce Development", href: "/ecommerce-website-development-services/" },
  { label: "Magento 2 Migration", href: "/magento-2-upgrade-and-migration-services/" },
  { label: "Magento Development", href: "/magento-development-services/" },
  { label: "Hire Magento Developers", href: "/hire-magento-2-developers-programmers/" },
  { label: "Magento 2 Development", href: "/magento-2-development-services/" },
  { label: "WooCommerce Development", href: "/woocommerce-development-services/" },
  { label: "Shopify Development", href: "/shopify-development-services/" },
  { label: "WordPress Development", href: "/wordpress-development-services/" },
  { label: "Hire WordPress Developers", href: "/hire-wordpress-developers-designers/" },
  { label: "PPC Management", href: "/ppc-management-services/" },
  { label: "Professional SEO Service", href: "/seo-search-engine-optimization/" },
  { label: "Magento SEO Services", href: "/magento-seo-services/" },
  { label: "Conversion Rate Optimization", href: "/conversion-rate-optimization-services/" },
  { label: "Hire eCommerce Developers", href: "/hire-ecommerce-designers-developers/" },
  { label: "WooCommerce SEO Service", href: "/woocommerce-seo-service/" },
  { label: "WordPress SEO Service", href: "/wordpress-seo-service/" },
  { label: "Hire WooCommerce Developers", href: "/hire-woocommerce-developers-experts/" },
  { label: "Hire Shopify Experts", href: "/hire-shopify-developers-experts/" },
];

// FAQPage structured data for rich results in search.
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const WidgetHeading = ({ children }) => (
  <h3 className="mb-4 flex items-center gap-2.5 font-22 font-semibold">
    <span className="h-5 w-1 rounded-full bg-gradient-to-b from-primary to-[#ffb27f]" />
    {children}
  </h3>
);

export default async function EcommerceFaqsPage() {
  const posts = await getRecentPostNodes(5);

  return (
    <>
      <YoastSchema uri="/ecommerce-website-design-development-faqs/" />
      <Header />
      <main>
        {/* Hero */}
        <section className="common-top-banner full-section relative border-t-0 pt-32 pb-16 xl:pt-48 xl:pb-24">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="common-top-banner-overlay" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl py-8 text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Got Questions?</p>
            <h1 className="font-48 font-semibold leading-tight">
              eCommerce Website Design &amp; Development FAQs
            </h1>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
              Everything you need to know about building, launching and growing your online store with Icecube Digital —
              costs, timelines, customization, support, SEO and more. Still stuck? We reply within 24 hours.
            </p>
          </div>
        </section>

        {/* FAQ accordion + sidebar */}
        <section className="faq-content-section full-section">
          <div className="container">
            <div className="grid items-start gap-8 lg:grid-cols-3 xl:gap-10">
              {/* Left — title + accordion */}
              <div className="lg:col-span-2">
                <div className="mb-6 animate fadeUp">
                  <p className="mb-2 font-semibold uppercase tracking-[0.2em] text-primary">Everything You Need to Know</p>
                  <h2 className="font-36 font-semibold leading-tight">Frequently Asked Questions</h2>
                </div>
                <FaqAccordion items={FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
              </div>

              {/* Right — sidebar: Our Services + Popular Posts */}
              <aside className="space-y-6 animate fadeUp lg:sticky lg:top-28 lg:self-start" style={{ animationDelay: "0.1s" }}>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6">
                  <WidgetHeading>Our Services</WidgetHeading>
                  <ul className="space-y-1">
                    {OUR_SERVICES.map((s) => (
                      <li key={s.href}>
                        <a href={s.href} className="group flex items-center gap-2.5 rounded-lg px-3 py-2.5 leading-snug text-white/80 transition-colors hover:bg-primary/10 hover:text-primary">
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0 -rotate-90 text-primary" aria-hidden="true">
                            <path d="M7 10l5 5 5-5H7z" />
                          </svg>
                          <span>{s.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {posts.length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6">
                    <WidgetHeading>Popular Posts</WidgetHeading>
                    <ul className="space-y-4">
                      {posts.map((post) => (
                        <li key={post.id}>
                          <a href={wpPermalink(post.uri)} className="group flex items-start gap-3">
                            <img
                              src={post.featuredImage?.node?.sourceUrl || FALLBACK_IMG}
                              alt=""
                              loading="lazy"
                              className="h-16 w-20 shrink-0 rounded-lg object-cover ring-1 ring-white/10"
                            />
                            <span className="line-clamp-3 text-sm font-semibold leading-snug text-white/85 transition-colors group-hover:text-primary">
                              {stripHtml(post.title)}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </section>

        <GetQuoteSection />
      </main>
      <PageSchema uri="/ecommerce-website-design-development-faqs/" />
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
