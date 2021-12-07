import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from "uuid";
import FormUser from '../../components/FormUser';
import { useForm } from '../../hooks/useForm';
import { UsersContext } from '../../store/contexts/UsersContext';

const FormUserContainer = ({ initialValues }) =>
{
  const { addUser } = useContext(UsersContext);
  const [
    values,
    setValues,
    handleChange,
    handleFormSubmit,
    errors
  ] = useForm(initialValues);

  const submit = (event) =>
  {
    handleFormSubmit(event);
    if (Object.keys(errors).length === 0)
    {
      setValues(initialValues);
      addUser({
        id: uuid(), 
        ...values
      })
    }
  }

  return (
    <FormUser
      values={values}
      handleChange={handleChange}
      handleFormSubmit={submit}
      errors={errors}
    />
  )
}

FormUserContainer.propTypes = {
    initialValues: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        timezone: PropTypes.object.isRequired
    })
}
FormUserContainer.defaultProps = {
    initialValues: {
        name: '',
        picture: '',
        timezone: {}
    }
}
export default FormUserContainer;
