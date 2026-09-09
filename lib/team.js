import client from "./apollo-client";
import { TEAM_MEMBERS_QUERY, TEAM_MEMBER_QUERY } from "../graphql/teamQueries";
import { absolutizeWpMedia } from "./wp-text";

function isConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT);
}

export function mapMember(node) {
  if (!node) return null;
  const f = node.teamFields || {};
  return {
    slug: node.slug,
    href: `/team/${node.slug}/`,
    name: f.memberName || node.title || "",
    shortName: f.memberShortName || f.memberName || node.title || "",
    role: f.memberDesignation || "",
    img: node.featuredImage?.node?.sourceUrl || "",
    imgAlt: node.featuredImage?.node?.altText || "",
    quote: f.memberQuote || "",
    skillsHtml: absolutizeWpMedia(f.memberSkills || ""),
    bioHtml: absolutizeWpMedia(f.memberBio || ""),
  };
}

export async function getTeamMembers() {
  if (!isConfigured()) return [];
  try {
    const { data } = await client.query({ query: TEAM_MEMBERS_QUERY });
    return (data?.allPersonnel?.nodes ?? []).map(mapMember).filter(Boolean);
  } catch {
    return [];
  }
}

export async function getTeamMember(slug) {
  if (!isConfigured()) return null;
  try {
    const { data } = await client.query({ query: TEAM_MEMBER_QUERY, variables: { slug } });
    return mapMember(data?.personnelBy);
  } catch {
    return null;
  }
}
