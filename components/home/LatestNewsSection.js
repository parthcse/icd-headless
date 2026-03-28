import { getRecentPostNodes } from "../../lib/wp-home-data";
import { formatPostDate, stripHtml, wpPermalink } from "../../lib/wp-text";

const FALLBACK_IMG = "/images/home-our-client-slider.png";

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
    <section className="home-blog full-section">
      <div className="container">
        <div
          className="header-wrap mx-auto grid max-w-3xl gap-[0.5em] pb-space-mini text-center animate-init"
          data-anim="animate__fadeInUp animate__delay-0.4s"
        >
          <h3 className="font-30 mb-0 font-normal">Our Blog</h3>
          <h2 className="main-title mb-0">Latest News</h2>
          <p className="mx-auto max-w-3xl">Read our latest news to get updated with markets</p>
        </div>
        <div
          className="grid grid-cols-1 gap-4 animate-init md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-8 xl:text-lg"
          data-anim="animate__fadeInUp animate__delay-0.6s"
        >
          {posts.map((post) => (
            <div key={post.id} className="column bg-white/5">
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
      </div>
    </section>
  );
}
