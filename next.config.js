/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    mdxRs: true,
  },
  images: {
    domains: ['placeholder.com', 'images.unsplash.com', 'cdn.jsdelivr.net'],
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
