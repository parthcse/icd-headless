import BlogCard from "./BlogCard";

export default function RelatedPosts({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="full-section">
      <div className="container">
        <div className="heading-wrap animate fadeUp">
          <h3 className="font-48 font-normal">Keep Reading</h3>
          <h2 className="main-title">Related Articles</h2>
        </div>
        <div className="grid animate fadeUp gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
