// [FIXED] Removed unused Sparkles import from GallerySection
import React, { useState, useEffect, useCallback } from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2, Calendar } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'hall', label: 'Main Hall' },
    { id: 'stage', label: 'Stages & Decor' },
    { id: 'dining', label: 'Dining & Buffet' },
    { id: 'facade', label: 'Building & Entrance' }
  ];

  const filteredImages = activeCategory === 'all'
    ? BUSINESS_DATA.gallery
    : BUSINESS_DATA.gallery.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  }, [lightboxIndex, filteredImages.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-brand-surface relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-surface/80 text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
              <Camera className="w-3 h-3 text-brand-gold" />
              <span>Authentic Venue Portfolio</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
              Curated Photographic Spaces of Hriday Hall.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            Every frame is captured from the real premises on Spine Road, Moshi. 
            Featuring genuine stage decorations, ceremony seating, and banquet buffet setups with zero stock or synthetic rendering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2.5 pb-8 border-b border-brand-border/60 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-luxury font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold shadow-gold-subtle scale-102'
                  : 'bg-brand-card/70 text-neutral-300 hover:text-white border border-brand-border/80 hover:border-brand-gold/40 hover:bg-brand-card'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* [REFACTORED] Editorial Asymmetric Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-7">
          {filteredImages.map((image, idx) => {
            // Give the first 2 images on the 'all' tab an expansive editorial span
            const isFeatured = activeCategory === 'all' && (idx === 0 || idx === 1);
            const gridColSpan = isFeatured ? 'lg:col-span-6' : 'lg:col-span-4';

            return (
              <div
                key={image.id}
                onClick={() => openLightbox(idx)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border-luxury bg-brand-card shadow-luxury-card flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 ${gridColSpan}`}
              >
                {/* Image Frame with Aspect Preservation */}
                <div className={`relative ${isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3] sm:aspect-[16/11]'} overflow-hidden bg-neutral-900`}>
                  <picture>
                    <source media="(max-width: 640px)" srcSet={image.mobileSrc} type="image/webp" />
                    <source media="(max-width: 1024px)" srcSet={image.tabletSrc} type="image/webp" />
                    <source srcSet={image.desktopSrc} type="image/webp" />
                    <img
                      src={image.fallbackSrc}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out filter brightness-[0.92] group-hover:brightness-100"
                      loading="lazy"
                    />
                  </picture>

                  {/* Hover Overlay with Inspect Icon */}
                  <div className="absolute inset-0 bg-brand-dark/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="p-3.5 rounded-full bg-brand-gold text-brand-dark shadow-gold-glow transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Badges Overlay */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="bg-brand-dark/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-luxury text-neutral-200 font-semibold border border-white/10 shadow-md">
                      {image.category}
                    </span>
                    <span className="bg-brand-gold text-brand-dark px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-luxury uppercase shadow-sm">
                      Master 2K
                    </span>
                  </div>
                </div>

                {/* Caption */}
                <div className="p-5 bg-brand-card/95 border-t border-brand-border/60">
                  <p className="text-xs text-neutral-300 font-light leading-relaxed line-clamp-2">
                    {image.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between z-10 pb-2 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-brand-gold uppercase tracking-widest">
                {filteredImages[lightboxIndex].category}
              </span>
              <span className="text-[10px] bg-neutral-800 text-neutral-300 px-2.5 py-1 rounded border border-white/10">
                Full HD · {filteredImages[lightboxIndex].width}×{filteredImages[lightboxIndex].height}
              </span>
              <span className="text-xs text-neutral-400">
                {lightboxIndex + 1} of {filteredImages.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-900 hover:bg-neutral-800 transition-colors focus-visible:ring-2 focus-visible:ring-brand-gold"
              aria-label="Close fullscreen gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image & Navigation */}
          <div className="relative flex-1 flex items-center justify-center py-4 max-h-[78vh]">
            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/15 transition-all hover:scale-105"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image */}
            <div className="max-w-6xl max-h-full flex items-center justify-center px-4 sm:px-8">
              <picture>
                <source media="(max-width: 640px)" srcSet={filteredImages[lightboxIndex].mobileSrc} type="image/webp" />
                <source media="(max-width: 1024px)" srcSet={filteredImages[lightboxIndex].tabletSrc} type="image/webp" />
                <source srcSet={filteredImages[lightboxIndex].src} type="image/webp" />
                <img
                  src={filteredImages[lightboxIndex].fallbackSrc}
                  alt={filteredImages[lightboxIndex].alt}
                  width={filteredImages[lightboxIndex].width}
                  height={filteredImages[lightboxIndex].height}
                  className="max-h-[74vh] max-w-full object-contain rounded-lg shadow-2xl"
                />
              </picture>
            </div>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/70 hover:bg-black/95 text-white border border-white/15 transition-all hover:scale-105"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Caption Footer */}
          <div className="max-w-3xl mx-auto text-center z-10 pt-3 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <p className="text-xs sm:text-sm text-neutral-200 font-light">
                {filteredImages[lightboxIndex].caption}
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Hriday Banquet Hall · Spine Road, Sant Nagar, Moshi, Pune 412105
              </p>
            </div>

            <a
              href="#inquiry"
              onClick={closeLightbox}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-dark text-xs uppercase tracking-wider font-bold transition-colors"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Inquire for This Space</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
