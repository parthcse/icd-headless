import { gql } from "@apollo/client";

// Fields used by the listing/related cards.
const CARD_FIELDS = `
  id
  databaseId
  title
  uri
  date
  author { node { name } }
  featuredImage { node { sourceUrl altText } }
`;

// Fields shared by both single-post queries.
const POST_CORE = `
  databaseId
  title
  date
  uri
  content
  author {
    node {
      name
      uri
      slug
    }
  }
  categories(first: 10) {
    nodes {
      name
      uri
      databaseId
    }
  }
  featuredImage {
    node {
      sourceUrl
      altText
    }
  }
`;

/** Blog listing — offset-paginated, returns the page + exact total. */
export const BLOG_POSTS_QUERY = gql`
  query BlogPosts($size: Int = 24, $offset: Int = 0) {
    posts(
      where: {
        offsetPagination: { size: $size, offset: $offset }
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
      }
    ) {
      pageInfo { offsetPagination { total } }
      nodes { ${CARD_FIELDS} }
    }
  }
`;

/** Posts by author (databaseId), offset-paginated. */
export const BLOG_POSTS_BY_AUTHOR_QUERY = gql`
  query BlogPostsByAuthor($authorId: Int!, $size: Int = 24, $offset: Int = 0) {
    posts(
      where: {
        author: $authorId
        offsetPagination: { size: $size, offset: $offset }
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
      }
    ) {
      pageInfo { offsetPagination { total } }
      nodes { ${CARD_FIELDS} }
    }
  }
`;

/** Posts in a category (databaseId), offset-paginated. */
export const BLOG_POSTS_BY_CATEGORY_QUERY = gql`
  query BlogPostsByCategory($categoryId: Int!, $size: Int = 24, $offset: Int = 0) {
    posts(
      where: {
        categoryId: $categoryId
        offsetPagination: { size: $size, offset: $offset }
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
      }
    ) {
      pageInfo { offsetPagination { total } }
      nodes { ${CARD_FIELDS} }
    }
  }
`;

/** Up to `size` newest posts in a category, excluding the current post. */
export const RELATED_POSTS_QUERY = gql`
  query RelatedPosts($categoryId: Int!, $notIn: [ID!], $size: Int = 3) {
    posts(
      where: {
        categoryId: $categoryId
        notIn: $notIn
        offsetPagination: { size: $size, offset: 0 }
        orderby: { field: DATE, order: DESC }
        status: PUBLISH
      }
    ) {
      nodes { ${CARD_FIELDS} }
    }
  }
`;

/** Resolve an author by slug (name + bio for the archive banner). */
export const AUTHOR_QUERY = gql`
  query Author($slug: ID!) {
    user(id: $slug, idType: SLUG) {
      databaseId
      name
      description
    }
  }
`;

/** Resolve a category by slug (name for the archive banner). */
export const CATEGORY_QUERY = gql`
  query Category($slug: ID!) {
    category(id: $slug, idType: SLUG) {
      databaseId
      name
      description
    }
  }
`;

/** Single blog post by slug — full version including the left-sidebar meta. */
export const BLOG_POST_QUERY = gql`
  query BlogPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ${POST_CORE}
      blogLeftSidebarContent
    }
  }
`;

/** Same, without the (optional) sidebar meta field. */
export const BLOG_POST_QUERY_BASE = gql`
  query BlogPostBase($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      ${POST_CORE}
    }
  }
`;
