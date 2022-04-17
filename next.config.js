/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lorem.space', 'loremflickr.com'],
  }
}

module.exports = nextConfig
