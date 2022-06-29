import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { MainInput, MainInputProps } from '../main-input';

export default {
  title: 'features/main/components/main-input',
  component: MainInput,
} as Meta;

const Template: Story<MainInputProps> = (args) => <MainInput {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'MainInput',
};
