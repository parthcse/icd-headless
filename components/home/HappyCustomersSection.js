import { getTestimonialNodes } from "../../lib/wp-home-data";
import { stripHtml, testimonialsArchiveUrl } from "../../lib/wp-text";

const FALLBACK_AVATAR = "/images/client.png";

const REVIEW_ARROW_PATH =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

const QUOTE_PATH =
  "M69.3994 11.9209C67.237 12.3194 65.4439 12.7601 64.0273 13.2471C62.4961 13.7735 60.9471 14.5127 59.3809 15.4619C57.7585 16.4452 56.5872 17.7603 55.8896 19.4043C55.2012 21.027 54.9148 22.9014 55.0107 25.0127L55.0322 25.4902H64.1797V57.1797H37.5303V27.0898C37.5303 23.8138 37.8991 20.8496 38.6318 18.1934C39.3711 15.5136 40.244 13.2903 41.2451 11.5156C42.2335 9.76344 43.6068 8.25371 45.3721 6.98633C47.1775 5.69015 48.8357 4.6534 50.3486 3.87402C51.8387 3.10641 53.7314 2.46528 56.0371 1.95801C58.3616 1.44662 60.2302 1.12455 61.6484 0.987305C63.0006 0.856455 64.7429 0.705278 66.876 0.533203L69.3994 11.9209ZM32.2354 11.9238C30.1575 12.322 28.4093 12.7616 26.9971 13.2471C25.4675 13.7729 23.8969 14.5115 22.2861 15.459C20.6171 16.4408 19.4191 17.7559 18.7197 19.4043C18.0276 21.0358 17.79 22.9186 17.9824 25.0352L18.0234 25.4902H27.1504V57.1797H0.5V27.0898C0.500011 23.8114 0.846555 20.8445 1.53418 18.1855C2.22597 15.5106 3.09734 13.2936 4.14062 11.5244C5.17826 9.76495 6.55497 8.25084 8.27637 6.98242C10.0319 5.6889 11.6874 4.65487 13.2432 3.87695C14.7841 3.10647 16.6805 2.46512 18.9395 1.95801C21.2145 1.44728 23.1048 1.1256 24.6152 0.988281L24.6143 0.987305L29.8418 0.536133L32.2354 11.9238Z";

function QuoteDecoration() {
  return (
    <div className="absolute left-[0.3em] top-[0.5em] -z-10 font-48 leading-none text-white/5 opacity-50 md:left-[0.6em] lg:left-[0.7em] lg:top-[0.6em] xl:left-[0.5em] xl:top-[0.5em]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="58"
        viewBox="0 0 70 58"
        fill="currentColor"
        className="h-[1em]"
        aria-hidden="true"
      >
        <path d={QUOTE_PATH} stroke="black" />
      </svg>
    </div>
  );
}

const STATIC_CARD = {
  id: "fallback",
  quote:
    "When we set out to rebuild all six of our websites into a WordPress with WooCommerce framework, we knew we would need a business partner that would be with us for the long haul.",
  name: "Christian Marcello",
  designation: "COO at Werks Company. LLC",
  avatar: FALLBACK_AVATAR,
  avatarAlt: "",
};

function designationFromNode(node) {
  const rawNested = node.testimonials;
  const group =
    rawNested == null
      ? null
      : Array.isArray(rawNested)
        ? rawNested[0]
        : rawNested;
  const raw =
    group && typeof group === "object"
      ? group.tm_designation ?? group.tmDesignation
      : undefined;
  if (raw == null || raw === "") return "";
  return stripHtml(String(raw));
}

function mapTestimonial(node) {
  const descriptionField = node.description != null ? String(node.description) : "";
  const quote =
    stripHtml(descriptionField) || stripHtml(node.content) || stripHtml(node.title);
  const designation = designationFromNode(node);
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
    <section className="home-customer full-section py-space xl:pt-28 xl:pb-36">
      <div className="header-wrap container mx-auto grid gap-[0.5em] pb-space-mini text-center animated wpb_animate wpb_fadeUp xl:pb-14 xl:text-lg">
        <h3 className="mb-0 font-48 font-normal">Kind Words from Our</h3>
        <h1 className="main-title mb-0">Happy Customers</h1>
      </div>
      <div className="container-left">
        <div className="home-our-client-slider owl-carousel">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative z-20 h-full max-w-72 bg-black-light p-6 leading-normal md:me-5 md:max-w-80 md:p-8 lg:me-8 lg:max-w-96 lg:p-10 xl:max-w-sm xl:p-12 me-4"
            >
              <QuoteDecoration />
              <p>{item.quote}</p>
              <div className="mt-auto flex items-center gap-4 pt-4 md:pt-5 lg:pt-6">
                <img
                  src={item.avatar}
                  alt={item.avatarAlt}
                  className="!w-[3.5em] aspect-square rounded-full object-cover"
                />
                <div className="small">
                  <h3 className="mb-1 text-[1.3em] font-semibold leading-none">{item.name}</h3>
                  {item.designation ? <p>{item.designation}</p> : null}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-wrap relative z-10 mt-5 inline-block md:mt-6 lg:mt-9">
          <a className="btn btn-primary" href={testimonialsArchiveUrl()}>
            View More Reviews
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={REVIEW_ARROW_PATH} />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
