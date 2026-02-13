/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
}

export default nextConfig
