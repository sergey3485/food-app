import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { RollSet } from '../roll-set';

export default {
  title: 'Components/RollSet',
  component: RollSet,
} as Meta;

const Template: Story = (args) => <RollSet {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'RollSet',
};
