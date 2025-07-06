import { styled } from '@mui/material/styles';
import { Container, Typography, Button, Grid } from '@mui/material';

export const StyledContainer = styled(Container)({
    paddingTop: '24px',
    paddingBottom: '24px',
});

export const StyledTitle = styled(Typography)({
    marginBottom: '16px',
});

export const StyledButton = styled(Button)({
    marginBottom: '16px',
});

export const StyledGrid = styled(Grid)({
    marginTop: '8px',
    justifyContent: 'flex-start',
});
