/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  generateBuildId: () => 'build',
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig