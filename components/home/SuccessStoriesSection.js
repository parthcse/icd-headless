import BtnArrowIcon from "../icons/BtnArrowIcon";
import { getCaseStudyNodes } from "../../lib/wp-home-data";
import { stripHtml, wpPermalink } from "../../lib/wp-text";

const FALLBACK_IMG = "/images/placeholder-card.svg";

const STATIC_SLIDE = {
  id: "fallback",
  title: "Vuba",
  body: "Vuba is a trusted UK flooring brand, upgraded its Magento website with a modern, mobile-friendly design-boosting UX, simplifying product info, and improving conversions and SEO performance.",
  image: FALLBACK_IMG,
  imageAlt: "",
  href: "#",
};

export default async function SuccessStoriesSection() {
  const nodes = await getCaseStudyNodes();
  const slides =
    nodes.length > 0
      ? nodes.map((node) => ({
          id: node.id,
          title: stripHtml(node.title) || "Case study",
          body: stripHtml(node.content) || "",
          image: node.featuredImage?.node?.sourceUrl || FALLBACK_IMG,
          imageAlt: node.featuredImage?.node?.altText || "",
          href: wpPermalink(node.uri),
        }))
      : Array.from({ length: 4 }, (_, i) => ({ ...STATIC_SLIDE, id: `fallback-${i}` }));

  return (
    <section className="home-our-client full-section">
      <div
        className="header-wrap container mx-auto max-w-3xl grid gap-[0.4em] pb-space-mini text-center animate-init"
        data-anim="animate__fadeInUp animate__delay-0.4s"
      >
        <h3 className="font-30 mb-0 font-normal"> Our Client</h3>
        <h2 className="main-title mb-0">Success Stories</h2>
        <p>
          This is where we take you on a journey through real-world examples of how we transformed
          challenges into wins and goals into achievements.
        </p>
      </div>
      <div
        className="container-left animate-init"
        data-anim="animate__fadeInUp animate__delay-0.6s"
      >
        <div className="home-our-client-slider owl-carousel">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="item h-full max-w-80 me-5 md:me-6 md:max-w-96 lg:me-9 lg:max-w-md"
            >
              <figure>
                <img src={slide.image} alt={slide.imageAlt} />
              </figure>
              <h2 className="font-24 mb-[0.5em] mt-[1em] font-bold">{slide.title}</h2>
              <p>{slide.body}</p>
              <div className="btn-wrap mt-auto pt-[1em] font-24">
                <a className="btn btn-primary" href={slide.href}>
                  Read Case Study
                  <BtnArrowIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
