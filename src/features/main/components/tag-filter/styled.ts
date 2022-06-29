import styled from '@emotion/styled';

export interface TagFilterRootProps {
  active: boolean;
}

export const TagFilterRoot = styled.button<TagFilterRootProps>((props) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: props.active ? '#F3F4FF' : '#FFFFFF',
  border: props.active ? '2px solid #4E60FF' : '1px solid #EDEEF2',
  borderRadius: '16px',
  width: '160px',
  height: '80px',
  ':hover': {
    border: '1px solid #697BFF',
    backgroundColor: '#F8F9FF',
  },
  cursor: 'pointer',
}));
