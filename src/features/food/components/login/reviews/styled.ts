import styled from '@emotion/styled';

export const ReviewsRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: '16px',
  border: '1px solid',
  borderColor: '#EDEEF2',
});

export const DropDownMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid',
  borderColor: '#C7C8D2',
  padding: '8px 8px 8px 12px',
  marginBottom: '24px',
  color: '#83859C',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '18px',
  borderRadius: '8px',
});

export const ContentBox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
});

export const DropDownMenuText = styled.span({
  fontWeight: 800,
  fontSize: '24px',
  lineHeight: 1,
  letterSpacing: '0.1px',
});

export const DropDownMenuPicked = styled.span({
  color: 'black',
  marginLeft: '2px',
  marginRight: '8px',
});
