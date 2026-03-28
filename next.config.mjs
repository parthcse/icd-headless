/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icd.icecubedev.com",
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.icecubedigital.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

