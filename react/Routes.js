import React, { useEffect, useState, useContext } from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import ProtectedRoute from './utility/ProtectedRoute';

import { GlobalContext } from './GlobalContext';

const Home = React.lazy(() => import("./pages/Home"))
const Login = React.lazy(() => import("./pages/Login"))
const Slots = React.lazy(() => import("./pages/Slots"))
const Slot = React.lazy(() => import("./pages/Slot"))
const Ads = React.lazy(() => import("./pages/Ads"))
const Stats = React.lazy(() => import("./pages/Stats"))
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"))
const ForgotPassword = React.lazy(() => import("./pages/ForgotPassword"))

import AppLoader from './components/AppLoader';

import { AppConst } from './Config';

const Routes = () => {

  const location = useLocation();

  const { token } = useContext(GlobalContext);

  const routes = [
    { component: Home, security: 'private', path: '/' },
    { component: Login, security: 'public', path: '/login' },
    { component: ForgotPassword, security: 'public', path: '/forgot-password' },
    { component: Slots, security: 'private', path: '/slots' },
    { component: Slot, security: 'private', path: '/slots/:id' },
    { component: Ads, security: 'private', path: '/ads' },
    { component: Stats, security: 'private', path: '/stats' },
  ];

  // Fallback route
  routes.push({ component: PageNotFound, security: 'public', path: '*' })

  return (
    <React.Suspense fallback={<AppLoader />}>
      <Switch location={location} key={location.pathname} >
        {routes.map((route, key) => {
          return (
            route.security === "public" ?
              <Route exact key={key} path={route.path} component={route.component} /> :
              <ProtectedRoute exact key={key} path={route.path} component={route.component} token={token} />
          )
        })}
      </Switch>
    </React.Suspense>
  );
};

export default Routes;