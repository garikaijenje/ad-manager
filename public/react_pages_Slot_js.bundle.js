(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Slot_js"],{

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
  })) : ads && ads.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "You don't have any ads.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }, "Duration"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, ads && ads.map((ad, key) => {
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

/***/ "./react/pages/Slot.js":
/*!*****************************!*\
  !*** ./react/pages/Slot.js ***!
  \*****************************/
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
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-html-parser */ "./node_modules/react-html-parser/lib/index.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modal */ "./react/components/Modal.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _components_TextError__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TextError */ "./react/components/TextError.js");
/* harmony import */ var _utility_Helpers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utility/Helpers */ "./react/utility/Helpers.js");
/* harmony import */ var _components_AdsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/AdsTable */ "./react/components/AdsTable.js");
/* harmony import */ var _components_Forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Forms */ "./react/components/Forms.js");

















const Slots = ({
  match
}) => {
  const {
    token,
    logout,
    redirect,
    setToken,
    location
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);
  const [slot, setSlot] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch Slot
    (async () => {
      setLoading(true);
      _utility_Api__WEBPACK_IMPORTED_MODULE_4__.ApiRequest.get({
        endpoint: `slots/${match.params.id}`,
        token: token,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleSuccess)(response);
          setLoading(false);
          setSlot(res.data);
        },
        failure: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_4__.handleErrors)(response);
          setErrors(res);
          setLoading(false);
        }
      });
    })();
  }, []);
  const initialValues = {
    name: ""
  };
  const validationSchema = yup__WEBPACK_IMPORTED_MODULE_9__.object({
    name: yup__WEBPACK_IMPORTED_MODULE_9__.string().required('Slot name is required.').min(4, "Slot name is too short.")
  });

  const submitAddSlot = (values, {
    setSubmitting
  }) => {
    (async () => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    })();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Page__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_14___default()), {
      color: "#9d1e29",
      loading: loading,
      size: 20
    }) : slot && slot.name,
    active: "slots"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-group mg-t-20 mg-sm-t-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    href: "#addSlot",
    className: "btn btn-xs btn-success btn-uppercase",
    "data-toggle": "modal"
  }, "Add New Slot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    href: "#updateSlot",
    className: "btn btn-xs btn-warning btn-uppercase",
    "data-toggle": "modal"
  }, "Update Slot"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    href: "#deleteSlot",
    className: "btn btn-xs btn-danger btn-uppercase",
    "data-toggle": "modal"
  }, "Delete Slot"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-12"
  }, location.flash && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "alert alert-success mt-4",
    role: "alert"
  }, " ", location.flash, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_14___default()), {
    color: "#ff9c5b",
    loading: loading,
    size: 10
  }) : slot && (0,react_html_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(slot.code_slot)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_14___default()), {
    color: "#ff9c5b",
    loading: loading,
    size: 10
  }) : slot && (0,react_html_parser__WEBPACK_IMPORTED_MODULE_5__["default"])(slot.code_script)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_AdsTable__WEBPACK_IMPORTED_MODULE_12__["default"], {
    loading: loading,
    ads: slot ? slot.ads : [],
    slotColumn: false
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Forms__WEBPACK_IMPORTED_MODULE_13__["default"], {
    slot: slot
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slots);

/***/ }),

/***/ "?13bc":
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=react_pages_Slot_js.bundle.js.map