import React, { useContext, useState } from 'react'
import App from '../../components/App';
import { UsersContext } from '../../store/contexts/UsersContext';

const AppContainer = props => {
  const [openModal, setOpenModal] = useState(false);
  const [initialValues, setInitialValues] = useState({
    name: '',
    picture: '',
    timezone: {}
  });
  const { users, removeUser } = useContext(UsersContext);

  const modalEditUser = (user) =>
  {
    setOpenModal(true);
    setInitialValues(user);
  }

  return (
    <App
      openModal={openModal}
      setOpenModal={setOpenModal}
      users={users}
      removeUser={removeUser}
      initialValues={initialValues}
      modalEditUser={modalEditUser}
    />
  )
}

export default AppContainer;
