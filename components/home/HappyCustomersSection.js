import BtnArrowIcon from "../icons/BtnArrowIcon";
import QuoteBubbleIcon from "../icons/QuoteBubbleIcon";
import { getTestimonialNodes } from "../../lib/wp-home-data";
import { stripHtml, testimonialsArchiveUrl } from "../../lib/wp-text";

const FALLBACK_AVATAR = "/images/avatar-placeholder.svg";

const STATIC_CARD = {
  id: "fallback",
  quote:
    "When we set out to rebuild all six of our websites into a WordPress with WooCommerce framework, we knew we would need a business partner that would be with us for the long haul.",
  name: "Christian Marcello",
  designation: "COO at Werks Company. LLC",
  avatar: FALLBACK_AVATAR,
  avatarAlt: "",
};

function mapTestimonial(node) {
  const descriptionField = node.description != null ? String(node.description) : "";
  const quote =
    stripHtml(descriptionField) || stripHtml(node.content) || stripHtml(node.title);
  const designation = stripHtml(node.tmDesignation) || "";
  return {
    id: node.id,
    name: stripHtml(node.title) || "Client",
    designation,
    quote,
    avatar: node.featuredImage?.node?.sourceUrl || FALLBACK_AVATAR,
    avatarAlt: node.featuredImage?.node?.altText || "",
  };
}

export default async function HappyCustomersSection() {
  const nodes = await getTestimonialNodes();
  const items =
    nodes.length > 0
      ? nodes.map(mapTestimonial)
      : Array.from({ length: 5 }, (_, i) => ({ ...STATIC_CARD, id: `fallback-${i}` }));

  return (
    <section className="home-customer py-space full-section">
      <div
        className="header-wrap container grid gap-[0.5em] pb-space-mini text-center animate-init"
        data-anim="animate__fadeInUp animate__delay-0.4s"
      >
        <h3 className="font-30 mb-0 font-normal">Kind Words from Our</h3>
        <h1 className="main-title mb-0">Happy Customers</h1>
      </div>
      <div
        className="container-left animate-init"
        data-anim="animate__fadeInUp animate__delay-0.6s"
      >
        <div className="home-our-client-slider owl-carousel">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative z-20 me-4 h-full max-w-80 bg-white/5 p-6 md:me-5 md:p-8 lg:me-8 lg:max-w-96 lg:p-10 xl:max-w-md"
            >
              <div className="main-title absolute left-3 top-0 -z-10 opacity-50 md:left-4 md:top-2 lg:top-4 leading-none text-white/5">
                <QuoteBubbleIcon />
              </div>
              <p>{item.quote}</p>
              <div className="mt-auto flex items-center gap-4 pt-4 md:pt-5 lg:pt-6">
                <img
                  src={item.avatar}
                  alt={item.avatarAlt}
                  className="!w-[3.5em] aspect-square rounded-full object-cover"
                />
                <div className="small">
                  <h3 className="mb-0 text-[1.3em] font-semibold">{item.name}</h3>
                  {item.designation ? <p>{item.designation}</p> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-wrap relative z-10 mt-5 inline-block md:mt-6 lg:mt-9">
          <a className="btn btn-primary" href={testimonialsArchiveUrl()}>
            View More Reviews
            <BtnArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
