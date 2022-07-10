import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { announcmentsStorybook } from '@/features/main/constants/announcment';

import { AnnouncmentCard, AnnouncmentCardProps } from '../announcment-card';

export default {
  title: 'features/main/components/annnouncment-card',
  component: AnnouncmentCard,
} as Meta;

const Template: Story<AnnouncmentCardProps> = (args) => <AnnouncmentCard {...args} />;

export const Burger = Template.bind({});
export const Muffin = Template.bind({});

Burger.args = {
  announcment: announcmentsStorybook[0],
};

Muffin.args = {
  announcment: announcmentsStorybook[1],
};
