import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ChangePasswordLayout, ChangePasswordLayoutProps } from '../change-password-layout';

export default {
  title: 'layouts/login/change-password-layout',
  component: ChangePasswordLayout,
} as Meta;

const Template: Story<ChangePasswordLayoutProps> = (args) => <ChangePasswordLayout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'MainLayout',
};
