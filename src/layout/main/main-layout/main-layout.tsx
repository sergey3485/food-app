import * as React from 'react';

import { Header } from '@/features/main/components/header';

import { Box } from '@/shared/components/box';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      alignItems="center"
    >
      <Box
        display="flex"
        width="1110px"
        alignItems="center"
        padding="16px 0px"
      >

        <Header orders={4} avatar="/avatar.png" />
      </Box>

      <Box
        width="100%"
        border="1px solid #EDEEF2"
      />

      <Box
        marginTop="24px"
        display="flex"
        width="1110px"
      >
        {children}
      </Box>

    </Box>
  );
};
