import * as React from 'react';

import * as S from './styled';

export interface TypographyProps {
  /**
   * The content
   */
  children: React.ReactNode;
  color?: string
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  variant?: 'cost' | 'description1' | 'title' | 'mediaTitle' | 'voits' | 'description2';
}

export const Typography = (props: TypographyProps): JSX.Element => {
  const {
    children,
    component,
    variant = 'description1',
    color = 'black',
  } = props;

  return (
    <S.TypographyRoot as={component} variant={variant} color={color}>{children}</S.TypographyRoot>
  );
};
