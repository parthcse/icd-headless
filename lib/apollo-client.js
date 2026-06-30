import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const uri = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT;

const bypassToken = process.env.WORDPRESS_GRAPHQL_BYPASS_TOKEN;

// Statuses worth retrying because they're usually transient (rate limit /
// gateway). 403 is deliberately excluded: a Cloudflare bot/IP block returns 403
// on every attempt, so retrying it only slows the build without ever succeeding.
const RETRYABLE_STATUS = new Set([408, 429, 500, 502, 503, 504]);
const MAX_ATTEMPTS = 3;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// One-shot diagnostic: on the first non-OK response, log who blocked it and why
// (status, whether the bypass header is even being sent, Cloudflare headers, and
// a body snippet). Reveals Cloudflare-challenge vs origin/Wordfence vs rate-limit
// in one build-log line. Remove once the 403s are gone.
let blockLogged = false;
async function logBlockOnce(res) {
  if (blockLogged || res.ok) return;
  blockLogged = true;
  let body = "";
  try {
    body = (await res.clone().text()).slice(0, 300).replace(/\s+/g, " ");
  } catch {}
  console.error(
    `[wp] first non-OK response: status=${res.status} bypassTokenSet=${Boolean(bypassToken)} ` +
      `server=${res.headers.get("server")} cf-ray=${res.headers.get("cf-ray")} ` +
      `cf-mitigated=${res.headers.get("cf-mitigated")} body="${body}"`
  );
}

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
      await logBlockOnce(res);
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
