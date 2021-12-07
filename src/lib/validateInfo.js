import isEmptyObject from "./isEmptyObject";

const validateInfo = (values) =>
{
  let errors = {};

  if (!values.name.trim())
  {
    errors.name = "Nom obligatoire";
  }

  if (!values.picture.trim())
  {
    errors.picture = "Photo de profil obligatoire";
  }

  if (isEmptyObject(values.timezone))
  {
    errors.timezone = "Fuseau horaire obligatoire";
  }

  return errors;
};

export default validateInfo;