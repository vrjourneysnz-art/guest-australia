import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Visiting Places in Australia | Guest Australia",
  description:
    "Explore every state and territory in Australia — Sydney, Melbourne, Queensland's reef and rainforest, Uluru, Tasmania, Western Australia, South Australia, and Canberra. Plus official regional tourism resources.",
  alternates: { canonical: "/travel-information/places-australia" },
};

interface Place {
  name: string;
  region: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
  tourismUrl: string;
  tourismName: string;
}

const places: Place[] = [
  {
    name: "New South Wales",
    region: "Sydney • Blue Mountains • Byron Bay",
    description:
      "Home to Sydney, one of the world's most beautiful harbour cities, and a state where coastline, mountains, vineyards, and outback meet. From the Opera House and Bondi Beach to the World Heritage Blue Mountains, Hunter Valley wine country, and the laid-back surf town of Byron Bay, NSW offers extraordinary variety in a single state.",
    highlights: [
      "Sydney Opera House & Harbour Bridge",
      "Blue Mountains National Park",
      "Hunter Valley wineries",
      "Byron Bay & Northern Rivers",
      "Jervis Bay & South Coast",
    ],
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    alt: "Sydney Opera House and Harbour Bridge at sunset",
    tourismUrl: "https://www.visitnsw.com",
    tourismName: "Visit NSW",
  },
  {
    name: "Victoria",
    region: "Melbourne • Great Ocean Road • Yarra Valley",
    description:
      "Australia's cultural capital is known for its laneway cafés, art galleries, world-class restaurants, and vibrant sport scene. Beyond Melbourne, Victoria delivers the spectacular Great Ocean Road with its Twelve Apostles, the cool-climate wineries of the Yarra Valley, and the wildlife of Phillip Island.",
    highlights: [
      "Melbourne laneways & rooftops",
      "Great Ocean Road & Twelve Apostles",
      "Yarra Valley wine region",
      "Phillip Island Penguin Parade",
      "Mornington Peninsula hot springs",
    ],
    image: "https://images.unsplash.com/photo-1514395462725-fb4566210144?auto=format&fit=crop&w=1200&q=80",
    alt: "Melbourne city skyline along the Yarra River",
    tourismUrl: "https://www.visitvictoria.com",
    tourismName: "Visit Victoria",
  },
  {
    name: "Queensland",
    region: "Great Barrier Reef • Cairns • Whitsundays • Gold Coast",
    description:
      "The Sunshine State delivers two World Heritage wonders side by side — the Great Barrier Reef and the Daintree, the world's oldest tropical rainforest. Add the white sands of the Whitsundays, the theme parks and surf of the Gold Coast, and you have one of the most travelled-to regions in Australia.",
    highlights: [
      "Great Barrier Reef snorkelling & diving",
      "Daintree Rainforest & Cape Tribulation",
      "Whitsunday Islands & Whitehaven Beach",
      "Gold Coast beaches & theme parks",
      "Port Douglas & Tropical North",
    ],
    image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?auto=format&fit=crop&w=1200&q=80",
    alt: "Aerial view of the Great Barrier Reef Queensland",
    tourismUrl: "https://www.queensland.com",
    tourismName: "Tourism & Events Queensland",
  },
  {
    name: "Northern Territory",
    region: "Uluru • Kakadu • Darwin",
    description:
      "The spiritual heart of Australia. Uluru rises 348 metres from the desert floor and is one of the country's most powerful natural landmarks. The Top End offers Kakadu's wetlands and rock art, Litchfield's waterfalls, and the multicultural city of Darwin as a tropical gateway.",
    highlights: [
      "Uluru-Kata Tjuta National Park",
      "Kings Canyon & Watarrka",
      "Kakadu National Park",
      "Litchfield National Park",
      "Darwin & Mindil Beach Markets",
    ],
    image: "https://images.unsplash.com/photo-1523428096881-5bd79d043006?auto=format&fit=crop&w=1200&q=80",
    alt: "Uluru Ayers Rock at sunset in the Northern Territory",
    tourismUrl: "https://northernterritory.com",
    tourismName: "Tourism NT",
  },
  {
    name: "Western Australia",
    region: "Perth • Margaret River • Ningaloo • Broome",
    description:
      "Australia's largest state covers a third of the continent. Perth's sun-drenched beaches and modern dining sit beside the Margaret River wine region in the south, while the north stretches into the otherworldly Kimberley, the snorkelling paradise of Ningaloo Reef, and the pearling town of Broome.",
    highlights: [
      "Perth, Fremantle & Rottnest Island",
      "Margaret River wineries & beaches",
      "Ningaloo Reef & whale sharks",
      "The Pinnacles Desert",
      "Broome & the Kimberley",
    ],
    image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?auto=format&fit=crop&w=1200&q=80",
    alt: "Coastal landscape in Western Australia",
    tourismUrl: "https://www.westernaustralia.com",
    tourismName: "Tourism Western Australia",
  },
  {
    name: "South Australia",
    region: "Adelaide • Kangaroo Island • Barossa Valley",
    description:
      "South Australia is the country's gourmet heart, with the Barossa, Clare and McLaren Vale wine regions all within an hour or two of Adelaide. Kangaroo Island offers some of the country's best wildlife encounters, and the rugged Flinders Ranges deliver classic outback scenery.",
    highlights: [
      "Adelaide food & festivals",
      "Barossa Valley wine country",
      "Kangaroo Island wildlife",
      "Flinders Ranges & Wilpena Pound",
      "McLaren Vale & Fleurieu Peninsula",
    ],
    image: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?auto=format&fit=crop&w=1200&q=80",
    alt: "Vineyard landscape in South Australia wine country",
    tourismUrl: "https://southaustralia.com",
    tourismName: "South Australian Tourism",
  },
  {
    name: "Tasmania",
    region: "Hobart • Cradle Mountain • Wineglass Bay",
    description:
      "Wild and pristine, Tasmania is the island state where over 40% of the land is national park or world heritage wilderness. Hobart is a thriving food, art, and harbour city; Cradle Mountain delivers iconic alpine scenery; Wineglass Bay and the Bay of Fires are among Australia's most stunning beaches.",
    highlights: [
      "Hobart, MONA & Salamanca Markets",
      "Cradle Mountain–Lake St Clair",
      "Wineglass Bay & Freycinet",
      "Bay of Fires",
      "Port Arthur historic site",
    ],
    image: "https://images.unsplash.com/photo-1551867633-194f125bddfa?auto=format&fit=crop&w=1200&q=80",
    alt: "Tasmanian wilderness landscape",
    tourismUrl: "https://www.discovertasmania.com.au",
    tourismName: "Discover Tasmania",
  },
  {
    name: "Australian Capital Territory",
    region: "Canberra",
    description:
      "Australia's purpose-built capital is home to the country's national institutions — Parliament House, the Australian War Memorial, the National Gallery, and more. Canberra is also a quietly excellent food and cool-climate wine destination, surrounded by bushland and lakes.",
    highlights: [
      "Parliament House",
      "Australian War Memorial",
      "National Gallery of Australia",
      "Lake Burley Griffin",
      "Canberra District wineries",
    ],
    image: "https://images.unsplash.com/photo-1486520299386-6d106b22014b?auto=format&fit=crop&w=1200&q=80",
    alt: "Canberra Parliament House and Lake Burley Griffin",
    tourismUrl: "https://visitcanberra.com.au",
    tourismName: "Visit Canberra",
  },
];

