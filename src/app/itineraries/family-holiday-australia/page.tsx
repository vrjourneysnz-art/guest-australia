import type { Metadata } from "next";
import { getItinerariesByCategory } from "@/data/itineraries";
import ItineraryCard from "@/components/ItineraryCard";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Family Holidays Australia | Guest Australia",
  description: "Family-friendly Australia holiday itineraries — beaches, wildlife encounters, theme parks, and unforgettable adventures for all ages.",
};

export default function FamilyPage() {
  const items = getItinerariesByCategory("family");
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Family Holidays</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Fun-filled Australian adventures the whole family will love — beaches, wildlife, and unforgettable memories.
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
