import styled from '@emotion/styled';

export const NagitiSetRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: 620,
});

export const ImgContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 152,
  height: 104,
  borderRadius: '12px',
  border: 'none',
  overflow: 'hidden',
});

export const Cost = styled.span({
  fontWeight: 800,
  fontSize: '24px',
  lineHeight: 1,
  letterSpacing: '0.1px',
});

export const AddToBasket = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 16px',
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.3px',
  border: 'none',
  borderRadius: '8px',
  backgroundColor: '#F3F4FF',
  color: '#4E60FF',
  marginTop: 16,
});

export const AddIcon = styled.div({
  marginRight: '4px',
});

export const DecreaseNumber = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 6,
  backgroundColor: '#EDEEF2',
  color: '#C7C8D2',
  borderRadius: '8px',
  border: 'none',
});

export const IncreaseNumber = styled.button({
  padding: 6,
  backgroundColor: '#EDEEF2',
  color: 'black',
  borderRadius: '8px',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Amount = styled.span({
  fontWeight: 700,
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: '0.1px',
  color: 'black',
  margin: '0px 8px',
});
