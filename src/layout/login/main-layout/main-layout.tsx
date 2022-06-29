import * as React from 'react';
import { Box } from '@/shared/components/box';
import { Media } from '@/features/login/components/media';
import { Footer } from '@/features/login/components/footer';

import * as S from './styled';

export interface MainLayoutProps {
  /**
   * The content
   */
  children?: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps): JSX.Element => {
  const {
    children,
  } = props;

  return (
    <S.MainLayoutRoot>
      <S.Content>
        <S.Wrapper>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <img src="/food.svg" alt="" width={48} height={16} color="black" />
            <img src="/delivery.svg" alt="" width={80} height={20} color="#4E60FF" />
          </Box>

          {children}

          <Footer
            description="Don’t have an account?"
            href="/registration"
            anchor="Sign up"
          />
        </S.Wrapper>
      </S.Content>
      <Media />
    </S.MainLayoutRoot>
  );
};
