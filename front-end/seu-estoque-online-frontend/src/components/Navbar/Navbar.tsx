import { AppBar, Typography } from '@mui/material';
import { StyledToolbar } from './Navbar.styles';

export const Navbar = () => {
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6">Seu Estoque Online</Typography>
      </StyledToolbar>
    </AppBar>
  );
};