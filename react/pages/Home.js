import React, { useState, useEffect, useContext } from 'react';
import Page from '../layouts/Page';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { useHistory, Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import { ApiRequest, handleErrors, handleSuccess } from '../utility/Api';
import { AppConst } from '../Config';

import { GlobalContext } from '../GlobalContext';
import { DateTime } from "luxon";
import ApiErrors from '../components/ApiErrors';

const Home = () => {

  const { token, logout, redirect, setToken } = useContext(GlobalContext);

  const [loadingAds, setLoadingAds] = useState(false);
  const [loadingSlots, setLoadingSlots] = useState(false);

  const [totalAds, setTotalAds] = useState(0);
  const [totalImpressions, setTotalImpressions] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);

  const [slots, setSlots] = useState([]);
  const [ads, setAds] = useState([]);

  const [errors, setErrors] = useState([]);
  
  useEffect(() => {

    (async () => {
      setLoadingSlots(true);
      await ApiRequest.get({
        endpoint: 'slots',
        token: token,
        success: (response) => {
          let res = handleSuccess(response);
          setLoadingSlots(false);
          setSlots(res.data)
        },
        failure: (response) => {
          let res = handleErrors(response);
          setErrors(res)
          setLoadingSlots(false);
        }
      });
    })();


    (async () => {
      setLoadingAds(true);
      await ApiRequest.get({
        endpoint: 'ads',
        token: token,
        success: (response) => {
          console.log("ADS",response)
          let res = handleSuccess(response);
          setLoadingAds(false);
          setAds(res.data)
        },
        failure: (response) => {
          let res = handleErrors(response);
          setErrors(res)
          setLoadingAds(false);
        }
      });
    })();
    
  }, [])

  useEffect(() => {
    
    let impressions = 0;
    let clicks = 0;

    if(ads && ads.length > 0){
      ads.forEach(ad => {
        impressions += ad.impressions;
        clicks += ad.clicks;
      });
    }

    setTotalImpressions(impressions)
    setTotalClicks(clicks)
    
  }, [ads])

  return (
    <Page>
    <Header title="Dashboard" active="dashboard"/>
    <ApiErrors errors={errors} />
    <div className="row row-xs">
          <div className="col-sm-6 col-lg-3">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Slots</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
              <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">{loadingSlots ? <PulseLoader color="#9d1e29" loading={loadingSlots} size={10} /> : slots && slots.length}</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Ads</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
              <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">{loadingAds ? <PulseLoader color="#9d1e29" loading={loadingAds} size={10} /> : ads && ads.length}</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Impressions</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
              <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">{loadingAds ? <PulseLoader color="#9d1e29" loading={loadingAds} size={10} /> : totalImpressions}</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0">
            <div className="card card-body">
              <h6 className="tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8">Total Clicks</h6>
              <div className="d-flex d-lg-block d-xl-flex align-items-end">
              <h3 className="tx-normal tx-rubik mg-b-0 mg-r-5 lh-1">{loadingAds ? <PulseLoader color="#9d1e29" loading={loadingAds} size={10} /> : totalClicks}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-6 mg-t-10">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-center">
                <h3 className="mg-b-0">Ads</h3>
              </div>
              { loadingAds ? 
              <div className="d-flex align-items-center justify-content-center mg-t-10 mg-b-10">
              <PulseLoader color="#000" loading={loadingAds} size={10} /> 
              </div>
              : 
              <>
              <ul className="list-group list-group-flush tx-13">
                  {
                    ads && ads.slice(0, 3).map((ad, key) => {
                      return (
                        <li key={key} className="list-group-item d-flex pd-sm-x-20">
                          <div className="avatar d-none d-sm-block"><span className={`avatar-initial rounded-circle ${ad.status === "Active" ? "bg-success" : ad.status === "Pending" ? "bg-warning" : "bg-danger"}`}><i className="icon ion-md-checkmark"></i></span></div>
                          <div className="pd-sm-l-10">
                            <p className="tx-medium mg-b-0">{ad.title}</p>
                            <small className="tx-12 tx-color-03 mg-b-0">{ad.status === "Active" ? `Expires on ${ad.end}` : ad.status === "Pending" ? `Starts on ${ad.start}` : `Expired on ${ad.end}` }</small>
                          </div>
                          <div className="mg-l-auto text-right">
                            <p className="tx-medium mg-b-0"><Link to={`/ads/${ad.id}`} className="link-03">View</Link></p>
                            <small className={`tx-12 mg-b-0 ${ad.status === "Active" ? "tx-success" : ad.status === "Pending" ? "tx-warning" : "tx-danger"}`}>{ad.status}</small>
                          </div>
                        </li>
                      )
                    })
                  }
              </ul>
              <div className="card-footer text-center tx-13">
                <Link to="/ads" className="link-03">View All Ads <i className="icon ion-md-arrow-down mg-l-5"></i></Link>
              </div>
              </>
              }

            </div>
          </div>
          <div className="col-md-6 col-xl-6 mg-t-10">
            <div className="card">
              <div className="card-header d-flex align-items-center justify-content-center">
                <h3 className="mg-b-0">Slots</h3>
              </div>
              { loadingSlots ? 
              <div className="d-flex align-items-center justify-content-center mg-t-10 mg-b-10">
              <PulseLoader color="#000" loading={loadingSlots} size={10} /> 
              </div>
              : 
              <>
              <ul className="list-group list-group-flush tx-13">
              {
                    slots && slots.slice(0, 3).map((slot, key) => {
                  return(
                    <li key={key} className="list-group-item d-flex pd-sm-x-20">
                      <div className="avatar"><span className="avatar-initial rounded-circle bg-primary">{slot.name.charAt(0)}</span></div>
                      <div className="pd-l-10">
                        <p className="tx-medium mg-b-0">{slot.name}</p>
                        <small className="tx-12 tx-color-03 mg-b-0">{slot.ads.length} Ads</small>
                      </div>
                      <div className="mg-l-auto d-flex align-self-center">
                        <Link to={`/slots/${slot.id}`} className="link-03">Manage</Link>
                      </div>
                    </li>
                  )
                })
              }
              </ul>
              <div className="card-footer text-center tx-13">
                <Link to="/slots" className="link-03">View All Slots <i className="icon ion-md-arrow-down mg-l-5"></i></Link>
              </div>
              </>
              }
            </div>
          </div>
    
        </div>
      <Footer/>
    </Page>
  );
};

export default Home;