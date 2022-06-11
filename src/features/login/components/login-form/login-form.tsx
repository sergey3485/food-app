import * as React from 'react';
import Link from 'next/link';
import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { CheckBox } from '../checkbox';

import { FormInput } from '../form-input';
import { Footer } from '../footer';

import * as S from './styled';

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');

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

  const onSubmit = () => {};

  return (
    <S.LoginFormRoot onSubmit={onSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        maxWidth="360px"
      >

        <Typography component="h1" variant="title" color="black">
          Login
        </Typography>

        <Box
          marginTop={16}
        >
          <Typography component="span" color="#545563">
            Sign in with your data that you entered during your registration.
          </Typography>
        </Box>

        <Box
          width="100%"
          marginTop="32px"
        >
          <FormInput
            label="Email"
            placeholder="name@example.com"
            value={email}
            onChange={changeEmail}
            error={emailError}
          />
        </Box>

        <Box
          width="100%"
          marginTop="28px"
        >
          <FormInput
            label="Password"
            placeholder="min. 8 characters"
            value={password}
            onChange={changePassword}
          />
        </Box>

        <Box
          width="100%"
          marginTop="28px"
        >
          <CheckBox announce="Keep me logged in" />
        </Box>

        <S.LoginButton>
          Login
        </S.LoginButton>

        <Link href="/change-password" passHref>
          <S.RememberPassowrd>
            Forgot password ?
          </S.RememberPassowrd>
        </Link>
      </Box>
    </S.LoginFormRoot>
  );
};
