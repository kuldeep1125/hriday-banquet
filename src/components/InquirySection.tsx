// [FIXED] Removed unused icon imports from InquirySection
import React, { useState } from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { CalendarCheck, MessageSquare, Phone, CheckCircle2, Clock, MapPin, ArrowRight } from 'lucide-react';

export const InquirySection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Weddings & Receptions',
    eventDate: '',
    timeSlot: 'Morning Muhurat (7:00 AM – 3:30 PM)',
    guestCount: '100 – 180 Guests (Theatre Seating)',
    cateringPreference: 'Pure Vegetarian Banquet Feast',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const getTodayString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Build structured pre-filled WhatsApp message
  const generateWhatsAppUrl = () => {
    const text = `Hello Hriday Hall Team,

I would like to inquire about booking availability and packages for our event:

*Event Information:*
• Preferred Date: ${formData.eventDate || 'To be decided'}
• Time Slot: ${formData.timeSlot}
• Event Type: ${formData.eventType}
• Expected Guests: ${formData.guestCount}
• Catering Preference: ${formData.cateringPreference}

*Host Contact:*
• Host Name: ${formData.name || 'Not provided'}
• Contact Phone: ${formData.phone || 'Not provided'}
${formData.message ? `• Special Requests: ${formData.message}` : ''}

Please confirm date availability and rental/package details.`;

    return `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="inquiry" className="py-24 sm:py-28 bg-brand-surface relative border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold mb-3">
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Date Inquiries & Booking Consultation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight">
            Reserve Your Auspicious Date
          </h2>
          <p className="mt-3 text-base text-neutral-300 font-light leading-relaxed">
            Connect directly with the venue management team on Spine Road. Confirm date availability, 
            schedule an in-person walkthrough of the hall and dining floor, or receive a transparent quote.
          </p>
        </div>

        {/* 2-Column Inquiry Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Progressive Consultation Form */}
          <div className="lg:col-span-7 bg-brand-card rounded-2xl border border-brand-border p-6 sm:p-8 shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-600/60 text-emerald-400 mx-auto flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-white">Your Inquiry Has Been Prepared</h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto font-light leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name || 'valued host'}</strong>. For immediate 
                  confirmation on auspicious dates, connect directly with our manager on WhatsApp or via direct phone.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row gap-3.5 justify-center">
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-neutral-700 hover:border-brand-gold text-neutral-200 text-xs uppercase tracking-wider font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>Call +91 91450 83945</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => { setSubmitted(false); setCurrentStep(1); }}
                    className="text-xs text-neutral-400 hover:text-white underline"
                  >
                    Modify inquiry details
                  </button>
                </div>
              </div>
            ) : (
              <div>
                {/* Stepper Indicator */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border/60">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                        currentStep === 1 ? 'bg-brand-gold text-brand-dark' : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                      }`}
                    >
                      1
                    </button>
                    <span className={`text-xs font-medium uppercase tracking-wider ${currentStep === 1 ? 'text-white' : 'text-neutral-400'}`}>
                      Event & Date Details
                    </span>
                  </div>

                  <span className="text-neutral-600 text-xs">───</span>

                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${
                        currentStep === 2 ? 'bg-brand-gold text-brand-dark' : 'bg-brand-surface text-neutral-500 border border-neutral-700'
                      }`}
                    >
                      2
                    </span>
                    <span className={`text-xs font-medium uppercase tracking-wider ${currentStep === 2 ? 'text-white' : 'text-neutral-500'}`}>
                      Host Contact & Confirm
                    </span>
                  </div>
                </div>

                {/* Step 1: Event Details */}
                {currentStep === 1 && (
                  <form onSubmit={handleNextStep} className="space-y-5 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Preferred Date */}
                      <div>
                        <label htmlFor="inquiry-date" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                          Preferred Event Date *
                        </label>
                        <input
                          id="inquiry-date"
                          type="date"
                          required
                          min={getTodayString()}
                          value={formData.eventDate}
                          onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                          className="w-full bg-brand-surface border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        />
                      </div>

                      {/* Celebration Type */}
                      <div>
                        <label htmlFor="inquiry-event" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                          Celebration Type *
                        </label>
                        <select
                          id="inquiry-event"
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full bg-brand-surface border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        >
                          <option value="Weddings & Receptions">Weddings & Receptions</option>
                          <option value="Sakharpuda & Engagements">Sakharpuda & Engagements</option>
                          <option value="Birthdays & 1st Milestones">Birthdays & 1st Milestones</option>
                          <option value="Dohale Jevan & Naming Ceremonies">Dohale Jevan & Naming Ceremonies</option>
                          <option value="Anniversaries & Family Get-Togethers">Anniversaries & Family Get-Togethers</option>
                          <option value="Corporate & Social Assemblies">Corporate & Social Assemblies</option>
                        </select>
                      </div>
                    </div>

                    {/* Time Slot / Muhurat */}
                    <div>
                      <label htmlFor="inquiry-slot" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Preferred Time Slot / Muhurat *
                      </label>
                      <select
                        id="inquiry-slot"
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full bg-brand-surface border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      >
                        <option value="Morning Muhurat (7:00 AM – 3:30 PM)">Morning Muhurat Session (7:00 AM – 3:30 PM)</option>
                        <option value="Evening Reception (4:30 PM – 11:00 PM)">Evening Reception Session (4:30 PM – 11:00 PM)</option>
                        <option value="Full Day Exclusive (9:00 AM – 11:00 PM)">Full Day Exclusive Hall Booking</option>
                      </select>
                    </div>

                    {/* Guest Count Range */}
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-2">
                        Estimated Guest Attendance *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {[
                          "50 – 100 Guests (Intimate)",
                          "100 – 180 Guests (Theatre Seating)",
                          "180 – 300 Guests (Floating)"
                        ].map((count) => (
                          <button
                            type="button"
                            key={count}
                            onClick={() => setFormData({ ...formData, guestCount: count })}
                            className={`p-2.5 rounded-lg text-xs font-medium border text-left transition-all ${
                              formData.guestCount === count
                                ? 'bg-brand-gold/15 border-brand-gold text-brand-gold font-semibold'
                                : 'bg-brand-surface border-neutral-700 text-neutral-300 hover:border-neutral-500'
                            }`}
                          >
                            {count}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-md active:scale-98"
                      >
                        <span>Continue to Host Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 2: Host Details & Submission */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="host-fullname" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                          Host Full Name *
                        </label>
                        <input
                          id="host-fullname"
                          type="text"
                          required
                          placeholder="e.g. Anand Kulkarni"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-brand-surface border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="host-mobile" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                          Mobile Number (WhatsApp) *
                        </label>
                        <input
                          id="host-mobile"
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-brand-surface border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        />
                      </div>
                    </div>

                    {/* Catering Preference */}
                    <div>
                      <label htmlFor="catering-pref" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Catering & Food Service Preference
                      </label>
                      <select
                        id="catering-pref"
                        value={formData.cateringPreference}
                        onChange={(e) => setFormData({ ...formData, cateringPreference: e.target.value })}
                        className="w-full bg-brand-surface border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      >
                        <option value="Pure Vegetarian Banquet Feast">In-House Pure Vegetarian Banquet Feast</option>
                        <option value="Multi-Cuisine Vegetarian Buffet">Multi-Cuisine Vegetarian Buffet Spread</option>
                        <option value="Outside Catering Consultation">Outside Catering Policy Consultation</option>
                      </select>
                    </div>

                    {/* Notes */}
                    <div>
                      <label htmlFor="host-notes" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Specific Ritual / Decoration Requirements (Optional)
                      </label>
                      <textarea
                        id="host-notes"
                        rows={3}
                        placeholder="e.g. Mandap requirements, jhula baby shower setup, audio visual setup..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-brand-surface border border-neutral-700 rounded-lg px-3.5 py-2 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-xs text-neutral-400 hover:text-white underline order-2 sm:order-1"
                      >
                        ← Back to event date & guests
                      </button>

                      <div className="flex gap-2.5 w-full sm:w-auto order-1 sm:order-2">
                        <a
                          href={generateWhatsAppUrl()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Check via WhatsApp</span>
                        </a>

                        <button
                          type="submit"
                          className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-brand-gold hover:bg-brand-gold-light text-brand-dark font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                        >
                          <span>Confirm Inquiry</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Direct Venue Contacts & Real Walkthrough Guidance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Phone & WhatsApp Card */}
            <div className="bg-brand-card rounded-2xl border border-brand-border p-6 sm:p-7 shadow-xl space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-brand-gold font-bold">
                  Direct Venue Office
                </span>
                <h3 className="font-serif text-xl text-white mt-1">
                  Speak Directly With Management
                </h3>
                <p className="text-xs text-neutral-300 mt-2 font-light leading-relaxed">
                  Avoid middlemen and broker fees. Call our venue managers directly for instant confirmation on muhurat dates, 
                  special packages, and booking deposits.
                </p>
              </div>

              <div className="pt-4 border-t border-brand-border/60 space-y-3.5">
                <a
                  href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-brand-surface border border-neutral-700 hover:border-brand-gold transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-brand-dark flex items-center justify-center text-brand-gold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Primary Booking Hotline</span>
                      <span className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">{BUSINESS_DATA.contact.primaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs text-brand-gold font-semibold">Call Now →</span>
                </a>

                <a
                  href={`tel:${BUSINESS_DATA.contact.secondaryPhoneRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-lg bg-brand-surface border border-neutral-700 hover:border-brand-gold transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-brand-dark flex items-center justify-center text-brand-gold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">Secondary Booking Line</span>
                      <span className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">{BUSINESS_DATA.contact.secondaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs text-brand-gold font-semibold">Call Now →</span>
                </a>

                <a
                  href={BUSINESS_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-lg bg-emerald-950/60 border border-emerald-800 hover:border-emerald-600 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-emerald-900/80 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-emerald-400 block">Direct WhatsApp Chat</span>
                      <span className="text-sm font-semibold text-white">+91 91450 83945</span>
                    </div>
                  </div>
                  <span className="text-xs text-emerald-400 font-semibold">Chat Now →</span>
                </a>
              </div>
            </div>

            {/* In-Person Visiting Protocol */}
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border space-y-3">
              <div className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-wider font-semibold">
                <Clock className="w-4 h-4" />
                <span>Visiting Hours & Walkthroughs</span>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                The venue office is open <strong className="text-white">Monday through Sunday, 9:00 AM – 11:00 PM</strong>. 
                Family walk-ins and decorator inspections are warmly welcomed at our Spine Road premises.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-neutral-400">
                <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span>Plot No. 188, Spine Road, Sector 4, Sant Nagar, Moshi, Pune</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
