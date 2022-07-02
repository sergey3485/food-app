import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { NagitiSet } from '../nagiti-set';

export default {
  title: 'features/authorization/components/nagiti-set',
  component: NagitiSet,
} as Meta;

const Template: Story = (args) => <NagitiSet {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'NagitiSet',
};
