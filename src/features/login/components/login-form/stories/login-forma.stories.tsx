import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { LoginForm } from '../login-form';

export default {
  title: 'features/food/components/LoginForma',
  component: LoginForm,
} as Meta;

const Template: Story = (args) => <LoginForm {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'LoginForma',
};
