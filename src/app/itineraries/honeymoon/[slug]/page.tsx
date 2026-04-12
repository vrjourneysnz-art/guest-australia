import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import { honeymoon10Day } from "@/data/rich-itineraries/10-day-honeymoon";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("honeymoon").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  if (params.slug === honeymoon10Day.slug) {
    return {
      title: `${honeymoon10Day.title} | Guest Australia`,
      description: honeymoon10Day.metaDescription,
    };
  }
  const itinerary = getItinerary("honeymoon", params.slug);
  if (!itinerary) return {};
  return {
    title: `${itinerary.title} | Guest Australia`,
    description: itinerary.intro,
  };
}

export default function HoneymoonItineraryPage({ params }: Props) {
  if (params.slug === honeymoon10Day.slug) {
    return <RichItineraryDetail itinerary={honeymoon10Day} />;
  }
  const itinerary = getItinerary("honeymoon", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
