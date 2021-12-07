import React, { createContext, useReducer } from 'react';
import UsersReducer from '../reducers/UsersReducer';

// Initial State
const initialState = {
  users: [
    {
      id: 0,
      name: 'Raph',
      picture: 'https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png',
      timezone: {
        abbrev: "CET",
        altName: "Central European Standard Time",
        label: "(GMT+1:00) Brussels, Copenhagen, Madrid, Paris",
        offset: 1,
        value: "Europe/Brussels"
      }
    },
    {
      id: 1,
      name: 'Jen',
      picture: 'https://cdn-icons-png.flaticon.com/512/194/194938.png',
      timezone: {
        abbrev: "CET",
        altName: "Central European Standard Time",
        label: "(GMT+1:00) Brussels, Copenhagen, Madrid, Paris",
        offset: 1,
        value: "Europe/Brussels"
      }
    },
  ]
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