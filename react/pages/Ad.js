import React, { useState, useEffect, useContext } from 'react';
import Page from '../layouts/Page';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { useHistory } from "react-router-dom";
import { ApiRequest, handleErrors, handleSuccess } from '../utility/Api';
import PulseLoader from "react-spinners/PulseLoader";

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

import { GlobalContext } from '../GlobalContext';
import Modal from '../components/Modal';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextError from '../components/TextError';
import { DisplayFormikState } from '../utility/Helpers';
import Forms from '../components/Forms';

const Ad = ({ match }) => {

  const { token, logout, redirect, setToken } = useContext(GlobalContext);

  const [ad, setAd] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    // Fetch Ad
    (async () => {

      setLoading(true);

      ApiRequest.get({
        endpoint: `ads/${match.params.id}`,
        token: token,
        success: (response) => {
          let res = handleSuccess(response);
          setLoading(false);
          setAd(res.data)
        },
        failure: (response) => {
          setErrors(handleErrors(response))
          setLoading(false);
        }
      });

    })();


  }, [])

  return (
    <Page>
      <Header title={loading ? <PulseLoader color="#9d1e29" loading={loading} size={20} /> : (ad && ad.title)} active="ads" />

      <div className="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center">
        <div className="btn-group mg-t-20 mg-sm-t-0">
          <button href="#addAd" className="btn btn-xs btn-success btn-uppercase" data-toggle="modal">Add New Ad</button>
          <button href="#updateAd" className="btn btn-xs btn-warning btn-uppercase" data-toggle="modal">Update Ad</button>
          <button href="#deleteAd" className="btn btn-xs btn-danger btn-uppercase" data-toggle="modal">Delete Ad</button>
        </div>
      </div>

      <div className="row row-xs">

        <div className="col-12">
          <div className="card card-body">
            <div className="d-md-flex align-items-center justify-content-between">
              <div className="media align-sm-items-center">
                <div className="media-body mg-l-15">
                  <div className="d-flex align-items-baseline">
                    <h2 className="tx-20 tx-lg-28 tx-normal tx-rubik tx-spacing--2 lh-2 mg-b-0">{loading ? <PulseLoader color="#9d1e29" loading={loading} size={10} /> : (ad && ad.status)}</h2>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row mg-t-20 mg-md-t-0">
                <h6 className="tx-12 tx-lg-14 tx-semibold tx-uppercase tx-spacing-1 mg-b-5">{loading ? <PulseLoader color="#9d1e29" loading={loading} size={10} /> : ad && (ad.status === "Active" ? `Expires on ${ad.end}` : ad.status === "Pending" ? `Starts on ${ad.start}` : `Expired on ${ad.end}`)}</h6>
              </div>
            </div>
          </div>
        </div>
 


        <div className="col-lg-9 mg-t-10">
          <div className="card card-crypto">
            <div className="card-body pd-10 pd-sm-20">
              {ad && <img src={`data:${ad.type};base64, ${ad.image}`} style={{maxWidth:'100%'}} />}
            </div>

            {ad && ad.link &&
            <div className="card-footer pd-20">
              Link: <a href={ad.link}>{ad.link}</a>
            </div>
            }
          </div>
        </div>

        <div className="col-lg-3 mg-t-10">
          <div className="card">
            <div className="card-header">
              <h6 className="mg-b-0">Statistics</h6>
            </div>
            <div className="card-body pd-10">
              <div className="table-responsive">
                <table className="table table-borderless tx-13 mg-b-0">
                  <tbody>
                    <tr>
                      <td><strong>Impressions</strong></td>
                      <td className="text-right tx-rubik">{loading ? <PulseLoader color="#9d1e29" loading={loading} size={10} /> : (ad && ad.impressions)}</td>
                    </tr>
                    <tr>
                      <td><strong>Clicks</strong></td>
                      <td className="text-right tx-rubik">{loading ? <PulseLoader color="#9d1e29" loading={loading} size={10} /> : (ad && ad.clicks)}</td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      
      
      </div>

      <Forms ad={ad}/>
      <Footer />
    </Page>
  );
};

export default Ad;