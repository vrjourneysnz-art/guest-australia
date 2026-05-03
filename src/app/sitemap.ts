import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://guestaustralia.com";

// Static pages
const staticRoutes: string[] = [
  "",
  "/itineraries",
  "/itineraries/australia-lifestyle-holidays",
  "/itineraries/family-holiday-australia",
  "/itineraries/honeymoon-packages-australia",
  "/itineraries/australia-and-new-zealand-vacation-packages",
  "/travel-planning",
  "/travel-information",
  "/travel-information/places-australia",
  "/travel-information/travel-tips",
  "/about-us",
  "/australia-travel-blogs",
];

// Individual itinerary slugs (keep in sync with page.tsx lookup maps)
const itinerarySlugs: Record<string, string[]> = {
  "australia-lifestyle-holidays": [
    "7-days-australia-vacation-package",
    "10-day-australia-holiday-package",
    "12-days-australia-travel-package",
    "14-days-holiday-package-australia",
  ],
  "family-holiday-australia": [
    "10-days-best-family-vacation-australia",
    "12-days-western-australia-family-holiday",
    "14-days-australia-family-fun-holiday",
    "18-days-luxury-australia-family-vacation",
  ],
  "honeymoon-packages-australia": [
    "10-day-honeymoon-packages-australia",
    "12-day-australia-honeymoon-package",
    "14-day-australia-honeymoon-itinerary",
    "16-day-australia-honeymoon-vacation",
  ],
  "australia-and-new-zealand-vacation-packages": [
    "2-week-trip-australia-new-zealand",
    "australia-and-new-zealand-16-days",
    "australia-new-zealand-vacation-3-weeks",
    "australia-new-zealand-fiji-25-days",
  ],
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = staticRoutes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const itineraryEntries = Object.entries(itinerarySlugs).flatMap(
    ([category, slugs]) =>
      slugs.map((slug) => ({
        url: `${BASE_URL}/itineraries/${category}/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.9,
      })),
  );

  const blogEntries = blogPosts.map((post) => ({
    url: `${BASE_URL}/australia-travel-blogs/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...itineraryEntries, ...blogEntries];
}
