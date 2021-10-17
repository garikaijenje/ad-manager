"use strict";
(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_components_Forms_js-react_layouts_Page_js"],{

/***/ "./react/components/ApiErrors.js":
/*!***************************************!*\
  !*** ./react/components/ApiErrors.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const ApiErrors = ({
  errors
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, errors.length > 0 && errors.map((error, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    key: index,
    className: "alert alert-danger mt-4",
    role: "alert"
  }, error.error)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiErrors);

/***/ }),

/***/ "./react/components/Forms.js":
/*!***********************************!*\
  !*** ./react/components/Forms.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utility_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility/Api */ "./react/utility/Api.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Modal */ "./react/components/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_TextError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TextError */ "./react/components/TextError.js");
/* harmony import */ var _utility_Helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utility/Helpers */ "./react/utility/Helpers.js");
/* harmony import */ var _ApiErrors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ApiErrors */ "./react/components/ApiErrors.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");













const Forms = ({
  slot,
  ad
}) => {
  const {
    token,
    logout,
    redirect,
    setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);
  const [apiErrors, setApiErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const addSlotInitialValues = {
    name: ""
  };
  const deleteSlotInitialValues = {
    name: slot ? slot.name : ""
  };
  const updateSlotInitialValues = {
    name: slot ? slot.name : ""
  };
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
    slot: ad ? ad.slot_id : "",
    image: "",
    link: ad ? ad.link : "",
    start: ad ? luxon__WEBPACK_IMPORTED_MODULE_9__.DateTime.fromISO(ad.start_date) : "",
    end: ad ? ad.end_date : ""
  };
  const deleteAdInitialValues = {
    title: ad ? ad.name : ""
  };
  const addSlotSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
    name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Slot name is required.').min(4, "Slot name is too short.")
  });
  const updateSlotSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
    name: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Slot name is required.').min(4, "Slot name is too short.")
  });
  const addAdSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
    title: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Title is required.').min(4, "Title is too short."),
    slot: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Slot is required.'),
    image: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Image is required.'),
    start: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Start Date is required.'),
    end: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('End Date is required.'),
    link: yup__WEBPACK_IMPORTED_MODULE_5__.string().nullable().url('Enter a valid URL')
  });
  const updateAdSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object({
    title: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Title is required.').min(4, "Title is too short."),
    slot: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Slot is required.'),
    start: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('Start Date is required.'),
    end: yup__WEBPACK_IMPORTED_MODULE_5__.string().required('End Date is required.'),
    link: yup__WEBPACK_IMPORTED_MODULE_5__.string().nullable().url('Enter a valid URL')
  });

  const closeModal = id => {
    let element = document.getElementById(id);
    let body = document.body;
    body.classList.remove("modal-open");
    body.setAttribute("style", "");
    element.classList.remove("show");
    element.setAttribute("style", "display: none;");
    var elements = document.getElementsByClassName("modal-backdrop");

    while (elements.length > 0) {
      elements[0].parentNode.removeChild(elements[0]);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    _utility_Api__WEBPACK_IMPORTED_MODULE_1__.ApiRequest.get({
      endpoint: 'slots',
      token: token,
      success: response => {
        let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleSuccess)(response);
        setLoading(false);
        let slots = res.data;
        let options = [];
        slots.forEach(slot => {
          options.push({
            value: slot.id,
            label: slot.name
          });
        });
        setOptions(options);
      },
      failure: response => {
        let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleErrors)(response);
        setApiErrors(res);
        setLoading(false);
      }
    });
  }, []);

  const submitAddSlot = (values, {
    setSubmitting
  }) => {
    (async () => {
      let data = {
        name: values.name
      };
      _utility_Api__WEBPACK_IMPORTED_MODULE_1__.ApiRequest.post({
        endpoint: `slots`,
        token: token,
        data: data,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleSuccess)(response);
          setSubmitting(false);
          closeModal("addSlot");
          redirect("/redirect", res.message, '/slots');
        },
        failure: response => {
          setApiErrors((0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleErrors)(response));
          setSubmitting(false);
        }
      });
    })();
  };

  const submitUpdateSlot = (values, {
    setSubmitting
  }) => {
    (async () => {
      let data = {
        name: values.name
      };
      _utility_Api__WEBPACK_IMPORTED_MODULE_1__.ApiRequest.put({
        endpoint: `slots/${slot.id}`,
        token: token,
        data: data,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleSuccess)(response);
          setSubmitting(false);
          closeModal("updateSlot");
          redirect("/redirect", res.message, `/slots/${slot.id}`);
        },
        failure: response => {
          setApiErrors((0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleErrors)(response));
          setSubmitting(false);
        }
      });
    })();
  };

  const submitDeleteSlot = (values, {
    setSubmitting
  }) => {
    (async () => {
      _utility_Api__WEBPACK_IMPORTED_MODULE_1__.ApiRequest["delete"]({
        endpoint: `slots/${slot.id}`,
        token: token,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleSuccess)(response);
          setSubmitting(false);
          closeModal("deleteSlot");
          redirect("/redirect", res.message, '/slots');
        },
        failure: response => {
          setApiErrors((0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleErrors)(response));
          setSubmitting(false);
        }
      });
    })();
  };

  const submitAddAd = (values, {
    setSubmitting
  }) => {
    (async () => {
      let start = luxon__WEBPACK_IMPORTED_MODULE_9__.DateTime.fromJSDate(values.start).toFormat('yyyy/MM/dd');
      let end = luxon__WEBPACK_IMPORTED_MODULE_9__.DateTime.fromJSDate(values.end).toFormat('yyyy/MM/dd');
      const data = new FormData();
      data.append('slot_id', values.slot);
      data.append('title', values.title);
      data.append('image', values.image);
      data.append('link', values.link);
      data.append('start', start);
      data.append('end', end);
      _utility_Api__WEBPACK_IMPORTED_MODULE_1__.ApiRequest.post({
        endpoint: `ads`,
        token: token,
        data: data,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleSuccess)(response);
          setSubmitting(false);
          closeModal("addAd");
          redirect("/redirect", res.message, '/ads');
        },
        failure: response => {
          setApiErrors((0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleErrors)(response));
          setSubmitting(false);
        }
      });
    })();
  };

  const submitUpdateAd = (values, {
    setSubmitting
  }) => {
    (async () => {
      let start = luxon__WEBPACK_IMPORTED_MODULE_9__.DateTime.fromJSDate(values.start).toFormat('yyyy/MM/dd');
      let end = luxon__WEBPACK_IMPORTED_MODULE_9__.DateTime.fromJSDate(values.end).toFormat('yyyy/MM/dd');
      const data = new FormData();
      data.append('slot_id', values.slot);
      data.append('title', values.title);
      data.append('image', values.image);
      data.append('link', values.link);
      data.append('start', start);
      data.append('end', end);
      _utility_Api__WEBPACK_IMPORTED_MODULE_1__.ApiRequest.post({
        endpoint: `ads`,
        token: token,
        data: data,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleSuccess)(response);
          setSubmitting(false);
          closeModal("addAd");
          redirect("/redirect", res.message, '/ads');
        },
        failure: response => {
          setApiErrors((0,_utility_Api__WEBPACK_IMPORTED_MODULE_1__.handleErrors)(response));
          setSubmitting(false);
        }
      });
    })();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    initialValues: addSlotInitialValues,
    enableReinitialize: true,
    validationSchema: addSlotSchema,
    validator: () => ({}),
    onSubmit: submitAddSlot
  }, ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    resetForm,
    isSubmitting
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
    autoComplete: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Add New Slot",
    id: "addSlot",
    cancelText: "Close",
    submitText: "Add",
    submitClass: "btn-success",
    submitDisabled: isSubmitting,
    isSubmitting: isSubmitting,
    onSubmit: handleSubmit,
    onCancel: resetForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-sm mg-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ApiErrors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    errors: apiErrors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ApiErrors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    errors: apiErrors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
    type: "text",
    id: "name",
    name: "name",
    className: "form-control",
    placeholder: "Slot Name",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "name",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    initialValues: updateSlotInitialValues,
    enableReinitialize: true,
    validationSchema: updateSlotSchema,
    validator: () => ({}),
    onSubmit: submitUpdateSlot
  }, ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    resetForm,
    isSubmitting
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
    autoComplete: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Add New Slot",
    id: "updateSlot",
    cancelText: "Close",
    submitText: "Add",
    submitClass: "btn-success",
    submitDisabled: isSubmitting,
    isSubmitting: isSubmitting,
    onSubmit: handleSubmit,
    onCancel: resetForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-sm mg-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ApiErrors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    errors: apiErrors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
    type: "text",
    id: "name",
    name: "name",
    className: "form-control",
    placeholder: "Slot Name",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "name",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    initialValues: deleteSlotInitialValues,
    enableReinitialize: true,
    validationSchema: null,
    onSubmit: submitDeleteSlot
  }, formik => {
    const {
      values,
      handleChange,
      handleSubmit,
      setFieldValue,
      errors,
      touched,
      handleBlur,
      isValid,
      dirty,
      resetForm,
      isSubmitting
    } = formik;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
      autoComplete: "off"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "Delete Slot",
      id: "deleteSlot",
      cancelText: "Cancel",
      submitText: "Delete",
      submitClass: "btn-danger",
      submitDisabled: isSubmitting,
      isSubmitting: isSubmitting,
      onSubmit: handleSubmit,
      onCancel: resetForm
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "This slot will be permanently deleted."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "row row-sm mg-b-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ApiErrors__WEBPACK_IMPORTED_MODULE_8__["default"], {
      errors: apiErrors
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
      type: "text",
      id: "name",
      name: "name",
      className: "form-control",
      placeholder: "Slot Name",
      autoComplete: "off",
      disabled: true
    })))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    initialValues: addAdInitialValues,
    enableReinitialize: true,
    validationSchema: addAdSchema,
    validator: () => ({}),
    onSubmit: submitAddAd
  }, ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    resetForm,
    isSubmitting
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
    autoComplete: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Add New Advert",
    id: "addAd",
    cancelText: "Cancel",
    submitText: "Add",
    submitClass: "btn-success",
    submitDisabled: isSubmitting,
    isSubmitting: isSubmitting,
    onSubmit: handleSubmit,
    onCancel: resetForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-sm mg-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ApiErrors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    errors: apiErrors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "slot"
  }, "Slot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "slot",
    id: "slot",
    onChange: slot => setFieldValue('slot', slot.value),
    onBlur: () => setFieldTouched('slot', true),
    options: options
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "slot",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "image"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
    type: "text",
    id: "title",
    name: "title",
    className: "form-control",
    placeholder: "Ad Title",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "title",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "image"
  }, "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    className: "form-control",
    name: "image",
    id: "image",
    onBlur: () => setFieldTouched('image', true),
    onChange: event => {
      setFieldValue("image", event.currentTarget.files[0]);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "image",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "image"
  }, "Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
    type: "text",
    id: "link",
    name: "link",
    className: "form-control",
    placeholder: "Ad Link",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "link",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "start"
  }, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: "form-control",
    selected: values.start,
    onBlur: () => setFieldTouched('start', true),
    onChange: date => setFieldValue('start', date),
    isClearable: true,
    closeOnScroll: true,
    dateFormat: "yyyy/MM/dd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "start",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "end"
  }, "End Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: "form-control",
    selected: values.end,
    onBlur: () => setFieldTouched('end', true),
    onChange: date => setFieldValue('end', date),
    isClearable: true,
    closeOnScroll: true,
    dateFormat: "yyyy/MM/dd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "end",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Formik, {
    initialValues: updateAdInitialValues,
    enableReinitialize: true,
    validationSchema: updateAdSchema,
    validator: () => ({}),
    onSubmit: submitUpdateAd
  }, ({
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    resetForm,
    isSubmitting
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Form, {
    autoComplete: "off"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Update Advert",
    id: "updateAd",
    cancelText: "Cancel",
    submitText: "Update",
    submitClass: "btn-success",
    submitDisabled: isSubmitting,
    isSubmitting: isSubmitting,
    onSubmit: handleSubmit,
    onCancel: resetForm
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-sm mg-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ApiErrors__WEBPACK_IMPORTED_MODULE_8__["default"], {
    errors: apiErrors
  }), JSON.stringify(ad, 2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "slot"
  }, "Slot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    name: "slot",
    id: "slot",
    defaultValue: {
      label: ad && ad.slot_name,
      value: ad && ad.slot_id
    },
    onChange: slot => setFieldValue('slot', slot.value),
    onBlur: () => setFieldTouched('slot', true),
    options: options
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "slot",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "image"
  }, "Title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
    type: "text",
    id: "title",
    name: "title",
    className: "form-control",
    placeholder: "Ad Title",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "title",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "image"
  }, "Image"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "file",
    className: "form-control",
    name: "image",
    id: "image",
    onBlur: () => setFieldTouched('image', true),
    onChange: event => {
      setFieldValue("image", event.currentTarget.files[0]);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "image",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "image"
  }, "Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.Field, {
    type: "text",
    id: "link",
    name: "link",
    className: "form-control",
    placeholder: "Ad Link",
    autoComplete: "off"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "link",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "start"
  }, "Start Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: "form-control",
    selected: values.start,
    onBlur: () => setFieldTouched('start', true),
    onChange: date => setFieldValue('start', date),
    isClearable: true,
    closeOnScroll: true,
    dateFormat: "yyyy/MM/dd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "start",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    for: "end"
  }, "End Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_datepicker__WEBPACK_IMPORTED_MODULE_11___default()), {
    className: "form-control",
    selected: values.end,
    onBlur: () => setFieldTouched('end', true),
    onChange: date => setFieldValue('end', date),
    isClearable: true,
    closeOnScroll: true,
    dateFormat: "yyyy/MM/dd"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_4__.ErrorMessage, {
    name: "end",
    component: _components_TextError__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_utility_Helpers__WEBPACK_IMPORTED_MODULE_7__.DisplayFormikState, {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    errors,
    touched,
    handleBlur,
    isValid,
    dirty,
    resetForm,
    isSubmitting
  }))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forms);

