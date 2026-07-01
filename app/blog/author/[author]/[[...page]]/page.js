import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import BlogCard from "@/components/blog/BlogCard";
import BlogPagination from "@/components/blog/BlogPagination";
import AuthorProfileCard from "@/components/blog/AuthorProfileCard";
import { getAuthorPage } from "@/lib/blog";
import { getAuthorInfo } from "@/lib/authors";
import { stripHtml } from "@/lib/wp-text";

export const revalidate = 600;

const AUTHOR_PER_PAGE = 16;

// Optional catch-all: undefined → page 1, ["page","2"] → page 2.
function parsePage(seg) {
  if (!seg || seg.length === 0) return 1;
  if (seg.length === 2 && seg[0] === "page") {
    const n = Number(seg[1]);
    return Number.isInteger(n) && n >= 2 ? n : null;
  }
  return null;
}

export async function generateMetadata({ params }) {
  const { author } = await params;
  const info = getAuthorInfo(author);
  return { title: `Posts by ${info.name} | Icecube Digital Blog` };
}

export default async function AuthorArchivePage({ params }) {
  const { author, page } = await params;
  const pageNum = parsePage(page);
  if (pageNum === null) notFound();

  const data = await getAuthorPage(author, pageNum, AUTHOR_PER_PAGE);
  if (!data || !data.posts.length || pageNum > data.totalPages) notFound();

  const info = getAuthorInfo(author, stripHtml(data.author.name));
  const bio = info.bio || stripHtml(data.author.description);
  const basePath = `/blog/author/${author}/`;

  return (
    <>
      <Header />
      <main>
        <section className="services-banner full-section relative border-t-0 pt-28 pb-14 xl:pt-40 xl:pb-20">
          <div className="absolute inset-0">
            <img className="h-full w-full object-cover" aria-hidden="true" src="/assets/photos/home-banner-bg.png" alt="" fetchPriority="high" />
            <span className="absolute inset-0 bg-black/55" />
          </div>
          <div className="container relative z-10 mx-auto max-w-3xl text-center animate fadeUp">
            <p className="mb-3 font-semibold uppercase tracking-[0.2em] text-primary">Author</p>
            <h1 className="font-48 font-semibold leading-tight">{info.name}</h1>
          </div>
        </section>

        <section className="full-section">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-[320px_1fr] xl:gap-12">
              {/* Left — sticky author profile */}
              <aside>
                <div className="lg:sticky lg:top-28">
                  <AuthorProfileCard info={info} />
                </div>
              </aside>

              {/* Right — about + articles + pagination */}
              <div className="min-w-0">
                {bio && (
                  <div className="mb-10 animate fadeUp">
                    <h2 className="font-30 mb-3 font-semibold">About {info.name}</h2>
                    <p className="leading-relaxed text-white/80">{bio}</p>
                  </div>
                )}

                <h3 className="font-30 mb-6 font-semibold">Articles</h3>
                <div className="grid animate fadeUp gap-6 sm:grid-cols-2">
                  {data.posts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>

                <BlogPagination page={data.page} totalPages={data.totalPages} basePath={basePath} />
              </div>
            </div>
          </div>
        </section>

        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
