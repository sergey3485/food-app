import type { NextPage } from 'next';
import * as React from 'react';

import { Box } from '@/shared/components/box-container';
import { Typography } from '@/shared/components/typography';
import { Button } from '@/shared/components/button';
import { Media } from '../../features/food/components/login/media';
import { MediaCard } from '@/features/food/components/login/media-card';
import { Content } from '../../features/food/components/login/content';
import { FormInput } from '@/features/food/components/login/form-input';

const Home: NextPage = () => {
  const [isSended, setIsSended] = React.useState(false);

  const sendLetter = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSended(true);
  };
  return (
    <Content>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="20px 15px"
        position="relative"
        height="100vh"
        width="100%"
        flexDirection="column"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          width="360px"
        >

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            top="5%"
          >
            <img src="/food.svg" alt="" width={48} height={16} color="black" />
            <img src="/delivery.svg" alt="" width={80} height={20} color="#4E60FF" />
          </Box>

          <Box>
            <Typography component="h2" variant="mediaTitle">
              Write your email
            </Typography>
          </Box>

          <Box
            width="100%"
            marginTop={24}
            position="relative"
          >
            <form>
              <FormInput label="Email" />

              <Button onClick={sendLetter}>
                Send a letter
              </Button>
            </form>

            {isSended && (
            <Box
              position="absolute"
              marginTop={16}
              width="100%"
            >
              <MediaCard>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="100%"
                >
                  <Typography component="span" variant="description1">
                    We send a letter to your email
                  </Typography>
                </Box>
              </MediaCard>
            </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Media>
        <div />
      </Media>
    </Content>
  );
};

export default Home;
