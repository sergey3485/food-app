export interface Tags {
  tag: TagsLabel;
  path: string;
  active: boolean;
}

export const tags: Tags[] = [
  {
    tag: 'burger',
    path: '/BurgerLogo.svg',
    active: false,
  },

  {
    tag: 'sushi',
    path: '/SushiLogo.svg',
    active: false,
  },

  {
    tag: 'pizza',
    path: '/PizzaLogo.svg',
    active: false,
  },

  {
    tag: 'BBQ',
    path: '/BBQLogo.svg',
    active: false,
  },

  {
    tag: 'vegan',
    path: '/VeganLogo.svg',
    active: false,
  },

  {
    tag: 'desserts',
    path: '/DessertsLogo.svg',
    active: false,
  },
];

export type TagsLabel = 'sushi' | 'burger' | 'pizza' | 'BBQ' | 'desserts' | 'vegan';
