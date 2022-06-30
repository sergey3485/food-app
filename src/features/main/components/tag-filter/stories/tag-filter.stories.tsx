import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { TagFilter, TagFilterProps } from '../tag-filter';

export default {
  title: 'features/main/components/tag-filter',
  component: TagFilter,
} as Meta;

const Template: Story<TagFilterProps> = (args) => <TagFilter {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  tag: 'burger',
  active: true,
};
