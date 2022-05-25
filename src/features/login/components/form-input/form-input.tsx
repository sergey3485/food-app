import * as React from 'react';
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import { IconButton } from '@/shared/components/icon-button/icon-button';

import * as S from './styled';

interface EyeProps {
  onClick: () => void;
  visible: boolean;
}

export const Eye = (props: EyeProps) => {
  const { visible, onClick } = props;

  return (
    <IconButton type="button" style={{ fontSize: 24 }} onClick={onClick}>
      {!visible ? <RiEyeLine color="#C7C8D2" /> : <RiEyeOffLine color="#C7C8D2" />}
    </IconButton>
  );
};

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * The content
   */
  label: string;
  error?: string;
  type?: string;
}

export const FormInput = (props: FormInputProps): JSX.Element => {
  const {
    label,
    error,
    type,
    ...other
  } = props;

  const [visible, setIsVisible] = React.useState(false);
  const inputType = label === 'Email' ? 'email' : 'text';
  const baseType = type ?? (!visible ? inputType : 'password');
  return (
    <S.FormInputRoot>
      <S.Label>{label}</S.Label>

      <S.InputWrapper>
        <S.Input error={!error} type={baseType} {...other} />

        <S.IconButtonWrapper>
          {label === 'Password' && <Eye visible={visible} onClick={() => setIsVisible((prev) => !prev)} />}
        </S.IconButtonWrapper>

      </S.InputWrapper>

      {error && <S.ErrorText>{error}</S.ErrorText>}

    </S.FormInputRoot>
  );
};
