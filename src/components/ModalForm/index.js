import React from 'react';
import PropTypes from 'prop-types';
import
{
  MyModal,
  MyModalContent,
  MyModalTitle,
  MyIconClose,
  MyDivTitle
} from './ModalFormStyle';
import FormUserContainer from '../../containers/FormUserContainer';

const ModalForm = ({
  open,
  setOpen,
  ...props
}) => (
  <MyModal open={open}>
    <MyDivTitle>
      <MyModalTitle>Ajouter un utilisateur</MyModalTitle>
      <MyIconClose onClick={() => setOpen(false)}/>
    </MyDivTitle>
    <MyModalContent>
      <FormUserContainer {...props} />
    </MyModalContent>
  </MyModal>
)


ModalForm.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired
}

export default ModalForm;
