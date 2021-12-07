import { styled } from '@mui/system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

export const MyList = styled(List)({
});

export const MyListItem = styled(ListItem)({
});

export const MyListItemAvatar = styled(ListItemAvatar)({
});

export const MyAvatar = styled(Avatar)({
});

export const MyListItemText = styled(ListItemText)({
});

export const MyDivider = styled(Divider)({
});

export const MyText = styled(Typography)({
});

export const MyIconEdit = styled(EditIcon)({
    marginLeft: '1.25rem',
    cursor: 'pointer',
    '&:hover': {
        color: '#66bb6a',
    }
});

export const MyIconDelete = styled(DeleteForeverIcon)({
    marginLeft: '1.25rem',
    cursor: 'pointer',
    '&:hover': {
        color: '#d32f2f',
    }
});