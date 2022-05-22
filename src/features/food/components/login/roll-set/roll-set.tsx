import * as React from 'react';

import { RiAddLine } from 'react-icons/ri';

import { Box } from '@/shared/components/box-container';
import { Typography } from '@/shared/components/typography';

import { MediaCard } from '../media-card';

import * as S from './styled';

export const RollSet = (): JSX.Element => {
  return (
    <MediaCard>
      <S.RollSetRoot>
        <S.ImgContainer>
          <img alt="" src="/RollSet.png" />
        </S.ImgContainer>

        <Typography variant="mediaTitle" component="span">Roll set</Typography>

        <Box
          margin="8px 0px 12px 0px"
        >
          <Typography variant="description1" component="span">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.</Typography>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography component="span" variant="cost">$ 22.56</Typography>

          <S.AddButton>
            <RiAddLine />
          </S.AddButton>
        </Box>
      </S.RollSetRoot>
    </MediaCard>
  );
};
