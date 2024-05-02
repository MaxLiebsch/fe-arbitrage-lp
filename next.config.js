/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV
const environment = process.env.ENVIRONMENT
let containerName =
  environment === 'STAGING' ? 'staging-staging-1' : 'live-live-1'
let port = environment === 'STAGING' ? 3000 : 4000

let APP_URL

if (env == 'development') {
  APP_URL = `http://localhost:${port}`
} else if (env == 'production') {
  APP_URL = `http://${containerName}:${port}`
}

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/app/:path*',
        destination: `${APP_URL}/app/:path*`,
      },
    ]
  },
}

module.exports = nextConfig
