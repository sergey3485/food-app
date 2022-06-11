import * as React from 'react';
import Link from 'next/link';
import { ExtendedNextPage } from '@/shared/types/extended-next-page';

import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { Footer } from '@/features/login/components/footer';
import { Media } from '@/features/login/components/media';
import { Content } from '@/features/login/components/content';
import { FormInput } from '@/features/login/components/form-input';
import { Button } from '@/shared/components/button';

import { RegistrationLayout } from '@/layout/login/registration-layout';

const Home: ExtendedNextPage = () => {
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
      </Box>
    </Content>
  );
};

Home.Layout = RegistrationLayout;

export default Home;
