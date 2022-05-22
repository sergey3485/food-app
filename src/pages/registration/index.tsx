import type { NextPage } from 'next';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/Typography';
import { Media } from '../../features/food/components/login/media';
import { Content } from '../../features/food/components/login/content';
import { FormaInput } from '@/features/food/components/login/forma-input';
import { Button } from '@/shared/components/Button';

const Home: NextPage = () => {
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
            <Typography component="h2" variant="title">
              Registration
            </Typography>
          </Box>

          <Box
            width="100%"
            marginTop={24}
            position="relative"
          >
            <form>
              <FormaInput label="Email" placeholder="name@example.com" />

              <Box
                marginTop={28}
              >
                <FormaInput label="Password" />
              </Box>

              <Box
                marginTop={28}
              >
                <FormaInput label="Repeat Password" type="password" />
              </Box>

              <Button>
                Registrate
              </Button>
            </form>
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
