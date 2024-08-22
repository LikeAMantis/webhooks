// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // matching all API routes
                source: '/pages/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ]
            }
        ];
    }
};

export default nextConfig;