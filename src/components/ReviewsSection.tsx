// [REFACTORED] ReviewsSection - Hero ratings, 2000 ratings banner, 6 verified review cards, and direct zero-redirect on-site review submission
import React, { useState, useEffect } from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Star, ShieldCheck, ExternalLink, CheckCircle2, MessageSquarePlus, Sparkles } from 'lucide-react';
import { ReviewModal, UserSubmittedReview } from './ReviewModal';

export const ReviewsSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userReviews, setUserReviews] = useState<UserSubmittedReview[]>([]);

  // Load any previously submitted local reviews from browser storage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('hriday_user_reviews');
      if (stored) {
        setUserReviews(JSON.parse(stored));
      }
    } catch {
      // LocalStorage access fallback
    }
  }, []);

  const handleAddReview = (newReview: UserSubmittedReview) => {
    const updated = [newReview, ...userReviews];
    setUserReviews(updated);
    try {
      localStorage.setItem('hriday_user_reviews', JSON.stringify(updated));
    } catch {
      // Fallback
    }
  };

  return (
    <section id="reviews" className="py-28 sm:py-36 bg-brand-surface relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/25 bg-brand-card text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
              <ShieldCheck className="w-3 h-3 text-brand-gold" />
              <span>Verified Public Reputation</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
              Trusted by Hundreds of Moshi Families.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              We operate with strict adherence to authentic hospitality and zero fabrication. Our standing as a preferred 
              celebration venue in Pimpri-Chinchwad is verified by nearly 2,000 genuine public reviews across Google and Justdial.
            </p>
          </div>

          {/* Direct Review Action Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold text-xs uppercase tracking-luxury transition-all shadow-gold-subtle hover:scale-102 active:scale-98"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write a Review / Share Feedback</span>
            </button>
          </div>
        </div>

        {/* Hero Rating Display: Dual Platform Spotlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          
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
                Verified Profile
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-6 leading-relaxed">
              Consistently commended for prime Spine Road accessibility, dependable air conditioning, and prompt management across <strong className="text-white font-medium">{BUSINESS_DATA.ratings.google.totalReviews}+ public Google reviews</strong>.
            </p>

            <div className="pt-6 mt-6 border-t border-brand-border/60 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-neutral-400 font-light">Sant Nagar · Moshi · PCMC</span>
              <div className="flex items-center gap-3">
                <a
                  href={BUSINESS_DATA.ratings.google.writeReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-brand-gold hover:text-brand-gold-light font-bold transition-colors"
                  title="Open direct Google review submission dialog"
                >
                  <span>Write Review on Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
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
                Verified Listing
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 font-light mt-6 leading-relaxed">
              Recognized among top banquet halls in Pimpri-Chinchwad for clean dining facilities and attentive on-floor coordination across <strong className="text-white font-medium">{BUSINESS_DATA.ratings.justdial.totalReviews}+ ratings</strong>.
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

        {/* Combined Trust Summary Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-brand-card/90 border border-brand-gold/25 mb-14 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center border border-brand-gold/30 text-brand-gold">
              <Star className="w-4 h-4 fill-brand-gold text-brand-gold" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider">
                Nearly 2,000 Verified Public Ratings
              </p>
              <p className="text-[11px] text-neutral-400 font-light">
                Consistently ranked high for wedding banquets, sacred rituals, and family gatherings in PCMC & Pune.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-[10px] text-brand-dark bg-brand-gold hover:bg-brand-gold-light px-3.5 py-1.5 rounded-full font-bold tracking-luxury uppercase transition-all shadow-sm"
            >
              + Submit Review Directly
            </button>
            <span className="text-[10px] text-brand-gold bg-brand-dark px-3 py-1.5 rounded-full border border-brand-gold/30 font-semibold tracking-luxury uppercase">
              100% Authentic Feedback
            </span>
          </div>
        </div>

        {/* User-Submitted Reviews (Rendered on top if any exist) */}
        {userReviews.length > 0 && (
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Direct Guest Reviews (Submitted on Website)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-brand-card rounded-2xl border-2 border-brand-gold/60 p-7 flex flex-col justify-between shadow-gold-subtle group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] uppercase tracking-luxury font-semibold px-3 py-1 rounded-full bg-brand-surface border border-brand-gold/40 text-brand-gold">
                        {rev.badge}
                      </span>
                      <div className="flex items-center gap-0.5 text-brand-gold">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-200 font-light italic leading-relaxed mt-2">
                      "{rev.comment}"
                    </p>
                  </div>

                  <div className="pt-5 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-medium text-white">
                        {rev.reviewer}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                        {rev.eventContext}
                      </p>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>{rev.date}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verified Public Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_DATA.verifiedReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-brand-card rounded-2xl border border-brand-border/80 hover:border-brand-gold/50 p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 shadow-luxury-card group"
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

              {/* Reviewer Attribution & Verification Badge */}
              <div className="pt-5 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-medium text-white group-hover:text-brand-gold transition-colors">
                    {rev.reviewer}
                  </h4>
                  <p className="text-[11px] text-neutral-400 mt-0.5 font-light">
                    {rev.eventContext}
                  </p>
                </div>
                <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800/50 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{rev.source.replace(" Review", "")}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Zero-Redirect On-Site Review Modal */}
      <ReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </section>
  );
};
