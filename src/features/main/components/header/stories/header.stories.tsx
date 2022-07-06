import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from '../header';

export default {
  title: 'features/main/components/header',
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  orders: 4,
};
