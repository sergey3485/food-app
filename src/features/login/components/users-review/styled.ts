import styled from '@emotion/styled';

export const UsersReviewRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

export const UserReviewRoot = styled.div({
  display: 'flex',
  borderBottom: '1px solid',
  borderColor: '#EDEEF2',
  paddingBottom: '24px',
  marginBottom: '16px',
  ':last-child': {
    margin: 0,
  },
});

export const UserIcon = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  overflow: 'hidden',
  borderRadius: '50%',
  border: 'none',
});

export const UserName = styled.span({
  fontWeight: 700,
  height: '18px',
  fontSize: '14px',
  lineHeight: 1,
  letterSpacing: '0.1px',
  color: '#2B2B43',
});

export const ReviewText = styled.span({
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  letterSpacing: '0.1px',
  width: '240px',
  marginTop: '12px',
});

export const CreatedAt = styled.span({
  fontWeight: 700,
  fontSize: '12px',
  lineHeight: 1,
  letterSpacing: '0.1px',
  color: '#83859C',
  height: '14px',
  marginLeft: '8px',
});

export const LikesCounter = styled.span({
  fontWeight: 600,
  fontSize: '12px',
  lineHeight: 1,
  letterSpacing: '0.1px',
  color: '#545563',
  height: '16px',
  marginLeft: '8px',
  marginRight: '16px',
});
