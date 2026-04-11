export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "4wd-hire-australia-avoid-costly-mistakes",
    title: "4WD Hire Australia: Avoid 10 Costly Mistakes",
    date: "March 27, 2026",
    excerpt:
      "Planning to hire a 4WD in Australia? Before you sign that rental agreement, make sure you know these 10 common mistakes that could cost you hundreds — or even thousands — of dollars.",
    content: `
## Planning Your 4WD Adventure

Australia is a paradise for 4WD enthusiasts, with vast outback tracks, stunning coastal routes, and remote wilderness areas waiting to be explored. However, hiring a 4WD comes with its own set of challenges and potential pitfalls.

## Key Tips for 4WD Hire

Whether you're planning to tackle the Gibb River Road in Western Australia, explore the red centre around Uluru, or venture into the tropical north of Queensland, understanding the ins and outs of 4WD hire is essential for a smooth and affordable trip.

### Insurance Coverage

One of the biggest mistakes travellers make is not fully understanding their insurance coverage. Standard rental insurance often doesn't cover damage to the undercarriage, tyres, windscreen, or roof — all of which are common in outback driving conditions.

### Choosing the Right Vehicle

Not all 4WDs are created equal. Consider the terrain you'll be driving on, the number of passengers, and how much gear you need to carry. A compact SUV might be fine for sealed roads and light gravel, but you'll need a proper 4WD with high clearance for serious off-road tracks.

### Planning Your Route

Australia is enormous — distances between destinations can be much greater than you expect. Always plan your route carefully, carry extra fuel and water, and let someone know your itinerary when venturing into remote areas.

*This is placeholder content. Michael will replace with the full article.*
    `,
  },
  {
    slug: "things-to-do-in-australia-two-week-guide",
    title: "Things to do in Australia: A Practical Two-Week Guide",
    date: "February 20, 2026",
    excerpt:
      "Two weeks in Australia? Here's a practical, day-by-day guide covering the best things to see and do — from Sydney and Melbourne to the Great Barrier Reef and beyond.",
    content: `
## Your Two-Week Australia Itinerary

Two weeks is the sweet spot for a first trip to Australia. It's enough time to experience the country's incredible diversity — from cosmopolitan cities to ancient landscapes and tropical reefs — without feeling rushed.

## Week One: The East Coast

### Sydney (Days 1–3)

Start your Australian adventure in Sydney, one of the world's most beautiful cities. Spend your first days exploring the iconic harbour, walking across the Harbour Bridge, visiting the Opera House, and soaking up the sun at Bondi Beach.

### Blue Mountains (Day 4)

Take a day trip to the stunning Blue Mountains, just 90 minutes from Sydney. The dramatic sandstone cliffs, eucalyptus forests, and the famous Three Sisters rock formation make this a must-visit destination.

### Melbourne (Days 5–7)

Fly south to Melbourne, Australia's cultural capital. Explore the famous laneways, enjoy world-class coffee, visit the Queen Victoria Market, and take a day trip along the Great Ocean Road to see the Twelve Apostles.

## Week Two: Tropical North & Outback

### Uluru (Days 8–9)

Fly to the red centre and experience the magic of Uluru. Watch the sunrise and sunset paint the rock in incredible colours, learn about Indigenous culture, and explore nearby Kata Tjuta.

### Cairns & Great Barrier Reef (Days 10–13)

Head to tropical North Queensland for the grand finale. Snorkel or dive the Great Barrier Reef, explore the ancient Daintree Rainforest, and enjoy the relaxed tropical atmosphere of Port Douglas.

### Departure (Day 14)

Fly home with unforgettable memories of your Australian adventure.

*This is placeholder content. Michael will replace with the full article.*
    `,
  },
  {
    slug: "campervan-hire-australia",
    title: "Campervan Hire Australia",
    date: "January 15, 2026",
    excerpt:
      "Thinking about a campervan road trip across Australia? Here's everything you need to know about hiring a campervan — from choosing the right vehicle to planning your route.",
    content: `
## The Ultimate Australian Campervan Adventure

There's no better way to experience Australia's vast landscapes than from behind the wheel of a campervan. The freedom to stop wherever you want, wake up to stunning views, and travel at your own pace is what makes campervan holidays so special.

## Choosing Your Campervan

### Size Matters

Campervans come in all sizes, from compact 2-berth vans perfect for couples to large 6-berth motorhomes for families. Consider how many people will be travelling, how much storage you need, and whether you prefer the manoeuvrability of a smaller van or the comfort of a larger one.

### Budget vs. Luxury

Budget campervans are basic but functional — a bed, small kitchen, and storage. Premium options include proper bathrooms, larger beds, better kitchen facilities, and more living space. The choice depends on your budget and how many nights you plan to spend in the van.

## Top Campervan Routes

### East Coast Explorer

Sydney to Cairns (or vice versa) is the classic Australian road trip. Follow the coast through stunning beaches, charming towns, and tropical rainforests. Allow at least 2–3 weeks for this epic journey.

### Great Ocean Road

Melbourne to Adelaide via the Great Ocean Road is one of the world's most scenic drives. The dramatic coastline, limestone stacks, and lush rainforest make every kilometre memorable.

### Outback Adventure

For experienced travellers, the outback offers incredible campervan routes. The Stuart Highway from Adelaide to Darwin takes you through the heart of Australia, past Uluru and through the dramatic landscapes of the Northern Territory.

*This is placeholder content. Michael will replace with the full article.*
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
