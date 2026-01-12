
import React from 'react';

// Fix: Define Resource and Accommodation interfaces locally as types.ts is no longer a module
export interface Resource {
  id: string;
  title: string;
  category: string;
  price: number;
  condition: string;
  sellerName: string;
  sellerContact: string;
  image: string;
}

export interface Accommodation {
  id: string;
  name: string;
  type: string;
  rent: number;
  location: string;
  facilities: string[];
  contact: string;
  image: string;
}

export const LATEST_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Engineering Books (Semester 1-4)',
    category: 'Book',
    price: 200,
    condition: 'Like New',
    sellerName: 'Rahul Kumar',
    sellerContact: '9876543210',
    image: 'https://picsum.photos/seed/books/400/300'
  },
  {
    id: '2',
    title: 'Scientific Calculator fx-991ES',
    category: 'Calculator',
    price: 500,
    condition: 'Used',
    sellerName: 'Sneha S',
    sellerContact: '9123456780',
    image: 'https://picsum.photos/seed/calc/400/300'
  },
  {
    id: '3',
    title: 'Drafting Tools Set',
    category: 'Tools',
    price: 150,
    condition: 'Used',
    sellerName: 'Amit V',
    sellerContact: '8887776665',
    image: 'https://picsum.photos/seed/tools/400/300'
  }
];

export const NEARBY_ACCOMMODATIONS: Accommodation[] = [
  {
    id: '1',
    name: 'Green PG',
    type: 'PG',
    rent: 8000,
    location: 'Sriperumbudur (Near SVCE)',
    facilities: ['WiFi', 'Food', 'AC'],
    contact: '044-22334455',
    image: 'https://picsum.photos/seed/pg1/400/300'
  },
  {
    id: '2',
    name: 'Sunrise Hostel',
    type: 'Hostel',
    rent: 10500,
    location: 'Valarpuram',
    facilities: ['Gym', 'Library', 'Laundry'],
    contact: '044-99887766',
    image: 'https://picsum.photos/seed/hostel1/400/300'
  },
  {
    id: '3',
    name: 'Comfort Stay',
    type: 'PG',
    rent: 9000,
    location: 'Mambakkam',
    facilities: ['Parking', 'Food', 'Security'],
    contact: '044-55443322',
    image: 'https://picsum.photos/seed/pg2/400/300'
  }
];

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '#/' },
  { name: 'Resources', path: '#/resources' },
  { name: 'Accommodations', path: '#/accommodations' },
  { name: 'Chatbot', path: '#/chatbot' },
  { name: 'Project Documentation', path: '#/documentation' },
];