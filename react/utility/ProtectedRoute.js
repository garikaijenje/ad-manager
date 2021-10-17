import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { isEmpty } from './Helpers';

const ProtectedRoute = ({ component: Component, token, ...rest }) => {
  // let authenticated = true;
  // console.log("AUTH", authenticated)
  return (
    <Route {...rest} render={(props) => (
      token ? <Component {...props} /> : <Redirect to={{ pathname: '/login', flash: 'Please Login First.' }} />
      // authenticated ? <Component {...props} /> : <Redirect to='/login' />
     
    )} />
  )
};

export default ProtectedRoute;