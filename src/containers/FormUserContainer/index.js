import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from "uuid";
import FormUser from '../../components/FormUser';
import { useForm } from '../../hooks/useForm';
import { UsersContext } from '../../store/contexts/UsersContext';
import validateInfo from '../../lib/validateInfo';
import isEmptyObject from '../../lib/isEmptyObject';

const FormUserContainer = ({ initialValues }) =>
{
  const { addUser, editUser } = useContext(UsersContext);
  const [successful, setSuccessful] = useState(false);
  const [errors, setErrors] = useState({});

  const [
    values,
    setValues,
    handleChange,
  ] = useForm(initialValues);

  const handleFormSubmit = (event) =>
  {
    event.preventDefault();

    setErrors(validateInfo(values));

    if (isEmptyObject(validateInfo(values)))
    {
      setValues(initialValues);
      if (!values.hasOwnProperty('id'))
      { 
        addUser({
          id: uuid(),
          ...values
        })
      } else
      {
        editUser({
          ...values
        })
      }
      setSuccessful(true);
      setTimeout(() => setSuccessful(false), 1000);
    }
  }

  return (
    <FormUser
      values={values}
      handleChange={handleChange}
      handleFormSubmit={handleFormSubmit}
      errors={errors}
      successful={successful}
    />
  )
}

FormUserContainer.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    timezone: PropTypes.object.isRequired
  }).isRequired
}

export default FormUserContainer;
