// [FIXED] Navbar with guaranteed single-line phone number (whitespace-nowrap), flex-shrink protection, and seamless responsiveness across all screen sizes
import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { BUSINESS_DATA } from '../data/businessData';
import { Phone, CalendarCheck, Menu, X, MessageSquare, MapPin } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Venue", href: "#about" },
    { label: "Spaces", href: "#spaces" },
    { label: "Celebrations", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Facilities", href: "#amenities" },
    { label: "Location", href: "#location" }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-gold/15 py-3 shadow-xl'
            : 'bg-gradient-to-b from-brand-dark/95 via-brand-dark/50 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            
            {/* Brand Logo (Protected from shrinking) */}
            <a href="#" className="flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 rounded-sm">
              <BrandLogo variant="light" />
            </a>

            {/* Desktop Navigation Links (Responsive gaps to prevent header crowding) */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-7 2xl:gap-8 flex-shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] xl:text-xs uppercase tracking-luxury text-brand-ivory/80 hover:text-brand-gold transition-colors font-medium relative group py-1 whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop & Tablet Actions */}
            <div className="hidden sm:flex items-center gap-2.5 lg:gap-3 xl:gap-4 flex-shrink-0">
              {/* [FIXED] Single-line phone link with whitespace-nowrap and flex-shrink-0 to guarantee it never wraps across lines */}
              <a
                href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                className="hidden md:inline-flex items-center gap-1.5 xl:gap-2 text-[11px] xl:text-xs uppercase tracking-wider text-neutral-300 hover:text-brand-gold px-2.5 xl:px-3 py-2 rounded-lg border border-transparent hover:border-brand-gold/30 transition-all whitespace-nowrap flex-shrink-0"
                title="Call Venue Management Directly"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span className="font-medium tracking-wide whitespace-nowrap">
                  {BUSINESS_DATA.contact.primaryPhone}
                </span>
              </a>

              {/* Primary Gold CTA */}
              <a
                href="#inquiry"
                className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs uppercase tracking-luxury font-bold text-brand-dark bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark hover:opacity-95 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all shadow-gold-subtle hover:scale-102 whitespace-nowrap flex-shrink-0"
              >
                <CalendarCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Check Availability</span>
              </a>
            </div>

            {/* Mobile / Small Tablet Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-brand-card focus:outline-none focus:ring-2 focus:ring-brand-gold flex-shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brand-dark/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn overflow-y-auto">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold">
              Hriday Banquet Hall · Spine Road, Moshi
            </p>
            <div className="flex flex-col space-y-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-neutral-100 hover:text-brand-gold py-2.5 border-b border-brand-border/40 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-brand-gold">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-brand-border/60">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl border border-neutral-700 text-neutral-200 text-xs uppercase tracking-wider font-medium hover:border-brand-gold active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span className="truncate">Call Venue</span>
              </a>
              <a
                href={BUSINESS_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-900/60 border border-emerald-700/80 text-emerald-200 text-xs uppercase tracking-wider font-medium active:scale-98 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>

            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold text-xs uppercase tracking-luxury shadow-gold-subtle active:scale-98 transition-all"
            >
              <CalendarCheck className="w-4 h-4 flex-shrink-0" />
              <span>Check Date Availability</span>
            </a>

            <a
              href={BUSINESS_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 hover:text-brand-gold pt-1"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              <span className="truncate">Plot 188, Spine Road, Sector 4, Moshi</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
