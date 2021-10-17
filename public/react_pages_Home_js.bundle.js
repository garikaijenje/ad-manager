"use strict";
(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Home_js"],{

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

/***/ "./react/pages/Home.js":
/*!*****************************!*\
  !*** ./react/pages/Home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Page */ "./react/layouts/Page.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Header */ "./react/layouts/Header.js");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Footer */ "./react/layouts/Footer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utility_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/Api */ "./react/utility/Api.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Config */ "./react/Config.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");
/* harmony import */ var _components_ApiErrors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ApiErrors */ "./react/components/ApiErrors.js");












const Home = () => {
  const {
    token,
    logout,
    redirect,
    setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);
  const [loadingAds, setLoadingAds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [loadingSlots, setLoadingSlots] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [totalAds, setTotalAds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [totalImpressions, setTotalImpressions] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [totalClicks, setTotalClicks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const [slots, setSlots] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [ads, setAds] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    (async () => {
      setLoadingSlots(true);
      await _utility_Api__WEBPACK_IMPORTED_MODULE_4__.ApiRequest.get({
        endpoint: 'slots',
        token: token,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleSuccess)(response);
          setLoadingSlots(false);
          setSlots(res.data);
        },
        failure: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleErrors)(response);
          setErrors(res);
          setLoadingSlots(false);
        }
      });
    })();

    (async () => {
      setLoadingAds(true);
      await _utility_Api__WEBPACK_IMPORTED_MODULE_4__.ApiRequest.get({
        endpoint: 'ads',
        token: token,
        success: response => {
          console.log("ADS", response);
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleSuccess)(response);
          setLoadingAds(false);
          setAds(res.data);
        },
        failure: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleErrors)(response);
          setErrors(res);
          setLoadingAds(false);
        }
      });
    })();
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let impressions = 0;
    let clicks = 0;

    if (ads && ads.length > 0) {
      ads.forEach(ad => {
        impressions += ad.impressions;
        clicks += ad.clicks;
      });
    }

    setTotalImpressions(impressions);
    setTotalClicks(clicks);
  }, [ads]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Page__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Dashboard",
    active: "dashboard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ApiErrors__WEBPACK_IMPORTED_MODULE_7__["default"], {
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-6 col-lg-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8"
  }, "Total Slots"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex d-lg-block d-xl-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "tx-normal tx-rubik mg-b-0 mg-r-5 lh-1"
  }, loadingSlots ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: "#9d1e29",
    loading: loadingSlots,
    size: 10
  }) : slots && slots.length)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-6 col-lg-3 mg-t-10 mg-sm-t-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8"
  }, "Total Ads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex d-lg-block d-xl-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "tx-normal tx-rubik mg-b-0 mg-r-5 lh-1"
  }, loadingAds ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: "#9d1e29",
    loading: loadingAds,
    size: 10
  }) : ads && ads.length)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8"
  }, "Total Impressions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex d-lg-block d-xl-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "tx-normal tx-rubik mg-b-0 mg-r-5 lh-1"
  }, loadingAds ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: "#9d1e29",
    loading: loadingAds,
    size: 10
  }) : totalImpressions)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-6 col-lg-3 mg-t-10 mg-lg-t-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "tx-uppercase tx-11 tx-spacing-1 tx-color-02 tx-semibold mg-b-8"
  }, "Total Clicks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex d-lg-block d-xl-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "tx-normal tx-rubik mg-b-0 mg-r-5 lh-1"
  }, loadingAds ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: "#9d1e29",
    loading: loadingAds,
    size: 10
  }) : totalClicks)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6 col-xl-6 mg-t-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mg-b-0"
  }, "Ads")), loadingAds ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex align-items-center justify-content-center mg-t-10 mg-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: "#000",
    loading: loadingAds,
    size: 10
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush tx-13"
  }, ads && ads.slice(0, 3).map((ad, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: key,
      className: "list-group-item d-flex pd-sm-x-20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "avatar d-none d-sm-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: `avatar-initial rounded-circle ${ad.status === "Active" ? "bg-success" : ad.status === "Pending" ? "bg-warning" : "bg-danger"}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      className: "icon ion-md-checkmark"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pd-sm-l-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "tx-medium mg-b-0"
    }, ad.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
      className: "tx-12 tx-color-03 mg-b-0"
    }, ad.status === "Active" ? `Expires on ${ad.end}` : ad.status === "Pending" ? `Starts on ${ad.start}` : `Expired on ${ad.end}`)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mg-l-auto text-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "tx-medium mg-b-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
      to: `/ads/${ad.id}`,
      className: "link-03"
    }, "View")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
      className: `tx-12 mg-b-0 ${ad.status === "Active" ? "tx-success" : ad.status === "Pending" ? "tx-warning" : "tx-danger"}`
    }, ad.status)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-footer text-center tx-13"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "/ads",
    className: "link-03"
  }, "View All Ads ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "icon ion-md-arrow-down mg-l-5"
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-md-6 col-xl-6 mg-t-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
    className: "mg-b-0"
  }, "Slots")), loadingSlots ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex align-items-center justify-content-center mg-t-10 mg-b-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: "#000",
    loading: loadingSlots,
    size: 10
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "list-group list-group-flush tx-13"
  }, slots && slots.slice(0, 3).map((slot, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      key: key,
      className: "list-group-item d-flex pd-sm-x-20"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "avatar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "avatar-initial rounded-circle bg-primary"
    }, slot.name.charAt(0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "pd-l-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "tx-medium mg-b-0"
    }, slot.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
      className: "tx-12 tx-color-03 mg-b-0"
    }, slot.ads.length, " Ads")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "mg-l-auto d-flex align-self-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
      to: `/slots/${slot.id}`,
      className: "link-03"
    }, "Manage")));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-footer text-center tx-13"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
    to: "/slots",
    className: "link-03"
  }, "View All Slots ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
    className: "icon ion-md-arrow-down mg-l-5"
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
    // window.location.replace('/logout');
    return [];
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
//# sourceMappingURL=react_pages_Home_js.bundle.js.map