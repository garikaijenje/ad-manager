import React from 'react';
import Page from '../layouts/Page';

import {Link} from 'react-router-dom'


const PageNotFound = () => {
  return (
    <Page>
       <div className="content content-fixed content-auth-alt">
      <div className="container ht-100p tx-center">
        <div className="ht-100p d-flex flex-column align-items-center justify-content-center">
          <div className="wd-70p wd-sm-250 wd-lg-500 mg-b-15"><img src="/logo.jpg" className="img-fluid" alt=""/></div>
          <h1 className="tx-color-01 tx-24 tx-sm-32 tx-lg-36 mg-xl-b-5">404 Page Not Found</h1>
          <h5 className="tx-16 tx-sm-18 tx-lg-20 tx-normal mg-b-20">Oopps. The page you were looking for doesn't exist.</h5>
          <p className="tx-color-03 mg-b-30">You may have mistyped the address or the page may have moved.</p>
          <span className="tx-12 tx-color-03">Back to <Link to="/">Dashboard</Link></span>

        </div>
      </div>
    </div>
    </Page>
  );
};

export default PageNotFound;