import React, { useState } from 'react';
import { CAFE_INFO } from '../data/coffeeData';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  Copy,
  Check,
  Wifi,
  Dog,
  Coffee,
  Bike,
  Sparkles,
  Calendar,
} from 'lucide-react';

interface VisitUsProps {
  onOpenReservation: () => void;
}

export const VisitUs: React.FC<VisitUsProps> = ({ onOpenReservation }) => {
  const [copied, setCopied] = useState(false);

  const copyAddressToClipboard = () => {
    const fullAddress = `${CAFE_INFO.address.street}, ${CAFE_INFO.address.locality}, ${CAFE_INFO.address.city}, ${CAFE_INFO.address.state} ${CAFE_INFO.address.pincode}`;
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getGoogleMapsDirectionsUrl = () => {
    // Open directions to Indiranagar 12th Main Bengaluru
    return 'https://maps.google.com/?q=12th+Main+Road+Indiranagar+Bengaluru+560038';
  };

  const amenityIcons: Record<string, React.ElementType> = {
    'High-Speed Fiber WiFi': Wifi,
    'Pet-Friendly Patio': Dog,
    'Artisan Pour-Over Bar': Coffee,
    'Filtered Rainwater Tap': Sparkles,
    'Bicycle Stalls & Metro Access': Bike,
  };

  return (
    <section id="visit" className="py-24 bg-cream-100/70 border-t border-cream-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-800 text-xs font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5 text-olive-600" />
            <span>Find Our Sanctuary</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            Visit Us in Indiranagar
          </h2>
          <p className="mt-4 text-espresso-600 font-light text-base sm:text-lg leading-relaxed">
            Housed beneath towering raintrees on 12th Main, our space is designed for morning solitude, 
            creative conversations, and unhurried coffee rituals.
          </p>
        </div>

        {/* Main Grid: Details (Left) + Interactive Map & Experience (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Address, Hours, Contact, Amenities */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200/90 shadow-sm space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-terracotta-100 flex items-center justify-center text-terracotta-700 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-[11px] uppercase tracking-wider text-terracotta-700 font-bold">
                      Location &amp; Coordinates
                    </p>
                    <h3 className="font-serif text-lg font-bold text-espresso-950">
                      {CAFE_INFO.address.street}
                    </h3>
                    <p className="text-sm text-espresso-700">
                      {CAFE_INFO.address.locality}, {CAFE_INFO.address.city}, {CAFE_INFO.address.state} — {CAFE_INFO.address.pincode}
                    </p>
                    <p className="text-xs text-espresso-500 italic pt-1">
                      {CAFE_INFO.address.landmark}
                    </p>
                  </div>
                </div>

                <button
                  onClick={copyAddressToClipboard}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cream-100 hover:bg-cream-200 text-espresso-700 text-xs font-medium transition-colors shrink-0"
                  title="Copy address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-olive-600" />
                      <span className="text-olive-700 font-medium">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-espresso-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={getGoogleMapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-espresso-900 hover:bg-terracotta-600 text-cream-50 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>

            {/* Hours & Schedule Card */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-olive-100 flex items-center justify-center text-olive-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-olive-800 font-bold">
                      Opening Hours
                    </p>
                    <h3 className="font-serif text-lg font-bold text-espresso-950">
                      Slow Mornings to Warm Nights
                    </h3>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-olive-100 text-olive-800 text-[11px] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-olive-500 animate-pulse" />
                  <span>Open Now</span>
                </div>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-espresso-800">
                {CAFE_INFO.hours.map((h, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-cream-200/60 last:border-0 gap-1">
                    <span className="font-medium text-espresso-900">{h.days}</span>
                    <div className="text-right">
                      <span className="font-semibold text-terracotta-700">{h.openTime} – {h.closeTime}</span>
                      <span className="block text-[11px] text-espresso-500">{h.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Contact links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${CAFE_INFO.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="p-4 rounded-xl bg-cream-50 border border-cream-200 hover:border-terracotta-400 hover:shadow-sm transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-cream-200 flex items-center justify-center text-espresso-700 group-hover:bg-terracotta-100 group-hover:text-terracotta-700 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-espresso-400 font-semibold">Phone Inquiries</p>
                  <p className="text-xs font-semibold text-espresso-900 group-hover:text-terracotta-600 transition-colors">
                    {CAFE_INFO.contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${CAFE_INFO.contact.email}`}
                className="p-4 rounded-xl bg-cream-50 border border-cream-200 hover:border-terracotta-400 hover:shadow-sm transition-all flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-cream-200 flex items-center justify-center text-espresso-700 group-hover:bg-terracotta-100 group-hover:text-terracotta-700 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-espresso-400 font-semibold">Email Desk</p>
                  <p className="text-xs font-semibold text-espresso-900 group-hover:text-terracotta-600 transition-colors">
                    {CAFE_INFO.contact.email}
                  </p>
                </div>
              </a>
            </div>

            {/* Amenities Checklist */}
            <div className="p-6 rounded-2xl bg-cream-50/80 border border-cream-200 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-espresso-500 font-bold">
                Guest Amenities &amp; Atmosphere
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {CAFE_INFO.amenities.map((item, i) => {
                  const Icon = amenityIcons[item.title] || Check;
                  return (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="p-1 rounded bg-cream-200 text-espresso-800 shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-terracotta-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-espresso-900">{item.title}</p>
                        <p className="text-[11px] text-espresso-500 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Custom Visual Map & Transit Guide */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Custom Interactive Map Card Placeholder */}
            <div className="rounded-3xl overflow-hidden bg-espresso-900 border border-espresso-800 text-cream-50 shadow-xl relative">
              
              {/* Map Illustration Header */}
              <div className="p-6 bg-espresso-950/90 border-b border-espresso-800 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-terracotta-300 font-mono">
                    Indiranagar Transit Hub
                  </span>
                  <h3 className="font-serif text-xl font-bold text-cream-50">
                    Neighborhood Wayfinder
                  </h3>
                </div>
                <span className="text-xs text-cream-300 bg-cream-50/10 px-3 py-1 rounded-full border border-cream-100/10">
                  HAL 2nd Stage
                </span>
              </div>

              {/* Styled Vector Map Viewport */}
              <div className="relative aspect-[16/11] bg-[#1E1712] overflow-hidden p-6 flex flex-col justify-between">
                
                {/* SVG Street Grid Lines */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4A373" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Major Avenue: 100ft Road */}
                  <line x1="20%" y1="0%" x2="80%" y2="100%" stroke="#C25E43" strokeWidth="4" strokeDasharray="6,4" />
                  {/* 12th Main crossroad */}
                  <line x1="10%" y1="70%" x2="90%" y2="20%" stroke="#E5EADF" strokeWidth="3" />
                  {/* Park boundary */}
                  <rect x="55%" y="15%" width="30%" height="25%" rx="12" fill="#526A44" opacity="0.3" />
                </svg>

                {/* Simulated Map Markers */}
                <div className="relative z-10 space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-espresso-950/80 backdrop-blur-md border border-cream-100/10 text-xs">
                    <span className="w-2 h-2 rounded-full bg-olive-400" />
                    <span className="text-cream-200">Indiranagar Metro Station (Purple Line) · 450m</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-espresso-950/80 backdrop-blur-md border border-cream-100/10 text-xs">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-cream-200">100 Feet Road Food Corridor · 200m</span>
                  </div>
                </div>

                {/* Center Cafe Pulsing Marker */}
                <div className="relative z-10 self-center my-auto flex flex-col items-center">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 rounded-full bg-terracotta-500/30 animate-ping" />
                    <div className="w-11 h-11 rounded-full bg-terracotta-600 border-2 border-cream-50 flex items-center justify-center text-cream-50 shadow-lg">
                      <Coffee className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-2 px-3 py-1 rounded-md bg-espresso-950/90 text-cream-50 text-xs font-serif font-bold border border-terracotta-400/40 shadow-md">
                    Ember &amp; Oak Coffee House
                  </div>
                </div>

                {/* Bottom Transit notes */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-cream-300 bg-espresso-950/80 p-3 rounded-xl border border-cream-100/10">
                  <span>🚗 Valet available Fri–Sun from 5 PM</span>
                  <span>🚲 Secure outdoor bike lock ring</span>
                </div>

              </div>

              {/* Map Footer Action */}
              <div className="p-4 bg-espresso-950 flex items-center justify-between">
                <span className="text-xs text-cream-300/80">
                  Navigation coordinates: 12.9716° N, 77.6412° E
                </span>
                <a
                  href={getGoogleMapsDirectionsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-terracotta-300 hover:text-terracotta-200 flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <Navigation className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

            {/* Slow Morning Seating Notice */}
            <div className="p-6 rounded-2xl bg-cream-200/50 border border-cream-300 space-y-3">
              <h4 className="font-serif text-lg font-bold text-espresso-950">
                Seating &amp; Slow Morning Etiquette
              </h4>
              <p className="text-xs text-espresso-700 leading-relaxed">
                We believe in preserving our café as a peaceful third space. 
                Our communal oak tables feature power outlets and high-speed fiber for deep work on weekday mornings. 
                On weekends, we transition into a digital-light sanctuary to foster conversation and slow coffee enjoyment.
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenReservation}
                  className="text-xs font-semibold uppercase tracking-wider text-terracotta-700 hover:text-terracotta-800 underline"
                >
                  Reserve a communal table or tasting flight &rarr;
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
