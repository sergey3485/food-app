import * as React from 'react';
import Link from 'next/link';

import { Typography } from '@/shared/components/typography';

import * as S from './styled';

export interface FooterProps {
  /**
   * The content
   */
  description: string;
  href: string,
  anchor: string;
}

export const Footer = (props: FooterProps): JSX.Element => {
  const {
    description,
    href,
    anchor,
  } = props;

  return (
    <S.FooterRoot>
      <Typography component="span" color="#545563">{description}</Typography>

      <Link passHref href={href}>
        <S.Anchor>
          <Typography component="span" color="#4E60FF">
            {anchor}
          </Typography>
        </S.Anchor>
      </Link>
    </S.FooterRoot>
  );
};
