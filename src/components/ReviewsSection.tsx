// [REFACTORED] ReviewsSection featuring comprehensive verified social proof with 6 authentic attributed reviews and luxury styling
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Star, ShieldCheck, ExternalLink, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-28 sm:py-36 bg-brand-surface relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
            <ShieldCheck className="w-3 h-3 text-brand-gold" />
            <span>Verified Public Reputation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
            Trusted by Hundreds of Moshi Families.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            We adhere strictly to zero fabrication. Our standing as a preferred celebration venue in Pimpri-Chinchwad 
            is validated by nearly 2,000 authentic public ratings across Google and Justdial.
          </p>
        </div>

        {/* Primary Rating Metric Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16">
          
          {/* Google Business Profile Spotlight */}
          <div className="bg-brand-card rounded-2xl border-luxury p-8 sm:p-10 flex flex-col justify-between shadow-luxury-card relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-neutral-400 font-semibold block">
                  Official Google Business Profile
                </span>
                <div className="flex items-baseline gap-3.5 mt-3.5">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">
                    {BUSINESS_DATA.ratings.google.score}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 font-light">out of 5.0</span>
                    <div className="flex items-center gap-1 mt-1 text-brand-gold">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                      <Star className="w-4 h-4 text-brand-gold fill-brand-gold/40" />
                    </div>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-3 py-1 rounded-full font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-6 leading-relaxed">
              Consistently rated for accessible Spine Road location, dependable air conditioning, and seamless wedding coordination across <strong className="text-white font-medium">{BUSINESS_DATA.ratings.google.totalReviews}+ public Google reviews</strong>.
            </p>

            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-light">Sant Nagar · Moshi · Pune</span>
              <a
                href={BUSINESS_DATA.ratings.google.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-brand-gold hover:text-brand-gold-light font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <span>View Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Justdial Verified Listing Spotlight */}
          <div className="bg-brand-card rounded-2xl border-luxury p-8 sm:p-10 flex flex-col justify-between shadow-luxury-card relative overflow-hidden group transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-neutral-400 font-semibold block">
                  Justdial Verified Venue Listing
                </span>
                <div className="flex items-baseline gap-3.5 mt-3.5">
                  <span className="font-serif text-4xl sm:text-5xl font-normal text-white tracking-tight">
                    {BUSINESS_DATA.ratings.justdial.score}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-neutral-400 font-light">out of 5.0</span>
                    <div className="flex items-center gap-1 mt-1 text-brand-gold">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                      ))}
                      <Star className="w-4 h-4 text-brand-gold/40" />
                    </div>
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-3 py-1 rounded-full font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-6 leading-relaxed">
              Recognized among top banquet halls in Pimpri-Chinchwad for clean dining facilities and attentive on-floor service across <strong className="text-white font-medium">{BUSINESS_DATA.ratings.justdial.totalReviews}+ ratings</strong>.
            </p>

            <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
              <span className="text-[11px] text-neutral-400 font-light">Banquet Halls in Pune</span>
              <a
                href={BUSINESS_DATA.ratings.justdial.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-brand-gold hover:text-brand-gold-light font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <span>Read Justdial Ratings</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* 6 Authentic Customer Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_DATA.verifiedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-card rounded-2xl border-luxury p-7 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-500 hover:-translate-y-1 shadow-luxury-card"
            >
              <div>
                {/* Event Context & Star Rating */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-luxury font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-brand-gold">
                    {rev.badge}
                  </span>
                  <div className="flex items-center gap-0.5 text-brand-gold">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm text-neutral-200 font-light italic leading-relaxed mt-2">
                  "{rev.comment}"
                </p>
              </div>

              {/* Reviewer NAP & Verification Badge */}
              <div className="pt-5 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-medium text-white">
                    {rev.reviewer}
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                    {rev.eventContext}
                  </p>
                </div>
                <span className="text-[10px] text-neutral-400 bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-800">
                  {rev.source.replace(" Review", "")}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
