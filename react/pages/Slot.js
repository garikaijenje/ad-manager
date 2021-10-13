import React, { useState, useEffect, useContext } from 'react';
import Page from '../layouts/Page';
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { useHistory } from "react-router-dom";

import { ApiRequest } from '../utility/Api';
import { AppConst } from '../Config';

import { GlobalContext } from '../GlobalContext';

const Slots = ({ match }) => {

  const { token, logout, redirect } = useContext(GlobalContext);

  const [slotID, setSlotID] = useState(match.params.id)

  useEffect(() => {
    let slot_id = match.params.id;
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



  }, [])


  return (
    <Page>
      <Header title={"Slot #" + slotID} active="slots" />
      <div className="row">

      <div className="col-sm-12">
        <div className="card mg-b-20 mg-lg-b-25">
          <div className="card-header pd-y-15 pd-x-20 d-flex align-items-center justify-content-between">
              <h6 className="tx-uppercase tx-semibold mg-b-0">Place the following code where you want your ads to appear</h6>
          </div>
          <div className="card-body pd-20 pd-lg-25">
              <div className="bd bg-gray-50 pd-y-15 pd-x-15 pd-sm-x-20 codebox">
                <p className="mg-b-0 tx-14">&lt;div class='fumigationsolutionsads' data-ad-slot='1'&gt;&lt;/div&gt;</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-12">
        <div className="card mg-b-20 mg-lg-b-25">
          <div className="card-header pd-y-15 pd-x-20 d-flex align-items-center justify-content-between">
              <h6 className="tx-uppercase tx-semibold mg-b-0">Include the following script <strong>only once</strong> in your footer</h6>
          </div>
          <div className="card-body pd-20 pd-lg-25">
            <div className="bd bg-gray-50 pd-y-15 pd-x-15 pd-sm-x-20 codebox">
                <p className="mg-b-0 tx-14">&lt;script type='text/javascript' src='http://ad-management.local/load-ads.js'&gt;&lt;/script&gt;</p>
            </div>
          </div>
        </div>
      </div>


      <div className="col-sm-12">
          <div data-label="Example" className="df-example demo-table">
            <table id="example1" className="table">
              <thead>
                <tr>
                  <th className="wd-20p">Name</th>
                  <th className="wd-25p">Position</th>
                  <th className="wd-20p">Office</th>
                  <th className="wd-15p">Age</th>
                  <th className="wd-20p">Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td onClick={() => redirect('/slots/1')}>Tiger Nixon</td>
                  <td onClick={() => redirect('/slots/1')}>System Architect</td>
                  <td onClick={() => redirect('/slots/1')}>Edinburgh</td>
                  <td onClick={() => redirect('/slots/1')}>61</td>
                  <td onClick={() => redirect('/slots/1')}>$320,800</td>
                </tr>
                <tr>
                  <td>Garrett Winters</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>63</td>
                  <td>$170,750</td>
                </tr>
                <tr>
                  <td>Ashton Cox</td>
                  <td>Junior Technical Author</td>
                  <td>San Francisco</td>
                  <td>66</td>
                  <td>$86,000</td>
                </tr>
                <tr>
                  <td>Cedric Kelly</td>
                  <td>Senior Javascript Developer</td>
                  <td>Edinburgh</td>
                  <td>22</td>
                  <td>$433,060</td>
                </tr>
                <tr>
                  <td>Airi Satou</td>
                  <td>Accountant</td>
                  <td>Tokyo</td>
                  <td>33</td>
                  <td>$162,700</td>
                </tr>
                <tr>
                  <td>Brielle Williamson</td>
                  <td>Integration Specialist</td>
                  <td>New York</td>
                  <td>61</td>
                  <td>$372,000</td>
                </tr>
                <tr>
                  <td>Herrod Chandler</td>
                  <td>Sales Assistant</td>
                  <td>San Francisco</td>
                  <td>59</td>
                  <td>$137,500</td>
                </tr>
                <tr>
                  <td>Rhona Davidson</td>
                  <td>Integration Specialist</td>
                  <td>Tokyo</td>
                  <td>55</td>
                  <td>$327,900</td>
                </tr>

              </tbody>
            </table>
          </div>
        
      </div>
      
      </div>
      
      <Footer />
    </Page>
  );
};

export default Slots;