// [REFACTORED] Complete Hero Redesign: Full-bleed cinematic night facade, editorial typography, singular conversion CTAs, and refined 4-pillar trust bar
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Star, ArrowRight, Phone, Users, Wind, UtensilsCrossed } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Full-bleed Cinematically Graded Night Facade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={BUSINESS_DATA.gallery[0].mobileSrc}
            type="image/webp"
          />
          <source
            media="(max-width: 1024px)"
            srcSet={BUSINESS_DATA.gallery[0].tabletSrc}
            type="image/webp"
          />
          <source
            media="(max-width: 1280px)"
            srcSet={BUSINESS_DATA.gallery[0].desktopSrc}
            type="image/webp"
          />
          <source
            srcSet={BUSINESS_DATA.gallery[0].src}
            type="image/webp"
          />
          <img
            src={BUSINESS_DATA.gallery[0].fallbackSrc}
            alt={BUSINESS_DATA.gallery[0].alt}
            width={BUSINESS_DATA.gallery[0].width}
            height={BUSINESS_DATA.gallery[0].height}
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[12000ms] ease-out motion-safe:hover:scale-100 filter brightness-[0.60] contrast-[1.14]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Subtle Architectural Dark Gradients (not too heavy) */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/45 to-brand-dark/70" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-black/40 backdrop-blur-md mb-8 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-luxury text-brand-ivory font-medium">
            Now Booking 2026–2027 Auspicious Muhurat Dates
          </span>
        </div>

        {/* Editorial High-End Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[74px] font-normal tracking-tight text-brand-ivory leading-[1.08] max-w-4xl mx-auto">
          Where Cherished Celebrations Turn Into{' '}
          <span className="italic font-light text-gold-gradient block sm:inline">
            Lifelong Memories.
          </span>
        </h1>

        {/* Marathi Devanagari Sacred Sub-Line */}
        <p className="mt-4 font-serif text-brand-gold text-base sm:text-lg tracking-wider italic font-light">
          हृदय हॉल — शुभ कार्यासाठी परिपूर्ण, मंगलमय आणि भव्य वास्तू
        </p>

        {/* Short, Emotional Narrative Sub-Text (Max 2 lines) */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Pune's distinguished celebration venue on Spine Road, Moshi. An air-conditioned grand hall 
          and separate banquet dining floor tailored for weddings, sakharpuda, and family milestones up to 300 guests.
        </p>

        {/* Primary & Secondary Conversion CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inquiry"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark text-xs uppercase tracking-luxury font-bold shadow-gold-glow hover:shadow-brand-gold/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] w-full sm:w-auto"
          >
            <span>Check Date Availability</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#spaces"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl border border-brand-gold/30 hover:border-brand-gold/60 bg-white/[0.04] backdrop-blur-md text-brand-ivory hover:text-brand-gold text-xs uppercase tracking-luxury font-semibold transition-all duration-300 w-full sm:w-auto hover:bg-white/[0.08]"
          >
            <span>Explore the Venue</span>
          </a>
        </div>

        {/* Small Trust Line Under CTAs (Responsive wrap) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-brand-ivory/80 font-light text-center">
          <span className="inline-flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            <span className="font-medium text-brand-ivory">4.1 ★</span>
          </span>
          <span className="text-neutral-500">·</span>
          <span>970+ Google Reviews</span>
          <span className="text-neutral-500">·</span>
          <span>Spine Road, Moshi</span>
          <span className="text-neutral-500">·</span>
          <a
            href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
            className="text-brand-gold hover:underline font-medium inline-flex items-center gap-1 ml-1 whitespace-nowrap"
          >
            <Phone className="w-3 h-3" />
            <span>{BUSINESS_DATA.contact.primaryPhone}</span>
          </a>
        </div>

        {/* [REFACTORED] Key Highlights Bar (Just Below Hero) */}
        <div className="mt-14 sm:mt-16 pt-8 sm:pt-10 border-t border-brand-gold/15 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 text-left">
          
          {/* Card 1: Capacity */}
          <div className="p-4 sm:p-6 rounded-2xl bg-brand-card/85 backdrop-blur-md border border-brand-gold/20 hover:border-brand-gold/45 transition-all shadow-luxury-card group">
            <div className="flex items-center gap-2 sm:gap-2.5 text-brand-gold mb-2.5 sm:mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/40 flex items-center justify-center border border-brand-gold/25">
                <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-luxury font-semibold text-brand-gold">Capacity</span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-serif font-normal text-white">180 – 200 Seated</p>
            <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 font-light">Up to 300 floating reception</p>
          </div>

          {/* Card 2: Climate */}
          <div className="p-4 sm:p-6 rounded-2xl bg-brand-card/85 backdrop-blur-md border border-brand-gold/20 hover:border-brand-gold/45 transition-all shadow-luxury-card group">
            <div className="flex items-center gap-2 sm:gap-2.5 text-brand-gold mb-2.5 sm:mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/40 flex items-center justify-center border border-brand-gold/25">
                <Wind className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-luxury font-semibold text-brand-gold">Climate</span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-serif font-normal text-white">Full Air Conditioning</p>
            <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 font-light">Main hall & ceremony stage</p>
          </div>

          {/* Card 3: Dining */}
          <div className="p-4 sm:p-6 rounded-2xl bg-brand-card/85 backdrop-blur-md border border-brand-gold/20 hover:border-brand-gold/45 transition-all shadow-luxury-card group">
            <div className="flex items-center gap-2 sm:gap-2.5 text-brand-gold mb-2.5 sm:mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/40 flex items-center justify-center border border-brand-gold/25">
                <UtensilsCrossed className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-luxury font-semibold text-brand-gold">Dining Floor</span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-serif font-normal text-white">Separate Dining Floor</p>
            <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 font-light">80–100 per seating batch</p>
          </div>

          {/* Card 4: Trust Rating */}
          <div className="p-4 sm:p-6 rounded-2xl bg-brand-card/85 backdrop-blur-md border border-brand-gold/20 hover:border-brand-gold/45 transition-all shadow-luxury-card group">
            <div className="flex items-center gap-2 sm:gap-2.5 text-brand-gold mb-2.5 sm:mb-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-black/40 flex items-center justify-center border border-brand-gold/25">
                <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-brand-gold" />
              </div>
              <span className="text-[9px] sm:text-[10px] uppercase tracking-luxury font-semibold text-brand-gold">Verified Rating</span>
            </div>
            <p className="text-sm sm:text-base lg:text-lg font-serif font-normal text-white">4.1 / 5.0 Rating</p>
            <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 font-light">970+ local verified reviews</p>
          </div>

        </div>

      </div>
    </section>
  );
};