export default function PlacesAustraliaPage() {
  return (
    <>
      <PageHeader>
        <Link href="/travel-information" className="text-sand text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Travel Information
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Visiting Places in Australia</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Explore the diverse states, territories, and destinations that make Australia one of the world&apos;s most exciting countries to visit.
        </p>
      </PageHeader>

      <section className="py-16 bg-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {places.map((place) => (
              <article
                key={place.name}
                className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm md:grid md:grid-cols-5"
              >
                <div className="md:col-span-2 relative h-64 md:h-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={place.image}
                    alt={place.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-dark mb-1">{place.name}</h2>
                  <p className="text-terra text-sm font-semibold mb-4">{place.region}</p>
                  <p className="text-dark/70 text-sm leading-relaxed mb-5">{place.description}</p>

                  <h3 className="text-xs font-bold uppercase tracking-wider text-dark/50 mb-2">
                    Don&apos;t miss
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 mb-6">
                    {place.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-dark/70 text-sm">
                        <i className="fa-solid fa-check text-terra text-xs mt-1.5" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={place.tourismUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-terra text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-terra-dark transition-colors"
                  >
                    Visit {place.tourismName}
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Trip CTA */}
      <section className="py-16 bg-sand">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-dark mb-3">
            Ready to Visit Australia?
          </h2>
          <p className="text-dark/60 mb-6">
            Let Michael design a personalised itinerary that brings these destinations together into the perfect Australian holiday.
          </p>
          <Link
            href="/travel-planning"
            className="inline-block bg-terra text-white px-8 py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
          >
            Start Planning
          </Link>
        </div>
      </section>
    </>
  );
}
