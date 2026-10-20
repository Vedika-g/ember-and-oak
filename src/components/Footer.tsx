import React, { useState } from 'react';
import { Coffee, ArrowUp, Send, CheckCircle2, AlertCircle, Instagram, Music, BookOpen } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    // Regex email check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!emailRegex.test(cleanEmail)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address (e.g. coffee@example.com).');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate network submission
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 900);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso-950 text-cream-100 border-t border-espresso-800 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle background grain */}
      <div className="absolute inset-0 bg-noise-subtle opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid: Newsletter & Brand Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-espresso-800/80">
          
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-terracotta-600 flex items-center justify-center text-cream-50 shadow-md">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-cream-50">
                  Ember &amp; Oak
                </span>
                <span className="text-[10px] uppercase tracking-widest-xl text-terracotta-300 font-medium">
                  Coffee House · Bengaluru
                </span>
              </div>
            </div>

            <p className="text-sm text-cream-300/85 font-light leading-relaxed max-w-sm">
              An independent coffee house dedicated to the ritual of unhurried mornings. 
              Sourcing Karnataka shade-grown Arabicas, hand-baking laminated viennoiserie, and fostering a quiet sanctuary in Indiranagar.
            </p>

            {/* Social Channels */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-cream-400 font-semibold block">
                Connect &amp; Listen
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-espresso-900 border border-espresso-800 hover:border-terracotta-500 hover:text-terracotta-300 text-cream-200 flex items-center justify-center transition-colors"
                  aria-label="Instagram profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-espresso-900 border border-espresso-800 hover:border-terracotta-500 hover:text-terracotta-300 text-cream-200 flex items-center justify-center transition-colors"
                  aria-label="Spotify Cafe Playlist"
                >
                  <Music className="w-4 h-4" />
                </a>
                <a
                  href="https://substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-espresso-900 border border-espresso-800 hover:border-terracotta-500 hover:text-terracotta-300 text-cream-200 flex items-center justify-center transition-colors"
                  aria-label="Substack Roasting Letters"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-cream-50">
              Quick Waypoints
            </h4>
            <ul className="space-y-2.5 text-xs text-cream-300">
              <li>
                <a href="#home" className="hover:text-terracotta-300 transition-colors">Home &amp; Hero</a>
              </li>
              <li>
                <a href="#story" className="hover:text-terracotta-300 transition-colors">Our Western Ghats Story</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-terracotta-300 transition-colors">Daily Roastery Menu</a>
              </li>
              <li>
                <a href="#bestsellers" className="hover:text-terracotta-300 transition-colors">House Signature Crafts</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-terracotta-300 transition-colors">Visual Journal &amp; Lightbox</a>
              </li>
              <li>
                <a href="#visit" className="hover:text-terracotta-300 transition-colors">Visit Us &amp; Directions</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="text-[11px] uppercase tracking-widest text-terracotta-300 font-semibold block">
                The Roaster&apos;s Dispatch
              </span>
              <h4 className="font-serif text-xl font-bold text-cream-50 mt-1">
                Slow Coffee In Your Inbox
              </h4>
            </div>
            <p className="text-xs text-cream-300/80 font-light leading-relaxed">
              Twice a month, we share brew guides, seasonal microlot releases, and invitations to private weekend cuppings in Bengaluru.
            </p>

            {status === 'success' ? (
              <div className="p-4 rounded-xl bg-olive-900/60 border border-olive-500/50 text-cream-50 space-y-1.5 animate-fade-in">
                <div className="flex items-center gap-2 text-olive-300 font-medium text-xs">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Welcome to the Dispatch</span>
                </div>
                <p className="text-[11px] text-cream-200/90">
                  You&apos;re subscribed. Look out for our upcoming guide on dialing in Bababudan Washed coffees at home.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-[10px] text-terracotta-300 underline pt-1 block"
                >
                  Subscribe another email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-xl bg-espresso-900 border border-espresso-700 text-xs text-cream-50 placeholder:text-espresso-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-terracotta-600 hover:bg-terracotta-500 text-cream-50 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 disabled:opacity-50"
                  >
                    {status === 'loading' ? (
                      <span className="w-4 h-4 border-2 border-cream-50 border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Join</span>
                        <Send className="w-3 h-3" />
                      </>
                    )}
                  </button>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-red-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <p className="text-[10px] text-espresso-400">
                  No spam or marketing noise. Unsubscribe with one click anytime.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Fictional Concept Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-espresso-400">
          
          {/* Concept Brand Notice */}
          <div className="max-w-2xl text-center md:text-left space-y-1">
            <p className="text-cream-300 font-medium">
              Concept Brand Disclosure
            </p>
            <p className="text-[11px] text-espresso-400 leading-relaxed">
              <strong>Ember &amp; Oak Coffee House</strong> is a fictional specialty coffee brand concept created for design and engineering showcase purposes. All business details, drink formulas, and locations in Bengaluru are conceptual representations celebrating Indian coffee culture.
            </p>
          </div>

          {/* Scroll to Top */}
          <div className="flex items-center gap-4 shrink-0">
            <span>© {new Date().getFullYear()} Ember &amp; Oak Coffee House.</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-espresso-900 border border-espresso-800 hover:border-terracotta-400 text-cream-300 hover:text-cream-50 transition-colors"
              title="Return to top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
