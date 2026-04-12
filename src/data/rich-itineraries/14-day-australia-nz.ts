import { RichItinerary } from "./types";

export const australiaNz14Day: RichItinerary = {
  slug: "2-week-trip-australia-new-zealand",
  title: "2 Week Trip to Australia and New Zealand",
  duration: "14 Days",
  category: "Australia & New Zealand",
  categorySlug: "australia-nz",
  metaDescription:
    "Explore Australia and New Zealand in 2 weeks. Visit Sydney, snorkel the Great Barrier Reef, explore the Daintree, then discover Queenstown, Fox Glacier, Abel Tasman and Rotorua.",
  intro: "Are you looking to explore Australia and New Zealand in 2 weeks? Well, we've got the perfect Australia and New Zealand Tour for you! Experienced travellers will love this itinerary!",
  highlights: [
    "Sydney's famous golden beaches including Bondi Beach and Sydney Opera House",
    "Stay in the tropical holiday town of Port Douglas with a lovely village feel",
    "Sail away to the Great Barrier Reef in the luxury Aquarius Catamaran",
    "Snorkel the Great Barrier Reef with optional intro dive",
    "Explore Daintree National Park, a World Heritage-listed forest",
    "Stay in Queenstown the adventure capital of New Zealand",
    "Explore NZ's Fox Glacier and Abel Tasman's wildlife in their natural habitat",
    "Visit a White Heron colony near Whataroa - a memorable nature experience",
    "Travel Lonely Planet's Top 10 Coastal Drives - The Great Coast Road",
    "Visit the famous Pancake Rocks and Blowholes at Punakaiki",
    "Explore volcanic areas and hot pools around Rotorua",
  ],
  downloadLink: "https://geni.us/TempAusNZ14Days",
  days: [
    {
      day: 1,
      title: "Arrive in Sydney",
      location: "Sydney",
      description:
        "Sydney is one of the most sought after destinations in Australia - the harbour views of this city are some of the best in the world - the dining is world class. However, Sydney is also famous for golden beaches and a very energetic nightlife.",
      accommodation: {
        name: "The Grace Sydney",
        description:
          "The Grace Hotel is conveniently located in the centre of Sydney's CBD, on the corner of King and York streets. The hotel is minutes away from the Queen Victoria Building, Darling Harbour, Martin Place, Circular Quay and The Rocks. Facilities include a gym, heated indoor lap pool, sauna and steam room. Wine and dine in the relaxed intimacy of Grace Brasserie. Complimentary wifi throughout the hotel.",
        affiliateLink: "https://geni.us/TheGraceSydney",
      },
      activities: [
        {
          name: "Sydney Opera House",
          type: "Optional",
          description:
            "The Sydney Opera House, an architectural masterpiece, is located at Bennelong Point in Sydney. Renowned for its striking sail-like design, it is a globally recognised symbol of innovation and artistic excellence. Visitors can explore its rich history through guided tours or experience world-class performances.",
          affiliateLink: "https://geni.us/SydneyOperaHouse",
        },
        {
          name: "SEA LIFE Sydney Aquarium",
          type: "Optional",
          description:
            "One of Sydney's most popular attractions featuring thousands of aquatic animals including sharks, dugongs, penguins and tropical fish in stunning underwater exhibits.",
        },
        {
          name: "Manly Beach",
          type: "Recommended",
          description:
            "One of Australia's most famous surfing beaches. With its tree-lined promenade and long stretch of fine soft sand, take the scenic ferry ride from Circular Quay for stunning harbour views.",
          affiliateLink: "https://geni.us/SydneyFerries",
        },
        {
          name: "The Rocks",
          type: "Optional",
          description:
            "The Rocks provides an opportunity to experience an environment where buildings and public places of the eighteenth, nineteenth and early twentieth century still remain.",
        },
      ],
    },
    {
      day: 2,
      title: "Sydney City Tour & Bondi Beach",
      location: "Sydney",
      description:
        "Sydney is a great introduction to this beautiful city. Check out the historic Rocks precinct, visit the first church in Australia, the Observatory and the convict-built cottages. Travel around Circular Quay, see the magnificent Sydney Opera House. Take your time exploring the gorgeous Botanical Gardens - don't forget to sit on Mrs Macquarie's chair - the views are sublime.",
      accommodation: {
        name: "The Grace Sydney",
        description:
          "The Grace Hotel is conveniently located in the centre of Sydney's CBD, on the corner of King and York streets.",
        affiliateLink: "https://geni.us/TheGraceSydney",
      },
      activities: [
        {
          name: "The Essentials Sydney Tour",
          type: "Optional",
          description:
            "Embark on an unforgettable journey through the iconic city of Sydney with a personal guide. Visit The Rocks precinct, Sydney Botanical Gardens, Macquarie Street, Mrs Macquarie's Chair, and enjoy lunch at the Cruising Yacht Club of Australia. Allow 5 hours. Hotel pick-up and drop-off included.",
          affiliateLink: "https://geni.us/AusLuxTours",
        },
        {
          name: "BridgeClimb Sydney",
          type: "Optional",
          description:
            "Ascend the arches of the Sydney Harbour Bridge step by step and enjoy iconic views of Sydney. Your Climb Leader will entertain you with stories about the bridge's history. Located at 3 Cumberland Street, The Rocks. Allow 3.5 hours.",
          affiliateLink: "https://geni.us/SydneyBridgeClimb",
        },
        {
          name: "Bondi Beach",
          type: "Information",
          description:
            "Bondi Beach is one of Australia's most iconic beaches. The beach features golden sands and sparkling blue water. Visitors can enjoy the Bondi Icebergs, a walk along the Coogee Coastal Trail, and food at the nearby restaurants.",
          affiliateLink: "https://geni.us/BondiCoogeeWalk",
        },
      ],
    },
    {
      day: 3,
      title: "Fly to Tropical Port Douglas",
      location: "Port Douglas",
      description:
        "Now for a dramatic change of scenery! Transfer back to Sydney Airport for a domestic flight direct to Cairns. From Cairns, take another transfer to the Port Douglas area - a one hour's drive. Time to enjoy a stay in the tropical holiday town of Port Douglas.",
      accommodation: {
        name: "Port Douglas Peninsula Boutique Hotel",
        description:
          "Port Douglas Peninsula Boutique Hotel offers a boutique hotel experience with exceptional ocean views overlooking Four Mile Beach. Only 40 metres to the beach, a 2 minute stroll to the heart of Port Douglas. All 34 beachfront one bedroom suites have a kitchenette and private balcony. An adult only haven with complimentary Wi-Fi.",
        affiliateLink: "https://geni.us/PeninsulaPD",
      },
      activities: [],
    },
    {
      day: 4,
      title: "Great Barrier Reef Sailing & Snorkelling",
      location: "Port Douglas",
      description:
        "Sail away to the Great Barrier Reef in the luxury catamaran. The Aquarius is a dedicated snorkel only vessel with a very personalised level of service. Cruise to the stunning tropical Low Isles. The marine life here is colourful and plentiful. Swim and snorkel in the playground of green turtles, parrotfish and fusiliers. Relax on the return trip back to Port Douglas.",
      accommodation: {
        name: "Port Douglas Peninsula Boutique Hotel",
        description:
          "Boutique beachfront hotel overlooking Four Mile Beach in Port Douglas.",
        affiliateLink: "https://geni.us/PeninsulaPD",
      },
      activities: [
        {
          name: "Sailaway Outer Reef Tour",
          type: "Included",
          description:
            "Sail aboard the luxury Aquarius Catamaran to the Great Barrier Reef. A dedicated snorkel-only vessel with personalised service. Swim and snorkel among vibrant coral and marine life at the Low Isles. Includes gourmet seafood lunch and hotel transfers in Port Douglas.",
          affiliateLink: "https://geni.us/OuterReefSnorkelDive",
        },
        {
          name: "Great Barrier Reef",
          type: "Information",
          description:
            "The Great Barrier Reef is the world's largest coral reef system, stretching over 2,300 kilometres along the Queensland coast. Home to an incredible diversity of marine life including turtles, rays, sharks and thousands of species of fish and coral.",
        },
      ],
    },
    {
      day: 5,
      title: "Daintree Rainforest & Cape Tribulation",
      location: "Port Douglas",
      description:
        "Enjoy a tour of the Daintree National Park, a World Heritage-listed forest region. Step aboard a purpose-built craft for a cruise on the calm waters of the Daintree River. Cruise by riverbanks close enough to enjoy the overhead canopy of the rainforest. See if you can spot the vivid Ulysses Butterfly, Kingfishers and other wildlife. Get your camera ready for those magnificent crocodiles basking in the sun.",
      accommodation: {
        name: "Port Douglas Peninsula Boutique Hotel",
        description:
          "Boutique beachfront hotel overlooking Four Mile Beach in Port Douglas.",
        affiliateLink: "https://geni.us/PeninsulaPD",
      },
      activities: [
        {
          name: "Daintree Wanderer Tour",
          type: "Optional",
          description:
            "Travel through rich farming areas towards the World Heritage listed Daintree National Park. Enjoy a Daintree River cruise seeking out wildlife and crocodiles, a guided rainforest walk, morning tea, visit Cape Tribulation Beach, and lunch with local produce. Includes hotel pick-up and drop-off, private guide, 2-course lunch. Allow 9 hours.",
          affiliateLink: "https://geni.us/DaintreeWanderer",
        },
        {
          name: "Daintree Cape Tribulation 4WD Bloomfield Track Day Tour",
          type: "Included",
          description:
            "An adventurous 4WD tour through the Daintree rainforest to Cape Tribulation via the famous Bloomfield Track. Experience the beauty of the ancient rainforest meeting the reef.",
          affiliateLink: "https://geni.us/CapeTribulation",
        },
        {
          name: "Wildlife Habitat",
          type: "Recommended",
          description:
            "An open and interactive wildlife park where visitors and animals mix freely across four environments. Hand-feed kangaroos and wallabies, observe cassowaries, and cuddle a Koala.",
        },
        {
          name: "Daintree National Park",
          type: "Information",
          description:
            "Part of the Wet Tropics World Heritage Area, the Daintree Rainforest is one of the most complex and ancient ecosystems on Earth, dating back over 135 million years.",
        },
      ],
    },
    {
      day: 6,
      title: "Fly to Queenstown, New Zealand",
      location: "Queenstown",
      description:
        "Fly to Queenstown, the adventure capital of New Zealand. Either collect a rental car or be met by a driver at the arrival hall for transfer to your accommodation. Queenstown provides every variety of adventure imaginable - para-gliding, jetboating, bungy jumping and more. Take in the sights of the majestic mountains surrounding Queenstown. Enjoy a walk on the shores of Lake Wakatipu - the scenery is stunning!",
      accommodation: {
        name: "Queenstown Park Boutique Hotel",
        description:
          "A stylish boutique hotel in the heart of Queenstown offering elegant rooms with views of the surrounding mountains. Walking distance to restaurants, shops and adventure activities.",
      },
      activities: [],
    },
    {
      day: 7,
      title: "Queenstown Adventures",
      location: "Queenstown",
      description:
        "Explore the Queenstown region today. Depending on the weather, you could also take a scenic flight to Milford Sound which includes a cruise in the fjord.",
      accommodation: {
        name: "Queenstown Park Boutique Hotel",
        description:
          "Stylish boutique hotel in the heart of Queenstown.",
      },
      activities: [
        {
          name: "Paradise Discovery Tour",
          type: "Included",
          description:
            "A guided tour through the stunning Glenorchy and Paradise area, featuring Lord of the Rings filming locations, ancient beech forests, and dramatic mountain scenery.",
        },
        {
          name: "Milford Sound Scenic Flights",
          type: "Optional",
          description:
            "Experience the vastness of New Zealand's dramatic alpine scenery with a scenic flight between Queenstown and Milford Sound.",
        },
        {
          name: "Shotover Jet",
          type: "Optional",
          description:
            "An exhilarating jet-boat ride through the narrow Shotover River canyons with thrilling 360-degree spins.",
        },
        {
          name: "Dart River Safaris",
          type: "Optional",
          description:
            "A guided jet-boating trip up the Dart River through pristine wilderness, featuring Lord of the Rings location areas.",
        },
      ],
    },
    {
      day: 8,
      title: "Drive to Fox Glacier via Haast Pass",
      location: "Fox Glacier",
      description:
        "Take a 5.5-hour drive to Fox Glacier (or Franz Josef Glacier) via Wanaka and Haast Pass. Take plenty of breaks by stopping at key scenic sites on the way. Enjoy a short walk to the lovely Blue Pools near Makarora. Visit the Twin Falls just before you get to Haast Pass. The Shipwreck Cove walk is a definite must-do. In fact, you'll be travelling on one of the most scenic roads in New Zealand. Arrive in the Fox township by late afternoon. Stay for 2 nights to explore the glacier and other attractions.",
      accommodation: {
        name: "Distinction Fox Glacier Te Weheka Hotel",
        description:
          "Distinction Hotel Fox Glacier is the ideal accommodation in Fox Glacier village, a charming township in the beautiful alpine west coast region of New Zealand's South Island. The hotel provides privacy and peaceful seclusion while being a short stroll from the main street. Free unlimited Wi-Fi. All rooms feature a balcony, lounge area and spacious bedroom.",
      },
      activities: [
        {
          name: "Blue Pools Walk",
          type: "Information",
          description:
            "A short walk to the stunning Blue Pools near Makarora. The crystal-clear blue water is fed by snow melt from the mountains.",
        },
        {
          name: "Ship Creek",
          type: "Recommended",
          description:
            "A beautiful coastal walk featuring a dune lake and beach along the remote West Coast. Two short walks explore the unique coastal ecosystem.",
        },
        {
          name: "Lake Matheson",
          type: "Recommended",
          description:
            "Famous for stunning mirror images of Mount Cook and Mount Tasman reflected in the lake's dark waters. The loop walk takes about 1.5 hours through beautiful native bush.",
        },
      ],
    },
    {
      day: 9,
      title: "West Coast to Greymouth",
      location: "Greymouth",
      description:
        "The West Coast region is one of the most sparsely populated parts of the country. In fact, there are very few towns on the 600 km of coastal road between Karamea and Jackson Bay. However this area is visually quite stunning, with native forest and beaches. At Ross, stop at the goldfield walkway and have a picnic by the shores of Lake Ianthe. A visit to the White Heron colony near Whataroa is highly recommended. Have a coffee at the town of Hokitika - famous for New Zealand Pounamu (Jade) and the gold rush from 1860-80.",
      accommodation: {
        name: "Oak Lodge Homestay",
        description:
          "A welcoming homestay in the Greymouth area offering warm New Zealand hospitality, comfortable rooms, and a home-cooked breakfast using local produce.",
      },
      activities: [
        {
          name: "Flying Fox Helihike",
          type: "Included",
          description:
            "An incredible helicopter flight to the glacier followed by a guided hike on the ice. Experience the stunning blue ice formations and crevasses up close.",
        },
        {
          name: "White Heron Sanctuary Tour",
          type: "Optional",
          description:
            "Visit the only White Heron (Kotuku) breeding colony in New Zealand near Whataroa. A memorable nature experience combining a jet-boat ride and rainforest walk.",
        },
        {
          name: "Ross Goldfield Walkway",
          type: "Recommended",
          description:
            "Explore the historic goldfield walkway at Ross, a former gold mining town. The walk passes through remnants of the gold rush era with interpretive signs.",
        },
        {
          name: "Hokitika",
          type: "Recommended",
          description:
            "A charming West Coast town famous for New Zealand Pounamu (Jade), the gold rush heritage, and stunning sunsets over the Tasman Sea.",
        },
      ],
    },
    {
      day: 10,
      title: "Great Coast Road to Abel Tasman",
      location: "Abel Tasman National Park",
      description:
        "The Great Coast Road is Lonely Planet's Top 10 Coastal Drives in the world. This area serves to connect Greymouth and Westport. Travel along the Paparoa National Park, home to the world's smallest penguin. Try your hand at underground rafting at Charleston or go caving at Fox River. Visit the famous Pancake Rocks and Blowholes at Punakaiki. Highway 6 will take you through the dramatic Buller Gorge. This section of the trip is crammed with great photo opportunities.",
      accommodation: {
        name: "Tasman Village Cottage",
        description:
          "A charming self-contained cottage in the Abel Tasman region, offering a peaceful retreat surrounded by native bush and close to the national park walking tracks.",
      },
      activities: [
        {
          name: "Paparoa National Park",
          type: "Information",
          description:
            "Home to the world's smallest penguin, dramatic limestone cliffs and lush native bush. A stunning coastal landscape along the Great Coast Road.",
        },
        {
          name: "Punakaiki Pancake Rocks",
          type: "Recommended",
          description:
            "The famous Pancake Rocks and Blowholes at Punakaiki are a must-see natural attraction. The limestone formations resemble stacks of pancakes and the blowholes shoot water high into the air.",
        },
        {
          name: "Cape Foulwind",
          type: "Recommended",
          description:
            "A scenic coastal walkway with views of a New Zealand Fur Seal colony. The walk takes about 1.5 hours return with stunning ocean views.",
        },
      ],
    },
    {
      day: 11,
      title: "Abel Tasman National Park",
      location: "Abel Tasman National Park",
      description:
        "New Zealand's smallest National Park, the Abel Tasman, is located in the Nelson-Tasman region. Golden beaches sit within sheltered coves - sparkling green waters stretch from Kaiteriteri to Collingwood in the Golden Bay. No visit to this region is complete without a walk along the beautiful coastal track. Remember to bring a few supplies and suitable hiking gear. Visit nearby Marahau, then take a short drive from Motueka to Kaiteriteri Beach - a favourite holiday spot with a beautiful beach.",
      accommodation: {
        name: "Tasman Village Cottage",
        description:
          "Charming self-contained cottage in the Abel Tasman region.",
      },
      activities: [
        {
          name: "Abel Tasman Charters Taranui",
          type: "Included",
          description:
            "A scenic cruise and walk combination in the Abel Tasman National Park. Cruise along the golden coastline, stop at secluded beaches, and enjoy guided walks through native bush.",
        },
        {
          name: "R&R Kayaks",
          type: "Optional",
          description:
            "Paddle through the crystal-clear waters of the Abel Tasman National Park on a guided or freedom kayak trip.",
        },
        {
          name: "Abel Tasman National Park",
          type: "Information",
          description:
            "New Zealand's smallest but most beloved national park, featuring golden sand beaches, clear turquoise waters, and lush coastal native bush.",
        },
      ],
    },
    {
      day: 12,
      title: "Fly to Rotorua",
      location: "Rotorua",
      description:
        "Domestic flight to Auckland and travel to the heart of the North Island and to some of New Zealand's finest landscapes. The Lake Taupo region is the jewel of New Zealand's volcanic heartland. It is an area extremely rich in Maori tradition. Between Taupo and Rotorua, you'll get a great choice of thermal areas to visit. This afternoon, arrive in Rotorua, the very heart of Maori culture.",
      accommodation: {
        name: "Parkside Boutique Lodge",
        description:
          "A boutique lodge in Rotorua offering comfortable rooms with easy access to the town's geothermal attractions, Maori cultural experiences, and adventure activities.",
      },
      activities: [],
    },
    {
      day: 13,
      title: "Rotorua Geothermal & Maori Culture",
      location: "Rotorua",
      description:
        "Today will be full of exciting adventures in Rotorua. Visit the volcanic areas and hot pools around the town. Kick back and enjoy a traditional Hangi concert or a boat trip. For an adrenaline rush, go Ziplining through the forest. For something more laid-back, go fishing on the lake. You can start the morning with a scenic flight over Rotorua and Tarawera. Take a soak in one of nature's hot springs. A trip to an original Maori Village (Ohinemutu) and an evening Hangi concert with dinner is included in your itinerary.",
      accommodation: {
        name: "Parkside Boutique Lodge",
        description:
          "Boutique lodge in Rotorua near geothermal attractions.",
      },
      activities: [
        {
          name: "Rotorua Canopy Tours",
          type: "Included",
          description:
            "Zipline through an ancient native forest canopy. An exciting eco-adventure that takes you through towering trees on a series of ziplines and swing bridges.",
        },
        {
          name: "Hobbiton Movie Set",
          type: "Recommended",
          description:
            "Visit the famous Hobbiton Movie Set from The Lord of the Rings and The Hobbit trilogies. Guided tours take you through the Shire with its hobbit holes, gardens and the Green Dragon Inn.",
        },
        {
          name: "Waimangu Volcanic Valley",
          type: "Recommended",
          description:
            "The world's youngest geothermal system, created by the 1886 eruption of Mount Tarawera. Walk through steaming craters, past hot springs and brilliantly coloured lakes.",
        },
        {
          name: "Wai-O-Tapu Thermal Wonderland",
          type: "Recommended",
          description:
            "New Zealand's most colourful and diverse geothermal attraction. See the Champagne Pool, Artist's Palette and the Lady Knox Geyser.",
        },
        {
          name: "Volcanic Air Scenic Flight",
          type: "Optional",
          description:
            "A scenic helicopter or floatplane flight over Rotorua's volcanic landscape, including Mount Tarawera and the stunning crater lakes.",
        },
        {
          name: "Polynesian Spa",
          type: "Information",
          description:
            "Rotorua's premier hot spring bathing facility, featuring a range of mineral hot pools overlooking Lake Rotorua. Choose from public pools, private pools, or luxury spa treatments.",
        },
      ],
    },
    {
      day: 14,
      title: "Departure Day",
      location: "Rotorua",
      description:
        "Depending on your flight departure, you still have some time in the morning to relax. Auckland is only a good 3-hour drive away. You can extend your stay to another location.\n\nImportant for you to know: every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Contact us and it will be done!",
      activities: [],
    },
  ],
};
