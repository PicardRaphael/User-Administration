import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export const MyDivGloval = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
});

export const MyTitle = styled(Typography)({
  fontSize: '1.875rem',
  marginTop: '0.625rem',
  fontWeight: 700
});

export const MyButtonAdd = styled(Fab)({
  marginTop: '0.625rem',
});

export const IconAdd = styled(AddIcon)({
});