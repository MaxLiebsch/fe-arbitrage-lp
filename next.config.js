/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV
const environment = process.env.ENVIRONMENT
let containerName =
  environment === 'STAGING' ? 'staging-staging-1' : 'live-live-1'


let APP_URL

if (env == 'development') {
  APP_URL = `http://localhost:3000`
} else if (env == 'production') {
  APP_URL = `http://${containerName}:3000`
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
