// [FIXED] Removed unused Sparkles import
import React, { useState } from 'react';
import { Layers, Check, ArrowRight, Users } from 'lucide-react';

export const SpacesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hall' | 'stage' | 'dining' | 'facilities'>('hall');

  const spaces = {
    hall: {
      name: "The Air-Conditioned Main Hall",
      tagline: "Primary Ceremony & Assembly Floor",
      capacity: "180 – 200 Seated · 300 Floating",
      capacityBadge: "180–200 Seated",
      summary: "A grand, naturally acoustic assembly hall tailored for holy rituals, wedding vows, and high-attendance celebrations.",
      specs: [
        "Full air-conditioning with wall & cassette cooling units",
        "Polished vitrified floor tiling with mirror reflection",
        "False ceiling design with recessed warm LED illumination",
        "Crimson aisle runner carpet for bridal & VIP entries",
        "High-density banquet seating with maroon slipcovers"
      ],
      pills: ["Full Air Conditioning", "Aisle Carpet", "False Ceiling LEDs", "Acoustic Treated"],
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
      name: "The Raised Ceremony Stage",
      tagline: "Focal Platform for Rituals & Felicitations",
      capacity: "15–20 Family Members on Stage",
      capacityBadge: "Elevated Platform",
      summary: "Permanent elevated wooden platform equipped with directional spotlighting and structural mounts for floral mandap or backdrops.",
      specs: [
        "Elevated wooden platform with decorated border skirt",
        "Acoustic rear panelling designed for floral frames & backdrops",
        "Overhead directional stage spotlights for photography & 4K video",
        "Dedicated sound & AV operator console adjacent to stage",
        "Accommodates traditional Mandap, floral jhula (swing), or birthday setups"
      ],
      pills: ["Elevated Platform", "Stage Spotlights", "Acoustic Panelling", "Mandap Ready"],
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
      capacity: "80 – 100 Guests per Dining Batch",
      capacityBadge: "80–100 per Batch",
      summary: "Separated from the ceremony floor to guarantee dignified uninterrupted rituals while catering banquets proceed concurrently.",
      specs: [
        "Physically segregated floor plan to avoid aroma and crowd mixing",
        "Configurable with round banquet tables or linear traditional pangat",
        "Illuminated buffet counter with warm under-counter lighting",
        "Direct service corridor connecting to the kitchen pantry",
        "Hygienic hand-wash stations and ventilated dining ambiance"
      ],
      pills: ["Separate Floor", "Buffet Counters", "Round Tables", "Hygienic Wash"],
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
      name: "Parking & Arrival Compound",
      tagline: "Seamless Arrival on Spine Road",
      capacity: "Up to ~90 Vehicles & Two-Wheelers",
      capacityBadge: "~90 Vehicle Parking",
      summary: "Spacious on-site parking compound with wide gate entry, illuminated night facade, and valet attendant coordination.",
      specs: [
        "Designated vehicle parking compound directly off Spine Road",
        "Valet attendant coordination to manage incoming vehicular flow",
        "Multi-storey illuminated facade with official Hriday Hall signage",
        "Private Bridal / Host changing room for event preparation",
        "Heavy-duty generator for 100% uninterrupted electricity backup"
      ],
      pills: ["~90 Parking", "Valet Support", "Spine Road Gate", "Generator Backup"],
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/25 bg-brand-card text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
              <Layers className="w-3 h-3 text-brand-gold" />
              <span>Architectural Layout & Spatial Zoning</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
              Spaces Designed for Dignified Celebrations.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Every square foot of Hriday Hall maintains discrete circulation between ceremonial rituals, 
            dining hospitality, and guest arrival.
          </p>
        </div>

        {/* Tab Buttons (Responsive compact sizing on mobile) */}
        <div className="flex flex-wrap gap-2 sm:gap-2.5 pb-5 sm:pb-6 border-b border-brand-border/60 mb-8 sm:mb-10">
          <button
            onClick={() => setActiveTab('hall')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'hall'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            1. Main Banquet Hall
          </button>

          <button
            onClick={() => setActiveTab('stage')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'stage'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            2. Ceremony Stage
          </button>

          <button
            onClick={() => setActiveTab('dining')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'dining'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            3. Dining & Buffet Hall
          </button>

          <button
            onClick={() => setActiveTab('facilities')}
            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
              activeTab === 'facilities'
                ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40'
            }`}
          >
            4. Parking & Arrival
          </button>
        </div>

        {/* Space Showcase Card */}
        <div className="bg-brand-card rounded-2xl border-luxury overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-luxury-card group">
          
          {/* Space Image with Subtle Zoom on Hover */}
          <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[480px] overflow-hidden bg-black">
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
                className="w-full h-full object-cover object-center group-hover:scale-104 transition-all duration-700 filter brightness-[0.94] group-hover:brightness-100"
                key={currentSpace.image}
              />
            </picture>

            {/* Clear Capacity Badge */}
            <div className="absolute top-4 left-4 bg-brand-dark/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-brand-gold/40 text-[10px] font-semibold text-brand-gold uppercase tracking-luxury shadow-lg flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />
              <span>{currentSpace.capacityBadge}</span>
            </div>

            {/* Feature Pills Overlay Bottom */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {currentSpace.pills.map((pill, idx) => (
                <span
                  key={idx}
                  className="bg-black/75 backdrop-blur-sm text-[10px] text-brand-ivory px-2.5 py-1 rounded-md border border-white/10 font-light"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          {/* Space Details & Specifications */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-brand-surface/70">
            <div>
              <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block">
                {currentSpace.tagline}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white mt-1.5 font-normal">
                {currentSpace.name}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light mt-3 leading-relaxed">
                {currentSpace.summary}
              </p>

              {/* Specs List */}
              <div className="mt-6 space-y-3">
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

            {/* Micro-CTA for Enquiring for This Space */}
            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-luxury text-neutral-400">Total Scale</p>
                <p className="text-xs sm:text-sm font-medium text-white">{currentSpace.capacity}</p>
              </div>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gold/15 hover:bg-brand-gold text-brand-gold hover:text-brand-dark border border-brand-gold/40 text-xs uppercase tracking-luxury font-bold transition-all duration-300 hover:shadow-gold-subtle"
              >
                <span>Enquire for This Space</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
