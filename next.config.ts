/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: "standalone",
  images:{
    unoptimized: true,
  }
};

export default nextConfig;
