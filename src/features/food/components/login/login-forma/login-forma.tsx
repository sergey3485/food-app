import * as React from 'react';
import Link from 'next/link';
import { Box } from '@/shared/components/box-container';
import { Typography } from '@/shared/components/typography';
import { CheckBox } from '../checkbox';

import { FormaInput } from '../forma-input';

import * as S from './styled';

// export interface LoginFormaProps {
//   /**
//    * The content
//    */
//   children: React.ReactNode;
// }

export const LoginForma = (): JSX.Element => {
  const errorExample = 'Use more then 8 sumbol in password';
  return (
    <S.LoginFormaRoot>
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
          <FormaInput label="Email" placeholder="name@example.com" />
        </Box>

        <Box
          width="100%"
          marginTop="28px"
        >
          <FormaInput label="Password" placeholder="min. 8 characters" error={errorExample} />
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
    </S.LoginFormaRoot>
  );
};
