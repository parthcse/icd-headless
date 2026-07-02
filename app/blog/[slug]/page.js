import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import BlogPostBanner from "@/components/blog/BlogPostBanner";
import BlogTableOfContents from "@/components/blog/BlogTableOfContents";
import BlogShare from "@/components/blog/BlogShare";
import BlogAuthorBox from "@/components/blog/BlogAuthorBox";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { getBlogPost, getRelatedPosts } from "@/lib/blog";
import YoastSchema from "@/components/common/YoastSchema";
import { stripHtml, truncateWords, wpPermalink } from "@/lib/wp-text";

export const revalidate = 600;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Blog | Icecube Digital" };
  return {
    title: `${stripHtml(post.title)} | Icecube Digital`,
    description: truncateWords(stripHtml(post.content), 30),
  };
}

const BackArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post);
  const sidebar = post.blogLeftSidebarContent?.trim();
  const hasSidebar = Boolean(sidebar);
  const featured = post.featuredImage?.node?.sourceUrl;
  const shareUrl = wpPermalink(post.uri);

  const article = (
    <article className="order-1 min-w-0 lg:order-2">
      {featured && (
        <img
          src={featured}
          alt={post.featuredImage?.node?.altText || stripHtml(post.title)}
          className="mb-8 w-full rounded-xl object-cover"
        />
      )}
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="mt-10">
        <a href="/blog/" className="btn btn-secondary inline-flex">
          <BackArrow /> Back to Blog
        </a>
      </div>

      <BlogShare url={shareUrl} title={stripHtml(post.title)} />
      <BlogAuthorBox authorNode={post.author?.node} />
    </article>
  );

  return (
    <>
      <YoastSchema uri={`/blog/${slug}/`} />
      <Header />
      <main>
        <BlogPostBanner post={post} />

        <section className="single-post-main full-section">
          <div className="container">
            {hasSidebar ? (
              <div className="grid gap-8 lg:grid-cols-[300px_1fr] xl:grid-cols-[340px_1fr] xl:gap-12">
                <aside className="order-2 lg:order-1">
                  <div className="rounded-xl border border-[#272727] bg-black-light p-6 lg:sticky lg:top-28 lg:flex lg:max-h-[calc(100vh-9rem)] lg:flex-col">
                    <p className="mb-3 shrink-0 text-sm font-semibold uppercase tracking-wider text-primary">Table of Contents</p>
                    <div data-toc-scroll data-lenis-prevent className="lg:-mr-3 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:pr-3">
                      <BlogTableOfContents html={sidebar} />
                    </div>
                  </div>
                </aside>
                {article}
              </div>
            ) : (
              <div className="mx-auto max-w-3xl">{article}</div>
            )}

            <RelatedPosts posts={related} />
          </div>
        </section>

        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
