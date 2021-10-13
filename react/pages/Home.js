import React, { useState, useEffect, useContext } from 'react';
import Page from '../layouts/Page';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { useHistory, Link } from "react-router-dom";

import { ApiRequest } from '../utility/Api';
import { AppConst } from '../Config';

import { GlobalContext } from '../GlobalContext';

const Home = () => {

  const { token, logout, redirect } = useContext(GlobalContext);
  

  return (
    <Page>
    <Header title="Dashboard" active="dashboard"/>
    <div className="row row-xs">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Slots</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
                <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">81</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Ads</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
                <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">137</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Impressions</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
                <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">3,020</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Clicks</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
                <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">1,650</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mg-t-10">
            <div className="card ht-100p">
              <div className="card-header d-flex align-items-center justify-content-center">
                <h3 className="mg-b-0">Ads</h3>
              </div>
              <ul className="list-group list-group-flush tx-13">
                <li className="list-group-item d-flex pd-sm-x-20">
                  <div className="avatar d-none d-sm-block"><span className="avatar-initial rounded-circle bg-success"><i className="icon ion-md-checkmark"></i></span></div>
                  <div className="pd-sm-l-10">
                    <p className="tx-medium mg-b-0">My First Ad</p>
                    <small className="tx-12 tx-color-03 mg-b-0">Expires Mar 21, 2019</small>
                  </div>
                  <div className="mg-l-auto text-right">
                    <p className="tx-medium mg-b-0"><a href="#" className="link-03">View</a></p>
                    <small className="tx-12 tx-success mg-b-0">Active</small>
                  </div>
                </li>
                <li className="list-group-item d-flex pd-sm-x-20">
                  <div className="avatar d-none d-sm-block"><span className="avatar-initial rounded-circle bg-danger"><i className="icon ion-md-close"></i></span></div>
                  <div className="pd-sm-l-10">
                    <p className="tx-medium mg-b-0">Delta Ad</p>
                    <small className="tx-12 tx-color-03 mg-b-0">Expired Mar 19, 2019</small>
                  </div>
                  <div className="mg-l-auto text-right">
                    <p className="tx-medium mg-b-0"> <a href="#" className="link-03">View</a></p>
                    <small className="tx-12 tx-danger mg-b-0">Expired</small>
                  </div>
                </li>
              </ul>
              <div className="card-footer text-center tx-13">
                <Link to="/ads" className="link-03">View All Ads <i className="icon ion-md-arrow-down mg-l-5"></i></Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mg-t-10">
            <div className="card ht-100p">
              <div className="card-header d-flex align-items-center justify-content-center">
                <h3 className="mg-b-0">Slots</h3>
              </div>
              <ul className="list-group list-group-flush tx-13">
                <li className="list-group-item d-flex pd-sm-x-20">
                  <div className="avatar"><span className="avatar-initial rounded-circle bg-primary">M</span></div>
                  <div className="pd-l-10">
                    <p className="tx-medium mg-b-0">Main Slot</p>
                    <small className="tx-12 tx-color-03 mg-b-0">4 Ads</small>
                  </div>
                  <div className="mg-l-auto d-flex align-self-center">
                    <a href="#" className="link-03">Manage</a>
                  </div>
                </li>
                <li className="list-group-item d-flex pd-sm-x-20">
                  <div className="avatar"><span className="avatar-initial rounded-circle bg-primary op-5">M</span></div>
                  <div className="pd-l-10">
                    <p className="tx-medium mg-b-0">Second Slot</p>
                    <small className="tx-12 tx-color-03 mg-b-0">0 Ads</small>
                  </div>
                  <div className="mg-l-auto d-flex align-self-center">
                   <a href="#" className="link-03">Manage</a>
                  </div>
                </li>
               
              
              </ul>
              <div className="card-footer text-center tx-13">
                <Link to="/slots" className="link-03">View All Slots <i className="icon ion-md-arrow-down mg-l-5"></i></Link>
              </div>
            </div>
          </div>
    
        </div>
      <Footer/>
    </Page>
  );
};

export default Home;