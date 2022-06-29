import * as React from 'react';

import { tags } from '@/features/main/constants/tags';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import { firstToUpper } from '@/shared/functions/text/basic';

import * as S from './styled';

export interface RestaurantTagProps {
  /**
   * The content
   */
  tag: 'sushi' | 'burger' | 'pizza' | 'bbq' | 'desserts' | 'vegan';
}

export const RestaurantTag = (props: RestaurantTagProps): JSX.Element => {
  const {
    tag,
  } = props;

  return (
    <S.RestaurantTagRoot>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="16px"
        height="16px"
      >
        <img alt="" src={tags[tag]} />
      </Box>
      <Typography component="span" color="#545563" fontWeight={600} fontSize="12px" lineHeight={1}>
        {firstToUpper(tag)}
      </Typography>
    </S.RestaurantTagRoot>
  );
};
