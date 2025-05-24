import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "web-assets.same.dev",
      "ext.same-assets.com", // Added ext.same-assets.com to domains
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "web-assets.same.dev",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com", // Added ext.same-assets.com to remotePatterns
      },
    ],
  },
};

export default nextConfig;
