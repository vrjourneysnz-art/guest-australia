import { RichItinerary } from "./types";

export const lifestyle10Day: RichItinerary = {
  slug: "10-day-australia-holiday-package",
  title: "10 Day Australia Holiday Package",
  duration: "10 Days",
  category: "Lifestyle Holidays",
  categorySlug: "lifestyle",
  metaDescription:
    "This 10 Day Australia Holiday Package explores Sydney, The Great Barrier Reef, Australian Outback, Melbourne and more. Book a unique Australian adventure!",
  intro: "This 10 Day Australia Holiday Package explores some of Australia's most popular travel destinations. Get ready for an Australian adventure, let us do all the planning for your 10 day holiday in Australia!",
  highlights: [
    "Explore beautiful Sydney with a private guided city tour and harbour sailing",
    "Snorkel the Great Barrier Reef on a luxurious sailing catamaran from Port Douglas",
    "Discover the Daintree Rainforest with a private guide and river cruise",
    "Get up close to Uluru Rock and experience the Outback with a 4WD Desert Awakenings tour",
    "Enjoy the sophistication of Melbourne and see the famous Penguin Parade on Phillip Island",
  ],
  downloadLink: "https://geni.us/TempAus10Days",
  days: [
    {
      day: 1,
      title: "Arrive in Sydney",
      location: "Sydney",
      description:
        "Welcome to Sydney! Go through the arrival gate to meet your private driver and stay in one of the most beautiful cities in the world. Enjoy the stunning Sydney harbour views, beaches, shopping, dining and nightlife.",
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
            "The iconic Sydney Opera House is situated at Bennelong Point on Sydney Harbour. The multi-venue performing arts centre was designed by Jorn Utzon. Today, the Sydney Opera House hosts more than 1,500 performances annually and is regarded as the leading tourist attraction in Australia.",
          affiliateLink: "https://geni.us/SydneyOperaHouse",
        },
        {
          name: "The Rocks",
          type: "Optional",
          description:
            "The Rocks provides an opportunity to experience an environment where buildings and public places of the eighteenth, nineteenth and early twentieth century still remain. Stories from the past, such as the life of convict households, publicans' expansion plans, and the changing alignment of the waterfront, can be read from archaeological evidence and the very fabric of the buildings themselves.",
          affiliateLink: "https://geni.us/TheRocksWalkingTour",
        },
        {
          name: "Sydney",
          type: "Information",
          description:
            "Sydney is the largest city in Australia, known for its stunning harbour, golden beaches, world-class dining, and vibrant nightlife. A perfect starting point for any Australian adventure.",
        },
      ],
    },
    {
      day: 2,
      title: "Ultimate Sydney City Tour",
      location: "Sydney",
      description:
        "Be collected in the morning by a local guide for the Ultimate Sydney City tour. Go sailing in Sydney harbour, visit the stunning Botanical Gardens and see fine examples of Australia's historical buildings. Walk along the harbour for magnificent views of the Sydney Harbour Bridge and Sydney Opera House.",
      accommodation: {
        name: "The Grace Sydney",
        description:
          "The Grace Hotel is conveniently located in the centre of Sydney's CBD, on the corner of King and York streets.",
        affiliateLink: "https://geni.us/TheGraceSydney",
      },
      activities: [
        {
          name: "The Ultimate Sydney Tour",
          type: "Included",
          description:
            "This unique day is the ultimate way to experience the beauty of Sydney. Begin the day touring the streets of Sydney with your own private guide and vehicle. Enjoy lunch overlooking the harbour and then finish with a private 2 hour sail on a 40ft Beneteau Yacht on Sydney Harbour.",
          affiliateLink: "https://geni.us/AusLuxTours",
        },
        {
          name: "BridgeClimb Sydney",
          type: "Optional",
          description:
            "Opened in 1932, the Sydney Harbour Bridge is a world renowned symbol of Australia. With a BridgeClimb Sydney Leader as guide, visitors can ascend the arches of the bridge step by step and enjoy the iconic views of Sydney. Throughout the climb, the Climb Leader will entertain visitors with stories about the history of the bridge. Allow 3.5 hours.",
          affiliateLink: "https://geni.us/SydneyBridgeClimb",
        },
      ],
    },
    {
      day: 3,
      title: "Fly to Tropical Port Douglas",
      location: "Port Douglas",
      description:
        "After drop-off at Sydney Airport, take a direct domestic flight to Cairns (3 hours, 15 mins). From Cairns, be transferred to Port Douglas. Stay in the tropical holiday town of Port Douglas.",
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
            "Nestled in the picturesque Wangetti Valley, in the heart of the Wet Tropics World Heritage Area. See crocodiles in a natural Melaleuca Wetland Lagoon on a boat cruise, find Cassowaries in rare riverine rainforest, kangaroos and emus in woodland, and iconic marsupials like koalas and wombats.",
          affiliateLink: "https://geni.us/HartleysCrocodilePark",
        },
        {
          name: "Tjapukai Aboriginal Cultural Park",
          type: "Optional",
          description:
            "Australia's most accessible venue to experience authentic Aboriginal and Torres Strait Islander culture dating back over 40,000 years. Located in Cairns, Tjapukai has been sharing the culture and traditions of the local Djabugay people, providing performances, dance, food and arts.",
          affiliateLink: "https://geni.us/WalkaboutCultural",
        },
        {
          name: "Wildlife Habitat",
          type: "Recommended",
          description:
            "An open and interactive environment where visitors and animals mix freely across four environments: Savannah, Wetlands, Rainforest and Grasslands. Hand-feed kangaroos and wallabies, observe cassowaries, and cuddle a Koala!",
          affiliateLink: "https://geni.us/WildlifeHabitatPD",
        },
      ],
    },
    {
      day: 4,
      title: "Great Barrier Reef Sailing Adventure",
      location: "Port Douglas",
      description:
        "The Great Barrier Reef is a kaleidoscope of colourful marine life. Sail off in the luxurious catamaran, a dedicated snorkel-only vessel. Swim and snorkel in the playground of green turtles and parrot fish. Explore the tranquil waters and enjoy a seafood gourmet lunch on the Aquarius. Join an informal island tour walk.",
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
            "Sailaway VII is a custom built sailing catamaran, sailing daily to the Great Barrier Reef. An Advanced Eco Tourism Operator and Climate Action Leader, Sailaway offers an exciting full day Outer Reef Sailing Adventure to Mackay and Undine Coral Cays. Enjoy guided snorkelling, seafood buffet lunch, and personalised service with a small group.",
          affiliateLink: "https://geni.us/OuterReefSnorkelDive",
        },
      ],
    },
    {
      day: 5,
      title: "Daintree Rainforest & Cape Tribulation",
      location: "Port Douglas",
      description:
        "Travel with a private guide toward the World Heritage listed Daintree National Park. Take a cruise on the mirrored waters of the Daintree River. Glide close to riverbanks and under the overhead canopy of the rainforest. Seek out the vivid Ulysses Butterfly, Kingfishers and other wildlife. Get your camera ready for those magnificent crocodiles!",
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
            "Travel through rich farming areas towards the World Heritage listed Daintree National Park. Enjoy a Daintree River cruise seeking out wildlife and crocodiles, a guided rainforest walk through the Wet Tropics World Heritage rainforest, and visit Cape Tribulation Beach. Includes hotel pick-up and drop-off, private guide, morning tea, 2-course lunch with a glass of wine or beer. Allow 9 hours.",
          affiliateLink: "https://geni.us/DaintreeWanderer",
        },
      ],
    },
    {
      day: 6,
      title: "Fly to Uluru (Ayers Rock)",
      location: "Yulara",
      description:
        "After transfer back to Cairns airport, take a domestic flight to Ayers Rock (either direct or via Alice Springs). Experience the real outback of Australia where the skyscrapers are made of rock and the night sky is spectacular. The Outback is also home to a large population of unique animals, birds and reptiles.",
      accommodation: {
        name: "Voyages Sails in the Desert Hotel",
        description:
          "Named after the soaring white sails that crown its roof, this is Voyages Ayers Rock Resort's premium hotel. The interior decor focuses on Aboriginal heritage and culture, with a gallery in the lobby and significant artworks throughout. Features the acclaimed Mulgara Gallery and award-winning Kuniya Restaurant.",
        affiliateLink: "https://geni.us/SailsDesertAyers",
      },
      activities: [
        {
          name: "Sounds of Silence Dinner",
          type: "Optional",
          description:
            "The best of the Red Centre distilled into four magical hours. An evening of dining under the sparkling outback sky. Begins with canapes and chilled sparkling wine on a viewing platform overlooking the Uluru-Kata Tjuta National Park. As darkness falls, listen to a didgeridoo and enjoy a bush tucker inspired buffet with quality Australian wine and beer, followed by a star talk decoding the southern night sky.",
        },
      ],
    },
    {
      day: 7,
      title: "Uluru & Kata Tjuta National Park",
      location: "Yulara",
      description:
        "With a private guide, begin the new day with an inspiring 4WD Desert Awakenings tour and be captivated by the Bush Yarns at the Circle of Sand. Tonight, relax under a star-studded Uluru sky.",
      accommodation: {
        name: "Voyages Sails in the Desert Hotel",
        description:
          "Named after the soaring white sails that crown its roof, this is Voyages Ayers Rock Resort's premium hotel.",
        affiliateLink: "https://geni.us/SailsDesertAyers",
      },
      activities: [
        {
          name: "Uluru-Kata Tjuta National Park",
          type: "Included",
          description:
            "Owned by the Anangu Aboriginal people, the park is home to the World Heritage listed Uluru — a searing sandstone monolith standing 348 metres high. Visit the Cultural Centre to hear the stories, see the art, and chat to Anangu guides who will escort you around Uluru base, Kantju Gorge (with Anangu rock art) and the Mutitjulu waterhole.",
          affiliateLink: "https://geni.us/SeitUluruBase",
        },
        {
          name: "Ayers Rock Helicopters",
          type: "Optional",
          description:
            "Ayers Rock Helicopters 15 Min Rock Blast is a thrilling ride allowing visitors to blast off to Uluru while taking in the stunning surroundings. The pilots have extensive knowledge about the area and also act as informative tour guides.",
          affiliateLink: "https://geni.us/UluruHelicopter",
        },
      ],
    },
    {
      day: 8,
      title: "Fly to Melbourne",
      location: "Melbourne",
      description:
        "Take a midday flight to Melbourne, Australia's second largest city renowned for its 19th century buildings and tree-lined boulevards. At the centre of Melbourne's cultural scene you will find world-class restaurants, galleries, and shopping.",
      accommodation: {
        name: "QT Melbourne",
        description:
          "Offering five-star accommodation in the heart of Melbourne. In-room amenities include TVs with free movies, free Wi-Fi and tea/coffee-making facilities. Guests can delight their palates at various on-site dining options. Additional hotel amenities include bars and a gym.",
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
            "Since opening its doors in 1989, Flinders Lane Gallery has gained a reputation for actively supporting emerging, mid-career and indigenous Australian artists. Features works of painterly abstraction, high figuration and sculptural formalism.",
        },
      ],
    },
    {
      day: 9,
      title: "Phillip Island Penguins & Wildlife",
      location: "Melbourne",
      description:
        "Melbourne is known for its contemporary and sophisticated style. Taste your way around Melbourne's top 'foodie' destinations and sample locally produced delicacies. In the afternoon/evening meet your private guide for an Australian wildlife tour at the Penguin Parade. Join a Wild Ocean Eco-Boat Tour, visit the Koala Conservation Centre, Churchill Island Heritage Farm and the Nobbies Centre.",
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
            "The famous Penguin Parade will lure you to Phillip Island but a day out with Oceania Tours will allow you to discover so much more, including Churchill Island, the Koala Conservation Centre, Nobbies and the seaside town of Cowes. Watch the little penguins come ashore decked out in their tuxedos. Small group tour with expert guide. Allow 8-9 hours. Hotel pick-up and drop-off included.",
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
        "Transfer to Melbourne airport and take a domestic flight to Sydney or any other destination in Australia. Remember, every part of this itinerary can be amended to your personal requirements. We can add, delete or amend. Just contact us and it will be done!",
      activities: [],
    },
  ],
};
