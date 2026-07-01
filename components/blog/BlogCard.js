import { formatPostDate, stripHtml } from "@/lib/wp-text";

const FALLBACK_IMG = "/assets/photos/home-our-client-slider.png";

export default function BlogCard({ post }) {
  const node = post.featuredImage?.node;
  const image = node?.sourceUrl || FALLBACK_IMG;
  const alt = node?.altText || stripHtml(post.title) || "Blog post";
  const author = post.author?.node?.name;
  const date = formatPostDate(post.date);
  const href = post.uri || "#"; // relative → opens the in-app blog post page

  return (
    <a
      href={href}
      className="group relative block aspect-[4/3] overflow-hidden rounded-md border border-white/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-black/60"
    >
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-110"
      />

      {/* Hover overlay — title centered (h + v), author + date side by side below */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 px-5 text-center opacity-0 backdrop-blur-md transition-opacity duration-300 ease-out group-hover:opacity-100">
        <h3
          className="font-22 font-semibold leading-snug text-white line-clamp-4"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        {/* orange separator between the title and the meta */}
        <span className="h-0.5 w-9 rounded-full bg-primary" />
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-sm font-semibold text-primary">
          {author ? <span>{author}</span> : null}
          {author && date ? <span className="h-1 w-1 rounded-full bg-primary/60" /> : null}
          {date ? <span>{date}</span> : null}
        </div>
      </div>
    </a>
  );
}
