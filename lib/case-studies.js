import client from "./apollo-client";
import {
  CASE_STUDY_CATEGORIES_QUERY,
  CASE_STUDY_PAGE_QUERY,
  CASE_STUDY_CATEGORY_PAGE_QUERY,
  CASE_STUDY_SLUGS_QUERY,
  CASE_STUDY_SINGLE_QUERY,
} from "../graphql/caseStudyQueries";
import { stripHtml, truncateWords } from "./wp-text";

// Same page size as the portfolio gallery.
export const CASE_STUDY_PAGE_SIZE = 18;

/**
 * Case studies that have their own bespoke local route under
 * app/(marketing)/case-studies/<slug>/page.js and must NOT be prerendered by
 * the ACF-driven [slug] template. The literal route segment already wins at
 * request time; excluding the slug here also stops generateStaticParams from
 * building a second (broken, ACF-empty) copy. These still appear in the
 * /case-studies listing — their card comes from the CMS post as usual.
 */
export const BESPOKE_CASE_STUDY_SLUGS = ["mahesh-eng-works"];

function mapNode(n) {
  return {
    id: n.databaseId,
    title: n.caseStudiesFields?.caseStudyTitle || n.title,
    href: n.uri || "#", // e.g. /case-studies/<slug>/
    excerpt: truncateWords(stripHtml(n.content), 26),
    image: n.featuredImage?.node?.sourceUrl || "",
    imageAlt: n.featuredImage?.node?.altText || n.caseStudiesFields?.caseStudyTitle || n.title,
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

/** All case study slugs — for generateStaticParams on /case-studies/[slug]/. */
export async function getAllCaseStudySlugs() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({ query: CASE_STUDY_SLUGS_QUERY, fetchPolicy: "no-cache" });
    return (data?.caseStudies?.nodes ?? [])
      .map((n) => n.slug)
      .filter(Boolean)
      .filter((slug) => !BESPOKE_CASE_STUDY_SLUGS.includes(slug));
  } catch {
    return [];
  }
}

function mapImageNodes(conn) {
  return (conn?.nodes ?? [])
    .map((n) => ({ src: n.sourceUrl || "", alt: n.altText || "" }))
    .filter((i) => i.src);
}

/** Single case study (detail page) by slug. Returns null if not found. */
export async function getCaseStudyBySlug(slug) {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || !slug) return null;
  try {
    const { data } = await client.query({
      query: CASE_STUDY_SINGLE_QUERY,
      variables: { uri: `/case-studies/${slug}/` },
      fetchPolicy: "no-cache",
    });
    const cs = data?.caseStudy;
    if (!cs) return null;
    const f = cs.caseStudiesFields || {};
    const top = f.caseStudyTopSection || {};
    const results = f.caseStudyResults || {};
    const challenges = f.caseStudyChallenges || {};
    const solutions = f.caseStudySolutions || {};

    // Results "content" is a comma-separated scope-of-work list → split to chips.
    const scope = (results.csResultsContent || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    return {
      title: f.caseStudyTitle || cs.title || "",
      liveUrl: f.csliveWebsiteUrl || "",
      top: {
        eyebrow: top.topSectionEyebrow || "",
        title: top.csTopSectionTitle || "",
        contentHtml: top.csTopSectionContent || "",
      },
      results: {
        scope,
        image: results.csResultsImage?.node?.sourceUrl || "",
        imageAlt: results.csResultsImage?.node?.altText || cs.title || "",
        metrics: (results.csResultsMetrics ?? [])
          .map((m) => ({ value: m.csMetricsValue || "", label: m.csMetricsLabel || "" }))
          .filter((m) => m.value || m.label),
      },
      challenges: {
        contentHtml: challenges.csChallengesContent || "",
        images: mapImageNodes(challenges.csChallengesImages),
      },
      solutions: {
        contentHtml: solutions.csSolutionsContent || "",
        images: mapImageNodes(solutions.csSolutionsImages),
      },
    };
  } catch {
    return null;
  }
}
