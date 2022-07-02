import styled from '@emotion/styled';

const variants: Record<string, React.CSSProperties> = {
  auth: {
    outline: 'none',
    padding: '12px',
    borderRadius: '8px',
    width: '100%',
    border: '1px solid',
  },
  main: {
    borderRadius: '12px',
    padding: '10px 12px',
    outline: 'none',
    width: '100%',
    backgroundColor: '#EDEEF2',
  },
};

export const Wrapper = styled.div<{ error: boolean, variant: 'auth' | 'main' }>((props) => ({
  ...variants[props.variant],
  display: 'flex',
  borderColor: props.error ? '#C7C8D2' : 'red',
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px',
}));

export const InputRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const Input = styled.input({
  outline: 'none',
  border: 'none',
  padding: 'none',
  width: '100%',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  backgroundColor: 'inherit',
});
