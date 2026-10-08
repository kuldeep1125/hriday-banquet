// [REFACTORED] AboutSection with museum-grade spacing, editorial typography, and authentic architectural photography
import React from 'react';
import { CheckCircle2, ShieldCheck, Compass, Heart, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 sm:py-36 bg-brand-dark relative border-t border-brand-border/60 bg-ambient-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
            <Heart className="w-3 h-3 fill-brand-gold" />
            <span>Venue Philosophy & Heritage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
            A Self-Contained Celebration Space Rooted in Genuine Hospitality.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Named after the Sanskrit word for the heart, <strong className="text-white font-medium">हृदय हॉल (Hriday Hall)</strong> was 
            envisioned on Spine Road in Moshi to provide Pimpri-Chinchwad families with a dignifying, 
            immaculately managed celebration venue. We merge traditional warm hospitality with 
            flawless modern infrastructure designed specifically for sacred milestone gatherings.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Visual Story + Architectural Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="relative group overflow-hidden rounded-2xl border-luxury bg-brand-surface shadow-luxury-card">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/hriday-main-hall-theatre-mobile.webp" type="image/webp" />
                <source media="(max-width: 1024px)" srcSet="/images/hriday-main-hall-theatre-1024.webp" type="image/webp" />
                <source srcSet="/images/hriday-main-hall-theatre-1280.webp" type="image/webp" />
                <img
                  src="/images/hriday-main-hall-theatre.jpg"
                  alt="Main banquet hall theatre seating at Hriday Hall Moshi"
                  width={2048}
                  height={1152}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </picture>
              <div className="p-5 bg-brand-surface/90 backdrop-blur-sm border-t border-brand-border/60">
                <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold">Interior Space</span>
                <h3 className="font-serif text-base text-white mt-1">Air-Conditioned Main Hall</h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Comfortable theatre seating for 180 to 200 guests with central crimson carpet runner.
                </p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl border-luxury bg-brand-surface shadow-luxury-card sm:mt-10">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/hriday-dining-hall-buffet-mobile.webp" type="image/webp" />
                <source media="(max-width: 1024px)" srcSet="/images/hriday-dining-hall-buffet-1024.webp" type="image/webp" />
                <source srcSet="/images/hriday-dining-hall-buffet-1280.webp" type="image/webp" />
                <img
                  src="/images/hriday-dining-hall-buffet.jpg"
                  alt="Dedicated dining floor with round banquet tables at Hriday Hall"
                  width={2048}
                  height={1152}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </picture>
              <div className="p-5 bg-brand-surface/90 backdrop-blur-sm border-t border-brand-border/60">
                <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold">Dining Level</span>
                <h3 className="font-serif text-base text-white mt-1">Dedicated Dining Floor</h3>
                <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed">
                  Separate floor plan ensuring guests dine in comfort without ceremonial interruption.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights & Real Business Standards */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-7 rounded-2xl bg-brand-surface/70 border-luxury">
              <h3 className="text-xs font-semibold uppercase tracking-luxury text-brand-gold flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Architectural Hall Characteristics
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-3 leading-relaxed font-light">
                Unlike makeshift party rooms or oversized industrial sheds, Hriday Hall is purposefully 
                engineered for 150 to 300 guests. The space feels intimate, regal, and dignified, with 
                polished vitrified flooring, recessed ambient spotlights, and acoustic false ceiling treatments.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Distinct Event & Dining Zoning</h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-light">
                    Rituals on the main stage continue with complete solemnity while catering flows 
                    independently on the dedicated banquet dining floor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Spine Road Strategic Accessibility</h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-light">
                    Positioned in Sant Nagar, Sector 4, connecting easily to Bhosari, Moshi toll plaza, 
                    Chakan corridor, and the Pune-Nashik highway.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">100% Uninterrupted Power Assurance</h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-light">
                    Heavy-duty on-site generator backup guarantees zero interruptions during sacred varmala, 
                    rituals, sound coordination, and AC cooling.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white">Spotless Sanitization & Management</h4>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-light">
                    Consistently acclaimed across 970+ Google ratings for pristine cleanliness, 
                    hygienic washrooms, and attentive hospitality coordinators.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#inquiry"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-brand-gold hover:text-brand-gold-light font-semibold border-b border-brand-gold/40 hover:border-brand-gold pb-1 transition-all"
              >
                <span>Schedule a Private Venue Walkthrough</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
