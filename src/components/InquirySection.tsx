// [REFACTORED] InquirySection - Streamlined consultation form with date picker, celebration pills, guest count pills, response time reassurance, and direct contact alternatives
import React, { useState } from 'react';
import { BUSINESS_DATA } from '../data/businessData';
import { CalendarCheck, MessageSquare, Phone, CheckCircle2, Clock, MapPin, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

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

I would like to inquire about booking availability and packages for our celebration:

*Event Details:*
• Preferred Date: ${formData.eventDate || 'To be decided'}
• Time Slot / Muhurat: ${formData.timeSlot}
• Celebration Type: ${formData.eventType}
• Expected Guests: ${formData.guestCount}
• Catering Preference: ${formData.cateringPreference}

*Host Contact:*
• Host Name: ${formData.name || 'Not provided'}
• Contact Phone: ${formData.phone || 'Not provided'}
${formData.message ? `• Additional Notes: ${formData.message}` : ''}

Please confirm date availability and rental/package details.`;

    return `https://wa.me/${BUSINESS_DATA.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="inquiry" className="py-28 sm:py-36 bg-brand-surface relative border-t border-brand-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/25 bg-brand-card text-brand-gold text-[10px] uppercase tracking-luxury font-semibold mb-4">
            <CalendarCheck className="w-3 h-3 text-brand-gold" />
            <span>Date Availability & Private Walkthrough</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-brand-ivory tracking-tight leading-[1.15]">
            Plan Your Auspicious Celebration.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Connect directly with the venue management team on Spine Road. Confirm auspicious date availability, 
            schedule an in-person walkthrough of the hall and dining floor, or receive an exact transparent quotation.
          </p>
        </div>

        {/* 2-Column Inquiry Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Progressive Consultation Form */}
          <div className="lg:col-span-7 bg-brand-card rounded-2xl border-luxury p-8 sm:p-10 shadow-luxury-card">
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
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-transform active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp Now</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-700 hover:border-brand-gold text-neutral-200 text-xs uppercase tracking-wider font-semibold transition-colors"
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
                          className="w-full bg-brand-surface border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        />
                        <p className="text-[10px] text-neutral-400 mt-1">We verify availability across morning & evening muhurats</p>
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
                          className="w-full bg-brand-surface border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        >
                          <option value="Weddings & Receptions">Weddings & Receptions (लग्नसमारंभ)</option>
                          <option value="Sakharpuda & Engagements">Sakharpuda & Engagements (साखरपुडा)</option>
                          <option value="Pre-Wedding Rituals (Haldi/Sangeet)">Pre-Wedding Rituals (हळदी, संगीत, मेहंदी)</option>
                          <option value="Naming Ceremony & Dohale Jevan">Naming Ceremony & Dohale Jevan (बारसे / डोहाळे जेवण)</option>
                          <option value="Milestone Birthdays & Anniversaries">Milestone Birthdays & Anniversaries (वाढदिवस व वर्धापनदिन)</option>
                          <option value="Corporate Meetings & Seminars">Corporate Meetings & Seminars (कॉर्पोरेट कार्यक्रम)</option>
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
                        className="w-full bg-brand-surface border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
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
                            className={`p-3 rounded-xl text-xs font-medium border text-left transition-all ${
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

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-[11px] text-neutral-400 font-light flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-brand-gold" />
                        <span>Typically response in 15–30 mins</span>
                      </span>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-gold-subtle hover:scale-102"
                      >
                        <span>Continue to Host Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Step 2: Host Contact */}
                {currentStep === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-5 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="inquiry-name" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                          Host Full Name *
                        </label>
                        <input
                          id="inquiry-name"
                          type="text"
                          required
                          placeholder="e.g. Rahul Deshmukh"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-brand-surface border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="inquiry-phone" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                          WhatsApp / Mobile Phone *
                        </label>
                        <input
                          id="inquiry-phone"
                          type="tel"
                          required
                          placeholder="e.g. 98220 XXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-brand-surface border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                        />
                      </div>
                    </div>

                    {/* Catering Preference */}
                    <div>
                      <label htmlFor="inquiry-catering" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Catering Arrangement
                      </label>
                      <select
                        id="inquiry-catering"
                        value={formData.cateringPreference}
                        onChange={(e) => setFormData({ ...formData, cateringPreference: e.target.value })}
                        className="w-full bg-brand-surface border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      >
                        <option value="Pure Vegetarian Banquet Feast">Pure Vegetarian Banquet Feast (Hall Menu)</option>
                        <option value="Self / Outside Caterer Preferred">Self / Outside Caterer (Pantry Access)</option>
                        <option value="High Tea & Snacks Only">High Tea & Snacks Only</option>
                      </select>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label htmlFor="inquiry-msg" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                        Special Requests or Questions (Optional)
                      </label>
                      <textarea
                        id="inquiry-msg"
                        rows={3}
                        placeholder="e.g. Mandap decoration preferences, priest muhurat timings, sound requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-brand-surface border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setCurrentStep(1)}
                        className="text-xs text-neutral-400 hover:text-white underline"
                      >
                        ← Back to event details
                      </button>

                      <div className="flex gap-3">
                        <button
                          type="submit"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark text-brand-dark font-bold text-xs uppercase tracking-wider transition-all shadow-gold-subtle hover:scale-102"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Request Availability</span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Direct Venue Contacts & Reassurance */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Contact Card */}
            <div className="bg-brand-card rounded-2xl border-luxury p-8 space-y-6 shadow-luxury-card">
              <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block">
                Direct Venue Coordination
              </span>
              <h3 className="font-serif text-2xl text-white font-normal">
                Prefer an Immediate Direct Answer?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Connect directly with the venue coordinator on Spine Road. Receive prompt confirmation regarding 
                dates, per-plate menus, and hall setup options.
              </p>

              {/* Direct Buttons */}
              <div className="space-y-3 pt-2">
                <a
                  href={BUSINESS_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Inquiries</span>
                </a>

                <a
                  href={`tel:${BUSINESS_DATA.contact.primaryPhoneRaw}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-brand-border/80 hover:border-brand-gold/60 bg-brand-surface text-neutral-200 hover:text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-gold" />
                  <span>Call +91 91450 83945</span>
                </a>

                <a
                  href={BUSINESS_DATA.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] text-neutral-300 hover:text-white text-xs uppercase tracking-wider font-light transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  <span>Visit Us on Spine Road, Moshi</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Reassurance */}
            <div className="p-6 rounded-2xl bg-brand-card/70 border border-brand-border/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-white uppercase tracking-wider">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>Operating Timings & Walkthroughs</span>
              </div>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Open {BUSINESS_DATA.timings.days} from <strong className="text-white font-medium">{BUSINESS_DATA.timings.hours}</strong>. 
                In-person walkthroughs of both the main hall and dining floor are welcomed daily.
              </p>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                <span>We typically respond within 15–30 minutes</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
