import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Prevent ESLint errors from breaking the build
  },
  // Add other config options below as needed
};

export default nextConfig;
