import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { CheckBox, CheckboxProps } from '../check-box';

export default {
  title: 'features/food/components/CheckBox',
  component: CheckBox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <CheckBox {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  announce: 'checkbox',
};
