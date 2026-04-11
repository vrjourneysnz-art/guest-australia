export interface Itinerary {
  slug: string;
  title: string;
  duration: string;
  category: string;
  categorySlug: string;
  intro: string;
  highlights: string[];
  days: { day: number; title: string; description: string }[];
}

function generateDays(count: number, theme: string): Itinerary["days"] {
  const locations: Record<string, string[]> = {
    lifestyle: ["Sydney", "Blue Mountains", "Melbourne", "Great Ocean Road", "Uluru", "Cairns", "Great Barrier Reef", "Kangaroo Island", "Barossa Valley", "Tasmania", "Byron Bay", "Daintree Rainforest", "Adelaide", "Gold Coast"],
    family: ["Sydney", "Taronga Zoo", "Blue Mountains", "Gold Coast", "Theme Parks", "Cairns", "Great Barrier Reef", "Melbourne", "Phillip Island", "Kangaroo Island", "Port Douglas", "Rottnest Island", "Perth", "Broome", "Darwin", "Kakadu", "Tasmania", "Hobart"],
    honeymoon: ["Sydney Harbour", "Hunter Valley", "Whitsunday Islands", "Great Barrier Reef", "Melbourne", "Yarra Valley", "Uluru", "Kangaroo Island", "Tasmania", "Port Douglas", "Daintree Rainforest", "Byron Bay", "Hamilton Island", "Lizard Island", "Adelaide", "Barossa Valley"],
    "australia-nz": ["Sydney", "Blue Mountains", "Melbourne", "Great Ocean Road", "Uluru", "Cairns", "Great Barrier Reef", "Auckland", "Rotorua", "Queenstown", "Milford Sound", "Wellington", "Fiji", "Hobbiton", "Franz Josef", "Christchurch"],
  };

  const locs = locations[theme] || locations.lifestyle;

  return Array.from({ length: count }, (_, i) => ({
    day: i + 1,
    title: i === 0 ? `Arrive in ${locs[0]}` : i === count - 1 ? "Departure Day" : `Explore ${locs[i % locs.length]}`,
    description:
      i === 0
        ? `Welcome to Australia! Arrive and transfer to your accommodation. Settle in and enjoy a welcome dinner at a local restaurant.`
        : i === count - 1
        ? `Enjoy a final breakfast before your transfer to the airport. Depart with unforgettable memories of your Australian adventure.`
        : `Spend the day discovering the beauty of ${locs[i % locs.length]}. Enjoy guided experiences, local cuisine, and take in the stunning scenery that makes this destination truly special.`,
  }));
}

