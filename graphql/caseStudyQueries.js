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
        caseStudiesFields {
          caseStudyTitle
        }
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
          caseStudiesFields {
            caseStudyTitle
          }
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

// All case study slugs — for generateStaticParams on the single page.
export const CASE_STUDY_SLUGS_QUERY = gql`
  query CaseStudySlugs {
    caseStudies(first: 100) {
      nodes {
        slug
      }
    }
  }
`;

// Single case study by URI (e.g. /case-studies/<slug>/) — the detail page.
// `caseStudy` doesn't accept SLUG as an idType, so we query by URI.
export const CASE_STUDY_SINGLE_QUERY = gql`
  query CaseStudySingle($uri: ID!) {
    caseStudy(id: $uri, idType: URI) {
      title
      caseStudiesFields {
        caseStudyTitle
        csliveWebsiteUrl
        caseStudyTopSection {
          topSectionEyebrow
          csTopSectionTitle
          csTopSectionContent
        }
        caseStudyResults {
          csResultsContent
          csResultsImage {
            node {
              sourceUrl
              altText
            }
          }
          csResultsMetrics {
            csMetricsValue
            csMetricsLabel
          }
        }
        caseStudyChallenges {
          csChallengesContent
          csChallengesImages {
            nodes {
              sourceUrl
              altText
            }
          }
        }
        caseStudySolutions {
          csSolutionsContent
          csSolutionsImages {
            nodes {
              sourceUrl
              altText
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
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        caseStudiesFields {
          caseStudyTitle
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
