// [REFACTORED] Hero Section with emotional storytelling, prominent date availability checker, and authentic photography
import React, { useState } from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { MapPin, Users, Star, ArrowUpRight, Phone, Sparkles, Calendar, MessageSquare, Utensils } from 'lucide-react';

export const Hero: React.FC = () => {
  const [quickDate, setQuickDate] = useState('');
  const [quickGuests, setQuickGuests] = useState('100 – 180 Guests');
  const [quickEventType, setQuickEventType] = useState('Weddings & Receptions');

  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleQuickWhatsAppCheck = () => {
    const text = `Hello Hriday Hall Team,

I would like to check venue date availability for an event:
• Preferred Date: ${quickDate || 'To be decided'}
• Expected Guests: ${quickGuests}
• Event Type: ${quickEventType}
• Venue: Hriday Banquet Hall, Spine Road, Moshi

Please let me know if this date is open for booking.`;

    const url = `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Real Photography Background with Architectural Vignette */}
      <div className="absolute inset-0 z-0">
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
            className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.08]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Sophisticated Editorial Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-brand-dark/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-2">
        {/* Location & Distinction Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-brand-gold/50 bg-brand-dark/85 backdrop-blur-md mb-6 shadow-md">
          <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
          <span className="text-[11px] uppercase tracking-widest text-neutral-200 font-semibold">
            Spine Road · Sant Nagar, Moshi · Pune 412105
          </span>
          <span className="w-1 h-1 rounded-full bg-brand-gold/70" />
          <span className="text-[11px] text-brand-gold font-bold flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
            4.1 ★ (970+ Reviews)
          </span>
        </div>

        {/* [REFACTORED] Emotional, Desire-Building Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[66px] font-normal tracking-tight text-brand-ivory leading-[1.12] max-w-4xl mx-auto text-shadow">
          Where Precious Celebrations Turn Into Lifelong Memories
        </h1>

        {/* Subhead with Cultural Warmth and Specificity */}
        <p className="mt-5 text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto font-light leading-relaxed">
          A dedicated air-conditioned celebration hall in Moshi featuring an elevated ceremony stage, 
          separate dining floor, and heartfelt hospitality for weddings, sakharpuda, birthdays, 
          and family occasions up to 300 guests.
        </p>

        {/* [ADDED] Interactive Quick Date & Availability Checker Card */}
        <div className="mt-10 max-w-4xl mx-auto bg-brand-card/95 backdrop-blur-md rounded-2xl border border-brand-border/90 p-4 sm:p-6 shadow-2xl text-left">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-gold" />
              <span className="text-xs uppercase tracking-wider font-semibold text-white">
                Check Auspicious Date Availability
              </span>
            </div>
            <span className="text-[11px] text-brand-gold font-medium hidden sm:inline">
              Instant WhatsApp or Phone Confirmation
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 items-end">
            {/* Preferred Date */}
            <div>
              <label htmlFor="quick-date-input" className="block text-[11px] font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                Preferred Date
              </label>
              <input
                id="quick-date-input"
                type="date"
                min={getTodayString()}
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="w-full bg-brand-surface border border-neutral-700 hover:border-brand-gold/60 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3 py-2.5 text-xs text-white transition-colors focus-visible:outline-none"
              />
            </div>

            {/* Event Type */}
            <div>
              <label htmlFor="quick-event-select" className="block text-[11px] font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                Celebration Type
              </label>
              <select
                id="quick-event-select"
                value={quickEventType}
                onChange={(e) => setQuickEventType(e.target.value)}
                className="w-full bg-brand-surface border border-neutral-700 hover:border-brand-gold/60 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3 py-2.5 text-xs text-white transition-colors focus-visible:outline-none"
              >
                <option value="Weddings & Receptions">Wedding & Reception</option>
                <option value="Sakharpuda (Engagement)">Sakharpuda (Engagement)</option>
                <option value="1st Birthday Milestone">1st Birthday Party</option>
                <option value="Dohale Jevan / Naming Ceremony">Dohale Jevan / Naming</option>
                <option value="Family Get-Together">Family Get-Together</option>
                <option value="Corporate Assembly">Corporate / Social Event</option>
              </select>
            </div>

            {/* Expected Guests */}
            <div>
              <label htmlFor="quick-guest-select" className="block text-[11px] font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                Expected Guests
              </label>
              <select
                id="quick-guest-select"
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full bg-brand-surface border border-neutral-700 hover:border-brand-gold/60 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg px-3 py-2.5 text-xs text-white transition-colors focus-visible:outline-none"
              >
                <option value="50 – 100 Guests (Intimate)">50 – 100 Guests</option>
                <option value="100 – 180 Guests (Theatre Seating)">100 – 180 Guests</option>
                <option value="180 – 300 Guests (Floating Reception)">180 – 300 Guests</option>
              </select>
            </div>

            {/* Direct Action */}
            <div className="sm:col-span-3 lg:col-span-1">
              <button
                type="button"
                onClick={handleQuickWhatsAppCheck}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-brand-gold/30 active:scale-98 focus-visible:ring-2 focus-visible:ring-white"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Check Date</span>
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Navigation & Hotline CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 hover:border-brand-gold text-neutral-200 hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-200 shadow-sm"
          >
            <span>Detailed Online Booking Inquiry</span>
            <ArrowUpRight className="w-4 h-4 text-brand-gold" />
          </a>

          <a
            href="#spaces"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-neutral-700 hover:border-brand-gold bg-brand-surface/60 backdrop-blur-sm text-neutral-300 hover:text-white text-xs uppercase tracking-widest transition-all duration-200"
          >
            <span>Explore Hall & Dining Floor</span>
          </a>

          <a
            href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:text-brand-gold text-xs uppercase tracking-widest transition-all duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-brand-gold" />
            <span>Call +91 91450 83945</span>
          </a>
        </div>

        {/* Real-World Venue Key Metrics Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="p-3.5 rounded-lg bg-brand-surface/50 backdrop-blur-sm border border-white/5 hover:border-brand-gold/40 transition-colors">
            <div className="flex items-center gap-2 text-brand-gold mb-1">
              <Users className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Guest Capacity</span>
            </div>
            <p className="text-sm font-medium text-white">{BUSINESS_DATA.capacity.theatreSeating}</p>
            <p className="text-[11px] text-neutral-400">Up to 300 floating</p>
          </div>

          <div className="p-3.5 rounded-lg bg-brand-surface/50 backdrop-blur-sm border border-white/5 hover:border-brand-gold/40 transition-colors">
            <div className="flex items-center gap-2 text-brand-gold mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Climate Comfort</span>
            </div>
            <p className="text-sm font-medium text-white">Full Air Conditioning</p>
            <p className="text-[11px] text-neutral-400">Main hall & stage area</p>
          </div>

          <div className="p-3.5 rounded-lg bg-brand-surface/50 backdrop-blur-sm border border-white/5 hover:border-brand-gold/40 transition-colors">
            <div className="flex items-center gap-2 text-brand-gold mb-1">
              <Utensils className="w-4 h-4" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Dining Level</span>
            </div>
            <p className="text-sm font-medium text-white">Separate Dining Floor</p>
            <p className="text-[11px] text-neutral-400">Dedicated buffet setup</p>
          </div>

          <div className="p-3.5 rounded-lg bg-brand-surface/50 backdrop-blur-sm border border-white/5 hover:border-brand-gold/40 transition-colors">
            <div className="flex items-center gap-2 text-brand-gold mb-1">
              <Star className="w-4 h-4 fill-brand-gold" />
              <span className="text-[11px] uppercase tracking-wider font-semibold">Public Trust</span>
            </div>
            <p className="text-sm font-medium text-white">4.1 / 5 Google Rating</p>
            <p className="text-[11px] text-neutral-400">970+ local reviews</p>
          </div>
        </div>
      </div>
    </section>
  );
};
