/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'leetcode.com'],
  },
  // Deployment optimizations
  experimental: {
    serverComponentsExternalPackages: ['@supabase/supabase-js']
  },
  // API route timeout (for platforms like Vercel)
  api: {
    responseLimit: false,
    bodyParser: {
      sizeLimit: '1mb'
    }
  },
  // Environment variables validation
  env: {
    DEPLOYMENT_ENV: process.env.NODE_ENV
  }
}

module.exports = nextConfig