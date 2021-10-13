"use strict";
(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Slots_js"],{

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
/* harmony import */ var _utility_Api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utility/Api */ "./react/utility/Api.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Config */ "./react/Config.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");









const Slots = () => {
  const {
    token,
    logout,
    redirect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_6__.GlobalContext);
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
    title: "Slots",
    active: "slots"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
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
  }, "$320,800")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Garrett Winters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Accountant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "63"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$170,750")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Ashton Cox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Junior Technical Author"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "66"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$86,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Cedric Kelly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Senior Javascript Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$433,060")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Airi Satou"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Accountant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "33"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$162,700")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Brielle Williamson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Integration Specialist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "61"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$372,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Herrod Chandler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sales Assistant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "59"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$137,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Rhona Davidson"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Integration Specialist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "55"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$327,900")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Colleen Hurst"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Javascript Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "39"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$205,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sonya Frost"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$103,600")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Jena Gaines"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Office Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$90,560")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Quinn Flynn"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Support Lead"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$342,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Charde Marshall"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Regional Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "36"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$470,600")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Haley Kennedy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Senior Marketing Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$313,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tatyana Fitzpatrick"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Regional Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$385,750")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Michael Silva"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Marketing Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "66"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$198,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Paul Byrd"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Chief Financial Officer (CFO)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$725,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Gloria Little"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Systems Administrator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "59"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$237,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Bradley Greer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$132,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Dai Rios"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Personnel Lead"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$217,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Jenette Caldwell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Development Lead"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$345,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Yuri Berry"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Chief Marketing Officer (CMO)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$675,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Caesar Vance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Pre-Sales Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$106,450")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Doris Wilder"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sales Assistant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sidney"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "23"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$85,600")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Angelica Ramos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Chief Executive Officer (CEO)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$1,200,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Gavin Joyce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "42"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$92,575")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Jennifer Chang"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Regional Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Singapore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$357,650")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Brenden Wagner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "28"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$206,850")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Fiona Green"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Chief Operating Officer (COO)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "48"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$850,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Shou Itou"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Regional Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$163,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Michelle House"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Integration Specialist"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sidney"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$95,400")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Suki Burks"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "53"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$114,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Prescott Bartlett"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Technical Author"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$145,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Gavin Cortez"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Team Leader"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$235,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Martena Mccray"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Post-Sales support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$324,050")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Unity Butler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Marketing Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$85,675")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Howard Hatfield"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Office Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$164,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Hope Fuentes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Secretary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "41"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$109,850")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Vivian Harrell"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Financial Controller"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "62"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$452,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Timothy Mooney"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Office Manager"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$136,200")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Jackson Bradshaw"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "65"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$645,750")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Olivia Liang"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Support Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Singapore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$234,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Bruno Nash"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "38"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$163,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sakura Yamamoto"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Support Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Tokyo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "37"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$139,575")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Thor Walton"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "61"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$98,540")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Finn Camacho"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Support Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$87,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Serge Baldwin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Data Coordinator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Singapore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$138,575")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Zenaida Frank"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "63"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$125,250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Zorita Serrano"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Software Engineer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "56"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$115,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Jennifer Acosta"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Junior Javascript Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "43"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$75,650")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Cara Stevens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Sales Assistant"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "46"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$145,600")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Hermione Butler"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Regional Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "47"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$356,250")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Lael Greer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Systems Administrator"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "London"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "21"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$103,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Jonas Alexander"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "San Francisco"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$86,500")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Shad Decker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Regional Director"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Edinburgh"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "51"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$183,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Michael Bruce"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Javascript Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Singapore"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "29"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$183,000")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Donna Snider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "Customer Support"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "New York"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "27"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", null, "$112,000"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layouts_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
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
//# sourceMappingURL=react_pages_Slots_js.bundle.js.map