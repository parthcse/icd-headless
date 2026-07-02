import { gql } from "@apollo/client";

/* ── /case-studies/ gallery: category filter + paginated (load-more) fetch ── */

// Filter tabs — `csCategories` terms come back in WP term order.
export const CASE_STUDY_CATEGORIES_QUERY = gql`
  query CaseStudyCategories {
    csCategories(first: 100) {
      nodes {
        name
        slug
        count
      }
    }
  }
`;

// One page of case studies (All tab), cursor-paginated for "Load More".
export const CASE_STUDY_PAGE_QUERY = gql`
  query CaseStudyPage($first: Int!, $after: String) {
    caseStudies(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      nodes {
        databaseId
        title
        uri
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        csCategories {
          nodes {
            name
            slug
          }
        }
      }
    }
  }
`;

// One page of case studies for a single category, cursor-paginated.
export const CASE_STUDY_CATEGORY_PAGE_QUERY = gql`
  query CaseStudyCategoryPage($slug: ID!, $first: Int!, $after: String) {
    csCategory(id: $slug, idType: SLUG) {
      caseStudies(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          databaseId
          title
          uri
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          csCategories {
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

export const CASE_STUDY_BY_IDS_QUERY = gql`
  query CaseStudiesByIds($in: [ID!]) {
    caseStudies(first: 3, where: { in: $in }) {
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
        caseStudiesFields {
          caseStudyMetrics {
            metricsValue
            metricsLabel
          }
          caseStudyShortDescription
          caseStudyAuthorName
          caseStudyAuthorDesignation
        }
      }
    }
  }
`;
