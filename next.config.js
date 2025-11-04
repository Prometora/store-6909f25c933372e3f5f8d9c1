/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    // Server-side environment variables
    PROMETORA_API_URL: process.env.PROMETORA_API_URL || 'https://www.prometora.com',
    STORE_ID: process.env.STORE_ID || '6909f25c933372e3f5f8d9c1',
    STORE_SLUG: process.env.STORE_SLUG || 'dogs-58',
    // Client-side environment variables (must start with NEXT_PUBLIC_)
    NEXT_PUBLIC_PROMETORA_URL: process.env.NEXT_PUBLIC_PROMETORA_URL || 'https://www.prometora.com',
    NEXT_PUBLIC_STORE_SLUG: process.env.NEXT_PUBLIC_STORE_SLUG || 'dogs-58',
  },
};

module.exports = nextConfig;
