import type { Metadata } from "next";
import { getItinerariesByCategory } from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Australia & New Zealand Itineraries | Guest Australia",
  description: "Combined Australia and New Zealand travel itineraries — experience the best of both countries in one incredible journey.",
};

export default function AustraliaNzPage() {
  const items = getItinerariesByCategory("australia-nz");
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Australia & New Zealand</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Combined itineraries covering the best of both Australia and New Zealand — the ultimate South Pacific adventure.
        </p>
      </PageHeader>
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
