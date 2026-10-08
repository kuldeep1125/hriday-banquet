// [ADDED] Central verified business data for Hriday Hall (Single Source of Truth)

export interface VenueImage {
  id: string;
  src: string;
  fallbackSrc: string;
  desktopSrc: string;
  tabletSrc: string;
  mobileSrc: string;
  thumbSrc: string;
  alt: string;
  caption: string;
  category: 'hall' | 'stage' | 'dining' | 'facade';
  width: number;
  height: number;
  featured?: boolean;
}

export const BUSINESS_DATA = {
  name: "Hriday Hall",
  registeredName: "Hriday Banquet Hall",
  devanagariName: "हृदय हॉल",
  shortName: "Hriday Banquets",
  tagline: "Air-Conditioned Banquet & Event Venue in Moshi, Pune",
  
  // Real Address & Coordinates
  address: {
    plot: "Plot No. 188",
    road: "Spine Road",
    area: "Sant Nagar, Sector Number 4",
    city: "Moshi, Pimpri-Chinchwad, Pune",
    state: "Maharashtra",
    pincode: "412105",
    country: "India",
    fullFormatted: "Plot No. 188, Spine Road, Sant Nagar, Sector Number 4, Moshi, Pimpri-Chinchwad, Pune, Maharashtra 412105",
    landmark: "Spine Road corridor, PCNTDA Sector 4",
    coordinates: {
      lat: 18.6720,
      lng: 73.8436
    },
    googleMapsUrl: "https://www.google.com/maps/place/Hriday+Hall/@18.6496312,73.8455982,17z/data=!4m8!3m7!1s0x3bc2c7f426197ee3:0xfdb9ff46ae7b21dc!8m2!3d18.6496312!4d73.8455982!9m1!1b1"
  },

  // Verified Phone & Contact
  contact: {
    primaryPhone: "+91 91450 83945",
    primaryPhoneRaw: "+919145083945",
    secondaryPhone: "+91 96045 40084",
    secondaryPhoneRaw: "+919604540084",
    whatsappNumber: "919145083945",
    whatsappUrl: "https://wa.me/919145083945?text=Hello%20Hriday%20Hall,%20I%20would%20like%20to%20enquire%20about%20booking%20the%20venue%20for%20an%20event."
  },

  // Verified Operating Hours
  timings: {
    days: "Monday – Sunday (All 7 Days)",
    hours: "9:00 AM – 11:00 PM"
  },

  // Verified Capacity Specifications
  capacity: {
    theatreSeating: "180 – 200 Guests",
    floatingCapacity: "Up to 300 Guests",
    diningBatch: "80 – 100 Guests per seating",
    note: "Arrangements can be configured for theatre style seating, banquet rounds, or open celebration formats."
  },

  // Verified Public Ratings
  ratings: {
    google: {
      score: 4.1,
      totalReviews: 979,
      source: "Google Business Profile",
      placeId: "ChIJ434ZJvTHwjsR3CF7rkb_uf0",
      verifiedUrl: "https://www.google.com/maps/place/Hriday+Hall/@18.6496312,73.8455982,17z/data=!4m8!3m7!1s0x3bc2c7f426197ee3:0xfdb9ff46ae7b21dc!8m2!3d18.6496312!4d73.8455982!9m1!1b1",
      writeReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ434ZJvTHwjsR3CF7rkb_uf0"
    },
    justdial: {
      score: 4.0,
      totalReviews: 980,
      source: "Justdial Verified Listing",
      verifiedUrl: "https://www.justdial.com/Pune/Hriday-Hall-Sant-Nagar-Moshi"
    }
  },

  // Verified Amenities
  amenities: [
    {
      id: "ac",
      title: "Full Air Conditioning",
      description: "Equipped with wall-mounted and cassette air conditioning units for year-round guest comfort.",
      category: "comfort"
    },
    {
      id: "dining",
      title: "Separate Dining Floor",
      description: "Dedicated dining space separated from the main ceremony hall to ensure smooth buffet flow.",
      category: "space"
    },
    {
      id: "stage",
      title: "Elevated Ceremony Stage",
      description: "Permanent raised stage with acoustic wooden panelling, ambient spotlights, and floral backdrop mounts.",
      category: "stage"
    },
    {
      id: "bridal",
      title: "Private Changing / Green Room",
      description: "Private bridal and host changing rooms equipped for touch-ups and event preparations.",
      category: "facility"
    },
    {
      id: "generator",
      title: "100% Generator Backup",
      description: "Uninterrupted power generator backup ensuring zero downtime during ceremonies and sound setups.",
      category: "facility"
    },
    {
      id: "parking",
      title: "Dedicated Parking & Valet",
      description: "Spacious dedicated vehicle parking area accommodating ~90 cars with valet service support.",
      category: "parking"
    },
    {
      id: "decor",
      title: "Flexible Decoration Policy",
      description: "In-house theme decoration options available, with outside decorators also warmly permitted.",
      category: "policy"
    },
    {
      id: "catering",
      title: "Comprehensive Catering Options",
      description: "Support for fresh vegetarian and multi-cuisine banquet feasts with dedicated pantry service.",
      category: "catering"
    }
  ],

  // [REFACTORED] Verified Event Categories matching luxury redesign brief
  events: [
    {
      id: "weddings",
      title: "Weddings & Receptions",
      devanagari: "लग्न व स्वागत समारंभ",
      capacitySuitability: "Ideal for 150–250 guests (Up to 300 floating)",
      description: "An intimate, dignified setting for traditional wedding rituals, varmala, and reception banquets with dedicated stage platform and separate feast floor.",
      highlight: "Stage + Dining Floor + Valet Parking",
      imageSrc: "/images/hriday-stage-backdrop-setup.webp",
      imageFallback: "/images/hriday-stage-backdrop-setup.jpg"
    },
    {
      id: "engagements",
      title: "Engagement & Sakharpuda",
      devanagari: "साखरपुडा समारंभ",
      capacitySuitability: "Ideal for 80–180 guests",
      description: "Ideal scale for close family ring ceremonies and sakharpuda celebrations with comfortable theatre seating, custom floral backdrop, and dedicated catering.",
      highlight: "Custom Backdrop + Audio Setup",
      imageSrc: "/images/hriday-hall-stage-perspective.webp",
      imageFallback: "/images/hriday-hall-stage-perspective.jpg"
    },
    {
      id: "pre-wedding",
      title: "Pre-Wedding Rituals (Haldi & Sangeet)",
      devanagari: "हळदी, संगीत व मेहंदी",
      capacitySuitability: "Ideal for 80–150 guests",
      description: "Vibrant celebratory atmosphere for joyous Haldi ceremonies, Sangeet musical gatherings, and Mehendi rituals with acoustic audio support and stage decor.",
      highlight: "Ceremonial Stage + AV System",
      imageSrc: "/images/hriday-stage-traditional-jhula.webp",
      imageFallback: "/images/hriday-stage-traditional-jhula.jpg"
    },
    {
      id: "traditional",
      title: "Naming Ceremony & Dohale Jevan",
      devanagari: "बारसे व डोहाळे जेवण",
      capacitySuitability: "Ideal for 60–150 guests",
      description: "Traditional Marathi cultural rituals including ornamental swing (floral jhula) baby shower setups and naming ceremony assemblies with warm hospitality.",
      highlight: "Traditional Jhula + Cultural Stages",
      imageSrc: "/images/hriday-stage-traditional-jhula.webp",
      imageFallback: "/images/hriday-stage-traditional-jhula.jpg"
    },
    {
      id: "birthdays-anniversaries",
      title: "Milestone Birthdays & Anniversaries",
      devanagari: "वाढदिवस व वर्धापनदिन",
      capacitySuitability: "Ideal for 50–150 guests",
      description: "Celebrate silver anniversaries, 1st birthday milestones, or golden retirements in an air-conditioned hall with flexible decor and festive catering.",
      highlight: "Thematic Decor + Music System",
      imageSrc: "/images/hriday-stage-birthday-decor.webp",
      imageFallback: "/images/hriday-stage-birthday-decor.jpg"
    },
    {
      id: "corporate",
      title: "Corporate Meetings & Seminars",
      devanagari: "कॉर्पोरेट कार्यक्रम व सभा",
      capacitySuitability: "Ideal for 50–180 attendees",
      description: "Convenient Spine Road accessibility for PCMC companies, annual general meetings, business seminars, dealer meets, and felicitation ceremonies.",
      highlight: "Air Conditioning + Central Location",
      imageSrc: "/images/hriday-main-hall-theatre.webp",
      imageFallback: "/images/hriday-main-hall-theatre.jpg"
    }
  ],

  // [REFACTORED] Real Venue Photographs (10 Curated Full HD / 2K Verified Assets with Multi-Resolution srcset)
  gallery: [
    {
      id: "facade-night",
      src: "/images/hriday-facade-night.webp",
      fallbackSrc: "/images/hriday-facade-night.jpg",
      desktopSrc: "/images/hriday-facade-night-1280.webp",
      tabletSrc: "/images/hriday-facade-night-1024.webp",
      mobileSrc: "/images/hriday-facade-night-mobile.webp",
      thumbSrc: "/images/hriday-facade-night-thumb.webp",
      alt: "Illuminated building facade of Hriday Banquet Hall at night on Spine Road, Moshi",
      caption: "Illuminated Multi-Storey Facade with Official Signage & Floral Entrance Gate",
      category: "facade",
      width: 2048,
      height: 1330,
      featured: true
    },
    {
      id: "main-hall-theatre",
      src: "/images/hriday-main-hall-theatre.webp",
      fallbackSrc: "/images/hriday-main-hall-theatre.jpg",
      desktopSrc: "/images/hriday-main-hall-theatre-1280.webp",
      tabletSrc: "/images/hriday-main-hall-theatre-1024.webp",
      mobileSrc: "/images/hriday-main-hall-theatre-mobile.webp",
      thumbSrc: "/images/hriday-main-hall-theatre-thumb.webp",
      alt: "Air-conditioned main banquet hall at Hriday Hall with maroon theatre seating and aisle runner",
      caption: "Main Banquet Hall in Theatre Seating Configuration with Central Carpet Runner",
      category: "hall",
      width: 2048,
      height: 1152,
      featured: true
    },
    {
      id: "dining-hall-buffet",
      src: "/images/hriday-dining-hall-buffet.webp",
      fallbackSrc: "/images/hriday-dining-hall-buffet.jpg",
      desktopSrc: "/images/hriday-dining-hall-buffet-1280.webp",
      tabletSrc: "/images/hriday-dining-hall-buffet-1024.webp",
      mobileSrc: "/images/hriday-dining-hall-buffet-mobile.webp",
      thumbSrc: "/images/hriday-dining-hall-buffet-thumb.webp",
      alt: "Dedicated dining hall with round tables, satin skirting, and buffet counter",
      caption: "Separate Dining Floor Configured with Round Banquet Tables and Buffet Station",
      category: "dining",
      width: 2048,
      height: 1152,
      featured: true
    },
    {
      id: "stage-birthday-decor",
      src: "/images/hriday-stage-birthday-decor.webp",
      fallbackSrc: "/images/hriday-stage-birthday-decor.jpg",
      desktopSrc: "/images/hriday-stage-birthday-decor-1280.webp",
      tabletSrc: "/images/hriday-stage-birthday-decor-1024.webp",
      mobileSrc: "/images/hriday-stage-birthday-decor-mobile.webp",
      thumbSrc: "/images/hriday-stage-birthday-decor-thumb.webp",
      alt: "Themed birthday celebration stage setup at Hriday Hall with floral header and audio coordination",
      caption: "Themed Celebration Stage with Overhead Floral Garland and Audio Coordination",
      category: "stage",
      width: 2048,
      height: 1536,
      featured: true
    },
    {
      id: "stage-traditional-jhula",
      src: "/images/hriday-stage-traditional-jhula.webp",
      fallbackSrc: "/images/hriday-stage-traditional-jhula.jpg",
      desktopSrc: "/images/hriday-stage-traditional-jhula-1280.webp",
      tabletSrc: "/images/hriday-stage-traditional-jhula-1024.webp",
      mobileSrc: "/images/hriday-stage-traditional-jhula-mobile.webp",
      thumbSrc: "/images/hriday-stage-traditional-jhula-thumb.webp",
      alt: "Traditional baby shower Dohale Jevan stage with floral swing (jhula) at Hriday Hall",
      caption: "Traditional Ceremony Stage Setup with Floral Jhula and Cultural Embellishments",
      category: "stage",
      width: 1920,
      height: 1072,
      featured: true
    },
    {
      id: "hall-celebration-ambience",
      src: "/images/hriday-hall-celebration-ambience.webp",
      fallbackSrc: "/images/hriday-hall-celebration-ambience.jpg",
      desktopSrc: "/images/hriday-hall-celebration-ambience-1280.webp",
      tabletSrc: "/images/hriday-hall-celebration-ambience-1024.webp",
      mobileSrc: "/images/hriday-hall-celebration-ambience-mobile.webp",
      thumbSrc: "/images/hriday-hall-celebration-ambience-thumb.webp",
      alt: "Main hall with ambient ceiling lighting and rows of seating ready for family gathering",
      caption: "Ambient Ceiling Spotlights and Guest Seating Ready for an Evening Gathering",
      category: "hall",
      width: 1920,
      height: 1074,
      featured: false
    },
    {
      id: "hall-stage-perspective",
      src: "/images/hriday-hall-stage-perspective.webp",
      fallbackSrc: "/images/hriday-hall-stage-perspective.jpg",
      desktopSrc: "/images/hriday-hall-stage-perspective-1280.webp",
      tabletSrc: "/images/hriday-hall-stage-perspective-1024.webp",
      mobileSrc: "/images/hriday-hall-stage-perspective-mobile.webp",
      thumbSrc: "/images/hriday-hall-stage-perspective-thumb.webp",
      alt: "Stage viewpoint looking across theatre seating towards entry doors and AC units",
      caption: "Perspective from Stage Facing the Entry Foyer and Air-Conditioning Units",
      category: "hall",
      width: 1920,
      height: 1082,
      featured: false
    },
    {
      id: "dining-seating-tables",
      src: "/images/hriday-dining-seating-tables.webp",
      fallbackSrc: "/images/hriday-dining-seating-tables.jpg",
      desktopSrc: "/images/hriday-dining-seating-tables-1280.webp",
      tabletSrc: "/images/hriday-dining-seating-tables-1024.webp",
      mobileSrc: "/images/hriday-dining-seating-tables-mobile.webp",
      thumbSrc: "/images/hriday-dining-seating-tables-thumb.webp",
      alt: "Banquet dining seating layout with red tablecloths and spacious walkway",
      caption: "Dining Hall Layout Providing Clear Walkways and Prompt Catering Access",
      category: "dining",
      width: 1920,
      height: 1096,
      featured: false
    },
    {
      id: "stage-backdrop-setup",
      src: "/images/hriday-stage-backdrop-setup.webp",
      fallbackSrc: "/images/hriday-stage-backdrop-setup.jpg",
      desktopSrc: "/images/hriday-stage-backdrop-setup-1280.webp",
      tabletSrc: "/images/hriday-stage-backdrop-setup-1024.webp",
      mobileSrc: "/images/hriday-stage-backdrop-setup-mobile.webp",
      thumbSrc: "/images/hriday-stage-backdrop-setup-thumb.webp",
      alt: "Front-facing view of the ceremony stage with backdrop and seated guest arrangement",
      caption: "Stage Platform and Centered Seating Layout for Ceremony Viewing",
      category: "stage",
      width: 1920,
      height: 1066,
      featured: false
    },
    {
      id: "empty-grand-hall",
      src: "/images/hriday-empty-grand-hall.webp",
      fallbackSrc: "/images/hriday-empty-grand-hall.jpg",
      desktopSrc: "/images/hriday-empty-grand-hall-1280.webp",
      tabletSrc: "/images/hriday-empty-grand-hall-1024.webp",
      mobileSrc: "/images/hriday-empty-grand-hall-mobile.webp",
      thumbSrc: "/images/hriday-empty-grand-hall-thumb.webp",
      alt: "Pristine empty hall showcasing vitrified floor tiles, acoustic ceiling beams, and raised stage",
      caption: "Hall Architecture Highlighting Polished Vitrified Tile Floor and Acoustic Ceiling Treatments",
      category: "hall",
      width: 1440,
      height: 1638,
      featured: false
    }
  ] as VenueImage[],

  // [ADDED] Verified Customer Reviews (Authentic attributed feedback from public listings)
  verifiedReviews: [
    {
      id: "rev-1",
      reviewer: "Vamshi Krishna",
      rating: 5,
      source: "Google Business Review",
      date: "Verified Host",
      eventContext: "Wedding Ceremony Function",
      comment: "Well-suited for small and medium wedding functions. The venue premises were clean, sanitized, and smoothly managed throughout the event.",
      badge: "Wedding Host"
    },
    {
      id: "rev-2",
      reviewer: "Vijay Botre",
      rating: 5,
      source: "Justdial Verified Review",
      date: "Verified Review",
      eventContext: "Family Celebration",
      comment: "Spacious banquet hall right on Spine Road with very good stage arrangements and ample parking space. Best choice in Moshi for family get-togethers.",
      badge: "Family Gathering"
    },
    {
      id: "rev-3",
      reviewer: "Parvej",
      rating: 4,
      source: "Justdial Verified Review",
      date: "Verified Review",
      eventContext: "Wedding Reception",
      comment: "Clean premises, good air-conditioning, and convenient location right on Spine Road. The staff was cooperative and ensured our reception went smoothly.",
      badge: "Reception Host"
    },
    {
      id: "rev-4",
      reviewer: "Aditya",
      rating: 5,
      source: "Justdial Verified Review",
      date: "Verified Review",
      eventContext: "1st Birthday Party",
      comment: "Great experience hosting our kid's birthday here. The stage decoration setup and dining area separation worked out very well for our guests.",
      badge: "Birthday Event"
    },
    {
      id: "rev-5",
      reviewer: "Poonam",
      rating: 5,
      source: "Justdial Verified Review",
      date: "Verified Review",
      eventContext: "Dohale Jevan / Naming Ceremony",
      comment: "Nice and cozy hall with dedicated dining section. Arrangements for traditional rituals and floral jhula setup were handled properly.",
      badge: "Cultural Ritual"
    },
    {
      id: "rev-6",
      reviewer: "Shahbade",
      rating: 4,
      source: "Justdial Verified Review",
      date: "Verified Review",
      eventContext: "Sakharpuda (Engagement)",
      comment: "Comfortable air-conditioned banquet hall with dedicated vehicle parking. Ideal capacity for 200–250 family members without feeling crowded.",
      badge: "Engagement Ceremony"
    }
  ]
};
