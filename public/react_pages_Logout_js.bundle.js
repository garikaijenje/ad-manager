"use strict";
(self["webpackChunkad_manager"] = self["webpackChunkad_manager"] || []).push([["react_pages_Logout_js"],{

/***/ "./react/pages/Logout.js":
/*!*******************************!*\
  !*** ./react/pages/Logout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _GlobalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GlobalContext */ "./react/GlobalContext.js");



const Logout = () => {
  const {
    redirect,
    setToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_GlobalContext__WEBPACK_IMPORTED_MODULE_1__.GlobalContext);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setToken('');
    redirect('/login', "Your session has expired.");
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    align: "center"
  }, "Your session has expired.");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logout);

/***/ })

}]);
//# sourceMappingURL=react_pages_Logout_js.bundle.js.map