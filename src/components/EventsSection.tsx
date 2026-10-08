// [REFACTORED] EventsSection showcasing verified event capabilities with luxury cards and museum-grade spacing
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-28 sm:py-36 bg-brand-dark relative border-t border-brand-border/60 bg-ambient-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
            <Sparkles className="w-3 h-3 text-brand-gold" />
            <span>Celebrations & Occasions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
            Curated Spaces for Every Auspicious Milestone.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            From traditional Maharashtrian wedding rituals and baby shower ceremonies to lively 
            first birthday milestones and corporate assemblies, Hriday Hall provides the dignified architectural canvas.
          </p>
        </div>

        {/* 6-Grid Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {BUSINESS_DATA.events.map((evt) => (
            <div
              key={evt.id}
              className="bg-brand-surface rounded-2xl border-luxury p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 group shadow-luxury-card"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-xs font-medium text-brand-gold tracking-wide">
                    {evt.devanagari}
                  </span>
                  <span className="text-[10px] uppercase tracking-luxury text-neutral-400 bg-black/40 px-3 py-1 rounded-full border border-brand-border/80">
                    {evt.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white mt-4 font-normal group-hover:text-gold-gradient transition-colors">
                  {evt.title}
                </h3>

                <p className="mt-3.5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-border/60 flex items-center justify-between">
                <a
                  href={`#inquiry`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-neutral-300 hover:text-brand-gold font-semibold transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Consult Availability</span>
                </a>
                <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Event Requirement Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-brand-surface/80 border-luxury flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury-card">
          <div>
            <h4 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Planning a specialized cultural or private family function?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl font-light leading-relaxed">
              We accommodate specific ritual timings, priest setup arrangements, custom catering menus, 
              and outside decorator coordination.
            </p>
          </div>
          <a
            href={BUSINESS_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark text-xs uppercase tracking-luxury font-bold transition-all shadow-gold-subtle hover:scale-102"
          >
            <span>Discuss on WhatsApp</span>
            <span className="text-sm">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
