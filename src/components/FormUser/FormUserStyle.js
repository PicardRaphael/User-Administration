import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import TimezoneSelect from "react-timezone-select"
import FormHelperText from '@mui/material/FormHelperText';

export const MyFormDiv = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
});

export const MyInput = styled(TextField)({
  marginBottom: '0.625rem',
  '&.MuiTextField-root>.Mui-error>#picture': {
    color: '#d32f2f'
  }
});

export const MyLabel = styled(InputLabel)({
  marginBottom: '0.625rem'
});

export const MyButton = styled(Button)({
  marginTop: '0.625rem'
});

export const MyErrorText = styled(FormHelperText)({
  color: '#d32f2f',
  margin: '3px 14px 0 14px',
});

export const MyTimezone = styled(TimezoneSelect)({
  '&:hover': {
    '&.error-timezone>.react-select__control': {
      border: '1px solid #d32f2f !important',
    },
    '&#timezone>.react-select__control': {
      border: '1px solid black'
    },
    '&#timezone>.react-select__control--is-focused': {
      border: 'none',
    },
  },
  '&#timezone>.react-select__control--is-focused': {
    border: '1px solid #2684ff !important',
  },
  '&.error-timezone>.react-select__control': {
    border: '1px solid #d32f2f',
  },
  '&.error-timezone>.react-select__control>.react-select__value-container>#react-select-2-placeholder': {
    color: '#d32f2f'
  },
  '&#timezone>.react-select__menu': {
    position: 'initial',
    width: '339px'
  }
});
