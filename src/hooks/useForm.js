import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event, type) =>
  {
    const name = event.target ? event.target.name : type;
    const value = event.target ? event.target.value : event;

    if (name === 'picture')
    {
      setValues({
        ...values,
        'picture': URL.createObjectURL(event.target.files[0])
      });
    }
    else
    {      
      setValues({
        ...values,
        [name]: value
      });
    }
  }

  return [
    values,
    setValues,
    handleChange
  ];
}