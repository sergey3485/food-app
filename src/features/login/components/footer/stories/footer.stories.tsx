import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Footer, FooterProps } from '../footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  anchor: 'anchor',
  description: 'description',
  href: '',
};
