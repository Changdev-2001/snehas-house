/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  basePath: "/snehas-house", // Replace with your GitHub repo name
  images: {
    unoptimized: true, // Required to avoid Next.js image optimization errors
  },
};

module.exports = nextConfig;
