import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { v4 as uuid } from "uuid";
import FormUser from '../../components/FormUser';
import { useForm } from '../../hooks/useForm';
import { UsersContext } from '../../store/contexts/UsersContext';
import validateInfo from '../../lib/validateInfo';

const FormUserContainer = ({ initialValues }) =>
{
  const { addUser } = useContext(UsersContext);
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

    if (Object.keys(validateInfo(values)).length === 0)
    {
      setValues(initialValues);
      addUser({
        id: uuid(), 
        ...values
      })
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
