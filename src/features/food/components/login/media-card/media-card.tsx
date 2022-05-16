import * as React from 'react';

import * as S from './styled';

export interface MediacardProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const MediaCard = (props: MediacardProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.MediacardRoot>{children}</S.MediacardRoot>
  );
};
