/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig