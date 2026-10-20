import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/coffeeData';
import { MenuCategory, MenuItem } from '../types';
import { Search, Flame, Sparkles, X, Coffee, CupSoda, Croissant, Leaf } from 'lucide-react';

export const MenuSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  const categories = [
    { key: 'all' as MenuCategory, label: 'All Offerings', icon: Sparkles },
    { key: 'espresso' as MenuCategory, label: 'Espresso & Black', icon: Coffee },
    { key: 'signatures' as MenuCategory, label: 'House Signatures', icon: Flame },
    { key: 'iced' as MenuCategory, label: 'Iced & Cold Drip', icon: CupSoda },
    { key: 'teas' as MenuCategory, label: 'Artisanal Teas', icon: Leaf },
    { key: 'bakery' as MenuCategory, label: 'Bakery & Hearth', icon: Croissant },
  ];

  const dietaryOptions = [
    { key: 'all', label: 'All Diets' },
    { key: 'vegan', label: 'Vegan / Plant-Based' },
    { key: 'gluten-free', label: 'Gluten-Friendly' },
    { key: 'vegetarian', label: 'Vegetarian' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

      // Search match
      const query = searchQuery.toLowerCase().trim();
      const searchMatch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.originOrProcess && item.originOrProcess.toLowerCase().includes(query)) ||
        item.tastingNotes.some((note) => note.toLowerCase().includes(query));

      // Dietary match
      const dietaryMatch =
        dietaryFilter === 'all' || (item.dietary && item.dietary.includes(dietaryFilter as any));

      return categoryMatch && searchMatch && dietaryMatch;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <section id="menu" className="py-24 bg-cream-100/60 border-t border-b border-cream-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-espresso-800 text-xs font-semibold uppercase tracking-widest mb-3">
            <Coffee className="w-3.5 h-3.5 text-terracotta-600" />
            <span>Curated Daily Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
            Our Hearth &amp; Roastery Menu
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-600 font-light leading-relaxed">
            Every coffee is weighed, ground per order on Mahlkönig grinders, and extracted with mineral-balanced water. 
            All viennoiserie and sourdough are baked fresh every morning in our wood-fired hearth.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-cream-50 p-4 sm:p-6 rounded-2xl border border-cream-200/90 shadow-sm space-y-4 mb-12">
          
          {/* Top Row: Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isSelected
                      ? 'bg-espresso-900 text-cream-50 shadow-sm'
                      : 'bg-cream-100 text-espresso-700 hover:bg-cream-200/80 hover:text-espresso-900'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-terracotta-300' : 'text-espresso-500'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Bottom Row: Search & Dietary Filter */}
          <div className="pt-3 border-t border-cream-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-espresso-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search beans, tasting notes, bakes..."
                className="w-full pl-10 pr-9 py-2 rounded-xl bg-cream-100/70 border border-cream-300 text-xs text-espresso-900 placeholder:text-espresso-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:bg-cream-50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso-400 hover:text-espresso-700"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dietary pill selectors */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-[11px] uppercase tracking-wider text-espresso-400 font-semibold mr-1 shrink-0">
                Dietary:
              </span>
              {dietaryOptions.map((opt) => (
                <button
                  key={opt.key}
                  onClick={() => setDietaryFilter(opt.key)}
                  className={`px-3 py-1 rounded-lg text-[11px] font-medium transition-colors shrink-0 ${
                    dietaryFilter === opt.key
                      ? 'bg-olive-700 text-cream-50'
                      : 'bg-cream-200/60 text-espresso-700 hover:bg-cream-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Results count & active search summary */}
        <div className="flex items-center justify-between text-xs text-espresso-500 mb-6 px-1">
          <span>Showing {filteredItems.length} handcrafted items</span>
          {(searchQuery || dietaryFilter !== 'all' || selectedCategory !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategory('all');
              }}
              className="text-terracotta-600 hover:underline font-medium"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-cream-50 rounded-2xl border border-cream-200 space-y-3">
            <Coffee className="w-8 h-8 text-espresso-400 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-espresso-900">No items match your search</h3>
            <p className="text-xs text-espresso-600 max-w-sm mx-auto">
              Try searching for &quot;jaggery&quot;, &quot;tonic&quot;, &quot;cardamom&quot;, &quot;sourdough&quot;, or clear your filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDietaryFilter('all');
                setSelectedCategory('all');
              }}
              className="mt-2 px-4 py-2 bg-espresso-900 text-cream-50 rounded-lg text-xs font-semibold"
            >
              Show All Offerings
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="group p-5 sm:p-6 rounded-2xl bg-cream-50 border border-cream-200 hover:border-terracotta-300 hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top row: Name, badges, price */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-espresso-950 group-hover:text-terracotta-600 transition-colors">
                          {item.name}
                        </h3>
                        {item.isBestseller && (
                          <span className="px-2 py-0.5 rounded-full bg-terracotta-100 text-terracotta-800 text-[10px] font-semibold uppercase tracking-wider">
                            Signature
                          </span>
                        )}
                        {item.isSeasonal && (
                          <span className="px-2 py-0.5 rounded-full bg-olive-100 text-olive-800 text-[10px] font-semibold uppercase tracking-wider">
                            Harvest Special
                          </span>
                        )}
                      </div>
                      {item.originOrProcess && (
                        <p className="text-xs text-espresso-500 font-mono">
                          {item.originOrProcess}
                        </p>
                      )}
                    </div>

                    <div className="font-serif text-xl font-bold text-espresso-900 shrink-0">
                      ₹{item.priceINR}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-espresso-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom row: Tasting notes & dietary tags */}
                <div className="mt-4 pt-3 border-t border-cream-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] uppercase tracking-wider text-espresso-400 font-semibold mr-1">
                      Notes:
                    </span>
                    {item.tastingNotes.map((note) => (
                      <span
                        key={note}
                        className="px-2 py-0.5 rounded bg-cream-100 text-espresso-700 text-[11px]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  {item.dietary && item.dietary.length > 0 && (
                    <div className="flex gap-1.5">
                      {item.dietary.map((d) => (
                        <span
                          key={d}
                          className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-olive-50 text-olive-700 border border-olive-200"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Item Detail Modal */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-espresso-950/70 backdrop-blur-sm animate-fade-in">
            <div
              className="bg-cream-50 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-cream-300 relative space-y-6"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-item-title"
            >
              <button
                onClick={() => setActiveModalItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-cream-200/60 hover:bg-cream-200 text-espresso-700 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold">
                  Ember &amp; Oak Craft Profile
                </span>
                <h3 id="modal-item-title" className="font-serif text-2xl sm:text-3xl font-bold text-espresso-950">
                  {activeModalItem.name}
                </h3>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-2xl font-bold text-terracotta-600">
                    ₹{activeModalItem.priceINR}
                  </span>
                  {activeModalItem.calories && (
                    <span className="text-xs text-espresso-400 font-mono">
                      Approx. {activeModalItem.calories}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-espresso-700 leading-relaxed">
                <p>{activeModalItem.description}</p>
                {activeModalItem.originOrProcess && (
                  <div className="p-3 rounded-xl bg-cream-100 border border-cream-200 space-y-1">
                    <span className="text-[10px] uppercase tracking-wider text-espresso-500 font-bold block">
                      Origin &amp; Harvest Details
                    </span>
                    <p className="font-medium text-espresso-900">{activeModalItem.originOrProcess}</p>
                  </div>
                )}
              </div>

              <div>
                <span className="text-[10px] uppercase tracking-wider text-espresso-500 font-bold block mb-2">
                  Cupping Flavor Profile
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeModalItem.tastingNotes.map((note) => (
                    <span
                      key={note}
                      className="px-3 py-1 rounded-full bg-terracotta-100 text-terracotta-900 font-medium text-xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {activeModalItem.dietary && (
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-espresso-500 font-bold block mb-1">
                    Dietary Specifications
                  </span>
                  <div className="flex gap-2">
                    {activeModalItem.dietary.map((d) => (
                      <span key={d} className="capitalize text-xs font-medium text-olive-800 bg-olive-100 px-2.5 py-0.5 rounded">
                        ✓ {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                <span className="text-xs text-espresso-500">
                  Available for dine-in &amp; takeaway
                </span>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="px-5 py-2.5 bg-espresso-900 hover:bg-terracotta-600 text-cream-50 text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
