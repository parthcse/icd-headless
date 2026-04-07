import { getRecentPostNodes } from "../../lib/wp-home-data";
import { formatPostDate, postsArchiveUrl, stripHtml, wpPermalink } from "../../lib/wp-text";

const FALLBACK_IMG = "/images/home-our-client-slider.png";

const ARROW_PATH =
  "M0.703125 12.0312C0.494792 12.0312 0.3125 11.9792 0.15625 11.875C0.0520833 11.7188 0 11.5365 0 11.3281C0 11.1198 0.078125 10.9635 0.234375 10.8594L9.6875 1.32812H2.10938C1.90104 1.32812 1.71875 1.27604 1.5625 1.17188C1.45833 1.01562 1.40625 0.859375 1.40625 0.703125C1.40625 0.494792 1.45833 0.338542 1.5625 0.234375C1.71875 0.078125 1.90104 0 2.10938 0H11.3281C11.5365 0 11.6927 0.078125 11.7969 0.234375C11.9531 0.338542 12.0312 0.494792 12.0312 0.703125V9.92188C12.0312 10.1302 11.9531 10.3125 11.7969 10.4688C11.6927 10.5729 11.5365 10.625 11.3281 10.625C11.1198 10.625 10.9375 10.5729 10.7812 10.4688C10.6771 10.3125 10.625 10.1302 10.625 9.92188V2.42188L1.17188 11.875C1.06771 11.9792 0.911458 12.0312 0.703125 12.0312Z";

const STATIC_POSTS = [
  {
    id: "p1",
    title: "White-Label Shopify Development: Complete Guide for Agencies (2026)",
    dateLabel: "March 10, 2026",
    image: FALLBACK_IMG,
    href: "#",
    imageAlt: "",
  },
  {
    id: "p2",
    title: "White-Label Shopify Development: Complete Guide for Agencies (2026)",
    dateLabel: "March 10, 2026",
    image: FALLBACK_IMG,
    href: "#",
    imageAlt: "",
  },
  {
    id: "p3",
    title: "White-Label Shopify Development: Complete Guide for Agencies (2026)",
    dateLabel: "March 10, 2026",
    image: FALLBACK_IMG,
    href: "#",
    imageAlt: "",
  },
];

export default async function LatestNewsSection() {
  const nodes = await getRecentPostNodes();
  const posts =
    nodes.length > 0
      ? nodes.map((node) => ({
          id: node.id,
          title: stripHtml(node.title) || "Post",
          dateLabel: formatPostDate(node.date),
          image: node.featuredImage?.node?.sourceUrl || FALLBACK_IMG,
          imageAlt: node.featuredImage?.node?.altText || "",
          href: wpPermalink(node.uri),
        }))
      : STATIC_POSTS;

  return (
    <section className="home-blog full-section xl:pt-28 xl:pb-36">
      <div className="container">
        <div className="header-wrap grid gap-[0.5em] pb-space-mini text-center animated wpb_animate wpb_fadeUp xl:pb-20 xl:text-lg">
          <h3 className="mb-0 font-48 font-normal">Our Blog</h3>
          <h2 className="main-title mb-0">Latest News</h2>
          <p>Read our latest news to get updated with markets</p>
        </div>
        <div
          className="animated wpb_animate wpb_fadeUp grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8"
        >
          {posts.map((post, index) => (
            <div key={post.id} className="column bg-black-light wpb_animate wpb_fadeUp" style={{ animationDelay: `${(index + 2) * 0.6}s` }}>
              <a href={post.href} className="block text-inherit no-underline">
                <figure>
                  <img src={post.image} alt={post.imageAlt} style={{ opacity: 1 }} />
                </figure>
                <div className="px-space-small py-space-small">
                  <h2 className="font-22 pb-2 font-bold">{post.title}</h2>
                  <p>{post.dateLabel}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="btn-wrap pt-space-small text-center xl:pt-14">
          <a className="btn btn-primary" href={postsArchiveUrl()}>
            View More Blogs
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
    </section>
  );
}
