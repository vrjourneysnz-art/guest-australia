import type { Metadata } from "next";
import { getItinerariesByCategory } from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";

export const metadata: Metadata = {
  title: "Lifestyle Holidays Australia | Guest Australia",
  description: "Curated lifestyle holiday itineraries for discerning travellers — fine dining, premium accommodation, and stunning Australian scenery.",
};

export default function LifestylePage() {
  const items = getItinerariesByCategory("lifestyle");
  return (
    <>
      <section className="relative bg-dark text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/90 via-amber-900/70 to-stone-700/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Lifestyle Holidays</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Curated experiences for discerning travellers who want to see Australia at its very best.
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
