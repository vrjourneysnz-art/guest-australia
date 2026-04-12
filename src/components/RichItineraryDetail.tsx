"use client";

import { useState } from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import type { RichItinerary, RichDay } from "@/data/rich-itineraries/types";

function ActivityTypeBadge({ type }: { type: string }) {
  const styles: Record<string, string> = {
    Included: "bg-green-100 text-green-800",
    Recommended: "bg-blue-100 text-blue-800",
    Optional: "bg-amber-100 text-amber-800",
    Information: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${styles[type] || styles.Information}`}>
      {type}
    </span>
  );
}

function DayCard({ day }: { day: RichDay }) {
  const [expanded, setExpanded] = useState(day.day === 1);

  return (
    <div className="border border-gray-100 rounded-lg overflow-hidden bg-white shadow-sm">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-warm/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className="flex-shrink-0 w-10 h-10 bg-terra text-white rounded-full flex items-center justify-center text-sm font-bold">
            {day.day}
          </span>
          <div>
            <h3 className="text-lg font-bold text-dark">{day.title}</h3>
            <p className="text-dark/40 text-sm">{day.location}</p>
          </div>
        </div>
        <i className={`fa-solid fa-chevron-down text-dark/30 transition-transform ${expanded ? "rotate-180" : ""}`} />
      </button>

      {expanded && (
        <div className="px-6 pb-6 border-t border-gray-50">
          <p className="text-dark/60 mt-4 leading-relaxed text-sm whitespace-pre-line">{day.description}</p>

          {day.accommodation && (
            <div className="mt-4 bg-warm rounded-lg p-4">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-bed text-terra text-sm" />
                  <span className="font-semibold text-dark text-sm">Check in to {day.accommodation.name}</span>
                </div>
                {day.accommodation.affiliateLink && (
                  <a
                    href={day.accommodation.affiliateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs bg-terra/10 text-terra font-semibold px-3 py-1 rounded-full hover:bg-terra/20 transition-colors flex-shrink-0"
                  >
                    View Hotel <i className="fa-solid fa-arrow-up-right-from-square text-[10px] ml-1" />
                  </a>
                )}
              </div>
              <p className="text-dark/50 text-xs leading-relaxed">{day.accommodation.description}</p>
            </div>
          )}

          {day.activities.length > 0 && (
            <div className="mt-4 space-y-3">
              {day.activities.map((activity, i) => (
                <div key={i} className="border border-gray-100 rounded-lg p-4">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-compass text-terra text-sm" />
                      <span className="font-semibold text-dark text-sm">{activity.name}</span>
                    </div>
                    <ActivityTypeBadge type={activity.type} />
                  </div>
                  <p className="text-dark/50 text-xs leading-relaxed mt-1 pl-6">{activity.description}</p>
                  {activity.affiliateLink && (
                    <div className="mt-2 pl-6">
                      <a
                        href={activity.affiliateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-terra font-semibold hover:underline"
                      >
                        More Info & Booking <i className="fa-solid fa-arrow-up-right-from-square text-[10px]" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function RichItineraryDetail({ itinerary }: { itinerary: RichItinerary }) {
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
          <p className="text-lg text-dark/70 leading-relaxed mb-8">{itinerary.intro}</p>

          {/* Download CTA */}
          <a
            href={itinerary.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-terra text-white py-4 rounded-lg font-semibold hover:bg-terra-dark transition-colors mb-12"
          >
            <i className="fa-solid fa-file-pdf text-lg" />
            Download Your Free PDF Planner
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
          </a>

          {/* Highlights */}
          <div className="bg-warm rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-dark mb-4">
              <i className="fa-solid fa-star text-terra text-lg mr-2" />
              Package Highlights
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
          <h2 className="text-2xl font-bold text-dark mb-6">
            <i className="fa-solid fa-calendar-days text-terra text-lg mr-2" />
            Day-by-Day Itinerary
          </h2>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-1.5">
              <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded-full">Included</span>
              <span className="text-dark/40 text-xs">in package</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded-full">Recommended</span>
              <span className="text-dark/40 text-xs">self-guided</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full">Optional</span>
              <span className="text-dark/40 text-xs">add-on</span>
            </div>
          </div>

          <div className="space-y-4">
            {itinerary.days.map((day) => (
              <DayCard key={day.day} day={day} />
            ))}
          </div>

          {/* Download CTA bottom */}
          <a
            href={itinerary.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-terra text-white py-4 rounded-lg font-semibold hover:bg-terra-dark transition-colors mt-12"
          >
            <i className="fa-solid fa-file-pdf text-lg" />
            Download Your Free PDF Planner
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
          </a>

          {/* Booking Options */}
          <div className="mt-12 bg-warm rounded-lg p-8">
            <h2 className="text-2xl font-bold text-dark mb-3 text-center">
              Book Your Honeymoon Trip
            </h2>
            <p className="text-dark/50 text-center mb-6">
              Every part of this itinerary can be amended to your personal requirements. We can add, delete or amend — just contact us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/travel-planning"
                className="inline-flex items-center justify-center gap-2 bg-terra text-white px-8 py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
              >
                <i className="fa-solid fa-envelope text-sm" />
                Plan My Trip
              </Link>
            </div>
          </div>

          {/* Affiliate Resources */}
          <div className="mt-12 border border-gray-100 rounded-lg p-8">
            <h2 className="text-xl font-bold text-dark mb-4">
              <i className="fa-solid fa-suitcase text-terra mr-2" />
              Useful Travel Resources
            </h2>
            <p className="text-dark/50 text-sm mb-6">
              Planning your own arrangements? These trusted partners offer competitive rates across Australia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://geni.us/RentalCarsAustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-gray-100 rounded-lg p-4 hover:border-terra/30 hover:bg-warm/50 transition-colors group"
              >
                <i className="fa-solid fa-car text-terra text-lg" />
                <div>
                  <span className="font-semibold text-dark text-sm group-hover:text-terra transition-colors">Rental Cars Australia</span>
                  <p className="text-dark/40 text-xs">Compare car hire deals</p>
                </div>
              </a>
              <a
                href="https://geni.us/StayAustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-gray-100 rounded-lg p-4 hover:border-terra/30 hover:bg-warm/50 transition-colors group"
              >
                <i className="fa-solid fa-hotel text-terra text-lg" />
                <div>
                  <span className="font-semibold text-dark text-sm group-hover:text-terra transition-colors">Accommodation</span>
                  <p className="text-dark/40 text-xs">Find hotels &amp; lodges</p>
                </div>
              </a>
              <a
                href="https://geni.us/ToursAustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-gray-100 rounded-lg p-4 hover:border-terra/30 hover:bg-warm/50 transition-colors group"
              >
                <i className="fa-solid fa-ticket text-terra text-lg" />
                <div>
                  <span className="font-semibold text-dark text-sm group-hover:text-terra transition-colors">Tours &amp; Activities</span>
                  <p className="text-dark/40 text-xs">Book experiences online</p>
                </div>
              </a>
              <a
                href="https://geni.us/MotorhomesAustralia"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-gray-100 rounded-lg p-4 hover:border-terra/30 hover:bg-warm/50 transition-colors group"
              >
                <i className="fa-solid fa-caravan text-terra text-lg" />
                <div>
                  <span className="font-semibold text-dark text-sm group-hover:text-terra transition-colors">Motorhome Hire</span>
                  <p className="text-dark/40 text-xs">Campervan &amp; motorhome rentals</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
