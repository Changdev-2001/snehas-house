import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: "export", // Required for static export
  basePath: "/snehas-house", // Ensure this matches your GitHub repo name
  images: {
    unoptimized: true, // Required to avoid Next.js image optimization errors
  },
};

export default nextConfig;
