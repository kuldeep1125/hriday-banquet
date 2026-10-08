// [ADDED] EventsSection showcasing verified event capabilities
import React from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Sparkles, Calendar, ArrowUpRight } from 'lucide-react';

export const EventsSection: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-brand-dark relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Celebrations & Occasions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight">
            Curated Spaces for Every Milestone
          </h2>
          <p className="mt-4 text-base text-neutral-300 font-light leading-relaxed">
            From traditional Maharashtrian wedding rituals and baby shower celebrations to lively 
            first birthday milestones and corporate assemblies, Hriday Hall provides the ideal canvas.
          </p>
        </div>

        {/* 6-Grid Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BUSINESS_DATA.events.map((evt) => (
            <div
              key={evt.id}
              className="bg-brand-surface rounded-lg border border-brand-border/70 p-6 flex flex-col justify-between hover:border-brand-gold/60 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-gold tracking-wide">
                    {evt.devanagari}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 bg-brand-card px-2.5 py-1 rounded border border-white/5">
                    {evt.highlight}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white mt-3 group-hover:text-brand-gold transition-colors">
                  {evt.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {evt.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-border/50 flex items-center justify-between">
                <a
                  href={`#inquiry`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-neutral-300 hover:text-brand-gold font-medium transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Enquire for this event</span>
                </a>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Event Requirement Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-brand-card via-brand-surface to-brand-card border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-lg sm:text-xl text-white">
              Planning a specialized cultural or private family function?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
              We accommodate specific ritual timings, priest setup arrangements, custom catering menus, 
              and outside decorator coordination.
            </p>
          </div>
          <a
            href={BUSINESS_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-dark text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
          >
            <span>Discuss on WhatsApp</span>
            <span className="text-sm">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
