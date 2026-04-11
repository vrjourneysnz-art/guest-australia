import Link from "next/link";
import { Itinerary } from "@/data/itineraries";
import PageHeader from "@/components/PageHeader";

export default function ItineraryDetail({ itinerary }: { itinerary: Itinerary }) {
  return (
    <>
      <PageHeader>
        <Link
          href={`/itineraries/${itinerary.categorySlug}`}
          className="text-sand text-sm hover:underline mb-4 inline-block"
        >
          <i className="fa-solid fa-arrow-left text-xs mr-1" />
          Back to {itinerary.category}
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{itinerary.title}</h1>
        <span className="inline-block bg-terra/80 text-white text-sm font-bold px-4 py-1.5 rounded-full">
          {itinerary.duration}
        </span>
      </PageHeader>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-dark/70 leading-relaxed mb-12">{itinerary.intro}</p>

          {/* Highlights */}
          <div className="bg-warm rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">
              <i className="fa-solid fa-star text-terra text-lg mr-2" />
              Trip Highlights
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {itinerary.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-dark/60">
                  <i className="fa-solid fa-check text-terra text-xs mt-1.5" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Day by Day */}
          <h2 className="text-2xl font-bold text-dark mb-8">
            <i className="fa-solid fa-calendar-days text-terra text-lg mr-2" />
            Day-by-Day Itinerary
          </h2>
          <div className="space-y-6">
            {itinerary.days.map((day) => (
              <div key={day.day} className="border-l-4 border-terra pl-6">
                <h3 className="text-lg font-bold text-dark">
                  Day {day.day}: {day.title}
                </h3>
                <p className="text-dark/60 mt-1 text-sm">{day.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-sand rounded-lg p-8">
            <h2 className="text-2xl font-bold text-dark mb-3">
              Ready to Book This Trip?
            </h2>
            <p className="text-dark/50 mb-6">
              Contact Michael to customise this itinerary to your preferences and get a personalised quote.
            </p>
            <Link
              href="/travel-planning"
              className="inline-block bg-terra text-white px-8 py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
