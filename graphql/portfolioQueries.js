import { gql } from "@apollo/client";

export const PORTFOLIO_BY_IDS_QUERY = gql`
  query PortfolioByIds($in: [ID!]) {
    portfolios(first: 3, where: { in: $in }) {
      nodes {
        id
        databaseId
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        portfolioFields {
          portfolioTitle
          portfolioMetrics {
            metricsValue
            metricsLabel
          }
          portfolioShortDescription
          portfolioAuthorName
          portfolioAuthorDesignation
        }
      }
    }
  }
`;

/* ── /our-portfolio/ gallery: category filter + paginated (load-more) fetch ── */

// Filter tabs — terms come back in WP term order (matches the live site).
export const PORTFOLIO_CATEGORIES_QUERY = gql`
  query PortfolioCategories {
    portfolioCategories(first: 100) {
      nodes {
        name
        slug
        count
      }
    }
  }
`;

// One page of portfolios (All tab), cursor-paginated for "Load More".
export const PORTFOLIO_PAGE_QUERY = gql`
  query PortfolioPage($first: Int!, $after: String) {
    portfolios(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        databaseId
        title
        uri
        portfolioFields {
          portfolioTitle
        }
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        portfolioCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

// All portfolio slugs — for generateStaticParams on the single page.
export const PORTFOLIO_SLUGS_QUERY = gql`
  query PortfolioSlugs {
    portfolios(first: 100) {
      nodes {
        slug
      }
    }
  }
`;

// Single portfolio by slug — for the /portfolio/<slug>/ detail page.
export const PORTFOLIO_BY_SLUG_QUERY = gql`
  query PortfolioBySlug($slug: ID!) {
    portfolio(id: $slug, idType: SLUG) {
      title
      portfolioFields {
        portfolioTitle
        portfolioLabel
        liveWebsiteUrl
        workPerformedList
        portfolioWebsiteImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

// One page of portfolios for a single category, cursor-paginated.
export const PORTFOLIO_CATEGORY_PAGE_QUERY = gql`
  query PortfolioCategoryPage($slug: ID!, $first: Int!, $after: String) {
    portfolioCategory(id: $slug, idType: SLUG) {
      portfolios(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          databaseId
          title
          uri
          portfolioFields {
            portfolioTitle
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          portfolioCategories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  }
`;
