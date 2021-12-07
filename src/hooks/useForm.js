import { useState } from "react";
import validateInfo from "../lib/validateInfo";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event, type) =>
  {
    const name = event.target ? event.target.name : type;
    const value = event.target ? event.target.value : event;

    setValues({
      ...values,
      [name]: value
    });
  }

  const handleFormSubmit = (event) =>
  {
    event.preventDefault();
    setErrors(validateInfo(values));
  }

  return [
    values,
    setValues,
    handleChange,
    handleFormSubmit,
    errors
  ];
}