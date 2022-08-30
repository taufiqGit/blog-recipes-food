/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['www.masakapahariini.com']
  },
  async rewrites(){
    return [
      {
        source: '/data/:path*',
        destination: 'https://masak-apa.tomorisakura.vercel.app/:path*'
      }
    ]
  }
}

module.exports = nextConfig
