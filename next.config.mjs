/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Keep image fidelity high while still enabling responsive optimization.
    unoptimized: false,
    qualities: [100],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    formats: ["image/webp"],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/logo.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      {
        source: "/Logo1.png",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/symposium",
        destination: "/training",
        permanent: true,
      },
      {
        source: "/past-symposiums",
        destination: "/past-trainings",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
