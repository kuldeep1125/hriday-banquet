// [REFACTORED] Main App container with accessibility skip-link and seamless section flow
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SpacesSection } from './components/SpacesSection';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark text-neutral-100 flex flex-col selection:bg-brand-gold selection:text-brand-dark font-sans antialiased">
      {/* [ADDED] Accessible Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-brand-gold text-brand-dark px-4 py-2.5 text-xs font-bold uppercase tracking-widest rounded shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        <Hero />
        <AboutSection />
        <SpacesSection />
        <EventsSection />
        <GallerySection />
        <AmenitiesSection />
        <ReviewsSection />
        <LocationSection />
        <InquirySection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Mobile Contact Bar */}
      <FloatingContactBar />
    </div>
  );
};

export default App;
