import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import reportWebVitals from './reportWebVitals';
import AppContainer from './containers/AppContainer';
import { UsersProvider } from './store/contexts/UsersContext';

ReactDOM.render(
  <>
    <CssBaseline />
    <UsersProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContainer />} />
        </Routes>
      </BrowserRouter>
    </UsersProvider>
  </>,
  document.getElementById('root')
);

reportWebVitals();
