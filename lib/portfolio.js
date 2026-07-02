import client from "./apollo-client";
import {
  PORTFOLIO_CATEGORIES_QUERY,
  PORTFOLIO_PAGE_QUERY,
  PORTFOLIO_CATEGORY_PAGE_QUERY,
  PORTFOLIO_SLUGS_QUERY,
  PORTFOLIO_BY_SLUG_QUERY,
} from "../graphql/portfolioQueries";

export const PORTFOLIO_PAGE_SIZE = 18;

function mapNode(n) {
  return {
    id: n.databaseId,
    title: n.title,
    href: n.uri || "#", // internal path to the (future) single-portfolio page: /portfolio/<slug>/
    image: n.featuredImage?.node?.sourceUrl || "",
    imageAlt: n.featuredImage?.node?.altText || n.title,
    categories: (n.portfolioCategories?.nodes ?? []).map((c) => ({ name: c.name, slug: c.slug })),
  };
}

const EMPTY = { items: [], endCursor: null, hasNextPage: false };

/** Filter tabs (name, slug, count) in WP term order. */
export async function getPortfolioCategories() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({ query: PORTFOLIO_CATEGORIES_QUERY, fetchPolicy: "no-cache" });
    return (data?.portfolioCategories?.nodes ?? []).map((c) => ({ name: c.name, slug: c.slug, count: c.count }));
  } catch {
    return [];
  }
}

/**
 * One page of portfolio items. `category` is a category slug or "all".
 * Returns { items, endCursor, hasNextPage } for cursor-based "Load More".
 */
export async function getPortfolioPage({ category = "all", after = null, first = PORTFOLIO_PAGE_SIZE } = {}) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return EMPTY;
  try {
    if (category && category !== "all") {
      const { data } = await client.query({
        query: PORTFOLIO_CATEGORY_PAGE_QUERY,
        variables: { slug: category, first, after },
        fetchPolicy: "no-cache",
      });
      const conn = data?.portfolioCategory?.portfolios;
      if (!conn) return EMPTY;
      return {
        items: (conn.nodes ?? []).map(mapNode),
        endCursor: conn.pageInfo?.endCursor ?? null,
        hasNextPage: conn.pageInfo?.hasNextPage ?? false,
      };
    }

    const { data } = await client.query({
      query: PORTFOLIO_PAGE_QUERY,
      variables: { first, after },
      fetchPolicy: "no-cache",
    });
    const conn = data?.portfolios;
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

/** All portfolio slugs — for generateStaticParams on /portfolio/[slug]/. */
export async function getAllPortfolioSlugs() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({ query: PORTFOLIO_SLUGS_QUERY, fetchPolicy: "no-cache" });
    return (data?.portfolios?.nodes ?? []).map((n) => n.slug).filter(Boolean);
  } catch {
    return [];
  }
}

/** Single portfolio (detail page) by slug. Returns null if not found. */
export async function getPortfolioBySlug(slug) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || !slug) return null;
  try {
    const { data } = await client.query({
      query: PORTFOLIO_BY_SLUG_QUERY,
      variables: { slug },
      fetchPolicy: "no-cache",
    });
    const p = data?.portfolio;
    if (!p) return null;
    const f = p.portfolioFields || {};
    return {
      title: p.title,
      label: f.portfolioLabel || "",
      liveUrl: f.liveWebsiteUrl || "",
      workPerformedHtml: f.workPerformedList || "",
      image: f.portfolioWebsiteImage?.node?.sourceUrl || "",
      imageAlt: f.portfolioWebsiteImage?.node?.altText || p.title,
    };
  } catch {
    return null;
  }
}
