import styled from '@emotion/styled';

export const LoginFormaRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 15px',
  position: 'relative',
  height: '100vh',
  width: '100%',
  flexDirection: 'column',
});

export const LoginButton = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 16px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#4E60FF',
  boxShadow: '0px 8px 20px rgba(78, 96, 255, 0.16)',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.3px',
  color: 'white',
  marginTop: '40px',
  width: '100%',
  cursor: 'pointer',
});

export const Footer = styled.footer({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '100%',
  position: 'absolute',
  bottom: '5%',
  left: 0,
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: '#545563',
});

export const CreateAccountLink = styled.a({
  color: '#4E60FF',
  textDecoration: 'none',
  marginLeft: '2px',
  corsor: 'pointer',
});

export const Logo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: '5%',
});

export const RememberPassowrd = styled.a({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '16px',
  padding: '12px 16px',
  width: '100%',
  border: 'none',
  background: 'none',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.3px',
  color: '#4E60FF',
  textDecoration: 'none',
});
