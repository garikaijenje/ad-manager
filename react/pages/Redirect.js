import React, {useEffect, useContext} from 'react';
import { GlobalContext } from '../GlobalContext';
import { useLocation } from "react-router-dom";

const Redirect = () => {

  const { redirect } = useContext(GlobalContext);

  const location = useLocation();

  useEffect(() => {
    redirect(location.finalDestination, location.flash)
  }, [])

  return (
    <p align="center">Redirecting...</p>
  );
};

export default Redirect;