/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  generateBuildId: () => 'build',
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig