export interface User {
  name: string;
  review: string;
  likes: number;
  dislikes: number;
  time: string;
  rating: number;
  icon: string;
}

export const reviewsUsers: User[] = [
  {
    name: 'Savannah Miles',
    rating: 5,
    review: 'Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.',
    likes: 14,
    dislikes: 4,
    time: '10 days ago',
    icon: '/woman.png',
  },
  {
    name: 'Jacob Jones',
    rating: 4,
    review: 'Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.',
    likes: 12,
    dislikes: 7,
    time: '1 days ago',
    icon: '/man.png',
  },
];
