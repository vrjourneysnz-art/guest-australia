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
      // Legacy WordPress / slug-change redirects
      {
        source: "/itineraries/australia-and-new-zealand-vacation-packages/difference-between-australia-and-new-zealand",
        destination: "/itineraries/australia-and-new-zealand-vacation-packages/australia-and-new-zealand-16-days",
        permanent: true,
      },
      {
        source: "/itinerary-categories/australia-and-new-zealand-vacation-packages",
        destination: "/itineraries/australia-and-new-zealand-vacation-packages/australia-new-zealand-vacation-3-weeks",
        permanent: true,
      },
      {
        source: "/itineraries/australia-and-new-zealand-vacation-packages/two-week-trip-to-australia-and-new-zealand",
        destination: "/itineraries/australia-and-new-zealand-vacation-packages/2-week-trip-australia-new-zealand",
        permanent: true,
      },
      {
        source: "/itineraries/honeymoon-packages-australia/10-day-honeymoon-trip-in-australia",
        destination: "/itineraries/honeymoon-packages-australia/10-day-honeymoon-packages-australia",
        permanent: true,
      },
      {
        source: "/itineraries/honeymoon-packages-australia/16-day-australia-vacation",
        destination: "/itineraries/honeymoon-packages-australia/16-day-australia-honeymoon-vacation",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/australia-travel-blogs",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/australia-travel-blogs/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
