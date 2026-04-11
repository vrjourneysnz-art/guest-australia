import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Visiting Places in Australia | Guest Australia",
  description: "Discover Australia's most iconic destinations — Sydney, Melbourne, Queensland, Uluru, Tasmania, and Western Australia.",
};

const places = [
  { name: "Sydney", region: "New South Wales", description: "Australia's most iconic city — home to the Opera House, Harbour Bridge, Bondi Beach, and a vibrant food and cultural scene." },
  { name: "Melbourne", region: "Victoria", description: "Australia's cultural capital, famous for its laneways, coffee culture, world-class restaurants, street art, and the Great Ocean Road." },
  { name: "Queensland", region: "Tropical North & Gold Coast", description: "From the Great Barrier Reef and Daintree Rainforest to the sunny Gold Coast beaches and theme parks." },
  { name: "Uluru", region: "Northern Territory", description: "The spiritual heart of Australia. Ancient red rock formations, stunning sunsets, and Indigenous culture." },
  { name: "Tasmania", region: "Island State", description: "Wild and pristine — world-heritage wilderness, gourmet food and wine, colonial heritage, and unique wildlife." },
  { name: "Western Australia", region: "Perth & Beyond", description: "From Perth's sun-drenched beaches to the stunning Kimberley region, Ningaloo Reef, and the ancient Pinnacles." },
];

export default function PlacesAustraliaPage() {
  return (
    <>
      <section className="relative bg-dark text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/90 via-amber-900/70 to-stone-700/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/travel-information" className="text-sand text-sm hover:underline mb-4 inline-block">
            <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Travel Information
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visiting Places in Australia</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore the diverse destinations that make Australia one of the world&apos;s most exciting countries to visit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <div key={place.name} className="bg-white rounded-lg overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-br from-stone-600 via-amber-800/60 to-stone-700 h-44 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="relative text-3xl font-bold text-white/90">{place.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-1">{place.name}</h3>
                  <p className="text-terra text-sm font-semibold mb-3">{place.region}</p>
                  <p className="text-dark/60 text-sm">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
