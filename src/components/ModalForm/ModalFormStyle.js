import { styled } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

export const MyModal = styled(Dialog)({
  '&.MuiPaper-root': {
    with: '476px'
  }
});

export const MyModalContent = styled(DialogContent)({
});

export const MyModalTitle = styled(DialogTitle)({
  textAlign: 'center',
  paddingBottom: '0rem'
});

export const MyDivTitle = styled(Box)({
  position: 'relative'
});

export const MyIconClose = styled(CloseIcon)({
  position: 'absolute',
  top: '1.25rem',
  right: '1.25rem',
  cursor: 'pointer',
  '&:hover': {
    color: '#d32f2f'
  }
});