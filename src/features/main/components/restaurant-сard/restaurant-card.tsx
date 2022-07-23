import * as React from 'react';

import { RiTimeLine, RiShoppingBag3Line } from 'react-icons/ri';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

import { RestaurantTag } from '@/features/main/components/restaurant-tag';

import { RestaurantInfo } from '@/features/main/constants/restaurants';
import { tags } from '@/features/main/constants/tags';

import * as S from './styled';

export interface RestaurantCardProps {
  /**
   * The content
   */
  restaurantInfo: RestaurantInfo;
  orders: number;
}

export const RestaurantCard = (props: RestaurantCardProps): JSX.Element => {
  const {
    restaurantInfo,
    orders,
  } = props;

  return (
    <S.RestaurantCardRoot>
      {restaurantInfo.featured && (
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="0px 10px 0 10px"
          backgroundColor="#4E60FF"
          padding="8px 16px"
          top={0}
          right={0}
        >
          <Typography component="span" color="white">
            Featured
          </Typography>
        </Box>
      )}
      <S.RestaurantImg>
        <img alt="" src={restaurantInfo.img} width={350} height={160} />
      </S.RestaurantImg>
      <S.RestaurantInfo>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography component="span" variant="mediaTitle">
            {restaurantInfo.name}
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="20px"
            height="20px"
            position="relative"
          >
            {(orders > 0) && (
              <Box
                bottom={10}
                left={12}
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="16px"
                height="16px"
                border="2px solid"
                borderColor="white"
                position="absolute"
                backgroundColor="#4E60FF"
                color="white"
                borderRadius="6px"
              >
                <Typography component="span" color="white" variant="voits">
                  {orders}
                </Typography>
              </Box>
            )}
            <RiShoppingBag3Line size={20} color={orders > 0 ? '#4E60FF' : '#C7C8D2'} />
          </Box>
        </Box>

        <Box
          display="flex"
          marginTop="8px"
          justifyContent="flex-start"
          alignItems="center"
        >
          <S.TimeIcon>
            <RiTimeLine size={14} color="#C7C8D2" />
          </S.TimeIcon>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginLeft="8px"
          >
            <Typography color="#83859C" component="span">
              {restaurantInfo.delivaryTime} min
            </Typography>
          </Box>

          <Box
            marginX="8px"
            borderRadius="50%"
            backgroundColor="#4E60FF"
            width="4px"
            height="4px"
            position="relative"
            top="1px"
          />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
          >

            <Typography color="#83859C" component="span">
              ${restaurantInfo.minBill} min sum
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          marginTop="16px"
        >
          {restaurantInfo.tags.map((tag) => (
            <Box
              marginRight="8px"
            >
              <RestaurantTag tag={tag} imgPath={`/${tag}Logo.svg`} />
            </Box>
          ))}
        </Box>
      </S.RestaurantInfo>
    </S.RestaurantCardRoot>
  );
};
