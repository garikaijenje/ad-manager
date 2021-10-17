"use strict";
(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Redirect_js"],{

/***/ "./react/pages/Redirect.js":
/*!*********************************!*\
  !*** ./react/pages/Redirect.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");




const Redirect = () => {
  const {
    redirect
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_1__.GlobalContext);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useLocation)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    redirect(location.finalDestination, location.flash);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    align: "center"
  }, "Redirecting...");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redirect);

/***/ })

}]);
//# sourceMappingURL=react_pages_Redirect_js.bundle.js.map