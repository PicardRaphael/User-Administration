import React, { useContext, useState } from 'react'
import App from '../../components/App';
import { UsersContext } from '../../store/contexts/UsersContext';

const AppContainer = props => {
  const [openModal, setOpenModal] = useState(false);
  const { users } = useContext(UsersContext);

  return (
    <App
      openModal={openModal}
      setOpenModal={setOpenModal}
      users={users}
    />
  )
}

export default AppContainer;
