import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { MainLayout, MainLayoutProps } from '../main-layout';

export default {
  title: 'layouts/authorization/main-layout',
  component: MainLayout,
} as Meta;

const Template: Story<MainLayoutProps> = (args) => <MainLayout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'MainLayout',
};
