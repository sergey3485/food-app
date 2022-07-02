import * as React from 'react';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { Button } from '@/shared/components/button';
import { Media } from '@/features/authorization/components/media';
import { MediaCard } from '@/features/authorization/components/media-card';
import { Content } from '@/features/authorization/components/content';
import { Footer } from '@/features/authorization/components/footer';
import { FormInput } from '@/features/authorization/components/form-input';

import { ChangePasswordLayout } from '@/layout/authorization/change-password-layout';

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
