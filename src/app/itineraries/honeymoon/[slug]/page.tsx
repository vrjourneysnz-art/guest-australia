import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import { honeymoon10Day } from "@/data/rich-itineraries/10-day-honeymoon";
import { honeymoon12Day } from "@/data/rich-itineraries/12-day-honeymoon";
import { honeymoon14Day } from "@/data/rich-itineraries/14-day-honeymoon";
import { honeymoon16Day } from "@/data/rich-itineraries/16-day-honeymoon";
import { RichItinerary } from "@/data/rich-itineraries/types";

const richItineraries: Record<string, RichItinerary> = {
  [honeymoon10Day.slug]: honeymoon10Day,
  [honeymoon12Day.slug]: honeymoon12Day,
  [honeymoon14Day.slug]: honeymoon14Day,
  [honeymoon16Day.slug]: honeymoon16Day,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("honeymoon").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const rich = richItineraries[params.slug];
  if (rich) {
    return {
      title: `${rich.title} | Guest Australia`,
      description: rich.metaDescription,
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
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("honeymoon", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
