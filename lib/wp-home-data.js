import client from "./apollo-client";
import {
  CASE_STUDIES_QUERY,
  RECENT_POSTS_QUERY,
  TESTIMONIALS_QUERY,
  TESTIMONIALS_QUERY_WITH_ACF,
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
      query: TESTIMONIALS_QUERY_WITH_ACF,
      variables: { first: 12 },
    });
    return data?.testimonials?.nodes ?? [];
  } catch {
    try {
      const { data } = await client.query({
        query: TESTIMONIALS_QUERY,
        variables: { first: 12 },
      });
      return data?.testimonials?.nodes ?? [];
    } catch {
      return [];
    }
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
