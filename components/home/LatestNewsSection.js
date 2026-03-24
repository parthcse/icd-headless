import Image from "next/image";
import Link from "next/link";
import Reveal from "../animations/Reveal";
import ErrorState from "../common/ErrorState";
import QuoteCTAButton from "../ui/QuoteCTAButton";
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
      <section className="section-pad border-b border-[#202020]">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-[40px]">
          <div className="mb-10 flex flex-col gap-8 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="flex flex-col">
                <span className="section-heading-light">Our Blog</span>
                <span className="section-heading-bold">Latest News</span>
              </h2>
              <p className="mt-6 max-w-2xl font-gilroy text-[24px] leading-snug text-[#bbb]">
                Read our latest news to get updated with markets
              </p>
            </div>
            <QuoteCTAButton href="/blog" className="shrink-0 self-start lg:self-auto">
              View More Blogs
            </QuoteCTAButton>
          </div>

          <div className="flex flex-col gap-[40px] lg:flex-row lg:gap-[40px]">
            {nodes.map((post) => {
              const img = post?.featuredImage?.node?.sourceUrl;
              const alt = post?.featuredImage?.node?.altText || post?.title || "";
              const date = formatDate(post?.date);
              const href = post?.uri || "/blog";

              return (
                <Link href={href} key={post.databaseId} className="group flex-1">
                  <article className="flex h-full flex-col bg-[#151515]">
                    <div className="relative h-[300px] w-full shrink-0 overflow-hidden bg-[#272727]">
                      {img ? (
                        <Image
                          src={img}
                          alt={alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      ) : null}
                    </div>
                    <div className="flex flex-col gap-3 p-6 lg:p-8">
                      <h3 className="font-gilroy-bold text-[28px] leading-tight text-white group-hover:text-[#f17e3f]">
                        {post.title}
                      </h3>
                      {date ? (
                        <p className="font-gilroy text-[16px] text-[#bbb]">{date}</p>
                      ) : null}
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
