import * as React from 'react';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { Button } from '@/shared/components/button';
import { Media } from '@/features/login/components/media';
import { MediaCard } from '@/features/login/components/media-card';
import { Content } from '@/features/login/components/content';
import { Footer } from '@/features/login/components/footer';
import { FormInput } from '@/features/login/components/form-input';

import { ChangePasswordLayout } from '@/layout/login/change-password-layout';

const Home: ExtendedNextPage = () => {
  const [email, setEmail] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [isSended, setIsSended] = React.useState(false);

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.currentTarget.value;
    setEmail(newText);

    const condition = (newText.includes('@')) && (newText.includes('.'));
    if (!condition) (setEmailError('Uncorrect email adress'));
    else (setEmailError(''));
  };

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
              <FormInput
                label="Email"
                value={email}
                onChange={changeEmail}
                error={emailError}
              />

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
    </Content>
  );
};

Home.Layout = ChangePasswordLayout;
export default Home;
