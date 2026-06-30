import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: uri || "https://example.invalid/graphql",
    fetch,
  }),
  cache: new InMemoryCache(),
});

export default client;
