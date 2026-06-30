import client from "./apollo-client";
import {
  BLOG_POSTS_QUERY,
  BLOG_POSTS_BY_AUTHOR_QUERY,
  BLOG_POSTS_BY_CATEGORY_QUERY,
  RELATED_POSTS_QUERY,
  AUTHOR_QUERY,
  CATEGORY_QUERY,
  BLOG_POST_QUERY,
  BLOG_POST_QUERY_BASE,
} from "../graphql/blogQueries";

export const BLOG_PER_PAGE = 24;

function isConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT);
}

/**
 * One page of blog posts + how many pages there are — a single offset-paginated
 * query (WPGraphQL Offset Pagination plugin), exact live total.
 * @returns {Promise<{posts: any[], page: number, totalPages: number}>}
 */
export async function getBlogPage(page = 1, perPage = BLOG_PER_PAGE) {
  const safePage = Math.max(1, Math.floor(Number(page)) || 1);
  if (!isConfigured()) return { posts: [], page: safePage, totalPages: 1 };

  try {
    const { data } = await client.query({
      query: BLOG_POSTS_QUERY,
      variables: { size: perPage, offset: (safePage - 1) * perPage },
    });
    const conn = data?.posts;
    const posts = conn?.nodes ?? [];
    const total = conn?.pageInfo?.offsetPagination?.total ?? 0;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    return { posts, page: safePage, totalPages };
  } catch {
    return { posts: [], page: safePage, totalPages: 1 };
  }
}

/**
 * One blog post by slug, with content + meta + (optional) left-sidebar HTML.
 * Tries the full query first; if `blogLeftSidebarContent` isn't registered to
 * WPGraphQL yet, falls back to the base query (sidebar just stays empty).
 * @returns {Promise<object|null>}
 */
export async function getBlogPost(slug) {
  if (!isConfigured() || !slug) return null;
  for (const query of [BLOG_POST_QUERY, BLOG_POST_QUERY_BASE]) {
    try {
      const { data } = await client.query({ query, variables: { slug } });
      return data?.post ?? null;
    } catch {
      // First attempt can fail if the sidebar field isn't in the schema yet —
      // fall through and retry with the base query.
    }
  }
  return null;
}

/** Up to `limit` newest posts in the post's first category, excluding it. */
export async function getRelatedPosts(post, limit = 3) {
  const categoryId = post?.categories?.nodes?.[0]?.databaseId;
  if (!isConfigured() || !categoryId) return [];
  try {
    const { data } = await client.query({
      query: RELATED_POSTS_QUERY,
      variables: { categoryId, notIn: [String(post.databaseId)], size: limit },
    });
    return data?.posts?.nodes ?? [];
  } catch {
    return [];
  }
}

/** A page of posts by author slug + the author's name/bio for the banner. */
export async function getAuthorPage(slug, page = 1, perPage = BLOG_PER_PAGE) {
  const safePage = Math.max(1, Math.floor(Number(page)) || 1);
  if (!isConfigured() || !slug) return null;
  try {
    const { data: a } = await client.query({ query: AUTHOR_QUERY, variables: { slug } });
    const author = a?.user;
    if (!author) return null;
    const { data } = await client.query({
      query: BLOG_POSTS_BY_AUTHOR_QUERY,
      variables: { authorId: author.databaseId, size: perPage, offset: (safePage - 1) * perPage },
    });
    const conn = data?.posts;
    const total = conn?.pageInfo?.offsetPagination?.total ?? 0;
    return {
      author,
      posts: conn?.nodes ?? [],
      page: safePage,
      totalPages: Math.max(1, Math.ceil(total / perPage)),
    };
  } catch {
    return null;
  }
}

/** A page of posts in a category slug + the category name for the banner. */
export async function getCategoryPage(slug, page = 1, perPage = BLOG_PER_PAGE) {
  const safePage = Math.max(1, Math.floor(Number(page)) || 1);
  if (!isConfigured() || !slug) return null;
  try {
    const { data: c } = await client.query({ query: CATEGORY_QUERY, variables: { slug } });
    const category = c?.category;
    if (!category) return null;
    const { data } = await client.query({
      query: BLOG_POSTS_BY_CATEGORY_QUERY,
      variables: { categoryId: category.databaseId, size: perPage, offset: (safePage - 1) * perPage },
    });
    const conn = data?.posts;
    const total = conn?.pageInfo?.offsetPagination?.total ?? 0;
    return {
      category,
      posts: conn?.nodes ?? [],
      page: safePage,
      totalPages: Math.max(1, Math.ceil(total / perPage)),
    };
  } catch {
    return null;
  }
}
