/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compile theme package from source — it ships TypeScript, not pre-built JS
  transpilePackages: ['theme-tenant-alpha'],
}

module.exports = nextConfig
