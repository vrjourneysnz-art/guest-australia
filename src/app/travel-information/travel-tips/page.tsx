import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Helpful Travel Tips for Australia | Guest Australia",
  description: "Essential travel tips for visiting Australia — visa info, best times to visit, packing advice, health and safety, and more.",
};

const tips = [
  { title: "Visa & Entry Requirements", description: "Most visitors need an ETA (Electronic Travel Authority) or eVisitor visa. Apply online before your trip — processing is usually quick and straightforward.", icon: "fa-passport" },
  { title: "Best Time to Visit", description: "Australia is a year-round destination. Summer (Dec–Feb) is ideal for beaches; winter (Jun–Aug) is perfect for the Outback and tropical north.", icon: "fa-sun" },
  { title: "Currency & Money", description: "Australia uses the Australian Dollar (AUD). Credit cards are widely accepted. ATMs are readily available in cities and towns. Tipping is not compulsory.", icon: "fa-coins" },
  { title: "Health & Safety", description: "Australia is generally very safe. Stay sun-smart with SPF 50+ sunscreen, wear hats outdoors, and stay hydrated. Always swim between the flags.", icon: "fa-heart-pulse" },
  { title: "Getting Around", description: "Domestic flights connect major cities. Car hire is ideal for road trips. Trains and coaches are available for scenic journeys between cities.", icon: "fa-car" },
  { title: "Packing Essentials", description: "Pack layers — Australian weather varies by region. Don't forget swimwear, comfortable walking shoes, a good camera, and reef-safe sunscreen.", icon: "fa-suitcase" },
  { title: "Time Zones", description: "Australia spans three time zones: AEST (east coast), ACST (central), and AWST (west coast). Some states observe daylight saving from October to April.", icon: "fa-clock" },
  { title: "Local Customs", description: "Australians are friendly and relaxed. Greet with a casual 'G'day'. Be punctual for appointments. Respect Indigenous cultural sites.", icon: "fa-handshake" },
];

export default function TravelTipsPage() {
  return (
    <>
      <PageHeader>
        <Link href="/travel-information" className="text-sand text-sm hover:underline mb-4 inline-block">
          <i className="fa-solid fa-arrow-left text-xs mr-1" /> Back to Travel Information
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Helpful Travel Tips</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Essential advice to help you prepare for your Australian adventure.
        </p>
      </PageHeader>

      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="bg-white rounded-lg p-6 flex gap-4 border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-sand/40 rounded-full flex items-center justify-center">
                    <i className={`fa-solid ${tip.icon} text-terra`} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-2">{tip.title}</h3>
                  <p className="text-dark/60 text-sm">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
