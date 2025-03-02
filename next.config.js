const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

// Load environment variables
require("dotenv").config({ path: ".env.local" });

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: new URL(
          process.env.NEXT_PUBLIC_API_BASE_URL
        ).protocol.replace(":", ""),
        hostname: new URL(process.env.NEXT_PUBLIC_API_BASE_URL).hostname,
        port: new URL(process.env.NEXT_PUBLIC_API_BASE_URL).port,
        pathname: "/**",
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
