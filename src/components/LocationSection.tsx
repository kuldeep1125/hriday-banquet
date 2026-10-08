// [REFACTORED] LocationSection with exact verified address, Google Maps directions, and luxury museum-grade layout
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-28 sm:py-36 bg-brand-dark relative border-t border-brand-border/60 bg-ambient-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
            <MapPin className="w-3 h-3 text-brand-gold" />
            <span>Location & Accessibility</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
            Strategically Situated on Spine Road, Moshi.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Positioned in Sant Nagar (Sector 4), Hriday Hall offers straightforward, wide-road access 
            for guests commuting from Moshi, Bhosari, Chakan, Nigdi, and greater Pune.
          </p>
        </div>

        {/* 2-Column Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Venue Address & Route Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-brand-surface rounded-2xl border-luxury p-8 space-y-6 shadow-luxury-card">
              <div>
                <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block">
                  Official Venue Address
                </span>
                <h3 className="font-serif text-2xl text-white mt-1.5 font-normal">
                  Hriday Banquet Hall
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 font-light leading-relaxed">
                  {BUSINESS_DATA.address.fullFormatted}
                </p>
              </div>

              <div className="pt-6 border-t border-brand-border/60 space-y-4">
                <div className="flex items-start gap-3.5">
                  <Compass className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Landmark & Approach</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 font-light leading-relaxed">
                      Located in PCNTDA Sector 4, immediately accessible from the wide Spine Road corridor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Operating Timings</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 font-light leading-relaxed">
                      {BUSINESS_DATA.timings.days}: {BUSINESS_DATA.timings.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white uppercase tracking-wider">Direct Assistance</h4>
                    <p className="text-xs text-neutral-400 mt-0.5 font-light leading-relaxed">
                      {BUSINESS_DATA.contact.primaryPhone} / {BUSINESS_DATA.contact.secondaryPhone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=Hriday+Hall+Moshi+Pune`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark text-xs uppercase tracking-luxury font-bold transition-all shadow-gold-subtle hover:scale-102"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={BUSINESS_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-white/15 hover:border-brand-gold/40 bg-white/[0.03] text-neutral-200 hover:text-white text-xs uppercase tracking-luxury font-medium transition-all"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Travel Radius Assistance */}
            <div className="p-6 rounded-2xl bg-brand-surface/70 border-luxury">
              <span className="text-[10px] uppercase tracking-luxury text-neutral-400 font-semibold block mb-2">
                Neighborhood Travel Context
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs text-neutral-300 font-light">
                <div>• Spine Road: ~1 min</div>
                <div>• Bhosari MIDC: ~8 mins</div>
                <div>• Moshi Toll: ~5 mins</div>
                <div>• Chakan Industrial: ~15 mins</div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed + Location Pin Card */}
          <div className="lg:col-span-7 flex flex-col rounded-2xl overflow-hidden border-luxury bg-brand-card shadow-luxury-card min-h-[420px]">
            <div className="relative flex-1 w-full min-h-[400px] bg-neutral-900">
              <iframe
                title="Hriday Hall Moshi Location Map"
                src="https://maps.google.com/maps?q=Hriday+Hall+Sant+Nagar+Moshi+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 filter grayscale-[0.25] contrast-[1.1] opacity-90"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-brand-dark/95 backdrop-blur-md p-4 rounded-xl border border-brand-border/80 shadow-2xl max-w-sm">
                <p className="text-xs font-semibold text-white">Hriday Hall (हृदय हॉल)</p>
                <p className="text-[11px] text-neutral-400 mt-1 font-light leading-relaxed">Plot No. 188, Spine Road, Sector 4, Sant Nagar, Moshi, Pune 412105</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
