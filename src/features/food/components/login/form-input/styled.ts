import styled from '@emotion/styled';

export const FormInputRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
});

export const Label = styled.span({
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '16px',
  marginBottom: '4px',
  color: '#545563',
});

export const Input = styled.input<{ error: boolean }>((props) => ({
  boxSizing: 'border-box',
  outline: 'none',
  padding: '12px',
  borderRadius: '8px',
  width: '100%',
  border: '1px solid',
  borderColor: props.error ? '#C7C8D2' : 'red',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.1px',
}));

export const InputWrapper = styled.div({
  position: 'relative',
});

export const IconButtonWrapper = styled.div({
  position: 'absolute',
  width: 24,
  height: 24,
  top: '4px',
  right: '24px',
});

export const ErrorText = styled.span({
  position: 'absolute',
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: '16px',
  marginBottom: '4px',
  color: 'red',
  bottom: '-20px',
});
