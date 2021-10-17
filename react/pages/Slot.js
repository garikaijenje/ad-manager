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
import AdsTable from '../components/AdsTable';
import Forms from '../components/Forms';

const Slots = ({ match }) => {

  const { token, logout, redirect, setToken, location } = useContext(GlobalContext);

  const [slot, setSlot] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    // Fetch Slot
    (async () => {

      setLoading(true);

      ApiRequest.get({
        endpoint: `slots/${match.params.id}`,
        token: token,
        success: (response) => {
          let res = handleSuccess(response);
          setLoading(false);
          setSlot(res.data)
        },
        failure: (response) => {
          let res = handleErrors(response);
          setErrors(res)
          setLoading(false);
        }
      });

    })();

  }, [])

  const initialValues = { name: "" };

  const validationSchema = yup.object({
    name: yup.string().required('Slot name is required.').min(4, "Slot name is too short.")
  });

  const submitAddSlot = (values, { setSubmitting }) => {
    
    (async () => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    })();

  }

  return (
    <Page>
      <Header title={loading ? <PulseLoader color="#9d1e29" loading={loading} size={20} /> : (slot && slot.name)} active="slots" />

      <div className="card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center">
        <div className="btn-group mg-t-20 mg-sm-t-0">
          <button href="#addSlot" className="btn btn-xs btn-success btn-uppercase" data-toggle="modal">Add New Slot</button>
          <button href="#updateSlot" className="btn btn-xs btn-warning btn-uppercase" data-toggle="modal">Update Slot</button>
          <button href="#deleteSlot" className="btn btn-xs btn-danger btn-uppercase" data-toggle="modal">Delete Slot</button>
        </div>
      </div>

      <div className="row">
      <div className="col-12">
          {location.flash && (<div className="alert alert-success mt-4" role="alert"> {location.flash} </div>)}
      </div>

      <div className="col-sm-12">
        <div className="card mg-b-20 mg-lg-b-25">
          <div className="card-header pd-y-15 pd-x-20 d-flex align-items-center justify-content-between">
              <h6 className="tx-uppercase tx-semibold mg-b-0">Place the following code where you want your ads to appear</h6>
          </div>
          <div className="card-body pd-20 pd-lg-25">
              <div className="bd bg-gray-50 pd-y-15 pd-x-15 pd-sm-x-20 codebox">
                <p className="mg-b-0 tx-14">{loading ? <PulseLoader color="#ff9c5b" loading={loading} size={10} /> : (slot && ReactHtmlParser(slot.code_slot))}</p>
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
                <p className="mg-b-0 tx-14">{loading ? <PulseLoader color="#ff9c5b" loading={loading} size={10} /> : (slot && ReactHtmlParser(slot.code_script))}</p>
            </div>
          </div>
        </div>
      </div>

      


      <div className="col-sm-12">

      <AdsTable loading={loading} ads={slot ? slot.ads : []} slotColumn={false} /> 
        
      </div>
      
      </div>

      {/* <Formik initialValues={initialValues} enableReinitialize={true} validationSchema={validationSchema} validator={() => ({})} onSubmit={submitAddSlot}>
            {({ values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty,resetForm, isSubmitting }) => (
              <Form autoComplete="off">
                <Modal title="Add New Slot" id="newSlot" cancelText="Cancel" submitText="Add" submitClass="btn-success" submitDisabled={!(dirty && isValid) && isSubmitting} isSubmitting={isSubmitting} onSubmit={handleSubmit} onCancel={resetForm}>
                  <div className="row row-sm mg-b-10">
                    <div className="col-sm-12">
                      <Field type="text" id="name" name="name" className="form-control" placeholder="Slot Name" autoComplete="off" />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                    <DisplayFormikState {...{ values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting }} />
                  </div>
                </Modal>
              </Form>
            )}
        </Formik> */}

      {/* <Formik initialValues={initialValues} enableReinitialize={true} validationSchema={validationSchema} onSubmit={submitAddSlot}>
          {(formik) => {
            const {values,handleChange,handleSubmit,setFieldValue,errors,touched,handleBlur,isValid,dirty,resetForm} = formik;
            return (
              <Form autoComplete="off">
                <Modal title="Update Slot" id="updateSlot" cancelText="Cancel" submitText="Update" submitClass="btn-warning" submitDisabled={!(dirty && isValid)} onSubmit={handleSubmit} onCancel={resetForm}>
                  <div className="row row-sm mg-b-10">
                    <div className="col-sm-12">
                      <Field type="text" id="name" name="name" className="form-control" placeholder="Slot Name" autoComplete="off" value="Slot #1" />
                      <ErrorMessage name="name" component={TextError} />
                    </div>
                  </div>
                </Modal>
              </Form>
            );
          }}
        </Formik> */}

      {/* <Formik initialValues={initialValues} enableReinitialize={true} validationSchema={validationSchema} onSubmit={submitAddSlot}>
          {(formik) => {
            const {values,handleChange,handleSubmit,setFieldValue,errors,touched,handleBlur,isValid,dirty,resetForm} = formik;
            return (
              <Form autoComplete="off">
                <Modal title="Delete Slot" id="deleteSlot" cancelText="Cancel" submitText="Delete" submitClass="btn-danger" onSubmit={handleSubmit} onCancel={resetForm}>
                  <p>The slot will be permanently deleted.</p>
                  <div className="row row-sm mg-b-10">
                    <div className="col-sm-12">
                      <Field type="text" id="name" name="name" className="form-control" placeholder="Slot Name" autoComplete="off" value="Slot 1" disabled={true} />
                    </div>
                  </div>
                </Modal>
              </Form>
            );
          }}
        </Formik> */}
      <Forms slot={slot}/>
      <Footer />
    </Page>
  );
};

export default Slots;