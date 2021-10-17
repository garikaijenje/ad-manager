import React, { useState, useEffect, useContext } from 'react';
import Page from '../layouts/Page';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import PulseLoader from "react-spinners/PulseLoader";

import { AppConst } from '../Config';
import { ApiRequest, handleErrors, handleSuccess } from '../utility/Api';

import { GlobalContext } from '../GlobalContext';
import Forms from '../components/Forms';

const Slots = () => {

  const { token, redirect, location } = useContext(GlobalContext);

  const [slots, setSlots] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    // Fetch Slots
    (async () => {

      setLoading(true);

      ApiRequest.get({
        endpoint: 'slots',
        token: token,
        success: (response) => {
          let res = handleSuccess(response);
          setLoading(false);
          setSlots(res.data)
        },
        failure: (response) => {
          let res = handleErrors(response);
          setErrors(res)
          setLoading(false);
        }
      });

    })();

    jQuery('#example1').DataTable({
      language: {
        searchPlaceholder: 'Search...',
        sSearch: '',
        lengthMenu: '_MENU_ items/page',
      }
    });
    // Select2
    jQuery('.dataTables_length select').select2({ minimumResultsForSearch: Infinity });
      
  }, [])

  useEffect(() => {

    jQuery('#example1').DataTable({
      language: {
        searchPlaceholder: 'Search...',
        sSearch: '',
        lengthMenu: '_MENU_ items/page',
      }
    });
    // Select2
    jQuery('.dataTables_length select').select2({ minimumResultsForSearch: Infinity });

  }, [slots])
  

  return (
    <Page>
    <Header title="Slots" active="slots" />

    <div className="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center">
        <div className="btn-group mg-t-20 mg-sm-t-0">
          <button href="#addSlot" className="btn btn-xs btn-success btn-uppercase" data-toggle="modal">Add New Slot</button>
        </div>
      </div>

      {location.flash && (<div className="alert alert-success mt-4" role="alert"> {location.flash} </div>)}
      
      {loading ? <center><PulseLoader color="#9d1e29" loading={loading} size={20} /></center> :

        slots.length === 0 ?  <center><h3>You don't ave any slots.</h3></center> :

        <div data-label="Example" className="df-example demo-table">
          <table id="example1" className="table">
            <thead>
                <tr>
                    <th className="wd-20p">Name</th>
                    <th className="wd-25p">No. of Ads</th>
                    <th className="wd-25p">Total Impressions</th>
                    <th className="wd-25p">Total Clicks</th>
                </tr>
            </thead>
            <tbody>
            {slots.map((slot, key) => {
              return (
                <tr key={key} >
                  <td onClick={() => redirect(`/slots/${slot.id}`)}>{slot.name}</td>
                  <td onClick={() => redirect(`/slots/${slot.id}`)}>{slot.total_ads}</td>
                  <td onClick={() => redirect(`/slots/${slot.id}`)}>{slot.total_impressions}</td>
                  <td onClick={() => redirect(`/slots/${slot.id}`)}>{slot.total_clicks}</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      }
      <Forms/>
      <Footer/>
    </Page>
  );
};

export default Slots;