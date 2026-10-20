import React, { useState } from 'react';
import { X, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { MENU_ITEMS } from '../data/coffeeData';
import { MenuItem } from '../types';

interface RoastQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenReservation: () => void;
}

export const RoastQuizModal: React.FC<RoastQuizModalProps> = ({
  isOpen,
  onClose,
  onOpenReservation,
}) => {
  const [step, setStep] = useState<number>(1);
  const [temperature, setTemperature] = useState<'hot' | 'iced' | 'bold'>('hot');
  const [flavor, setFlavor] = useState<'citrus' | 'chocolate' | 'spiced' | 'floral'>('chocolate');
  const [milk, setMilk] = useState<'oat' | 'dairy' | 'black'>('oat');
  const [matchedDrink, setMatchedDrink] = useState<MenuItem | null>(null);

  if (!isOpen) return null;

  const handleComputeMatch = () => {
    // Recommendation logic based on choices
    let matchId = 'smoked-jaggery-cortado-menu';

    if (temperature === 'iced') {
      if (flavor === 'citrus') matchId = 'mysuru-espresso-tonic-menu';
      else if (flavor === 'spiced') matchId = 'iced-oat-horchata-latte';
      else if (milk === 'black') matchId = 'shakerato-al-limone';
      else matchId = 'vanilla-bean-cold-cloud-menu';
    } else if (temperature === 'bold' || milk === 'black') {
      if (flavor === 'floral' || flavor === 'citrus') matchId = 'pour-over-v60';
      else if (flavor === 'spiced') matchId = 'darjeeling-first-flush';
      else matchId = 'double-espresso';
    } else {
      // Hot with milk
      if (flavor === 'spiced') matchId = 'cardamom-rose-latte';
      else if (flavor === 'chocolate') matchId = 'roasted-sesame-mocha';
      else matchId = 'ember-flat-white';
    }

    const found = MENU_ITEMS.find((item) => item.id === matchId) || MENU_ITEMS[0];
    setMatchedDrink(found);
    setStep(4); // Result step
  };

  const handleReset = () => {
    setStep(1);
    setMatchedDrink(null);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quiz-modal-title"
    >
      <div className="bg-cream-50 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-cream-300 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-cream-200/60 hover:bg-cream-200 text-espresso-700 transition-colors"
          aria-label="Close quiz"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step Indicator */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-7 h-7 rounded-full bg-terracotta-100 text-terracotta-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-terracotta-600 font-bold block">
              Palate Profiler
            </span>
            <span className="text-xs text-espresso-500 font-medium">
              {step <= 3 ? `Step ${step} of 3` : 'Your Perfect Match Found'}
            </span>
          </div>
        </div>

        {/* Step 1: Temperature & Vibe */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h3 id="quiz-modal-title" className="font-serif text-2xl font-bold text-espresso-950">
                What temperature suits your mood today?
              </h3>
              <p className="text-xs text-espresso-600">
                Are you looking for comforting warmth or a crisp refresher for Bengaluru&apos;s afternoon?
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: 'hot', title: 'Warm & Steaming', desc: 'Silky microfoam or a hot pourover' },
                { id: 'iced', title: 'Chilled & Effervescent', desc: 'Cold brew, espresso tonic, or iced cloud' },
                { id: 'bold', title: 'Short & Concentrated', desc: 'Pure unadulterated espresso punch' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setTemperature(opt.id as any)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                    temperature === opt.id
                      ? 'border-terracotta-500 bg-terracotta-50/80 ring-1 ring-terracotta-400'
                      : 'border-cream-300 bg-cream-100 hover:bg-cream-200/70'
                  }`}
                >
                  <div>
                    <p className="font-serif font-bold text-sm text-espresso-950">{opt.title}</p>
                    <p className="text-xs text-espresso-600">{opt.desc}</p>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      temperature === opt.id ? 'border-terracotta-600 bg-terracotta-600' : 'border-espresso-300'
                    }`}
                  >
                    {temperature === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-cream-50" />}
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full py-3 rounded-xl bg-espresso-900 hover:bg-terracotta-600 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <span>Next: Flavor Notes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Step 2: Flavor Notes */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-espresso-950">
                Which flavor direction entices you?
              </h3>
              <p className="text-xs text-espresso-600">
                Our roastery crafts profiles ranging from wild floral acidity to deep dark chocolate.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'chocolate', title: 'Deep Chocolate & Toffee', desc: 'Caramel, cacao nibs, roasted hazelnut' },
                { id: 'citrus', title: 'Sparkling Citrus & Fruit', desc: 'Blood orange, gooseberry, stone fruit' },
                { id: 'spiced', title: 'Cardamom & Jaggery Spice', desc: 'Smoked cinnamon, molasses, rosewater' },
                { id: 'floral', title: 'Delicate Floral & Jasmine', desc: 'Tea-like clarity, honeysuckle, apricot' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFlavor(opt.id as any)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    flavor === opt.id
                      ? 'border-terracotta-500 bg-terracotta-50/80 ring-1 ring-terracotta-400'
                      : 'border-cream-300 bg-cream-100 hover:bg-cream-200/70'
                  }`}
                >
                  <p className="font-serif font-bold text-xs text-espresso-950">{opt.title}</p>
                  <p className="text-[11px] text-espresso-600 mt-0.5 leading-snug">{opt.desc}</p>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl border border-cream-300 text-espresso-700 text-xs font-semibold uppercase tracking-wider hover:bg-cream-100"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 py-3 rounded-xl bg-espresso-900 hover:bg-terracotta-600 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Next: Milk Preference</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Milk & Density */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-espresso-950">
                How do you take your coffee?
              </h3>
              <p className="text-xs text-espresso-600">
                Select your preferred milk texture or clean black clarity.
              </p>
            </div>

            <div className="space-y-3">
              {[
                { id: 'oat', title: 'Steamed Barista Oat Milk', desc: 'Creamy, nutty, and plant-based' },
                { id: 'dairy', title: 'Farm-Fresh Whole Milk', desc: 'Silky microtexture with natural sweetness' },
                { id: 'black', title: 'Pure Black (No Milk)', desc: 'Showcase estate terroir and roast character' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setMilk(opt.id as any)}
                  className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                    milk === opt.id
                      ? 'border-terracotta-500 bg-terracotta-50/80 ring-1 ring-terracotta-400'
                      : 'border-cream-300 bg-cream-100 hover:bg-cream-200/70'
                  }`}
                >
                  <div>
                    <p className="font-serif font-bold text-sm text-espresso-950">{opt.title}</p>
                    <p className="text-xs text-espresso-600">{opt.desc}</p>
                  </div>
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                      milk === opt.id ? 'border-terracotta-600 bg-terracotta-600' : 'border-espresso-300'
                    }`}
                  >
                    {milk === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-cream-50" />}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 py-3 rounded-xl border border-cream-300 text-espresso-700 text-xs font-semibold uppercase tracking-wider hover:bg-cream-100"
              >
                Back
              </button>
              <button
                onClick={handleComputeMatch}
                className="w-2/3 py-3 rounded-xl bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Reveal My Match</span>
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Result Match */}
        {step === 4 && matchedDrink && (
          <div className="space-y-6 animate-fade-in text-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-800 text-xs font-bold uppercase tracking-wider">
              <span>98% Palate Harmony</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-3xl font-bold text-espresso-950">
                {matchedDrink.name}
              </h3>
              <p className="font-serif text-2xl font-bold text-terracotta-600">
                ₹{matchedDrink.priceINR}
              </p>
              <p className="text-xs sm:text-sm text-espresso-600 max-w-sm mx-auto leading-relaxed">
                {matchedDrink.description}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 text-left space-y-2">
              <div className="flex justify-between text-xs border-b border-cream-200 pb-1.5">
                <span className="text-espresso-500">Origin / Harvest</span>
                <span className="font-medium text-espresso-900">{matchedDrink.originOrProcess || 'Estate Microlot'}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-espresso-500">Cupping Notes</span>
                <span className="font-medium text-terracotta-700">{matchedDrink.tastingNotes.join(' · ')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenReservation();
                }}
                className="flex-1 py-3 rounded-xl bg-espresso-900 hover:bg-terracotta-600 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Reserve Bar Seat for This Drink
              </button>
              <button
                onClick={handleReset}
                className="py-3 px-4 rounded-xl border border-cream-300 text-espresso-700 text-xs font-semibold uppercase tracking-wider hover:bg-cream-100 flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
