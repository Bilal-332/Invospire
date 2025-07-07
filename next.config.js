/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['placeholder.com'],
  },
  typescript: {
    // Disable TypeScript checking during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during build for TypeScript files
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
