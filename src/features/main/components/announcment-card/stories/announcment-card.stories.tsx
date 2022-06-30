import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { announcments } from '@/features/main/constants/announcment';

import { AnnouncmentCard, AnnouncmentCardProps } from '../announcment-card';

export default {
  title: 'features/main/components/annnouncment-card',
  component: AnnouncmentCard,
} as Meta;

const Template: Story<AnnouncmentCardProps> = (args) => <AnnouncmentCard {...args} />;

export const Burger = Template.bind({});
export const Muffin = Template.bind({});

Burger.args = {
  announcment: announcments[0],
};

Muffin.args = {
  announcment: announcments[1],
};
