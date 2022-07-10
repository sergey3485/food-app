import * as React from 'react';

import { tags, TagsLabel } from '@/features/main/constants/tags';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import { firstToUpper } from '@/shared/functions/text/basic';

import * as S from './styled';

export interface TagFilterProps {
  tag: TagsLabel;
  imgPath: string;
  active: boolean;
  onChange: () => void;
}

export const TagFilter = (props: TagFilterProps): JSX.Element => {
  const {
    tag,
    imgPath,
    active,
    onChange,
  } = props;

  return (
    <S.TagFilterRoot active={active} onClick={onChange}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="24px"
        height="24px"
        marginBottom="12px"
      >
        <img alt="" src={imgPath} width={24} height={24} />
      </Box>
      <Typography component="span" color={active ? '#4E60FF' : '#545563'}>
        {firstToUpper(tag)}
      </Typography>
    </S.TagFilterRoot>
  );
};
