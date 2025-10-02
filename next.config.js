/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true
  },
  generateBuildId: () => 'build',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig