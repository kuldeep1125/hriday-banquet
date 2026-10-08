// [REFACTORED] AmenitiesSection highlighting the 3 primary operational differentiators alongside verified facilities
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Wind, UtensilsCrossed, ShieldCheck, Zap, Car, Sparkles, Building2, HelpCircle, CheckCircle2 } from 'lucide-react';

export const AmenitiesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    ac: <Wind className="w-5 h-5 text-brand-gold" />,
    dining: <UtensilsCrossed className="w-5 h-5 text-brand-gold" />,
    stage: <Sparkles className="w-5 h-5 text-brand-gold" />,
    bridal: <Building2 className="w-5 h-5 text-brand-gold" />,
    generator: <Zap className="w-5 h-5 text-brand-gold" />,
    parking: <Car className="w-5 h-5 text-brand-gold" />,
    decor: <Sparkles className="w-5 h-5 text-brand-gold" />,
    catering: <UtensilsCrossed className="w-5 h-5 text-brand-gold" />
  };

  // [ADDED] The 3 Key Operational Differentiators that set Hriday Hall apart
  const differentiators = [
    {
      title: "100% Generator Backup",
      tagline: "Zero Blackout Interruption",
      description: "Equipped with a heavy-duty commercial silent generator that auto-engages during power grid fluctuations. Your varmala, rituals, sound, and lighting proceed without a single second of pause.",
      metric: "Full Load Backup",
      icon: <Zap className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Dedicated Parking (~90 Vehicles)",
      tagline: "Spacious On-Site Compound",
      description: "Ample designated parking compound directly accessible from Spine Road, supported by valet attendants. Eliminates the common hassle of roadside parking on crowded PCMC corridors.",
      metric: "~90 Cars & Two-Wheelers",
      icon: <Car className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Separate Banquet Dining Floor",
      tagline: "Independent Dining Zoning",
      description: "Unlike single-room halls where buffet counters encroach on ceremony seating, Hriday Hall provides a dedicated dining level so dining guests never disrupt the auspicious rituals above.",
      metric: "80 – 100 Guests per Batch",
      icon: <UtensilsCrossed className="w-6 h-6 text-brand-gold" />
    }
  ];

  return (
    <section id="amenities" className="py-28 sm:py-36 bg-brand-dark relative border-t border-brand-border/60 bg-ambient-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
            <ShieldCheck className="w-3 h-3 text-brand-gold" />
            <span>Operational Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
            Engineered for Flawless, Stress-Free Celebrations.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Every operational feature at Hriday Hall is built to eliminate host anxiety. We provide 
            transparent, verified infrastructure that ensures complete comfort for your guests from arrival to departure.
          </p>
        </div>

        {/* [ADDED] The 3 Primary Differentiators Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
          {differentiators.map((diff) => (
            <div
              key={diff.title}
              className="bg-brand-surface rounded-2xl border-luxury p-7 sm:p-8 flex flex-col justify-between shadow-luxury-card relative overflow-hidden group transition-all duration-500 hover:-translate-y-1.5"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full pointer-events-none group-hover:bg-brand-gold/10 transition-colors" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-brand-card flex items-center justify-center border border-brand-gold/30 shadow-inner">
                    {diff.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-luxury text-brand-gold bg-black/60 px-3 py-1 rounded-full border border-brand-gold/30">
                    {diff.metric}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-luxury text-neutral-400 font-semibold block">
                  {diff.tagline}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mt-1.5">
                  {diff.title}
                </h3>

                <p className="mt-3.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Facility Differentiator</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUSINESS_DATA.amenities.map((item) => (
            <div
              key={item.id}
              className="bg-brand-surface/70 rounded-xl border border-brand-border/80 p-6 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300 hover:bg-brand-surface"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-white/5 mb-4 shadow-sm">
                  {iconMap[item.id] || <Sparkles className="w-4 h-4 text-brand-gold" />}
                </div>

                <h4 className="font-serif text-base text-white font-normal">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-brand-border/40">
                <span className="text-[10px] uppercase tracking-luxury text-brand-gold/80 font-semibold">
                  Standard Amenity
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Direct Booking Callout */}
        <div className="mt-14 p-7 rounded-2xl bg-brand-surface/60 border-luxury flex items-start gap-4 shadow-sm">
          <HelpCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            <strong className="text-white font-medium">Direct Venue Booking Guarantee:</strong> Hall rental tariffs, 
            per-plate catering banquets, and customized flower decor packages are tailored directly to your guest count, 
            auspicious muhurat timing, and family preferences. We welcome scheduled in-person consultations at the premises 
            to receive accurate quotations without third-party aggregator markups.
          </div>
        </div>

      </div>
    </section>
  );
};
