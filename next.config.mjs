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
};

export default nextConfig;

