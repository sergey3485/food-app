import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from '../input';

export default {
  title: 'shared/components/input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  label: 'Email',
  error: true,
  errorText: 'Uncorrect email adress',
  variant: 'auth',
};
