import React, { useState, useEffect } from 'react';
import { GALLERY_PHOTOS } from '../data/coffeeData';
import { GalleryPhoto } from '../types';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'coffee' | 'bakery' | 'interior'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterTabs = [
    { key: 'all', label: 'All Perspectives' },
    { key: 'coffee', label: 'Coffee Extraction' },
    { key: 'bakery', label: 'Bakes & Viennoiserie' },
    { key: 'interior', label: 'The Café Space' },
  ];

  const filteredPhotos = GALLERY_PHOTOS.filter(
    (photo) => activeFilter === 'all' || photo.category === activeFilter
  );

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const nextPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
  };

  const prevPhoto = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <section id="gallery" className="py-24 bg-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-espresso-800 text-xs font-semibold uppercase tracking-widest mb-3">
              <Camera className="w-3.5 h-3.5 text-terracotta-600" />
              <span>Visual Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-espresso-950 tracking-tight">
              Moments at Ember &amp; Oak
            </h2>
            <p className="mt-4 text-espresso-600 font-light text-base leading-relaxed">
              From dawn steam rising from our La Marzocco portafilters to the golden crust of our twice-baked almond croissants.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveFilter(tab.key as any);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeFilter === tab.key
                    ? 'bg-espresso-900 text-cream-50 shadow-sm'
                    : 'bg-cream-100 text-espresso-700 hover:bg-cream-200/90'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredPhotos.map((photo, index) => {
            const isTall = photo.aspect === 'portrait';
            return (
              <div
                key={photo.id}
                onClick={() => openLightbox(index)}
                className={`group relative rounded-2xl overflow-hidden bg-espresso-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isTall ? 'sm:row-span-2' : ''
                }`}
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.altText}
                  className="w-full h-full min-h-[260px] object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-100"
                  loading="lazy"
                />

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-cream-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-terracotta-300 font-medium">
                        {photo.category}
                      </p>
                      <h3 className="font-serif text-lg font-bold text-cream-50">
                        {photo.title}
                      </h3>
                    </div>
                    <span className="p-2 rounded-full bg-cream-50/20 backdrop-blur-sm text-cream-50 hover:bg-terracotta-500 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="text-xs text-cream-200/80 mt-1 line-clamp-2">
                    {photo.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredPhotos[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/95 backdrop-blur-md p-4 animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery lightbox"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 p-2.5 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors z-20"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors z-20"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-cream-50/10 hover:bg-cream-50/20 text-cream-50 transition-colors z-20"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox content container */}
            <div
              className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl max-h-[70vh] flex items-center justify-center bg-black">
                <img
                  src={filteredPhotos[lightboxIndex].imageUrl}
                  alt={filteredPhotos[lightboxIndex].altText}
                  className="max-h-[70vh] max-w-full object-contain"
                />
              </div>

              {/* Caption Bar */}
              <div className="mt-4 text-center max-w-xl space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[11px] uppercase tracking-widest text-terracotta-400 font-mono">
                    {lightboxIndex + 1} of {filteredPhotos.length}
                  </span>
                  <span className="text-cream-400">·</span>
                  <span className="text-xs uppercase tracking-wider text-cream-300">
                    {filteredPhotos[lightboxIndex].category}
                  </span>
                </div>
                <h4 className="font-serif text-xl font-bold text-cream-50">
                  {filteredPhotos[lightboxIndex].title}
                </h4>
                <p className="text-xs text-cream-200/80">
                  {filteredPhotos[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
