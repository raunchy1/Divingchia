// @ts-check
/** @type {import("next").NextConfig} */

const nextConfig = {
  staticPageGenerationTimeout: 120,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.divingchia.com',
      },
    ],
  },
}

export default nextConfig
