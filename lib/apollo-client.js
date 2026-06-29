import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

const bypassToken = process.env.WORDPRESS_GRAPHQL_BYPASS_TOKEN;

const fetchWithBypass = (input, init = {}) =>
  fetch(input, {
    ...init,
    headers: {
      ...init.headers,
      ...(bypassToken ? { "X-Headless-Bypass": bypassToken } : {}),
    },
  });

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: uri || "https://example.invalid/graphql",
    fetch: fetchWithBypass,
  }),
  cache: new InMemoryCache(),
});

export default client;
