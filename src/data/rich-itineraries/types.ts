export interface Activity {
  name: string;
  type: "Included" | "Recommended" | "Optional" | "Information";
  description: string;
  affiliateLink?: string;
}

export interface Accommodation {
  name: string;
  description: string;
  affiliateLink?: string;
}

export interface RichDay {
  day: number;
  title: string;
  location: string;
  description: string;
  accommodation?: Accommodation;
  activities: Activity[];
}

export interface RichItinerary {
  slug: string;
  title: string;
  duration: string;
  category: string;
  categorySlug: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  days: RichDay[];
  downloadLink: string;
}
