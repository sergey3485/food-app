import styled from '@emotion/styled';

export const RollSetRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 264,
});

export const ImgContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 264,
  height: 152,
  borderRadius: '12px',
  border: 'none',
  overflow: 'hidden',
});

export const Title = styled.span({
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: 1,
  letterSpacing: '0.1px',
  marginTop: '8px',
});

export const Description = styled.span({
  fontWeight: 400,
  fontSize: '12px',
  lineHeight: 1,
  letterSpacing: '0.2px',
  margin: '8px 0px 12px 0px',
  color: '#83859C',
});

export const Cost = styled.span({
  fontWeight: 800,
  fontSize: '24px',
  lineHeight: 1,
  letterSpacing: '0.1px',
});

export const MenuBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const AddButton = styled.div({
  borderRadius: '12px',
  backgroundColor: '#F3F4FF',
  padding: 8,
});
