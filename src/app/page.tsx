import Link from "next/link";

const testimonials = [
  {
    quote:
      "Michael truly is the best! Planned an amazing 20 day trip to Australia and New Zealand... A truly seamless perfect family holiday",
    author: "Audrey Mothupi & Family",
  },
  {
    quote:
      "It was the trip of a lifetime! Sydney, Blue Mountains, Port Douglas/Great Barrier Reef, Uluru, and Melbourne all in 10 days",
    author: "Lisa Mansour & Family",
  },
  {
    quote:
      "Each and every accommodation was off the hook fabulous... I highly recommend Michael as a travel designer",
    author: "Mindy Ross, Lifestyle Traveller",
  },
];

const categories = [
  {
    title: "Honeymoon Australia",
    description: "Romantic escapes for couples",
    href: "/itineraries/honeymoon",
    icon: "fa-heart",
  },
  {
    title: "Lifestyle Holidays",
    description: "Curated premium experiences",
    href: "/itineraries/lifestyle",
    icon: "fa-sun",
  },
  {
    title: "Family Holidays",
    description: "Adventures for all ages",
    href: "/itineraries/family",
    icon: "fa-users",
  },
];

const steps = [
  { number: "1", title: "View Itineraries", description: "Browse our curated collection of Australia travel itineraries across all holiday types.", icon: "fa-map" },
  { number: "2", title: "Receive Your Quote", description: "Get a personalised quote tailored to your travel dates, group size, and preferences.", icon: "fa-file-invoice" },
  { number: "3", title: "Communicate with Michael", description: "Work directly with Michael to refine every detail of your Australian adventure.", icon: "fa-comments" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section — dark overlay on warm background */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        {/* Placeholder for video/hero image background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-900/60 to-stone-800/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Australia Travel Planning —<br />
            Get Your Trip of a Lifetime
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Authentic, personalised journeys planned with a local expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itineraries"
              className="bg-terra text-white px-8 py-3 rounded text-lg font-semibold hover:bg-terra-dark transition-colors"
            >
              View Itineraries
            </Link>
            <Link
              href="/travel-planning"
              className="border-2 border-white text-white px-8 py-3 rounded text-lg font-semibold hover:bg-white hover:text-dark transition-colors"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      {/* 3-Column Category Cards — photographic style with dark overlay */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-4">
            Discover Your Perfect Australian Holiday
          </h2>
          <p className="text-center text-dark/50 mb-12 max-w-2xl mx-auto">
            Whether it&apos;s romance, relaxation, or family fun — we craft the ideal itinerary for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="relative rounded-lg overflow-hidden group h-64 flex items-end"
              >
                {/* Dark gradient overlay simulating photo card */}
                <div className="absolute inset-0 bg-gradient-to-br from-stone-700 via-stone-600 to-amber-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="relative p-6 text-white w-full">
                  <i className={`fa-solid ${cat.icon} text-2xl mb-3 text-sand`} />
                  <h3 className="text-xl font-bold mb-1 group-hover:text-sand transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-white/70 text-sm">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — sandy beige CTA panel */}
      <section className="py-16 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-terra text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`fa-solid ${step.icon} text-xl`} />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{step.title}</h3>
                <p className="text-dark/60 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-dark mb-12">
            What Our Guests Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-lg p-8 shadow-sm">
                <i className="fa-solid fa-quote-left text-2xl text-sand mb-4 block" />
                <p className="text-dark/70 italic mb-6 text-sm leading-relaxed">{t.quote}</p>
                <p className="font-semibold text-terra text-sm">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sister Sites */}
      <section className="py-12 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6">Explore Our Sister Sites</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://guestnewzealand.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              <span className="font-bold text-lg">Guest New Zealand</span>
              <p className="text-white/60 text-sm mt-1">New Zealand travel planning</p>
            </a>
            <a
              href="https://virtualjourneys.co.nz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 px-8 py-4 rounded-lg hover:bg-white/20 transition-colors"
            >
              <span className="font-bold text-lg">Virtual Journeys NZ</span>
              <p className="text-white/60 text-sm mt-1">YouTube travel channel</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
