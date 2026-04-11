import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Australia Travel Information | Guest Australia",
  description: "Helpful travel tips, guides, and destination information for planning your Australia holiday.",
};

const sections = [
  {
    title: "Helpful Travel Tips",
    description: "Essential tips and advice to help you prepare for your Australian adventure — from visa requirements to packing lists and local customs.",
    href: "/travel-information/travel-tips",
    icon: "fa-lightbulb",
  },
  {
    title: "Visiting Places in Australia",
    description: "Discover Australia's most iconic destinations — from Sydney's harbour to the tropical reefs of Queensland and the red centre of Uluru.",
    href: "/travel-information/places-australia",
    icon: "fa-map-location-dot",
  },
];

export default function TravelInformationPage() {
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Travel Information</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Everything you need to know before you visit Australia — tips, guides, and destination highlights.
        </p>
      </PageHeader>

      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-lg p-8 hover:shadow-md transition-shadow group border border-gray-100"
              >
                <i className={`fa-solid ${s.icon} text-3xl text-terra mb-4 block`} />
                <h2 className="text-2xl font-bold text-dark mb-3 group-hover:text-terra transition-colors">
                  {s.title}
                </h2>
                <p className="text-dark/60 mb-4 text-sm">{s.description}</p>
                <span className="text-terra font-semibold text-sm group-hover:underline">
                  Read More <i className="fa-solid fa-arrow-right text-xs" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
