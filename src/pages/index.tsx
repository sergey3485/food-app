import * as React from 'react';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { MainLayout } from '@/layout/main/main-layout';
import { AnnouncmentCard } from '@/features/main/components/announcment-card';
import { announcments } from '@/features/main/constants/announcment';
import { TagFilter } from '@/features/main/components/tag-filter';
import { tags, TagsLabel } from '@/features/main/constants/tags';

import { restaurantsExample } from '@/features/main/constants/restaurants';
import { RestaurantCard } from '@/features/main/components/restaurant-сard';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';

const Home: ExtendedNextPage = () => {
  const [currentFilter, setCurrentFilter] = React.useState(tags);
  const onChangeActiveTag = (currentTag: TagsLabel) => {
    const newFilter = currentFilter.map((tag) => {
      if (currentTag === tag.tag) {
        return {
          tag: tag.tag,
          active: !tag.active,
          path: tag.path,
        };
      } else return tag;
    });
    setCurrentFilter(newFilter);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        marginBottom="32px"
      >
        {announcments.map((announcment) => (
          <Box
            marginRight="30px"
          >
            <AnnouncmentCard announcment={announcment} />
          </Box>
        ))}
      </Box>

      <Box
        display="flex"
      >
        {currentFilter.map((tag) => (
          <Box
            marginRight="30px"
          >
            <TagFilter
              tag={tag.tag}
              active={tag.active}
              imgPath={tag.path}
              onChange={() => onChangeActiveTag(tag.tag)}
            />
          </Box>
        ))}
      </Box>

      <Box
        marginTop="40px"
        marginBottom="16px"
      >
        <Typography
          component="span"
          fontWeight={600}
          fontSize="24px"
          lineHeight="28px"
        >
          Nearby Restaurants
        </Typography>
      </Box>

      <Box
        display="grid"
        gridGap="30px"
        gridTemplateColumns="1fr 1fr 1fr"
      >
        {restaurantsExample.map((restaurant) => (
          <RestaurantCard
            restaurantInfo={restaurant}
            orders={0}
          />
        ))}
      </Box>
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
