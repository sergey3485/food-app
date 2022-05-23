import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { LoginForma } from '../login-form';

export default {
  title: 'features/food/components/LoginForma',
  component: LoginForma,
} as Meta;

const Template: Story = (args) => <LoginForma {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'LoginForma',
};
