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
      {
        source: "/itineraries/lifestyle",
        destination: "/itineraries/australia-lifestyle-holidays",
        permanent: true,
      },
      {
        source: "/itineraries/lifestyle/:slug",
        destination: "/itineraries/australia-lifestyle-holidays/:slug",
        permanent: true,
      },
      {
        source: "/itineraries/honeymoon",
        destination: "/itineraries/honeymoon-packages-australia",
        permanent: true,
      },
      {
        source: "/itineraries/honeymoon/:slug",
        destination: "/itineraries/honeymoon-packages-australia/:slug",
        permanent: true,
      },
      {
        source: "/itineraries/australia-nz",
        destination: "/itineraries/australia-and-new-zealand-vacation-packages",
        permanent: true,
      },
      {
        source: "/itineraries/australia-nz/:slug",
        destination: "/itineraries/australia-and-new-zealand-vacation-packages/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
