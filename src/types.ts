export type MenuCategory = 
  | 'all'
  | 'espresso'
  | 'signatures'
  | 'iced'
  | 'teas'
  | 'bakery';

export interface MenuItem {
  id: string;
  name: string;
  category: 'espresso' | 'signatures' | 'iced' | 'teas' | 'bakery';
  priceINR: number;
  description: string;
  originOrProcess?: string;
  tastingNotes: string[];
  dietary?: ('vegan' | 'dairy-free' | 'gluten-free' | 'vegetarian')[];
  isBestseller?: boolean;
  isSeasonal?: boolean;
  image?: string;
  calories?: string;
}

export interface BestsellerItem {
  id: string;
  name: string;
  tagline: string;
  priceINR: number;
  description: string;
  beansOrigin: string;
  process: string;
  tastingNotes: string[];
  imageUrl: string;
  altText: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'all' | 'coffee' | 'bakery' | 'interior';
  imageUrl: string;
  altText: string;
  caption: string;
  aspect?: 'square' | 'portrait' | 'landscape';
}

export interface ReservationPayload {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  timeSlot: string;
  seatingArea: 'terrace-patio' | 'slow-coffee-bar' | 'oak-communal-table';
  specialNotes?: string;
}
