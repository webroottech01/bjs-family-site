"use strict";
exports.id = 918;
exports.ids = [918];
exports.modules = {

/***/ 918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d_": () => (/* binding */ useSetNewsContent),
/* harmony export */   "Jb": () => (/* binding */ useSetNewsFilter),
/* harmony export */   "Vy": () => (/* binding */ useSetNewsPageIndex),
/* harmony export */   "S8": () => (/* binding */ useSetNewsSortFilter),
/* harmony export */   "Ng": () => (/* binding */ useNewsContent),
/* harmony export */   "P2": () => (/* binding */ useNewsFilter),
/* harmony export */   "oQ": () => (/* binding */ useNewsPageIndex),
/* harmony export */   "Wk": () => (/* binding */ useNewsSortFilter)
/* harmony export */ });
/* unused harmony exports useNewsContentState, useNewsFilterState */
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9755);
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_0__);



const NewsContent = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "KNewsContent",
    default: null
});
const NewsFilter = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "KNewsFilter",
    default: "all"
});
const NewsSortFilter = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "KNewsSortFilter",
    default: "latest"
});
const NewsPageIndex = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({
    key: "KNewsPageIndex",
    default: 1
});
function useNewsContent() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(NewsContent);
}
function useNewsContentState() {
    return useRecoilState(NewsContent);
}
function useSetNewsContent() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(NewsContent);
}
function useNewsFilter() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(NewsFilter);
}
function useNewsSortFilter() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(NewsSortFilter);
}
function useNewsFilterState() {
    return useRecoilState(NewsFilter);
}
function useSetNewsFilter() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(NewsFilter);
}
function useNewsPageIndex() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useRecoilValue)(NewsPageIndex);
}
function useNewsPageIndexState() {
    return useRecoilState(NewsPageIndex);
}
function useSetNewsPageIndex() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(NewsPageIndex);
}
function useSetNewsSortFilter() {
    return (0,recoil__WEBPACK_IMPORTED_MODULE_0__.useSetRecoilState)(NewsSortFilter);
}




/***/ })

};
;