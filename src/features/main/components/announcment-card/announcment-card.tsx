import * as React from 'react';

import { Announcment } from '@/features/main/constants/announcment';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import * as S from './styled';

export interface AnnouncmentCardProps {
  /**
   * The content
   */
  announcment: Announcment;
}

export const AnnouncmentCard = (props: AnnouncmentCardProps): JSX.Element => {
  const {
    announcment,
  } = props;

  return (
    <S.AnnouncmentCardRoot backgroundColor={announcment.backgroundColor}>
      <Box
        display="flex"
      >
        <img alt="" src={announcment.imgPath} width={290} height={188} />
      </Box>

      <Box
        display="flex"
        flex={1}
        flexDirection="column"
        maxWidth="max-content"
        padding="24px 24px 16px 16px"
      >
        <Box>
          <Typography
            component="span"
            fontSize="20px"
            fontWeight={600}
          >
            {announcment.type}
          </Typography>
        </Box>

        <Box
          marginTop="8px"
        >
          <Typography
            component="span"
            color={announcment.color}
            fontSize="40px"
            fontWeight={800}
            lineHeight="52px"
          >
            {announcment.announcement.toUpperCase()}
          </Typography>
        </Box>

        <Box
          marginTop="auto"
        >
          <Typography component="span" variant="description1">
            {announcment.category}
          </Typography>
        </Box>
      </Box>
    </S.AnnouncmentCardRoot>
  );
};
