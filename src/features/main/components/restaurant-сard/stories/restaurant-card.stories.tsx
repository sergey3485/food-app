import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { RestaurantCard, RestaurantCardProps } from '../restaurant-card';
import { restaurantsExample } from '@/features/main/constants/restaurants';

export default {
  title: 'features/main/components/restaurant-card',
  component: RestaurantCard,
} as Meta;

const Template: Story<RestaurantCardProps> = (args) => <RestaurantCard {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  restaurantInfo: restaurantsExample[1],
  orders: 1,
};
