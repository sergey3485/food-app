import * as React from 'react';
import { NagitiSet } from '../nagiti-set';
import { RollSet } from '../roll-set';
import { Reviews } from '../reviews';

import * as S from './styled';

export interface MediaProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const Media = (props: MediaProps): JSX.Element => {
  const {
    children,
  } = props;

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
