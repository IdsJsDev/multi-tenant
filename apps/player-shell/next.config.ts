import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Compile theme package from source — it ships TypeScript, not pre-built JS
  transpilePackages: ['theme-tenant-alpha'],
}

export default nextConfig
