import React, { useState, useEffect, useContext, useRef } from 'react';

import { ApiRequest, handleErrors, handleSuccess } from '../utility/Api';
import { GlobalContext } from '../GlobalContext';
import Modal from '../components/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import TextError from '../components/TextError';
import { DisplayFormikState } from '../utility/Helpers';
import ApiErrors from './ApiErrors';

import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import Select from 'react-select'

import moment from 'moment';

const Forms = ({slot, ad}) => {

  const { token, logout, redirect, setToken } = useContext(GlobalContext);
  const [apiErrors, setApiErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const [options, setOptions] = useState([]);

  const [selectedImage, setSelectedImage] = useState();

  const addSlotInitialValues = { name: "" };
  const deleteSlotInitialValues = { name: slot ? slot.name : "" };
  const updateSlotInitialValues = { name: slot ? slot.name : "" };

  const addAdInitialValues = { 
    title: "", 
    slot: "", 
    image: "", 
    link: "", 
    start: "", 
    end: "" 
  }; 

  const updateAdInitialValues = { 
    title: ad ? ad.title : "", 
    slot:  ad ? ad.slot_id : "", 
    image: "", 
    link:  ad ? ad.link : "", 
    start: ad ? moment(ad.start).toDate() : "",
    end: ad ? moment(ad.end).toDate() : ""
  }; 

  

  const deleteAdInitialValues = { title: ad ? ad.title : "" };

  const addSlotSchema = yup.object({
    name: yup.string().required('Slot name is required.').min(4, "Slot name is too short.")
  });
  const updateSlotSchema = yup.object({
    name: yup.string().required('Slot name is required.').min(4, "Slot name is too short.")
  });

  const addAdSchema = yup.object({
    title: yup.string().required('Title is required.').min(4, "Title is too short."),
    slot: yup.string().required('Slot is required.'),
    image: yup.string().required('Image is required.'),
    start: yup.string().required('Start Date is required.'),
    end: yup.string().required('End Date is required.'),
    link: yup.string().nullable().url('Enter a valid URL')
  });

  const updateAdSchema = yup.object({
    title: yup.string().required('Title is required.').min(4, "Title is too short."),
    slot: yup.string().required('Slot is required.'),
    start: yup.string().required('Start Date is required.'),
    end: yup.string().required('End Date is required.'),
    link: yup.string().nullable().url('Enter a valid URL')
  });

  const closeModal = (id) => {

    let element = document.getElementById(id);
    let body = document.body;

    body.classList.remove("modal-open");
    body.setAttribute("style", "");

    element.classList.remove("show");
    element.setAttribute("style", "display: none;");

    var elements = document.getElementsByClassName("modal-backdrop");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

  }

  useEffect(() => {

    ApiRequest.get({
      endpoint: 'slots',
      token: token,
      success: (response) => {
        let res = handleSuccess(response);
        setLoading(false);
        let slots = res.data;
        let options = [];
        slots.forEach(slot => {
          options.push({
            value: slot.id,
            label: slot.name
          })
        });
        setOptions(options)

      },
      failure: (response) => {
        let res = handleErrors(response);
        setApiErrors(res)
        setLoading(false);
      }
    });
   
  }, [])

  const submitAddSlot = (values, { setSubmitting }) => {

    (async () => {

      let data = {
        name: values.name
      }

      ApiRequest.post({
        endpoint: `slots`,
        token: token,
        data: data,
        success: (response) => {
          let res = handleSuccess(response);
          setSubmitting(false);
          closeModal("addSlot");
          redirect("/redirect", res.message,'/slots')
        },
        failure: (response) => {
          setApiErrors(handleErrors(response))
          setSubmitting(false);
        }
      });

    })();

  }

  const submitUpdateSlot = (values, { setSubmitting }) => {

    (async () => {

      let data = {
        name: values.name
      }

      ApiRequest.put({
        endpoint: `slots/${slot.id}`,
        token: token,
        data: data,
        success: (response) => {
          let res = handleSuccess(response);
          setSubmitting(false);
          closeModal("updateSlot");
          redirect("/redirect", res.message,`/slots/${slot.id}`)
        },
        failure: (response) => {
          setApiErrors(handleErrors(response))
          setSubmitting(false);
        }
      });

    })();

  }

  const submitDeleteSlot = (values, { setSubmitting }) => {

    (async () => {
      
      ApiRequest.delete({
        endpoint: `slots/${slot.id}`,
        token: token,
        success: (response) => {
          let res = handleSuccess(response);
          setSubmitting(false);
          closeModal("deleteSlot");
          redirect("/redirect", res.message,'/slots')
        },
        failure: (response) => {
          setApiErrors(handleErrors(response))
          setSubmitting(false);
        }
      });

    })();

  }

  const submitAddAd = (values, { setSubmitting }) => {

    (async () => {

      let start = moment(values.start).format('YYYY/MM/DD');
      let end = moment(values.end).format('YYYY/MM/DD');

      const data = new FormData()
      data.append('slot_id', values.slot)
      data.append('title', values.title)
      data.append('image', values.image)
      data.append('link', values.link)
      data.append('start', start)
      data.append('end', end)

      ApiRequest.post({
        endpoint: `ads`,
        token: token,
        data: data,
        success: (response) => {
          let res = handleSuccess(response);
          setSubmitting(false);
          closeModal("addAd");
          redirect("/redirect", res.message, '/ads')
        },
        failure: (response) => {
          setApiErrors(handleErrors(response))
          setSubmitting(false);
        }
      });

    })();

  }

  const submitUpdateAd = (values, { setSubmitting }) => {

    (async () => {

      let start = DateTime.fromJSDate(values.start).toFormat('yyyy/MM/dd');
      let end = DateTime.fromJSDate(values.end).toFormat('yyyy/MM/dd');

      const data = new FormData()
      data.append('slot_id', values.slot)
      data.append('title', values.title)
      if(values.image) data.append('image', values.image)
      data.append('link', values.link)
      data.append('start', start)
      data.append('end', end)

      ApiRequest.post({
        endpoint: `ads/${ad.id}`,
        token: token,
        data: data,
        success: (response) => {
          let res = handleSuccess(response);
          setSubmitting(false);
          closeModal("updateAd");
          redirect("/redirect", res.message, '/ads')
        },
        failure: (response) => {
          setApiErrors(handleErrors(response))
          setSubmitting(false);
        }
      });

    })();

  }

  const submitDeleteAd = (values, { setSubmitting }) => {

    (async () => {

      ApiRequest.delete({
        endpoint: `ads/${ad.id}`,
        token: token,
        success: (response) => {
          let res = handleSuccess(response);
          setSubmitting(false);
          closeModal("deleteAd");
          redirect("/redirect", res.message, '/ads')
        },
        failure: (response) => {
          setApiErrors(handleErrors(response))
          setSubmitting(false);
        }
      });

    })();

  }

  const getSlotDetails = (id) => {

    // let output = options.filter(option => option.value === id);
    return { label: ad && ad.slot_name, value: ad && ad.slot_id };
  }

 

  return (
    <>

      {/* Add New Slot */}
      <Formik initialValues={addSlotInitialValues} enableReinitialize={true} validationSchema={addSlotSchema} validator={() => ({})} onSubmit={submitAddSlot}>
        {({ values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting }) => (
          <Form autoComplete="off">
            <Modal title="Add New Slot" id="addSlot" cancelText="Close" submitText="Add" submitClass="btn-success" submitDisabled={isSubmitting} isSubmitting={isSubmitting} onSubmit={handleSubmit} onCancel={resetForm} >
              <div className="row row-sm mg-b-10">
                <div className="col-sm-12">
                  <ApiErrors errors={apiErrors}/>
                </div>
                <div className="col-sm-12">
                  <ApiErrors errors={apiErrors}/>
                  <Field type="text" id="name" name="name" className="form-control" placeholder="Slot Name" autoComplete="off" />
                  <ErrorMessage name="name" component={TextError} />
                </div>
              </div>
            </Modal>
          </Form>
        )}
      </Formik>

      {/* Update Slot */}
      <Formik initialValues={updateSlotInitialValues} enableReinitialize={true} validationSchema={updateSlotSchema} validator={() => ({})} onSubmit={submitUpdateSlot}>
        {({ values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting }) => (
          <Form autoComplete="off">
            <Modal title="Add New Slot" id="updateSlot" cancelText="Close" submitText="Add" submitClass="btn-success" submitDisabled={isSubmitting} isSubmitting={isSubmitting} onSubmit={handleSubmit} onCancel={resetForm} >
              <div className="row row-sm mg-b-10">
                <div className="col-sm-12">
                  <ApiErrors errors={apiErrors}/>
                  <Field type="text" id="name" name="name" className="form-control" placeholder="Slot Name" autoComplete="off" />
                  <ErrorMessage name="name" component={TextError} />
                </div>
              </div>
            </Modal>
          </Form>
        )}
      </Formik>

      {/* Delete Slot */}
      <Formik initialValues={deleteSlotInitialValues} enableReinitialize={true} validationSchema={null} onSubmit={submitDeleteSlot}>
        {(formik) => {
          const { values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting } = formik;
          return (
            <Form autoComplete="off">
              <Modal title="Delete Slot" id="deleteSlot" cancelText="Cancel" submitText="Delete" submitClass="btn-danger" submitDisabled={isSubmitting} isSubmitting={isSubmitting} onSubmit={handleSubmit} onCancel={resetForm}>
                <p>This slot will be permanently deleted.</p>
                <div className="row row-sm mg-b-10">
                  <div className="col-sm-12">
                    <ApiErrors errors={apiErrors} />
                    <Field type="text" id="name" name="name" className="form-control" placeholder="Slot Name" autoComplete="off" disabled={true} />
                  </div>
                </div>
              </Modal>
            </Form>
          );
        }}
      </Formik>



      {/* Add New Ad */}
      <Formik initialValues={addAdInitialValues} enableReinitialize={true} validationSchema={addAdSchema} validator={() => ({})} onSubmit={submitAddAd}>
        {({ values, handleChange, handleSubmit, setFieldValue, setFieldTouched, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting }) => (
          <Form autoComplete="off">
            <Modal title="Add New Advert" id="addAd" cancelText="Cancel" submitText="Add" submitClass="btn-success" submitDisabled={isSubmitting} isSubmitting={isSubmitting} onSubmit={handleSubmit} onCancel={resetForm} >
              <div className="row row-sm mg-b-10">
                <div className="col-sm-12">
                  <ApiErrors errors={apiErrors} />
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="slot">Slot</label>
                    <Select name="slot" id="slot" onChange={(slot) => setFieldValue('slot', slot.value)} onBlur={() => setFieldTouched('slot',true)} options={options} />
                    <ErrorMessage name="slot" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="image">Title</label>
                  <Field type="text" id="title" name="title" className="form-control" placeholder="Ad Title" autoComplete="off" />
                  <ErrorMessage name="title" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="image">Image</label>
                    {values.image &&
                    <div style={{ width: '100%', height: 200, border: '1px solid #c0ccda', marginBottom: 10, borderRadius: '0.25rem', textAlign: 'center' }}>
                      {ad && <img src={URL.createObjectURL(values.image)} style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                    </div>}
                    <input type="file" className="form-control" name="image" id="image" onBlur={() => setFieldTouched('image', true)} onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }}/>
                    <span style={{fontSize:10}}>Only image file types (png, jpg, gif, jpeg) are allow and a maximum of <strong>2MB</strong> fileze size.</span>
                    <ErrorMessage name="image" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="image">Link</label>
                    <Field type="text" id="link" name="link" className="form-control" placeholder="Ad Link" autoComplete="off" />
                    <ErrorMessage name="link" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="start">Start Date</label>
                    <DatePicker className="form-control" selected={values.start} onBlur={() => setFieldTouched('start', true)} onChange={(date) => setFieldValue('start', date)} isClearable closeOnScroll={true} dateFormat="yyyy/MM/dd" />
                    <ErrorMessage name="start" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="end">End Date</label>
                    <DatePicker className="form-control" selected={values.end} onBlur={() => setFieldTouched('end', true)} onChange={(date) => setFieldValue('end', date)} isClearable closeOnScroll={true} dateFormat="yyyy/MM/dd" />
                    <ErrorMessage name="end" component={TextError} />
                  </div>
                </div>
                {/* <DisplayFormikState {...{ values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting }} /> */}
              </div>
            </Modal>
          </Form>
        )}
      </Formik>

      {/* Update Ad */}
      <Formik initialValues={updateAdInitialValues} enableReinitialize={true} validationSchema={updateAdSchema} validator={() => ({})} onSubmit={submitUpdateAd}>
        {({ values, handleChange, handleSubmit, setFieldValue, setFieldTouched, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting }) => (
          <Form autoComplete="off">
            <Modal title="Update Advert" id="updateAd" cancelText="Cancel" submitText="Update" submitClass="btn-success" submitDisabled={isSubmitting} isSubmitting={isSubmitting} onSubmit={handleSubmit} onCancel={resetForm} >
              <div className="row row-sm mg-b-10">
                <div className="col-sm-12">
                  <ApiErrors errors={apiErrors} />
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="slot">Slot</label>
                    <Select name="slot" id="slot" value={getSlotDetails(values.slot)} onChange={(slot) => setFieldValue('slot', slot.value)} onBlur={() => setFieldTouched('slot', true)} options={options} />
                    <ErrorMessage name="slot" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="image">Title</label>
                    <Field type="text" id="title" name="title" className="form-control" placeholder="Ad Title" autoComplete="off" />
                    <ErrorMessage name="title" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="image">Image</label>
                    <div style={{ width: '100%', height: 200, border:'1px solid #c0ccda', marginBottom: 10, borderRadius:'0.25rem', textAlign:'center'}}>
                      {ad && <img src={values.image ? URL.createObjectURL(values.image ) : `data:${ad.type};base64, ${ad.image}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />}
                    </div>
                    <input type="file" className="form-control" name="image" id="image" onBlur={() => setFieldTouched('image', true)} onChange={(event) => {
                      setFieldValue("image", event.currentTarget.files[0]);
                    }} />
                    <span style={{ fontSize: 10 }}>Only image file types (png, jpg, gif, jpeg) are allow and a maximum of <strong>2MB</strong> fileze size.</span>
                    <ErrorMessage name="image" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="image">Link</label>
                    <Field type="text" id="link" name="link" className="form-control" placeholder="Ad Link" autoComplete="off" />
                    <ErrorMessage name="link" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="start">Start Date</label>
                    <DatePicker className="form-control" selected={values.start} onBlur={() => setFieldTouched('start', true)} onChange={(date) => setFieldValue('start', date)} isClearable closeOnScroll={true} dateFormat="yyyy/MM/dd" />
                    <ErrorMessage name="start" component={TextError} />
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="form-group">
                    <label for="end">End Date</label>
                    <DatePicker className="form-control" selected={values.end} onBlur={() => setFieldTouched('end', true)} onChange={(date) => setFieldValue('end', date)} isClearable closeOnScroll={true} dateFormat="yyyy/MM/dd" />
                    <ErrorMessage name="end" component={TextError} />
                  </div>
                </div>
                {/* <DisplayFormikState {...{ values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting }} /> */}
              </div>
            </Modal>
          </Form>
        )}
      </Formik>

      {/* Delete Ad */}
      <Formik initialValues={deleteAdInitialValues} enableReinitialize={true} validationSchema={null} onSubmit={submitDeleteAd}>
        {(formik) => {
          const { values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty, resetForm, isSubmitting } = formik;
          return (
            <Form autoComplete="off">
              <Modal title="Delete Advert" id="deleteAd" cancelText="Cancel" submitText="Delete" submitClass="btn-danger" submitDisabled={isSubmitting} isSubmitting={isSubmitting} onSubmit={handleSubmit} onCancel={resetForm}>
                <p>This advert will be permanently deleted.</p>
                <div className="row row-sm mg-b-10">
                  <div className="col-sm-12">
                    <ApiErrors errors={apiErrors} />
                    <Field type="text" id="title" name="title" className="form-control" placeholder="Ad Title" autoComplete="off" disabled={true} />
                  </div>
                </div>
              </Modal>
            </Form>
          );
        }}
      </Formik>
      
    </>
  );
};

export default Forms;