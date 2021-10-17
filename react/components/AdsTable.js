import React, { useState, useEffect, useContext } from 'react';
import PulseLoader from "react-spinners/PulseLoader";
import { GlobalContext } from '../GlobalContext';
import PropTypes from "prop-types";

const AdsTable = ({ loading, ads, slotColumn}) => {

  const { redirect } = useContext(GlobalContext);

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

  }, [ads])


  return (
    <>

      {loading ? <center><PulseLoader color="#9d1e29" loading={loading} size={20} /></center> :

        ads && ads.length === 0 ? <center><h3>You don't have any ads.</h3></center> :

          <div data-label="Example" className="df-example demo-table">
            <table id="example1" className="table">
              <thead>
                <tr>
                  <th className="wd-20p">Title</th>
                  {slotColumn && <th className="wd-20p">Slot</th>}
                  <th className="wd-5p">Status</th>
                  <th className="wd-5p">Impressions</th>
                  <th className="wd-5p">Clicks</th>
                  <th className="wd-15p">Duration</th>
                </tr>
              </thead>
              <tbody>
                {ads && ads.map((ad, key) => {
                  return (
                    <tr key={key} >
                      <td onClick={() => redirect(`/ads/${ad.id}`)}>{ad.title}</td>
                      {slotColumn && <td onClick={() => redirect(`/ads/${ad.id}`)}>{ad.slot_name}</td>}
                      <td className={ad.status === "Active" ? "tx-success" : ad.status === "Pending" ? "tx-warning" : "tx-danger"} onClick={() => redirect(`/ads/${ad.id}`)}>{ad.status}</td>
                      <td onClick={() => redirect(`/ads/${ad.id}`)}>{ad.impressions}</td>
                      <td onClick={() => redirect(`/ads/${ad.id}`)}>{ad.clicks}</td>
                      <td className={ad.status === "Active" ? "tx-success" : ad.status === "Pending" ? "tx-warning" : "tx-danger"} onClick={() => redirect(`/ads/${ad.id}`)}>{ad.status === "Active" ? `Expires on ${ad.end}` : ad.status === "Pending" ? `Starts on ${ad.start}` : `Expired on ${ad.end}`}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
      }
      
    </>
  );
};

AdsTable.defaultProps = {
  slotColumn: true
};

AdsTable.propTypes = {
  slotColumn: PropTypes.bool.isRequired,
};

export default AdsTable;