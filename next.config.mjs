/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*', // 클라이언트에서 호출할 경로
        destination: 'http://localhost:8000/:path*', // 프록시할 타겟 서버
      },
    ];
  },
};

export default nextConfig;
