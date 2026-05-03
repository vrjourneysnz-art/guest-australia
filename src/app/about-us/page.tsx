import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Michael Nees | Guest Australia",
  description:
    "Meet Michael Nees, a travel designer with over 30 years of expertise crafting personalised Australia and New Zealand holidays for international travellers.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    type: "profile",
    url: "/about-us",
    title: "About Michael Nees | Guest Australia",
    description:
      "Meet Michael Nees, a travel designer with over 30 years of expertise crafting personalised Australia and New Zealand holidays.",
    images: ["/images/michael.jpg"],
  },
};

const stats = [
  { number: "30+", label: "Years of travel expertise" },
  { number: "1,000s", label: "Itineraries designed" },
  { number: "100%", label: "Personalised, never templated" },
  { number: "2", label: "Countries: Australia & NZ" },
];

const credentials = [
  {
    icon: "fa-map-location-dot",
    title: "Local Expertise",
    description:
      "Travelling Australia continuously for over three decades — from Sydney harbour and the Great Barrier Reef to Uluru, Tasmania, and the Kimberley.",
  },
  {
    icon: "fa-handshake",
    title: "Trusted Partner Network",
    description:
      "Long-standing relationships with carefully chosen lodges, guides, transport providers, and operators across Australia — the kind of access you cannot get from a booking site.",
  },
  {
    icon: "fa-pen-ruler",
    title: "Custom-Built Itineraries",
    description:
      "Every trip is designed from scratch around your interests, pace, and budget. No copy-and-paste templates, no off-the-shelf packages.",
  },
  {
    icon: "fa-comments",
    title: "Personal Service",
    description:
      "You speak directly with Michael at every stage — design, refinement, booking support, and during your trip if anything needs adjusting.",
  },
];

const values = [
  {
    title: "Honest advice",
    description:
      "If a destination isn't right for your timing, your budget, or your travel style, we'll tell you. Better suggestions, fewer regrets.",
  },
  {
    title: "Quality over quantity",
    description:
      "Slower, deeper itineraries with room to actually experience each place — rather than a checklist that exhausts you.",
  },
  {
    title: "Real local knowledge",
    description:
      "Recommendations based on what we've personally seen, eaten, walked, and stayed in — not what shows up first in search results.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Guest Australia</h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Meet the person behind your perfect Australia and New Zealand holiday.
        </p>
      </PageHeader>

      {/* Intro section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-2">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/michael.jpg"
                  alt="Michael Nees, founder of Guest Australia, outside The Old Post Office at Upper Moutere"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-terra text-sm font-semibold tracking-wide uppercase mb-3">
                Founder & travel designer
              </p>
              <h2 className="text-3xl font-bold text-dark mb-4">Michael Nees</h2>
              <p className="text-dark/70 leading-relaxed mb-4">
                After more than 30 years working in travel — guiding, designing, and operating
                trips across Australia and New Zealand — I started Guest Australia to do one
                thing properly: create deeply personal itineraries for international travellers
                who want more than a tour-bus version of these countries.
              </p>
              <p className="text-dark/70 leading-relaxed mb-5">
                Every trip I plan begins with a real conversation. What kind of traveller are
                you? What do you actually love doing on holiday? How fast or slow do you want
                to move? From there, the route, the accommodation, the pace, and the experiences
                are all shaped around you — not the other way round.
              </p>

              {/* Google reviews link */}
              <a
                href="https://search.google.com/local/reviews?placeid=ChIJyU4Lh2CUO20Rvz1U3-TnFk8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2.5 hover:border-terra/40 hover:bg-warm/40 transition-colors group"
              >
                <i className="fa-brands fa-google text-lg" style={{ color: "#4285F4" }} />
                <div className="flex items-center gap-1 text-amber-500">
                  <i className="fa-solid fa-star text-xs" />
                  <i className="fa-solid fa-star text-xs" />
                  <i className="fa-solid fa-star text-xs" />
                  <i className="fa-solid fa-star text-xs" />
                  <i className="fa-solid fa-star text-xs" />
                </div>
                <span className="text-sm font-semibold text-dark group-hover:text-terra transition-colors">
                  Read our Google reviews
                </span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-dark/40 group-hover:text-terra transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-warm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold text-terra mb-2">{s.number}</div>
                <p className="text-dark/60 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">Why travellers choose Guest Australia</h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              When you work with a one-person studio rather than a large agency, you get something
              you cannot find online: someone who has actually been everywhere your trip will take you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((c) => (
              <div
                key={c.title}
                className="bg-warm/50 rounded-lg p-6 border border-transparent hover:border-sand transition-colors"
              >
                <i className={`fa-solid ${c.icon} text-terra text-2xl mb-3`} />
                <h3 className="text-lg font-bold text-dark mb-2">{c.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">How we work</h2>
            <p className="text-dark/60">A simple, considered process from first conversation to your last day on the road.</p>
          </div>
          <ol className="space-y-6">
            {[
              { n: "01", t: "Discovery call", d: "We talk through your dates, interests, travel style, and any non-negotiables — by video or email, whichever you prefer." },
              { n: "02", t: "Itinerary design", d: "I draft a complete day-by-day itinerary tailored to you, with accommodation suggestions and a route that flows properly." },
              { n: "03", t: "Refinement", d: "We adjust together until every detail feels right — pace, splurges, must-sees, and quiet moments." },
              { n: "04", t: "Booking & support", d: "Once you're happy, I help with reservations and stay available throughout your trip if anything needs adjusting." },
            ].map((step) => (
              <li key={step.n} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-terra text-white flex items-center justify-center font-bold">
                  {step.n}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark mb-1">{step.t}</h3>
                  <p className="text-dark/60 leading-relaxed">{step.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-dark mb-3">What we believe in</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <i className="fa-solid fa-leaf text-terra text-2xl mb-3" />
                <h3 className="text-lg font-bold text-dark mb-2">{v.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-warm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-dark mb-3">Ready to start planning?</h2>
          <p className="text-dark/60 mb-6">
            Tell me a little about your trip and I&apos;ll come back to you with first thoughts within 24 hours.
          </p>
          <Link
            href="/travel-planning"
            className="inline-block bg-terra text-white px-8 py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
          >
            Start Your Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
