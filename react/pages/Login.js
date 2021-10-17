import React, { useEffect, useState, useContext } from 'react';

import { useLocation, Link } from "react-router-dom";
import AuthPage from '../layouts/AuthPage';
import Footer from '../layouts/Footer';

import { GlobalContext } from '../GlobalContext';
import { ApiRequest, handleErrors, handleSuccess } from '../utility/Api';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import TextError from '../components/TextError';
import ApiErrors from '../components/ApiErrors';

const Login = () => {

  const { token, login, redirect, clearFlashMessage } = useContext(GlobalContext);
  const [errors, setErrors] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (token) {
      redirect('/')
    }
  }, [])

  const initialValues = {
    username: '',
    password: ''
  }

  const loginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  });

  const submitLogin = (values, { setSubmitting }) => {
    
    (async () => {

      let data = {
        username: values.username,
        password: values.password,
      };

      ApiRequest.post({
        endpoint: 'auth/login',
        data: data,
        success: (response) => {
          let res = handleSuccess(response);
          setSubmitting(false);
          login(res.user_token)
        },
        failure: (response) => {
          // alert(JSON.stringify(handleErrors(response), null, 2));
          setErrors(handleErrors(response))
          setSubmitting(false);
        }
      });

    })();

  }


  return (

    <AuthPage>

    <div className="row">
    <div className="col-sm-6 offset-sm-3">

      <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
         
          <div className="sign-wrapper mg-lg-l-50 mg-xl-l-60">
            <div className="wd-100p">
             
              <img src="/logo.jpg" className="img-fluid" alt="" style={{marginBottom: 25}}/>
                {location.flash && (<div className="alert alert-danger mt-4" role="alert"> {location.flash} </div>)}
                
              <ApiErrors errors={errors}/>

                <Formik initialValues={initialValues} enableReinitialize={true} validationSchema={loginSchema} validator={() => ({})} onSubmit={submitLogin}>
              {({ values, handleChange, handleSubmit, setFieldValue, errors, touched, handleBlur, isValid, dirty,resetForm, isSubmitting }) => (
                <Form autoComplete="off">

                  <div className="form-group">
                    {/* <label className="mg-b-0-f">Username</label> */}
                    <Field type="text" id="username" name="username" className="form-control" placeholder="Username" autoComplete="off" />
                    <ErrorMessage name="username" component={TextError} />
                  </div>
                  <div className="form-group">
                    {/* <div className="d-flex justify-content-between mg-b-5">
                      <label className="mg-b-0-f">Password</label>
                      <Link to="/forgot-password" className="tx-13">Forgot password?</Link>
                    </div> */}
                      <Field type="password" id="password" name="password" className="form-control" placeholder="Password" autoComplete="off" />
                      <ErrorMessage name="password" component={TextError} />
                  </div>
                      <button className="btn btn-brand-02 btn-block" disabled={isSubmitting}>
                        {isSubmitting ? <><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading... </> : "Sign In"}
                  </button>

                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>

      </div>
    </div>

      <Footer/>
    </AuthPage>


  );
};

export default Login;