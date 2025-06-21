// next.config.mjs
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com',
                pathname: '/profile_images/**',
            },
            {
                protocol: 'https',
                hostname: 'github.com',
                pathname: '/**',
            },
        ],
    },
};

if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
}

export default nextConfig;
