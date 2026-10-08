// [ADDED] AboutSection highlighting the venue architecture and philosophy
import React from 'react';
import { CheckCircle2, ShieldCheck, Compass, Heart } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">
            <Heart className="w-3.5 h-3.5 fill-brand-gold" />
            <span>The Venue Story & Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-tight">
            A Self-Contained Celebration Venue Rooted in Heartfelt Hospitality
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
            Named after the Sanskrit word for the heart, <strong className="text-white font-medium">हृदय हॉल (Hriday Hall)</strong> was 
            established on Spine Road in Moshi to provide Pimpri-Chinchwad families with an intimate, 
            well-appointed banquet venue. We focus on genuine hospitality, spotless facilities, and 
            functional architecture tailored to modern Maharashtrian and Indian family events.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Visual Story + Architectural Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Photography Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative group overflow-hidden rounded-lg border border-brand-border/80 bg-brand-surface shadow-md">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/hriday-main-hall-theatre-mobile.webp" type="image/webp" />
                <source media="(max-width: 1024px)" srcSet="/images/hriday-main-hall-theatre-1024.webp" type="image/webp" />
                <source srcSet="/images/hriday-main-hall-theatre-1280.webp" type="image/webp" />
                <img
                  src="/images/hriday-main-hall-theatre.jpg"
                  alt="Main banquet hall theatre seating at Hriday Hall Moshi"
                  width={2048}
                  height={1152}
                  className="w-full h-72 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </picture>
              <div className="p-4 bg-brand-surface border-t border-brand-border/60">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">Interior Space</span>
                <h3 className="font-serif text-base text-white mt-0.5">Air-Conditioned Main Hall</h3>
                <p className="text-xs text-neutral-400 mt-1">Comfortable theatre seating for 180 to 200 guests with central carpet runner.</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg border border-brand-border/80 bg-brand-surface shadow-md sm:mt-8">
              <picture>
                <source media="(max-width: 640px)" srcSet="/images/hriday-dining-hall-buffet-mobile.webp" type="image/webp" />
                <source media="(max-width: 1024px)" srcSet="/images/hriday-dining-hall-buffet-1024.webp" type="image/webp" />
                <source srcSet="/images/hriday-dining-hall-buffet-1280.webp" type="image/webp" />
                <img
                  src="/images/hriday-dining-hall-buffet.jpg"
                  alt="Dedicated dining floor with round banquet tables at Hriday Hall"
                  width={2048}
                  height={1152}
                  className="w-full h-72 object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
              </picture>
              <div className="p-4 bg-brand-surface border-t border-brand-border/60">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">Dining Level</span>
                <h3 className="font-serif text-base text-white mt-0.5">Separate Banquet Dining Floor</h3>
                <p className="text-xs text-neutral-400 mt-1">Dedicated meal section ensuring guests can dine comfortably without ceremony interruption.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Highlights & Real Business Standards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg bg-brand-surface/60 border border-brand-border">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-gold flex items-center gap-2">
                <Compass className="w-4 h-4" />
                Architectural Hall Characteristics
              </h3>
              <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                Unlike makeshift party rooms or oversized convention sheds, Hriday Hall is intentionally 
                sized for 150 to 300 guests. The space feels intimate, celebratory, and dignified, with 
                vitrified floor tiling, recessed spotlights, and acoustic false ceiling treatments.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Distinct Event & Dining Zoning</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Ceremonies on the main floor continue undisturbed while catering service operates 
                    independently on the dedicated dining floor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Spine Road Strategic Accessibility</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Positioned in Sant Nagar, Sector 4, connecting easily to Spine Road, Bhosari, Moshi toll plaza, 
                    and the Pune-Nashik highway corridor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Full Operational Backing</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Equipped with uninterrupted power generators, private bridal preparation quarters, 
                    and on-site parking for up to 90 vehicles.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Clean, Sanitized Premises</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Consistently noted across 970+ Google ratings for high standards of cleanliness, 
                    hygiene, and courteous floor management.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-gold-light font-semibold border-b border-brand-gold/50 hover:border-brand-gold pb-1 transition-all"
              >
                <span>Schedule an in-person venue walkthrough</span>
                <span className="text-base leading-none">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
