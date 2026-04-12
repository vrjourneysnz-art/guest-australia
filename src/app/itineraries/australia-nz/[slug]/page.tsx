import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import { australiaNzFiji25Day } from "@/data/rich-itineraries/25-day-australia-nz-fiji";
import { australiaNz21Day } from "@/data/rich-itineraries/21-day-australia-nz";
import { australiaNz14Day } from "@/data/rich-itineraries/14-day-australia-nz";
import { australiaNz16Day } from "@/data/rich-itineraries/16-day-australia-nz";
import { RichItinerary } from "@/data/rich-itineraries/types";

const richItineraries: Record<string, RichItinerary> = {
  [australiaNzFiji25Day.slug]: australiaNzFiji25Day,
  [australiaNz21Day.slug]: australiaNz21Day,
  [australiaNz14Day.slug]: australiaNz14Day,
  [australiaNz16Day.slug]: australiaNz16Day,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("australia-nz").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const rich = richItineraries[params.slug];
  if (rich) {
    return {
      title: `${rich.title} | Guest Australia`,
      description: rich.metaDescription,
    };
  }
  const itinerary = getItinerary("australia-nz", params.slug);
  if (!itinerary) return {};
  return {
    title: `${itinerary.title} | Guest Australia`,
    description: itinerary.intro,
  };
}

export default function AustraliaNzItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    return <RichItineraryDetail itinerary={rich} />;
  }
  const itinerary = getItinerary("australia-nz", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
