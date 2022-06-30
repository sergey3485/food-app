import { StaticImageData } from 'next/image';
import Burger from '../../../../public/discountBurger.png';
import Muffin from '../../../../public/discountMuffin.png';

export interface Announcment {
  imgPath: string | StaticImageData;
  type: string;
  announcement: string;
  category: string;
  backgroundColor: string;
  color: string;
}

export const announcments: Announcment[] = [
  {
    imgPath: Burger,
    type: 'Big Burgers',
    announcement: '50% off',
    category: 'fooddies',
    backgroundColor: '#FFF3ED',
    color: '#FD6D22',
  },
  {
    imgPath: Muffin,
    type: 'All Dessetrs',
    announcement: '20% off',
    category: 'deserty',
    backgroundColor: '#F3F4FF',
    color: '#4E60FF',
  },
];
