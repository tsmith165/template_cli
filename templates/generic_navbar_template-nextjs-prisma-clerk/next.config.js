const { AWS_BUCKET_URL } = require('./lib/constants')

/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  reactStrictMode: true,
  images: {
    domains: [AWS_BUCKET_URL.replace("https://", "")],
    minimumCacheTTL: 60 * 60 * 24 * 7, //In seconds
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, immutable',
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig
