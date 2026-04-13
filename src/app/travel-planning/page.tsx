import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Plan Your Australia Holiday | Guest Australia",
  description:
    "Start planning your personalised Australia holiday with Michael Nees — 30+ years of expert local knowledge. Standard and premium consultation packages available.",
};

export default function TravelPlanningPage() {
  return (
    <>
      {/* Hero */}
      <PageHeader>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Plan Your Australia Holiday
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Let Michael craft a personalised itinerary tailored to your interests, budget, and travel style.
        </p>
      </PageHeader>

      {/* Planning Service Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">
              Expert-Led, Stress-Free Travel Planning
            </h2>
            <p className="text-dark/60 leading-relaxed">
              With over 30 years of hands-on experience living and travelling across Australia, Michael
              Nees creates personalised itineraries that go beyond the typical tourist trail. Every trip
              is custom-designed around your preferences — from luxury accommodation and unique
              experiences to practical logistics and insider tips that only a local expert can provide.
            </p>
          </div>

          {/* Service Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-warm rounded-lg p-8 border border-transparent hover:border-sand/50 transition-colors">
              <h3 className="text-2xl font-bold text-dark mb-2">Standard Consultation</h3>
              <p className="text-3xl font-bold text-terra mb-4">US$169</p>
              <ul className="space-y-2 text-dark/60 text-sm mb-6">
                {["Video Call & Tailored itinerary design", "Accommodation recommendations", "Transport and logistics guidance", "Email support throughout planning"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-terra text-xs mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/guestnz/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-terra text-white py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
              >
                Book Now <i className="fa-solid fa-arrow-right text-xs ml-1" />
              </a>
            </div>

            <div className="bg-warm rounded-lg p-8 border-2 border-terra/20 relative">
              <div className="absolute -top-3 right-6 bg-terra text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">Premium Consultation</h3>
              <p className="text-3xl font-bold text-terra mb-4">US$399</p>
              <ul className="space-y-2 text-dark/60 text-sm mb-6">
                {["Everything in Standard, plus:", "Detailed day-by-day planning", "Booking assistance and reservations", "Second Video Call Consultation"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <i className="fa-solid fa-check text-terra text-xs mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/guestnz/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-terra text-white py-3 rounded font-semibold hover:bg-terra-dark transition-colors"
              >
                Book Now <i className="fa-solid fa-arrow-right text-xs ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-sand">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-dark mb-3">
              See How It Works
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              Watch Michael explain how he creates personalised Australian holiday itineraries tailored to your travel style.
            </p>
          </div>
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/3Wfx2cy4-aA"
              title="How Guest Australia Travel Planning Works"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Expert Profile */}
      <section className="pt-4 pb-12 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-dark mb-3">Meet Your Travel Expert</h2>
            <p className="text-dark/60 leading-relaxed">
              Michael Nees is a New Zealand-based travel designer with over 30 years of expertise
              planning Australian holidays. From Sydney&apos;s harbour to the red heart of the Outback,
              Michael&apos;s firsthand knowledge ensures every trip is extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark mb-2 text-center">
            Start Your Enquiry
          </h2>
          <p className="text-dark/50 text-center mb-8">
            Fill in the form below and Michael will get back to you within 24 hours.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
