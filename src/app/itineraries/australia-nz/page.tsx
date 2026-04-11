import type { Metadata } from "next";
import { getItinerariesByCategory } from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";

export const metadata: Metadata = {
  title: "Australia & New Zealand Itineraries | Guest Australia",
  description: "Combined Australia and New Zealand travel itineraries — experience the best of both countries in one incredible journey.",
};

export default function AustraliaNzPage() {
  const items = getItinerariesByCategory("australia-nz");
  return (
    <>
      <section className="relative bg-dark text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/90 via-amber-900/70 to-stone-700/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia & New Zealand</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Combined itineraries covering the best of both Australia and New Zealand — the ultimate South Pacific adventure.
          </p>
        </div>
      </section>
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((it) => <ItineraryCard key={it.slug} itinerary={it} />)}
          </div>
        </div>
      </section>
    </>
  );
}
