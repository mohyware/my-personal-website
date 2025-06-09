/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'pbs.twimg.com'],
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
}

module.exports = nextConfig 