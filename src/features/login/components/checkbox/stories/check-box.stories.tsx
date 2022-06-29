import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { CheckBox, CheckboxProps } from '../check-box';

export default {
  title: 'features/login/components/checkbox',
  component: CheckBox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <CheckBox {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  announce: 'checkbox',
};
