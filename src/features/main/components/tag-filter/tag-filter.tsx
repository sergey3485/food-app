import * as React from 'react';

import { tags } from '@/features/main/constants/tags';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import { firstToUpper } from '@/shared/functions/text/basic';

import * as S from './styled';

export interface TagFilterProps {
  tag: 'sushi' | 'burger' | 'pizza' | 'bbq' | 'desserts' | 'vegan';
  active: boolean;
}

export const TagFilter = (props: TagFilterProps): JSX.Element => {
  const {
    tag,
    active,
  } = props;

  return (
    <S.TagFilterRoot active={active}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="24px"
        height="24px"
        marginBottom="12px"
      >
        <img alt="" src={tags[tag]} width={24} height={24} />
      </Box>
      <Typography component="span" color={active ? '#4E60FF' : '#545563'}>
        {firstToUpper(tag)}
      </Typography>
    </S.TagFilterRoot>
  );
};
