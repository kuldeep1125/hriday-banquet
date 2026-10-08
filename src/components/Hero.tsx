// [FIXED] Removed unused ShieldCheck import from Hero
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Star, ArrowRight, Sparkles, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-dark">
      {/* Cinematically Graded Real Photography Background */}
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
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[10000ms] ease-out motion-safe:hover:scale-100 filter brightness-[0.62] contrast-[1.12]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Multi-layered Architectural Dark Luxury Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-brand-dark/80" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.12),transparent_70%)]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Luxury Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-gold/25 bg-black/50 backdrop-blur-md mb-8 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-luxury text-neutral-200 font-medium">
            Now Booking 2026–2027 Muhurat Dates
          </span>
          <span className="text-brand-gold/30">·</span>
          <span className="text-[11px] text-brand-gold font-semibold flex items-center gap-1">
            <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
            4.1 ★ (970+ Reviews)
          </span>
        </div>

        {/* Emotionally Resonant Luxury Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[70px] font-normal tracking-tight text-brand-ivory leading-[1.08] max-w-4xl mx-auto">
          Where Precious Celebrations Turn Into{' '}
          <span className="italic font-light text-gold-gradient block sm:inline">
            Lifelong Memories.
          </span>
        </h1>

        {/* Marathi Devanagari Sacred Blessing Line */}
        <p className="mt-3.5 font-serif text-brand-gold/90 text-sm sm:text-base md:text-lg tracking-wider italic font-light">
          हृदय हॉल — शुभ कार्यासाठी भव्य, मंगलमय आणि परिपूर्ण वास्तू
        </p>

        {/* Quietly Confident Hospitality Narrative */}
        <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-300 max-w-2xl mx-auto font-light leading-relaxed">
          Situated on Spine Road, Sant Nagar, Moshi. An air-conditioned grand celebration venue 
          featuring an elevated ceremony stage, separate banquet dining floor, and dedicated parking 
          for weddings, sakharpuda, and milestone family celebrations of up to 300 guests.
        </p>

        {/* Refined Conversion Action Cluster */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#inquiry"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark text-xs uppercase tracking-luxury font-bold shadow-gold-glow hover:shadow-brand-gold/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] w-full sm:w-auto"
          >
            <span>Check Auspicious Date Availability</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md text-white hover:text-brand-gold hover:border-brand-gold/40 text-xs uppercase tracking-luxury font-semibold transition-all duration-300 w-full sm:w-auto hover:bg-white/[0.08]"
          >
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>View Authentic Gallery</span>
          </a>
        </div>

        {/* Direct Contact Hotline Prompt */}
        <div className="mt-5 flex items-center justify-center gap-2 text-xs text-neutral-400 font-light">
          <Phone className="w-3.5 h-3.5 text-brand-gold" />
          <span>Direct Host Hotline:</span>
          <a
            href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
            className="text-brand-gold hover:underline font-medium ml-0.5"
          >
            {BUSINESS_DATA.contact.primaryPhone}
          </a>
          <span className="text-neutral-600">·</span>
          <a
            href={`tel:${BUSINESS_DATA.contact.secondaryPhoneRaw}`}
            className="text-neutral-300 hover:text-brand-gold font-medium"
          >
            {BUSINESS_DATA.contact.secondaryPhone}
          </a>
        </div>

        {/* Museum-Grade Architectural Distinction Ribbon */}
        <div className="mt-16 pt-10 border-t border-brand-border/60 grid grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          <div className="p-4 rounded-xl bg-brand-surface/60 backdrop-blur-md border border-brand-border/70 hover:border-brand-gold/30 transition-all">
            <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block mb-1">
              Guest Capacity
            </span>
            <p className="text-sm font-medium text-white">{BUSINESS_DATA.capacity.theatreSeating}</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Up to 300 floating reception</p>
          </div>

          <div className="p-4 rounded-xl bg-brand-surface/60 backdrop-blur-md border border-brand-border/70 hover:border-brand-gold/30 transition-all">
            <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block mb-1">
              Dining Separation
            </span>
            <p className="text-sm font-medium text-white">Separate Banquet Floor</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">80–100 per seating batch</p>
          </div>

          <div className="p-4 rounded-xl bg-brand-surface/60 backdrop-blur-md border border-brand-border/70 hover:border-brand-gold/30 transition-all">
            <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block mb-1">
              Power Reliability
            </span>
            <p className="text-sm font-medium text-white">100% Generator Backup</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Zero ceremony interruption</p>
          </div>

          <div className="p-4 rounded-xl bg-brand-surface/60 backdrop-blur-md border border-brand-border/70 hover:border-brand-gold/30 transition-all">
            <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block mb-1">
              On-Site Parking
            </span>
            <p className="text-sm font-medium text-white">Dedicated ~90 Car Area</p>
            <p className="text-[11px] text-neutral-400 mt-0.5">Wide Spine Road approach</p>
          </div>
        </div>

      </div>
    </section>
  );
};
