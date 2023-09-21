/** @type {import('next').NextConfig} */

const nextConfig = {

  output: 'export',
  reactStrictMode: true,

  env: {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
  }
}

module.exports = nextConfig
