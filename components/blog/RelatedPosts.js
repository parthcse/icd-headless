import BlogCard from "./BlogCard";

export default function RelatedPosts({ posts }) {
  if (!posts?.length) return null;

  return (
    <div className="mt-14 xl:mt-16">
      <h2 className="text-left font-48 font-semibold leading-tight">Related Articles</h2>
      <div className="mt-8 grid animate fadeUp gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