/***/ }),

/***/ "./react/components/Modal.js":
/*!***********************************!*\
  !*** ./react/components/Modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const Modal = ({
  title,
  children,
  submitText,
  cancelText,
  submitClass,
  submitDisabled,
  onSubmit,
  onCancel,
  id,
  isSubmitting
}) => {
  const submitRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    submitRef.current.classList.add(submitClass);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "demo-modal-static"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal",
    tabIndex: "-1",
    id: id,
    role: "dialog"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "modal-title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: onCancel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-body"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    onClick: onCancel,
    "data-dismiss": "modal"
  }, cancelText), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    ref: submitRef,
    disabled: submitDisabled,
    className: "btn",
    onClick: onSubmit
  }, isSubmitting ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "spinner-border spinner-border-sm",
    role: "status",
    "aria-hidden": "true"
  }), " Loading... ") : submitText))))));
};

Modal.defaultProps = {
  buttonText: "Submit",
  cancelText: "Cancel",
  submitClass: "btn-primary",
  submitDisabled: false,
  isSubmitting: false,
  onCancel: null
};
Modal.propTypes = {
  buttonText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  cancelText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  onCancel: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  submitClass: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  submitDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  isSubmitting: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./react/components/TextError.js":
/*!***************************************!*\
  !*** ./react/components/TextError.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TextError(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "tx-danger"
  }, props.children);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextError);

/***/ }),

