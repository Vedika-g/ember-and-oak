import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, Clock, MapPin, Sparkles, Calendar } from 'lucide-react';
import { CAFE_INFO } from '../data/coffeeData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation, onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Signatures', href: '#bestsellers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top micro-announcement bar */}
      <div className="bg-espresso-950 text-cream-200 text-xs py-2 px-4 border-b border-espresso-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-terracotta-500 animate-pulse" />
            <span className="font-medium tracking-wide">
              Now Brewing: Chikmagalur SLN-9 Anaerobic Natural · Estate Microlot #04
            </span>
          </div>
          <div className="flex items-center gap-4 text-espresso-200">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-terracotta-400" />
              Open Today: 7:30 AM – 10:30 PM
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-terracotta-400" />
              12th Main, Indiranagar, Bengaluru
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200 py-3.5'
            : 'bg-cream-50/80 backdrop-blur-sm border-b border-cream-200/60 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 rounded-md p-1"
          >
            <div className="w-10 h-10 rounded-full bg-espresso-900 flex items-center justify-center text-cream-50 group-hover:bg-terracotta-600 transition-colors shadow-sm">
              <Coffee className="w-5 h-5 text-terracotta-300 group-hover:text-cream-50 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-espresso-950 group-hover:text-terracotta-600 transition-colors">
                Ember & Oak
              </span>
              <span className="text-[10px] uppercase tracking-widest-xl text-espresso-500 font-medium">
                Coffee House · Bengaluru
              </span>
            </div>
          </a>

          {/* Desktop navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-espresso-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 transition-colors hover:text-terracotta-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 rounded after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-terracotta-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenQuiz}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-espresso-700 bg-cream-100 hover:bg-cream-200 rounded-full border border-cream-300 transition-colors"
              title="Find your perfect roast match"
            >
              <Sparkles className="w-3.5 h-3.5 text-terracotta-600" />
              <span>Coffee Matcher</span>
            </button>
            <button
              onClick={onOpenReservation}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cream-50 bg-espresso-900 hover:bg-terracotta-600 rounded-full shadow-sm transition-all duration-200 btn-sheen"
            >
              <Calendar className="w-3.5 h-3.5 text-terracotta-300" />
              <span>Reserve Table</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenReservation}
              className="px-3 py-1.5 text-xs font-semibold text-cream-50 bg-espresso-900 hover:bg-terracotta-600 rounded-full transition-colors"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-espresso-800 hover:text-terracotta-600 hover:bg-cream-100 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-cream-200 bg-cream-50 px-4 pt-4 pb-6 space-y-4 animate-fade-in shadow-xl">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2 rounded-md text-base font-medium text-espresso-800 hover:bg-cream-100 hover:text-terracotta-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-cream-200 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuiz();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-espresso-800 bg-cream-100 rounded-lg border border-cream-300"
              >
                <Sparkles className="w-4 h-4 text-terracotta-600" />
                <span>Take the Coffee Finder Quiz</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold uppercase tracking-wider text-cream-50 bg-terracotta-600 hover:bg-terracotta-700 rounded-lg shadow"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table or Tasting Flight</span>
              </button>
            </div>

            <div className="pt-2 text-xs text-espresso-500 flex flex-col gap-1">
              <span>📍 {CAFE_INFO.address.street}, {CAFE_INFO.address.locality}</span>
              <span>📞 {CAFE_INFO.contact.phone}</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
