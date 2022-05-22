import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Typography, TypographyProps } from '../typography';

export default {
  title: 'Components/Typography',
  component: Typography,
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Typography',
};
