import { getCaseStudyNodes } from "../../lib/wp-home-data";
import { stripHtml, wpPermalink } from "../../lib/wp-text";

const FALLBACK_IMG = "/images/home-our-client-slider.png";

const ARROW_PATH =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

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
    <section className="home-our-client full-section xl:pt-28 xl:pb-36">
      <div className="header-wrap container animated wpb_animate wpb_fadeUp mx-auto grid gap-[0.5em] pb-space-mini text-center xl:pb-16 xl:text-lg">
        <h3 className="font-48 mb-0 font-normal"> Our Client</h3>
        <h2 className="main-title mb-0">Success Stories</h2>
        <p className="mx-auto max-w-2xl">
          This is where we take you on a journey through real-world examples of how we transformed
          challenges into wins and goals into achievements.
        </p>
      </div>
      <div className="container-left animate-init" data-anim="animate__fadeInUp animate__delay-0.6s">
        <div className="home-our-client-slider owl-carousel">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="item h-full max-w-80 me-5 md:me-6 md:max-w-96 lg:me-8 lg:max-w-md xl:me-10 xl:max-w-lg"
            >
              <figure className="mb-5 md:mb-6 lg:mb-8 xl:mb-10">
                <img src={slide.image} alt={slide.imageAlt} />
              </figure>
              <h2 className="font-32 mb-[0.5em] font-bold">{slide.title}</h2>
              <p>{slide.body}</p>
              <div className="btn-wrap mt-auto pt-[1em] font-24">
                <a className="btn btn-primary" href={slide.href}>
                  Read Case Study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={ARROW_PATH} />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
