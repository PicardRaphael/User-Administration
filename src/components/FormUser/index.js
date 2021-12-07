import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '@mui/material';
import { allTimezones } from "react-timezone-select";
import
{
  MyFormDiv,
  MyInput,
  MyLabel,
  MyButton,
  MyTimezone,
  MyErrorText,
  MyAlert
} from './FormUserStyle';

const FormUser = ({
  values,
  handleChange,
  handleFormSubmit,
  errors,
  successful
}) => (
  <>
    { successful && <MyAlert severity="success">L'utilisata à été ajouté</MyAlert>}
    <form onSubmit={handleFormSubmit}>
      <MyFormDiv component="div">
        <FormGroup>
          <MyLabel required id="name">Nom</MyLabel>
          <MyInput
              id="name"
              name="name"
              label="Entrez votre nom"
              variant="outlined"
              value={values.name}
              error={errors.hasOwnProperty('name')}
              helperText={errors.name}
              onChange={(evt) => handleChange(evt)}
          />
        </FormGroup>
        <FormGroup>
          <MyLabel required id="name">Photo de profil</MyLabel>
          <MyInput
              id="picture"
              name="picture"
              type="file"
              error={errors.hasOwnProperty('picture')}
              helperText={errors.picture}
              onChange={(evt) => handleChange(evt)}
          />
        </FormGroup>
        <FormGroup>
          <MyLabel required id="timezone">Fuseau horaire</MyLabel>
          <MyTimezone
              id="timezone"
              name="timezone"
              placeholder="Entrez votre fuseau horaire"
              classNamePrefix="react-select"
              className={`${errors.hasOwnProperty('timezone') ? "error-timezone" : ""}`}
              value={values.timezone}
              onChange={(value) => handleChange(value, 'timezone')}
              timezones={{
                  ...allTimezones,
              }}
          />
          {errors.hasOwnProperty('timezone') && <MyErrorText>{errors.timezone}</MyErrorText>}
        </FormGroup>
        <MyButton variant="contained" type="submit">Sauvegarder</MyButton>
      </MyFormDiv>
    </form>
  </>
)

FormUser.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleFormSubmit:  PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    timezone: PropTypes.object.isRequired
  }).isRequired
}

export default FormUser;
