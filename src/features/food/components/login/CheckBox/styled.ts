import styled from '@emotion/styled';

export const CheckBoxRoot = styled.div({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  position: 'relative',
});

export const Checkbox = styled.input({
  margin: 0,
  width: '20px',
  height: '20px',
  borderRadius: '4px',
  border: '2px solid',
  borderColor: '#C7C8D2',
  opacity: 0,
  zIndex: 1,
});

export const Description = styled.span({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: '#2B2B43',
  marginLeft: '12px',
});

export interface CheckboxContourProps {
  checked: boolean;
}

export const CheckboxContour = styled.div<CheckboxContourProps>((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '20px',
  height: '20px',
  borderRadius: '4px',
  border: '2px solid',
  borderColor: '#C7C8D2',
  position: 'absolute',
  backgroundColor: props.checked ? 'white' : '#4E60FF',
}));

export const CheckboxWrapper = styled.div({
  display: 'flex',
  width: '20px',
  height: '20px',
  position: 'relative',
});
