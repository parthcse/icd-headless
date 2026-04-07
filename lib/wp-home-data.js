import client from "./apollo-client";
import {
  CASE_STUDIES_QUERY,
  RECENT_POSTS_QUERY,
  TESTIMONIALS_QUERY,
} from "../graphql/homeQueries";

export async function getCaseStudyNodes() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({
      query: CASE_STUDIES_QUERY,
      variables: { first: 12 },
    });
    return data?.caseStudies?.nodes ?? [];
  } catch {
    return [];
  }
}

export async function getTestimonialNodes() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({
      query: TESTIMONIALS_QUERY,
      variables: { first: 12 },
      fetchPolicy: "no-cache",
    });
    return data?.testimonials?.nodes ?? [];
  } catch {
    return [];
  }
}

export async function getRecentPostNodes() {
  if (!process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT) return [];
  try {
    const { data } = await client.query({
      query: RECENT_POSTS_QUERY,
      variables: { first: 3 },
    });
    return data?.posts?.nodes ?? [];
  } catch {
    return [];
  }
}
