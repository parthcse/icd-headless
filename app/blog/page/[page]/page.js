import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogListing from "@/components/blog/BlogListing";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import { getBlogPage } from "@/lib/blog";

export const revalidate = 600;

export async function generateMetadata({ params }) {
  const { page } = await params;
  return {
    title: `Blog — Page ${page} | Icecube Digital`,
    description:
      "Practical guides, industry trends and expert tips on eCommerce, design, development and digital marketing from the Icecube Digital team.",
  };
}

export default async function BlogPaginatedPage({ params }) {
  const { page: pageParam } = await params;
  const pageNum = Number(pageParam);

  // Page 1 is the canonical /blog/ — anything invalid 404s.
  if (!Number.isInteger(pageNum) || pageNum < 2) notFound();

  const { posts, page, totalPages } = await getBlogPage(pageNum);
  if (!posts.length || pageNum > totalPages) notFound();

  return (
    <>
      <Header />
      <main>
        <BlogListing posts={posts} page={page} totalPages={totalPages} />
        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
