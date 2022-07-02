import * as React from 'react';

import { RiStarFill } from 'react-icons/ri';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import * as S from './styled';

export const ReviewsHeader = (): JSX.Element => {
  return (
    <S.ReviewsHeaderRoot>
      <Box
        display="flex"
        flexDirection="column"
        width="140px"
      >
        <Typography color="black" component="span">
          Overall rating
        </Typography>

        <Box
          display="flex"
          alignItems="center"
          width={140}
        >
          <S.RatingScore>
            4.2
          </S.RatingScore>

          <Box
            display="flex"
            marginLeft="8px"
            marginRight="6px"
          >
            <S.StarContainer>
              <RiStarFill color="#4E60FF" size={12} />
            </S.StarContainer>

            <S.StarContainer>
              <RiStarFill color="#4E60FF" size={12} />
            </S.StarContainer>

            <S.StarContainer>
              <RiStarFill color="#4E60FF" size={12} />
            </S.StarContainer>

            <S.StarContainer>
              <RiStarFill color="#4E60FF" size={12} />
            </S.StarContainer>

            <S.StarContainer>
              <RiStarFill color="#C7C8D2" size={12} />
            </S.StarContainer>
          </Box>

          <Typography color="#83859C" component="span" variant="voits">
            3 votes
          </Typography>
        </Box>
      </Box>

      <S.Button>
        <Typography color="#4E60FF" component="span">
          Leave review
        </Typography>
      </S.Button>
    </S.ReviewsHeaderRoot>
  );
};
