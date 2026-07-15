import { gql } from "@apollo/client";

/**
 * Team members live in the WordPress `personnel` CPT (URLs are /team/{slug}/).
 * WPGraphQL names: single `personnel`, plural `allPersonnel`.
 *
 * Ordering is DATE DESC — the roster order is controlled by each member's publish
 * date in the CMS (newest first), so reordering the team is a CMS edit, not a
 * code change. The `personnel` CPT has no page-attributes support, so `menuOrder`
 * isn't available on the type.
 */
const MEMBER_CARD_FIELDS = `
  id
  slug
  uri
  title
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
  teamFields {
    memberName
    memberShortName
    memberDesignation
  }
`;

export const TEAM_MEMBERS_QUERY = gql`
  query TeamMembers {
    allPersonnel(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        ${MEMBER_CARD_FIELDS}
      }
    }
  }
`;

/**
 * Everything on the member page comes from ACF (`teamFields`) — the WordPress
 * post body is unused, so `content` is deliberately not queried.
 */
export const TEAM_MEMBER_QUERY = gql`
  query TeamMember($slug: String!) {
    personnelBy(slug: $slug) {
      ${MEMBER_CARD_FIELDS}
      teamFields {
        memberBio
        memberQuote
        memberSkills
      }
    }
  }
`;
