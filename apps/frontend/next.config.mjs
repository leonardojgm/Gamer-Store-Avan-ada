/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
            },
            {
                protocol: 'http',
                hostname: 'http://ec2-54-233-5-134.sa-east-1.compute.amazonaws.com:3005',
            },
        ],
    },
}

export default nextConfig
