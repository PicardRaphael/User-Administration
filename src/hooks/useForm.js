import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event, type) =>
  {
    const name = event.target ? event.target.name : type;
    const value = event.target ? event.target.value : event;

    setValues({
      ...values,
      [name]: value
    });
  }

  return [
    values,
    setValues,
    handleChange
  ];
}