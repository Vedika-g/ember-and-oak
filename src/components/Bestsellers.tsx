import React, { useState } from 'react';
import { BESTSELLERS_DATA } from '../data/coffeeData';
import { Sparkles, ArrowRight, Check, Heart } from 'lucide-react';
import { BestsellerItem } from '../types';

interface BestsellersProps {
  onSelectDrink?: (drink: BestsellerItem) => void;
  onOpenReservation: () => void;
}

export const Bestsellers: React.FC<BestsellersProps> = ({ onSelectDrink, onOpenReservation }) => {
  const [favoriteId, setFavoriteId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const toggleFavorite = (id: string, name: string) => {
    if (favoriteId === id) {
      setFavoriteId(null);
      setToastMessage(null);
    } else {
      setFavoriteId(id);
      setToastMessage(`Saved "${name}" to your morning wishlist`);
      setTimeout(() => setToastMessage(null), 3000);
    }
  };

  return (
    <section id="bestsellers" className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Toast alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-espresso-900 text-cream-50 text-xs px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 border border-terracotta-400/40 animate-fade-in">
          <Check className="w-4 h-4 text-terracotta-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-800 text-xs font-medium uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
              <span>House Signatures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
              Our Bestselling Crafts
            </h2>
            <p className="mt-4 text-espresso-600 font-light text-base sm:text-lg leading-relaxed">
              Three beloved drinks that define the Ember &amp; Oak experience—blending traditional Indian botanicals with third-wave extraction rigor.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-espresso-300 text-espresso-800 hover:border-terracotta-500 hover:text-terracotta-600 text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bestsellers 3-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BESTSELLERS_DATA.map((item, index) => {
            const isFav = favoriteId === item.id;
            return (
              <div
                key={item.id}
                className="group relative bg-cream-100/50 rounded-2xl overflow-hidden border border-cream-200/90 hover:border-terracotta-400/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image header with pill & favorite button */}
                <div className="relative aspect-[4/3] overflow-hidden bg-espresso-900">
                  <img
                    src={item.imageUrl}
                    alt={item.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/70 via-transparent to-black/20" />
                  
                  {/* Rank tag */}
                  <div className="absolute top-3 left-3 bg-espresso-950/80 backdrop-blur-md text-cream-100 text-[11px] font-mono px-2.5 py-1 rounded-md border border-cream-100/10">
                    No. 0{index + 1}
                  </div>

                  {/* Favorite button */}
                  <button
                    onClick={() => toggleFavorite(item.id, item.name)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-cream-50/80 hover:bg-cream-50 text-espresso-800 transition-colors shadow-sm"
                    aria-label={`Save ${item.name} to favorites`}
                  >
                    <Heart
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-terracotta-500 text-terracotta-500' : 'text-espresso-700'
                      }`}
                    />
                  </button>

                  {/* Price Tag Overlay */}
                  <div className="absolute bottom-3 right-3 bg-terracotta-600 text-cream-50 font-serif text-lg font-bold px-3 py-1 rounded-lg shadow">
                    ₹{item.priceINR}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-widest text-terracotta-700 font-medium">
                      {item.tagline}
                    </p>
                    <h3 className="font-serif text-2xl font-bold text-espresso-950 group-hover:text-terracotta-600 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-espresso-600 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Estate & process note */}
                  <div className="pt-3 border-t border-cream-200/80 text-[11px] text-espresso-500 space-y-1">
                    <div className="flex items-start gap-1">
                      <span className="font-semibold text-espresso-700">Origin:</span>
                      <span className="line-clamp-1">{item.beansOrigin}</span>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="font-semibold text-espresso-700">Process:</span>
                      <span>{item.process}</span>
                    </div>
                  </div>

                  {/* Tasting notes chips */}
                  <div className="pt-2">
                    <p className="text-[10px] uppercase tracking-widest text-espresso-400 font-semibold mb-2">
                      Tasting Notes
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="px-2.5 py-0.5 rounded-full bg-cream-200/80 text-espresso-800 text-[11px] font-medium"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 mt-auto">
                    <button
                      onClick={() => {
                        if (onSelectDrink) onSelectDrink(item);
                        onOpenReservation();
                      }}
                      className="w-full py-2.5 px-4 rounded-xl bg-espresso-900 hover:bg-terracotta-600 text-cream-50 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Taste at the Bar</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Tasting Flight Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-espresso-900 text-cream-50 flex flex-col md:flex-row items-center justify-between gap-6 border border-espresso-800 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-widest text-terracotta-300 font-semibold">
              Weekend Signature Experience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-cream-50">
              The Western Ghats Tasting Flight (3 Cups)
            </h3>
            <p className="text-xs sm:text-sm text-cream-200/80 max-w-xl">
              Experience the evolution of Indian coffee. A guided 30-minute tasting flight featuring our Washed Arabica, Honey Microlot, and Mysore Espresso Tonic served in handcrafted terracotta cupping vessels.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <div className="text-center md:text-right">
              <span className="text-xs text-cream-300 line-through">₹750</span>
              <p className="font-serif text-2xl font-bold text-cream-50">₹590 <span className="text-xs font-normal text-cream-300">/ person</span></p>
            </div>
            <button
              onClick={onOpenReservation}
              className="px-6 py-3 rounded-full bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              Reserve a Flight
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
