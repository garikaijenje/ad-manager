"use strict";
(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Slots_js"],{

/***/ "./react/pages/Slots.js":
/*!******************************!*\
  !*** ./react/pages/Slots.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _layouts_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/Page */ "./react/layouts/Page.js");
/* harmony import */ var _layouts_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/Header */ "./react/layouts/Header.js");
/* harmony import */ var _layouts_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Footer */ "./react/layouts/Footer.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js");
/* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Config */ "./react/Config.js");
/* harmony import */ var _utility_Api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/Api */ "./react/utility/Api.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");
/* harmony import */ var _components_Forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Forms */ "./react/components/Forms.js");










const Slots = () => {
  const {
    token,
    redirect,
    location
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);
  const [slots, setSlots] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // Fetch Slots
    (async () => {
      setLoading(true);
      _utility_Api__WEBPACK_IMPORTED_MODULE_5__.ApiRequest.get({
        endpoint: 'slots',
        token: token,
        success: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_5__.handleSuccess)(response);
          setLoading(false);
          setSlots(res.data);
        },
        failure: response => {
          let res = (0,_utility_Api__WEBPACK_IMPORTED_MODULE_5__.handleErrors)(response);
          setErrors(res);
          setLoading(false);
        }
      });
    })();

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
  }, [slots]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Page__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Slots",
    active: "slots"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "card-header bd-b-0 pd-t-20 pd-lg-t-25 pd-l-20 pd-lg-l-25 d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "btn-group mg-t-20 mg-sm-t-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    href: "#addSlot",
    className: "btn btn-xs btn-success btn-uppercase",
    "data-toggle": "modal"
  }, "Add New Slot"))), location.flash && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "alert alert-success mt-4",
    role: "alert"
  }, " ", location.flash, " "), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: "#9d1e29",
    loading: loading,
    size: 20
  })) : slots.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "You don't ave any slots.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-label": "Example",
    className: "df-example demo-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    id: "example1",
    className: "table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-20p"
  }, "Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-25p"
  }, "No. of Ads"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-25p"
  }, "Total Impressions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    className: "wd-25p"
  }, "Total Clicks"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, slots.map((slot, key) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/slots/${slot.id}`)
    }, slot.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/slots/${slot.id}`)
    }, slot.total_ads), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/slots/${slot.id}`)
    }, slot.total_impressions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      onClick: () => redirect(`/slots/${slot.id}`)
    }, slot.total_clicks));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Forms__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slots);

/***/ })

}]);
//# sourceMappingURL=react_pages_Slots_js.bundle.js.map