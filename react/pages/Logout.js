import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../GlobalContext';

const Logout = () => {

  const { redirect, setToken } = useContext(GlobalContext);

  useEffect(() => {
    setToken('')
    redirect('/login', "Your session has expired.")
  }, [])

  return (
    <h1 align="center">Your session has expired.</h1>
  );
};

export default Logout;