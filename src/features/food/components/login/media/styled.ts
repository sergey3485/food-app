import styled from '@emotion/styled';

export const MediaRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  width: '100%',
  height: '100vh',
  padding: '48px 64px',
  alignItems: 'center',
  backgroundColor: '#697BFF',
  '@media (max-width: 768px)': {
    display: 'none',
  },
  '@media (max-width: 1024px)': {
    padding: '24px 32px',
  },
});

export const Media = styled.div({
  display: 'flex',
});

export const ReviewContainer = styled.div({
  marginLeft: '32px',
});

export const RollContainer = styled.div({
  marginLeft: '24px',
});

export const SetContainer = styled.div({
  marginTop: 24,
  '@media (max-width: 1024px)': {
    display: 'none',
  },
});

export const FeedBack = styled.h2({
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '42px',
  letterSpacing: '0.1px',
  color: 'white',
  marginTop: 'auto',
  alignSelf: 'center',
});

export const Comment = styled.span({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: 'white',
  marginTop: 16,
  alignSelf: 'center',
  width: 480,
  textAlign: 'center',
});
