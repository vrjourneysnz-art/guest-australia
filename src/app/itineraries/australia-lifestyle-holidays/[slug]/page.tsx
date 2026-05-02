import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getItinerary, getItinerariesByCategory } from "@/data/itineraries";
import ItineraryDetail from "@/components/ItineraryDetail";
import RichItineraryDetail from "@/components/RichItineraryDetail";
import { lifestyle7Day } from "@/data/rich-itineraries/7-day-lifestyle";
import { lifestyle10Day } from "@/data/rich-itineraries/10-day-lifestyle";
import { lifestyle12Day } from "@/data/rich-itineraries/12-day-lifestyle";
import { lifestyle14Day } from "@/data/rich-itineraries/14-day-lifestyle";
import { RichItinerary } from "@/data/rich-itineraries/types";

const richItineraries: Record<string, RichItinerary> = {
  [lifestyle7Day.slug]: lifestyle7Day,
  [lifestyle10Day.slug]: lifestyle10Day,
  [lifestyle12Day.slug]: lifestyle12Day,
  [lifestyle14Day.slug]: lifestyle14Day,
};

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return getItinerariesByCategory("lifestyle").map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const canonical = `/itineraries/australia-lifestyle-holidays/${params.slug}`;
  const rich = richItineraries[params.slug];
  if (rich) {
    return {
      title: `${rich.title} | Guest Australia`,
      description: rich.metaDescription,
      alternates: { canonical },
      openGraph: { type: "article", url: canonical, title: rich.title, description: rich.metaDescription },
    };
  }
  const itinerary = getItinerary("lifestyle", params.slug);
  if (!itinerary) return {};
  return {
    title: `${itinerary.title} | Guest Australia`,
    description: itinerary.intro,
    alternates: { canonical },
    openGraph: { type: "article", url: canonical, title: itinerary.title, description: itinerary.intro },
  };
}

export default function LifestyleItineraryPage({ params }: Props) {
  const rich = richItineraries[params.slug];
  if (rich) {
    const resourcesPosition =
      params.slug === "7-days-australia-vacation-package" ? "top" : "bottom";
    return <RichItineraryDetail itinerary={rich} resourcesPosition={resourcesPosition} />;
  }
  const itinerary = getItinerary("lifestyle", params.slug);
  if (!itinerary) notFound();
  return <ItineraryDetail itinerary={itinerary} />;
}
