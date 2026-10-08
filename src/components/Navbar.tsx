// [ADDED] Minimal luxury hospitality navigation bar
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

  const navLinks = [
    { label: "The Venue", href: "#about" },
    { label: "Spaces & Layout", href: "#spaces" },
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
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border/60 py-3 shadow-xl'
            : 'bg-gradient-to-b from-brand-dark/90 via-brand-dark/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a href="#" className="focus:outline-none focus:ring-2 focus:ring-brand-gold/50 rounded-sm">
              <BrandLogo variant="light" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs uppercase tracking-widest text-neutral-300 hover:text-brand-gold transition-colors font-medium relative group py-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-300 hover:text-white px-3.5 py-2 rounded border border-neutral-700 hover:border-brand-gold transition-all"
                title="Call Venue"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span className="font-medium">{BUSINESS_DATA.contact.primaryPhone}</span>
              </a>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-bold text-brand-dark bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark hover:opacity-95 px-5 py-2.5 rounded-xl transition-all shadow-gold-subtle hover:scale-102"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Reserve Date</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded text-neutral-300 hover:text-white hover:bg-brand-card focus:outline-none focus:ring-2 focus:ring-brand-gold"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-brand-dark/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn">
          <div className="space-y-4">
            <p className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
              Hriday Banquet Hall · Spine Road, Moshi
            </p>
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif text-neutral-100 hover:text-brand-gold py-2 border-b border-brand-border/40 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-brand-border">
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded border border-neutral-700 text-neutral-200 text-xs uppercase tracking-wider font-medium hover:border-brand-gold"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                Call Venue
              </a>
              <a
                href={BUSINESS_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded bg-emerald-900/60 border border-emerald-700/80 text-emerald-200 text-xs uppercase tracking-wider font-medium"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                WhatsApp
              </a>
            </div>

            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-brand-gold text-brand-dark font-semibold text-xs uppercase tracking-wider shadow-md"
            >
              <CalendarCheck className="w-4 h-4" />
              Check Availability & Pricing
            </a>

            <a
              href={BUSINESS_DATA.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 hover:text-brand-gold pt-1"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              Plot 188, Spine Road, Sector 4, Sant Nagar, Moshi
            </a>
          </div>
        </div>
      )}
    </>
  );
};
