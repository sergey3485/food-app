import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Reviews } from '../reviews';

export default {
  title: 'features/authorization/components/reviews',
  component: Reviews,
} as Meta;

const Template: Story = (args) => <Reviews {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Reviews',
};
