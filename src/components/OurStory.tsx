import React from 'react';
import { Mountain, Flame, HeartHandshake, Sparkles, Sprout } from 'lucide-react';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-32 bg-cream-100/70 border-b border-cream-200 relative overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute top-12 right-6 select-none pointer-events-none opacity-[0.03] text-espresso-900 font-serif text-[180px] leading-none">
        01
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tagline */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 border border-olive-200 text-olive-800 text-xs font-medium uppercase tracking-wider mb-4">
            <Sprout className="w-3.5 h-3.5 text-olive-600" />
            <span>Our Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight leading-tight">
            Rooted in the Western Ghats. Crafted for Slow Living.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 font-light leading-relaxed">
            Bengaluru is always moving. Ember &amp; Oak was created as a deliberate pause button—where 
            ancient shade trees, mindful roasting, and hot ceramic mugs bring us back to the present moment.
          </p>
        </div>

        {/* Story Grid: Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images montage (Left) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-4 sm:space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
                  alt="Ceramic cup of filter coffee on rustic oak table with roasted coffee beans"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-espresso-950/15 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 left-3 bg-cream-50/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium text-espresso-900">
                  Morning Dial-in
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-espresso-900 text-cream-50 space-y-2">
                <p className="font-serif text-2xl font-bold text-terracotta-300">1,600m</p>
                <p className="text-xs uppercase tracking-wider text-cream-200 font-medium">Estate Altitude</p>
                <p className="text-xs text-cream-300/80 leading-relaxed">
                  Our cherries mature slowly under silver oak and fig trees, developing denser sugars and complex fruit acids.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
              <div className="p-6 rounded-2xl bg-olive-700 text-cream-50 space-y-2">
                <p className="font-serif text-2xl font-bold text-olive-200">100%</p>
                <p className="text-xs uppercase tracking-wider text-cream-100 font-medium">Estate Traceability</p>
                <p className="text-xs text-cream-200/90 leading-relaxed">
                  Every lot comes with harvest records, varietal lineage, and direct grower compensation above fair benchmarks.
                </p>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                  alt="Sunlight falling into the cafe interior with potted plants and wood tables"
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-espresso-950/15 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-3 left-3 bg-cream-50/90 backdrop-blur-sm px-2.5 py-1 rounded text-[11px] font-medium text-espresso-900">
                  Indiranagar Hearth
                </div>
              </div>
            </div>
          </div>

          {/* Narrative content (Right) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-espresso-700 leading-relaxed">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso-950">
                Honoring 400 Years of Bababudan&apos;s Legacy
              </h3>
              <p>
                Legend tells us that in 1670, Sufi saint Baba Budan smuggled seven raw coffee beans strapped to his chest 
                from Yemen back to the misty hills of Chikmagalur. That daring act seeded South India&apos;s rich coffee tradition.
              </p>
              <p>
                At Ember &amp; Oak, we honor that heritage by approaching every bean with modern precision and timeless reverence. 
                We partner with generational farming families in Bababudangiri, Biligirirangan Hills, and Araku Valley. 
                These aren&apos;t industrial plantations—they are thriving biodiverse forests where wild elephants roam, 
                peppercorns wind around silver oaks, and coffee cherries ripen at their own unhurried pace.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-cream-300">
              <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-terracotta-100 flex items-center justify-center text-terracotta-700">
                  <Mountain className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-semibold text-espresso-900 text-sm">Direct Estate Trade</h4>
                <p className="text-xs text-espresso-600 leading-relaxed">
                  We visit every farm each harvest season, tasting through micro-lots to select only the top 3% of yields.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-espresso-100 flex items-center justify-center text-espresso-800">
                  <Flame className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-semibold text-espresso-900 text-sm">Gentle Profile Roasting</h4>
                <p className="text-xs text-espresso-600 leading-relaxed">
                  Roasted in small 5kg batches to preserve terroir nuances—bright stone fruit, florals, and warm caramelized sugar.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-olive-100 flex items-center justify-center text-olive-800">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-semibold text-espresso-900 text-sm">Morning Micro-Bakery</h4>
                <p className="text-xs text-espresso-600 leading-relaxed">
                  Cardamom knots, twice-baked almond croissants, and country sourdough baked right in our stone hearth every morning.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif font-semibold text-espresso-900 text-sm">Mindful Hospitality</h4>
                <p className="text-xs text-espresso-600 leading-relaxed">
                  No rush, no loud gimmicks. Just warm oak tables, gentle vinyl acoustics, and baristas eager to talk flavor notes.
                </p>
              </div>
            </div>

            {/* Quote block */}
            <blockquote className="p-4 sm:p-5 rounded-xl bg-cream-200/60 border-l-4 border-terracotta-500 text-espresso-800 italic text-sm leading-relaxed">
              &ldquo;Great coffee isn&apos;t just about extraction pressures or TDS meters; it&apos;s about cultivating a rhythm where you can sit with yourself and feel truly unhurried.&rdquo;
              <span className="block mt-2 not-italic text-xs font-semibold text-espresso-600">
                — Devashish Nair, Co-Founder &amp; Head of Roasting
              </span>
            </blockquote>

          </div>

        </div>

      </div>
    </section>
  );
};
