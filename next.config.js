/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.base44.com',
      },
    ],
  },
}

module.exports = nextConfig
