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

export const honeymoon10Day: RichItinerary = {
  slug: "10-day-honeymoon-packages-australia",
  title: "10 Day Honeymoon Packages Australia",
  duration: "10 Days",
  category: "Honeymoon Packages",
  categorySlug: "honeymoon",
  metaDescription:
    "Looking for 10 Day Honeymoon packages to Australia? Fulfil your desire for romance, go on an Australian adventure, see Australia's top spots.",
  intro: "Are you planning for a 10 Day Honeymoon Trip to Australia? This Australia honeymoon vacation package will fulfil your desire for romance, including a thrilling outdoor Australian adventure, and the chance to see Australia's top travel destinations.",
  highlights: [
    "Visit the iconic Sydney Opera House and spend time at Manly Beach",
    "Relax in the beautiful tropics of Port Douglas",
    "Sail off in a sleek Catamaran to snorkel in the Great Barrier Reef",
    "Get up close to Uluru Rock and dine under a romantic desert sky",
    "Enjoy the sophistication of Melbourne City",
    "Visit the Australian Butterfly Sanctuary and Crocodile Adventures",
  ],
  downloadLink: "https://geni.us/TempAus10Days",
  days: [
    {
      day: 1,
      title: "Arrive in Sydney",
      location: "Sydney",
      description:
        "Meet your transfer driver at Sydney Airport's arrival gate and stay three nights in one of the most beautiful cities in the world. Enjoy the stunning harbour views and golden beaches.",
      accommodation: {
        name: "The Grace Sydney",
        description:
          "The Grace Hotel is conveniently located in the centre of Sydney's CBD, on the corner of King and York streets. The hotel is minutes away from the Queen Victoria Building, Darling Harbour, Martin Place, Circular Quay and The Rocks. Facilities include a gym, heated indoor lap pool, sauna and steam room. Wine and dine in the relaxed intimacy of Grace Brasserie. Complimentary wifi throughout the hotel.",
        affiliateLink: "https://geni.us/TheGraceSydney",
      },
      activities: [
        {
          name: "Sydney Opera House",
          type: "Recommended",
          description:
            "The iconic Sydney Opera House is situated at Bennelong Point on Sydney Harbour. The multi-venue performing arts centre was designed by Jørn Utzon. Today, the Sydney Opera House hosts more than 1,500 performances annually and is regarded as the leading tourist attraction in Australia.",
          affiliateLink: "https://geni.us/SydneyOperaHouse",
        },
        {
          name: "Manly Beach",
          type: "Recommended",
          description:
            "One of Australia's most famous surfing beaches. With its tree-lined promenade and long stretch of fine soft sand, the beach is perfect for surfing, swimming, or simply soaking up the sun. The beachfront promenade is lined with cafés, bars, and restaurants.",
          affiliateLink: "https://geni.us/SydneyFerries",
        },
        {
          name: "The Rocks",
          type: "Recommended",
          description:
            "The Rocks provides an opportunity to experience an environment where buildings and public places of the eighteenth, nineteenth and early twentieth century still remain. Stories from the past can be read from archaeological evidence and the very fabric of the buildings themselves.",
          affiliateLink: "https://geni.us/TheRocksWalkingTour",
        },
      ],
    },
    {
      day: 2,
      title: "Sydney City Tour & Bondi Beach",
      location: "Sydney",
      description:
        "Take a relaxing half-day city tour with a local guide. See Sydney's stunning Botanical Gardens and historical buildings. Stroll along the harbour for views of the Sydney Harbour Bridge and Opera House. Stop for lunch at Australia's premier yacht club then walk along famous Bondi Beach.",
      accommodation: {
        name: "The Grace Sydney",
        description:
          "The Grace Hotel is conveniently located in the centre of Sydney's CBD, on the corner of King and York streets.",
        affiliateLink: "https://geni.us/TheGraceSydney",
      },
      activities: [
        {
          name: "The Essentials Sydney Tour",
          type: "Included",
          description:
            "Embark on an unforgettable journey through the iconic city of Sydney! A personal tour with a guide familiar with all its secrets. Visit The Rocks precinct, Sydney Botanical Gardens, Macquarie Street, Mrs Macquarie's Chair, and enjoy lunch at the Cruising Yacht Club of Australia. Allow 5 hours. Hotel pick-up and drop-off included.",
          affiliateLink: "https://geni.us/AusLuxTours",
        },
        {
          name: "Bondi Beach",
          type: "Included",
          description:
            "Bondi Beach is one of Australia's most famous beaches. Each year tens of thousands of people take to the golden sands of this wide, one-kilometre long city beach. Only 10 kilometres from the city centre, it hosts events all year round.",
          affiliateLink: "https://geni.us/BondiCoogeeWalk",
        },
        {
          name: "BridgeClimb Sydney",
          type: "Optional",
          description:
            "Ascend the arches of the Sydney Harbour Bridge step by step and enjoy iconic views of Sydney. Your Climb Leader will entertain you with stories about the bridge's history. Located at 3 Cumberland Street, The Rocks. Allow 3.5 hours.",
          affiliateLink: "https://geni.us/SydneyBridgeClimb",
        },
      ],
    },
    {
      day: 3,
      title: "Fly to Tropical Port Douglas",
      location: "Port Douglas",
      description:
        "Return to Sydney Airport and fly direct to Cairns (3 hours 15 mins). At Cairns, transfer to the Port Douglas area (1-hour drive). Your accommodation is located in the tropical holiday town of Port Douglas.",
      accommodation: {
        name: "Port Douglas Peninsula Boutique Hotel",
        description:
          "Port Douglas Peninsula Boutique Hotel offers a boutique hotel experience with exceptional ocean views overlooking Four Mile Beach. Only 40 metres to the beach, a 2 minute stroll to the heart of Port Douglas. All 34 beachfront one bedroom suites have a kitchenette and private balcony. Guests can enjoy tiered heated pools and jacuzzi spa. An adult only haven with complimentary Wi-Fi.",
        affiliateLink: "https://geni.us/PeninsulaPD",
      },
      activities: [
        {
          name: "Hartley's Crocodile Adventures",
          type: "Optional",
          description:
            "Nestled in the Wangetti Valley, in the heart of the Wet Tropics World Heritage Area. See crocodiles in a natural Melaleuca Wetland Lagoon on a boat cruise, find Cassowaries in rare riverine rainforest, kangaroos and emus in woodland, and iconic marsupials like koalas and wombats.",
          affiliateLink: "https://geni.us/HartleysCrocodilePark",
        },
        {
          name: "Tjapukai Aboriginal Cultural Park",
          type: "Optional",
          description:
            "Australia's most accessible venue to experience authentic Aboriginal and Torres Strait Islander culture dating back over 40,000 years. Enjoy performance, dance, food and arts, as well as didgeridoo demonstrations, and boomerang and spear throwing.",
          affiliateLink: "https://geni.us/WalkaboutCultural",
        },
        {
          name: "Australian Butterfly Sanctuary",
          type: "Optional",
          description:
            "The largest butterfly flight aviary in the southern hemisphere, located in the heart of Kuranda. Home to over 2,000 butterflies including the electric blue Ulysses and the majestic Cairns Birdwing.",
          affiliateLink: "https://geni.us/KurandaButterfly",
        },
        {
          name: "Wildlife Habitat",
          type: "Optional",
          description:
            "An open and interactive environment where visitors and animals mix freely across four environments: Savannah, Wetlands, Rainforest and Grasslands. Hand-feed kangaroos and wallabies, observe cassowaries, and cuddle a Koala!",
          affiliateLink: "https://geni.us/WildlifeHabitatPD",
        },
      ],
    },
    {
      day: 4,
      title: "Great Barrier Reef Sailing & Snorkelling",
      location: "Port Douglas",
      description:
        "The Great Barrier Reef is a kaleidoscope of colourful marine life. Sail off in the sleek Aquarius Catamaran, a dedicated snorkel-only vessel with personalised service. Enjoy an exhilarating ride to the Low Isles, a tropical island on the Great Barrier Reef. Swim and snorkel in the playground of green turtles and parrotfish. Re-board for a fresh tropical fruit and seafood gourmet lunch. The return journey includes afternoon refreshments.",
      accommodation: {
        name: "Port Douglas Peninsula Boutique Hotel",
        description:
          "Boutique beachfront hotel overlooking Four Mile Beach in Port Douglas.",
        affiliateLink: "https://geni.us/PeninsulaPD",
      },
      activities: [
        {
          name: "Aquarius Sail & Snorkel Low Isles",
          type: "Included",
          description:
            "A modern and luxurious sail vessel operating out of Port Douglas. With only 23 guests, Aquarius is a dedicated snorkel-only vessel offering a personalised experience to the stunning tropical island on the Great Barrier Reef. Relax on the spacious upper deck between guided snorkelling tours and enjoy the delicious seafood buffet lunch. Full day 8:20am–4:00pm. Hotel transfers in Port Douglas included.",
          affiliateLink: "https://geni.us/SailawayLowIsle",
        },
      ],
    },
    {
      day: 5,
      title: "Daintree Rainforest & Cape Tribulation",
      location: "Port Douglas",
      description:
        "Travel to the World Heritage-listed Daintree National Park. Step aboard a personalised craft for a cruise on the mirrored waters of the Daintree River. Cruise close to riverbanks and under the overhead canopy of the rainforest. Seek out the vivid Ulysses Butterfly, Kingfishers and other wildlife. Get your camera ready for those magnificent crocodiles!",
      accommodation: {
        name: "Port Douglas Peninsula Boutique Hotel",
        description:
          "Boutique beachfront hotel overlooking Four Mile Beach in Port Douglas.",
        affiliateLink: "https://geni.us/PeninsulaPD",
      },
      activities: [
        {
          name: "Daintree Wanderer Tour",
          type: "Included",
          description:
            "Travel through rich farming areas towards the World Heritage listed Daintree National Park. Enjoy a Daintree River cruise seeking out wildlife and crocodiles, a guided rainforest walk, lunch with local produce, and visit Cape Tribulation Beach. Includes hotel pick-up and drop-off, private guide, morning tea, 2-course lunch with a glass of wine/beer. Allow 9 hours.",
          affiliateLink: "https://geni.us/DaintreeWanderer",
        },
        {
          name: "Cape Tribulation Beach",
          type: "Information",
          description:
            "Protected by the Cape Tribulation headland, Cape Tribulation Beach is always calm with crystal clear water. A short walk leads to a lookout with spectacular views. There is also a bar and restaurant located practically on the beach.",
          affiliateLink: "https://geni.us/CapeTribulation",
        },
      ],
    },
    {
      day: 6,
      title: "Fly to Uluru (Ayers Rock)",
      location: "Yulara",
      description:
        "Meet your driver at the hotel for transfer to Cairns Airport. Fly to Ayers Rock in the true Outback of Australia. Arrive and transfer to your resort at Yulara, the gateway to Uluru-Kata Tjuta National Park.",
      activities: [],
    },
    {
      day: 7,
      title: "Uluru & Desert Dining Under the Stars",
      location: "Yulara",
      description:
        "Explore the 'Red Centre' with a local guide and begin the new day with an inspiring 4WD Desert Awakenings tour. Be captivated by the Bush Yarns at the Circle of Sand. Tonight, relax under a star-studded Uluru sky.",
      accommodation: {
        name: "Voyages Sails in the Desert Hotel",
        description:
          "Named after the soaring white sails that crown its roof, this is Voyages Ayers Rock Resort's premium hotel. The interior décor focuses on Aboriginal heritage and culture, with a gallery in the lobby and significant artworks throughout. Features the acclaimed Mulgara Gallery, buffet-style Winkiku Restaurant, and the award-winning signature Kuniya Restaurant.",
        affiliateLink: "https://geni.us/SailsDesertAyers",
      },
      activities: [
        {
          name: "Uluru-Kata Tjuta National Park",
          type: "Included",
          description:
            "Owned by the Anangu Aboriginal people, the park is home to the World Heritage listed Uluru — a sandstone monolith standing 348 metres high. Visit the Cultural Centre to hear the stories, see the art, and chat to Anangu guides who will escort you around Uluru base, Kantju Gorge (with Anangu rock art) and the Mutitjulu waterhole.",
          affiliateLink: "https://geni.us/SeitUluruBase",
        },
        {
          name: "Sounds of Silence Dinner",
          type: "Optional",
          description:
            "The best of the Red Centre distilled into four magical hours. An evening of dining under the sparkling outback sky. Begins with canapés and chilled sparkling wine on a viewing platform overlooking Uluru-Kata Tjuta National Park. As darkness falls, listen to a didgeridoo and enjoy a bush tucker inspired buffet with quality Australian wine and beer, followed by a star talk decoding the southern night sky.",
        },
      ],
    },
    {
      day: 8,
      title: "Fly to Melbourne",
      location: "Melbourne",
      description:
        "From Ayers Rock, take a domestic flight to Melbourne with transfer to your inner-city honeymoon hotel. Melbourne is the fashion capital of Australia, known for its sophisticated style and shopping. Explore with local transport or guided tours.",
      accommodation: {
        name: "QT Melbourne",
        description:
          "Offering five-star accommodation in the heart of Melbourne. In-room amenities include TVs with free movies, free Wi-Fi and tea/coffee-making facilities. Guests can delight their palates at various on-site dining options, bars and gym.",
        affiliateLink: "https://geni.us/QTMelbourne",
      },
      activities: [
        {
          name: "Queen Victoria Market",
          type: "Recommended",
          description:
            "The heart and soul of Melbourne. Eat, shop, explore and discover your way through the iconic food halls and heritage Sheds where the banter is as fresh as the produce. The largest open-air market in the Southern Hemisphere.",
        },
        {
          name: "Flinders Lane Gallery",
          type: "Recommended",
          description:
            "Since 1989, Flinders Lane Gallery has gained a reputation for actively supporting emerging, mid-career and indigenous Australian artists. Features works of painterly abstraction, high figuration and sculptural formalism.",
        },
        {
          name: "Yarra River Cruise",
          type: "Optional",
          description:
            "Cruise the Yarra River to discover Melbourne's waterways. Enjoy panoramic views past famous buildings, natural green spaces, and sports arenas while listening to commentary about Melbourne's history.",
          affiliateLink: "https://geni.us/YarraValleyTours",
        },
      ],
    },
    {
      day: 9,
      title: "Phillip Island Penguins & Wildlife",
      location: "Melbourne",
      description:
        "In the morning, shop at the Queen Victoria Market or go on a café crawl through Melbourne's side lanes. In the afternoon, get a close encounter with Australian wildlife in their natural habitat — see the Penguin Parade, visit the Koala Conservation Centre, Churchill Island Heritage Farm, and the Nobbies Centre.",
      accommodation: {
        name: "QT Melbourne",
        description:
          "Five-star accommodation in the heart of Melbourne.",
        affiliateLink: "https://geni.us/QTMelbourne",
      },
      activities: [
        {
          name: "Phillip Island Penguins, Koalas & Wildlife Eco Tour",
          type: "Included",
          description:
            "Discover Churchill Island, the Koala Conservation Centre, Nobbies and the seaside town of Cowes. Watch the famous Penguin Parade as little penguins come ashore in their tuxedos. Small group tour with expert guide. Allow 8–9 hours. Hotel pick-up and drop-off included.",
          affiliateLink: "https://geni.us/PenguinParadeMel",
        },
        {
          name: "Great Ocean Road — Shipwrecks & Wild Clifftops",
          type: "Optional",
          description:
            "Experience the majestic Great Ocean Road with your small group (11 pax max). Close encounters with koalas and kangaroos in the wild, exclusive access to an ancient Eucalyptus Forest walk, and a visit to the famous 12 Apostles and Loch Ard Gorge. Allow 11 hours.",
          affiliateLink: "https://geni.us/GreatOceanRoadMel",
        },
      ],
    },
    {
      day: 10,
      title: "Departure Day",
      location: "Melbourne",
      description:
        "Fly out of Melbourne to any other destination in Australia or New Zealand. You can easily combine existing sample travel itineraries on offer, or we can design a totally new travel package for you to include New Zealand and the Pacific Islands.\n\nImportant to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done!",
      activities: [],
    },
  ],
};
