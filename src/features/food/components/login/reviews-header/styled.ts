import styled from '@emotion/styled';

export const ReviewsHeaderRoot = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  width: 313,
  borderBottom: '1px solid',
  padding: 16,
  borderColor: '#EDEEF2',
  paddingBottom: '24px',
});

export const Button = styled.button({
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  borderRadius: 8,
  border: '1px solid',
  borderColor: '#4E60FF',
  padding: '12px 16px',
  backgroundColor: 'white',
});

export const ButtonText = styled.span({
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '20px',
  color: '#4E60FF',
  letterSpacing: '0.3px',
});

export const RatingHeader = styled.span({
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: '16px',
  letterSpacing: ' 0.0894286px',
});

export const RatingScore = styled.span({
  fontWeight: 600,
  fontSize: '18px',
  lineHeight: '24px',
  letterSpacing: '0.0894286px',
  color: '#4E60FF',
});

export const Votes = styled.span({
  fontWeight: 700,
  fontSize: '10px',
  lineHeight: '14px',
  color: '#83859C',
});

export const StarContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 1,
});
