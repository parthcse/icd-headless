import client from "./apollo-client";
import {
  CASE_STUDIES_QUERY,
  RECENT_POSTS_QUERY,
} from "../graphql/homeQueries";
import { PORTFOLIO_BY_IDS_QUERY } from "../graphql/portfolioQueries";
import { CASE_STUDY_BY_IDS_QUERY } from "../graphql/caseStudyQueries";

/**
 * Home case studies.
 * - Pass an array of database IDs to show a hand-picked set in that exact order.
 * - Pass nothing (or an empty array) to fall back to the latest `first` by date.
 */
export async function getCaseStudyNodes(ids, first = 6) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const hasIds = ids?.length > 0;
    const { data } = await client.query({
      query: CASE_STUDIES_QUERY,
      variables: {
        first: hasIds ? ids.length : first,
        in: hasIds ? ids.map(String) : null,
      },
    });
    const nodes = data?.caseStudies?.nodes ?? [];
    if (!hasIds) return nodes;
    // WPGraphQL `where: { in }` ignores the array order. Re-sort to match
    // the requested IDs exactly.
    const order = new Map(ids.map((id, i) => [String(id), i]));
    return [...nodes].sort(
      (a, b) => (order.get(String(a.databaseId)) ?? 0) - (order.get(String(b.databaseId)) ?? 0)
    );
  } catch {
    return [];
  }
}

export async function getPortfolioNodesByIds(ids) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || !ids?.length) return [];
  try {
    const { data } = await client.query({
      query: PORTFOLIO_BY_IDS_QUERY,
      variables: { in: ids.map(String) },
    });
    const nodes = data?.portfolios?.nodes ?? [];
    const order = new Map(ids.map((id, i) => [String(id), i]));
    return [...nodes].sort(
      (a, b) => (order.get(String(a.databaseId)) ?? 0) - (order.get(String(b.databaseId)) ?? 0)
    );
  } catch {
    return [];
  }
}

// Service-page case study section: same by-IDs, order-preserving logic as
// portfolio, but against the `caseStudies` CPT + `caseStudiesFields` ACF group.
export async function getCaseStudyNodesByIds(ids) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || !ids?.length) return [];
  try {
    const { data } = await client.query({
      query: CASE_STUDY_BY_IDS_QUERY,
      variables: { in: ids.map(String) },
    });
    const nodes = data?.caseStudies?.nodes ?? [];
    const order = new Map(ids.map((id, i) => [String(id), i]));
    return [...nodes].sort(
      (a, b) => (order.get(String(a.databaseId)) ?? 0) - (order.get(String(b.databaseId)) ?? 0)
    );
  } catch {
    return [];
  }
}

export async function getRecentPostNodes() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({
      query: RECENT_POSTS_QUERY,
      variables: { first: 3 },
    });
    return data?.posts?.nodes ?? [];
  } catch {
    return [];
  }
}
