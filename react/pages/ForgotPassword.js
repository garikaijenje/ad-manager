import React from 'react';
import Page from '../layouts/Page';

import {Link} from 'react-router-dom'


const ForgotPassword = () => {
  return (
    <Page>
       <div className="content content-fixed content-auth-alt">
      <div className="container d-flex justify-content-center ht-100p">
        <div className="mx-wd-300 wd-sm-450 ht-100p d-flex flex-column align-items-center justify-content-center">
          <div className="wd-80p wd-sm-500 mg-b-15"><img src="/logo.jpg" className="img-fluid" alt=""/></div>
          <h4 className="tx-20 tx-sm-24">Reset your password</h4>
          <p className="tx-color-03 mg-b-30 tx-center">Enter your email address and we will send you a new password.</p>
          <div className="wd-100p d-flex flex-column flex-sm-row mg-b-40">
            <input type="text" className="form-control wd-sm-250 flex-fill" placeholder="Enter your email address"/>
            <button className="btn btn-brand-02 mg-sm-l-10 mg-t-10 mg-sm-t-0">Reset Password</button>
          </div>
          <span className="tx-12 tx-color-03">Back to <Link to="/login">Login</Link></span>

        </div>
      </div>
    </div>
    </Page>
  );
};

export default ForgotPassword;