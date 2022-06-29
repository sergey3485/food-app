import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { RestaurantTag, RestaurantTagProps } from '../RestaurantTag';

export default {
  title: 'features/main/components/restaurant-tag',
  component: RestaurantTag,
} as Meta;

const Template: Story<RestaurantTagProps> = (args) => <RestaurantTag {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  tag: 'burger',
};
