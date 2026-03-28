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

/** Base fields (always valid on icd.icecubedev.com today). */
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
      }
    }
  }
`;

/**
 * When ACF fields are exposed on Testimonial in WPGraphQL (e.g. WPGraphQL for ACF),
 * this query is tried first. Field names: description (testimonial copy), tmDesignation (role line).
 */
export const TESTIMONIALS_QUERY_WITH_ACF = gql`
  query TestimonialsForHomeWithAcf($first: Int = 12) {
    testimonials(first: $first, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        title
        content
        uri
        description
        tmDesignation
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
