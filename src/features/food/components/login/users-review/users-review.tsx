import * as React from 'react';

import { RiThumbUpFill, RiThumbDownLine, RiStarFill } from 'react-icons/ri';

import { Box } from '@/shared/components/box-container';
import { Typography } from '@/shared/components/typography';

import { reviewsUsers, User } from '../constants/users';

import * as S from './styled';

const arr = [1, 2, 3, 4, 5];

export const UserReview = (props: User) => {
  const {
    name,
    rating,
    review,
    likes,
    dislikes,
    time,
    icon,
  } = props;
  return (
    <S.UserReviewRoot>
      <S.UserIcon>
        <img alt="" src={icon} width={32} height={32} />
      </S.UserIcon>

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
        marginLeft="12px"
      >
        <S.UserName>{name}</S.UserName>

        <Box
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          marginTop="4px"
        >
          {arr.map((data) => (
            <RiStarFill size={14} color={data <= rating ? '#4E60FF' : '#C7C8D2'} />
          ))}
          <S.CreatedAt>{time}</S.CreatedAt>
        </Box>

        <S.ReviewText>{review}</S.ReviewText>

        <Box
          display="flex"
          marginTop="16px"
          alignItems="center"
        >
          <RiThumbUpFill size={16} />
          <S.LikesCounter>
            {likes}
          </S.LikesCounter>

          <RiThumbDownLine size={16} />
          <S.LikesCounter>
            {dislikes}
          </S.LikesCounter>
        </Box>
      </Box>
    </S.UserReviewRoot>
  );
};

export const UsersReview = (): JSX.Element => {
  return (
    <S.UsersReviewRoot>
      {reviewsUsers.map((user) => (
        <UserReview
          name={user.name}
          likes={user.likes}
          dislikes={user.dislikes}
          time={user.time}
          rating={user.rating}
          review={user.review}
          icon={user.icon}
        />
      ))}
    </S.UsersReviewRoot>
  );
};
