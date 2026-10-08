// [ADDED] SpacesSection showcasing the distinct verified areas of Hriday Hall
import React, { useState } from 'react';
import { Layers, Check } from 'lucide-react';

export const SpacesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hall' | 'stage' | 'dining' | 'facilities'>('hall');

  const spaces = {
    hall: {
      name: "The Air-Conditioned Main Hall",
      tagline: "Primary Ceremony & Assembly Floor",
      capacity: "180 – 200 Seated · 300 Floating",
      specs: [
        "Fully air-conditioned with wall-mounted & ceiling cassette cooling units",
        "Vitrified floor tiling with mirror polish finish",
        "False ceiling design with recessed warm LED spotlights and ceiling fans",
        "Central carpet runner down the primary aisle for bridal & guest entries",
        "High-density banquet chairs with protective maroon slipcovers"
      ],
      image: "/images/hriday-main-hall-theatre.webp",
      desktopImage: "/images/hriday-main-hall-theatre-1280.webp",
      tabletImage: "/images/hriday-main-hall-theatre-1024.webp",
      mobileImage: "/images/hriday-main-hall-theatre-mobile.webp",
      fallbackImage: "/images/hriday-main-hall-theatre.jpg",
      alt: "Theatre seating in the main hall of Hriday Hall Moshi",
      width: 2048,
      height: 1152
    },
    stage: {
      name: "The Raised Celebration Stage",
      tagline: "Focal Platform for Rituals & Felicitations",
      capacity: "Generous stage platform for up to 15–20 family members",
      specs: [
        "Permanent elevated wooden platform with decorative valance border",
        "Acoustic rear panelling designed to support floral backdrops and frames",
        "Overhead directional stage spotlights for photography and videography",
        "Dedicated sound & AV operator console adjacent to stage",
        "Accommodates traditional Mandap, floral jhula (swing), or birthday backdrops"
      ],
      image: "/images/hriday-stage-traditional-jhula.webp",
      desktopImage: "/images/hriday-stage-traditional-jhula-1280.webp",
      tabletImage: "/images/hriday-stage-traditional-jhula-1024.webp",
      mobileImage: "/images/hriday-stage-traditional-jhula-mobile.webp",
      fallbackImage: "/images/hriday-stage-traditional-jhula.jpg",
      alt: "Traditional floral jhula ceremony stage setup at Hriday Hall",
      width: 1920,
      height: 1072
    },
    dining: {
      name: "The Dedicated Dining Floor",
      tagline: "Independent Dining Space for Seamless Feasts",
      capacity: "80 – 100 Guests per Dining Rotation",
      specs: [
        "Physically zoned away from the ceremony hall to prevent crowd congestion",
        "Configurable with round tables or linear banquet dining benches",
        "Illuminated food counter with warm under-counter lighting",
        "Dedicated service passage connecting directly to the kitchen pantry",
        "Ventilated, hygienic dining environment with dedicated hand-wash areas"
      ],
      image: "/images/hriday-dining-hall-buffet.webp",
      desktopImage: "/images/hriday-dining-hall-buffet-1280.webp",
      tabletImage: "/images/hriday-dining-hall-buffet-1024.webp",
      mobileImage: "/images/hriday-dining-hall-buffet-mobile.webp",
      fallbackImage: "/images/hriday-dining-hall-buffet.jpg",
      alt: "Dedicated dining hall with round tables and buffet counter at Hriday Hall",
      width: 2048,
      height: 1152
    },
    facilities: {
      name: "Essential Operational Facilities",
      tagline: "Infrastructure for Stress-Free Celebrations",
      capacity: "Supporting all events up to 300 guests",
      specs: [
        "Private Bridal / Host Dressing Room with mirrors and preparation seating",
        "Heavy-duty generator for 100% uninterrupted electricity during functions",
        "Designated vehicle parking area with valet attendant support for ~90 cars",
        "Private entrance gate with festive lighting and floral arch mounts",
        "Prompt on-floor support team in official venue uniform"
      ],
      image: "/images/hriday-facade-night.webp",
      desktopImage: "/images/hriday-facade-night-1280.webp",
      tabletImage: "/images/hriday-facade-night-1024.webp",
      mobileImage: "/images/hriday-facade-night-mobile.webp",
      fallbackImage: "/images/hriday-facade-night.jpg",
      alt: "Hriday Banquet Hall illuminated night entrance and parking",
      width: 2048,
      height: 1330
    }
  };

  const currentSpace = spaces[activeTab];

  return (
    <section id="spaces" className="py-28 sm:py-36 bg-brand-surface relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
              <Layers className="w-3 h-3 text-brand-gold" />
              <span>Architectural Layout & Spatial Zoning</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
              Spaces Designed for Dignified Celebrations.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Every square foot of Hriday Hall maintains discrete circulation between ceremonial rituals, 
            dining hospitality, and guest relaxation.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-2.5 pb-6 border-b border-brand-border/60 mb-10">
          <button
            onClick={() => setActiveTab('hall')}
            className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'hall'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            Main Banquet Hall
          </button>

          <button
            onClick={() => setActiveTab('stage')}
            className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'stage'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            Ceremony Stage
          </button>

          <button
            onClick={() => setActiveTab('dining')}
            className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'dining'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            Dining & Buffet Floor
          </button>

          <button
            onClick={() => setActiveTab('facilities')}
            className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'facilities'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            Parking & Amenities
          </button>
        </div>

        {/* Space Showcase Card */}
        <div className="bg-brand-card rounded-2xl border-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-luxury-card">
          
          {/* Space Image */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] overflow-hidden bg-black">
            <picture>
              <source media="(max-width: 640px)" srcSet={currentSpace.mobileImage} type="image/webp" />
              <source media="(max-width: 1024px)" srcSet={currentSpace.tabletImage} type="image/webp" />
              <source media="(max-width: 1280px)" srcSet={currentSpace.desktopImage} type="image/webp" />
              <source srcSet={currentSpace.image} type="image/webp" />
              <img
                src={currentSpace.fallbackImage}
                alt={currentSpace.alt}
                width={currentSpace.width}
                height={currentSpace.height}
                className="w-full h-full object-cover object-center transition-all duration-700 filter brightness-[0.92]"
                key={currentSpace.image}
              />
            </picture>
            <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-gold/30 text-[10px] font-semibold text-brand-gold uppercase tracking-luxury shadow-md">
              {currentSpace.capacity}
            </div>
          </div>

          {/* Space Details & Specifications */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-brand-surface/50">
            <div>
              <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block">
                {currentSpace.tagline}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1.5 font-normal">
                {currentSpace.name}
              </h3>

              <div className="mt-8 space-y-3.5">
                {currentSpace.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      {spec}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-brand-border/60 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-luxury text-neutral-400">Total Scale</p>
                <p className="text-sm font-medium text-white">Up to 300 Guests</p>
              </div>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold/15 hover:bg-brand-gold text-brand-gold hover:text-brand-dark border border-brand-gold/40 text-xs uppercase tracking-luxury font-bold transition-all duration-300 hover:shadow-gold-subtle"
              >
                <span>Check Availability</span>
                <span className="text-sm">→</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
