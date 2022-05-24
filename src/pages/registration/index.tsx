import type { NextPage } from 'next';
import Link from 'next/link';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { Footer } from '@/features/login/components/footer';
import { Media } from '@/features/login/components/media';
import { Content } from '@/features/login/components/content';
import { FormInput } from '@/features/login/components/form-input';
import { Button } from '@/shared/components/button';

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
              <FormInput label="Email" placeholder="name@example.com" />

              <Box
                marginTop={28}
              >
                <FormInput label="Password" />
              </Box>

              <Box
                marginTop={28}
              >
                <FormInput label="Repeat Password" type="password" />
              </Box>

              <Button>
                Registrate
              </Button>
            </form>
          </Box>
        </Box>
        <Footer
          description="Already have an account?"
          href="/"
          anchor="Sign in"
        />
      </Box>
      <Media>
        <div />
      </Media>
    </Content>
  );
};

export default Home;
