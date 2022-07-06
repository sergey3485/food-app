import * as React from 'react';
import Link from 'next/link';
import { RiSearchLine, RiShoppingBag3Line } from 'react-icons/ri';

import { Input } from '@/shared/components/Input';
import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import * as S from './styled';

export interface HeaderProps {
  /**
   * The content
   */
  orders?: number;
  avatar: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const {
    orders,
    avatar,
  } = props;

  return (
    <S.HeaderRoot>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <img src="/food.svg" alt="" width={48} height={16} color="black" />
          <img src="/delivery.svg" alt="" width={80} height={20} color="#4E60FF" />
        </Box>

        <Box
          display="flex"
          marginLeft="48px"
          width="224px"
        >
          <Input
            type="text"
            variant="main"
            placeholder="Search"
            addition={(
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="16px"
                height="16px"
              >
                <RiSearchLine size="16px" color="#83859C" />
              </Box>
            )}
          />
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
      >
        <Box
          display="flex"
          alignItems="center"
        >

          <Link href="/" passHref>
            <S.Anchor>
              <Typography
                component="span"
                fontWeight={700}
                fontSize="14px"
                lineHeight="20px"
              >
                Restaurants
              </Typography>
            </S.Anchor>
          </Link>

          <Box
            marginLeft="24px"
          >
            <Link href="/" passHref>
              <S.Anchor>
                <Typography
                  component="span"
                  fontWeight={700}
                  fontSize="14px"
                  lineHeight="20px"
                >
                  Deals
                </Typography>
              </S.Anchor>
            </Link>
          </Box>
        </Box>

        <Box
          width="0px"
          height="32px"
          marginX="20px"
          border="1px solid #EDEEF2"
        />

        <Box
          marginRight="24px"
        >
          <Link href="/" passHref>
            <S.Anchor>
              <Typography
                component="span"
                fontWeight={700}
                fontSize="14px"
                lineHeight="20px"
              >
                My Orders
              </Typography>
            </S.Anchor>
          </Link>
        </Box>

        <Box
          marginRight="16px"
        >
          <Link href="/" passHref>
            <S.Anchor>
              <Box
                position="relative"
                width="48px"
                height="48px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                backgroundColor="#F3F4FF"
                borderRadius="16px"
              >
                <RiShoppingBag3Line
                  size="24px"
                  color="#4E60FF"
                />
                {orders && (
                <Box
                  position="absolute"
                  width="20px"
                  height="20px"
                  top="-8px"
                  right="-8px"
                  backgroundColor="#4E60FF"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="8px"
                >
                  <Typography
                    component="span"
                    color="white"
                    fontWeight={700}
                    fontSize="10px"
                    lineHeight="14px"
                  >
                    {orders}
                  </Typography>
                </Box>
                )}
              </Box>
            </S.Anchor>
          </Link>
        </Box>

        <Box>
          <Link href="/" passHref>
            <S.Anchor>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="48px"
                height="48px"
                borderRadius="16px"
              >
                <img alt="" src={avatar} width="48px" height="48px" />
              </Box>
            </S.Anchor>
          </Link>
        </Box>
      </Box>

    </S.HeaderRoot>
  );
};
