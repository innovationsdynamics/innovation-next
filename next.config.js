/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'img6.wsimg.com' },
    ],
    unoptimized: false,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  async redirects() {
    return [
      { source: '/return-refund', destination: '/refund-policy/', permanent: true },
      { source: '/return-refund/', destination: '/refund-policy/', permanent: true },
      { source: '/cookies-policy', destination: '/cookie-policy/', permanent: true },
      { source: '/cookies-policy/', destination: '/cookie-policy/', permanent: true },
      { source: '/admin', destination: '/admin/dashboard/', permanent: false },
    ];
  },
};

module.exports = nextConfig;
