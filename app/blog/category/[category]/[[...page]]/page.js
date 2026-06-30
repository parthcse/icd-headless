import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogListing from "@/components/blog/BlogListing";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import { getCategoryPage } from "@/lib/blog";
import { stripHtml } from "@/lib/wp-text";

export const revalidate = 600;

function parsePage(seg) {
  if (!seg || seg.length === 0) return 1;
  if (seg.length === 2 && seg[0] === "page") {
    const n = Number(seg[1]);
    return Number.isInteger(n) && n >= 2 ? n : null;
  }
  return null;
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  return { title: `${category} Articles | Icecube Digital Blog` };
}

export default async function CategoryArchivePage({ params }) {
  const { category, page } = await params;
  const pageNum = parsePage(page);
  if (pageNum === null) notFound();

  const data = await getCategoryPage(category, pageNum);
  if (!data || !data.posts.length || pageNum > data.totalPages) notFound();

  const name = stripHtml(data.category.name);
  return (
    <>
      <Header />
      <main>
        <BlogListing
          posts={data.posts}
          page={data.page}
          totalPages={data.totalPages}
          basePath={`/blog/category/${category}/`}
          eyebrow="Category"
          title={name}
          subtitle={stripHtml(data.category.description) || ""}
        />
        <GetQuoteSection />
      </main>
      <Footer />
    </>
  );
}
