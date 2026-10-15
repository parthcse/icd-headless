import { gql } from "@apollo/client";

/**
 * Queries that back our own XML sitemaps (see lib/sitemap-sources.js).
 *
 * Every one of these asks for the smallest possible payload — a slug and a
 * modified date — and pages through WPGraphQL 100 nodes at a time (its hard
 * `first` ceiling). Nothing here overlaps with the queries that render pages;
 * keeping them separate means a sitemap change can never alter a page's data.
 *
 * `modifiedGmt` is the field Yoast itself uses for <lastmod>. It is returned
 * without a timezone suffix (e.g. "2026-10-15T10:13:11"), so callers append
 * "+00:00" — see toLastmod() in lib/sitemap-sources.js.
 */

export const SITEMAP_POSTS_QUERY = gql`
  query SitemapPosts($after: String) {
    posts(first: 100, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        modifiedGmt
      }
    }
  }
`;

/**
 * WordPress pages. These are NOT used as the list of page URLs — our own routes
 * are (the frontend has pages WordPress has never heard of, and WordPress has
 * pages that now 301 elsewhere). They are queried only to read each page's
 * `modifiedGmt`, so a CMS-only content edit still moves that URL's <lastmod>.
 */
export const SITEMAP_WP_PAGES_QUERY = gql`
  query SitemapWpPages($after: String) {
    pages(first: 100, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        uri
        modifiedGmt
      }
    }
  }
`;

export const SITEMAP_CASE_STUDIES_QUERY = gql`
  query SitemapCaseStudies($after: String) {
    caseStudies(first: 100, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        modifiedGmt
      }
    }
  }
`;

export const SITEMAP_PORTFOLIOS_QUERY = gql`
  query SitemapPortfolios($after: String) {
    portfolios(first: 100, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        modifiedGmt
      }
    }
  }
`;

export const SITEMAP_PERSONNEL_QUERY = gql`
  query SitemapPersonnel($after: String) {
    allPersonnel(first: 100, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        modifiedGmt
      }
    }
  }
`;

/**
 * Authors with at least one published post — `hasPublishedPosts` is what keeps
 * the "admin" account (no posts, no archive worth crawling) out of the sitemap,
 * matching the three URLs Yoast listed.
 */
export const SITEMAP_AUTHORS_QUERY = gql`
  query SitemapAuthors {
    users(first: 100, where: { hasPublishedPosts: POST }) {
      nodes {
        slug
      }
    }
  }
`;

/**
 * Post categories. Only used when SITEMAP_INCLUDE_CATEGORIES is turned on in
 * lib/sitemap-sources.js — `slug` (not `uri`) because WPGraphQL returns child
 * terms as nested paths ("/blog/category/web-development/node-js/") while the
 * frontend route is a single segment ("/blog/category/node-js/").
 */
export const SITEMAP_CATEGORIES_QUERY = gql`
  query SitemapCategories($after: String) {
    categories(first: 100, after: $after, where: { hideEmpty: true }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        count
      }
    }
  }
`;
