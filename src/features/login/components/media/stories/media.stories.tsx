import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Media } from '../media';

export default {
  title: 'features/login/components/media',
  component: Media,
} as Meta;

const Template: Story = () => <Media />;

export const Basic = Template.bind({});
