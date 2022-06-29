import styled from '@emotion/styled';

import {
  color,
  ColorProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type TypographyType =
  & ColorProps
  & TypographyProps;

const variants: Record<string, React.CSSProperties> = {
  cost: {
    fontWeight: 800,
    fontSize: '24px',
    lineHeight: 1,
    letterSpacing: '0.1px',
  },
  description1: {
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
  },
  description2: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '20px',
  },
  title: {
    fontWeight: 700,
    fontSize: '60px',
    lineHeight: '82px',
    letterSpacing: '0.1px',
  },
  mediaTitle: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: 1,
  },
  voits: {
    fontWeight: 700,
    fontSize: '10px',
    lineHeight: '14px',
  },
};

export interface TypographyElementProps {
  variant: 'cost' | 'description1' | 'title' | 'mediaTitle' | 'voits' | 'description2';
  color: string;
}

export const Typography = styled.div((props: TypographyElementProps) => ({
  ...variants[props.variant],
  color: props.color,
}));

export const TypographyRoot = styled(Typography)<TypographyType>(
  typography,
);
