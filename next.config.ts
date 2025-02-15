/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
  basePath: "/snehas-house", // Change this to match your GitHub repo name
  images: {
    unoptimized: true, // Disable Next.js image optimization
  },
};

module.exports = nextConfig;