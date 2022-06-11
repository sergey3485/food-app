import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ChangePasswordLayout, ChangePasswordLayoutProps } from '../change-password-layout';

export default {
  title: 'Components/MainLayout',
  component: ChangePasswordLayout,
} as Meta;

const Template: Story<ChangePasswordLayoutProps> = (args) => <ChangePasswordLayout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'MainLayout',
};
