/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/server/write',
        destination: 'http://localhost:8000/bestline',
      },
    ];
  },
};

module.exports = nextConfig;
