import * as React from 'react';
import { RiCheckLine } from 'react-icons/ri';
import { Box } from '@/shared/components/box-container';

import * as S from './styled';
import { Typography } from '@/shared/components/typography';

export interface CheckboxProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  announce: string;
}

export const CheckBox = (props: CheckboxProps): JSX.Element => {
  const { onChange, announce } = props;
  const [checked, setChecked] = React.useState(false);

  const changeCheckboxValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event);

    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <S.CheckBoxRoot>
      <S.CheckboxWrapper>
        <S.Checkbox type="checkbox" onChange={changeCheckboxValue} />
        <S.CheckboxContour checked={checked}>
          {!checked && <RiCheckLine color="white" size={18} />}
        </S.CheckboxContour>
      </S.CheckboxWrapper>

      <Box
        marginLeft="12px"
      >
        <Typography component="span" color="#2B2B43" variant="description1">
          {announce}
        </Typography>
      </Box>
    </S.CheckBoxRoot>
  );
};
