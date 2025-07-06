import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const StyledCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width:'100%',
  maxWidth: 280,
  margin: 8,
  borderRadius: 20,
  backgroundColor: '#f5f5f5',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: '#f0eded',
  },
});