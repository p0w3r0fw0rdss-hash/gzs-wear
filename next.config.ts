import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/gzs-wear',
  assetPrefix: '/gzs-wear',
  trailingSlash: true,
};

export default nextConfig;
