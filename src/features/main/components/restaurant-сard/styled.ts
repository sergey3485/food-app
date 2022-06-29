import styled from '@emotion/styled';

export const RestaurantCardRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 350,
  position: 'relative',
});

export const RestaurantImg = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 350,
  height: 160,
  borderRadius: '10px 10px 0px 0px',
  overflow: 'hidden',
});

export const RestaurantInfo = styled.div({
  width: 350,
  display: 'flex',
  flexDirection: 'column',
  padding: 16,
  border: '1px solid',
  borderTop: 'none',
  borderColor: '#EDEEF2',
  borderRadius: '0px 0px 10px 10px',
});

export const TimeIcon = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 16,
  height: 16,
});
