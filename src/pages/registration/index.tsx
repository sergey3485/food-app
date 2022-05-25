import type { NextPage } from 'next';
import * as React from 'react';
import Link from 'next/link';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { Footer } from '@/features/login/components/footer';
import { Media } from '@/features/login/components/media';
import { Content } from '@/features/login/components/content';
import { FormInput } from '@/features/login/components/form-input';
import { Button } from '@/shared/components/button';

const Home: NextPage = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatedPassword, setRepeatedPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.currentTarget.value;
    setEmail(newText);

    const condition = (newText.includes('@')) && (newText.includes('.'));
    if (!condition) (setEmailError('Uncorrect email adress'));
    else (setEmailError(''));
  };

  const changePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.currentTarget.value;
    setPassword(newText);
  };

  const changeRepeatedPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newText = event.currentTarget.value;
    setRepeatedPassword(newText);
    if (newText === password) (setPasswordError(''));
    else (setPasswordError('Passwords don’t match'));
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
              <FormInput
                label="Email"
                placeholder="name@example.com"
                value={email}
                onChange={changeEmail}
                error={emailError}
              />

              <Box
                marginTop={28}
              >
                <FormInput
                  label="Password"
                  value={password}
                  onChange={changePassword}
                />
              </Box>

              <Box
                marginTop={28}
              >
                <FormInput
                  label="Repeat Password"
                  type="password"
                  value={repeatedPassword}
                  onChange={changeRepeatedPassword}
                  error={passwordError}
                />
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
