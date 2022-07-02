import * as React from 'react';
import { NagitiSet } from '@/features/authorization/components/nagiti-set';
import { RollSet } from '@/features/authorization/components/roll-set';
import { Reviews } from '@/features/authorization/components/reviews';

import * as S from './styled';

export const Media = (): JSX.Element => {
  return (
    <S.MediaRoot>
      <S.Media>
        <S.ReviewContainer>
          <Reviews />
        </S.ReviewContainer>

        <S.RollContainer>
          <RollSet />
        </S.RollContainer>
      </S.Media>

      <S.SetContainer>
        <NagitiSet />
      </S.SetContainer>

      <S.FeedBack>
        Leave reviews for all meals
      </S.FeedBack>

      <S.Comment>
        Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.
      </S.Comment>
    </S.MediaRoot>
  );
};
