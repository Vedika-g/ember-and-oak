import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Bestsellers } from './components/Bestsellers';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { RoastQuizModal } from './components/RoastQuizModal';
import { BestsellerItem } from './types';

export const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedDrinkForBooking, setSelectedDrinkForBooking] = useState<string | undefined>(undefined);

  const handleSelectBestseller = (drink: BestsellerItem) => {
    setSelectedDrinkForBooking(drink.name);
  };

  const handleOpenReservation = (drinkName?: string) => {
    if (drinkName) setSelectedDrinkForBooking(drinkName);
    setIsReservationOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-50 text-espresso-900 font-sans selection:bg-terracotta-200 selection:text-espresso-950 flex flex-col">
      {/* Sticky Header Navigation */}
      <Navbar
        onOpenReservation={() => handleOpenReservation()}
        onOpenQuiz={() => setIsQuizOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuiz={() => setIsQuizOpen(true)}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* 2. Our Story Section */}
        <OurStory />

        {/* 3. Bestsellers Section */}
        <Bestsellers
          onSelectDrink={handleSelectBestseller}
          onOpenReservation={() => handleOpenReservation()}
        />

        {/* 4. Menu Section with Categories & Filters */}
        <MenuSection />

        {/* 5. Visual Gallery & Lightbox */}
        <GallerySection />

        {/* 6. Visit Us, Map & Schedule */}
        <VisitUs onOpenReservation={() => handleOpenReservation()} />
      </main>

      {/* 7. Footer & Newsletter */}
      <Footer />

      {/* Interactive Modals */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => {
          setIsReservationOpen(false);
          setSelectedDrinkForBooking(undefined);
        }}
        initialDrinkChoice={selectedDrinkForBooking}
      />

      <RoastQuizModal
        isOpen={isQuizOpen}
        onClose={() => setIsQuizOpen(false)}
        onOpenReservation={() => {
          setIsQuizOpen(false);
          setIsReservationOpen(true);
        }}
      />
    </div>
  );
};

export default App;
