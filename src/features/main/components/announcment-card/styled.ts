import styled from '@emotion/styled';

export const AnnouncmentCardRoot = styled.div<{ backgroundColor: string }>((props) => ({
  display: 'flex',
  backgroundColor: props.backgroundColor,
  borderRadius: '16px',
  width: '540px',
}));
