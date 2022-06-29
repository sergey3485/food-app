import * as React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Box } from '@/shared/components/box';
import { ReviewsHeader } from '@/features/login/components/reviews-header';
import { UsersReview } from '@/features/login/components/users-review';

import * as S from './styled';

export const Reviews = (): JSX.Element => {
  return (
    <S.ReviewsRoot>
      <ReviewsHeader />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        padding="16px"
      >
        <S.DropDownMenu>
          Sort by:
          <S.DropDownMenuPicked>
            Newest first
          </S.DropDownMenuPicked>

          <RiArrowDownSLine size={14} />
        </S.DropDownMenu>

        <UsersReview />
      </Box>
    </S.ReviewsRoot>
  );
};
