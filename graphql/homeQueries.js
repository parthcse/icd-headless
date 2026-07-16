import { gql } from "@apollo/client";

// Home case studies. Pass `in` (array of database IDs) to hand-pick a set;
// omit it (null) to fall back to the latest `first` by date.
export const CASE_STUDIES_QUERY = gql`
  query CaseStudiesForHome($first: Int = 6, $in: [ID!]) {
    caseStudies(first: $first, where: { in: $in, orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        databaseId
        title
        content
        uri
        caseStudiesFields {
          caseStudyTitle
        }
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
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
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`;
