import { gql } from "@apollo/client";

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
