import * as React from 'react';
import Link from 'next/link';
import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { CheckBox } from '../checkbox';

import { FormInput } from '../form-input';

import * as S from './styled';

export const LoginForm = (): JSX.Element => {
  const errorExample = 'Use more then 8 sumbol in password';
  return (
    <S.LoginFormRoot>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
        maxWidth="360px"
      >

        <S.Logo>
          <img src="/food.svg" alt="" width={48} height={16} color="black" />
          <img src="/delivery.svg" alt="" width={80} height={20} color="#4E60FF" />
        </S.Logo>

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
          <FormInput label="Email" placeholder="name@example.com" />
        </Box>

        <Box
          width="100%"
          marginTop="28px"
        >
          <FormInput label="Password" placeholder="min. 8 characters" error={errorExample} />
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

        <S.Footer>
          Don’t have an account?

          <Link passHref href="/registration">
            <S.CreateAccountLink>
              Sign up
            </S.CreateAccountLink>
          </Link>
        </S.Footer>
      </Box>
    </S.LoginFormRoot>
  );
};
