import * as React from 'react';

import { Typography } from '@/shared/components/typography';
import { Box } from '@/shared/components/box';

import * as S from './styled';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The content
   */
  label?: string;
  error?: boolean;
  errorText?: string;
  addition?: React.ReactNode;
  variant: 'auth' | 'main';
  type: string;
  placeholder?: string;
}

export const Input = (props: InputProps): JSX.Element => {
  const {
    label,
    error = true,
    errorText = '',
    addition,
    variant,
    type,
    placeholder,
    ...other
  } = props;

  return (
    <S.InputRoot>
      {label && (
      <Box
        marginBottom="4px"
      >
        <Typography
          color="#545563"
          component="span"
          fontSize="12px"
          lineHeight="16px"
          fontWeight={600}
        >
          {label}
        </Typography>
      </Box>
      )}
      <S.Wrapper error={error} variant={variant}>
        <S.Input type={type} placeholder={placeholder} {...other} />
        {addition && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          paddingLeft="8px"
        >
          {addition}
        </Box>
        )}
      </S.Wrapper>

      <Box
        display={variant === 'auth' ? 'flex' : 'none'}
        height="16px"
      >
        <Typography
          component="span"
          color="red"
          fontSize="12px"
          lineHeight="16px"
          fontWeight={600}
        >
          {errorText}
        </Typography>
      </Box>
    </S.InputRoot>
  );
};