/***/ "./react/layouts/Footer.js":
/*!*********************************!*\
  !*** ./react/layouts/Footer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


const Footer = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Copyright \xA9 2021 Fumigation Solutions "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Developed by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://afriblocks.com"
  }, "AfriBlocks"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./react/layouts/Header.js":
/*!*********************************!*\
  !*** ./react/layouts/Header.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");





const Header = ({
  title,
  active
}) => {
  const {
    logout
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_2__.GlobalContext);

  const activeLink = identifier => {
    let classes = "btn btn-sm pd-x-15 btn-white btn-uppercase mg-l-5";
    if (identifier === active) classes += " active-link";
    return classes;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "/logo.jpg",
    style: {
      maxWidth: '100%',
      marginBottom: 30
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-sm-flex align-items-center justify-content-between mg-b-20 mg-lg-b-25 mg-xl-b-30"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: "mg-b-0 tx-spacing--1"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-none d-md-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/",
    className: activeLink("dashboard")
  }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/slots",
    className: activeLink("slots")
  }, "Slots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/ads",
    className: activeLink("ads")
  }, "Ads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: () => logout(),
    className: "btn btn-sm pd-x-15 btn-primary btn-uppercase mg-l-5",
    style: {
      backgroundColor: '#000',
      borderColor: '#000'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    "data-feather": "link",
    className: "wd-10 mg-r-5"
  }), " Logout"))));
}; // Header.defaultProps = {
//   title: "Dashboard"
// };


Header.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./react/layouts/Page.js":
/*!*******************************!*\
  !*** ./react/layouts/Page.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer */ "./react/layouts/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./react/layouts/Header.js");




