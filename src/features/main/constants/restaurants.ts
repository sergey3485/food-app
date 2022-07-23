export type Tag = 'sushi' | 'burger' | 'pizza' | 'BBQ' | 'desserts' | 'vegan';

export interface RestaurantInfo {
  name: string;
  tags: Tag[];
  delivaryTime: string;
  minBill: number;
  img: string;
  featured: boolean;
}

export const restaurantsExample: RestaurantInfo[] = [
  {
    name: 'Royal Sushi House',
    tags: ['sushi'],
    delivaryTime: '30-40',
    minBill: 32,
    img: '/SushiHouse.png',
    featured: true,
  },
  {
    name: 'Burger & Pizza',
    tags: ['burger', 'pizza'],
    delivaryTime: '40-60',
    minBill: 24,
    img: '/Burger&Pizza.png',
    featured: true,
  },
  {
    name: 'Ninja Sushi',
    tags: ['sushi'],
    delivaryTime: '20-40',
    minBill: 40,
    img: '/Ninja.png',
    featured: false,
  },
  {
    name: 'Sushi Master',
    tags: ['sushi'],
    delivaryTime: '60-70',
    minBill: 49,
    img: '/Master.png',
    featured: false,
  },
  {
    name: 'Japanese Sushi',
    tags: ['sushi'],
    delivaryTime: '30-50',
    minBill: 104,
    img: '/Japanese.png',
    featured: false,
  },
  {
    name: 'Kobe',
    tags: ['sushi'],
    delivaryTime: '20-30',
    minBill: 57,
    img: '/Kobe.png',
    featured: false,
  },
];
