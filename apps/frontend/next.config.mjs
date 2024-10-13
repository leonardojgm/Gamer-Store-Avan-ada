/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
        ],
    },
    async headers() {
        return [{ source: '/(.*)', headers: securityHeaders }];
    },
};

const securityHeaders = [
    {
      key: 'Content-Security-Policy',
      value: "upgrade-insecure-requests"
    },
];

export default nextConfig;
    
