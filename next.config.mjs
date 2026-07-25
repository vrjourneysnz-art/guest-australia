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
      // Legacy WordPress sitemap URLs → new Next.js sitemap
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/page-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/post-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/category-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },

      // === Added Jul 2026: recover legacy 404s (bulk of the ~50% 404 traffic) ===

      // Old WordPress blog posts were at flat /slug; new site nests them under /australia-travel-blogs/slug
      { source: "/things-to-do-in-darwin-australia-top-end-guide", destination: "/australia-travel-blogs/things-to-do-in-darwin-australia-top-end-guide", permanent: true },
      { source: "/12-day-northern-australia-trip-winter-route", destination: "/australia-travel-blogs/12-day-northern-australia-trip-winter-route", permanent: true },
      { source: "/best-time-to-visit-australia-2-week-winter-itinerary", destination: "/australia-travel-blogs/best-time-to-visit-australia-2-week-winter-itinerary", permanent: true },
      { source: "/great-barrier-reef-locations-how-to-choose", destination: "/australia-travel-blogs/great-barrier-reef-locations-how-to-choose", permanent: true },
      { source: "/uluru-ayers-rock-australia-best-time-what-to-do", destination: "/australia-travel-blogs/uluru-ayers-rock-australia-best-time-what-to-do", permanent: true },
      { source: "/perth-to-exmouth-road-trip-7-to-10-days", destination: "/australia-travel-blogs/perth-to-exmouth-road-trip-7-to-10-days", permanent: true },
      { source: "/4wd-hire-australia-avoid-10-costly-mistakes", destination: "/australia-travel-blogs/4wd-hire-australia-avoid-10-costly-mistakes", permanent: true },
      { source: "/things-to-do-in-australia-two-weeks-itinerary", destination: "/australia-travel-blogs/things-to-do-in-australia-two-weeks-itinerary", permanent: true },
      { source: "/campervan-hire-australia", destination: "/australia-travel-blogs/campervan-hire-australia", permanent: true },
      { source: "/australia-summer-season", destination: "/australia-travel-blogs/australia-summer-season", permanent: true },
      { source: "/12-australia-travel-tips-before-you-go", destination: "/australia-travel-blogs/12-australia-travel-tips-before-you-go", permanent: true },
      { source: "/campervan-or-rental-car-in-australia", destination: "/australia-travel-blogs/campervan-or-rental-car-in-australia", permanent: true },
      { source: "/how-to-plan-a-tasmania-travel-itinerary", destination: "/australia-travel-blogs/how-to-plan-a-tasmania-travel-itinerary", permanent: true },
      { source: "/what-to-do-in-melbourne-in-3-days", destination: "/australia-travel-blogs/what-to-do-in-melbourne-in-3-days", permanent: true },
      { source: "/best-time-to-visit-australia", destination: "/australia-travel-blogs/best-time-to-visit-australia", permanent: true },
      { source: "/how-to-rent-a-campervan-in-australia", destination: "/australia-travel-blogs/how-to-rent-a-campervan-in-australia", permanent: true },
      { source: "/perth-attractions", destination: "/australia-travel-blogs/perth-attractions", permanent: true },
      { source: "/great-ocean-road-australia-your-ultimate-guide", destination: "/australia-travel-blogs/great-ocean-road-australia-your-ultimate-guide", permanent: true },
      { source: "/car-rentals-in-australia", destination: "/australia-travel-blogs/car-rentals-in-australia", permanent: true },
      { source: "/what-to-do-in-kangaroo-island", destination: "/australia-travel-blogs/what-to-do-in-kangaroo-island", permanent: true },
      { source: "/what-to-do-in-sydney-australia-in-3-days", destination: "/australia-travel-blogs/what-to-do-in-sydney-australia-in-3-days", permanent: true },
      { source: "/an-epic-10-day-australia-travel-itinerary", destination: "/australia-travel-blogs/an-epic-10-day-australia-travel-itinerary", permanent: true },
      { source: "/what-to-do-in-cairns-your-ultimate-guide-to-cairns-and-port-douglas", destination: "/australia-travel-blogs/what-to-do-in-cairns-your-ultimate-guide-to-cairns-and-port-douglas", permanent: true },
      { source: "/plan-your-australia-in-2-weeks-a-comprehensive-travel-itinerary", destination: "/australia-travel-blogs/plan-your-australia-in-2-weeks-a-comprehensive-travel-itinerary", permanent: true },
      { source: "/travel-perth-to-exmouth-in-western-australia", destination: "/australia-travel-blogs/travel-perth-to-exmouth-in-western-australia", permanent: true },
      { source: "/denmark-western-australia", destination: "/australia-travel-blogs/denmark-western-australia", permanent: true },
      { source: "/how-to-plan-travelling-australia", destination: "/australia-travel-blogs/how-to-plan-travelling-australia", permanent: true },
      { source: "/kangaroo-island-bush-fire-regeneration", destination: "/australia-travel-blogs/kangaroo-island-bush-fire-regeneration", permanent: true },
      { source: "/travel-australia-for-kids", destination: "/australia-travel-blogs/travel-australia-for-kids", permanent: true },
      { source: "/luxury-holiday-packages-australia", destination: "/australia-travel-blogs/luxury-holiday-packages-australia", permanent: true },
      { source: "/top-attractions-margaret-river", destination: "/australia-travel-blogs/top-attractions-margaret-river", permanent: true },
      { source: "/kangaroo-island-wildlife-experiences", destination: "/australia-travel-blogs/kangaroo-island-wildlife-experiences", permanent: true },
      { source: "/luxury-accommodation-kangaroo-island", destination: "/australia-travel-blogs/luxury-accommodation-kangaroo-island", permanent: true },
      { source: "/travel-facts-tasmania", destination: "/australia-travel-blogs/travel-facts-tasmania", permanent: true },
      { source: "/best-honeymoon-destinations-australia", destination: "/australia-travel-blogs/best-honeymoon-destinations-australia", permanent: true },
      { source: "/top-things-to-do-in-adelaide", destination: "/australia-travel-blogs/top-things-to-do-in-adelaide", permanent: true },
      { source: "/travel-facts-kangaroo-island", destination: "/australia-travel-blogs/travel-facts-kangaroo-island", permanent: true },
      { source: "/great-barrier-reef-snorkeling-trips-port-douglas", destination: "/australia-travel-blogs/great-barrier-reef-snorkeling-trips-port-douglas", permanent: true },
      { source: "/top-things-to-do-in-melbourne", destination: "/australia-travel-blogs/top-things-to-do-in-melbourne", permanent: true },
      { source: "/creating-motorhome-holidays-perth-to-darwin", destination: "/australia-travel-blogs/creating-motorhome-holidays-perth-to-darwin", permanent: true },
      { source: "/things-to-do-in-port-douglas", destination: "/australia-travel-blogs/things-to-do-in-port-douglas", permanent: true },
      { source: "/travel-to-australia-and-new-zealand", destination: "/australia-travel-blogs/travel-to-australia-and-new-zealand", permanent: true },
      { source: "/travel-western-australia-highlights", destination: "/australia-travel-blogs/travel-western-australia-highlights", permanent: true },
      { source: "/new-zealand-australia-vacation-combined", destination: "/australia-travel-blogs/new-zealand-australia-vacation-combined", permanent: true },
      { source: "/best-things-in-perth", destination: "/australia-travel-blogs/best-things-in-perth", permanent: true },
      { source: "/great-barrier-reef-snorkeling-tours", destination: "/australia-travel-blogs/great-barrier-reef-snorkeling-tours", permanent: true },
      { source: "/best-things-in-sydney", destination: "/australia-travel-blogs/best-things-in-sydney", permanent: true },
      { source: "/australian-outback-tours-from-cairns", destination: "/australia-travel-blogs/australian-outback-tours-from-cairns", permanent: true },
      { source: "/why-use-an-australia-online-travel-agent", destination: "/australia-travel-blogs/why-use-an-australia-online-travel-agent", permanent: true },
      { source: "/australia-travel-checklist", destination: "/australia-travel-blogs/australia-travel-checklist", permanent: true },
      { source: "/kangaroo-island-accommodation-options", destination: "/australia-travel-blogs/kangaroo-island-accommodation-options", permanent: true },
      { source: "/kangaroo-island-nature-experiences", destination: "/australia-travel-blogs/kangaroo-island-nature-experiences", permanent: true },
      { source: "/visiting-the-barossa-valley", destination: "/australia-travel-blogs/visiting-the-barossa-valley", permanent: true },
      { source: "/travel-facts-about-ayers-rock-uluru", destination: "/australia-travel-blogs/travel-facts-about-ayers-rock-uluru", permanent: true },
      { source: "/exploring-perth-fremantle-australia", destination: "/australia-travel-blogs/exploring-perth-fremantle-australia", permanent: true },

      // Top-level page slugs that 404 (real pages exist at different paths)
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/services", destination: "/travel-planning", permanent: true },
      { source: "/contact", destination: "/travel-planning", permanent: true },
      { source: "/contact-us", destination: "/travel-planning", permanent: true },
      { source: "/australia-itineraries", destination: "/itineraries", permanent: true },
      { source: "/privacy-policy", destination: "/", permanent: true },
      { source: "/terms", destination: "/", permanent: true },
      { source: "/terms-and-conditions", destination: "/", permanent: true },

      // Missing legacy sitemap + WordPress crawl paths
      { source: "/itinerary-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/feed/:path*", destination: "/", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/australia-travel-blogs", permanent: true },
      { source: "/tag/:path*", destination: "/australia-travel-blogs", permanent: true },
      { source: "/itinerary-categories", destination: "/itineraries", permanent: true },
      { source: "/itinerary-categories/:path*", destination: "/itineraries", permanent: true },

    ];
  },
};

export default nextConfig;
