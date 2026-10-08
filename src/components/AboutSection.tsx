// [REFACTORED] AboutSection - Luxury hospitality editorial layout with 2-column composition, 3 core pillars, and verified trust badge
import React from 'react';
import { Layers, ShieldCheck, Compass, Heart, ArrowRight, Star } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-36 bg-brand-dark relative border-t border-brand-border/60 bg-ambient-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/25 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold">
            <Heart className="w-3 h-3 fill-brand-gold text-brand-gold" />
            <span>Venue Philosophy & Purpose</span>
          </div>
        </div>

        {/* 2-Column Luxury Composition: Left = Large Real Photo Composition, Right = Refined Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Architectural Photograph Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-luxury bg-brand-surface shadow-luxury-card group">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/hriday-main-hall-theatre-mobile.webp" type="image/webp" />
                <source media="(max-width: 1024px)" srcSet="/images/hriday-main-hall-theatre-1024.webp" type="image/webp" />
                <source srcSet="/images/hriday-main-hall-theatre-1280.webp" type="image/webp" />
                <img
                  src="/images/hriday-main-hall-theatre.jpg"
                  alt="Main banquet hall theatre seating at Hriday Hall Moshi"
                  width={2048}
                  height={1152}
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </picture>

              {/* Photo Caption Strip */}
              <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-brand-dark/95 via-brand-dark/75 to-transparent backdrop-blur-xs border-t border-brand-border/40">
                <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold">Authentic Hall Interior</span>
                <p className="text-xs text-brand-ivory/90 mt-1 font-light leading-relaxed">
                  Air-conditioned main assembly hall with 180–200 theatre seating, vitrified floor polish, and aisle carpet.
                </p>
              </div>
            </div>

            {/* Floating Trust Badge on Image (Responsive positioning) */}
            <div className="hidden sm:flex absolute bottom-4 right-4 lg:-bottom-6 lg:-right-6 p-3.5 sm:p-4 rounded-xl bg-brand-surface/95 backdrop-blur-md border border-brand-gold/30 shadow-luxury-card items-center gap-3.5">
              <div className="w-10 h-10 rounded-full bg-brand-gold/15 flex items-center justify-center border border-brand-gold/40 text-brand-gold">
                <Star className="w-5 h-5 fill-brand-gold text-brand-gold" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">4.1 Google Rating</p>
                <p className="text-[10px] text-neutral-400 font-light">Trusted by 970+ PCMC families</p>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Editorial Story & 3 Key Pillars */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
                A Place Where Every Detail Matters.
              </h2>
              <div className="w-12 h-0.5 bg-brand-gold/60 mt-5 mb-6" />
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Designed with intention. From the acoustic false ceiling and vitrified tile flooring 
                to the separate dining hall, <strong className="text-white font-medium">हृदय हॉल (Hriday Hall)</strong> was 
                created so your family can focus on what matters most — celebrating.
              </p>
              <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                Named after the Sanskrit word for the heart, Hriday Hall was established on Spine Road in Moshi 
                to provide Pimpri-Chinchwad families with a dignifying, self-contained celebration venue. 
                We combine warm Maharashtrian hospitality with modern, reliable infrastructure built specifically for sacred milestones.
              </p>
            </div>

            {/* 3 Key Pillars */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/70 flex items-start gap-4 transition-colors hover:border-brand-gold/30">
                <div className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-gold/30 flex-shrink-0 text-brand-gold">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Spatial Harmony</h3>
                  <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                    Main hall dedicated solely to ceremonies and rituals, while a separate floor hosts dining 
                    so rituals proceed with full solemnity.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/70 flex items-start gap-4 transition-colors hover:border-brand-gold/30">
                <div className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-gold/30 flex-shrink-0 text-brand-gold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Uncompromised Comfort</h3>
                  <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                    Full air-conditioning units keep guests comfortable year-round, backed by 100% generator power 
                    guaranteeing zero interruption.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border/70 flex items-start gap-4 transition-colors hover:border-brand-gold/30">
                <div className="w-10 h-10 rounded-lg bg-brand-card flex items-center justify-center border border-brand-gold/30 flex-shrink-0 text-brand-gold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Effortless Arrival</h3>
                  <p className="text-xs text-neutral-400 mt-1 font-light leading-relaxed">
                    Prime Spine Road location in Sant Nagar, Sector 4, with dedicated on-site parking for ~90 vehicles 
                    and valet assistance.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Link & Trust Micro-Badge */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <a
                href="#spaces"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-brand-gold hover:text-brand-gold-light font-semibold border-b border-brand-gold/40 hover:border-brand-gold pb-1 transition-all"
              >
                <span>Explore the 4 Dedicated Spaces</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>

              <span className="text-[11px] text-neutral-400 font-light">
                Plot 188, Spine Road, Moshi, Pune
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
