import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ReviewsHeader } from '../reviews-header';

export default {
  title: 'features/authorization/components/reviews-header',
  component: ReviewsHeader,
} as Meta;

const Template: Story = (args) => <ReviewsHeader {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'ReviewsHeader',
};
