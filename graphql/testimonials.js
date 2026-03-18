import { gql } from "@apollo/client";

export const TESTIMONIALS_QUERY = gql`
  query Testimonials($first: Int = 3) {
    testimonials(first: $first) {
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

