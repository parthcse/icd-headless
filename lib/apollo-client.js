import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

// The live WordPress is behind Cloudflare, which blocks requests that have no
// User-Agent header (error 1010). Vercel's server-side fetch sends none by
// default, so add one explicitly — otherwise every query 403s and the
// portfolio / case study / blog sections render empty.
const fetchWithUserAgent = (input, init = {}) =>
  fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      "User-Agent": "IcecubeHeadless/1.0 (+https://icecube-headless.vercel.app)",
    },
  });

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: uri || "https://example.invalid/graphql",
    fetch: fetchWithUserAgent,
  }),
  cache: new InMemoryCache(),
});

export default client;
