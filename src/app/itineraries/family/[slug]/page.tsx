import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import { family10Day } from "@/data/rich-itineraries/10-day-family";
import { family12Day } from "@/data/rich-itineraries/12-day-family";
import { family14Day } from "@/data/rich-itineraries/14-day-family";
import { family18Day } from "@/data/rich-itineraries/18-day-family";
import { RichItinerary } from "@/data/rich-itineraries/types";

const richItineraries: Record<string, RichItinerary> = {
  [family10Day.slug]: family10Day,
  [family12Day.slug]: family12Day,
  [family14Day.slug]: family14Day,
  [family18Day.slug]: family18Day,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("family").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const rich = richItineraries[params.slug];
  if (rich) {
    return {
      title: `${rich.title} | Guest Australia`,
      description: rich.metaDescription,
    };
  }
  const itinerary = getItinerary("family", params.slug);
  if (!itinerary) return {};
  return {
    title: `${itinerary.title} | Guest Australia`,
    description: itinerary.intro,
  };
}

export default function FamilyItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("family", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
