import React, { useState, useEffect, useContext } from 'react';
import Page from '../layouts/Page';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

import { ApiRequest, handleErrors, handleSuccess } from '../utility/Api';

import { GlobalContext } from '../GlobalContext';
import PulseLoader from "react-spinners/PulseLoader";

import ApiErrors from '../components/ApiErrors';
import AdsTable from '../components/AdsTable';
import Forms from '../components/Forms';

const Ads = () => {

  const { token, logout, redirect, setToken, location } = useContext(GlobalContext);

  const [ads, setAds] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    // Fetch Ads
    (async () => {

      setLoading(true);

      ApiRequest.get({
        endpoint: 'ads',
        token: token,
        success: (response) => {
          let res = handleSuccess(response);
          setLoading(false);
          setAds(res.data)
        },
        failure: (response) => {
          let res = handleErrors(response);
          setErrors(res)
          setLoading(false);
        }
      });

    })();
   
  }, [])
  
  return (
    <Page>
    <Header title="Ads" active="ads" />

    <div className="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center">
        <div className="btn-group mg-t-20 mg-sm-t-0">
          <button href="#addAd" className="btn btn-xs btn-success btn-uppercase" data-toggle="modal">Add New Advert</button>
        </div>
      </div>

      {location.flash && (<div className="alert alert-success mt-4" role="alert"> {location.flash} </div>)}

      <ApiErrors errors={errors} />

      <AdsTable ads={ads} loading={loading} />

      <Forms/>

      <Footer/>
    </Page>
  );
};

export default Ads;