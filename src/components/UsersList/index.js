import React from 'react';
import PropTypes from 'prop-types';
import
{
  MyAvatar,
  MyDivider,
  MyList,
  MyListItem,
  MyListItemAvatar,
  MyListItemText,
  MyIconDelete,
  MyIconEdit,
  MyText
} from './UsersListStyle';

const UsersList = ({ users, removeUser }) => (
  <MyList>
    {users.length > 0 ? (
      <>
        {users.map(user => (
          <React.Fragment key={user.id}>
            <MyListItem>
              <MyListItemAvatar>
                <MyAvatar alt={user.name} src={user.picture} />
              </MyListItemAvatar>
              <MyListItemText primary={user.name} secondary={user.timezone.label} />
              <MyIconEdit />
              <MyIconDelete onClick={() => removeUser(user.id)}/>
            </MyListItem>
            <MyDivider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </>
    ) : (
      <MyText variant="h4">No Users</MyText>
    )}
  </MyList>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    timezone: PropTypes.shape({
      label: PropTypes.string.isRequired
    })
  })),
  removeUser: PropTypes.func.isRequired
}

export default UsersList;
