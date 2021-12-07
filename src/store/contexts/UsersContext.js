import React, { createContext, useReducer } from 'react';
import UsersReducer from '../reducers/UsersReducer';

// Initial State
const initialState = {
  users: []
}

// Create Context
export const UsersContext = createContext(initialState);

// Provider Component
export const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UsersReducer, initialState);

  // Actions
  const addUser = (user) => {
    dispatch({
      type: 'ADD_USER',
      payload: user
    })
  }

  return (
    <UsersContext.Provider value={{
      users: state.users,
      addUser,
    }}>
      {children}
    </UsersContext.Provider>
  )
}