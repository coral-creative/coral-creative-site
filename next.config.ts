import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/coral-creative-site",
  assetPrefix: "/coral-creative-site/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
