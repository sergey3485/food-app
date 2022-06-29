import * as React from 'react';

import * as S from './styled';

export interface MainInputProps {
  /**
   * The content
   */
  children: React.ReactNode;
}

export const MainInput = (props: MainInputProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.MainInputRoot>{children}</S.MainInputRoot>
  );
};