export const itineraries: Itinerary[] = [
  // Lifestyle
  {
    slug: "7-days-australia-vacation-package",
    title: "7 Days Australia Vacation Package",
    duration: "7 Days",
    category: "Lifestyle Holidays",
    categorySlug: "lifestyle",
    intro: "Experience the best of Australia in just one week. This carefully curated 7-day itinerary takes you through iconic destinations including Sydney, the Blue Mountains, and Melbourne, combining culture, nature, and relaxation.",
    highlights: ["Sydney Opera House & Harbour Bridge", "Blue Mountains scenic walks", "Melbourne laneways & cuisine", "Local wine tasting experience", "Coastal scenery"],
    days: generateDays(7, "lifestyle"),
  },
  {
    slug: "10-day-australia-holiday-package",
    title: "10 Day Australia Holiday Package",
    duration: "10 Days",
    category: "Lifestyle Holidays",
    categorySlug: "lifestyle",
    intro: "A comprehensive 10-day journey through Australia's most captivating destinations. From the vibrant streets of Sydney to the serene beauty of the Great Ocean Road, this itinerary offers the perfect balance of adventure and leisure.",
    highlights: ["Sydney Harbour cruise", "Great Ocean Road drive", "Twelve Apostles", "Melbourne food scene", "Barossa Valley wines", "Kangaroo Island wildlife"],
    days: generateDays(10, "lifestyle"),
  },
  {
    slug: "12-days-australia-travel-package",
    title: "12 Days Australia Travel Package",
    duration: "12 Days",
    category: "Lifestyle Holidays",
    categorySlug: "lifestyle",
    intro: "Twelve days of extraordinary Australian experiences. This itinerary combines the sophistication of Australia's great cities with the raw beauty of its natural landscapes, from tropical reefs to ancient rock formations.",
    highlights: ["Great Barrier Reef snorkelling", "Uluru sunset experience", "Sydney fine dining", "Daintree Rainforest", "Melbourne arts scene", "Hunter Valley wines"],
    days: generateDays(12, "lifestyle"),
  },
  {
    slug: "14-days-holiday-package-australia",
    title: "14 Days Holiday Package Australia",
    duration: "14 Days",
    category: "Lifestyle Holidays",
    categorySlug: "lifestyle",
    intro: "The ultimate two-week Australian lifestyle holiday. This extensive itinerary covers Australia's east coast and beyond, ensuring you experience the country's diverse landscapes, vibrant cities, and unique wildlife encounters.",
    highlights: ["Sydney to Cairns journey", "Great Barrier Reef diving", "Uluru & Kata Tjuta", "Barossa Valley", "Tasmania wilderness", "Kangaroo Island", "Great Ocean Road"],
    days: generateDays(14, "lifestyle"),
  },

  // Family
  {
    slug: "10-days-best-family-vacation-australia",
    title: "10 Days Best Family Vacation Australia",
    duration: "10 Days",
    category: "Family Holidays",
    categorySlug: "family",
    intro: "The perfect family adventure in Australia! This 10-day itinerary is packed with activities the whole family will love — from beach days and wildlife encounters to theme parks and cultural experiences.",
    highlights: ["Taronga Zoo Sydney", "Blue Mountains bushwalks", "Gold Coast theme parks", "Great Barrier Reef glass-bottom boat", "Australian wildlife encounters"],
    days: generateDays(10, "family"),
  },
  {
    slug: "12-days-western-australia-family-holiday",
    title: "12 Days Western Australia Family Holiday",
    duration: "12 Days",
    category: "Family Holidays",
    categorySlug: "family",
    intro: "Discover the wild beauty of Western Australia with your family. From Perth's beaches to the ancient Pinnacles, Rottnest Island's quokkas, and the stunning Ningaloo Reef — this adventure is unlike any other.",
    highlights: ["Rottnest Island & quokkas", "Pinnacles Desert", "Ningaloo Reef snorkelling", "Perth beaches", "Monkey Mia dolphins", "Wave Rock"],
    days: generateDays(12, "family"),
  },
  {
    slug: "14-days-australia-family-fun-holiday",
    title: "14 Days Australia Family Fun Holiday",
    duration: "14 Days",
    category: "Family Holidays",
    categorySlug: "family",
    intro: "Two weeks of non-stop family fun across Australia's east coast. From Sydney's harbour adventures to tropical Queensland, this itinerary keeps kids entertained and parents relaxed every step of the way.",
    highlights: ["Sydney Harbour ferry rides", "Gold Coast theme parks", "Great Barrier Reef", "Australia Zoo", "Phillip Island penguins", "Melbourne museums"],
    days: generateDays(14, "family"),
  },
  {
    slug: "18-days-luxury-australia-family-vacation",
    title: "18 Days Luxury Australia Family Vacation",
    duration: "18 Days",
    category: "Family Holidays",
    categorySlug: "family",
    intro: "The ultimate luxury family vacation spanning Australia's most spectacular destinations. Premium accommodation, private guides, and exclusive experiences make this an unforgettable journey for the whole family.",
    highlights: ["Private Sydney Harbour cruise", "Luxury Uluru resort", "Great Barrier Reef helicopter tour", "Private wildlife sanctuary", "Tasmania wilderness lodge", "Premium Gold Coast resort"],
    days: generateDays(18, "family"),
  },

  // Honeymoon
  {
    slug: "10-day-honeymoon-packages-australia",
    title: "10 Day Honeymoon Packages Australia",
    duration: "10 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon",
    intro: "Begin your married life with a romantic Australian escape. This 10-day honeymoon itinerary combines luxury accommodation, intimate dining experiences, and breathtaking natural beauty for the perfect start to forever.",
    highlights: ["Sydney Harbour sunset cruise", "Hunter Valley wine tasting", "Whitsunday Islands sailing", "Great Barrier Reef", "Couples spa experience"],
    days: generateDays(10, "honeymoon"),
  },
  {
    slug: "12-day-australia-honeymoon-package",
    title: "12 Day Australia Honeymoon Package",
    duration: "12 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon",
    intro: "Twelve days of romance across Australia's most beautiful destinations. From harbour-side dining in Sydney to secluded beaches in the Whitsundays and starlit dinners at Uluru — every moment is designed for two.",
    highlights: ["Private beach picnics", "Uluru Sounds of Silence dinner", "Whitsunday sailing", "Melbourne rooftop dining", "Daintree luxury treehouse", "Hamilton Island"],
    days: generateDays(12, "honeymoon"),
  },
  {
    slug: "14-day-australia-honeymoon-itinerary",
    title: "14 Day Australia Honeymoon Itinerary",
    duration: "14 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon",
    intro: "A two-week romantic journey through Australia's most enchanting destinations. Luxury lodges, private experiences, and stunning landscapes create the perfect backdrop for your honeymoon.",
    highlights: ["Luxury lodge accommodation", "Great Barrier Reef diving for two", "Yarra Valley hot air balloon", "Kangaroo Island retreat", "Byron Bay coastal walks", "Private chef experiences"],
    days: generateDays(14, "honeymoon"),
  },
  {
    slug: "16-day-australia-honeymoon-vacation",
    title: "16 Day Australia Honeymoon Vacation",
    duration: "16 Days",
    category: "Honeymoon Packages",
    categorySlug: "honeymoon",
    intro: "The ultimate Australian honeymoon experience spanning 16 unforgettable days. From cosmopolitan cities to tropical islands and outback adventures, this comprehensive itinerary leaves no romantic stone unturned.",
    highlights: ["Lizard Island luxury resort", "Private Uluru dining", "Barossa Valley wine tour", "Tasmania wilderness cruise", "Whitsunday helicopter tour", "Sydney penthouse suite", "Great Barrier Reef snorkelling"],
    days: generateDays(16, "honeymoon"),
  },

  // Australia & NZ
  {
    slug: "australia-new-zealand-fiji-25-days",
    title: "Australia & New Zealand & Fiji in 25 Days",
    duration: "25 Days",
    category: "Australia & New Zealand",
    categorySlug: "australia-nz",
    intro: "The grand tour of the South Pacific! This epic 25-day itinerary combines the best of Australia, New Zealand, and Fiji — three incredible countries in one unforgettable journey.",
    highlights: ["Sydney & Melbourne", "Great Barrier Reef", "Queenstown adventure", "Milford Sound cruise", "Fiji beach resort", "Auckland city", "Rotorua geothermal"],
    days: generateDays(25, "australia-nz"),
  },
  {
    slug: "australia-new-zealand-vacation-3-weeks",
    title: "Australia & New Zealand Vacation 3 Weeks",
    duration: "21 Days",
    category: "Australia & New Zealand",
    categorySlug: "australia-nz",
    intro: "Three weeks exploring the best of both Australia and New Zealand. From Australia's golden beaches and ancient outback to New Zealand's dramatic mountains and pristine fiords — this is the trip of a lifetime.",
    highlights: ["Sydney Opera House", "Uluru sunset", "Great Ocean Road", "Queenstown", "Milford Sound", "Hobbiton", "Rotorua hot springs"],
    days: generateDays(21, "australia-nz"),
  },
  {
    slug: "australia-and-new-zealand-16-days",
    title: "Australia and New Zealand in 16 Days",
    duration: "16 Days",
    category: "Australia & New Zealand",
    categorySlug: "australia-nz",
    intro: "See the highlights of both Australia and New Zealand in just over two weeks. This expertly designed itinerary ensures you experience the must-see destinations across both countries without feeling rushed.",
    highlights: ["Sydney Harbour", "Blue Mountains", "Melbourne", "Auckland", "Rotorua", "Queenstown", "Milford Sound"],
    days: generateDays(16, "australia-nz"),
  },
  {
    slug: "2-week-trip-australia-new-zealand",
    title: "2 Week Trip to Australia and New Zealand",
    duration: "14 Days",
    category: "Australia & New Zealand",
    categorySlug: "australia-nz",
    intro: "The perfect two-week sampler of Australia and New Zealand. Ideal for first-time visitors wanting to experience the iconic highlights of both countries in a single, well-paced journey.",
    highlights: ["Sydney city highlights", "Great Barrier Reef", "Auckland", "Queenstown adventure", "Milford Sound", "Franz Josef Glacier"],
    days: generateDays(14, "australia-nz"),
  },
];

export function getItinerariesByCategory(categorySlug: string): Itinerary[] {
  return itineraries.filter((i) => i.categorySlug === categorySlug);
}

export function getItinerary(categorySlug: string, slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.categorySlug === categorySlug && i.slug === slug);
}

export const categories = [
  {
    slug: "lifestyle",
    title: "Lifestyle Holidays",
    description: "Curated experiences for discerning travellers who want to see Australia at its very best — fine dining, stunning scenery, and premium accommodation.",
  },
  {
    slug: "family",
    title: "Family Holidays",
    description: "Fun-filled Australian adventures designed for families — beaches, wildlife, theme parks, and unforgettable experiences for all ages.",
  },
  {
    slug: "honeymoon",
    title: "Honeymoon Packages",
    description: "Romantic Australian escapes for couples — luxury lodges, private experiences, and breathtaking destinations to celebrate your love.",
  },
  {
    slug: "australia-nz",
    title: "Australia & New Zealand",
    description: "Combined itineraries covering the best of both Australia and New Zealand — the ultimate South Pacific adventure.",
  },
];
