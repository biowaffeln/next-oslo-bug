/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["oslo"],
    experimental: { esmExternals: false },
  },
};

module.exports = nextConfig;
