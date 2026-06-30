import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

const bypassToken = process.env.WORDPRESS_GRAPHQL_BYPASS_TOKEN;

// Statuses worth retrying because they're usually transient (rate limit /
// gateway). 403 is deliberately excluded: a Cloudflare bot/IP block returns 403
// on every attempt, so retrying it only slows the build without ever succeeding.
const RETRYABLE_STATUS = new Set([408, 429, 500, 502, 503, 504]);
const MAX_ATTEMPTS = 3;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchWithBypass = async (input, init = {}) => {
  const options = {
    ...init,
    headers: {
      ...init.headers,
      ...(bypassToken ? { "X-Headless-Bypass": bypassToken } : {}),
    },
  };

  let res;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      res = await fetch(input, options);
      if (!RETRYABLE_STATUS.has(res.status) || attempt === MAX_ATTEMPTS) return res;
    } catch (err) {
      if (attempt === MAX_ATTEMPTS) throw err;
    }
    await sleep(attempt * 500); // 0.5s, then 1s backoff
  }
  return res;
};

const client = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: uri || "https://example.invalid/graphql",
    fetch: fetchWithBypass,
  }),
  cache: new InMemoryCache(),
});

export default client;
