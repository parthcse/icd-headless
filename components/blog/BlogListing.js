import BlogCard from "./BlogCard";
import BlogPagination from "./BlogPagination";

export default function BlogListing({
  posts,
  page,
  totalPages,
  basePath = "/blog/",
  eyebrow = "Our Blog",
  title = "Insights & Articles",
  subtitle = "Practical guides, industry trends and expert tips on eCommerce, design, development and digital marketing — straight from our team.",
}) {
  return (
    <>
      <section className="common-top-banner full-section relative border-t-0 pt-28 pb-16 xl:pt-40 xl:pb-24">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            aria-hidden="true"
            src="/assets/photos/home-banner-bg.png"
            alt=""
            fetchPriority="high"
          />
          <span className="common-top-banner-overlay" />
        </div>
        <div className="container relative z-10 mx-auto max-w-3xl py-6 text-center animate fadeUp">
          {eyebrow && <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
          <h1 className="font-48 font-semibold leading-tight">{title}</h1>
          {subtitle && <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{subtitle}</p>}
        </div>
      </section>

      <section className="blog-post-grid full-section">
        <div className="container max-w-[1920px]">
          {posts.length ? (
            <div className="grid animate fadeUp gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-muted">No posts to show right now. Please check back soon.</p>
          )}

          <BlogPagination page={page} totalPages={totalPages} basePath={basePath} />
        </div>
      </section>
    </>
  );
}
