/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'www.googleapis.com',
            port: '',
            pathname: '**',
        },
        ],
    },
}

module.exports = nextConfig
