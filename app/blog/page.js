import Header from "@/components/layout/Header";
import YoastSchema from "@/components/common/YoastSchema";
import Footer from "@/components/layout/Footer";
import PageSchema from "@/components/common/PageSchema";
import BlogListing from "@/components/blog/BlogListing";
import GetQuoteSection from "@/components/home/GetQuoteSection";
import { getBlogPage } from "@/lib/blog";
import { getYoastMetadataByUri } from "@/lib/seo";

export const revalidate = 600; // refresh the listing every 10 minutes

export async function generateMetadata() {
  const yoast = await getYoastMetadataByUri("/blog/");
  return yoast || {
  title: "Blog | Insights & Articles | Icecube Digital",
  description:
    "Practical guides, industry trends and expert tips on eCommerce, design, development and digital marketing from the Icecube Digital team.",
};
}

export default async function BlogPage() {
  const { posts, page, totalPages } = await getBlogPage(1);

  return (
    <>
      <YoastSchema uri="/blog/" />
      <Header />
      <main>
        <BlogListing posts={posts} page={page} totalPages={totalPages} />
        <GetQuoteSection />
      </main>
      <PageSchema uri="/blog/" />
      <Footer />
    </>
  );
}
