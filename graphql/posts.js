import { gql } from "@apollo/client";

export const RECENT_POSTS_QUERY = gql`
  query RecentPosts($first: Int = 3) {
    posts(first: $first) {
      nodes {
        databaseId
        title
        uri
        date
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

