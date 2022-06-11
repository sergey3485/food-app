import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Media } from '../media';

export default {
  title: 'Components/Media',
  component: Media,
} as Meta;

const Template: Story = () => <Media />;

export const Basic = Template.bind({});
