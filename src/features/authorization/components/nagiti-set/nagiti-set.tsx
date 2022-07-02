import * as React from 'react';
import { RiAddLine, RiSubtractFill } from 'react-icons/ri';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import { MediaCard } from '@/features/authorization/components/media-card';

import * as S from './styled';

export const NagitiSet = (): JSX.Element => {
  return (
    <MediaCard>
      <S.NagitiSetRoot>
        <S.ImgContainer>
          <img alt="" width={152} height={104} src="/img.png" />
        </S.ImgContainer>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="16px"
        >
          <Box
            display="flex"
            flexDirection="column"
            marginRight="40px"
            width="270px"
          >
            <Typography component="span" variant="mediaTitle">
              Nigiri set
            </Typography>

            <Box
              margin="4px 0px 8px 0px"
            >
              <Typography color="#83859C" component="span" variant="description2">
                Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod corpora, et saepe.
              </Typography>
            </Box>

            <Typography component="span" variant="cost">
              $ 16.80
            </Typography>
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginLeft="auto"
          >
            <Box
              display="flex"
              alignItems="center"
            >
              <S.DecreaseNumber>
                <RiSubtractFill size={12} />
              </S.DecreaseNumber>

              <S.Amount>
                1
              </S.Amount>

              <S.IncreaseNumber>
                <RiAddLine size={12} />
              </S.IncreaseNumber>
            </Box>

            <S.AddToBasket>
              <S.AddIcon>
                <RiAddLine />
              </S.AddIcon>
              Add to Card
            </S.AddToBasket>
          </Box>
        </Box>

      </S.NagitiSetRoot>
    </MediaCard>
  );
};
