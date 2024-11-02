/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "images.pexels.com" }],
  },
  eslint: {
    // This option allows you to ignore ESLint issues during the build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
