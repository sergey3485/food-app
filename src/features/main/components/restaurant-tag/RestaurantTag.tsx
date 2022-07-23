import * as React from 'react';

import { tags, TagsLabel } from '@/features/main/constants/tags';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import { firstToUpper } from '@/shared/functions/text/basic';

import * as S from './styled';

export interface RestaurantTagProps {
  /**
   * The content
   */
  tag: TagsLabel;
  imgPath: string;
}

export const RestaurantTag = (props: RestaurantTagProps): JSX.Element => {
  const {
    tag,
    imgPath,
  } = props;

  return (
    <S.RestaurantTagRoot>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="16px"
        height="16px"
        marginRight="8px"
      >
        <img alt="" src={imgPath} height="16px" width="16px" />
      </Box>
      <Typography component="span" color="#545563" fontWeight={600} fontSize="12px" lineHeight={1}>
        {firstToUpper(tag)}
      </Typography>
    </S.RestaurantTagRoot>
  );
};
