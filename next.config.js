/**
 * @type {import('next').NextConfig}
 */
const i18n = require("./next-i18next.config.cjs")
const nextConfig = {
  i18n: i18n,
  images: {
    domains: ["zagrano.pl"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}

module.exports = nextConfig
