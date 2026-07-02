import client from "./apollo-client";
import {
  CASE_STUDY_CATEGORIES_QUERY,
  CASE_STUDY_PAGE_QUERY,
  CASE_STUDY_CATEGORY_PAGE_QUERY,
} from "../graphql/caseStudyQueries";
import { stripHtml, truncateWords } from "./wp-text";

// Same page size as the portfolio gallery.
export const CASE_STUDY_PAGE_SIZE = 18;

function mapNode(n) {
  return {
    id: n.databaseId,
    title: n.title,
    href: n.uri || "#", // e.g. /case-studies/<slug>/
    excerpt: truncateWords(stripHtml(n.content), 26),
    image: n.featuredImage?.node?.sourceUrl || "",
    imageAlt: n.featuredImage?.node?.altText || n.title,
    categories: (n.csCategories?.nodes ?? []).map((c) => ({ name: c.name, slug: c.slug })),
  };
}

const EMPTY = { items: [], endCursor: null, hasNextPage: false };

/** Filter tabs (name, slug, count) in WP term order — only non-empty terms. */
export async function getCaseStudyCategories() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({ query: CASE_STUDY_CATEGORIES_QUERY, fetchPolicy: "no-cache" });
    return (data?.csCategories?.nodes ?? [])
      .filter((c) => (c.count ?? 0) > 0)
      .map((c) => ({ name: c.name, slug: c.slug, count: c.count }));
  } catch {
    return [];
  }
}

/**
 * One page of case studies. `category` is a category slug or "all".
 * Returns { items, endCursor, hasNextPage } for cursor-based "Load More".
 */
export async function getCaseStudyPage({ category = "all", after = null, first = CASE_STUDY_PAGE_SIZE } = {}) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return EMPTY;
  try {
    if (category && category !== "all") {
      const { data } = await client.query({
        query: CASE_STUDY_CATEGORY_PAGE_QUERY,
        variables: { slug: category, first, after },
        fetchPolicy: "no-cache",
      });
      const conn = data?.csCategory?.caseStudies;
      if (!conn) return EMPTY;
      return {
        items: (conn.nodes ?? []).map(mapNode),
        endCursor: conn.pageInfo?.endCursor ?? null,
        hasNextPage: conn.pageInfo?.hasNextPage ?? false,
      };
    }

    const { data } = await client.query({
      query: CASE_STUDY_PAGE_QUERY,
      variables: { first, after },
      fetchPolicy: "no-cache",
    });
    const conn = data?.caseStudies;
    if (!conn) return EMPTY;
    return {
      items: (conn.nodes ?? []).map(mapNode),
      endCursor: conn.pageInfo?.endCursor ?? null,
      hasNextPage: conn.pageInfo?.hasNextPage ?? false,
    };
  } catch {
    return EMPTY;
  }
}
