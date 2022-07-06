import * as React from 'react';
import Link from 'next/link';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { Box } from '@/shared/components/box';
import { Typography } from '@/shared/components/typography';
import { IconButton } from '@/shared/components/icon-button/icon-button';
import { Input } from '@/shared/components/Input';
import { CheckBox } from '@/shared/components/checkbox';

import * as S from './styled';

export const LoginForm = (): JSX.Element => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [visible, setVisible] = React.useState(false);

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

  const changeVisible = () => {
    setVisible((prev) => !prev);
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
          <Input
            label="Email"
            placeholder="name@example.com"
            type="text"
            value={email}
            onChange={changeEmail}
            variant="auth"
            error={!emailError}
            errorText={emailError}
          />
        </Box>

        <Box
          width="100%"
        >
          <Input
            label="Password"
            placeholder="min. 8 characters"
            value={password}
            onChange={changePassword}
            variant="auth"
            type={visible ? 'text' : 'password'}
            addition={(
              <IconButton type="button" style={{ fontSize: 24 }} onClick={changeVisible}>
                {visible ? <RiEyeLine color="#C7C8D2" /> : <RiEyeOffLine color="#C7C8D2" />}
              </IconButton>
            )}
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

        <Link href="/auth/change-password" passHref>
          <S.RememberPassowrd>
            Forgot password ?
          </S.RememberPassowrd>
        </Link>
      </Box>
    </S.LoginFormRoot>
  );
};
