import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // Static export: images are served as-is from /public.
    unoptimized: true,
  },
};

export default nextConfig;
