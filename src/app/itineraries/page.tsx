import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/data/itineraries";

export const metadata: Metadata = {
  title: "Australia Travel Itineraries | Guest Australia",
  description:
    "Browse our curated collection of Australia travel itineraries — lifestyle holidays, family adventures, honeymoon packages, and combined Australia & New Zealand trips.",
};

export default function ItinerariesPage() {
  return (
    <>
      <section className="relative bg-dark text-white py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800/90 via-amber-900/70 to-stone-700/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Australia Travel Itineraries
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore our expertly crafted itineraries across four categories. Each trip is fully
            customisable to suit your travel style and preferences.
          </p>
        </div>
      </section>

      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/itineraries/${cat.slug}`}
                className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow group border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-dark mb-3 group-hover:text-terra transition-colors">
                  {cat.title}
                </h2>
                <p className="text-dark/60 mb-4 text-sm">{cat.description}</p>
                <span className="text-terra font-semibold text-sm group-hover:underline">
                  View Itineraries <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
