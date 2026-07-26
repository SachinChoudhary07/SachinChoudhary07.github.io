import type { NextConfig } from "next";

/**
 * GitHub project Pages (username.github.io/My-Portfolio) need a basePath.
 * A custom domain (e.g. sachinchoudhary.dev) does not.
 */
const repoName = "My-Portfolio";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
const isGithubPages = process.env.GITHUB_PAGES === "true";
const usesCustomDomain =
  Boolean(siteUrl) && !siteUrl.includes("github.io");
const basePath =
  isGithubPages && !usesCustomDomain ? `/${repoName}` : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
