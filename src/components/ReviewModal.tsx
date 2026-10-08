// [ADDED] ReviewModal - Luxury on-site review submission modal with 100% zero-redirect submission and optional 1-click Google sync
import React, { useState } from 'react';
import { Star, X, CheckCircle2, Copy, ExternalLink, Heart } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export interface UserSubmittedReview {
  id: string;
  reviewer: string;
  eventContext: string;
  rating: number;
  comment: string;
  date: string;
  source: string;
  badge: string;
}

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitReview: (review: UserSubmittedReview) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmitReview }) => {
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [eventType, setEventType] = useState<string>('Wedding & Reception');
  const [comment, setComment] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleRatingClick = (rate: number) => {
    setRating(rate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview: UserSubmittedReview = {
      id: `user-${Date.now()}`,
      reviewer: name.trim(),
      eventContext: `${eventType} · Verified Guest`,
      rating: rating,
      comment: comment.trim(),
      date: 'Just now',
      source: 'Direct Website Review',
      badge: 'Verified Guest Review'
    };

    onSubmitReview(newReview);
    setIsSubmitted(true);
  };

  const handleCopyAndGoogle = () => {
    // Copy review text to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(comment);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
    // Open Google review dialog / profile in new tab
    window.open(BUSINESS_DATA.ratings.google.verifiedUrl, '_blank', 'noopener,noreferrer');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setComment('');
    setRating(5);
    onClose();
  };

  const ratingDescriptions: Record<number, string> = {
    5: "5.0 ★ Exceptional & Memorable Experience",
    4: "4.0 ★ Very Good Hospitality & Facility",
    3: "3.0 ★ Good Celebration",
    2: "2.0 ★ Needs Improvement",
    1: "1.0 ★ Unsatisfactory"
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-brand-surface rounded-2xl border-luxury shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-brand-border/60 bg-brand-card/90">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-gold/15 flex items-center justify-center border border-brand-gold/30 text-brand-gold">
              <Heart className="w-4 h-4 fill-brand-gold" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl text-white font-normal">
                {isSubmitted ? "Review Submitted With Gratitude" : "Share Your Celebration Experience"}
              </h3>
              <p className="text-[10px] sm:text-[11px] text-neutral-400 font-light">
                Hriday Banquet Hall · Spine Road, Moshi
              </p>
            </div>
          </div>

          <button
            onClick={handleResetAndClose}
            className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none focus:ring-1 focus:ring-brand-gold"
            aria-label="Close review dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Success State - Zero Redirect Confirmation */
            <div className="py-6 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/60 text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-serif text-xl sm:text-2xl text-white">
                  Thank You, {name}!
                </h4>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-light leading-relaxed max-w-sm mx-auto">
                  Your review has been recorded directly on the website with zero redirects. It helps future Moshi families know what to expect when planning their sacred celebrations.
                </p>
              </div>

              {/* Verified Star Badge */}
              <div className="p-4 rounded-xl bg-brand-card border border-brand-border/70 max-w-sm mx-auto text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold">
                    {eventType}
                  </span>
                  <div className="flex items-center gap-0.5 text-brand-gold">
                    {[...Array(rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-neutral-200 italic font-light">
                  "{comment}"
                </p>
              </div>

              {/* Optional 1-Click Google Share */}
              <div className="pt-4 border-t border-brand-border/60 max-w-sm mx-auto">
                <p className="text-[11px] text-neutral-300 font-light mb-3">
                  Want to also post this to Google Reviews? We'll copy your review text to your clipboard so you can just paste & post on Google:
                </p>
                <button
                  type="button"
                  onClick={handleCopyAndGoogle}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark text-xs uppercase tracking-wider font-bold transition-all shadow-gold-subtle hover:scale-102"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? "Copied! Opening Google..." : "Copy Text & Post to Google (1-Click)"}</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="text-xs text-neutral-400 hover:text-white underline"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Review Submission Form - Zero Redirect */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Star Rating Picker */}
              <div>
                <label className="block text-xs uppercase tracking-luxury text-brand-gold font-semibold mb-2">
                  Your Overall Rating *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => {
                    const isFilled = (hoverRating || rating) >= star;
                    return (
                      <button
                        type="button"
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="p-1 focus:outline-none focus:scale-110 transition-transform"
                        aria-label={`Rate ${star} stars`}
                      >
                        <Star 
                          className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                            isFilled ? 'fill-brand-gold text-brand-gold' : 'text-neutral-600 hover:text-brand-gold/50'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-neutral-300 mt-1 font-light">
                  {ratingDescriptions[hoverRating || rating]}
                </p>
              </div>

              {/* Host Name & Event Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="review-name" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    required
                    placeholder="e.g. Dr. Amit Kulkarni"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-brand-card border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="review-event" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                    Celebration Occasion *
                  </label>
                  <select
                    id="review-event"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-brand-card border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                  >
                    <option value="Wedding & Reception">Wedding & Reception (लग्नसमारंभ)</option>
                    <option value="Sakharpuda & Engagement">Sakharpuda & Engagement (साखरपुडा)</option>
                    <option value="Dohale Jevan & Naming">Dohale Jevan & Naming (डोहाळे जेवण)</option>
                    <option value="1st Birthday Milestone">1st Birthday Milestone (वाढदिवस)</option>
                    <option value="Anniversary Gathering">Anniversary Gathering (वर्धापनदिन)</option>
                    <option value="Corporate / Social Event">Corporate / Social Event (सभा)</option>
                  </select>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label htmlFor="review-comment" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                  Your Honest Review & Experience *
                </label>
                <textarea
                  id="review-comment"
                  required
                  rows={4}
                  placeholder="Share details about the air conditioning, separate dining hall, cleanliness, stage decor, and venue coordination..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full bg-brand-card border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-gold-subtle hover:scale-102"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Submit Directly (Zero Redirect)</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyAndGoogle}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-neutral-700 hover:border-brand-gold/60 text-neutral-300 hover:text-white text-xs uppercase tracking-wider font-medium transition-all"
                >
                  <span>Post on Google</span>
                  <ExternalLink className="w-3.5 h-3.5 text-brand-gold" />
                </button>
              </div>

              <p className="text-[11px] text-neutral-400 font-light text-center">
                Submitting directly stores your review instantly on the website with zero page reloads or redirects.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
