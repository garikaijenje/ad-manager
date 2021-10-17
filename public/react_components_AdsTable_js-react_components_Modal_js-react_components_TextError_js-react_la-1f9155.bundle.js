(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_components_AdsTable_js-react_components_Modal_js-react_components_TextError_js-react_la-1f9155"],{

/***/ "./react/components/AdsTable.js":
/*!**************************************!*\
  !*** ./react/components/AdsTable.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);





const AdsTable = ({
  loading,
  ads,
  slotColumn
}) => {
  const {
    redirect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_1__.GlobalContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    jQuery('#example1').DataTable({
      language: {
        searchPlaceholder: 'Search...',
        sSearch: '',
        lengthMenu: '_MENU_ items/page'
      }
    }); // Select2

    jQuery('.dataTables_length select').select2({
      minimumResultsForSearch: Infinity
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    jQuery('#example1').DataTable({
      language: {
        searchPlaceholder: 'Search...',
        sSearch: '',
        lengthMenu: '_MENU_ items/page'
      }
    }); // Select2

    jQuery('.dataTables_length select').select2({
      minimumResultsForSearch: Infinity
    });
  }, [ads]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_3___default()), {
    color: "#9d1e29",
    loading: loading,
    size: 20
  })) : ads.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "You don't ave any ads.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-label": "Example",
    className: "df-example demo-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    id: "example1",
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-20p"
  }, "Title"), slotColumn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-20p"
  }, "Slot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-5p"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-5p"
  }, "Impressions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-5p"
  }, "Clicks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-15p"
  }, "Duration"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, ads.map((ad, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/ads/${ad.id}`)
    }, ad.title), slotColumn && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/ads/${ad.id}`)
    }, ad.slot_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: ad.status === "Active" ? "tx-success" : ad.status === "Pending" ? "tx-warning" : "tx-danger",
      onClick: () => redirect(`/ads/${ad.id}`)
    }, ad.status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/ads/${ad.id}`)
    }, ad.impressions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/ads/${ad.id}`)
    }, ad.clicks), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      className: ad.status === "Active" ? "tx-success" : ad.status === "Pending" ? "tx-warning" : "tx-danger",
      onClick: () => redirect(`/ads/${ad.id}`)
    }, ad.status === "Active" ? `Expires on ${ad.end}` : ad.status === "Pending" ? `Starts on ${ad.start}` : `Expired on ${ad.end}`));
  })))));
};

AdsTable.defaultProps = {
  slotColumn: true
};
AdsTable.propTypes = {
  slotColumn: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdsTable);

/***/ }),

/***/ "./react/components/Modal.js":
/*!***********************************!*\
  !*** ./react/components/Modal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
    class: "spinner-border spinner-border-sm",
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
  var _response$response$da;

  if (typeof response.response === undefined) {
    return null;
  }

  return (_response$response$da = response.response.data.errors) !== null && _response$response$da !== void 0 ? _response$response$da : [{
    error: response.response.data.message
  }];
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

/***/ }),

/***/ "?13bc":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=react_components_AdsTable_js-react_components_Modal_js-react_components_TextError_js-react_la-1f9155.bundle.js.map