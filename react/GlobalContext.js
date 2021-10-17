import React, { createContext, useState, useEffect } from 'react';
// import { AppConst } from './utils/AppConst';
// import { Apis } from './utils/Apis';
import { AppConst } from './Config';

import { useHistory, withRouter, useLocation } from "react-router-dom";
import usePersistedState from './hooks/usePersistedState';


export const GlobalContext = createContext();

function GlobalContextProvider(props) {

  const [token, setToken] = usePersistedState(AppConst.token, '');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (token) localStorage.setItem(AppConst.token, token);
  }, [token])

  const redirect = (to, flashMessage = null, finalDestination = null) => {
    if (!flashMessage) {
      history.push(to);
    } else {
      history.push({
        pathname: to,
        flash: flashMessage,
        finalDestination: finalDestination
      });
    }
  }

  const login = (token) => {
    setToken(token)
    history.push("/");
  }

  const logout = () => {
    setToken('')
    history.push({
      pathname: '/login',
      flash: "You've been securely logged out.",
    });
  }

  const clearFlashMessage = () => {
    if (location.flash) {
      history.replace({ ...location, flash: null });
    }
  }


  let globalParams = {
    token, setToken,
    login, redirect,logout,
    clearFlashMessage, location
  }

  return (
    <GlobalContext.Provider value={globalParams}>
      {props.children}
    </GlobalContext.Provider>

  );
}

export default GlobalContextProvider;