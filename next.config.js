/**
 * @type {import('next').NextConfig}
 */

const nextConfig = { output: 'export', env: { BASE_URL: process.env.NEXT_PUBLIC_BASE_URL } }

module.exports = nextConfig
