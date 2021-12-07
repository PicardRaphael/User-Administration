const UsersReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.payload;
        })
      }
    case 'EDIT_USER':
      const updateUser = action.payload;

      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id)
        {
          console.log('ok')
          return updateUser;
        }
        return user;
      })
      return {
        ...state,
        users: updateUsers
      }
    default:
      return state;
  }
}
export default UsersReducer;