const Page = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content content-fixed"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "container pd-x-0 pd-lg-x-10 pd-xl-x-0"
  }, props.children)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);

/***/ }),

/***/ "./react/utility/Api.js":
/*!******************************!*\
  !*** ./react/utility/Api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRequest": () => (/* binding */ ApiRequest),
/* harmony export */   "handleSuccess": () => (/* binding */ handleSuccess),
/* harmony export */   "handleErrors": () => (/* binding */ handleErrors)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config */ "./react/Config.js");


const API = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: _Config__WEBPACK_IMPORTED_MODULE_1__.API_URL,
  responseType: 'json'
});

const setHeaders = (token, contentType) => {
  let headers = {
    Accept: "application/json"
  };
  if (contentType) headers["Content-Type"] = contentType;
  if (token) headers.Authorization = `Bearer ${token}`;
  return {
    headers
  };
};

const ApiRequest = {
  get: ({
    baseUrl = null,
    endpoint,
    token = null,
    contentType = null,
    success,
    failure
  }) => {
    if (baseUrl) API.defaults.baseURL = baseUrl;
    return API.get(endpoint, setHeaders(token, contentType)).then(async response => await success(response)).catch(error => failure(error));
  },
  post: ({
    endpoint,
    token = null,
    contentType = null,
    data,
    success,
    failure
  }) => {
    return API.post(endpoint, data, setHeaders(token, contentType)).then(async response => await success(response)).catch(error => failure(error));
  },
  put: ({
    endpoint,
    token = null,
    contentType = null,
    data,
    success,
    failure
  }) => {
    return API.put(endpoint, data, setHeaders(token, contentType)).then(async response => await success(response)).catch(error => failure(error));
  },
  delete: ({
    endpoint,
    token = null,
    contentType = null,
    success,
    failure
  }) => {
    return API.delete(endpoint, setHeaders(token, contentType)).then(async response => await success(response)).catch(error => failure(error));
  }
};
const handleSuccess = response => {
  return response.data;
};
const handleErrors = response => {
  // if(response.response === undefined){
  //   window.location.replace('/logout')
  // }
  // return []
  if (response.response && typeof response.response.data !== undefined) {
    var _response$response$da;

    return (_response$response$da = response.response.data.errors) !== null && _response$response$da !== void 0 ? _response$response$da : [{
      error: response.response.data.message
    }];
  } else {
    window.location.replace('/logout');
  }
}; // Usage Example

function usageExample() {
  ApiRequest.post({
    endpoint: 'auth/login',
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    // contentType: 'application/json',
    data: {},
    success: response => {},
    failure: response => {}
  });
}

/***/ })

}]);
//# sourceMappingURL=react_components_Forms_js-react_layouts_Page_js.bundle.js.map