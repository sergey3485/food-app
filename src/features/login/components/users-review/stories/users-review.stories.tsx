import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { User, reviewsUsers } from '../../../constants/users';

import { UsersReview, UserReview } from '../users-review';

export default {
  title: 'features/login/components/user-review',
  component: UsersReview,
} as Meta;

const Template: Story<User> = (args) => <UserReview {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  name: reviewsUsers[0].name,
  time: reviewsUsers[0].time,
  review: reviewsUsers[0].review,
  likes: reviewsUsers[0].likes,
  dislikes: reviewsUsers[0].dislikes,
  rating: reviewsUsers[0].rating,
};
