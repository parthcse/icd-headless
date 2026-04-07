import { gql } from "@apollo/client";

/**
 * Case study CPT: caseStudy / caseStudies
 * Card description = stripped `content`. Button = `uri` (permalink).
 */
export const CASE_STUDIES_QUERY = gql`
  query CaseStudiesForHome($first: Int = 12) {
    caseStudies(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        content
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

/**
 * Testimonial CPT: designation lives on ACF group `testimonials` (per node), not the root connection.
 */
export const TESTIMONIALS_QUERY = gql`
  query TestimonialsForHome($first: Int = 12) {
    testimonials(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        content
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        testimonials {
          tmDesignation
        }
      }
    }
  }
`;

export const RECENT_POSTS_QUERY = gql`
  query RecentPostsForHome($first: Int = 3) {
    posts(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        date
        uri
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;
