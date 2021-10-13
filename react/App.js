import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Routes from './Routes';

import GlobalContextProvider from './GlobalContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalContextProvider>
        <Routes />
      </GlobalContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('app')
);
