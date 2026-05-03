import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://guestaustralia.com"),
  title: {
    default: "Australia Travel Planning | Guest Australia",
    template: "%s",
  },
  description:
    "Plan your dream Australia holiday with Guest Australia. Personalised itineraries, expert travel planning, and authentic Australian experiences with 30+ years of local expertise.",
  keywords: [
    "Australia travel",
    "Australia holiday packages",
    "Australia itinerary",
    "honeymoon Australia",
    "family holiday Australia",
    "Australia and New Zealand tours",
    "Australia travel planning",
    "Guest Australia",
  ],
  authors: [{ name: "Michael Nees" }],
  creator: "Guest Australia",
  publisher: "Guest Australia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://guestaustralia.com",
    siteName: "Guest Australia",
    title: "Australia Travel Planning | Guest Australia",
    description:
      "Plan your dream Australia holiday with Guest Australia. Personalised itineraries, expert travel planning, and authentic Australian experiences with 30+ years of local expertise.",
    images: [
      {
        url: "/images/hero-reef.jpg",
        width: 1200,
        height: 630,
        alt: "Guest Australia — personalised Australia holiday planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Australia Travel Planning | Guest Australia",
    description:
      "Plan your dream Australia holiday with personalised itineraries and 30+ years of local expertise.",
    images: ["/images/hero-reef.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Guest Australia",
    url: "https://guestaustralia.com",
    logo: "https://guestaustralia.com/images/logo.jpg",
    description:
      "Personalised Australia holiday planning with 30+ years of local expertise. Specialising in lifestyle, family, honeymoon and Australia/New Zealand itineraries.",
    founder: {
      "@type": "Person",
      name: "Michael Nees",
    },
    sameAs: [
      "https://geni.us/AustraliaPlaylist",
      "https://facebook.com/GUESTOZ",
      "https://www.instagram.com/guestaustralia/",
      "https://nz.linkedin.com/in/michaelnees",
    ],
    areaServed: [
      { "@type": "Country", name: "Australia" },
      { "@type": "Country", name: "New Zealand" },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${openSans.variable} font-sans antialiased text-dark`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-NVN92HDJEK" />
    </html>
  );
}
