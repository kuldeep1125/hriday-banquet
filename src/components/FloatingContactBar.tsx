// [REFACTORED] FloatingContactBar for mobile users with native iOS/Android luxury app feel
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Phone, MessageSquare, Navigation, CalendarCheck } from 'lucide-react';

export const FloatingContactBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-brand-dark/95 backdrop-blur-xl border-t border-brand-gold/15 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-2xl">
      <div className="grid grid-cols-4 gap-2">
        <a
          href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-surface border border-white/10 text-neutral-200 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-brand-gold" />
          <span className="text-[10px] uppercase tracking-luxury font-medium mt-1">Call</span>
        </a>

        <a
          href={BUSINESS_DATA.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400" />
          <span className="text-[10px] uppercase tracking-luxury font-medium mt-1">WhatsApp</span>
        </a>

        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Hriday+Hall+Moshi+Pune"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-surface border border-white/10 text-neutral-200 active:scale-95 transition-transform"
        >
          <Navigation className="w-4 h-4 text-sky-400" />
          <span className="text-[10px] uppercase tracking-luxury font-medium mt-1">Maps</span>
        </a>

        <a
          href="#inquiry"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark active:scale-95 transition-transform shadow-gold-subtle font-bold"
        >
          <CalendarCheck className="w-4 h-4" />
          <span className="text-[10px] uppercase tracking-luxury font-bold mt-1">Reserve</span>
        </a>
      </div>
    </div>
  );
};
