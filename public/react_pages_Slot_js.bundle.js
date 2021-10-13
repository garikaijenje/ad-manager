"use strict";
(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Slot_js"],{

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
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

/***/ "./react/pages/Slot.js":
/*!*****************************!*\
  !*** ./react/pages/Slot.js ***!
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
/* harmony import */ var _utility_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/Api */ "./react/utility/Api.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Config */ "./react/Config.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");









const Slots = ({
  match
}) => {
  const {
    token,
    logout,
    redirect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);
  const [slotID, setSlotID] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(match.params.id);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    let slot_id = match.params.id;
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
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Page__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Slot #" + slotID,
    active: "slots"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card mg-b-20 mg-lg-b-25"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header pd-y-15 pd-x-20 d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "tx-uppercase tx-semibold mg-b-0"
  }, "Place the following code where you want your ads to appear")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body pd-20 pd-lg-25"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bd bg-gray-50 pd-y-15 pd-x-15 pd-sm-x-20 codebox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mg-b-0 tx-14"
  }, "<div class='fumigationsolutionsads' data-ad-slot='1'></div>"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card mg-b-20 mg-lg-b-25"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header pd-y-15 pd-x-20 d-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "tx-uppercase tx-semibold mg-b-0"
  }, "Include the following script ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "only once"), " in your footer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body pd-20 pd-lg-25"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "bd bg-gray-50 pd-y-15 pd-x-15 pd-sm-x-20 codebox"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "mg-b-0 tx-14"
  }, "<script type='text/javascript' src='http://ad-management.local/load-ads.js'></script>"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-label": "Example",
    className: "df-example demo-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    id: "example1",
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-20p"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-25p"
  }, "Position"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-20p"
  }, "Office"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-15p"
  }, "Age"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-20p"
  }, "Salary"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    onClick: () => redirect('/slots/1')
  }, "Tiger Nixon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    onClick: () => redirect('/slots/1')
  }, "System Architect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    onClick: () => redirect('/slots/1')
  }, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    onClick: () => redirect('/slots/1')
  }, "61"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    onClick: () => redirect('/slots/1')
  }, "$320,800")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Garrett Winters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Accountant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "63"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$170,750")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Ashton Cox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Junior Technical Author"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "66"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$86,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Cedric Kelly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Senior Javascript Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$433,060")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Airi Satou"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Accountant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$162,700")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Brielle Williamson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Integration Specialist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "61"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$372,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Herrod Chandler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sales Assistant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "59"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$137,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Rhona Davidson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Integration Specialist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$327,900"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slots);

/***/ }),

/***/ "./react/utility/Api.js":
/*!******************************!*\
  !*** ./react/utility/Api.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiRequest": () => (/* binding */ ApiRequest),
/* harmony export */   "handleApiResponse": () => (/* binding */ handleApiResponse),
/* harmony export */   "handleApiError": () => (/* binding */ handleApiError)
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
const handleApiResponse = async response => {
  let result = {};

  if (response.status === 200) {
    result.status = "SUCCESS";
    result.data = await response.data;
  } else if (response.status === 400) {
    result.status = "FAIL";
    result.data = await response.data;
  } else {
    result.status = "FAIL";
    result.message = "Could not establish connection.";
  } // console.log(result)


  return result;
};
const handleApiError = error => {
  let result = {};

  if (error.response) {
    result.status = "FAIL";
    result.data = error.response.data;
  } else {
    result.status = "FAIL";
    result.message = error.message;
  }

  return result;
}; // Usage Example

const usageExample = () => {
  ApiRequest.post({
    endpoint: 'auth/login',
    // token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
    // contentType: 'application/json',
    data: {},
    success: response => {},
    failure: response => {}
  });
};

/***/ })

}]);
//# sourceMappingURL=react_pages_Slot_js.bundle.js.map