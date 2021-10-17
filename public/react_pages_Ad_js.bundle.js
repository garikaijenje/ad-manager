(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Ad_js"],{

/***/ "./react/pages/Ad.js":
/*!***************************!*\
  !*** ./react/pages/Ad.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Page */ "./react/layouts/Page.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Header */ "./react/layouts/Header.js");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Footer */ "./react/layouts/Footer.js");
/* harmony import */ var _utility_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/Api */ "./react/utility/Api.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal */ "./react/components/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_TextError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TextError */ "./react/components/TextError.js");
/* harmony import */ var _utility_Helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utility/Helpers */ "./react/utility/Helpers.js");
/* harmony import */ var _components_Forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Forms */ "./react/components/Forms.js");
















const Ad = ({
  match
}) => {
  const {
    token,
    logout,
    redirect,
    setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);
  const [ad, setAd] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch Ad
    (async () => {
      setLoading(true);
      _utility_Api__WEBPACK_IMPORTED_MODULE_4__.ApiRequest.get({
        endpoint: `ads/${match.params.id}`,
        token: token,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleSuccess)(response);
          setLoading(false);
          setAd(res.data);
        },
        failure: response => {
          setErrors((0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleErrors)(response));
          setLoading(false);
        }
      });
    })();
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Page__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13___default()), {
      color: "#9d1e29",
      loading: loading,
      size: 20
    }) : ad && ad.title,
    active: "ads"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-group mg-t-20 mg-sm-t-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    href: "#addAd",
    className: "btn btn-xs btn-success btn-uppercase",
    "data-toggle": "modal"
  }, "Add New Ad"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    href: "#updateAd",
    className: "btn btn-xs btn-warning btn-uppercase",
    "data-toggle": "modal"
  }, "Update Ad"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    href: "#deleteAd",
    className: "btn btn-xs btn-danger btn-uppercase",
    "data-toggle": "modal"
  }, "Delete Ad"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row row-xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-md-flex align-items-center justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "media align-sm-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "media-body mg-l-15"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "tx-20 tx-lg-28 tx-normal tx-rubik tx-spacing--2 lh-2 mg-b-0"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13___default()), {
    color: "#9d1e29",
    loading: loading,
    size: 10
  }) : ad && ad.status)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-flex flex-column flex-sm-row mg-t-20 mg-md-t-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "tx-12 tx-lg-14 tx-semibold tx-uppercase tx-spacing-1 mg-b-5"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13___default()), {
    color: "#9d1e29",
    loading: loading,
    size: 10
  }) : ad && (ad.status === "Active" ? `Expires on ${ad.end}` : ad.status === "Pending" ? `Starts on ${ad.start}` : `Expired on ${ad.end}`)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-9 mg-t-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card card-crypto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body pd-10 pd-sm-20"
  }, ad && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: `data:${ad.type};base64, ${ad.image}`,
    style: {
      maxWidth: '100%'
    }
  })), ad && ad.link && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-footer pd-20"
  }, "Link: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: ad.link
  }, ad.link)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-lg-3 mg-t-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h6", {
    className: "mg-b-0"
  }, "Statistics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-body pd-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "table-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-borderless tx-13 mg-b-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Impressions")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "text-right tx-rubik"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13___default()), {
    color: "#9d1e29",
    loading: loading,
    size: 10
  }) : ad && ad.impressions)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Clicks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
    className: "text-right tx-rubik"
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_13___default()), {
    color: "#9d1e29",
    loading: loading,
    size: 10
  }) : ad && ad.clicks))))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Forms__WEBPACK_IMPORTED_MODULE_12__["default"], {
    ad: ad
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ad);

/***/ }),

/***/ "?13bc":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=react_pages_Ad_js.bundle.js.map