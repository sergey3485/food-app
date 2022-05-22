import styled from '@emotion/styled';

import {
  color,
  ColorProps,
} from 'styled-system';

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

export interface TypographyProps {
  variant: 'cost' | 'description1' | 'title' | 'mediaTitle' | 'voits' | 'description2';
  color: string;
}

export const TypographyRoot = styled.div((props: TypographyProps) => ({
  ...variants[props.variant],
  color: props.color,
}));

export const TitleForma = styled.h1({
  fontWeight: 700,
  fontSize: '60px',
  lineHeight: '82px',
  letterSpacing: '0.1px',
  color: '#2B2B43',
});

export const TitleNagiri = styled.span({
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: 1,
  letterSpacing: '0.1px',
});

export const DescriptionNagiri = styled.span({
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: 1,
  letterSpacing: '0.2px',
  color: '#83859C',
});

export const Title = styled.span({
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: 1,
  letterSpacing: '0.1px',
});
