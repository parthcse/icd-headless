// TEMPORARY diagnostic route — remove after debugging the Vercel data issue.
// Visit /api/debug-gql on the deployed site to see what the server actually
// gets back from the live WordPress GraphQL endpoint (status, body, env value).
export const dynamic = "force-dynamic";

export async function GET() {
  const endpoint =
    process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_ENDPOINT || "(unset)";
  const body = JSON.stringify({ query: "{ posts(first: 1) { nodes { title } } }" });

  async function probe(label, extraHeaders) {
    const started = Date.now();
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...extraHeaders },
        body,
      });
      const text = await res.text();
      return {
        label,
        status: res.status,
        ok: res.ok,
        ms: Date.now() - started,
        server: res.headers.get("server"),
        cfRay: res.headers.get("cf-ray"),
        bodySnippet: text.slice(0, 400),
      };
    } catch (e) {
      return { label, error: String(e && e.message ? e.message : e), ms: Date.now() - started };
    }
  }

  const results = [];
  results.push(
    await probe("with-UA", {
      "User-Agent": "IcecubeHeadless/1.0 (+https://icecube-headless.vercel.app)",
    })
  );
  results.push(await probe("no-UA", {}));

  return Response.json(
    {
      endpointConfigured: endpoint,
      runtime: process.env.NEXT_RUNTIME || "nodejs",
      results,
    },
    { headers: { "cache-control": "no-store" } }
  );
}
