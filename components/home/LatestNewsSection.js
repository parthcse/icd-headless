import Image from "next/image";
import Link from "next/link";
import Reveal from "../animations/Reveal";
import ErrorState from "../common/ErrorState";
import client from "../../lib/apollo-client";
import { RECENT_POSTS_QUERY } from "../../graphql/posts";

function formatDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export default async function LatestNewsSection() {
  let nodes = [];
  try {
    const { data } = await client.query({
      query: RECENT_POSTS_QUERY,
      variables: { first: 3 },
    });
    nodes = data?.posts?.nodes || [];
  } catch (e) {
    return (
      <ErrorState
        title="Could not load latest news"
        message={e?.message || "Please try again later."}
      />
    );
  }

  return (
    <Reveal>
      <section className="py-20 lg:py-28">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-orange-400 mb-3">
              Our Blog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold leading-tight">
              Latest News
            </h2>
            <p className="mt-4 text-zinc-400 text-[15px] max-w-xl leading-relaxed">
              Perspectives from our team on design, development, and growth for modern brands.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-2.5 text-[13px] font-semibold text-zinc-100 hover:border-orange-500 hover:text-orange-400 transition-all duration-300 shrink-0"
          >
            View All Articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {nodes.map((post) => {
            const img = post?.featuredImage?.node?.sourceUrl;
            const alt = post?.featuredImage?.node?.altText || post.title;
            const date = formatDate(post?.date);

            return (
              <Link href={post.uri || "#"} key={post.databaseId} className="group">
                <article className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/70 transition-all duration-300 hover:border-orange-500/40 hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                    {img ? (
                      <Image
                        src={img}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-sm">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    {date && (
                      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-2">{date}</p>
                    )}
                    <h3 className="text-[15px] font-semibold text-white leading-snug group-hover:text-orange-400 transition-colors duration-200 line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-orange-400 group-hover:text-orange-300 transition-colors">
                      Read More
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
    </Reveal>
  );
}
