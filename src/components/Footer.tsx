// [REFACTORED] Footer component with verified business information, authentic photo strip, local SEO context, and quick links
import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_DATA } from '../data/businessData';
import { MapPin, Phone, MessageSquare, Clock, ArrowUp, Star, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border/80 pt-14 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* [ADDED] Authentic Celebration Moments Photo Strip */}
        <div className="mb-12 pb-10 border-b border-brand-border/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-200">
                Real Moments & Spaces at Hriday Hall
              </span>
            </div>
            <a
              href="#gallery"
              className="text-xs text-brand-gold hover:underline flex items-center gap-1 font-medium group"
            >
              <span>Explore All 10 Full HD Venue Photographs</span>
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {BUSINESS_DATA.gallery.slice(0, 6).map((img) => (
              <a
                key={img.id}
                href="#gallery"
                className="group relative block aspect-square rounded-lg overflow-hidden border border-brand-border/60 bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-gold/60"
                title={img.caption}
              >
                <picture>
                  <source type="image/webp" srcSet={img.thumbSrc} />
                  <img
                    src={img.thumbSrc.replace('.webp', '.jpg')}
                    alt={img.alt}
                    width={240}
                    height={240}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                  <p className="text-[10px] text-white line-clamp-2 leading-tight font-medium">
                    {img.caption}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-border/60">
          
          {/* Col 1: Brand & Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" />
            
            <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-sm pt-2">
              <strong className="text-white font-medium">हृदय हॉल (Hriday Hall)</strong> is an air-conditioned 
              banquet hall and event venue situated on Spine Road, Sant Nagar, Moshi, Pimpri-Chinchwad. Dedicated 
              to genuine hospitality, spotless facilities, and memorable celebrations of up to 300 guests.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-brand-gold font-medium">
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              <span>4.1 Rating on Google (970+ Reviews)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore Venue
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors">The Venue & Philosophy</a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-brand-gold transition-colors">Main Hall & Dining Floor</a>
              </li>
              <li>
                <a href="#events" className="hover:text-brand-gold transition-colors">Weddings & Sakharpuda</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-brand-gold transition-colors">Authentic Gallery</a>
              </li>
              <li>
                <a href="#amenities" className="hover:text-brand-gold transition-colors">Amenities & Parking</a>
              </li>
              <li>
                <a href="#location" className="hover:text-brand-gold transition-colors">Location & Directions</a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-brand-gold transition-colors">Enquire Availability</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Verified Contact & Timings (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Verified Business Address
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_DATA.address.fullFormatted}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>Open {BUSINESS_DATA.timings.days}: {BUSINESS_DATA.timings.hours}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <div className="space-x-3">
                  <a href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`} className="hover:text-brand-gold font-medium">
                    {BUSINESS_DATA.contact.primaryPhone}
                  </a>
                  <span>·</span>
                  <a href={`tel:${BUSINESS_DATA.contact.secondaryPhoneRaw}`} className="hover:text-brand-gold font-medium">
                    {BUSINESS_DATA.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={BUSINESS_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 underline font-medium"
                >
                  Direct WhatsApp Inquiries (+91 91450 83945)
                </a>
              </div>
            </div>

            <div className="pt-2 flex gap-3">
              <a
                href={BUSINESS_DATA.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-wider font-semibold text-brand-gold hover:underline"
              >
                Google Maps Location →
              </a>
              <span className="text-neutral-600">·</span>
              <a
                href={BUSINESS_DATA.ratings.justdial.verifiedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] uppercase tracking-wider font-semibold text-neutral-300 hover:text-brand-gold"
              >
                Justdial Listing →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Hriday Hall (हृदय हॉल). All rights reserved.
          </div>

          <div className="text-center sm:text-right">
            Official digital presence for Hriday Banquet Hall, Moshi, Pimpri-Chinchwad, Pune.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-brand-surface hover:bg-brand-card text-neutral-300 hover:text-white border border-brand-border transition-colors flex items-center gap-1.5"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
