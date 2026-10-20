import React from 'react';
import { ArrowDownRight, Compass, Sparkles, MapPin, Coffee } from 'lucide-react';

interface HeroProps {
  onOpenQuiz: () => void;
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuiz, onOpenReservation }) => {
  return (
    <section id="home" className="relative bg-espresso-950 text-cream-50 min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image with refined cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85"
          alt="Atmospheric wooden specialty coffee bar with warm lighting, ceramic cups, and steam"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 hover:scale-100 opacity-40 filter contrast-110"
        />
        {/* Editorial gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-950 via-espresso-950/85 to-espresso-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-950 via-transparent to-espresso-950/40" />
        {/* Subtle texture grid */}
        <div className="absolute inset-0 bg-noise-subtle opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy (Left column) */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cream-50/10 border border-cream-100/20 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-terracotta-400 animate-ping" />
              <span className="text-xs uppercase tracking-widest-xl text-cream-200 font-medium">
                Artisanal Specialty Coffee · Indiranagar
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-50 leading-[1.08]">
              Slow Mornings. <br />
              <span className="italic font-normal text-terracotta-300 font-display">
                Better Coffee.
              </span>
            </h1>

            {/* Narrative subhead */}
            <p className="max-w-2xl text-base sm:text-xl text-cream-200/90 font-light leading-relaxed">
              Tucked under the rain trees of Indiranagar, Ember &amp; Oak is a sanctuary for thoughtful coffee. 
              We celebrate single-estate, shade-grown Arabica from Karnataka&apos;s Western Ghats, slow hand-poured brews, 
              and viennoiserie baked fresh at dawn.
            </p>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-5">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-medium text-sm tracking-wide transition-all duration-200 shadow-lg hover:shadow-terracotta-500/30 btn-sheen group"
              >
                <span>Explore Our Menu</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#visit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-100 border border-cream-200/25 backdrop-blur-sm font-medium text-sm tracking-wide transition-all duration-200"
              >
                <MapPin className="w-4 h-4 text-terracotta-300" />
                <span>Find Us</span>
              </a>

              <button
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs uppercase tracking-wider text-cream-300 hover:text-cream-50 hover:underline transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5 text-terracotta-400" />
                <span>Find Your Roast Match</span>
              </button>
            </div>

            {/* Micro stats / trust pillars */}
            <div className="pt-8 sm:pt-10 border-t border-cream-100/10 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xl">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-cream-50">1,400m+</p>
                <p className="text-xs text-cream-300/80 uppercase tracking-wider mt-1">High-Altitude Estates</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-cream-50">100%</p>
                <p className="text-xs text-cream-300/80 uppercase tracking-wider mt-1">Shade-Grown Arabica</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="font-serif text-2xl sm:text-3xl font-semibold text-cream-50">48-Hour</p>
                <p className="text-xs text-cream-300/80 uppercase tracking-wider mt-1">Laminated Brioche</p>
              </div>
            </div>

          </div>

          {/* Right column editorial visual card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative p-6 rounded-2xl bg-espresso-900/80 backdrop-blur-md border border-cream-100/15 shadow-2xl space-y-5">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between border-b border-cream-100/10 pb-4">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-terracotta-300 font-semibold">
                  <Coffee className="w-4 h-4" />
                  <span>Roast of the Week</span>
                </div>
                <span className="text-[11px] bg-terracotta-500/20 text-terracotta-200 border border-terracotta-400/30 px-2 py-0.5 rounded-full">
                  Batch #29
                </span>
              </div>

              {/* Card visual */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
                  alt="Barista brewing manual pour over coffee in a glass carafe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-cream-100">
                  <p className="text-xs uppercase tracking-wider text-terracotta-300 font-medium">Single Origin Microlot</p>
                  <p className="font-serif text-lg font-bold text-cream-50">Chikmagalur Red Honey</p>
                </div>
              </div>

              {/* Card details */}
              <div className="space-y-3 text-xs text-cream-200/90">
                <div className="flex justify-between py-1 border-b border-cream-100/5">
                  <span className="text-cream-400">Estate</span>
                  <span className="font-medium text-cream-100">Attikan Estate, BR Hills</span>
                </div>
                <div className="flex justify-between py-1 border-b border-cream-100/5">
                  <span className="text-cream-400">Tasting Notes</span>
                  <span className="font-medium text-cream-100">Blood Orange, Wild Honey, Cacao</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-cream-400">Best Brewed As</span>
                  <span className="font-medium text-terracotta-300">V60 Pour-Over / Cortado</span>
                </div>
              </div>

              {/* Reservation CTA inside card */}
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 px-4 rounded-lg bg-cream-50 hover:bg-cream-100 text-espresso-950 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Compass className="w-3.5 h-3.5 text-terracotta-600" />
                <span>Book a Tasting Flight</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom atmospheric scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 text-cream-300/60 hover:text-cream-200 transition-colors">
        <span className="text-[10px] uppercase tracking-widest font-mono">Scroll to explore</span>
        <div className="w-5 h-8 rounded-full border border-cream-300/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 rounded-full bg-terracotta-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
