import { REDIRECTS } from "./lib/redirects.mjs";

const SITE = "https://www.icecubedigital.com";

/**
 * Same-domain absolute destinations → paths. Keeps redirects host-relative so
 * they resolve correctly on preview deployments (a hardcoded www URL would bounce
 * preview traffic to production). External URLs are passed through untouched.
 */
function toDestination(to) {
  if (to.startsWith(SITE)) return to.slice(SITE.length) || "/";
  return to;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.icecubedigital.com",
        pathname: "/**",
      },
    ],
  },
  // Legacy URL redirects — edit the list in lib/redirects.js, not here.
  async redirects() {
    return REDIRECTS.map(([source, to]) => ({
      source,
      destination: toDestination(to),
      statusCode: 301,
    }));
  },
};

export default nextConfig;

