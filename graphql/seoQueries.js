import { gql } from "@apollo/client";

// Yoast SEO JSON-LD (@graph) for any content URL. `nodeByUri` resolves pages,
// service pages, posts, case studies, portfolios, etc.; `seo` comes from the
// "Add WPGraphQL for SEO" plugin (Yoast bridge).
export const SEO_BY_URI_QUERY = gql`
  query SeoByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on ContentNode {
        seo {
          schema {
            raw
          }
        }
      }
    }
  }
`;

// Custom post type archive SEO (e.g. /case-studies/). Yoast exposes archive
// settings only under the root `seo.contentTypes` query, not on the node; the
// JSON-LD lives inside `archive.fullHead`.
export const CONTENT_TYPE_ARCHIVE_SEO_QUERY = gql`
  query ContentTypeArchiveSeo {
    seo {
      contentTypes {
        caseStudy {
          archive {
            hasArchive
            archiveLink
            fullHead
          }
        }
      }
    }
  }
`;
