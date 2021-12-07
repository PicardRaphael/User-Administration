import React, { useState } from 'react'
import App from '../../components/App';

const AppContainer = props => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <App
      openModal={openModal}
      setOpenModal={setOpenModal}
    />
  )
}

export default AppContainer;
