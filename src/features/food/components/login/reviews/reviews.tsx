import * as React from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/Typography';

import { MediaCard } from '../media-card';
import { ReviewsHeader } from '../reviews-header';
import { UsersReview } from '../users-review';

import * as S from './styled';

// export interface ReviewsProps {
//   /**
//    * The content
//    */

// }

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
