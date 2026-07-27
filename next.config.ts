import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/gzs-wear',
  assetPrefix: '/gzs-wear',
};

export default nextConfig;
