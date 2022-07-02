import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { RegistrationLayout, RegistrationLayoutProps } from '../registration-layout';

export default {
  title: 'layouts/authorization/registration-layout',
  component: RegistrationLayout,
} as Meta;

const Template: Story<RegistrationLayoutProps> = (args) => <RegistrationLayout {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'MainLayout',
};
