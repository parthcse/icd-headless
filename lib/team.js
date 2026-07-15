import client from "./apollo-client";
import { TEAM_MEMBERS_QUERY, TEAM_MEMBER_QUERY } from "../graphql/teamQueries";
import { absolutizeWpMedia } from "./wp-text";

function isConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT);
}

/**
 * Flatten a `personnel` node into the shape the UI renders. Everything (name,
 * designation, photo, quote, skills) comes from the CMS — add a member in
 * WordPress and they appear; there is no local copy of any of this.
 */
export function mapMember(node) {
  if (!node) return null;
  const f = node.teamFields || {};
  return {
    slug: node.slug,
    href: `/team/${node.slug}/`,
    // `title` is the WP post title ("Umesh"); memberName is the full display name.
    name: f.memberName || node.title || "",
    // Compact label for the about-page roster cards (e.g. "Bhavin M" rather than
    // "Bhavin Madariya"). Optional in the CMS — falls back to the full name when
    // memberShortName is blank. The single member page always uses `name`.
    shortName: f.memberShortName || f.memberName || node.title || "",
    role: f.memberDesignation || "",
    img: node.featuredImage?.node?.sourceUrl || "",
    imgAlt: node.featuredImage?.node?.altText || "",
    quote: f.memberQuote || "",
    skillsHtml: absolutizeWpMedia(f.memberSkills || ""),
    // ACF `member_bio`, not the WordPress post body — the post content is unused.
    bioHtml: absolutizeWpMedia(f.memberBio || ""),
  };
}

/** Whole roster, in CMS date order (newest first). Empty array on failure. */
export async function getTeamMembers() {
  if (!isConfigured()) return [];
  try {
    const { data } = await client.query({ query: TEAM_MEMBERS_QUERY });
    return (data?.allPersonnel?.nodes ?? []).map(mapMember).filter(Boolean);
  } catch {
    return [];
  }
}

/** One member by slug, with bio/quote/skills. Null if missing. */
export async function getTeamMember(slug) {
  if (!isConfigured()) return null;
  try {
    const { data } = await client.query({ query: TEAM_MEMBER_QUERY, variables: { slug } });
    return mapMember(data?.personnelBy);
  } catch {
    return null;
  }
}
