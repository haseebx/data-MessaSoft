/* eslint-disable no-undef */
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    // env for client side
    ROLLBAR_ID: process.env.ROLLBAR_ID,
  },
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  trailingSlash: true,
  images: {
    domains: ['meissasoftwebimages.s3.amazonaws.com'],
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
