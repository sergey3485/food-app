import * as React from 'react';

import * as S from './styled';

export interface ConTentPaProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const Content = (props: ConTentPaProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.ContentRoot>{children}</S.ContentRoot>
  );
};
