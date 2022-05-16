import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Content, ConTentPaProps } from '../content';

export default {
  title: 'Components/Content',
  component: Content,
} as Meta;

const Template: Story<ConTentPaProps> = (args) => <Content {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children: 'Content',
};
