/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 180,
  experimental: {
    // Prevents Next.js from spawning memory-capped child workers during page data collection
    workerThreads: false,
    cpus: 1,
  },
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      minimize: false, // Prevents aggressive minifier heap spikes during build
    };
    return config;
  },
};

export default nextConfig;