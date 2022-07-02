import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { MediaCard, MediacardProps } from '../media-card';

export default {
  title: 'features/authorization/components/media-card',
  component: MediaCard,
} as Meta;

const Template: Story<MediacardProps> = (args) => <MediaCard {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Mediacard',
};
