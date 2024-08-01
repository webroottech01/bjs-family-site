"use strict";
(() => {
var exports = {};
exports.id = 9816;
exports.ids = [9816];
exports.modules = {

/***/ 6799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "useNewsContent": () => (/* binding */ useNewsContent),
  "useNewsContentState": () => (/* binding */ useNewsContentState),
  "useNewsFilter": () => (/* binding */ useNewsFilter),
  "useNewsFilterState": () => (/* binding */ useNewsFilterState),
  "useNewsPageIndex": () => (/* binding */ useNewsPageIndex),
  "useNewsSortFilter": () => (/* binding */ useNewsSortFilter),
  "useSetNewsContent": () => (/* binding */ useSetNewsContent),
  "useSetNewsFilter": () => (/* binding */ useSetNewsFilter),
  "useSetNewsPageIndex": () => (/* binding */ useSetNewsPageIndex),
  "useSetNewsSortFilter": () => (/* binding */ useSetNewsSortFilter)
});

;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
;// CONCATENATED MODULE: ./pages/api/store/newsStore.ts



const NewsContent = (0,external_recoil_namespaceObject.atom)({
    key: "KNewsContent",
    default: null
});
const NewsFilter = (0,external_recoil_namespaceObject.atom)({
    key: "KNewsFilter",
    default: "all"
});
const NewsSortFilter = (0,external_recoil_namespaceObject.atom)({
    key: "KNewsSortFilter",
    default: "latest"
});
const NewsPageIndex = (0,external_recoil_namespaceObject.atom)({
    key: "KNewsPageIndex",
    default: 1
});
function useNewsContent() {
    return (0,external_recoil_namespaceObject.useRecoilValue)(NewsContent);
}
function useNewsContentState() {
    return (0,external_recoil_namespaceObject.useRecoilState)(NewsContent);
}
function useSetNewsContent() {
    return (0,external_recoil_namespaceObject.useSetRecoilState)(NewsContent);
}
function useNewsFilter() {
    return (0,external_recoil_namespaceObject.useRecoilValue)(NewsFilter);
}
function useNewsSortFilter() {
    return (0,external_recoil_namespaceObject.useRecoilValue)(NewsSortFilter);
}
function useNewsFilterState() {
    return (0,external_recoil_namespaceObject.useRecoilState)(NewsFilter);
}
function useSetNewsFilter() {
    return (0,external_recoil_namespaceObject.useSetRecoilState)(NewsFilter);
}
function useNewsPageIndex() {
    return (0,external_recoil_namespaceObject.useRecoilValue)(NewsPageIndex);
}
function useNewsPageIndexState() {
    return useRecoilState(NewsPageIndex);
}
function useSetNewsPageIndex() {
    return (0,external_recoil_namespaceObject.useSetRecoilState)(NewsPageIndex);
}
function useSetNewsSortFilter() {
    return (0,external_recoil_namespaceObject.useSetRecoilState)(NewsSortFilter);
}




/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6799));
module.exports = __webpack_exports__;

})();