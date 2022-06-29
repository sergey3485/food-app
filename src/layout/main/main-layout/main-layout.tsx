import * as React from 'react';

import { RiShoppingBag3Line } from 'react-icons/ri';

import { Box } from '@/shared/components/box';

export interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
    >
      <Box
        display="flex"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <img src="/food.svg" alt="" width={48} height={16} color="black" />
          <img src="/delivery.svg" alt="" width={80} height={20} color="#4E60FF" />
        </Box>
        {}
      </Box>
      {}
    </Box>
  );
};
