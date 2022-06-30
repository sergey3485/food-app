import styled from '@emotion/styled';

export const AnnouncmentCardRoot = styled.div<{ backgroundColor: string }>((props) => ({
  display: 'flex',
  backgroundColor: props.backgroundColor,
  width: 'max-content',
  borderRadius: '16px',
}));
