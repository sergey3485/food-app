import * as React from 'react';
import * as S from './styled';

export interface ButtonRootProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = (props: ButtonRootProps): JSX.Element => {
  const { children, ...other } = props;
  return (
    <S.ButtonRoot {...other}>{children}</S.ButtonRoot>
  );
};
