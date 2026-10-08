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
    <section id="amenities" className="py-24 sm:py-28 bg-brand-dark relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Operational Infrastructure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight">
            Designed for Seamless, Stress-Free Events
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
            Every operational feature at Hriday Hall is built to eliminate host anxiety. We provide 
            transparent, verified infrastructure that ensures your guests are comfortable from arrival to departure.
          </p>
        </div>

        {/* [ADDED] The 3 Primary Differentiators Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {differentiators.map((diff) => (
            <div
              key={diff.title}
              className="bg-brand-surface rounded-xl border border-brand-gold/40 p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-brand-gold transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-brand-dark flex items-center justify-center border border-brand-gold/30">
                    {diff.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-dark px-2.5 py-1 rounded border border-brand-gold/30">
                    {diff.metric}
                  </span>
                </div>

                <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                  {diff.tagline}
                </span>
                <h3 className="font-serif text-xl text-white font-medium mt-1">
                  {diff.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-brand-border/60 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Venue Advantage</span>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BUSINESS_DATA.amenities.map((item) => (
            <div
              key={item.id}
              className="bg-brand-surface/70 rounded-lg border border-brand-border/80 p-5 flex flex-col justify-between hover:border-brand-gold/50 transition-colors"
            >
              <div>
                <div className="w-9 h-9 rounded-md bg-brand-dark flex items-center justify-center border border-white/5 mb-3.5">
                  {iconMap[item.id] || <Sparkles className="w-4 h-4 text-brand-gold" />}
                </div>

                <h4 className="font-serif text-base text-white font-medium">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs text-neutral-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-brand-border/40">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold/80 font-semibold">
                  Standard Amenity
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparent Inquiry Policy Callout */}
        <div className="mt-12 p-6 rounded-xl bg-brand-surface/50 border border-brand-border flex items-start gap-4 shadow-sm">
          <HelpCircle className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            <strong className="text-white font-medium">Direct Venue Booking Guarantee:</strong> Rental rates, 
            per-plate catering menus, and floral decoration packages are customized according to event scale, 
            muhurat timing, and client preferences. We encourage direct consultation with management at 
            the premises to receive accurate quotes without third-party commissions.
          </div>
        </div>

      </div>
    </section>
  );
};
