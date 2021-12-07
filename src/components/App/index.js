import React from 'react';
import PropTypes from 'prop-types';
import
{
  MyTitle,
  MyDivGloval,
  MyButtonAdd,
  IconAdd
} from './AppStyle';
import ModalForm from '../ModalForm';
import UsersList from '../UsersList';
import isEmptyObject from '../../lib/isEmptyObject';

const App = ({ openModal, setOpenModal, users, removeUser, initialValues, modalEditUser, modalAddUser }) => (
  <main>
    <MyDivGloval component="div">
      <MyTitle variant="h1">Gestion d'utilisateurs</MyTitle>
      <MyButtonAdd
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={modalAddUser}
      >
        <IconAdd />
        Ajouter un utilisateur
      </MyButtonAdd>
      <UsersList users={users} removeUser={removeUser} modalEditUser={modalEditUser} />
      {!isEmptyObject(initialValues) &&  <ModalForm open={openModal} setOpen={setOpenModal} initialValues={initialValues} />}
    </MyDivGloval>
  </main>
)

App.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  removeUser: PropTypes.func.isRequired,
  modalEditUser: PropTypes.func.isRequired,
  modalAddUser: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired
}

export default App;