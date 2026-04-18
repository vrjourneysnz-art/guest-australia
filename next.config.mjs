/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/itineraries/family",
        destination: "/itineraries/family-holiday-australia",
        permanent: true,
      },
      {
        source: "/itineraries/family/:slug",
        destination: "/itineraries/family-holiday-australia/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
