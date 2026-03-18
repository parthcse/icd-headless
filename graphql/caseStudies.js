import { gql } from "@apollo/client";

export const CASE_STUDIES_QUERY = gql`
  query CaseStudies($first: Int = 3) {
    caseStudies(first: $first) {
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
      }
    }
  }
`;

