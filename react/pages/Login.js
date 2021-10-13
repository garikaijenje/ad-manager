import React, { useEffect, useState, useContext } from 'react';

import { useLocation, Link } from "react-router-dom";
import AuthPage from '../layouts/AuthPage';
import Footer from '../layouts/Footer';

import { GlobalContext } from '../GlobalContext';

const Login = () => {

  const { token, login, redirect, clearFlashMessage } = useContext(GlobalContext);

  const location = useLocation();

  useEffect(() => {
    if (token) {
      redirect('/')
    }
  }, [])

  return (

    <AuthPage>

    <div className="row">
    <div className="col-sm-6 offset-sm-3">

      <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
         
          <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
            <div className="wd-100p">
             
              <img src="/logo.jpg" className="img-fluid" alt="" style={{marginBottom: 25}}/>
              {location.flash && (<p style={{color:'red'}}>{location.flash}</p>)}

              <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="yourname@yourmail.com"/>
              </div>
              <div className="form-group">
                <div className="d-flex justify-content-between mg-b-5">
                  <label className="mg-b-0-f">Password</label>
                  <Link to="/forgot-password" className="tx-13">Forgot password?</Link>
                </div>
                <input type="password" className="form-control" placeholder="Enter your password"/>
              </div>
              <button onClick={()=>login('dfsdfdf')} className="btn btn-brand-02 btn-block">Sign In</button>
            </div>
          </div>
        </div>

      </div>
    </div>

      <Footer/>
    </AuthPage>


  );
};

export default Login;