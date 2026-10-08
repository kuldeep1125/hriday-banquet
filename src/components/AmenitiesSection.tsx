// [REFACTORED] AmenitiesSection - 4 hero differentiator cards and clean 4-column compact secondary amenities grid
import React from 'react';
import { 
  Zap, 
  UtensilsCrossed, 
  Car, 
  Wind, 
  ShieldCheck, 
  Building2, 
  Sparkles, 
  Layers, 
  Volume2, 
  Palette, 
  Coffee, 
  CheckCircle2, 
  HelpCircle,
  Users
} from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  // 4 Hero Differentiator Cards
  const heroDifferentiators = [
    {
      title: "100% Generator Backup",
      tagline: "Zero Ceremony Interruption",
      explanation: "Heavy-duty commercial silent generator engages immediately during power fluctuations. Your sacred varmala, mantras, audio system, and lighting continue without a moment of hesitation.",
      badge: "100% Guaranteed",
      icon: <Zap className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Separate Dining Floor",
      tagline: "Independent Dining Zoning",
      explanation: "Unlike single-room venues where buffet counters crowd ceremony seating, Hriday Hall provides a dedicated dining level so family feasts never disrupt solemn rituals.",
      badge: "Dedicated Level",
      icon: <UtensilsCrossed className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Parking for ~90 Vehicles",
      tagline: "Spacious On-Site Compound",
      explanation: "Ample designated vehicle parking compound directly accessible from Spine Road, supported by valet attendants. Eliminates the stress of roadside parking for elderly guests.",
      badge: "Spine Road Access",
      icon: <Car className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Full Air Conditioning",
      tagline: "Comfort in Every Season",
      explanation: "High-capacity wall and cassette cooling units maintain refreshing, climate-controlled comfort across the entire main hall for up to 300 assembly guests.",
      badge: "Year-Round Comfort",
      icon: <Wind className="w-6 h-6 text-brand-gold" />
    }
  ];

  // Secondary Amenities Grid (8 Items in 4 Columns)
  const secondaryAmenities = [
    {
      title: "Private Host Green Room",
      description: "Private bridal and host changing rooms equipped with mirrors and dressing seating for touch-ups.",
      icon: <Building2 className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "Elevated Ceremony Stage",
      description: "Permanent wooden stage platform designed to support traditional Mandaps, floral jhulas, or backdrops.",
      icon: <Sparkles className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "Vitrified Tile Flooring",
      description: "Immaculate mirror-polished vitrified flooring throughout both the main hall and dining floors.",
      icon: <Layers className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "Acoustic Audio Support",
      description: "Sound and AV operator console adjacent to stage for crystal-clear priest mantras and musical accompaniment.",
      icon: <Volume2 className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "Flexible Decor Policy",
      description: "In-house theme decoration setups available, with outside decorator arrangements warmly accommodated.",
      icon: <Palette className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "Vegetarian Feast Support",
      description: "Equipped kitchen pantry and service passages for pure vegetarian catering and hygienic buffet flow.",
      icon: <Coffee className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "Crimson Aisle Runner",
      description: "Dedicated ceremonial entry carpet runner extending from the main doors directly to the raised stage.",
      icon: <CheckCircle2 className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "On-Floor Service Team",
      description: "Attentive venue coordinators in official uniform assisting with lighting, sanitization, and guest needs.",
      icon: <Users className="w-5 h-5 text-brand-gold" />
    }
  ];

  return (
    <section id="amenities" className="py-28 sm:py-36 bg-brand-dark relative border-t border-brand-border/60 bg-ambient-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/25 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
            <ShieldCheck className="w-3 h-3 text-brand-gold" />
            <span>Operational Infrastructure & Hospitality</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
            Engineered for Flawless, Stress-Free Celebrations.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Every operational feature at Hriday Hall is built to eliminate host anxiety. We provide 
            transparent, verified infrastructure that ensures complete comfort for your family and guests from arrival to departure.
          </p>
        </div>

        {/* 4 Hero Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {heroDifferentiators.map((diff) => (
            <div
              key={diff.title}
              className="bg-brand-surface rounded-2xl border-luxury p-7 flex flex-col justify-between shadow-luxury-card relative overflow-hidden group transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-gold/5 rounded-bl-full pointer-events-none group-hover:bg-brand-gold/10 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-card flex items-center justify-center border border-brand-gold/30 shadow-inner">
                    {diff.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-luxury text-brand-gold bg-black/60 px-3 py-1 rounded-full border border-brand-gold/30">
                    {diff.badge}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-luxury text-neutral-400 font-semibold block">
                  {diff.tagline}
                </span>
                <h3 className="font-serif text-xl text-white font-normal mt-1.5">
                  {diff.title}
                </h3>

                <p className="mt-3 text-xs text-neutral-300 font-light leading-relaxed">
                  {diff.explanation}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-brand-border/60 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="text-[11px]">Verified Core Facility</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Secondary Facilities Grid */}
        <div className="mb-14">
          <h3 className="font-serif text-xl text-brand-ivory mb-6 font-normal">
            Comprehensive Supporting Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {secondaryAmenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-surface/70 rounded-xl border border-brand-border/80 p-5 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300 hover:bg-brand-surface"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-brand-card flex items-center justify-center border border-white/5 mb-3.5 shadow-sm">
                    {item.icon}
                  </div>

                  <h4 className="font-serif text-base text-white font-normal">
                    {item.title}
                  </h4>

                  <p className="mt-2 text-xs text-neutral-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-brand-border/40">
                  <span className="text-[10px] uppercase tracking-luxury text-brand-gold/80 font-semibold">
                    Standard Amenity
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Venue Booking Guarantee Callout */}
        <div className="p-7 rounded-2xl bg-brand-surface/60 border-luxury flex items-start gap-4 shadow-sm">
          <HelpCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            <strong className="text-white font-medium">Direct Venue Tariff Policy:</strong> Hall rental tariffs, 
            per-plate banquet packages, and floral decor arrangements are tailored directly to your guest count, 
            auspicious muhurat timing, and family preferences. We encourage scheduled in-person consultations at the venue 
            to receive clear quotations without third-party aggregator markups.
          </div>
        </div>

      </div>
    </section>
  );
};
