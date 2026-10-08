// [ADDED] LocationSection with exact verified address, Google Maps directions, and transit accessibility
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-brand-dark relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Location & Accessibility</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight">
            Strategically Situated on Spine Road, Moshi
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
            Positioned in Sant Nagar (Sector 4), Hriday Hall offers straightforward, wide-road access 
            for guests commuting from Moshi, Bhosari, Chakan, Nigdi, and greater Pune.
          </p>
        </div>

        {/* 2-Column Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Venue Address & Route Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="bg-brand-surface rounded-xl border border-brand-border p-6 space-y-5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                  Official Venue Address
                </span>
                <h3 className="font-serif text-xl text-white mt-1">
                  Hriday Banquet Hall
                </h3>
                <p className="text-xs text-neutral-300 mt-2 font-light leading-relaxed">
                  {BUSINESS_DATA.address.fullFormatted}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border space-y-3">
                <div className="flex items-start gap-3">
                  <Compass className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Landmark & Approach</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      Located in PCNTDA Sector 4, immediately accessible from the wide Spine Road corridor.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Operating Timings</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {BUSINESS_DATA.timings.days}: {BUSINESS_DATA.timings.hours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-white">Direct Assistance</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">
                      {BUSINESS_DATA.contact.primaryPhone} / {BUSINESS_DATA.contact.secondaryPhone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=Hriday+Hall+Moshi+Pune`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-dark text-xs uppercase tracking-widest font-semibold transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={BUSINESS_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded border border-neutral-700 hover:border-brand-gold text-neutral-200 text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Travel Radius Assistance */}
            <div className="p-5 rounded-lg bg-brand-surface/50 border border-brand-border">
              <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-semibold">
                Neighborhood Travel Context
              </span>
              <div className="grid grid-cols-2 gap-3 mt-3 text-xs text-neutral-300">
                <div>• Spine Road: ~1 min</div>
                <div>• Bhosari MIDC: ~8 mins</div>
                <div>• Moshi Toll: ~5 mins</div>
                <div>• Chakan Industrial: ~15 mins</div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed + Location Pin Card */}
          <div className="lg:col-span-7 flex flex-col rounded-xl overflow-hidden border border-brand-border bg-brand-card shadow-xl min-h-[380px]">
            {/* Embedded Responsive Map */}
            <div className="relative flex-1 w-full min-h-[360px] bg-neutral-900">
              <iframe
                title="Hriday Hall Moshi Location Map"
                src="https://maps.google.com/maps?q=Hriday+Hall+Sant+Nagar+Moshi+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 filter grayscale-[0.3] contrast-[1.1] opacity-90"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-brand-dark/95 backdrop-blur-md p-3 rounded-lg border border-brand-border shadow-lg max-w-sm">
                <p className="text-xs font-semibold text-white">Hriday Hall (हृदय हॉल)</p>
                <p className="text-[11px] text-neutral-400 mt-0.5">Plot No. 188, Spine Road, Sector 4, Sant Nagar, Moshi</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
