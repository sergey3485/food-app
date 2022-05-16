import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { FormaInput, FormaInputProps } from '../forma-input';

export default {
  title: 'features/food/components/FormaInput',
  component: FormaInput,
} as Meta;

const Template: Story<FormaInputProps> = (args) => <FormaInput {...args} />;

export const Email = Template.bind({});

export const Password = Template.bind({});

Email.args = {
  label: 'Email',
  placeholder: 'name@example.com',
};

Password.args = {
  label: 'Password',
  placeholder: 'min. 8 characters',
};
