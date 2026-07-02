import { gql } from "@apollo/client";

export const PORTFOLIO_BY_IDS_QUERY = gql`
  query PortfolioByIds($in: [ID!]) {
    portfolios(first: 3, where: { in: $in }) {
      nodes {
        id
        databaseId
        title
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        portfolioFields {
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
