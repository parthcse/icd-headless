import { gql } from "@apollo/client";

/**
 * Portfolio CPT: queried by an array of database IDs (post__in).
 *
 * The ACF field group (portfolio_metrics repeater, portfolio_short_description,
 * portfolio_author_name, portfolio_author_designation) is exposed in WPGraphQL
 * under the `portfolioFields` GraphQL type on the `Portfolio` type.
 */
export const PORTFOLIO_BY_IDS_QUERY = gql`
  query PortfolioCaseStudies($in: [ID!]) {
    allPortfolio(where: { in: $in }) {
      nodes {
        id
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
