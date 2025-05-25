/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://hpm-backend:5000/api/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
