"use strict";
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 6658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4097);
/* harmony import */ var styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__);


function useIsMobile() {
    const isSmall = (0,styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__.useBreakpoint)((0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__.down)("sm"));
    return isSmall;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsMobile);


/***/ }),

/***/ 3176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ef": () => (/* binding */ useIsOnlyTablet),
/* harmony export */   "Ce": () => (/* binding */ useIsDesktop),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4097);
/* harmony import */ var styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6170);
/* harmony import */ var styled_breakpoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__);


function useIsTabletOrSmaller() {
    const isTabletOrSmaller = (0,styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__.useBreakpoint)((0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__.down)("md"));
    return isTabletOrSmaller;
}
function useIsOnlyTablet() {
    const isTabletOrSmaller = (0,styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__.useBreakpoint)((0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__.only)("md"));
    return isTabletOrSmaller;
}
function useIsDesktop() {
    const isDesktopOrLarger = (0,styled_breakpoints_react_styled__WEBPACK_IMPORTED_MODULE_0__.useBreakpoint)((0,styled_breakpoints__WEBPACK_IMPORTED_MODULE_1__.up)("lg"));
    return isDesktopOrLarger;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useIsTabletOrSmaller);


/***/ })

};
;