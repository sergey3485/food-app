import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { FormInput, FormInputProps } from '../form-input';

export default {
  title: 'features/authorization/components/form-input',
  component: FormInput,
} as Meta;

const Template: Story<FormInputProps> = (args) => <FormInput {...args} />;

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
