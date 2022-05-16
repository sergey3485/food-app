import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Media, MediaProps } from '../media';

export default {
  title: 'Components/Media',
  component: Media,
} as Meta;

const Template: Story<MediaProps> = (args) => <Media {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Media',
};
