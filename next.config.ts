import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: false, // disable lightningcss and use PostCSS instead
  },
};

export default nextConfig;
