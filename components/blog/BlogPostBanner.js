import { Fragment } from "react";
import { formatPostDate, readingTime, stripHtml } from "@/lib/wp-text";

const UserIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </svg>
);
const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" aria-hidden="true">
    <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <circle cx="7" cy="7" r="1.5" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export default function BlogPostBanner({ post }) {
  const author = post.author?.node;
  const categories = post.categories?.nodes || [];
  const minutes = post.content ? readingTime(post.content) : null;

  const meta = [
    author?.name && (
      <a
        key="author"
        href={author.uri ? `/blog/author/${author.slug}/` : "#"}
        className="inline-flex items-center gap-2 font-medium transition-colors hover:text-primary"
      >
        <UserIcon /> {stripHtml(author.name)}
      </a>
    ),
    post.date && (
      <span key="date" className="inline-flex items-center gap-2 font-medium">
        <CalendarIcon /> {formatPostDate(post.date)}
      </span>
    ),
    minutes && (
      <span key="read" className="inline-flex items-center gap-2 font-medium">
        <ClockIcon /> {minutes} min read
      </span>
    ),
  ].filter(Boolean);

  return (
    <section className="services-banner full-section relative border-t-0 pt-28 pb-14 xl:pt-40 xl:pb-20">
      <div className="absolute inset-0">
        <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
        <span className="absolute inset-0 bg-black/55" />
      </div>

      <div className="container relative z-10 mx-auto max-w-4xl text-center animate fadeUp">
        {categories.length > 0 && (
          <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <a
                key={cat.uri || cat.name}
                href={cat.uri || "#"}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-black-light"
              >
                <TagIcon /> {cat.name}
              </a>
            ))}
          </div>
        )}

        <h1
          className="font-48 font-semibold leading-tight xl:text-[44px]"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />

        {/* separator between title and meta */}
        <span className="mx-auto mt-6 block h-0.5 w-12 rounded-full bg-primary" />

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/70">
          {meta.map((item, i) => (
            <Fragment key={item.key}>
              {i > 0 && <span className="h-4 w-px bg-primary" aria-hidden="true" />}
              {item}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
