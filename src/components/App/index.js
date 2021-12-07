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

const App = ({ openModal, setOpenModal, users, removeUser }) => (
  <main>
    <MyDivGloval component="div">
      <MyTitle variant="h1">Gestion d'utilisateurs</MyTitle>
      <MyButtonAdd
        variant="extended"
        color="primary"
        aria-label="add"
        onClick={() => setOpenModal(true)}
      >
        <IconAdd />
        Ajouter un utilisateur
      </MyButtonAdd>
      <UsersList users={users} removeUser={removeUser} />
      <ModalForm open={openModal} setOpen={setOpenModal} />
    </MyDivGloval>
  </main>
)

App.propTypes = {
  openModal: PropTypes.bool.isRequired,
  setOpenModal: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired,
  removeUser: PropTypes.func.isRequired
}

export default App;