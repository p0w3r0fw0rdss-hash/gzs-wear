import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Si vas a usar github.io/gzs-wear, descomenta la siguiente línea:
  // basePath: '/gzs-wear',
};

export default nextConfig;
